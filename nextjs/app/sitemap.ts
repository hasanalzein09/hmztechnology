import type { MetadataRoute } from "next";
import { servicesData } from "@/lib/servicesData";
import { servicesData2026 } from "@/lib/servicesData2026";
import { getAllIndustries, getSolutionsByIndustry } from "@/lib/solutionsData";
import { marketsData } from "@/lib/marketsData";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE = "https://www.hmz.technology";
const LOCALES = ["en", "ar", "de", "fr", "it", "hi", "ms"] as const;

function alternatesFor(path: string): Record<string, string> {
  const p = path === "/" ? "" : path;
  const langs: Record<string, string> = {};
  for (const l of LOCALES) langs[l] = l === "en" ? `${BASE}${p || "/"}` : `${BASE}/${l}${p}`;
  langs["x-default"] = `${BASE}${p || "/"}`;
  return langs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Multilingual core pages (7 locales each)
  const i18nPaths = ["/", "/about", "/contact", "/faq", "/services", "/solutions", "/projects", "/privacy-policy", "/terms-of-service"];
  for (const p of i18nPaths) {
    entries.push({
      url: p === "/" ? `${BASE}/` : `${BASE}${p}/`,
      lastModified: now,
      priority: p === "/" ? 1 : 0.8,
      alternates: { languages: alternatesFor(p) },
    });
  }

  // Services (7 locales)
  const serviceIds = [...Object.keys(servicesData), ...Object.keys(servicesData2026)];
  for (const id of serviceIds) {
    entries.push({
      url: `${BASE}/services/${id}/`,
      lastModified: now,
      priority: 0.8,
      alternates: { languages: alternatesFor(`/services/${id}`) },
    });
  }

  // Solutions: industries + individual solutions (7 locales)
  const industries = getAllIndustries();
  for (const ind of industries) {
    entries.push({
      url: `${BASE}/solutions/${ind.slug}/`,
      lastModified: now,
      priority: 0.7,
      alternates: { languages: alternatesFor(`/solutions/${ind.slug}`) },
    });
  }
  const allSolutions = industries.flatMap((ind) => getSolutionsByIndustry(ind.slug));
  for (const s of allSolutions) {
    entries.push({
      url: `${BASE}/solutions/${s.industrySlug}/${s.slug}/`,
      lastModified: now,
      priority: 0.6,
      alternates: { languages: alternatesFor(`/solutions/${s.industrySlug}/${s.slug}`) },
    });
  }

  // Projects (7 locales) — 3 case studies per language, use en slugs
  const projectSlugs = ["clinic-whatsapp-bot", "ecommerce-instagram", "restaurant-ordering"];
  for (const slug of projectSlugs) {
    entries.push({
      url: `${BASE}/projects/${slug}/`,
      lastModified: now,
      priority: 0.6,
      alternates: { languages: alternatesFor(`/projects/${slug}`) },
    });
  }

  // English-only: markets + blog
  for (const slug of Object.keys(marketsData)) {
    entries.push({ url: `${BASE}/${slug}/`, lastModified: now, priority: 0.7 });
  }
  entries.push({ url: `${BASE}/blog/`, lastModified: now, priority: 0.7 });
  for (const post of getAllPosts()) {
    entries.push({
      url: `${BASE}/blog/${post.slug}/`,
      lastModified: new Date(post.pubDate),
      priority: 0.6,
    });
  }

  return entries;
}
