import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import AboutContent from "@/components/react/AboutContent";
import TrustBadges from "@/components/react/TrustBadges";
import LocalBusinessSchema from "@/components/react/LocalBusinessSchema";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

const titles: Record<string, string> = {
  ar: "عن الشركة | HMZ Technology",
  de: "Über uns | HMZ Technology",
  fr: "À propos de nous | HMZ Technology",
  it: "Chi Siamo | HMZ Technology",
  hi: "हमारे बारे में | HMZ Technology",
  ms: "Tentang Kami | HMZ Technology",
};

const descriptions: Record<string, string> = {
  ar: "تعرف على HMZ Technology، الشركة الرائدة في تطوير روبوتات الدردشة بالذكاء الاصطناعي.",
  de: "Erfahren Sie mehr über HMZ Technology, das führende Unternehmen für KI-Chatbot-Entwicklung.",
  fr: "En savoir plus sur HMZ Technology, la société leader dans le développement de chatbots IA.",
  it: "Scopri di più su HMZ Technology, l'azienda leader nello sviluppo di chatbot IA.",
  hi: "AI चैटबॉट विकास में अग्रणी कंपनी HMZ Technology के बारे में और जानें।",
  ms: "Ketahui lebih lanjut tentang HMZ Technology, syarikat terkemuka dalam pembangunan chatbot AI.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    title: titles[lang] || "About HMZ Technology",
    description: descriptions[lang] || "About HMZ Technology - AI Chatbot Experts",
    path: "/about",
    locale: lang,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <Header lang={lang} />
      <main>
        <AboutContent lang={lang} />
        <TrustBadges lang={lang} />
      </main>
      <Footer lang={lang} />
      <LocalBusinessSchema />
    </>
  );
}
