import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import TranslatedSolutionDetail from "@/components/react/TranslatedSolutionDetail";
import Footer from "@/components/react/Footer";
import {
  getAllIndustries,
  getSolutionsByIndustry,
} from "@/lib/solutionsData";
import { getTranslatedSolution } from "@/lib/translations";
import type { Language } from "@/components/react/types";
import type { Solution } from "@/lib/types";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  const industries = getAllIndustries();
  return LANGS.flatMap((lang) =>
    industries.flatMap((ind) =>
      getSolutionsByIndustry(ind.slug).map((sol) => ({
        lang,
        industry: ind.slug,
        solution: sol.slug,
      })),
    ),
  );
}

function findSolution(
  industry: string,
  solutionSlug: string,
): Solution | undefined {
  return getSolutionsByIndustry(industry).find((s) => s.slug === solutionSlug);
}

function getSeoData(solution: Solution, lang: string) {
  // Get Translated SEO Data
  const translated = getTranslatedSolution(solution.id, lang);
  const title =
    translated?.title ||
    (lang === "ar" && solution.arabicTitle
      ? solution.arabicTitle
      : solution.title);
  const description =
    translated?.description ||
    (lang === "ar" && solution.arabicDescription
      ? solution.arabicDescription
      : solution.shortDescription);
  const faqs =
    translated?.faqs ||
    (lang === "ar" && solution.arabicFaqs ? solution.arabicFaqs : solution.faqs);
  return { title, description, faqs };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; industry: string; solution: string }>;
}): Promise<Metadata> {
  const { lang, industry, solution: solutionSlug } = await params;
  const solution = findSolution(industry, solutionSlug);
  if (!solution) return {};
  const { title, description } = getSeoData(solution, lang);
  return buildMetadata({
    title: `${title} | HMZ Technology`,
    description,
    path: `/solutions/${industry}/${solution.slug}`,
    locale: lang,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ lang: string; industry: string; solution: string }>;
}) {
  const { lang, industry, solution: solutionSlug } = await params;
  const solution = findSolution(industry, solutionSlug);
  if (!solution) notFound();

  const { title, description, faqs } = getSeoData(solution, lang);

  // Schema Markup (Localized) — Service, no fabricated ratings
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.hmz.technology/${lang}/solutions/${industry}/${solution.slug}#service`,
    name: title,
    serviceType: solution.serviceType,
    description: description,
    provider: { "@id": "https://www.hmz.technology/#organization" },
    areaServed: [
      { "@type": "Country", name: "Lebanon" },
      { "@type": "AdministrativeArea", name: "Middle East" },
    ],
    inLanguage: lang,
    url: `https://www.hmz.technology/${lang}/solutions/${industry}/${solution.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f: { question: string; answer: string }) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const breadcrumbItems = [
    {
      name: lang === "ar" ? "الحلول" : "Solutions",
      item: `/${lang}/solutions`,
    },
    {
      name: solution.title,
      item: `/${lang}/solutions/${industry}/${solution.slug}`,
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.hmz.technology${item.item}`,
    })),
  };

  return (
    <div className="bg-[#030014] min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex list-none p-0 text-sm md:text-base text-gray-500 dark:text-gray-400">
            <li className="flex items-center">
              <a href="/" className="hover:text-blue-500 transition-colors">
                Home
              </a>
              <span className="mx-2">/</span>
            </li>
            {breadcrumbItems.map((item, index) => (
              <li key={item.item} className="flex items-center">
                {index === breadcrumbItems.length - 1 ? (
                  <span
                    className="font-bold text-gray-900 dark:text-white truncate max-w-[200px]"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <>
                    <a
                      href={item.item}
                      className="hover:text-blue-500 transition-colors"
                    >
                      {item.name}
                    </a>
                    <span className="mx-2">/</span>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Quick Answer Snippet for AEO/GEO */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <section className="bg-gradient-to-r from-cyan-500/10 to-purple-500/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold text-cyan-400">
              {lang === "ar"
                ? `ملخص الذكاء الاصطناعي: ${title}`
                : `AI Summary: ${title}`}
            </h2>
          </div>
          <p className="text-slate-300 leading-relaxed" id="aeo-summary">
            {description}{" "}
            {lang === "ar"
              ? "هذا الحل المتخصص من HMZ Technology يستخدم الذكاء الاصطناعي المتقدم لتحسين سير العمل في قطاعك. للتنفيذ المخصص أو الأسعار، تواصل معنا على +96170106083 أو sales@hmz.technology."
              : `This industry-specific solution by HMZ Technology leverages advanced AI to optimize workflows in your sector. For custom implementation or pricing, contact us at +96170106083 or sales@hmz.technology.`}
          </p>
        </section>
      </div>

      <TranslatedSolutionDetail
        solution={solution}
        lang={lang as Language}
        industrySlug={industry}
      />
      <Footer lang={lang} />
    </div>
  );
}
