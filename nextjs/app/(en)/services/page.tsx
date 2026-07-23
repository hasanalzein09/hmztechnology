import { buildMetadata } from "@/lib/seo";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import ServicesList from "@/components/react/ServicesList";
import Testimonials from "@/components/react/Testimonials";
import LocalBusinessSchema from "@/components/react/LocalBusinessSchema";

const lang = "en";

export const metadata = buildMetadata({
  title:
    "AI Services 2026-2050: Chatbots, Voice Agents, AI Agents & GEO | HMZ Technology",
  description:
    "16 production AI services: WhatsApp/Instagram AI chatbots, AI voice agents, RAG assistants, AI SDR sales agents, custom AI agents, MCP integrations, AI workforce, GEO, and AGI-readiness consulting. Serving MENA & worldwide.",
  path: "/services",
  locale: "en",
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
    </>
  );
}
