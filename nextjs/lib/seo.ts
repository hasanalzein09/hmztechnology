// ─── SEO constants & helpers (single source of truth) ───
import type { Metadata } from "next";

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

/** Build full Metadata with canonical + hreflang cluster + OG for any page. */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string; // locale-neutral, e.g. "/services/ai-voice-agents" or "/"
  locale: string;
}): Metadata {
  const { title, description, path, locale } = opts;
  const canonical = `${BASE_URL}${localePath(path, locale)}`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `${BASE_URL}${localePath(path, l)}`;
  languages["x-default"] = `${BASE_URL}${localePath(path, "en")}`;

  return {
    title,
    description,
    alternates: { canonical, languages },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: "HMZ Technology",
      locale: OG_LOCALE[locale] ?? "en_US",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
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
      name: "HMZ Technology",
      alternateName: "HMZ AI Agency",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 },
      image: `${BASE_URL}/og-image.png`,
      description:
        "AI agency building production-grade AI systems: WhatsApp/Instagram AI chatbots, AI voice agents, RAG knowledge assistants, AI sales agents, custom AI agents, MCP integrations, business process automation, and Generative Engine Optimization (GEO). Serving Lebanon, the Middle East, and worldwide in 7 languages.",
      foundingDate: "2023",
      founder: { "@id": `${BASE_URL}/#founder` },
      address: { "@type": "PostalAddress", addressLocality: "Beirut", addressCountry: "LB" },
      contactPoint: [
        { "@type": "ContactPoint", telephone: "+96170106083", contactType: "sales", email: "sales@hmz.technology", availableLanguage: ["English", "Arabic", "French", "German", "Italian", "Hindi", "Malay"] },
        { "@type": "ContactPoint", telephone: "+96170106083", contactType: "technical support", availableLanguage: ["English", "Arabic"] },
      ],
      sameAs: [
        "https://www.linkedin.com/company/hmz-technology",
        "https://twitter.com/hmztechnology",
        "https://www.instagram.com/hmz.technology",
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
