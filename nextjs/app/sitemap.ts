import type { MetadataRoute } from "next";
import { servicesData } from "@/lib/servicesData";
import { servicesData2026 } from "@/lib/servicesData2026";
import { getAllIndustries, getSolutionsByIndustry } from "@/lib/solutionsData";
import { marketsData } from "@/lib/marketsData";
import { getAllPosts } from "@/lib/blog";
import { projectsData } from "@/lib/projectsData";
import { BASE_URL, LOCALES, localePath } from "@/lib/seo";

export const dynamic = "force-static";

/** Absolute URL with trailing slash (matches trailingSlash: true). */
function abs(path: string): string {
  return `${BASE_URL}${path === "/" ? "/" : `${path}/`}`;
}

/** Full 7-locale hreflang cluster for a locale-neutral path. */
function alternatesFor(path: string): Record<string, string> {
  const langs: Record<string, string> = {};
  for (const l of LOCALES) langs[l] = abs(localePath(path, l));
  langs["x-default"] = abs(localePath(path, "en"));
  return langs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  // Stable truthful date (matches this content release; blog posts use real pubDates)
  const now = new Date("2026-07-23");

  /**
   * Unified sitemap: every localized URL gets its own explicit <url> entry
   * (not just the English canonical), each carrying the full hreflang
   * alternates cluster. One sitemap covering 100% of the site's pages.
   */
  const pushI18n = (path: string, priority: number, lastModified: Date = now) => {
    const languages = alternatesFor(path);
    for (const l of LOCALES) {
      entries.push({
        url: abs(localePath(path, l)),
        lastModified,
        priority,
        alternates: { languages },
      });
    }
  };

  // Multilingual core pages (7 locales each)
  const i18nPaths = ["/", "/about", "/contact", "/faq", "/services", "/solutions", "/projects", "/privacy-policy", "/terms-of-service"];
  for (const p of i18nPaths) {
    pushI18n(p, p === "/" ? 1 : 0.8);
  }

  // Services (7 locales)
  const serviceIds = [...Object.keys(servicesData), ...Object.keys(servicesData2026)];
  for (const id of serviceIds) {
    pushI18n(`/services/${id}`, 0.8);
  }

  // Solutions: industries + individual solutions (7 locales)
  const industries = getAllIndustries();
  for (const ind of industries) {
    pushI18n(`/solutions/${ind.slug}`, 0.7);
  }
  const allSolutions = industries.flatMap((ind) => getSolutionsByIndustry(ind.slug));
  for (const s of allSolutions) {
    pushI18n(`/solutions/${s.industrySlug}/${s.slug}`, 0.6);
  }

  // Projects (7 locales) — real slugs from data
  const projectSlugs = projectsData.en.projects.map((p) => p.slug);
  for (const slug of projectSlugs) {
    pushI18n(`/projects/${slug}`, 0.6);
  }

  // English-only: markets + blog (no hreflang — pages exist in English only)
  for (const slug of Object.keys(marketsData)) {
    entries.push({ url: `${BASE_URL}/${slug}/`, lastModified: now, priority: 0.7 });
  }
  entries.push({ url: `${BASE_URL}/blog/`, lastModified: now, priority: 0.7 });
  for (const post of getAllPosts()) {
    entries.push({
      url: `${BASE_URL}/blog/${post.slug}/`,
      lastModified: new Date(post.pubDate),
      priority: 0.6,
    });
  }

  // Arabic blog (standalone Arabic-only section)
  const arPosts = getAllPosts("ar");
  if (arPosts.length) {
    entries.push({ url: `${BASE_URL}/ar/blog/`, lastModified: now, priority: 0.7 });
    for (const post of arPosts) {
      entries.push({
        url: `${BASE_URL}/ar/blog/${post.slug}/`,
        lastModified: new Date(post.pubDate),
        priority: 0.6,
      });
    }
  }

  return entries;
}
