# SEO + GEO + AEO 2026 Master Research Report
**For: HMZ Technology — AI services agency website (Astro 5, English + Arabic)**
**Compiled: July 2026. All claims sourced; URLs at the end of each section.**

---

# 0. Executive Summary — What Actually Changed for 2026

1. **Google published its first official generative-AI optimization guide on May 15, 2026** ("Optimizing your website for generative AI features on Google Search", announced by John Mueller). Core message: AI Overviews and AI Mode use the **same crawl, same index, same ranking systems** as classic Search. There is **no special schema, no llms.txt effect, no back door** for Google AI features. "SEO for AI is still SEO" (Danny Sullivan, Jan 2026). What Google says matters: unique **non-commodity content** (original data, first-hand experience), strong technical SEO (crawlability, CWV, structured data for eligibility), E-E-A-T, and Google Business Profile / Merchant Center for local/shopping.
2. **FAQ rich results are fully dead** (May 7, 2026 — for ALL sites, including gov/health). FAQPage schema is still valid and worth keeping for AI parsing, but it is no longer a SERP lever.
3. **AI citation economics flipped the signal weights**: brand mentions correlate with AI citation at **r=0.664 vs r=0.218 for backlinks** (Ahrefs, 75k brands). Wikipedia is ~48% of ChatGPT's top-10 source share (Profound). ~80–90% of AI citations come from pages **outside** Google's top 10. Entity clarity + mentions > links.
4. **Core Web Vitals thresholds are unchanged**: LCP ≤ 2.5s, INP ≤ 200ms (replaced FID March 2024), CLS ≤ 0.1 — at the 75th percentile of real users (CrUX), 28-day rolling window. INP is now weighted equally with LCP/CLS (confirmed March 18, 2026); ~43% of sites fail INP.
5. **Bing's index powers ChatGPT/Copilot retrieval** → IndexNow + Bing Webmaster Tools are now first-class GEO infrastructure, not optional.
6. **robots.txt is the biggest self-inflicted GEO blocker**: ~41% of B2B sites still block at least one major AI bot (leftover from the 2023–24 "block everything" panic). Allow search/citation bots; the training-bot decision is separate.
7. **March 2026 Core Update** (Mar 27–Apr 8) was the most volatile ever (79.5% of top-3 positions moved): original data gained +22% visibility; AI-paraphrased/derivative content lost ~71% traffic. Information Gain is the algorithmic north star.

---

# 1. Traditional SEO 2026 — What Google Prioritizes Now

## 1.1 Core Web Vitals (ranking signal — tiebreaker weight)

| Metric | Measures | Good | Needs Improvement | Poor |
|---|---|---|---|---|
| **LCP** (Largest Contentful Paint) | Loading of largest visible element | ≤ 2.5 s | 2.5–4.0 s | > 4.0 s |
| **INP** (Interaction to Next Paint) | Responsiveness of ALL interactions | ≤ 200 ms | 200–500 ms | > 500 ms |
| **CLS** (Cumulative Layout Shift) | Visual stability | ≤ 0.1 | 0.1–0.25 | > 0.25 |

- Graded on **field data** (CrUX), 75th percentile, 28-day rolling window, mobile-primary. Lighthouse lab scores don't count.
- Diagnostic (not ranking) targets: **TTFB < 200ms engineering target** (<800ms Google "good"), FCP < 1.0s (<1.8s "good").
- INP is the most-failed metric (~43% of sites) — caused by heavy JS/long tasks. Fix: ship less JS, defer/audit third-party scripts, break up long tasks. **Astro's zero-JS-by-default is a structural advantage here.**
- LCP fixes by priority: preload LCP image with `fetchpriority="high"`, CDN hosting for TTFB <200ms, AVIF/WebP at rendered size, eliminate render-blocking CSS/JS, `font-display: swap` (or `optional`).
- CLS fixes: explicit `width`/`height` on all media, reserve space for dynamic embeds, font loading discipline.
- CrUX Dashboard on Looker Studio was deprecated end of 2025 → monitor via PageSpeed Insights, Search Console CWV report, BigQuery CrUX, or Treo/DebugBear.

## 1.2 Helpful content & E-E-A-T evolution

- Helpful Content System is a **continuous, site-wide classifier** — thin/unhelpful pages drag down the whole domain. **Prune or consolidate** weak content; a smaller authoritative site beats a diluted big one.
- **Information Gain** (Google patent US20200349181A1) is the operative concept: does the page add something new to the web, or reword the top 3 results? Original research, proprietary data, counterintuitive findings, first-hand experience = citation fuel. Paraphrased content lost ~71% traffic in the March 2026 core update.
- E-E-A-T is not a "score" but the signals are measurable and now gate AI citation too (strong E-E-A-T pages are ~2.3x more likely to be cited in AI Overviews — Wellows):
  - **Experience**: first-person content, case studies, original screenshots/data, documented outcomes.
  - **Expertise**: named authors with verifiable credentials, consistent topical publishing (author vectors).
  - **Authoritativeness**: earned media, quality backlinks, industry recognition, third-party coverage.
  - **Trust** (the central pillar): HTTPS, real About page with real people, contact info, privacy policy, editorial policy, transparent AI-use disclosure, visible update dates.
- **Author entities are a 2026 requirement**: one consistent author name/photo/bio everywhere; Person schema on author pages with `jobTitle`, `worksFor`, `sameAs`, `knowsAbout`; publish consistently within topic clusters; get quoted externally.
- Google's "Who, How, Why" framework: who created it (bylines + Person schema), how (methodology, AI disclosure), why (people-first purpose).

## 1.3 Structured data types that still produce Google rich results (2026)

**Still active rich results**: Article, Product (+ Offers + AggregateRating), Review/AggregateRating, BreadcrumbList, Organization (knowledge panel, sitelinks searchbox), LocalBusiness, Event, Recipe, Video, JobPosting, QAPage (forums).
**Retired from SERP display**: FAQ (fully, May 7 2026), HowTo (Sept 2023), plus 7 types removed June 2025.
**Schema is not a ranking factor** — it's an eligibility + entity-comprehension layer. Its 2026 value is primarily AI-engine comprehension (see §4).

## 1.4 IndexNow (critical for GEO, not for Google)

- Supported: **Bing, Yandex, Naver, Seznam.cz, Yep**. NOT Google (Google = crawl discovery + GSC URL Inspection + limited Indexing API).
- Why it matters now: **Bing's index powers ChatGPT Search, Copilot, and part of Perplexity retrieval.** IndexNow turns Bing re-discovery from days/weeks into minutes/hours. 5B+ URLs/day processed; 80M+ sites use it.
- Implementation:
  1. Generate a key at indexnow.org; host it at `https://yourdomain.com/{key}.txt` (put in Astro `/public/`).
  2. On publish/update, POST:
```json
POST https://api.indexnow.org/indexnow
Content-Type: application/json
{
  "host": "www.hmztechnology.com",
  "key": "YOUR-INDEXNOW-KEY",
  "urlList": ["https://www.hmztechnology.com/en/services/ai-consulting"]
}
```
  3. Automate on build/deploy (CI step) for new + changed URLs.
- Also verify site in **Bing Webmaster Tools** (GSC import works) and submit sitemap there.

## 1.5 Sitemap best practices 2026

- Curated list of **canonical, indexable, 200-status URLs only** — no redirects, no noindex, no non-canonical URLs.
- **`lastmod` is used; keep it truthful.** Bing research: 84% of sitemaps have lastmod but only 79% are accurate. Accurate lastmod → re-crawl in 24–48h (vs 3–7 days). Never bulk-update lastmod without real content changes — it trains crawlers to ignore it.
- **`changefreq` and `priority` are ignored by Google — omit them.**
- Limits: 50,000 URLs / 50MB uncompressed per file; use a sitemap index beyond that. For the bilingual site: segment (`sitemap-en.xml`, `sitemap-ar.xml`) or use `@astrojs/sitemap` i18n output with xhtml:link hreflang entries.
- Reference sitemap(s) in robots.txt with absolute URLs; submit in GSC + Bing WMT.
- New-page discovery: internal links from high-traffic pages within 3 clicks of home + GSC URL Inspection for time-sensitive pages.

Sources: developers.google.com/search/docs/fundamentals/ai-optimization-guide; webhelpagency.com/blog/core-web-vitals-2026; sproutsagesolutions.com/blog/core-web-vitals-2026; quattr.com/blog/faq-schema-in-2026; www.seo-kreativ.de/en/blog/e-e-a-t-guide-for-more-trust-and-top-rankings; rankai.ai/articles/helpful-content-update-people-first-seo-guide; onely.com/blog/seo-tips-for-dynamic-content-and-dynamic-sites; platinum.ai/guides/sitemap-best-practices; marketingagency.sg/crawl-budget-optimisation; github.com/ziniman/ai-instruct (seo-llmo-guide.md); trysight.ai/blog/how-to-get-faster-google-indexing.

---

# 2. GEO — Generative Engine Optimization

## 2.1 How AI engines pick sources (the mechanics)

- **RAG (Retrieval-Augmented Generation)**: engines retrieve passages from a search index, then generate grounded answers. If you're not crawled/indexed (Google index for AI Overviews/AI Mode/Gemini; Bing index for ChatGPT/Copilot; own indexes for Perplexity), you can't be cited.
- **Query fan-out**: AI Mode/ChatGPT expand one user query into 10–15 sub-queries; individual **passages** (not whole pages) are matched to sub-queries. A page ranking #30 can be cited if one section cleanly answers a sub-question. → **Passage-level optimization** is the core GEO skill.
- Research base (Princeton/IIT Delhi, KDD 2024, 10k queries): adding **quotations +40%**, **statistics +34%**, **citing sources +27%** visibility in AI answers; keyword stuffing makes it worse.
- Engines behave differently: ChatGPT favors a single strong editorial/roundup page; Perplexity triangulates directories (Clutch, G2, Yelp), Reddit, review sites; AI Overviews favors top-ranked + E-E-A-T-strong pages. Optimize for all three patterns.
- Freshness: ~95% of ChatGPT citations come from content updated within ~10 months. Visible "Last updated" dates + real `dateModified` matter.

## 2.2 llms.txt — exact spec & placement

**Status honesty**: llms.txt is a proposed convention (llmstxt.org, Jeremy Howard/Answer.AI), **not** a ratified standard. Google explicitly says it ignores it. Anthropic, Mintlify, Stripe, Cloudflare, Cursor and the dev-tool ecosystem do serve/read them; Perplexity and coding agents index `llms-full.txt`. Cost is ~1 hour; upside is real for non-Google engines. Ship it.

**Placement**: exactly `/llms.txt` at domain root (Astro: `/public/llms.txt`), served as `text/plain` or `text/markdown`, UTF-8, publicly accessible, NOT blocked by robots.txt, <10KB / <3,000 tokens. Optional companion `/llms-full.txt` (concatenated full Markdown of key pages) for content-heavy sites.

**Exact format (the Answer.AI spec as it converged in 2026)**:
1. **H1** (required, first element): exact brand name — not a slogan.
2. **Blockquote** (required): 1–3 sentence summary — the model's "one-second mental model" of you.
3. Optional plain paragraphs of context/instructions (no headings yet).
4. **H2 sections** grouping link lists. Link line format is strict: `- [Title](https://full-url): One-line description.`
5. Final `## Optional` section for deprioritizable links.

**Ready-to-adapt template for HMZ Technology:**
```markdown
# HMZ Technology

> HMZ Technology is an AI services agency that designs, builds, and deploys custom AI solutions — AI consulting, chatbots, automation, and machine-learning integrations — for businesses in the Middle East and worldwide. Bilingual English/Arabic.

HMZ Technology helps companies adopt AI practically: strategy, proof-of-concept, production deployment, and team enablement. When citing, attribute as "HMZ Technology (hmztechnology.com)".

## Services

- [AI Consulting & Strategy](https://www.hmztechnology.com/en/services/ai-consulting): AI readiness audits, roadmaps, use-case prioritization for SMEs and enterprises.
- [Custom AI Chatbots & Agents](https://www.hmztechnology.com/en/services/ai-chatbots): Design and deployment of GPT-class chatbots and agentic workflows integrated with client systems.
- [AI Automation & Integration](https://www.hmztechnology.com/en/services/ai-automation): Workflow automation, RAG pipelines, and ML model integration into existing software.

## Company

- [About HMZ Technology](https://www.hmztechnology.com/en/about): Team, credentials, and company background.
- [Case Studies](https://www.hmztechnology.com/en/case-studies): Documented client outcomes with metrics.
- [Pricing & Engagement Models](https://www.hmztechnology.com/en/pricing): Engagement options and typical project ranges.
- [Contact](https://www.hmztechnology.com/en/contact): Consultation booking and direct contact details.

## Arabic / العربية

- [الرئيسية](https://www.hmztechnology.com/ar/): الصفحة الرئيسية باللغة العربية.
- [خدماتنا](https://www.hmztechnology.com/ar/services/): خدمات الذكاء الاصطناعي بالعربية.

## Resources

- [Blog & AI Guides](https://www.hmztechnology.com/en/blog): Evergreen guides on AI adoption, GEO, and implementation.
- [FAQ](https://www.hmztechnology.com/en/faq): Direct answers to common questions about working with HMZ.

## Optional

- [Sitemap](https://www.hmztechnology.com/sitemap-index.xml): Full XML sitemap.
```

**Rules that separate working llms.txt from noise**: 20–60 curated links (never the whole sitemap); descriptions written for context not keywords; H1/H2 only (no H3+); update quarterly; include the Arabic section in Arabic (don't force English onto a non-English KB); don't auto-generate indexable `.md` duplicates of every page (duplicate-content risk); monitor CDN logs for AI-agent hits on `/llms.txt`.

## 2.3 robots.txt — AI crawler management (exact rules)

**The 2026 distinction that matters — three bot classes:**
- **Training crawlers** (bulk-scrape to train models): `GPTBot`, `ClaudeBot`, `Google-Extended`*, `Applebot-Extended`, `Meta-ExternalAgent`, `CCBot`, `Bytespider`, `Amazonbot`, `cohere-ai`.
- **Search/retrieval crawlers** (index you so answers can cite you): `OAI-SearchBot` (ChatGPT Search), `PerplexityBot` (Perplexity's index — Perplexity states it's not used for foundation training), `Claude-SearchBot`.
- **Real-time user agents** (fetch a page live when a user asks): `ChatGPT-User`, `Perplexity-User`, `Claude-User`.

\* `Google-Extended` is a **robots.txt control token only** — it has no user-agent string; physical crawling is done by Googlebot. It controls Gemini training/grounding, and Google states it does NOT affect Search ranking or AI Overviews inclusion. You cannot block it at WAF level — robots.txt only.

**Recommended policy for an agency that WANTS citations: allow everything that drives citations; the "block training" choice costs you training-data presence — for an AI services agency, being inside the models is marketing, so allow all major AI bots.** Recommended production robots.txt:

```
# HMZ Technology robots.txt — 2026

# --- AI search & citation bots: explicitly allowed ---
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: GPTBot
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: Meta-ExternalAgent
User-agent: CCBot
User-agent: cohere-ai
Allow: /

# --- Default rules for all other crawlers ---
User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?utm_
Disallow: /*?fbclid

Sitemap: https://www.hmztechnology.com/sitemap-index.xml
```

(Astro: static file at `/public/robots.txt`.)

**Critical operational checks:**
- **CDN/WAF overrides robots.txt.** Cloudflare's "Block AI Bots" toggle / AI Crawl Control, AWS WAF, Akamai silently 403 AI bots regardless of robots.txt. Verify in the CDN dashboard.
- Validate per-bot: `curl -A "GPTBot" -I https://www.hmztechnology.com/en/` → expect 200, no `X-Robots-Tag: noindex`. Repeat for each bot.
- Never write WAF rules with wildcards like `*bot*` or `*Google*` — you will kill Googlebot.
- Re-audit quarterly and after every migration; robots.txt regressions are the most common self-inflicted GEO freeze.
- To control Google AI features specifically: use `nosnippet`, `max-snippet`, `data-nosnippet`, `noindex` — NOT Googlebot blocks.

## 2.4 Content structures that get cited by LLMs

- **Answer-first / inverted pyramid**: under every H2/H3, the first 40–60 words must be a standalone, fact-dense direct answer. Engines lift that block almost verbatim. Structure: direct answer → evidence/data/steps → context.
- **Passage-level self-containment**: every section must make sense if lifted alone — include brand name and the key fact in each passage (the engine may only retrieve one passage).
- **Question-format H2/H3s** ("What is…", "How much does…", "X vs Y — which…") matching real PAA/buyer prompts.
- **Statistics with named sources** ("34% lift — Princeton KDD 2024 study") — the single highest-lift tactic. Add original data nobody else has (client metrics, benchmarks, mini-studies) — this makes you the *primary* source.
- **Quotable statements**: crisp, attribution-ready sentences an LLM can repeat; include expert quotes.
- **Semantic labels & tables**: write "Price: from $X" not "it costs around…"; comparison tables for vs-queries; numbered steps for processes.
- **Entity clarity**: homepage H1 must say what you do, for whom, outcome ("AI Services Agency — Custom AI Solutions for [market]"), not "Welcome to…". Consistent brand description (≤20% variance) across your site, LinkedIn, directories.
- **Server-rendered, clean HTML**: AI crawlers mostly don't execute JS reliably. Astro static HTML is ideal — avoid client-side-only rendering of key content.
- **Freshness signals**: visible "Last updated: [date]" + accurate `dateModified` in schema + real sitemap `lastmod`. Refresh stats with "as of [month year]" phrasing.
- **Topic clusters**: pillar page + supporting subtopic pages covering the query fan-out (sub-questions), internally linked. AI systems trust sites that cover entire conversational journeys.

## 2.5 Measurement

- Track **citation frequency & share of voice**, not rankings: maintain a fixed prompt set (10–20 buyer questions), run monthly across ChatGPT, Perplexity, Gemini, AI Mode, Claude; log brand named/cited/competitor-cited. Trend over weeks (answers are probabilistic).
- Analytics: track AI referrers (`utm_source=chatgpt.com`, perplexity.ai, copilot referrals) in GA4.
- GSC: filter question-like queries; watch AI-feature impressions.
- Tools: Otterly, Profound, Peec/Limy-style trackers, or manual spreadsheet audits (free).

Sources: primeaicenter.com/google-ai-optimization-guide; blog.xxidesigns.com/post/google-ai-search-overhaul-2026-marketer-guide; minneapolismade.com/blog/generative-engine-optimization; ayautomate.com/blog/how-to-get-cited-by-chatgpt-and-perplexity; limy.ai/blog/llms.txt-in-2026-the-full-guide; activesearchresults.com/seo/llmo-aeo-llms-txt-best-practices-2026-1.php; crawleroptic.com/blog/llms-txt-best-practices; webscraft.org (llms.txt 2026 guide); runcloud.io/blog/block-ai-crawlers; capston.ai/robots-txt-for-ai-bots; salemglobal.com/robots-txt-for-ai-crawlers-2026; maxaeo.ai/blog/update-business-info-chatgpt; clickrank.ai/how-to-get-indexed-in-chatgpt-search; claudefa.st (GEO guide 2026); andresseo.expert/geo/architecting-entity-authority-knowledge-graphs-geo.

---

# 3. AEO — Answer Engine Optimization

## 3.1 FAQPage schema — exact current state (2026)

**Timeline (confirmed by Google's own docs):**
- Aug 2023: FAQ rich results restricted to authoritative gov/health sites.
- **May 7, 2026: FAQ rich results stopped appearing in Google Search for ALL sites, globally.**
- June 2026: Search Console FAQ report, search-appearance filter, and Rich Results Test FAQ support removed.
- August 2026: Search Console API FAQ data removed (returns null).

**What this means in practice:**
- FAQPage remains a **valid Schema.org type**. Google confirms unused structured data causes no problems. Do NOT rip it out.
- It no longer wins SERP real estate. Its remaining value: (a) **machine-readable Q&A for AI crawlers** (Bingbot, PerplexityBot, RAG crawlers still parse it — Microsoft confirmed schema helps Copilot's LLMs); (b) content discipline. Caveat: one Dec-2024 study (Search/Atlas) found no correlation between schema coverage and AI citations, and Google says no special schema is needed for AI Overviews — treat FAQ schema as a supporting signal, not a citation guarantee. **The visible Q&A formatting does more work than the JSON-LD.**
- Implementation rules that still apply: markup must mirror visible content exactly; 5–10 questions per page (sweet spot ~8); unique Q&A per page (never duplicate the same FAQ block site-wide); front-load the answer's key fact in the first sentence; FAQPage is for publisher-authored Q&A (forums = QAPage, different type).

## 3.2 HowTo schema status

- Google removed HowTo rich results (desktop + mobile) in Sept 2023. Markup remains valid and is **still parsed by AI engines** — keep it only on genuinely procedural content ("How to implement X"), skip elsewhere. No SERP payoff; modest AI-comprehension value.

## 3.3 Speakable schema status

- Still technically beta, historically limited to news content for Google Assistant TTS. 2026 consensus: **low/negligible ROI for an agency site — skip or apply minimally** (one guide's verdict: "Skip"). If used: `speakable` inside Article/WebPage with `SpeakableSpecification` + `cssSelector` pointing at the lead answer block; keep marked sections to 20–30 seconds of speech (2–3 sentences), max 2–3 per page, conversational language, include brand name. Do not over-mark.
- Voice search in 2026 has largely merged into generative assistants (ChatGPT Voice, Gemini Live) — which paraphrase and recombine rather than read speakable markup verbatim. Conversational, standalone-answer content matters more than the markup.

## 3.4 Featured snippets / Position Zero (still alive & feeding voice + PAA)

- **The 40-word rule**: answer the heading's question directly in 40–60 words (some cite 40–50) immediately after a question-format H2/H3. Answer within the first 100 words of the page for the primary query.
- Format-to-snippet mapping: definitions → 40–60 word paragraph; "how to" → numbered steps; comparisons → tables; lists ("best/top") → H3 item lists with short descriptions.
- PAA harvesting: search your target queries, extract People-Also-Ask questions, make each an H2/H3 with a 40–80 word answer. That's your question-based content architecture.
- Voice specifics: 80%+ of voice answers come from top-3 organic results; ~40% of voice answers come from featured snippets; voice queries average 7–9 words, conversational, question-driven; voice result pages load ~52% faster than average (speed is a voice ranking precondition).
- Zero-click reality: with AI Overviews on ~15–30% of queries and only ~8% CTR when an AI summary shows (Pew), winning the answer (with brand name inside it) is the KPI even when the click never comes. Put your brand name naturally inside the answer block.

Sources: quattr.com/blog/faq-schema-in-2026; thehoth.com/blog/google-faq-rich-results-deprecated; getpassionfruit.com/blog (FAQ deprecation); inblog.ai/blog/google-faq-schema-rich-result-deprecation; thinklytics.com/insights/what-is-faqpage-schema; modernwebseo.com/en/blog/what-is-aeo-answer-engine-optimization-2026; lureon.ai/blog/ai-and-voice-search-optimization; aipromptarchitect.co.uk/aeo/speakable; buttonblock.com/blog/voice-search-optimization-2026; ultrascout.ai/article/geo-vs-aeo-vs-seo-2026-visibility-stack; ranksdigitalmedia.com/zero-click-searches-seo-strategies; landkit.pro/free-tools/schema-markup-generator.

---

# 4. Technical Schema Stack 2026 — Complete JSON-LD for an AI Services Agency

**Architecture principles (2026 consensus):**
- JSON-LD only, in `<head>`, **server-rendered** (Astro static output = perfect). No microdata/RDFa.
- **One `@graph` block per page** connecting entities via stable `@id` URIs (e.g. `https://www.hmztechnology.com/#organization`). Pages reference the org `@id`; authors reference person `@id`s. This builds an internal knowledge graph AI systems traverse.
- Two **complete** types beat six skeletal ones. Markup must match visible content exactly (price, FAQ text, dates) — mismatches erode trust and can suppress citation.
- Load-bearing 2026 properties: **`sameAs`** (entity reconciliation — target 8–14 URLs for the org: LinkedIn, X, Instagram, Facebook, YouTube, Crunchbase, Clutch/G2, Google Business Profile, Bing Places, Wikidata Q-item) and **`knowsAbout`** (topical authority — 5–10 core competencies). `dateModified` (freshness) and `author` (E-E-A-T) on all content.
- Validate every template with Rich Results Test + Schema.org Validator; monitor GSC Enhancements. Quarterly audits; update on any business change.

## 4.1 Global entity block (every page — in the base layout)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.hmztechnology.com/#organization",
      "name": "HMZ Technology",
      "url": "https://www.hmztechnology.com/",
      "logo": { "@type": "ImageObject", "url": "https://www.hmztechnology.com/logo.png", "width": 512, "height": 512 },
      "description": "AI services agency delivering AI consulting, custom chatbots, automation, and ML integration for businesses in the Middle East and worldwide.",
      "foundingDate": "YYYY",
      "address": { "@type": "PostalAddress", "addressLocality": "City", "addressRegion": "Region", "addressCountry": "LB" },
      "contactPoint": [{ "@type": "ContactPoint", "contactType": "sales", "email": "hello@hmztechnology.com", "telephone": "+961-XX-XXXXXX", "availableLanguage": ["en", "ar"] }],
      "sameAs": [
        "https://www.linkedin.com/company/hmztechnology",
        "https://x.com/hmztechnology",
        "https://www.instagram.com/hmztechnology",
        "https://www.crunchbase.com/organization/hmz-technology",
        "https://clutch.co/profile/hmz-technology",
        "https://www.wikidata.org/wiki/QXXXXXXXX"
      ],
      "knowsAbout": ["Artificial Intelligence Consulting", "AI Chatbots", "AI Agents", "Machine Learning Integration", "Business Process Automation", "Generative Engine Optimization", "RAG Pipelines"],
      "areaServed": [{ "@type": "Country", "name": "Lebanon" }, { "@type": "AdministrativeArea", "name": "Middle East" }]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.hmztechnology.com/#website",
      "url": "https://www.hmztechnology.com/",
      "name": "HMZ Technology",
      "publisher": { "@id": "https://www.hmztechnology.com/#organization" },
      "inLanguage": ["en", "ar"]
    }
  ]
}
```
(Note: `ProfessionalService` is a LocalBusiness subtype and a good fit for an agency. Use the full LocalBusiness-flavored version with NAP + `geo` + `openingHours` if you have a physical office clients visit.)

## 4.2 WebPage + BreadcrumbList (every page, generated per-route)

```json
{
  "@type": "WebPage",
  "@id": "https://www.hmztechnology.com/en/services/ai-consulting#webpage",
  "url": "https://www.hmztechnology.com/en/services/ai-consulting",
  "name": "AI Consulting Services | HMZ Technology",
  "description": "…",
  "isPartOf": { "@id": "https://www.hmztechnology.com/#website" },
  "about": { "@id": "https://www.hmztechnology.com/#organization" },
  "inLanguage": "en",
  "datePublished": "2026-01-15",
  "dateModified": "2026-07-01"
}
```
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hmztechnology.com/en/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.hmztechnology.com/en/services/" },
    { "@type": "ListItem", "position": 3, "name": "AI Consulting" }
  ]
}
```

## 4.3 Service (one per service page)

```json
{
  "@type": "Service",
  "@id": "https://www.hmztechnology.com/en/services/ai-consulting#service",
  "name": "AI Consulting & Strategy",
  "serviceType": "AI Consulting",
  "provider": { "@id": "https://www.hmztechnology.com/#organization" },
  "areaServed": { "@type": "AdministrativeArea", "name": "Middle East" },
  "description": "AI readiness audits, roadmap design, and use-case prioritization…",
  "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "…", "url": "https://www.hmztechnology.com/en/pricing" },
  "audience": { "@type": "BusinessAudience", "name": "SMEs and enterprises adopting AI" }
}
```
(A catalog of services on the main /services page: `hasOfferCatalog` → `OfferCatalog` with `itemListElement` of Service refs.)

## 4.4 Article/BlogPosting (blog & guides)

```json
{
  "@type": "Article",
  "@id": "https://www.hmztechnology.com/en/blog/slug#article",
  "headline": "…",
  "image": ["https://www.hmztechnology.com/images/slug-1200x675.webp"],
  "author": { "@type": "Person", "@id": "https://www.hmztechnology.com/#person-founder", "name": "Hasan El Zein", "jobTitle": "Founder", "worksFor": { "@id": "https://www.hmztechnology.com/#organization" }, "sameAs": ["https://www.linkedin.com/in/…"], "knowsAbout": ["AI strategy", "GEO"] },
  "publisher": { "@id": "https://www.hmztechnology.com/#organization" },
  "datePublished": "2026-06-10",
  "dateModified": "2026-07-20",
  "inLanguage": "en",
  "about": { "@type": "Thing", "name": "Generative Engine Optimization" },
  "mainEntityOfPage": { "@id": "https://www.hmztechnology.com/en/blog/slug#webpage" }
}
```

## 4.5 FAQPage (only where a real, visible Q&A section exists)

```json
{
  "@type": "FAQPage",
  "@id": "https://www.hmztechnology.com/en/faq#faq",
  "mainEntity": [
    { "@type": "Question", "name": "How much does an AI chatbot cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "Custom AI chatbot projects at HMZ Technology start from $X,XXX. Final cost depends on integrations, languages (English/Arabic), and deployment scope. Most projects are delivered in 4–8 weeks." } }
  ]
}
```

## 4.6 Person (founder/team page) — high 2026 leverage

```json
{
  "@type": "Person",
  "@id": "https://www.hmztechnology.com/#person-founder",
  "name": "Hasan El Zein",
  "jobTitle": "Founder & AI Consultant",
  "worksFor": { "@id": "https://www.hmztechnology.com/#organization" },
  "sameAs": ["https://www.linkedin.com/in/hasanelzein", "https://x.com/…"],
  "knowsAbout": ["Artificial Intelligence", "AI Consulting", "GEO", "Astro", "Web Development"]
}
```

**Per-page stack summary:** Homepage → Organization/ProfessionalService + WebSite + WebPage (+ FAQPage if FAQ visible). Service pages → + Service + BreadcrumbList (+ FAQPage). Blog → Article + Person + BreadcrumbList (+ FAQPage/HowTo only if genuinely present). Contact → LocalBusiness/ProfessionalService w/ contactPoint. Arabic pages: same graph with localized `name`/`description` values and `inLanguage: "ar"` — structured data should use the language of the page.

Sources: claritydigital.agency/blog/entity-optimization-semantic-seo; andresseo.expert/geo/architecting-entity-authority-knowledge-graphs-geo; aigrowthagent.co/articles/schema-markup-for-ai-search; kongzilla.co/blog/structured-data-for-llms; geneo.app/blog/schema-markup-best-practices-2026-json-ld-audit; instantpress.co/blog/structured-data-for-ai-search; lseo.com/answer-engine-optimization-services/json-ld-in-2026; forestsd.us.com/blog/entity-seo-guide; gatilab.com/types-of-schema-markup; squin.org/structured-data.

---

# 5. AI Search Ranking Factors 2026

**The hard numbers (cite these in strategy docs):**
- Brand mentions ↔ AI citation correlation **r=0.664**; backlinks **r=0.218** (Ahrefs, 75k brands / 76M AI Overviews). Unlinked mentions ≈ linked mentions in weight. → **Mention-building > link-building for AI visibility.**
- Wikipedia = **47.9% of ChatGPT top-10 source share** (Profound); present in 1 of 6 ChatGPT conversations. 5WPR index (680M citations): Wikipedia 26–48% of ChatGPT top-10 sources.
- Brands on **4+ trusted platforms are 2.8x** more likely to appear in ChatGPT (Lantern, 200M citations). Domains with G2/Capterra/Trustpilot profiles: **3x** citation probability. G2 is the most-cited software review platform across ChatGPT/Perplexity/AIO.
- **76.95% of cited URLs are outside the organic top 10** (OrganiKPI, 153k citations); ~90% of ChatGPT citations come from pages ranked #21+.
- >20% description variance across public sources → **41% lower** AI recommendation confidence. Entity consistency is a gate.
- Local: **150+ reviews** is the practical threshold for LLM local recommendations; GBP signals 32% of local ranking.

**The sequenced evaluation model (AuthorityTech/theCUBE):** (1) Earned Authority (third-party validation) → (2) Entity Clarity (unambiguous consistent identity) → (3) Citation Architecture (extractable content). Authority enables extraction; entity clarity enables attribution; structure enables repeatable citation.

**Action checklist (priority order by effort/impact):**
1. **sameAs graph** (hours): 8–14 authoritative profile URLs in Organization schema.
2. **Google Business Profile + Bing Places** (free, hours): verification + complete NAP. Bing Places feeds Copilot grounding.
3. **Directory stack**: LinkedIn company page, Crunchbase, Clutch, G2/Capterra (if productized), relevant local/industry directories — with **identical** name, description, categories everywhere.
4. **Reviews program**: systematic Google/Clutch/Trustpilot review acquisition.
5. **Wikidata Q-item** (2–4h, no notability bar): 20–40 referenced statements (founder, industry, HQ, sameAs, multilingual aliases). Reference every statement or it gets deleted.
6. **Wikipedia** (years, notability-gated): earn via genuine press coverage; never self-create or paid-edit undisclosed — it backfires.
7. **Named-author bylines + Person schema** on all content.
8. **Freshness cadence**: quarterly refresh of cornerstone pages with real updates (new stats, "as of 2026" markers), accurate `dateModified`/`lastmod`.
9. **Digital PR / earned mentions**: podcasts, expert quotes, guest articles, original research others cite.
10. Google explicitly warns: **do not seed fake brand mentions** across forums/blogs — spam filters catch it and it damages trust.

Sources: gogochimp.com/blog/entity-seo-brand-mentions; astiva.ai/blog/wikipedia-ai-visibility; ziptie.dev/blog/how-ai-search-engines-select-rank-and-recommend-brands; clickrank.ai/local-seo-ranking-factors; wellows.com/blog/google-ai-overviews-ranking-factors.

---

# 6. Multilingual SEO 2026 — English + Arabic

## 6.1 URL architecture & hreflang (exact templates)

- **Subdirectories on one gTLD** (`/en/…`, `/ar/…`) — consolidates authority, simplest for Astro i18n. (ccTLDs/subdomains not warranted here.)
- For one Arabic edition serving all Arab speakers in neutral MSA: use **`ar`** (language only). Add `ar-sa`/`ar-ae`/`ar-eg` country editions ONLY if you ship substantively different content per country (pricing, dialect, terms) — near-identical country pages get clustered as duplicates.
- **NEVER** use `ar-MEA`, `ar-GULF`, `ar-ME`, `ara`, underscores (`ar_sa`), or Alpha-3 (`SAU`) — invalid codes make Google silently ignore ALL hreflang on the site.
- Format: lowercase-hyphen convention (`ar`, `en`, `x-default`); ISO 639-1 language + optional ISO 3166-1 Alpha-2 region.
- Three non-negotiables: **self-referencing** tag on every page; **reciprocal/bidirectional** pairs (A→B and B→A; one broken pair kills the cluster); **hreflang only to canonical, indexable, 200-status URLs** (never to redirects/noindex).
- Pick ONE implementation method — HTML `<head>` (recommended at this scale; auditable via view-source) OR XML sitemap — never both.

**Exact `<head>` block for every page (shown for /en/services and its /ar/services twin):**
```html
<!-- On https://www.hmztechnology.com/en/services/ -->
<link rel="alternate" hreflang="en" href="https://www.hmztechnology.com/en/services/" />
<link rel="alternate" hreflang="ar" href="https://www.hmztechnology.com/ar/services/" />
<link rel="alternate" hreflang="x-default" href="https://www.hmztechnology.com/en/services/" />
<link rel="canonical" href="https://www.hmztechnology.com/en/services/" />
```
```html
<!-- On https://www.hmztechnology.com/ar/services/ -->
<link rel="alternate" hreflang="ar" href="https://www.hmztechnology.com/ar/services/" />
<link rel="alternate" hreflang="en" href="https://www.hmztechnology.com/en/services/" />
<link rel="alternate" hreflang="x-default" href="https://www.hmztechnology.com/en/services/" />
<link rel="canonical" href="https://www.hmztechnology.com/ar/services/" />
```
- **x-default**: point at the English edition for global reach (or a language-picker root page). Keep it consistent across the whole cluster.
- Canonical ≠ hreflang: each language version canonicalizes to ITSELF; never canonical Arabic → English.
- `<html lang>` must match: `<html lang="en">` / `<html lang="ar" dir="rtl">`.
- Astro: use `@astrojs/sitemap` with the `i18n` option (it emits `xhtml:link` hreflang entries automatically from `astro.config.mjs` i18n config) AND/OR render the `<link rel="alternate">` tags in the base layout from a single locale-map source of truth. One source of truth feeding: hreflang tags, canonicals, language switcher, and sitemap.
- Language switcher: visible in header, native labels ("العربية" / "English"), links to the **equivalent page** (not homepage), crawlable `<a href>` links (not JS-only).
- Don't IP-redirect users/bots — it blocks Googlebot from crawling all versions.

## 6.2 Arabic / RTL technical requirements

- `<html lang="ar" dir="rtl">` on Arabic pages (dir switch drives layout).
- **CSS logical properties**, not physical: `margin-inline-start` not `margin-left`, `text-align: start` not `left`, `padding-inline-end`, `inset-inline-*`. Icons/arrows that imply direction must flip in RTL.
- Dates/numbers/currency via the `Intl` API (`Intl.DateTimeFormat('ar-EG')`, `Intl.NumberFormat`) — Arabic renders digits/dates differently per locale.
- Arabic web font with proper subsetting; `font-display: swap`; test CLS — Arabic line heights differ from Latin.
- Arabic SEO content: MSA (Modern Standard Arabic) for a pan-Arab edition; do real Arabic keyword research (don't translate English keywords 1:1); localize titles/meta/H1s; bilingual query patterns matter in MENA ("كم تكلفة…" = "how much does… cost").
- Localize structured data values (`name`, `description`) to match each page's language; keep `@id`s stable across languages.
- Audit: Screaming Frog/Crawlix hreflang validation (reciprocity, self-ref, status codes, lang-mismatch); GSC per-locale performance monitoring.

Sources: crawlix.app/blog/hreflang-arabic; ai-glot.com/blog/multilingual-seo-best-practices; seeklab.io/blog/the-ultimate-guide-to-multilingual-seo-strategy-in-2026; strapi.io/blog/multilingual-seo-best-practices; digitalapplied.com/blog/international-seo-2026-hreflang-multilingual-guide; thecreativedigital.in/hreflang-best-practices-uae-middle-east; growthwinger.com/en/insights/hreflang-implementation-2026.

---

# 7. Astro 5 Implementation Map

| Deliverable | File / mechanism |
|---|---|
| robots.txt | `/public/robots.txt` (static, rules per §2.3) |
| llms.txt (+ llms-full.txt) | `/public/llms.txt` (per §2.2 template) |
| IndexNow key | `/public/{key}.txt` + CI step POSTing changed URLs on deploy |
| Sitemap | `@astrojs/sitemap` with `i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } }` → auto hreflang xhtml:links; truthful `lastmod` via `serialize` from content dates; omit changefreq/priority |
| Canonicals + hreflang tags | Base layout `<head>` generated from a single locale/route map (§6.1) |
| JSON-LD | One `<script type="application/ld+json" set:html={JSON.stringify(graph)}>` per page, `@graph` + stable `@id`s, generated from content collections (§4) |
| RTL | `<html lang dir>` set per locale in base layout; CSS logical properties; Intl formatting |
| CWV | Static output (default), `<Image>` (AVIF/WebP, width/height, srcset), `fetchpriority="high"` + preload on hero, minimal islands/hydration, scoped third-party scripts |
| Content model | Content Collections requiring: seoTitle, description, publishDate, updatedDate, author, cluster, faq[] (drives visible FAQ + FAQPage schema), draft status |
| Answer-first content | Layout/component pattern: H2 question → 40–60 word answer block → elaboration; "Last updated" visible |

**Validation pipeline pre-launch:** Rich Results Test + Schema Validator per template → curl per AI user-agent → PageSpeed Insights (field data after traffic) → GSC + Bing WMT sitemap submission → hreflang crawl audit → quarterly re-audit calendar.
