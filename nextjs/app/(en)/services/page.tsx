import { buildMetadata } from "@/lib/seo";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import ServicesList from "@/components/react/ServicesList";
import Testimonials from "@/components/react/Testimonials";
import LocalBusinessSchema from "@/components/react/LocalBusinessSchema";
import { servicesData } from "@/lib/servicesData";
import { servicesData2026 } from "@/lib/servicesData2026";

const allServices = { ...servicesData, ...servicesData2026 };

// OfferCatalog — machine-readable list of all HMZ services (GEO: AI comprehension)
const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": "https://www.hmz.technology/services#catalog",
  name: "HMZ Technology AI Services",
  provider: { "@id": "https://www.hmz.technology/#organization" },
  itemListElement: Object.entries(allServices).map(([id, langs], i) => ({
    "@type": "Offer",
    position: i + 1,
    itemOffered: {
      "@type": "Service",
      "@id": `https://www.hmz.technology/services/${id}#service`,
      name: langs.en?.title ?? id,
      url: `https://www.hmz.technology/services/${id}`,
    },
  })),
};

const lang = "en";

export const metadata = buildMetadata({
  title:
    "AI Services 2026-2050: Chatbots, Voice Agents, AI Agents & GEO | HMZ Technology",
  description:
    "16 production AI services: WhatsApp/Instagram AI chatbots, AI voice agents, RAG assistants, AI SDR sales agents, custom AI agents, MCP integrations, AI workforce, GEO, and AGI-readiness consulting. Serving MENA & worldwide.",
  path: "/services",
  locale: "en",
  keywords: [
    "AI services", "AI chatbot services", "voice AI agents", "RAG knowledge assistant",
    "AI SDR", "custom AI agents", "MCP integration services", "GEO services",
    "AI automation agency", "AI security audit", "AGI consulting",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <Header lang={lang} />
      <main>
        <ServicesList lang={lang} />
        <Testimonials lang={lang} />
      </main>
      <Footer lang={lang} />
      <LocalBusinessSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
    </>
  );
}
