import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/schemas";
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
  keywords: ["about HMZ Technology", "AI company Lebanon", "AI agency Michigan USA", "Hasan El Zein"],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd(
              [
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
              ],
              "en",
            ),
          ),
        }}
      />
    </>
  );
}
