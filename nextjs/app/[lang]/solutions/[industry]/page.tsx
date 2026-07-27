import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, industryIndexJsonLd } from "@/lib/schemas";
import TranslatedIndustryPage from "@/components/react/TranslatedIndustryPage";
import Footer from "@/components/react/Footer";
import { getAllIndustries, getSolutionsByIndustry } from "@/lib/solutionsData";
import type { Language } from "@/components/react/types";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  const industries = getAllIndustries();
  return LANGS.flatMap((lang) =>
    industries.map((ind) => ({ lang, industry: ind.slug })),
  );
}

// Industry Names Translations (reused map for SEO meta)
const industryNames = {
    ar: {
        'ecommerce': 'التجارة الإلكترونية',
        'healthcare': 'الرعاية الصحية',
        'real-estate': 'العقارات',
        'restaurants': 'المطاعم',
        'education': 'التعليم',
        'automotive': 'السيارات',
        'legal': 'الخدمات القانونية',
        'finance': 'المالية والبنوك',
        'fitness': 'اللياقة البدنية',
        'beauty': 'الجمال والسبا',
        'cleaning': 'خدمات التنظيف',
        'logistics': 'اللوجستيات',
        'travel': 'السياحة والسفر',
    },
    de: {
        'ecommerce': 'E-Commerce',
        'healthcare': 'Gesundheitswesen',
        'real-estate': 'Immobilien',
        'restaurants': 'Restaurants',
        'education': 'Bildung',
        'automotive': 'Automobil',
        'legal': 'Rechtsdienstleistungen',
        'finance': 'Finanzen',
        'fitness': 'Fitness',
        'beauty': 'Schönheit',
        'cleaning': 'Reinigung',
        'logistics': 'Logistik',
        'travel': 'Reisen',
    },
    fr: {
        'ecommerce': 'E-commerce',
        'healthcare': 'Santé',
        'real-estate': 'Immobilier',
        'restaurants': 'Restaurants',
        'education': 'Éducation',
        'automotive': 'Automobile',
        'legal': 'Juridique',
        'finance': 'Finance',
        'fitness': 'Fitness',
        'beauty': 'Beauté',
        'cleaning': 'Nettoyage',
        'logistics': 'Logistique',
        'travel': 'Voyage',
    },
    it: {
        'ecommerce': 'E-commerce',
        'healthcare': 'Sanità',
        'real-estate': 'Immobiliare',
        'restaurants': 'Ristoranti',
        'education': 'Istruzione',
        'automotive': 'Automotive',
        'legal': 'Legale',
        'finance': 'Finanza',
        'fitness': 'Fitness',
        'beauty': 'Bellezza',
        'cleaning': 'Pulizie',
        'logistics': 'Logistica',
        'travel': 'Viaggi',
    },
    hi: {
        'ecommerce': 'ई-कॉमर्स',
        'healthcare': 'स्वास्थ्य',
        'real-estate': 'रियल एस्टेट',
        'restaurants': 'रेस्टोरेंट',
        'education': 'शिक्षा',
        'automotive': 'ऑटोमोटिव',
        'legal': 'कानूनी',
        'finance': 'वित्त',
        'fitness': 'फिटनेस',
        'beauty': 'सौंदर्य',
        'cleaning': 'सफाई',
        'logistics': 'लॉजिस्टिक्स',
        'travel': 'यात्रा',
    },
    ms: {
        'ecommerce': 'E-dagang',
        'healthcare': 'Kesihatan',
        'real-estate': 'Hartanah',
        'restaurants': 'Restoran',
        'education': 'Pendidikan',
        'automotive': 'Automotif',
        'legal': 'Undang-undang',
        'finance': 'Kewangan',
        'fitness': 'Kecergasan',
        'beauty': 'Kecantikan',
        'cleaning': 'Pembersihan',
        'logistics': 'Logistik',
        'travel': 'Pelancongan',
    }
};

function getIndustryName(lang: string, industry: string): string {
  return (
    (industryNames as Record<string, Record<string, string>>)[lang]?.[industry] ||
    industry
  );
}

const INDUSTRY_TEMPLATES: Record<string, { title: (n: string) => string; desc: (n: string) => string }> = {
  ar: {
    title: (n) => `حلول الذكاء الاصطناعي لقطاع ${n} | HMZ Technology`,
    desc: (n) => `حلول ذكاء اصطناعي جاهزة لقطاع ${n}: روبوتات محادثة واتساب، أتمتة الأعمال، وكلاء أذكياء. عائد استثمار مثبت وتنفيذ سريع مع HMZ Technology.`,
  },
  de: {
    title: (n) => `KI-Lösungen für ${n} | HMZ Technology`,
    desc: (n) => `Massgeschneiderte KI-Lösungen für die Branche ${n}: WhatsApp-Chatbots, Prozessautomatisierung, KI-Agenten. Nachweisbarer ROI, schnelle Umsetzung.`,
  },
  fr: {
    title: (n) => `Solutions IA pour ${n} | HMZ Technology`,
    desc: (n) => `Solutions IA sur mesure pour le secteur ${n} : chatbots WhatsApp, automatisation, agents IA. ROI prouvé et déploiement rapide par HMZ Technology.`,
  },
  it: {
    title: (n) => `Soluzioni AI per ${n} | HMZ Technology`,
    desc: (n) => `Soluzioni AI su misura per il settore ${n}: chatbot WhatsApp, automazione dei processi, agenti AI. ROI comprovato e implementazione rapida.`,
  },
  hi: {
    title: (n) => `${n} के लिए AI समाधान | HMZ Technology`,
    desc: (n) => `${n} उद्योग के लिए तैयार AI समाधान: WhatsApp चैटबॉट, बिज़नेस ऑटोमेशन, AI एजेंट। सिद्ध ROI और तेज़ कार्यान्वयन।`,
  },
  ms: {
    title: (n) => `Penyelesaian AI untuk ${n} | HMZ Technology`,
    desc: (n) => `Penyelesaian AI tersuai untuk industri ${n}: chatbot WhatsApp, automasi perniagaan, ejen AI. ROI terbukti dan pelaksanaan pantas.`,
  },
  en: {
    title: (n) => `${n} AI Solutions | HMZ Technology`,
    desc: (n) => `Ready-made AI solutions for the ${n} industry: WhatsApp chatbots, business automation, and AI agents with proven ROI and rapid deployment.`,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; industry: string }>;
}): Promise<Metadata> {
  const { lang, industry } = await params;
  const industryName = getIndustryName(lang, industry);
  const t = INDUSTRY_TEMPLATES[lang] ?? INDUSTRY_TEMPLATES.en;
  return buildMetadata({
    title: t.title(industryName),
    description: t.desc(industryName),
    path: `/solutions/${industry}`,
    locale: lang,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ lang: string; industry: string }>;
}) {
  const { lang, industry } = await params;
  const solutions = getSolutionsByIndustry(industry);
  const industryName = getIndustryName(lang, industry);
  const schemas = [
    industryIndexJsonLd(industryName, industry, solutions, lang),
    breadcrumbJsonLd(
      [
        { name: "Home", path: "/" },
        { name: "Solutions", path: "/solutions" },
        { name: industryName, path: `/solutions/${industry}` },
      ],
      lang,
    ),
  ];
  return (
    <>
      <TranslatedIndustryPage
        industrySlug={industry}
        solutions={solutions}
        lang={lang as Language}
      />
      <Footer lang={lang} />
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
