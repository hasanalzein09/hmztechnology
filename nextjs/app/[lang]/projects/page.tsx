import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import TranslatedProjects from "@/components/react/TranslatedProjects";
import type { Language } from "@/components/react/types";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

const titles: Record<string, string> = {
  ar: "مشاريعنا | قصص نجاح | HMZ Technology",
  de: "Unsere Projekte | Erfolgsgeschichten | HMZ Technology",
  fr: "Nos Projets | Études de Cas | HMZ Technology",
  it: "I Nostri Progetti | Casi di Successo | HMZ Technology",
  hi: "हमारे प्रोजेक्ट्स | सफलता की कहानियां | HMZ Technology",
  ms: "Projek Kami | Kisah Kejayaan | HMZ Technology",
};

const descriptions: Record<string, string> = {
  ar: "اكتشف مشاريعنا الناجحة وكيف حولنا الشركات بأتمتة الذكاء الاصطناعي.",
  de: "Entdecken Sie unsere erfolgreichen Projekte und KI-Automatisierungslösungen.",
  fr: "Découvrez nos projets réussis et nos solutions d'automatisation IA.",
  it: "Scopri i nostri progetti di successo e le soluzioni di automazione IA.",
  hi: "हमारे सफल प्रोजेक्ट्स और AI ऑटोमेशन समाधान देखें।",
  ms: "Temui projek berjaya kami dan penyelesaian automasi AI.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    title: titles[lang] || "Our Projects | Success Stories | HMZ Technology",
    description: descriptions[lang] || "Discover our successful projects.",
    path: "/projects",
    locale: lang,
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <Header lang={lang} />
      <main>
        <TranslatedProjects lang={lang as Language} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
