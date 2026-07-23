import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; industry: string }>;
}): Promise<Metadata> {
  const { lang, industry } = await params;
  const industryName = getIndustryName(lang, industry);
  return buildMetadata({
    title: `${industryName} | HMZ Technology`,
    description: `Solutions for ${industryName}`,
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
  return (
    <>
      <TranslatedIndustryPage
        industrySlug={industry}
        solutions={solutions}
        lang={lang as Language}
      />
      <Footer lang={lang} />
    </>
  );
}
