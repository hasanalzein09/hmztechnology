import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import ContactForm from "@/components/react/ContactForm";
import Testimonials from "@/components/react/Testimonials";
import LocalBusinessSchema from "@/components/react/LocalBusinessSchema";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

const titles: Record<string, string> = {
  ar: "تواصل معنا | HMZ Technology",
  de: "Kontaktieren Sie uns | HMZ Technology",
  fr: "Contactez-nous | HMZ Technology",
  it: "Contattaci | HMZ Technology",
  hi: "संपर्क करें | HMZ Technology",
  ms: "Hubungi Kami | HMZ Technology",
};

const descriptions: Record<string, string> = {
  ar: "تواصل مع HMZ Technology لتطوير روبوتات الدردشة الذكية وأتمتة واتساب.",
  de: "Kontaktieren Sie HMZ Technology für KI-Chatbot-Entwicklung und WhatsApp-Automatisierung.",
  fr: "Contactez HMZ Technology pour le développement de chatbots IA et l'automatisation WhatsApp.",
  it: "Contatta HMZ Technology per lo sviluppo di chatbot IA e automazione WhatsApp.",
  hi: "AI चैटबॉट विकास और WhatsApp ऑटोमेशन के लिए HMZ Technology से संपर्क करें।",
  ms: "Hubungi HMZ Technology untuk pembangunan chatbot AI dan automasi WhatsApp.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    title: titles[lang] || "Contact HMZ Technology",
    description: descriptions[lang] || "Contact HMZ Technology for AI solutions.",
    path: "/contact",
    locale: lang,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <Header lang={lang} />
      <main>
        <ContactForm lang={lang} />
        <Testimonials lang={lang} />
      </main>
      <Footer lang={lang} />
      <LocalBusinessSchema />
    </>
  );
}
