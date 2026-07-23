import type { Metadata } from "next";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

const title =
  "Blog - HMZ Technology | AI Automation Insights, GEO Guides & Industry Research";
const description =
  "Expert insights on AI automation, Generative Engine Optimization (GEO), AI agents, voice AI, and the future of autonomous business. Research-backed guides from HMZ Technology.";

const categoryColors: Record<string, string> = {
  automation: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  ai: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  chatbots: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  business: "text-green-400 bg-green-500/10 border-green-500/20",
  "case-study": "text-amber-400 bg-amber-500/10 border-amber-500/20",
  guide: "text-blue-400 bg-blue-500/10 border-blue-500/20",
};

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title,
    description,
    path: "/blog",
    locale: "en",
    i18n: false, // blog is English-only
    keywords: ["AI blog", "GEO guide", "AI agents", "WhatsApp automation", "AI for business"],
  });
}

export default function BlogPage() {
  const posts = getAllPosts(); // already sorted by pubDate desc

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "HMZ Technology Blog",
    description: description,
    url: "https://www.hmz.technology/blog/",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "HMZ Technology",
      url: "https://www.hmz.technology",
    },
    about: {
      "@type": "Organization",
      name: "HMZ Technology",
      url: "https://www.hmz.technology",
    },
  };

  return (
    <>
      <Header lang="en" />
      <main className="relative min-h-screen bg-[#030014] overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-6">
              Insights &amp; Research
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              The <span className="text-gradient-ai">HMZ</span> Blog
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Research-backed guides on AI automation, Generative Engine Optimization,
              AI agents, and the future of autonomous business — written for
              decision-makers.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const pubDate = new Date(post.pubDate);
              return (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass-card-ai group flex flex-col overflow-hidden no-underline"
                >
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border capitalize ${
                          categoryColors[post.category] ??
                          "text-white/70 bg-white/5 border-white/10"
                        }`}
                      >
                        {post.category.replace("-", " ")}
                      </span>
                      {post.featured && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20">
                          Featured
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-white/40 pt-4 border-t border-white/5">
                      <span>{post.author}</span>
                      <time dateTime={pubDate.toISOString()}>{formatDate(pubDate)}</time>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </main>
      <Footer lang="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
    </>
  );
}
