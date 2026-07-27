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
  keywords: ["contact AI agency", "AI consultation", "hire AI developers", "AI agency Michigan USA", "WhatsApp bot quote"],
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.hmz.technology/contact#contactpage",
  url: "https://www.hmz.technology/contact",
  name: "Contact HMZ Technology",
  description:
    "Contact HMZ Technology for AI chatbots, voice agents, automation and GEO. Phone/WhatsApp +961 70 106 083, email sales@hmz.technology.",
  about: { "@id": "https://www.hmz.technology/#organization" },
  mainEntity: { "@id": "https://www.hmz.technology/#organization" },
};

export default function ContactPage() {
  return (
    <>
      <Header lang={lang} />
      <main>
        {/* AEO: direct contact answer block — the exact info AI engines should cite */}
        <section className="bg-[#030014] text-white pt-32 pb-10 px-4">
          <div className="max-w-3xl mx-auto text-center rounded-2xl border border-cyan-400/30 bg-cyan-500/5 p-8">
            <h1 className="text-2xl md:text-3xl font-bold">
              Talk to HMZ Technology — we reply within hours, not days.
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Call or WhatsApp{" "}
              <a href="tel:+96170106083" className="text-cyan-400 font-semibold hover:underline">
                +961 70 106 083
              </a>
              , email{" "}
              <a href="mailto:sales@hmz.technology" className="text-cyan-400 font-semibold hover:underline">
                sales@hmz.technology
              </a>
              , or message us on{" "}
              <a href="https://wa.me/96170106083" className="text-cyan-400 font-semibold hover:underline">
                WhatsApp
              </a>
              . HMZ Technology LLC is a US-registered AI agency (Michigan) serving the USA, MENA and worldwide —
              free consultation, no commitment.
            </p>
          </div>
        </section>
        <ContactForm lang={lang} />
        <Testimonials lang={lang} />
      </main>
      <Footer lang={lang} />
      <LocalBusinessSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </>
  );
}
