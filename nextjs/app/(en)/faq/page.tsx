import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/schemas";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";

const lang = "en";

const faqGroups = [
  {
    category: "Working With HMZ",
    faqs: [
      {
        q: "What does HMZ Technology do?",
        a: "HMZ Technology is an AI agency that builds production-grade AI systems for businesses: WhatsApp, Instagram and Messenger AI chatbots, AI voice agents, RAG knowledge assistants, AI sales agents, custom AI agents, MCP integrations, business process automation, websites, SEO, and Generative Engine Optimization (GEO). We are a US-registered company (HMZ Technology LLC, Michigan) and serve clients across the USA, MENA and worldwide.",
      },
      {
        q: "Where is HMZ Technology located and which markets do you serve?",
        a: "HMZ Technology LLC is registered in Michigan, USA. We serve clients in Lebanon, Saudi Arabia, the UAE, the wider GCC, Europe, and North America. All systems are delivered remotely with full documentation and training, and our website and support operate in 7 languages including Arabic and English.",
      },
      {
        q: "How fast can HMZ deploy an AI chatbot?",
        a: "A standard WhatsApp AI chatbot goes live in about 8 days: days 1-2 audit your current setup, days 3-5 we train the AI on your business data, days 6-7 we integrate with your systems, and day 8 is go-live with zero downtime. Larger agentic systems typically take 4-8 weeks depending on integrations.",
      },
      {
        q: "How much do HMZ AI services cost?",
        a: "Entry automations and chatbots start from project-based pricing sized to your scope, while most clients move to monthly retainers that cover monitoring, prompt tuning, and new automation builds every month. Every engagement starts with a free consultation where you get exact numbers for your case — contact sales@hmz.technology or WhatsApp +961 70 106 083.",
      },
    ],
  },
  {
    category: "AI Chatbots & Voice Agents",
    faqs: [
      {
        q: "What is a WhatsApp AI chatbot and why does my business need one?",
        a: "A WhatsApp AI chatbot is an AI agent inside your WhatsApp Business number that answers customers in under 3 seconds, 24/7, in your brand's voice. Businesses lose up to 80% of potential conversions when replies take longer than 5 minutes — the chatbot closes that gap, qualifies leads, books appointments, and hands off to humans when needed.",
      },
      {
        q: "Is the WhatsApp automation official and safe for my number?",
        a: "Yes. HMZ builds exclusively on the official WhatsApp Business API (Meta-verified), purpose-built per Meta's 2026 rules. Your number stays compliant, your account stays safe, and messaging quality ratings remain healthy.",
      },
      {
        q: "What is an AI voice agent?",
        a: "An AI voice agent is a virtual receptionist that answers phone calls in natural Arabic, English, or French, books appointments, answers questions, and qualifies leads. 38% of inbound calls to small businesses go unanswered — an AI voice agent answers every call in under a second, at 80-85% lower cost than a human receptionist.",
      },
      {
        q: "Will the AI give wrong answers to my customers?",
        a: "HMZ systems use Retrieval-Augmented Generation (RAG), which grounds every answer in your approved business documents and reduces hallucinations by 60-80% versus raw AI models. The AI only speaks from your verified knowledge base, and escalates to your team whenever it is unsure.",
      },
    ],
  },
  {
    category: "GEO, SEO & AI Search",
    faqs: [
      {
        q: "What is Generative Engine Optimization (GEO)?",
        a: "GEO is the practice of making your brand visible and citable inside AI engines like ChatGPT, Perplexity, Gemini, and Google AI Overviews. Research shows brand mentions correlate with AI citations at r=0.664 — three times stronger than backlinks (r=0.218). GEO combines entity optimization, structured data, llms.txt, AI crawler management, and answer-first content.",
      },
      {
        q: "How is GEO different from traditional SEO?",
        a: "SEO ranks pages in Google's blue links; GEO gets your brand named inside AI-generated answers. Around 80-90% of AI citations come from pages outside Google's top 10, so AI engines reward clear entities, direct answers, statistics, and third-party mentions rather than classic ranking signals alone. HMZ builds for both simultaneously.",
      },
      {
        q: "Can HMZ get my business recommended by ChatGPT?",
        a: "No agency can guarantee a specific AI answer — AI responses are probabilistic. What HMZ does is systematically maximize your citation probability: entity clarity across the web, answer-first content, structured data, llms.txt, AI crawler access, directory and review presence, and monthly citation monitoring across ChatGPT, Perplexity, Gemini, and Claude.",
      },
    ],
  },
  {
    category: "AI Agents & The Future",
    faqs: [
      {
        q: "What is the difference between a chatbot and an AI agent?",
        a: "A chatbot answers questions; an AI agent plans, decides, and executes multi-step work — reading your CRM, drafting quotes, updating records, and triggering workflows. Gartner projects 40% of enterprise applications will embed task-specific AI agents by the end of 2026. HMZ builds governed, auditable agents designed for production, not demos.",
      },
      {
        q: "What is MCP (Model Context Protocol) and why does it matter?",
        a: "MCP is the new industry standard — backed by OpenAI, Google, Microsoft, and AWS — for connecting AI assistants securely to business systems like CRMs, ERPs, and databases. It lets your AI tools read and act on real business data through one governed protocol. HMZ is a first-mover building MCP integrations in the MENA region.",
      },
      {
        q: "Will AI replace my employees?",
        a: "HMZ designs AI as a workforce multiplier, not a replacement: AI drafts, humans approve. Agents handle the repetitive 70-80% (first responses, data entry, follow-ups, scheduling) so your people focus on relationships, judgment, and closing. Every HMZ deployment includes human-in-the-loop handoff by design.",
      },
      {
        q: "How should my business prepare for AI between now and 2030?",
        a: "Start with three foundations: clean, organized business data; documented processes; and one production AI system that proves ROI (usually a chatbot or voice agent). Then expand toward connected agents and a managed AI workforce. HMZ's AGI-readiness consulting maps this 2026-2035 roadmap specifically for your business.",
      },
    ],
  },
];

const allFaqs = faqGroups.flatMap((g) => g.faqs);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.hmz.technology/faq#faq",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const metadata = buildMetadata({
  title: "FAQ — AI Chatbots, Voice Agents, GEO & AI Agents | HMZ Technology",
  description:
    "Direct answers about HMZ Technology's AI services: WhatsApp AI chatbots, AI voice agents, Generative Engine Optimization (GEO), custom AI agents, pricing, deployment speed, and AI strategy for 2026-2030.",
  path: "/faq",
  locale: "en",
  keywords: ["AI chatbot FAQ", "what is GEO", "AI voice agent cost", "AI agency questions", "WhatsApp bot pricing"],
});

export default function FaqPage() {
  return (
    <>
      <Header lang={lang} />
      <main className="bg-[#030014] min-h-screen text-white">
        <section className="max-w-4xl mx-auto px-4 pt-32 pb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 text-center max-w-2xl mx-auto">
            Direct, no-fluff answers about AI chatbots, voice agents, GEO, and how
            HMZ Technology builds production AI systems for businesses in MENA and
            worldwide.
          </p>

          {faqGroups.map((group) => (
            <section key={group.category} className="mt-14">
              <h2 className="text-2xl font-bold text-cyan-300 mb-6">
                {group.category}
              </h2>
              <div className="space-y-4">
                {group.faqs.map((f) => (
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
          ))}

          <div className="mt-16 text-center rounded-2xl border border-purple-400/30 bg-purple-500/10 p-10">
            <h2 className="text-2xl font-bold">Still have questions?</h2>
            <p className="mt-3 text-gray-300">
              Get a free consultation — real answers about your specific business
              in under 24 hours.
            </p>
            <a
              href="/contact"
              className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:opacity-90 transition"
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd(
              [
                { name: "Home", path: "/" },
                { name: "FAQ", path: "/faq" },
              ],
              "en",
            ),
          ),
        }}
      />
    </>
  );
}
