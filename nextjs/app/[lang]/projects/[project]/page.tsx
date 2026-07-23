import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import TranslatedProjectDetail from "@/components/react/TranslatedProjectDetail";
import { projectsData, getProjectBySlug } from "@/lib/projectsData";
import type { Language } from "@/components/react/types";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  // Get all project slugs from English (primary source)
  return LANGS.flatMap((lang) =>
    projectsData.en.projects.map((project) => ({
      lang,
      project: project.slug,
    })),
  );
}

function getProject(slug: string, lang: string) {
  return getProjectBySlug(slug, lang as Language) ?? projectsData.en.projects.find((p) => p.slug === slug);
}

// Localized meta title/description for locales without translated project data
const metaTranslations: Record<string, Record<string, { title: string; description: string }>> = {
  "healthcare-clinic-whatsapp-automation": {
    de: { title: "WhatsApp-Automatisierung für Gesundheitskliniken", description: "Vollautomatisiertes Patienten-Buchungs- und Nachverfolgungssystem über WhatsApp." },
    fr: { title: "Automatisation WhatsApp pour cliniques de santé", description: "Système entièrement automatisé de prise de rendez-vous et de suivi des patients via WhatsApp." },
    it: { title: "Automazione WhatsApp per cliniche sanitarie", description: "Sistema completamente automatizzato di prenotazione e follow-up dei pazienti via WhatsApp." },
    hi: { title: "हेल्थकेयर क्लिनिक WhatsApp ऑटोमेशन", description: "WhatsApp के माध्यम से पूरी तरह स्वचालित मरीज़ बुकिंग और फ़ॉलो-अप सिस्टम।" },
    ms: { title: "Automasi WhatsApp Klinik Kesihatan", description: "Sistem tempahan dan susulan pesakit automatik sepenuhnya melalui WhatsApp." },
  },
  "ecommerce-instagram-sales-bot": {
    de: { title: "E-Commerce Instagram Sales-Bot", description: "Automatisierter Instagram-DM-Vertriebstrichter mit Bestellabwicklung." },
    fr: { title: "Bot de vente Instagram pour e-commerce", description: "Tunnel de vente automatisé en DM Instagram avec traitement des commandes." },
    it: { title: "Bot di vendita Instagram per e-commerce", description: "Funnel di vendita automatizzato nei DM di Instagram con elaborazione degli ordini." },
    hi: { title: "ई-कॉमर्स Instagram सेल्स बॉट", description: "ऑर्डर प्रोसेसिंग के साथ स्वचालित Instagram DM सेल्स फ़नल।" },
    ms: { title: "Bot Jualan Instagram E-dagang", description: "Corong jualan DM Instagram automatik dengan pemprosesan pesanan." },
  },
  "restaurant-whatsapp-ordering-system": {
    de: { title: "WhatsApp-Bestellsystem für Restaurants", description: "Komplette WhatsApp-Bestellung mit Menü-Browsing und Zahlung." },
    fr: { title: "Système de commande WhatsApp pour restaurants", description: "Commande WhatsApp complète avec navigation du menu et paiement." },
    it: { title: "Sistema di ordinazione WhatsApp per ristoranti", description: "Ordinazione WhatsApp completa con navigazione del menu e pagamento." },
    hi: { title: "रेस्तरां WhatsApp ऑर्डरिंग सिस्टम", description: "मेनू ब्राउज़िंग और भुगतान के साथ पूर्ण WhatsApp ऑर्डरिंग।" },
    ms: { title: "Sistem Pesanan WhatsApp Restoran", description: "Pesanan WhatsApp lengkap dengan semakan menu dan pembayaran." },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; project: string }>;
}): Promise<Metadata> {
  const { lang, project } = await params;
  const projectData = getProject(project, lang);
  const localized = metaTranslations[project]?.[lang];
  return buildMetadata({
    title: projectData ? `${localized?.title ?? projectData.title} | HMZ Technology` : "Project | HMZ Technology",
    description: localized?.description ?? projectData?.description ?? "View our project case study.",
    path: `/projects/${project}`,
    locale: lang,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; project: string }>;
}) {
  const { lang, project } = await params;
  if (!getProject(project, lang)) notFound();
  return (
    <>
      <Header lang={lang} />
      <main>
        <TranslatedProjectDetail projectSlug={project} lang={lang as Language} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
