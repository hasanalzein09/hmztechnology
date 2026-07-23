import { buildMetadata } from "@/lib/seo";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import AboutContent from "@/components/react/AboutContent";
import TrustBadges from "@/components/react/TrustBadges";
import LocalBusinessSchema from "@/components/react/LocalBusinessSchema";

const lang = "en";

export const metadata = buildMetadata({
  title: "About Us - HMZ Technology | Leading AI Chatbot Development Company",
  description:
    "Learn about HMZ Technology, the leading AI chatbot development company serving Middle East, USA, and Europe. Expert WhatsApp, Instagram, and Messenger automation solutions.",
  path: "/about",
  locale: "en",
});

export default function AboutPage() {
  return (
    <>
      <Header lang={lang} />
      <main>
        <AboutContent lang={lang} />
        <TrustBadges lang={lang} />
      </main>
      <Footer lang={lang} />
      <LocalBusinessSchema />
    </>
  );
}
