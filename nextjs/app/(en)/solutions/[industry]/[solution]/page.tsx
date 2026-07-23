import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TranslatedSolutionDetail from "@/components/react/TranslatedSolutionDetail";
import Footer from "@/components/react/Footer";
import { getAllIndustries, getSolutionsByIndustry } from "@/lib/solutionsData";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllIndustries().flatMap((ind) =>
    getSolutionsByIndustry(ind.slug).map((sol) => ({
      industry: ind.slug,
      solution: sol.slug,
    }))
  );
}

function findSolution(industry: string, solutionSlug: string) {
  return getSolutionsByIndustry(industry).find((s) => s.slug === solutionSlug);
}

type PageProps = { params: Promise<{ industry: string; solution: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry, solution: solutionSlug } = await params;
  const solution = findSolution(industry, solutionSlug);
  if (!solution) return {};
  return buildMetadata({
    title: `${solution.title} | HMZ Technology`,
    description: solution.shortDescription,
    path: `/solutions/${industry}/${solution.slug}`,
    locale: "en",
  });
}

export default async function SolutionPage({ params }: PageProps) {
  const { industry, solution: solutionSlug } = await params;
  const solution = findSolution(industry, solutionSlug);
  if (!solution) notFound();

  // Capitalize industry for breadcrumb
  const industryName = industry.charAt(0).toUpperCase() + industry.slice(1);

  // Schema Markup — Service (2026: no fabricated ratings; entity-linked)
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.hmz.technology/solutions/${industry}/${solution.slug}#service`,
    name: solution.title,
    serviceType: solution.serviceType,
    description: solution.description,
    provider: { "@id": "https://www.hmz.technology/#organization" },
    areaServed: [
      { "@type": "Country", name: "Lebanon" },
      { "@type": "AdministrativeArea", name: "Middle East" },
    ],
    url: `https://www.hmz.technology/solutions/${industry}/${solution.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const breadcrumbItems = [
    { name: "Solutions", item: "/solutions" },
    { name: industryName, item: `/solutions/${industry}` },
    { name: solution.title, item: `/solutions/${industry}/${solution.slug}` },
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
                    <a href={item.item} className="hover:text-blue-500 transition-colors">
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
              AI Summary: {solution.title}
            </h2>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {solution.shortDescription || solution.description} This industry-specific
            solution by HMZ Technology leverages advanced AI to optimize workflows in
            the {industryName} sector. For custom implementation or pricing, contact us
            at +96170106083 or sales@hmz.technology.
          </p>
        </section>
      </div>

      <TranslatedSolutionDetail solution={solution} lang="en" industrySlug={industry} />
      <Footer lang="en" />
    </div>
  );
}
