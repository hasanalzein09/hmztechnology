import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TranslatedIndustryPage from "@/components/react/TranslatedIndustryPage";
import Footer from "@/components/react/Footer";
import { getAllIndustries, getSolutionsByIndustry } from "@/lib/solutionsData";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllIndustries().map((ind) => ({ industry: ind.slug }));
}

type PageProps = { params: Promise<{ industry: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;
  // Basic capitalization for title
  const industryName = industry.charAt(0).toUpperCase() + industry.slice(1);
  return buildMetadata({
    title: `${industryName} Solutions | HMZ Technology`,
    description: `Explore our tailored solutions for the ${industryName} industry. Proven ROI and rapid implementation.`,
    path: `/solutions/${industry}`,
    locale: "en",
  });
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry } = await params;
  const solutions = getSolutionsByIndustry(industry);
  if (solutions.length === 0) notFound();

  return (
    <>
      <TranslatedIndustryPage industrySlug={industry} solutions={solutions} lang="en" />
      <Footer lang="en" />
    </>
  );
}
