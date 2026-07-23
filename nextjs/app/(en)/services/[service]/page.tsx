import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/react/ServiceDetail";
import FAQSchema from "@/components/react/FAQSchema";
import { servicesData } from "@/lib/servicesData";
import { servicesData2026 } from "@/lib/servicesData2026";
import { buildMetadata } from "@/lib/seo";

const allServices = { ...servicesData, ...servicesData2026 };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(allServices).map((service) => ({ service }));
}

type PageProps = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service } = await params;
  const serviceData = allServices[service]?.en;
  if (!serviceData) return {};
  return buildMetadata({
    title: `${serviceData.title} | HMZ Technology`,
    description: serviceData.description,
    path: `/services/${service}`,
    locale: "en",
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { service } = await params;
  const serviceData = allServices[service]?.en;
  if (!serviceData) notFound();

  // Rich per-service FAQs (unique per page = real AEO value)
  const faqItems = (serviceData.faq?.length ? serviceData.faq : []).concat([
    {
      question: `How does ${serviceData.title} help my business?`,
      answer: `Our ${serviceData.title} solution automates complex workflows, reduces operational costs, and provides 24/7 engagement through advanced AI models. For a free consultation, contact us at +96170106083 or sales@hmz.technology.`,
    },
    {
      question: "Is it secure and compliant?",
      answer:
        "Yes, all our AI solutions are built with enterprise-grade security, ensuring data privacy and compliance with international standards. Contact our security team at +96170106083.",
    },
  ]);

  // Service schema — entity-linked, no fabricated ratings
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.hmz.technology/services/${service}#service`,
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
    url: `https://www.hmz.technology/services/${service}`,
  };

  const breadcrumbItems = [
    { name: "Services", item: "/services" },
    { name: serviceData.title, item: `/services/${service}` },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.hmz.technology${item.item}`,
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumbs (markup + JSON-LD, ported from Breadcrumbs.astro) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex list-none p-0 text-sm md:text-base text-gray-500 dark:text-gray-400">
          <li className="flex items-center">
            <a href="/" className="hover:text-blue-500 transition-colors">
              Home
            </a>
            <span className="mx-2">/</span>
          </li>
          {breadcrumbItems.map((item, index) => (
            <li key={item.item} className="flex items-center">
              {index === breadcrumbItems.length - 1 ? (
                <span
                  className="font-bold text-gray-900 dark:text-white truncate max-w-[200px]"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <>
                  <a href={item.item} className="hover:text-blue-500 transition-colors">
                    {item.name}
                  </a>
                  <span className="mx-2">/</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Quick Answer Snippet for AEO/GEO */}
      <section className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-2xl p-6 mb-12">
        <h2 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100">
          Quick Answer: What is {serviceData.title}?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {serviceData.description} HMZ Technology provides high-authority AI
          solutions tailored for global markets, ensuring seamless integration
          and ROI.
        </p>
      </section>

      <ServiceDetail serviceId={service} lang="en" />

      {/* FAQ Section for Schema */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="grid gap-6">
          {faqItems.map((faq) => (
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

      {/* Structured Data for AEO */}
      <FAQSchema items={faqItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  );
}
