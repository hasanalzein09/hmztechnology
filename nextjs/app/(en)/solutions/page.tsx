import type { Metadata } from "next";
import TranslatedSolutions from "@/components/react/TranslatedSolutions";
import Footer from "@/components/react/Footer";
import { buildMetadata } from "@/lib/seo";

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
  return (
    <>
      <TranslatedSolutions lang="en" />
      <Footer lang="en" />
    </>
  );
}
