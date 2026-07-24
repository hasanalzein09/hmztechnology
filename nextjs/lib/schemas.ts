// ─── Shared JSON-LD schema builders ───
import { BASE_URL, localePath } from "./seo";
import { SITE_NAME } from "./contact";
import type { Project } from "./projectsData";

/** Absolute URL for a locale-neutral path (trailing slash, matches trailingSlash: true). */
export function absUrl(path: string, locale: string): string {
  const p = localePath(path, locale);
  return `${BASE_URL}${p === "/" ? "/" : `${p}/`}`;
}

/** BreadcrumbList JSON-LD. items are locale-neutral paths, e.g. [{name:"Home",path:"/"},{name:"Services",path:"/services"}] */
export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  locale: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absUrl(it.path, locale),
    })),
  };
}

/** Case-study JSON-LD for a project detail page. */
export function projectJsonLd(p: Project, locale: string) {
  const url = absUrl(`/projects/${p.slug}`, locale);
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#casestudy`,
    name: p.title,
    headline: p.title,
    description: p.description,
    url,
    inLanguage: locale,
    about: { "@type": "Thing", name: p.industry },
    creator: { "@id": `${BASE_URL}/#organization` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    isPartOf: { "@id": `${BASE_URL}/#website` },
    keywords: [p.industry, p.serviceType, ...p.techStack].join(", "),
  };
}

/** ItemList JSON-LD for the projects index page. */
export function projectsIndexJsonLd(projects: Project[], locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absUrl("/projects", locale)}#collection`,
    name: `${SITE_NAME} Projects`,
    url: absUrl("/projects", locale),
    inLanguage: locale,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absUrl(`/projects/${p.slug}`, locale),
        name: p.title,
      })),
    },
  };
}
