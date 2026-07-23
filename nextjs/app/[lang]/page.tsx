import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/react/Header";
import Hero3D from "@/components/react/Hero3D";
import FutureTimeline from "@/components/react/FutureTimeline";
import AIAdvantageTable from "@/components/react/AIAdvantageTable";
import TrustBadges from "@/components/react/TrustBadges";
import CaseStudies from "@/components/react/CaseStudies";
import BentoShowcase from "@/components/react/BentoShowcase";
import ProcessWorkflow from "@/components/react/ProcessWorkflow";
import Testimonials from "@/components/react/Testimonials";
import Footer from "@/components/react/Footer";
import LocalBusinessSchema from "@/components/react/LocalBusinessSchema";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

const titles: Record<string, string> = {
  ar: "HMZ Technology | روبوتات الذكاء الاصطناعي والأتمتة",
  de: "HMZ Technology | KI-Chatbots & Automatisierung",
  fr: "HMZ Technology | Chatbots IA & Automatisation",
  it: "HMZ Technology | Chatbot IA e Automazione",
  hi: "HMZ Technology | AI चैटबॉट्स और ऑटोमेशन",
  ms: "HMZ Technology | Chatbot AI & Automasi",
};

const descriptions: Record<string, string> = {
  ar: "الشركة الرائدة في تطوير روبوتات الدردشة بالذكاء الاصطناعي. أتمتة واتساب وانستغرام وماسنجر بحلول ذكية مخصصة. نخدم الشرق الأوسط والعالم.",
  de: "Führendes Unternehmen für KI-Chatbot-Entwicklung. Automatisieren Sie WhatsApp, Instagram & Messenger mit benutzerdefinierten KI-Lösungen.",
  fr: "Société leader dans le développement de chatbots IA. Automatisez WhatsApp, Instagram et Messenger avec des solutions IA personnalisées.",
  it: "Azienda leader nello sviluppo di chatbot IA. Automatizza WhatsApp, Instagram e Messenger con soluzioni IA personalizzate.",
  hi: "प्रमुख AI चैटबॉट विकास कंपनी। अनुकूलित AI समाधानों के साथ WhatsApp, Instagram और Messenger को स्वचालित करें।",
  ms: "Syarikat pembangunan chatbot AI terkemuka. Automatisasikan WhatsApp, Instagram & Messenger dengan penyelesaian AI tersuai.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    title: titles[lang] || "HMZ Technology",
    description: descriptions[lang] || "Leading AI chatbot development company.",
    path: "/",
    locale: lang,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <Header lang={lang} />
      <main className="bg-[#030014] min-h-screen">
        <Hero3D lang={lang} />
        <TrustBadges lang={lang} />
        <CaseStudies lang={lang} />
        <BentoShowcase lang={lang} />
        <FutureTimeline lang={lang} />
        <AIAdvantageTable lang={lang} />
        <ProcessWorkflow lang={lang} />
        <Testimonials lang={lang} />
      </main>
      <Footer lang={lang} />
      <LocalBusinessSchema locale={lang === "ar" ? "sa" : lang} />
    </>
  );
}
