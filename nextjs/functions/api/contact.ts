/**
 * Cloudflare Pages Function — POST /api/contact
 * Runs on the Workers runtime (static export can't host POST route handlers).
 * Env (Pages project settings): RESEND_API_KEY, ADMIN_EMAIL, FROM_EMAIL
 */
interface Env {
  RESEND_API_KEY: string;
  ADMIN_EMAIL?: string;
  FROM_EMAIL?: string;
}

interface PagesContext<E> {
  request: Request;
  env: E;
}

const rateMap = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_REQ = 5;

export const onRequestPost = async (context: PagesContext<Env>) => {
  const { request, env } = context;

  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  const now = Date.now();
  const hits = (rateMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= MAX_REQ) {
    return Response.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }
  hits.push(now);
  rateMap.set(ip, hits);

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot
  if (body.website) return Response.json({ ok: true });

  const { name, email, message, phone, service } = body;
  if (!name || !email || !message) {
    return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL ?? "HMZ Website <contact@hmz.technology>",
      to: [env.ADMIN_EMAIL ?? "sales@hmz.technology"],
      reply_to: email,
      subject: `New inquiry: ${name}${service ? ` — ${service}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? "-"}\nService: ${service ?? "-"}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    return Response.json({ ok: false, error: "Email failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
};
