// ─── SEO constants & helpers (single source of truth) ───
import type { Metadata } from "next";
import { SITE_NAME, WHATSAPP_NUMBER, WHATSAPP_LINK, EMAIL, SOCIAL } from "./contact";

export const BASE_URL = "https://www.hmz.technology";
export const LOCALES = ["en", "ar", "de", "fr", "it", "hi", "ms"] as const;
export type Locale = (typeof LOCALES)[number];

const OG_LOCALE: Record<string, string> = {
  en: "en_US", ar: "ar_AR", de: "de_DE", fr: "fr_FR",
  it: "it_IT", hi: "hi_IN", ms: "ms_MY",
};

/** Locale-prefixed path helper: en → /x, others → /{locale}/x */
export function localePath(path: string, locale: string): string {
  const p = path === "/" ? "" : path.replace(/\/$/, "");
  return locale === "en" ? p || "/" : `/${locale}${p}` || `/${locale}`;
}

/** Trim a description to ≤155 chars at a word boundary (SERP-safe). */
function trimDescription(s: string): string {
  if (s.length <= 155) return s;
  const cut = s.slice(0, 155);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : 155).replace(/[.,;:!?،؛]$/, "")}…`;
}

/** Build full Metadata with canonical + hreflang cluster + OG for any page. */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string; // locale-neutral, e.g. "/services/ai-voice-agents" or "/"
  locale: string;
  /** true (default) = emit 7-locale hreflang cluster; false = English-only page */
  i18n?: boolean;
  /** page-level search keywords (harmless; used by some engines/directories) */
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const { title, description: rawDescription, path, locale } = opts;
  const description = trimDescription(rawDescription);
  const canonical = `${BASE_URL}${localePath(path, locale)}`;
  const i18n = opts.i18n !== false;
  const languages: Record<string, string> | undefined = i18n
    ? Object.fromEntries([
        ...LOCALES.map((l) => [l, `${BASE_URL}${localePath(path, l)}`]),
        ["x-default", `${BASE_URL}${localePath(path, "en")}`],
      ])
    : undefined;

  return {
    title,
    description,
    keywords: opts.keywords,
    alternates: { canonical, languages },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      type: opts.type ?? "website",
      url: canonical,
      title,
      description,
      siteName: "HMZ Technology",
      locale: OG_LOCALE[locale] ?? "en_US",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      ...(opts.type === "article"
        ? { publishedTime: opts.publishedTime, modifiedTime: opts.modifiedTime ?? opts.publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: "@hmztechnology",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

/** Organization entity @graph — rendered once in the root layout. */
export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${BASE_URL}/#organization`,
      alternateName: "HMZ AI Agency",
      name: SITE_NAME,
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 },
      image: `${BASE_URL}/og-image.png`,
      description:
        "AI agency building production-grade AI systems: WhatsApp/Instagram AI chatbots, AI voice agents, RAG knowledge assistants, AI sales agents, custom AI agents, MCP integrations, business process automation, and Generative Engine Optimization (GEO). Serving Lebanon, the Middle East, and worldwide in 7 languages.",
      foundingDate: "2023",
      founder: { "@id": `${BASE_URL}/#founder` },
      address: { "@type": "PostalAddress", addressLocality: "Beirut", addressCountry: "LB" },
      contactPoint: [
        { "@type": "ContactPoint", telephone: WHATSAPP_NUMBER, contactType: "sales", email: EMAIL, availableLanguage: ["English", "Arabic", "French", "German", "Italian", "Hindi", "Malay"] },
        { "@type": "ContactPoint", telephone: WHATSAPP_NUMBER, contactType: "technical support", availableLanguage: ["English", "Arabic"] },
        // WhatsApp is our primary contact channel — explicit so engines & LLMs cite it
        { "@type": "ContactPoint", telephone: WHATSAPP_NUMBER, contactType: "customer service", contactOption: "TollFree", url: WHATSAPP_LINK, name: "WhatsApp", availableLanguage: ["English", "Arabic", "French", "German", "Italian", "Hindi", "Malay"] },
      ],
      sameAs: [
        SOCIAL.linkedin,
        SOCIAL.twitter,
        SOCIAL.instagram,
        WHATSAPP_LINK,
      ],
      knowsAbout: [
        "Artificial Intelligence", "AI Chatbots", "AI Agents", "AI Voice Agents",
        "Retrieval-Augmented Generation (RAG)", "AI Sales Development (AI SDR)",
        "Model Context Protocol (MCP)", "Multi-Agent Systems", "Business Process Automation",
        "Generative Engine Optimization", "Answer Engine Optimization", "Natural Language Processing",
        "WhatsApp Business API", "Machine Learning Integration", "AI Security and Governance",
      ],
      areaServed: [
        { "@type": "Country", name: "Lebanon" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "AdministrativeArea", name: "Middle East" },
        { "@type": "AdministrativeArea", name: "Worldwide" },
      ],
      slogan: "Production AI systems, not demos.",
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#founder`,
      name: "Hasan El Zein",
      jobTitle: "Founder & AI Engineer",
      worksFor: { "@id": `${BASE_URL}/#organization` },
      knowsAbout: ["Artificial Intelligence", "AI Chatbots", "AI Agents", "Generative Engine Optimization", "Business Automation", "Web Development"],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "HMZ Technology",
      description: "AI agency for chatbots, voice agents, AI automation, and Generative Engine Optimization.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: [...LOCALES],
    },
  ],
};
