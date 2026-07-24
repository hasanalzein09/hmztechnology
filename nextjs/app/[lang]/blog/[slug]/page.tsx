import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import { mdComponents } from "@/components/react/blogMarkdown";
import { getAllPosts, getPost } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

// Arabic blog only — other locales have no blog content
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts("ar").map((post) => ({ lang: "ar", slug: post.slug }));
}

type PageProps = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug, "ar");
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | HMZ Technology`,
    description: post.description,
    path: `/blog/${post.slug}`,
    locale: "ar",
    i18n: false, // Arabic blog is standalone
    type: "article",
    publishedTime: new Date(post.pubDate).toISOString(),
    keywords: post.tags,
  });
}

const formatDate = (date: Date) =>
  date.toLocaleDateString("ar-LB", { year: "numeric", month: "long", day: "numeric" });

export default async function ArabicBlogPostPage({ params }: PageProps) {
  const { lang, slug } = await params;
  if (lang !== "ar") notFound();
  const post = getPost(slug, "ar");
  if (!post) notFound();

  const site = "https://www.hmz.technology";
  const articleUrl = `${site}/ar/blog/${post.slug}`;
  const pubDate = new Date(post.pubDate);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: pubDate.toISOString(),
    dateModified: pubDate.toISOString(),
    inLanguage: "ar",
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Person",
      name: "Hasan El Zein",
      jobTitle: "Founder",
      worksFor: {
        "@type": "Organization",
        name: "HMZ Technology",
        url: site,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "HMZ Technology",
      url: site,
      logo: {
        "@type": "ImageObject",
        url: `${site}/favicon.svg`,
      },
    },
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${site}/ar/` },
      { "@type": "ListItem", position: 2, name: "المدونة", item: `${site}/ar/blog/` },
      { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
    ],
  };

  return (
    <>
      <Header lang="ar" />
      <main className="relative min-h-screen bg-[#030014] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
        </div>

        <article className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/40">
              <li>
                <a href="/ar" className="hover:text-cyan-400 transition-colors">
                  الرئيسية
                </a>
              </li>
              <li aria-hidden="true" className="text-white/20">
                /
              </li>
              <li>
                <a href="/ar/blog" className="hover:text-cyan-400 transition-colors">
                  المدونة
                </a>
              </li>
              <li aria-hidden="true" className="text-white/20">
                /
              </li>
              <li
                className="text-white/70 truncate max-w-[200px] sm:max-w-none"
                aria-current="page"
              >
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold border text-cyan-400 bg-cyan-500/10 border-cyan-500/20">
                {post.category.replace("-", " ")}
              </span>
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs text-white/40 bg-white/5 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              {post.description}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/40 pb-8 border-b border-white/10">
              <span className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                  HZ
                </span>
                <span className="text-white/70">حسن الزين، المؤسس</span>
              </span>
              <span>
                نُشر:{" "}
                <time dateTime={pubDate.toISOString()}>{formatDate(pubDate)}</time>
              </span>
              <span>
                آخر تحديث:{" "}
                <time dateTime={pubDate.toISOString()} className="text-cyan-400/80">
                  {formatDate(pubDate)}
                </time>
              </span>
            </div>
          </header>

          {/* Article Content */}
          <div className="text-gray-300 text-[1.0625rem] leading-[1.8]">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Author Footer */}
          <footer className="mt-16 glass-card-ai p-8">
            <div className="flex items-start gap-4">
              <span className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-lg font-bold text-white">
                HZ
              </span>
              <div>
                <p className="text-white font-semibold mb-1">حسن الزين</p>
                <p className="text-white/50 text-sm leading-relaxed mb-3">
                  مؤسس HMZ Technology — وكالة ذكاء اصطناعي تبني روبوتات محادثة،
                  وكلاء صوتيين، وأنظمة أعمال ذاتية للشركات في الشرق الأوسط وأوروبا
                  وأميركا الشمالية.
                </p>
                <a
                  href="/ar/contact"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                >
                  احجز استشارة مجانية ←
                </a>
              </div>
            </div>
          </footer>
        </article>
      </main>
      <Footer lang="ar" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
