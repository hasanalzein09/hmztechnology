import { buildMetadata } from "@/lib/seo";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import ContactForm from "@/components/react/ContactForm";
import Testimonials from "@/components/react/Testimonials";
import LocalBusinessSchema from "@/components/react/LocalBusinessSchema";

const lang = "en";

export const metadata = buildMetadata({
  title: "Contact HMZ Technology | Global AI & Automation Experts",
  description:
    "Get in touch with HMZ Technology for AI chatbot development, WhatsApp automation, and custom AI solutions. Free consultation available.",
  path: "/contact",
  locale: "en",
});

export default function ContactPage() {
  return (
    <>
      <Header lang={lang} />
      <main>
        <ContactForm lang={lang} />
        <Testimonials lang={lang} />
      </main>
      <Footer lang={lang} />
      <LocalBusinessSchema />
    </>
  );
}
