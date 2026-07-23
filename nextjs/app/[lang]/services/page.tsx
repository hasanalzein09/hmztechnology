import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import ServicesList from "@/components/react/ServicesList";
import Testimonials from "@/components/react/Testimonials";
import LocalBusinessSchema from "@/components/react/LocalBusinessSchema";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

const titles: Record<string, string> = {
  ar: "خدمات وحلول الذكاء الاصطناعي | HMZ Technology",
  de: "KI-Dienstleistungen & Lösungen | HMZ Technology",
  fr: "Services et Solutions IA | HMZ Technology",
  it: "Servizi e Soluzioni IA | HMZ Technology",
  hi: "AI Services & Solutions | HMZ Technology",
  ms: "Perkhidmatan & Penyelesaian AI | HMZ Technology",
};

const descriptions: Record<string, string> = {
  ar: "استكشف خدماتنا: شات بوت واتساب، بوت انستغرام، تطوير المواقع، وحلول الذكاء الاصطناعي المخصصة.",
  de: "Entdecken Sie unsere KI-Dienste: WhatsApp Chatbots, Instagram Bots, Webentwicklung und mehr.",
  fr: "Découvrez nos services: Chatbots WhatsApp, Bots Instagram, Développement Web et Solutions IA.",
  it: "Scopri i nostri servizi: Chatbot WhatsApp, Bot Instagram, Sviluppo Web e Soluzioni IA.",
  hi: "हमारी एआई सेवाओं का अन्वेषण करें: व्हाट्सएप चैटबॉट्स, इंस्टाग्राम बॉट्स, वेब विकास और बहुत कुछ।",
  ms: "Terokai perkhidmatan AI kami: Chatbot WhatsApp, Bot Instagram, pembangunan web dan banyak lagi.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    title: titles[lang] || "AI Services & Solutions | HMZ Technology",
    description: descriptions[lang] || "Explore our AI services.",
    path: "/services",
    locale: lang,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <Header lang={lang} />
      <main>
        <ServicesList lang={lang} />
        <Testimonials lang={lang} />
      </main>
      <Footer lang={lang} />
      <LocalBusinessSchema />
    </>
  );
}
