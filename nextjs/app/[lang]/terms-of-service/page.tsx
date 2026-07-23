import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import TermsOfServiceComponent from "@/components/react/TermsOfService";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const titles: Record<string, string> = {
    ar: "شروط الخدمة | HMZ Technology",
    de: "Nutzungsbedingungen | HMZ Technology",
    fr: "Conditions d'utilisation | HMZ Technology",
    it: "Termini di servizio | HMZ Technology",
    hi: "सेवा की शर्तें | HMZ Technology",
    ms: "Terma Perkhidmatan | HMZ Technology",
  };
  const descs: Record<string, string> = {
    ar: "الشروط والأحكام التي تحكم استخدام خدمات HMZ Technology للذكاء الاصطناعي والأتمتة.",
    de: "Die Allgemeinen Geschäftsbedingungen für die Nutzung der KI- und Automatisierungsdienste von HMZ Technology.",
    fr: "Les conditions générales régissant l'utilisation des services IA et d'automatisation de HMZ Technology.",
    it: "I termini e condizioni che regolano l'uso dei servizi AI e di automazione di HMZ Technology.",
    hi: "HMZ Technology की AI और ऑटोमेशन सेवाओं के उपयोग को नियंत्रित करने वाली शर्तें और नियम।",
    ms: "Terma dan syarat yang mentadbir penggunaan perkhidmatan AI dan automasi HMZ Technology.",
  };
  return buildMetadata({
    title: titles[lang] ?? "Terms of Service | HMZ Technology",
    description: descs[lang] ?? "The terms and conditions governing the use of HMZ Technology's AI and automation services.",
    path: "/terms-of-service",
    locale: lang,
  });
}

export default function TermsOfServicePage() {
  return <TermsOfServiceComponent />;
}
