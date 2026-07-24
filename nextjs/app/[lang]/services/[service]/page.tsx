import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/schemas";
import ServiceDetail from "@/components/react/ServiceDetail";
import FAQSchema from "@/components/react/FAQSchema";
import { servicesData } from "@/lib/servicesData";
import { servicesData2026 } from "@/lib/servicesData2026";
import type { Language } from "@/components/react/types";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

const allServices: Record<string, Record<string, any>> = {
  ...servicesData,
  ...servicesData2026,
};

function getServiceData(serviceId: string, lang: string) {
  return allServices[serviceId]?.[lang as Language] ?? allServices[serviceId]?.en;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    Object.keys(allServices).map((service) => ({ lang, service })),
  );
}

function buildFaqItems(serviceData: any, lang: string) {
  // Localized FAQ Answers
  const faqAnswers: Record<string, { q1: string; a1: string; q2: string; a2: string }> = {
    ar: {
      q1: `كيف تساعد ${serviceData.title} عملي؟`,
      a1: `حل ${serviceData.title} الخاص بنا يقوم بأتمتة سير العمل المعقد، ويقلل التكاليف التشغيلية، ويوفر مشاركة على مدار الساعة طوال أيام الأسبوع من خلال نماذج الذكاء الاصطناعي المتقدمة. للاستشارة مجمانية، تواصل معنا على +96170106083 أو sales@hmz.technology.`,
      q2: "هل هو آمن ومتوافق؟",
      a2: "نعم، جميع حلول الذكاء الاصطناعي الخاصة بنا مبنية بأمان على مستوى المؤسسات، مما يضمن خصوصية البيانات والامتثال للمعايير الدولية. تواصل مع فريق الأمان لدينا على +96170106083.",
    },
    en: {
      q1: `How does ${serviceData.title} help my business?`,
      a1: `Our ${serviceData.title} solution automates complex workflows, reduces operational costs, and provides 24/7 engagement through advanced AI models. For a free consultation, contact us at +96170106083 or sales@hmz.technology.`,
      q2: "Is it secure and compliant?",
      a2: "Yes, all our AI solutions are built with enterprise-grade security, ensuring data privacy and compliance with international standards. Contact our security team at +96170106083.",
    },
  };

  const t = faqAnswers[lang] || faqAnswers.en;

  // Rich per-service FAQs (localized where available, EN fallback) + generic pair
  return (serviceData.faq?.length ? serviceData.faq : []).concat([
    { question: t.q1, answer: t.a1 },
    { question: t.q2, answer: t.a2 },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; service: string }>;
}): Promise<Metadata> {
  const { lang, service } = await params;
  const serviceData = getServiceData(service, lang);
  if (!serviceData) return {};
  return buildMetadata({
    title: `${serviceData.title} | HMZ Technology`,
    description: serviceData.description,
    path: `/services/${service}`,
    locale: lang,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string; service: string }>;
}) {
  const { lang, service } = await params;
  const serviceData = getServiceData(service, lang);
  if (!serviceData) notFound();

  const faqItems = buildFaqItems(serviceData, lang);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.hmz.technology/${lang}/services/${service}#service`,
    name: serviceData.title,
    serviceType: serviceData.title,
    description: serviceData.description,
    provider: { "@id": "https://www.hmz.technology/#organization" },
    areaServed: [
      { "@type": "Country", name: "Lebanon" },
      { "@type": "AdministrativeArea", name: "Middle East" },
      { "@type": "AdministrativeArea", name: "Worldwide" },
    ],
    audience: { "@type": "BusinessAudience", name: "Businesses adopting AI" },
    inLanguage: lang,
    url: `https://www.hmz.technology/${lang}/services/${service}`,
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Answer Snippet for AEO/GEO */}
        <section className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100">
            {lang === "ar"
              ? `إجابة سريعة: ما هو ${serviceData.title}؟`
              : `Quick Answer: What is ${serviceData.title}?`}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {serviceData.description} HMZ Technology provides high-authority AI
            solutions tailored for{" "}
            {lang === "ar" ? "الشرق الأوسط" : "global markets"}, ensuring
            seamless integration and ROI.
          </p>
        </section>

        <ServiceDetail serviceId={service} lang={lang} />

        {/* FAQ Section for Schema */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            {lang === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>
          <div className="grid gap-6">
            {faqItems.map((faq: { question: string; answer: string }) => (
              <div
                key={faq.question}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Structured Data for AEO */}
      <FAQSchema items={faqItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd(
              [
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: serviceData.title, path: `/services/${service}` },
              ],
              lang,
            ),
          ),
        }}
      />
    </>
  );
}
