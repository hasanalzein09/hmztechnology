/**
 * 🌍 MARKET LANDING PAGE DATA
 * English, unprefixed market routes (/lebanon, /saudi-arabia, /uae, /usa,
 * /deutschland, /france, /italia, /india, /malaysia).
 *
 * schemaLocalBusinessId MUST match the @id values used in
 * src/components/react/LocalBusinessSchema.tsx so the pages close the
 * previously broken schema URL references.
 */

export interface MarketStat {
    value: string;
    label: string;
}

export interface MarketFaq {
    q: string;
    a: string;
}

export interface Market {
    slug: string;
    countryName: string;
    countryNameNative?: string;
    flagEmoji: string;
    /** LocalBusiness @id suffix, matching LocalBusinessSchema.tsx exactly */
    schemaLocalBusinessId: string;
    heroH1: string;
    heroSub: string;
    localIntro: string;
    /** Arabic RTL paragraph — only for saudi-arabia, uae, lebanon */
    arabicIntro?: string;
    topServices: string[];
    stats: MarketStat[];
    faqs: MarketFaq[];
    ctaText: string;
    metaDescription: string;
}

export const marketsData: Record<string, Market> = {
    lebanon: {
        slug: 'lebanon',
        countryName: 'Lebanon',
        countryNameNative: 'لبنان',
        flagEmoji: '🇱🇧',
        schemaLocalBusinessId: 'lebanon-local-business',
        heroH1: 'AI Agency in Lebanon',
        heroSub:
            'HMZ Technology LLC is a US-registered AI agency (Michigan) with deep Lebanese roots. We build WhatsApp AI chatbots, AI voice agents and business automation for Lebanese companies — in Lebanese Arabic, English and French, with hands-on support in Lebanon.',
        localIntro:
            'Lebanese businesses run on WhatsApp: with over 90% smartphone penetration and WhatsApp as the default sales channel for retail, clinics, real estate and restaurants, every missed message is lost revenue. HMZ Technology is a Lebanese-founded AI agency (registered in Michigan, USA) — we build production-grade AI systems for the Lebanese market and export the same systems to the GCC, Europe and North America.',
        arabicIntro:
            'إتش إم زي تكنولوجي هي وكالة ذكاء اصطناعي لبنانية مقرها بيروت. نطوّر روبوتات واتساب ذكية، وكلاء صوت بالذكاء الاصطناعي، وأنظمة أتمتة للشركات اللبنانية بالعربي والإنكليزي والفرنسي — إطلاق خلال ٨ أيام مع دعم محلي مباشر.',
        topServices: [
            'whatsapp-ai-chatbot',
            'ai-voice-agents',
            'instagram-ai-chatbot',
            'ai-automations',
            'rag-knowledge-assistants',
            'advanced-seo',
        ],
        stats: [
            { value: '8 days', label: 'Average WhatsApp bot go-live' },
            { value: '3 sec', label: 'AI response time, 24/7' },
            { value: '3 langs', label: 'Arabic, English & French AI' },
            { value: 'Lebanon', label: 'Home market — Lebanese-founded team' },
        ],
        faqs: [
            {
                q: 'Do you deliver AI systems to businesses anywhere in Lebanon?',
                a: 'Yes. HMZ Technology LLC (Michigan, USA) is a Lebanese-founded agency serving clients in Beirut, Tripoli, Sidon, Tyre, Zahle and Jounieh. On-site workshops are available in Greater Beirut; everywhere else is delivered remotely with full documentation and training.',
            },
            {
                q: 'Do your chatbots understand Lebanese Arabic?',
                a: 'Yes. Our AI chatbots and voice agents handle Lebanese Arabic (including Arabizi/chat alphabet), Modern Standard Arabic, English and French, and can switch languages mid-conversation the way Lebanese customers actually talk.',
            },
            {
                q: 'How does pricing and payment work in Lebanon?',
                a: 'We offer project-based pricing for builds and monthly retainers for ongoing AI operations. Lebanese clients can pay in USD via local fresh accounts, international transfer, or card. Every engagement starts with a free consultation and exact numbers for your case.',
            },
            {
                q: 'How fast can you launch for a Lebanese business?',
                a: 'A standard WhatsApp AI chatbot goes live in about 8 days — audit, AI training on your business data, system integration, then go-live with zero downtime. Larger automation or agentic systems typically take 4–8 weeks.',
            },
        ],
        ctaText: 'Get Your Free AI Consultation in Lebanon',
        metaDescription:
            'HMZ Technology is a Lebanese-founded, US-registered AI agency (Michigan LLC) serving all of Lebanon: WhatsApp AI chatbots, AI voice agents and business automation in Arabic, English and French. Go live in 8 days.',
    },

    'saudi-arabia': {
        slug: 'saudi-arabia',
        countryName: 'Saudi Arabia',
        countryNameNative: 'المملكة العربية السعودية',
        flagEmoji: '🇸🇦',
        schemaLocalBusinessId: 'saudi-local-business',
        heroH1: 'AI Agency in Saudi Arabia',
        heroSub:
            'Vision 2030-grade AI for the Kingdom: Arabic-first WhatsApp chatbots, AI voice agents and enterprise automation for Riyadh, Jeddah and Dammam — PDPL-compliant and delivered remotely by our senior AI team.',
        localIntro:
            'Saudi Arabia has committed over $40 billion to national AI investment under Vision 2030, and the Kingdom is the largest digital economy in MENA — digital transformation spending across the region is projected to grow from $82.6B to $628B by 2036 at a 22.5% CAGR, with KSA at the center. Saudi customers expect instant Arabic-first service on WhatsApp, and giga-project competition means businesses that automate first win. HMZ Technology builds Arabic-native AI systems for Saudi enterprises, SMEs and government-adjacent organizations.',
        arabicIntro:
            'إتش إم زي تكنولوجي تخدم الشركات السعودية في الرياض وجدة والدمام بحلول ذكاء اصطناعي عربية أولاً: روبوتات واتساب، وكلاء صوت، وأتمتة أعمال متوافقة مع نظام حماية البيانات الشخصية (PDPL) ورؤية ٢٠٣٠ — إطلاق خلال ٨ أيام مع دعم بالعربية على مدار الساعة.',
        topServices: [
            'whatsapp-ai-chatbot',
            'ai-voice-agents',
            'custom-ai-agents',
            'ai-automations',
            'rag-knowledge-assistants',
            'mcp-ai-integrations',
        ],
        stats: [
            { value: '$40B+', label: 'Saudi national AI investment (Vision 2030)' },
            { value: '22.5%', label: 'MENA DX market CAGR to 2036' },
            { value: 'Arabic-first', label: 'Najdi, Hijazi & Gulf dialect support' },
            { value: 'PDPL', label: 'Saudi data-protection compliant builds' },
        ],
        faqs: [
            {
                q: 'Do you deliver to Saudi Arabia even though you are a US-registered company?',
                a: 'Yes — most of our Saudi engagements are delivered fully remotely with dedicated Arabic-speaking project managers, weekly video check-ins, and SLAs. We serve Riyadh, Jeddah, Dammam, Mecca, Medina and Taif, and can travel for enterprise kick-offs.',
            },
            {
                q: 'Does your AI speak Saudi Arabic dialects?',
                a: 'Yes. Our chatbots and voice agents are trained on Najdi, Hijazi and Gulf Arabic as well as Modern Standard Arabic and English, and handle code-switching naturally — essential for Saudi customer service.',
            },
            {
                q: 'Are your systems compliant with Saudi PDPL?',
                a: 'Yes. We build with Saudi Arabia\'s Personal Data Protection Law in mind: data-minimization by design, configurable data residency, consent logging and retention controls, and we sign data-processing agreements for enterprise clients.',
            },
            {
                q: 'How do pricing and payment work for Saudi clients?',
                a: 'Pricing is project-based for builds plus monthly retainers for operations, quoted in USD or SAR. Payment via international bank transfer (SARIE/SWIFT) or card. VAT invoices are provided for Saudi-registered entities.',
            },
        ],
        ctaText: 'Book Your Free Saudi AI Strategy Call',
        metaDescription:
            'Arabic-first AI agency for Saudi Arabia: WhatsApp AI chatbots, AI voice agents and PDPL-compliant business automation for Riyadh, Jeddah and Dammam. Vision 2030-ready systems, live in 8 days.',
    },

    uae: {
        slug: 'uae',
        countryName: 'United Arab Emirates',
        countryNameNative: 'الإمارات العربية المتحدة',
        flagEmoji: '🇦🇪',
        schemaLocalBusinessId: 'uae-local-business',
        heroH1: 'AI Agency in Dubai & the UAE',
        heroSub:
            'Multilingual AI chatbots, voice agents and automation for Dubai, Abu Dhabi and Sharjah — built for the UAE\'s real-estate, e-commerce and hospitality boom, in Arabic, English, Hindi and more.',
        localIntro:
            'The UAE has allocated over $10 billion to AI initiatives and was the first country in the world to appoint a Minister of State for AI — Dubai alone targets ranking among the world\'s top AI economies. With 200+ nationalities and some of the world\'s highest WhatsApp usage rates, UAE businesses need multilingual, always-on customer automation. HMZ Technology builds production AI systems for Emirati real-estate brokerages, e-commerce brands, clinics and hospitality groups.',
        arabicIntro:
            'إتش إم زي تكنولوجي تخدم الشركات في دبي وأبوظبي والشارقة بحلول ذكاء اصطناعي متعددة اللغات: روبوتات واتساب للعقارات والتجارة الإلكترونية، وكلاء صوت، وأتمتة أعمال — بالعربية والإنجليزية ولغات أخرى، مع إطلاق خلال ٨ أيام.',
        topServices: [
            'whatsapp-ai-chatbot',
            'ai-voice-agents',
            'ai-sdr-sales-agents',
            'instagram-ai-chatbot',
            'ai-automations',
            'generative-engine-optimization',
        ],
        stats: [
            { value: '$10B+', label: 'UAE government AI allocation' },
            { value: '200+', label: 'Nationalities your AI must serve' },
            { value: '#1', label: 'First country with an AI Minister' },
            { value: '24/7', label: 'Multilingual AI coverage (AR/EN/HI)' },
        ],
        faqs: [
            {
                q: 'Do you deliver AI systems to Dubai and Abu Dhabi?',
                a: 'Yes. We serve Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah and Al Ain remotely with same-timezone-plus-one support (GST), Arabic and English project management, and on-site visits for enterprise rollouts.',
            },
            {
                q: 'Can your chatbots handle the UAE\'s multilingual customer base?',
                a: 'Yes. Our AI agents converse in Arabic, English, Hindi/Urdu, Tagalog, Russian and more, detecting the customer\'s language automatically — critical for UAE real estate, retail and hospitality.',
            },
            {
                q: 'Do you build WhatsApp bots for UAE real estate?',
                a: 'Real estate is one of our strongest UAE verticals: lead qualification within seconds, automated viewing bookings, property-matching from your listings feed, and CRM handoff to your brokers — all on the official WhatsApp Business API.',
            },
            {
                q: 'How do pricing and payment work in the UAE?',
                a: 'Project pricing plus monthly retainers, quoted in USD or AED, payable by bank transfer or card. We work with mainland and free-zone entities and provide invoices suitable for UAE VAT records.',
            },
        ],
        ctaText: 'Get Your Free UAE AI Consultation',
        metaDescription:
            'Multilingual AI agency for Dubai, Abu Dhabi & the UAE: WhatsApp AI chatbots for real estate and e-commerce, AI voice agents and business automation in Arabic, English and Hindi. Live in 8 days.',
    },

    usa: {
        slug: 'usa',
        countryName: 'United States',
        flagEmoji: '🇺🇸',
        schemaLocalBusinessId: 'usa-local-business',
        heroH1: 'AI Agency for the United States',
        heroSub:
            'Enterprise-grade AI chatbots, voice agents and agentic automation for American businesses — nearshore economics, senior engineering, and coverage across all US time zones.',
        localIntro:
            'US enterprises are the world\'s fastest AI adopters — recent surveys show the large majority of American enterprises now run at least one AI workload in production, and Gartner projects 40% of enterprise applications will embed task-specific AI agents by end of 2026. The bottleneck is no longer models; it is shipping production systems without Big-4 consulting price tags. HMZ Technology gives US companies senior AI engineering at nearshore economics, with overlap hours across EST, CST, MST and PST.',
        topServices: [
            'custom-ai-agents',
            'ai-voice-agents',
            'rag-knowledge-assistants',
            'mcp-ai-integrations',
            'whatsapp-ai-chatbot',
            'multi-agent-ai-workforce',
        ],
        stats: [
            { value: '40%', label: 'Enterprise apps with AI agents by 2026 (Gartner)' },
            { value: '4 zones', label: 'Working-hour overlap EST–PST' },
            { value: '80%+', label: 'Hallucination reduction via RAG grounding' },
            { value: '8 days', label: 'Standard chatbot time-to-production' },
        ],
        faqs: [
            {
                q: 'How do you work with US clients across time zones?',
                a: 'Our delivery team overlaps 2–4 working hours with EST each morning and covers CST–PST through asynchronous delivery with recorded walkthroughs, Slack/Teams channels, and weekly live calls scheduled in your time zone.',
            },
            {
                q: 'Can you sign US-standard contracts, NDAs and DPAs?',
                a: 'Yes. We work under US-governed MSAs, mutual NDAs and data-processing agreements, and can invoice in USD to your AP process. SOC 2-aligned security practices are available for enterprise engagements.',
            },
            {
                q: 'How does pricing compare to US agencies?',
                a: 'Typical savings are 40–60% versus comparable US AI agencies, with senior engineers on every build. Pricing is fixed-scope for builds plus monthly retainers for operations — quoted in USD with net-30 terms available.',
            },
            {
                q: 'Do you build on platforms US companies already use?',
                a: 'Yes — OpenAI, Anthropic, Azure OpenAI, AWS, Google Cloud, Salesforce, HubSpot, Shopify, Twilio and the official WhatsApp Business API. MCP integrations connect agents securely to your existing stack.',
            },
        ],
        ctaText: 'Book a Free AI Discovery Call (US)',
        metaDescription:
            'AI agency serving US businesses: custom AI agents, voice agents, RAG assistants and MCP integrations at nearshore economics. Time-zone overlap EST–PST, US contracts, USD invoicing.',
    },

    deutschland: {
        slug: 'deutschland',
        countryName: 'Germany',
        countryNameNative: 'Deutschland',
        flagEmoji: '🇩🇪',
        schemaLocalBusinessId: 'germany-local-business',
        heroH1: 'AI Agency in Germany',
        heroSub:
            'DSGVO-konforme KI-Lösungen für den deutschen Mittelstand: GDPR-compliant AI chatbots, voice agents and process automation for German SMEs and enterprises — in German and English.',
        localIntro:
            'Germany\'s Mittelstand — 99% of German companies — is in the middle of its biggest productivity shift since Industrie 4.0, and Bitkom surveys show German SME AI adoption accelerating sharply since 2023. German buyers demand two things above all: Datenschutz (GDPR/DSGVO compliance) and reliability. HMZ Technology builds AI chatbots, voice agents and automation with EU data-residency options, documented data flows and German-language AI quality for Berlin, Munich, Hamburg, Frankfurt and beyond.',
        topServices: [
            'ai-automations',
            'rag-knowledge-assistants',
            'ai-voice-agents',
            'custom-ai-agents',
            'whatsapp-ai-chatbot',
            'advanced-seo',
        ],
        stats: [
            { value: '99%', label: 'Of German firms are Mittelstand SMEs' },
            { value: 'GDPR', label: 'DSGVO-compliant by design, EU data options' },
            { value: 'DE + EN', label: 'Native-quality German & English AI' },
            { value: 'CET±1h', label: 'Near-identical working hours' },
        ],
        faqs: [
            {
                q: 'Are your AI systems GDPR / DSGVO compliant?',
                a: 'Yes. We build GDPR-compliant by design: EU data-residency hosting options (including EU-region OpenAI/Azure endpoints), data-processing agreements (Auftragsverarbeitung), retention controls, consent logging and full documentation for your Datenschutzbeauftragter.',
            },
            {
                q: 'Do your chatbots and voice agents work in German?',
                a: 'Yes. Our AI agents converse in natural, business-quality German (and English), including formal Sie-form customer communication, and can be trained on your German documentation, FAQs and product data.',
            },
            {
                q: 'How do you collaborate with German companies remotely?',
                a: 'Our team is only one hour ahead of Germany (CET+1), so we share nearly the full working day. Projects run with weekly video calls, written status reports, and German or English project communication — your choice.',
            },
            {
                q: 'How does pricing and payment work for German clients?',
                a: 'Fixed-price builds plus monthly retainers, invoiced in EUR or USD with proper VAT treatment for EU B2B (reverse charge). Payment via SEPA or SWIFT transfer. Every engagement starts with a free consultation and a written fixed quote.',
            },
        ],
        ctaText: 'Kostenlose KI-Beratung Anfordern',
        metaDescription:
            'GDPR-compliant AI agency for Germany: German-language AI chatbots, voice agents and business process automation for the Mittelstand — EU data residency, CET working hours, EUR invoicing.',
    },

    france: {
        slug: 'france',
        countryName: 'France',
        flagEmoji: '🇫🇷',
        schemaLocalBusinessId: 'france-local-business',
        heroH1: 'AI Agency in France',
        heroSub:
            'French-language AI chatbots, voice agents and automation for French businesses — RGPD-compliant, EU-hosted options, and Paris-aligned working hours from our senior delivery team.',
        localIntro:
            'France is Europe\'s AI powerhouse — home to Mistral AI and a national AI strategy backed by billions in public and private investment, with Paris hosting the 2025 AI Action Summit. French consumers, however, expect service in impeccable French and data handled under strict RGPD rules. HMZ Technology builds French-native AI chatbots, voice agents and automation for Paris, Lyon and Marseille — luxury retail, real estate, healthcare and professional services.',
        topServices: [
            'whatsapp-ai-chatbot',
            'ai-voice-agents',
            'rag-knowledge-assistants',
            'ai-automations',
            'generative-engine-optimization',
            'instagram-ai-chatbot',
        ],
        stats: [
            { value: 'FR-native', label: 'Business-quality French AI agents' },
            { value: 'RGPD', label: 'GDPR-compliant, EU hosting options' },
            { value: 'CET+1h', label: 'Paris-overlapping working hours' },
            { value: '8 days', label: 'Standard chatbot go-live' },
        ],
        faqs: [
            {
                q: 'Do your AI systems work in French?',
                a: 'Yes. Our chatbots and voice agents handle natural, business-grade French — including polite vous-form communication — and are trained on your French documentation, catalogs and FAQs.',
            },
            {
                q: 'Are your systems RGPD (GDPR) compliant?',
                a: 'Yes. We build GDPR/RGPD-compliant by design with EU data-residency options, data-processing agreements, consent management and retention controls — documentation your DPO can review.',
            },
            {
                q: 'How do you work with French companies remotely?',
                a: 'Our team is one hour ahead of Paris, so we share almost the entire working day. Projects run in French or English with weekly video calls and written reporting; on-site kick-offs in Paris are possible for larger engagements.',
            },
            {
                q: 'How does pricing and payment work for French clients?',
                a: 'Fixed-price builds and monthly retainers, invoiced in EUR with EU B2B reverse-charge VAT handling, payable by SEPA transfer. You receive a written fixed quote after a free consultation.',
            },
        ],
        ctaText: 'Demander une Consultation IA Gratuite',
        metaDescription:
            'AI agency for France: French-language AI chatbots, voice agents and business automation — RGPD/GDPR compliant with EU hosting options, Paris-aligned hours, EUR invoicing.',
    },

    italia: {
        slug: 'italia',
        countryName: 'Italy',
        countryNameNative: 'Italia',
        flagEmoji: '🇮🇹',
        schemaLocalBusinessId: 'italy-local-business',
        heroH1: 'AI Agency in Italy',
        heroSub:
            'Italian-language AI chatbots, voice agents and automation for PMI italiane — GDPR-compliant, built for Italy\'s manufacturing, fashion, food and tourism sectors.',
        localIntro:
            'Italy\'s economy runs on its PMI — small and medium enterprises that make up over 99% of Italian businesses and dominate manufacturing, fashion, food export and tourism. Italy\'s Transizione 5.0 program is pouring billions into business digitalization, yet most Italian SMEs still answer WhatsApp inquiries by hand. HMZ Technology builds Italian-language AI chatbots, voice agents and automation for Rome, Milan and beyond — engineered for GDPR and for the way Italian customers actually message.',
        topServices: [
            'whatsapp-ai-chatbot',
            'ai-voice-agents',
            'ai-automations',
            'rag-knowledge-assistants',
            'advanced-seo',
            'instagram-ai-chatbot',
        ],
        stats: [
            { value: '99%+', label: 'Of Italian firms are SMEs (PMI)' },
            { value: '€6B+', label: 'Transizione 5.0 digitalization incentives' },
            { value: 'IT + EN', label: 'Native-quality Italian & English AI' },
            { value: 'GDPR', label: 'EU-compliant with EU hosting options' },
        ],
        faqs: [
            {
                q: 'Do your AI systems work in Italian?',
                a: 'Yes. Our chatbots and voice agents converse in natural Italian (and English), trained on your Italian product data, price lists and FAQs — including the informal tone Italian customers expect on WhatsApp.',
            },
            {
                q: 'Are your systems GDPR compliant for Italian businesses?',
                a: 'Yes. EU data-residency options, data-processing agreements, consent logging and retention controls come standard, with documentation suitable for your privacy advisor (consulente privacy/DPO).',
            },
            {
                q: 'How do you collaborate with Italian companies?',
                a: 'Our team is just one hour ahead of Rome and Milan, so we share the working day. Projects run in English or Italian via weekly video calls and written updates, with remote delivery and full training for your team.',
            },
            {
                q: 'How does pricing and payment work for Italian clients?',
                a: 'Fixed-price builds plus monthly retainers, invoiced in EUR with EU B2B reverse-charge VAT, payable by SEPA transfer. A written fixed quote follows a free consultation — no surprises.',
            },
        ],
        ctaText: 'Richiedi una Consulenza AI Gratuita',
        metaDescription:
            'AI agency for Italy: Italian-language WhatsApp chatbots, AI voice agents and automation for PMI in manufacturing, fashion, food and tourism — GDPR-compliant, EUR invoicing, live in 8 days.',
    },

    india: {
        slug: 'india',
        countryName: 'India',
        flagEmoji: '🇮🇳',
        schemaLocalBusinessId: 'india-local-business',
        heroH1: 'AI Agency in India',
        heroSub:
            'WhatsApp-first AI chatbots, voice agents and automation for India\'s digital boom — multilingual AI in Hindi, English and regional languages for Mumbai, Delhi, Bengaluru and beyond.',
        localIntro:
            'India is the world\'s largest WhatsApp market with over 500 million users, and its digital economy is one of the fastest-growing on the planet — UPI processes over 10 billion transactions a month and the IndiaAI Mission is investing over ₹10,000 crore in national AI capacity. Indian consumers expect instant, multilingual, mobile-first service. HMZ Technology builds WhatsApp-first AI systems in Hindi, English and regional languages for Indian D2C brands, ed-tech, healthcare and real-estate businesses.',
        topServices: [
            'whatsapp-ai-chatbot',
            'ai-voice-agents',
            'ai-sdr-sales-agents',
            'ai-automations',
            'instagram-ai-chatbot',
            'ai-content-video-studio',
        ],
        stats: [
            { value: '500M+', label: 'WhatsApp users — world\'s largest market' },
            { value: '10B+', label: 'Monthly UPI transactions fueling digital commerce' },
            { value: '₹10,000 Cr', label: 'IndiaAI Mission national investment' },
            { value: 'IST±', label: 'Extended overlap with Indian business hours' },
        ],
        faqs: [
            {
                q: 'Do you deliver AI systems to Indian businesses?',
                a: 'Yes. We serve Mumbai, Delhi, Bengaluru, Hyderabad, Chennai and Pune remotely. Our team is 2.5 hours behind IST, giving us extended daily overlap, and our 24/7 AI systems mean your customers are covered around the clock regardless.',
            },
            {
                q: 'Do your chatbots support Hindi and regional languages?',
                a: 'Yes. Our AI agents handle Hindi (including Hinglish romanized text), English, and major regional languages such as Tamil, Telugu, Bengali and Marathi, switching automatically based on the customer\'s messages.',
            },
            {
                q: 'Are your systems compliant with India\'s DPDP Act?',
                a: 'Yes. We build with India\'s Digital Personal Data Protection Act in mind: consent-first data collection, purpose limitation, configurable retention and data-processing agreements for enterprise clients.',
            },
            {
                q: 'How does pricing and payment work for Indian clients?',
                a: 'Pricing is quoted in USD (INR-equivalent available), with project pricing for builds and monthly retainers for operations. Payment via international bank transfer or card; invoices suitable for GST records are provided.',
            },
        ],
        ctaText: 'Get Your Free AI Consultation for India',
        metaDescription:
            'AI agency for India: WhatsApp-first AI chatbots in Hindi, English and regional languages, AI voice agents and automation for Indian D2C, ed-tech and healthcare. DPDP-aware builds.',
    },

    malaysia: {
        slug: 'malaysia',
        countryName: 'Malaysia',
        flagEmoji: '🇲🇾',
        schemaLocalBusinessId: 'malaysia-local-business',
        heroH1: 'AI Agency in Malaysia',
        heroSub:
            'Bahasa Malaysia and English AI chatbots, voice agents and automation for Malaysian SMEs and enterprises — WhatsApp-first, PDPA-compliant, built for KL\'s digital economy.',
        localIntro:
            'Malaysia is one of Southeast Asia\'s digital leaders — the MyDIGITAL blueprint targets a digital economy contributing over 25% of GDP, and Malaysia ranks among the world\'s top countries for WhatsApp penetration in commerce. Malaysian consumers shop and book in Bahasa Malaysia, English and Manglish, often on the same chat. HMZ Technology builds WhatsApp-first AI chatbots, voice agents and automation for Kuala Lumpur, Selangor, Penang and Johor — retail, F&B, clinics, property and tourism.',
        topServices: [
            'whatsapp-ai-chatbot',
            'ai-voice-agents',
            'ai-automations',
            'instagram-ai-chatbot',
            'advanced-seo',
            'rag-knowledge-assistants',
        ],
        stats: [
            { value: '25%+', label: 'MyDIGITAL digital-economy GDP target' },
            { value: '#1 SEA', label: 'Among top WhatsApp-commerce markets' },
            { value: 'BM + EN', label: 'Bahasa Malaysia, English & Manglish AI' },
            { value: 'PDPA', label: 'Malaysian data-protection compliant' },
        ],
        faqs: [
            {
                q: 'Do you deliver to Malaysian businesses?',
                a: 'Yes. We serve Kuala Lumpur, Selangor, Penang and Johor remotely. Our AI systems run 24/7, so your customers get instant replies in Malaysian business hours even while your team sleeps.',
            },
            {
                q: 'Do your chatbots support Bahasa Malaysia?',
                a: 'Yes. Our AI agents converse in Bahasa Malaysia and English — including Manglish code-switching — and can also serve Mandarin- and Tamil-speaking customers for multilingual Malaysian audiences.',
            },
            {
                q: 'Are your systems compliant with Malaysia\'s PDPA?',
                a: 'Yes. We build with Malaysia\'s Personal Data Protection Act 2010 in mind: consent-based data collection, purpose limitation, retention controls and data-processing terms for commercial transactions.',
            },
            {
                q: 'How does pricing and payment work for Malaysian clients?',
                a: 'Quoted in USD (MYR-equivalent available) as project pricing plus monthly retainers. Payment by international transfer or card, with invoices suitable for Malaysian accounting and SST records.',
            },
        ],
        ctaText: 'Get Your Free Malaysia AI Consultation',
        metaDescription:
            'AI agency for Malaysia: WhatsApp AI chatbots in Bahasa Malaysia and English, AI voice agents and business automation for KL, Selangor, Penang and Johor. PDPA-compliant, live in 8 days.',
    },
};

export const marketSlugs = Object.keys(marketsData);
