# 🌍 HMZ Technology — Off-Site Domination Kit (SEO/GEO 2026)

Everything below is **ready to copy-paste**. Entity consistency is critical:
use the EXACT same name, description, phone, email, and URL everywhere.
AI engines cross-check: >20% description variance = 41% lower recommendation confidence.

## 🔑 Canonical Entity Data (use EXACTLY this everywhere)

- **Name:** HMZ Technology
- **URL:** https://www.hmz.technology
- **Email:** sales@hmz.technology
- **Phone/WhatsApp:** +961 70 106 083
- **Location:** Beirut, Lebanon
- **Founded:** 2023
- **Founder:** Hasan El Zein

**Short description (160 chars — for directories):**
> HMZ Technology builds production AI systems for businesses: AI chatbots (WhatsApp/Instagram), AI voice agents, RAG assistants, AI sales agents, automation & GEO. MENA & worldwide.

**Long description (for About sections):**
> HMZ Technology is an AI agency headquartered in Beirut, Lebanon, serving the Middle East and clients worldwide in 7 languages. We design, build, and deploy production-grade AI systems — not demos: WhatsApp, Instagram, and Messenger AI chatbots, AI voice agents that answer calls in Arabic/English/French, RAG knowledge assistants grounded in your business data, AI sales agents (AI SDR), custom agentic AI, MCP integrations, business process automation, conversion-focused websites, SEO, and Generative Engine Optimization (GEO) that gets brands cited by ChatGPT, Perplexity, and Google AI Overviews. Founded in 2023 by Hasan El Zein. Our promise: AI systems live in days, ROI in weeks.

**Categories (pick closest):** Artificial Intelligence, Software Company, Marketing Agency, Business Automation Service, AI Consulting
**Keywords:** AI chatbot, WhatsApp automation, AI voice agent, AI agency Lebanon, AI agency MENA, business automation, GEO, generative engine optimization, AI SDR, RAG

---

## 1️⃣ Google Search Console (15 min — DO TODAY)
1. https://search.google.com/search-console → Add property `www.hmz.technology`
2. Verify via DNS (Cloudflare → DNS → add TXT record) or HTML tag
3. Submit sitemap: `https://www.hmz.technology/sitemap-index.xml`
4. Use URL Inspection on 5 key pages → "Request Indexing"
5. Check weekly: Coverage, CWV report, queries

## 2️⃣ Bing Webmaster Tools (15 min — DO TODAY; Bing = ChatGPT/Copilot source)
1. https://www.bing.com/webmasters → import from Google Search Console (one click)
2. Submit same sitemap
3. Verify IndexNow is detected (key file already live at /.indexnow-key… see scripts/submit-indexnow.mjs)
4. After every deploy: `node scripts/submit-indexnow.mjs`

## 3️⃣ Google Business Profile (30 min — local #1 lever)
1. https://business.google.com → create "HMZ Technology"
2. Category: Software Company (primary) + Marketing Agency (secondary)
3. Service area: Lebanon, Saudi Arabia, UAE + worldwide remote
4. Add: logo (public/og-image.png), description (long, above), phone, WhatsApp link `https://wa.me/96170106083`
5. Services list: add all 16 services with prices/desc
6. Post weekly updates (blog links)
7. **Reviews: ask every past client. Goal 50+ in 90 days** (150+ = AI local-recommendation threshold)

## 4️⃣ Bing Places (10 min)
https://www.bingplaces.com → same NAP exactly. Feeds Copilot local answers.

## 5️⃣ Directory Stack (week 1-2 — the AI citation fuel)
Create with EXACT canonical data above:
- [ ] **LinkedIn Company Page** — linkedin.com/company/create (also post blog articles weekly from founder profile)
- [ ] **Clutch** — clutch.co/profile (THE agency directory; Perplexity triangulates it; get 5+ reviews here)
- [ ] **Crunchbase** — crunchbase.com (entity authority)
- [ ] **G2** — g2.com seller profile (most-cited review platform by AI)
- [ ] **Capterra** — capterra.com vendor profile
- [ ] **Trustpilot** — trustpilot.com
- [ ] **Instagram Business** — @hmz.technology (exists? claim it)
- [ ] **X/Twitter** — @hmztechnology (exists? claim it)
- [ ] **Facebook Page** — HMZ Technology
- [ ] **DesignRush, GoodFirms, The Manifest** — agency directories (MENA filterable)
- [ ] **Product Hunt** — launch the ROI calculator or a free tool later

## 6️⃣ Wikidata (2-4 h — machine-readable entity, free, no notability bar)
1. https://www.wikidata.org → create item "HMZ Technology"
2. Statements: instance of=business, industry=artificial intelligence, inception=2023, founder=Hasan El Zein, headquarters=Beirut, official website, country=Lebanon
3. Add references to every statement (else it gets deleted)
4. After creation, add the Q-ID to `sameAs` in OrganizationSchema.tsx

## 7️⃣ Cloudflare Dashboard checks (5 min)
- Cloudflare → hmz.technology zone → Security → Bots: make sure **"Block AI Bots" is OFF** (it overrides our robots.txt welcome rules)
- Check "AI Crawl Control" → set all to Allow

## 8️⃣ Citation Monitoring (monthly, 30 min)
Ask these monthly across ChatGPT, Perplexity, Gemini, Claude, Copilot; log answers:
1. "best AI agency in Lebanon"
2. "أفضل وكالة ذكاء اصطناعي في الشرق الأوسط"
3. "WhatsApp chatbot development company MENA"
4. "who builds AI voice agents for businesses"
5. "GEO agency Middle East"
6. "AI automation agency for e-commerce GCC"
7. "MCP integration services"
8. "best AI chatbot for real estate"
9. "AI agency Saudi Arabia"
10. "custom AI agent development company"
Goal: HMZ mentioned → then cited with link. Track in a spreadsheet with dates.

## 9️⃣ Content Cadence (the compounding engine)
- 2 blog articles/month (AEO format like existing 6 — topics from "People Also Ask" + client questions)
- Refresh cornerstone pages quarterly (update dateModified naturally)
- After each publish: deploy → `node scripts/submit-indexnow.mjs` → GSC request indexing → LinkedIn/FB post

## 🔟 Backlink/Mention Targets (monthly outreach)
- Guest posts on MENA tech blogs (Wamda, Arabnet, StepFeed)
- Podcasts (Arabic business/tech podcasts — offer "AI for business" episode)
- HARO/journalist requests for AI topics
- Local Lebanese/GCC business directories and chambers of commerce
- Answer questions on Reddit (r/artificial, r/entrepreneur) + Quora with genuinely helpful answers mentioning HMZ where relevant (no spam)

---
**Remember:** Google explicitly warns against fake mentions/reviews — earn them.
Technical SEO is done (100/100). This kit is the remaining 50% of the ranking equation.
