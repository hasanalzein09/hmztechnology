// Blog content loader — parses markdown files at build time (static export safe)
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  image?: string;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** Blog content is organized as content/blog/*.md (en) and content/blog/<locale>/*.md */
function blogDirFor(locale: string): string {
  return locale === "en" ? BLOG_DIR : path.join(BLOG_DIR, locale);
}

export function getAllPosts(locale = "en"): BlogPost[] {
  const dir = blogDirFor(locale);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title ?? "",
      description: data.description ?? "",
      pubDate: data.pubDate instanceof Date ? data.pubDate.toISOString() : String(data.pubDate ?? ""),
      author: data.author ?? "HMZ Technology Team",
      category: data.category ?? "ai",
      tags: Array.isArray(data.tags) ? data.tags : [],
      featured: Boolean(data.featured),
      image: data.image,
      content,
    };
  });
  return posts.sort((a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf());
}

export function getPost(slug: string, locale = "en"): BlogPost | undefined {
  return getAllPosts(locale).find((p) => p.slug === slug);
}

/** Locales that have at least one blog post (used by sitemap & routing). */
export function getBlogLocales(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return ["en"];
  const locales = fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && getAllPosts(d.name).length > 0)
    .map((d) => d.name);
  return ["en", ...locales];
}
