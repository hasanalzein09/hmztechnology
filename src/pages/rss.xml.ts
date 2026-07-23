import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  const posts = blog.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return rss({
    title: "HMZ Technology — AI Blog",
    description:
      "Answer-first guides on AI chatbots, AI agents, voice AI, GEO, and the 2026-2050 AI roadmap — from HMZ Technology, the AI agency for MENA & the world.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      author: post.data.author,
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
