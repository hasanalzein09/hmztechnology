import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const AI_BOTS = [
  "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "Perplexity-User",
  "Claude-SearchBot", "Claude-User", "GPTBot", "ClaudeBot", "Google-Extended",
  "Applebot-Extended", "Meta-ExternalAgent", "CCBot", "cohere-ai",
  "Bytespider", "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // AI search & training bots: explicitly welcomed (GEO 2026)
      ...AI_BOTS.map((bot) => ({ userAgent: bot, allow: "/" })),
      { userAgent: "*", allow: "/", disallow: ["/api/", "/*?utm_", "/*?fbclid", "/*?gclid"] },
    ],
    sitemap: "https://www.hmz.technology/sitemap.xml",
  };
}
