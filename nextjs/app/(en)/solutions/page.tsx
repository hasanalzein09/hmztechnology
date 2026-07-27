import type { Metadata } from "next";
import TranslatedSolutions from "@/components/react/TranslatedSolutions";
import Footer from "@/components/react/Footer";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, solutionsIndexJsonLd } from "@/lib/schemas";
import { getAllIndustries } from "@/lib/solutionsData";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Industry Specific Business Solutions | HMZ Technology",
    description:
      "Explore 300+ revenue-generating solutions tailored for your industry. AI, Automation, WhatsApp Bots, and more.",
    path: "/solutions",
    locale: "en",
    keywords: ["AI solutions by industry", "healthcare AI chatbot", "real estate AI", "ecommerce automation", "industry AI agents"],
  });
}

export default function SolutionsPage() {
  const schemas = [
    solutionsIndexJsonLd(getAllIndustries(), "en"),
    breadcrumbJsonLd(
      [
        { name: "Home", path: "/" },
        { name: "Solutions", path: "/solutions" },
      ],
      "en",
    ),
  ];
  return (
    <>
      <TranslatedSolutions lang="en" />
      <Footer lang="en" />
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
