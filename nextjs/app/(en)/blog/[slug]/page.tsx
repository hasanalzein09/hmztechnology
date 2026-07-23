import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import { getAllPosts, getPost } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | HMZ Technology`,
    description: post.description,
    path: `/blog/${post.slug}`,
    locale: "en",
  });
}

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

/**
 * Dark-prose styling, translated from the Astro version's scoped `.prose-dark`
 * CSS into a react-markdown components map (identical visual result).
 */
const mdComponents: Components = {
  h2: ({ children }) => (
    <h2 className="text-white text-[1.75rem] font-bold leading-[1.3] mt-12 mb-5 pt-6 border-t border-white/[0.06] first:border-t-0 first:pt-0 first:mt-0 before:content-[''] before:block before:w-12 before:h-[3px] before:mb-4 before:rounded-[2px] before:bg-gradient-to-r before:from-cyan-400 before:to-purple-500">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-cyan-300 text-[1.3rem] font-semibold leading-[1.4] mt-9 mb-4">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-cyan-200 text-[1.1rem] font-semibold mt-7 mb-3">{children}</h4>
  ),
  p: ({ children }) => <p className="my-5">{children}</p>,
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-cyan-400 underline decoration-cyan-400/35 underline-offset-[3px] transition-[color,text-decoration-color] duration-200 hover:text-cyan-200 hover:decoration-cyan-200"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="my-5 pl-6 list-none [&>li]:relative [&>li]:pl-4 [&>li]:before:content-[''] [&>li]:before:absolute [&>li]:before:-left-3 [&>li]:before:top-[0.7em] [&>li]:before:w-1.5 [&>li]:before:h-1.5 [&>li]:before:rounded-full [&>li]:before:bg-gradient-to-br [&>li]:before:from-cyan-400 [&>li]:before:to-purple-500">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 pl-6 list-decimal [&>li]:marker:text-cyan-400 [&>li]:marker:font-semibold">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="my-2">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-8 py-5 px-6 border-l-[3px] border-l-cyan-400 bg-cyan-400/5 rounded-r-xl text-gray-200 italic [&_p]:my-2">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => (
    <code
      className={`text-cyan-300 bg-cyan-400/[0.08] border border-cyan-400/15 px-1.5 py-[0.15rem] rounded-md text-[0.875em]${className ? ` ${className}` : ""}`}
    >
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-white/[0.03] border border-white/[0.08] rounded-xl py-5 px-6 overflow-x-auto my-7 [&_code]:bg-transparent [&_code]:border-0 [&_code]:p-0 [&_code]:text-gray-300">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <table className="w-full border-separate border-spacing-0 my-8 text-[0.9375rem] border border-white/[0.08] rounded-xl overflow-hidden">
      {children}
    </table>
  ),
  th: ({ children }) => (
    <th className="bg-cyan-400/[0.08] text-cyan-300 font-semibold text-left py-3.5 px-4 border-b border-white/10">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="py-3 px-4 border-b border-white/5 text-gray-300">{children}</td>
  ),
  tbody: ({ children }) => (
    <tbody className="[&_tr:last-child_td]:border-b-0 [&_tr:hover]:bg-white/[0.02]">
      {children}
    </tbody>
  ),
  hr: () => (
    <hr className="border-none h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent my-12" />
  ),
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ""}
      className="rounded-xl border border-white/[0.08] my-8"
    />
  ),
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const site = "https://www.hmz.technology";
  const articleUrl = `${site}/blog/${post.slug}`;
  const pubDate = new Date(post.pubDate);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: pubDate.toISOString(),
    dateModified: pubDate.toISOString(),
    inLanguage: "en",
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
      { "@type": "ListItem", position: 1, name: "Home", item: site },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site}/blog/` },
      { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
    ],
  };

  return (
    <>
      <Header lang="en" />
      <main className="relative min-h-screen bg-[#030014] overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
        </div>

        <article className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/40">
              <li>
                <a href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true" className="text-white/20">
                /
              </li>
              <li>
                <a href="/blog" className="hover:text-cyan-400 transition-colors">
                  Blog
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
              <span className="px-3 py-1 rounded-full text-xs font-semibold border capitalize text-cyan-400 bg-cyan-500/10 border-cyan-500/20">
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
                <span className="text-white/70">Hasan El Zein, Founder</span>
              </span>
              <span>
                Published:{" "}
                <time dateTime={pubDate.toISOString()}>{formatDate(pubDate)}</time>
              </span>
              <span>
                Last updated:{" "}
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
                <p className="text-white font-semibold mb-1">Hasan El Zein</p>
                <p className="text-white/50 text-sm leading-relaxed mb-3">
                  Founder of HMZ Technology — an AI agency building chatbots, voice
                  agents, and autonomous business systems for companies across the
                  Middle East, Europe, and North America.
                </p>
                <a
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                >
                  Book a free consultation →
                </a>
              </div>
            </div>
          </footer>
        </article>
      </main>
      <Footer lang="en" />
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
