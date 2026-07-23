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

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
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

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
