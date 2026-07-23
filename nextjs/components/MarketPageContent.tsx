import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import { marketsData } from "@/lib/marketsData";
import { servicesData } from "@/lib/servicesData";
import { servicesData2026 } from "@/lib/servicesData2026";
import { buildMetadata } from "@/lib/seo";

const allServices = { ...servicesData, ...servicesData2026 };

export function marketMetadata(market: string) {
  const m = marketsData[market];
  if (!m) return {};
  return buildMetadata({
    title: `AI Agency in ${m.countryName} — Chatbots, Voice Agents & Automation | HMZ Technology`,
    description: m.metaDescription,
    path: `/${market}`,
    locale: "en",
    i18n: false, // market pages are English-only — no hreflang to 404s
    keywords: [
      `AI agency ${m.countryName}`,
      `AI chatbot ${m.countryName}`,
      `WhatsApp automation ${m.countryName}`,
      "AI voice agents",
      "business automation",
    ],
  });
}

export default function MarketPageContent({ market }: { market: string }) {
  const m = marketsData[market];
  if (!m) return null;

  const pageUrl = `https://www.hmz.technology/${m.slug}`;

  const services = m.topServices
    .map((id) => ({ id, title: allServices[id]?.en?.title ?? id }))
    .filter((s) => allServices[s.id]);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `AI Agency in ${m.countryName} — Chatbots, Voice Agents & Automation | HMZ Technology`,
    description: m.metaDescription,
    isPartOf: { "@id": "https://www.hmz.technology/#website" },
    about: { "@id": `https://www.hmz.technology/#${m.schemaLocalBusinessId}` },
    inLanguage: "en",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: m.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.hmz.technology/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: m.countryName,
        item: pageUrl,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.hmz.technology/#${m.schemaLocalBusinessId}`,
    name: `HMZ Technology ${m.countryName} - AI Chatbot Development`,
    description: m.metaDescription,
    url: pageUrl,
    telephone: "+96170106083",
    email: "sales@hmz.technology",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: { "@type": "Country", name: m.countryName },
    parentOrganization: { "@id": "https://www.hmz.technology/#organization" },
    priceRange: "$$$",
  };

  return (
    <>
      <Header lang="en" />
      <main className="bg-[#030014] min-h-screen text-white">
        {/* HERO */}
        <section className="relative max-w-5xl mx-auto px-4 pt-36 pb-16 text-center">
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-purple-600/20 blur-[120px]"></div>
          <div className="relative">
            <span className="text-6xl md:text-7xl" aria-hidden="true">
              {m.flagEmoji}
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {m.heroH1}
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {m.heroSub}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/96170106083"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-lg hover:opacity-90 transition"
              >
                {m.ctaText}
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-semibold text-lg hover:border-cyan-400/50 transition"
              >
                Explore Services
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              📞 WhatsApp +961 70 106 083 &nbsp;·&nbsp; ✉️ sales@hmz.technology
            </p>
          </div>
        </section>

        {/* LOCAL INTRO */}
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-cyan-300 mb-4">
              Why {m.countryName} Is Moving Fast on AI
            </h2>
            <p className="text-gray-300 leading-relaxed">{m.localIntro}</p>
            {m.arabicIntro && (
              <p className="mt-6 text-gray-300 leading-relaxed text-lg" dir="rtl" lang="ar">
                <span>{m.arabicIntro}</span>
              </p>
            )}
          </div>
        </section>

        {/* STATS */}
        <section className="max-w-5xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {m.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center hover:border-cyan-400/40 transition"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="max-w-6xl mx-auto px-4 pb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            AI Services for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {m.countryName}
            </span>
          </h2>
          <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
            The HMZ systems most in demand by businesses in {m.countryName} — all
            delivered remotely with full documentation and training.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <a
                key={s.id}
                href={`/services/${s.id}`}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400/50 hover:bg-white/10 transition"
              >
                <h3 className="text-lg font-semibold group-hover:text-cyan-300 transition">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Production-grade {s.title.toLowerCase()} for {m.countryName}{" "}
                  businesses.
                </p>
                <span className="mt-4 inline-block text-cyan-400 text-sm font-semibold">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* WHY HMZ */}
        <section className="max-w-4xl mx-auto px-4 pb-20">
          <div className="rounded-2xl border border-purple-400/30 bg-purple-500/10 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Why {m.countryName} Businesses Choose HMZ
            </h2>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li className="flex gap-3">
                <span className="text-cyan-400 shrink-0">✓</span>
                <span>
                  <strong className="text-white">8-day deployment:</strong> standard
                  WhatsApp AI chatbots go live in about 8 days — audit, AI training on
                  your data, integration, zero-downtime launch.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 shrink-0">✓</span>
                <span>
                  <strong className="text-white">Official &amp; safe:</strong> built on
                  the official Meta-verified WhatsApp Business API — your number stays
                  compliant and healthy.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 shrink-0">✓</span>
                <span>
                  <strong className="text-white">Grounded AI, not guesswork:</strong>
                  RAG-based answers from your approved documents reduce hallucinations
                  by 60–80%, with human handoff by design.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 shrink-0">✓</span>
                <span>
                  <strong className="text-white">Multilingual by default:</strong>{" "}
                  Arabic, English, French, German, Italian, Hindi, Bahasa Malaysia and
                  more — one AI, every customer language.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 shrink-0">✓</span>
                <span>
                  <strong className="text-white">Remote delivery, full ownership:</strong>
                  complete documentation, team training and source access — no lock-in,
                  no black boxes.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 pb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            FAQs —{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI Services in {m.countryName}
            </span>
          </h2>
          <div className="mt-10 space-y-4">
            {m.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 open:border-cyan-400/40 transition"
              >
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-semibold text-lg">
                  <span>{f.q}</span>
                  <span className="text-cyan-400 group-open:rotate-45 transition text-2xl leading-none shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-300 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-4xl mx-auto px-4 pb-24">
          <div className="text-center rounded-2xl border border-purple-400/30 bg-purple-500/10 p-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Automate Your {m.countryName} Business?
            </h2>
            <p className="mt-3 text-gray-300">
              Free consultation — real answers about your specific business in under 24
              hours.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/96170106083"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:opacity-90 transition"
              >
                WhatsApp +961 70 106 083
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-3 rounded-full border border-white/20 bg-white/5 font-semibold hover:border-cyan-400/50 transition"
              >
                Contact Form
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
