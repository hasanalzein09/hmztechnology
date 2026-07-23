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

const lang = "en";

export const metadata = buildMetadata({
  title: "HMZ Technology | AI Chatbots & Automation",
  description:
    "Leading AI chatbot development company. Automate WhatsApp, Instagram & Messenger with custom AI solutions. Serving USA, UAE, Europe & Worldwide.",
  path: "/",
  locale: "en",
});

export default function HomePage() {
  return (
    <>
      <Header lang={lang} />
      <main>
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
      <LocalBusinessSchema locale="lb" />
    </>
  );
}
