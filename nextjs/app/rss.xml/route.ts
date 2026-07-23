import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE = "https://www.hmz.technology";

function escapeXml(s: string): string {
  return s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]!));
}

export function GET() {
  const posts = getAllPosts();
  const items = posts
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${BASE}/blog/${p.slug}/</link>
      <guid>${BASE}/blog/${p.slug}/</guid>
      <pubDate>${new Date(p.pubDate).toUTCString()}</pubDate>
      <description>${escapeXml(p.description)}</description>
      <author>${escapeXml(p.author)}</author>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>HMZ Technology — AI Blog</title>
    <link>${BASE}/blog/</link>
    <description>Answer-first guides on AI chatbots, AI agents, voice AI, GEO, and the 2026-2050 AI roadmap.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
