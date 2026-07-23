import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PrivacyPolicyComponent from "@/components/react/PrivacyPolicy";

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
    ar: "سياسة الخصوصية | HMZ Technology",
    de: "Datenschutzerklärung | HMZ Technology",
    fr: "Politique de confidentialité | HMZ Technology",
    it: "Informativa sulla privacy | HMZ Technology",
    hi: "गोपनीयता नीति | HMZ Technology",
    ms: "Dasar Privasi | HMZ Technology",
  };
  const descs: Record<string, string> = {
    ar: "كيف تجمع HMZ Technology بياناتك وتحميها وتستخدمها عند استخدام خدمات الذكاء الاصطناعي لدينا.",
    de: "Wie HMZ Technology Ihre Daten bei der Nutzung unserer KI-Dienste erhebt, schützt und verwendet.",
    fr: "Comment HMZ Technology collecte, protège et utilise vos données lors de l'utilisation de nos services IA.",
    it: "Come HMZ Technology raccoglie, protegge e utilizza i tuoi dati quando usi i nostri servizi AI.",
    hi: "HMZ Technology हमारी AI सेवाओं का उपयोग करते समय आपका डेटा कैसे एकत्र, सुरक्षित और उपयोग करती है।",
    ms: "Cara HMZ Technology mengumpul, melindungi dan menggunakan data anda semasa menggunakan perkhidmatan AI kami.",
  };
  return buildMetadata({
    title: titles[lang] ?? "Privacy Policy | HMZ Technology",
    description: descs[lang] ?? "How HMZ Technology collects, protects, and uses your data when you use our AI services.",
    path: "/privacy-policy",
    locale: lang,
  });
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyComponent />;
}
