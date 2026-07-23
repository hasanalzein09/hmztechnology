import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import TranslatedSolutions from "@/components/react/TranslatedSolutions";
import Footer from "@/components/react/Footer";
import type { Language } from "@/components/react/types";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

// SEO Titles/Descriptions mapped by language
const seo: Record<string, { title: string; description: string }> = {
  ar: { title: "حلول أعمال مخصصة للصناعة | HMZ Technology", description: "استكشف أكثر من 300 حل لزيادة الإيرادات مصمم خصيصاً لصناعتك. ذكاء اصطناعي، أتمتة، روبوتات واتساب، والمزيد." },
  de: { title: "Branchenspezifische Geschäftslösungen | HMZ Technology", description: "Entdecken Sie über 300 umsatzsteigernde Lösungen, die auf Ihre Branche zugeschnitten sind. KI, Automatisierung, WhatsApp-Boots und mehr." },
  fr: { title: "Solutions Commerciales Spécifiques à l'Industrie | HMZ Technology", description: "Découvrez plus de 300 solutions génératrices de revenus adaptées à votre secteur. IA, Automatisation, Bots WhatsApp, et plus encore." },
  it: { title: "Soluzioni Aziendali Specifiche per Settore | HMZ Technology", description: "Esplora oltre 300 soluzioni per generare entrate su misura per la tua industria. AI, Automazione, Bot WhatsApp e altro." },
  hi: { title: "उद्योग विशिष्ट व्यापार समाधान | HMZ Technology", description: "अपने उद्योग के लिए तैयार 300+ राजस्व-उत्पादक समाधानों का अन्वेषण करें। एआई, ऑटोमेशन, व्हाट्सएप बॉट्स, और बहुत कुछ।" },
  ms: { title: "Penyelesaian Perniagaan Khusus Industri | HMZ Technology", description: "Terokai 300+ penyelesaian menjana pendapatan yang disesuaikan untuk industri anda. AI, Automasi, Bot WhatsApp, dan banyak lagi." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const currentSeo = seo[lang] || seo.de;
  return buildMetadata({
    title: currentSeo.title,
    description: currentSeo.description,
    path: "/solutions",
    locale: lang,
  });
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <TranslatedSolutions lang={lang as Language} />
      <Footer lang={lang} />
    </>
  );
}
