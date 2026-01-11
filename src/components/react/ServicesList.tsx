import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Clock } from 'lucide-react'
import type { Language } from './types'

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: string;
    link: string;
    features: string[];
}

const translations: Record<Language, {
    title: string;
    subtitle: string;
    cta: string;
    services: ServiceItem[];
    urgencyBanner: string;
    psychologicalHook: string;
    stats: { value: string; label: string }[];
}> = {
    en: {
        title: 'Pick Your Weapon Against Lost Revenue',
        subtitle: 'Every service below has one job: stop money from walking out your door to competitors.',
        cta: 'Fix This Problem',
        services: [
            {
                id: 'whatsapp-ai-chatbot',
                title: 'WhatsApp Revenue Machine',
                description: 'Stop losing $12K+/month to slow responses. AI replies in 3 seconds, sells at 2AM, never sleeps.',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['847% avg ROI', 'Sells 24/7', '0 missed leads']
            },
            {
                id: 'instagram-ai-chatbot',
                title: 'Instagram Lead Capture',
                description: 'Your competitors ignore 80% of DMs. Capture every lead automatically while they sleep.',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['3x engagement', 'Auto-qualify leads', 'Story monetization']
            },
            {
                id: 'messenger-ai-chatbot',
                title: 'Facebook Ad Multiplier',
                description: 'Stop wasting ad spend. AI follows up every click and turns browsers into buyers.',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['40% better ad ROI', 'Instant follow-up', 'Auto nurture']
            },
            {
                id: 'nextjs-development',
                title: 'Website That Converts',
                description: 'Slow sites lose 53% of visitors. Load in 0.8s and watch conversions triple.',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['0.8s load time', 'Google loves it', '3x more leads']
            },
            {
                id: 'advanced-seo',
                title: 'Steal Competitor Traffic',
                description: 'They\'re ranking for YOUR keywords. Take back what\'s yours in 90 days.',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['Page 1 in 90 days', 'Free organic leads', 'Competitor domination']
            },
            {
                id: 'ai-automations',
                title: 'Fire Repetitive Tasks',
                description: 'Stop paying humans for robot work. Save 20+ hours/week and scale infinitely.',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['20hrs/week saved', 'Zero errors', 'Infinite scale']
            }
        ],
        urgencyBanner: '⚠️ Only 3 spots left this month - competitors are booking fast',
        psychologicalHook: 'Right now, someone with AI is answering your customer\'s message. Is it you or your competitor?',
        stats: [
            { value: '500+', label: 'Happy Clients' },
            { value: '24/7', label: 'Always Available' },
            { value: '3-7 days', label: 'Launch Time' }
        ]
    },
    ar: {
        title: 'اختر سلاحك ضد خسارة الإيرادات',
        subtitle: 'كل خدمة هنا لها وظيفة واحدة: وقّف الفلوس من الهروب لمنافسيك.',
        cta: 'حل هالمشكلة',
        services: [
            {
                id: 'whatsapp-ai-chatbot',
                title: 'ماكينة إيرادات واتساب',
                description: 'وقّف خسارة $12K+ شهرياً للردود البطيئة. AI يرد بـ 3 ثواني، يبيع الساعة 2 بالليل، ما ينام.',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['847% عائد استثمار', 'يبيع 24/7', '0 عملاء ضايعين']
            },
            {
                id: 'instagram-ai-chatbot',
                title: 'التقاط عملاء انستغرام',
                description: 'زيادة التفاعل وأتمتة الرسائل والتعليقات والردود على القصص.',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['أتمتة الرسائل', 'تفاعل القصص', 'إدارة التعليقات']
            },
            {
                id: 'messenger-ai-chatbot',
                title: 'شات بوت ماسنجر',
                description: 'تواصل مع العملاء على فيسبوك ماسنجر بمحادثات آلية ذكية.',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['جلب العملاء', 'أتمتة الدعم', 'ربط إعلانات فيسبوك']
            },
            {
                id: 'nextjs-development',
                title: 'تطوير المواقع',
                description: 'مواقع وتطبيقات ويب عالية الأداء ومحسنة لمحركات البحث باستخدام Next.js.',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['محسن للـ SEO', 'تحميل سريع', 'تصميم عصري']
            },
            {
                id: 'advanced-seo',
                title: 'تحسين محركات البحث SEO',
                description: 'تصدر نتائج البحث واجذب زيارات مجانية لعملك.',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['تدقيق تقني', 'استراتيجية محتوى', 'بحث كلمات مفتاحية']
            },
            {
                id: 'ai-automations',
                title: 'أتمتة الأعمال بالذكاء الاصطناعي',
                description: 'حلول ذكية مخصصة لتبسيط العمليات وتقليل العمل اليدوي.',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['أتمتة العمليات', 'نماذج ذكاء اصطناعي', 'معالجة البيانات']
            }
        ],
        urgencyBanner: '🔥 محدود: 5 مقاعد تنفيذ فقط متاحة هذا الشهر',
        psychologicalHook: 'بينما تقيّم الخيارات، منافسوك الذين يملكون أتمتة AI يستحوذون على عملائك.',
        stats: [
            { value: '+٥٠٠', label: 'عميل سعيد' },
            { value: '٢٤/٧', label: 'متوفرين دائماً' },
            { value: '٣-٧ أيام', label: 'وقت الإطلاق' }
        ]
    },
    // Fallbacks for other languages to English for now, can be expanded later
    de: {
        title: 'Unsere KI-Dienste & Lösungen',
        subtitle: 'Wir stärken Unternehmen mit modernster KI-Automatisierung und intelligenten Chatbots.',
        cta: 'Mehr erfahren',
        services: [
            {
                id: 'whatsapp-ai-chatbot',
                title: 'WhatsApp AI Chatbot',
                description: 'Automatisieren Sie Support und Vertrieb auf WhatsApp rund um die Uhr.',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['24/7 Antwort', 'Vertriebsautomatisierung', 'CRM Integration']
            },
            {
                id: 'instagram-ai-chatbot',
                title: 'Instagram AI Bot',
                description: 'Steigern Sie das Engagement und automatisieren Sie DMs auf Instagram.',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['DM Automatisierung', 'Story Reaktionen', 'Kommentar Management']
            },
            {
                id: 'messenger-ai-chatbot',
                title: 'Messenger Chatbot',
                description: 'Verbinden Sie sich mit Kunden über Facebook Messenger.',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['Lead Generierung', 'Support Automatisierung', 'Facebook Ads']
            },
            {
                id: 'nextjs-development',
                title: 'Webentwicklung',
                description: 'Leistungsstarke, SEO-optimierte Websites mit Next.js.',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['SEO Optimiert', 'Schnelles Laden', 'Modernes UI/UX']
            },
            {
                id: 'advanced-seo',
                title: 'Erweitertes SEO',
                description: 'Dominieren Sie Suchrankings und steigern Sie den Traffic.',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['Technisches Audit', 'Content Strategie', 'Keyword Recherche']
            },
            {
                id: 'ai-automations',
                title: 'KI-Geschäftsautomatisierung',
                description: 'Maßgeschneiderte KI-Lösungen zur Optimierung von Abläufen.',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['Prozessautomatisierung', 'Benutzerdefinierte KI', 'Datenverarbeitung']
            }
        ],
        urgencyBanner: '🔥 Begrenzt: Nur 5 Implementierungsplätze diesen Monat',
        psychologicalHook: 'Während Sie bewerten, erobern Wettbewerber mit KI-Automatisierung Ihre Kunden.',
        stats: [
            { value: '6+', label: 'Premium-Dienste' },
            { value: '300%', label: 'Durchschn. ROI' },
            { value: '3-7T', label: 'Startzeit' }
        ]
    },
    fr: {
        title: 'Nos Services et Solutions IA',
        subtitle: 'Donner aux entreprises les moyens d\'une automatisation IA de pointe.',
        cta: 'En savoir plus',
        services: [
            {
                id: 'whatsapp-ai-chatbot',
                title: 'Chatbot IA WhatsApp',
                description: 'Automatisez le support et les ventes sur WhatsApp 24/7.',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['Réponse auto 24/7', 'Automatisation ventes', 'Intégration CRM']
            },
            {
                id: 'instagram-ai-chatbot',
                title: 'Bot IA Instagram',
                description: 'Boostez l\'engagement et automatisez les DM sur Instagram.',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['Automatisation DM', 'Réactions Story', 'Gestion commentaires']
            },
            {
                id: 'messenger-ai-chatbot',
                title: 'Chatbot Messenger',
                description: 'Connectez-vous avec les clients sur Facebook Messenger.',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['Génération leads', 'Support auto', 'Pubs Facebook']
            },
            {
                id: 'nextjs-development',
                title: 'Développement Web',
                description: 'Sites web performants et optimisés SEO avec Next.js.',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['Optimisé SEO', 'Chargement rapide', 'UI/UX moderne']
            },
            {
                id: 'advanced-seo',
                title: 'SEO Avancé',
                description: 'Dominez les classements de recherche et attirez du trafic.',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['Audit technique', 'Stratégie contenu', 'Recherche mots-clés']
            },
            {
                id: 'ai-automations',
                title: 'Automatisation IA',
                description: 'Solutions IA sur mesure pour rationaliser les opérations.',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['Automatisation flux', 'IA personnalisée', 'Traitement données']
            }
        ],
        urgencyBanner: '🔥 Limité: Seulement 5 places de mise en œuvre ce mois',
        psychologicalHook: 'Pendant que vous évaluez, les concurrents avec l\'automatisation IA capturent vos clients.',
        stats: [
            { value: '6+', label: 'Services Premium' },
            { value: '300%', label: 'ROI Moyen' },
            { value: '3-7j', label: 'Délai de lancement' }
        ]
    },
    it: {
        title: 'I Nostri Servizi IA',
        subtitle: 'Potenziamo le aziende con automazione IA all\'avanguardia.',
        cta: 'Scopri di più',
        services: [
            {
                id: 'whatsapp-ai-chatbot',
                title: 'Chatbot IA WhatsApp',
                description: 'Automatizza supporto e vendite su WhatsApp 24/7.',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['Risposta auto 24/7', 'Automazione vendite', 'Integrazione CRM']
            },
            {
                id: 'instagram-ai-chatbot',
                title: 'Bot IA Instagram',
                description: 'Migliora il coinvolgimento e automatizza i DM su Instagram.',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['Automazione DM', 'Reazioni Storie', 'Gestione Commenti']
            },
            {
                id: 'messenger-ai-chatbot',
                title: 'Chatbot Messenger',
                description: 'Connettiti con i clienti su Facebook Messenger.',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['Lead Generation', 'Supporto Auto', 'Facebook Ads']
            },
            {
                id: 'nextjs-development',
                title: 'Sviluppo Web',
                description: 'Siti web ad alte prestazioni ottimizzati SEO.',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['SEO Ottimizzato', 'Caricamento Veloce', 'UI/UX Moderno']
            },
            {
                id: 'advanced-seo',
                title: 'SEO Avanzato',
                description: 'Domina le classifiche di ricerca e attira traffico.',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['Audit Tecnico', 'Strategia Contenuti', 'Ricerca Keyword']
            },
            {
                id: 'ai-automations',
                title: 'Automazione IA',
                description: 'Soluzioni IA personalizzate per ottimizzare le operazioni.',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['Automazione Flussi', 'IA Personalizzata', 'Elaborazione Dati']
            }
        ],
        urgencyBanner: '🔥 Limitato: Solo 5 posti implementazione questo mese',
        psychologicalHook: 'Mentre valuti, i concorrenti con automazione IA catturano i tuoi clienti.',
        stats: [
            { value: '6+', label: 'Servizi Premium' },
            { value: '300%', label: 'ROI Medio' },
            { value: '3-7gg', label: 'Tempo lancio' }
        ]
    },
    hi: {
        title: 'हमारी एआई सेवाएं और समाधान',
        subtitle: 'अत्याधुनिक एआई स्वचालन, बुद्धिमान चैटबॉट और कस्टम सॉफ्टवेयर विकास के साथ व्यवसायों को सशक्त बनाना।',
        cta: 'और जानें',
        services: [
            {
                id: 'whatsapp-ai-chatbot',
                title: 'व्हाट्सएप एआई चैटबॉट',
                description: 'बुद्धिमान 24/7 एआई एजेंटों के साथ व्हाट्सएप पर समर्थन और बिक्री को स्वचालित करें।',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['24/7 ऑटो-रिप्लाई', 'बिक्री स्वचालन', 'CRM एकीकरण']
            },
            {
                id: 'instagram-ai-chatbot',
                title: 'इंस्टाग्राम एआई बॉट',
                description: 'इंस्टाग्राम पर सहभागिता बढ़ाएं और डीएम, टिप्पणियों और कहानी के जवाबों को स्वचालित करें।',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['डीएम स्वचालन', 'स्टोरी रिएक्शन', 'कमेंट प्रबंधन']
            },
            {
                id: 'messenger-ai-chatbot',
                title: 'मैसेंजर चैटबॉट',
                description: 'स्मार्ट स्वचालित बातचीत के साथ फेसबुक मैसेंजर पर ग्राहकों से जुड़ें।',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['लीड जेनरेशन', 'सपोर्ट स्वचालन', 'फेसबुक विज्ञापन']
            },
            {
                id: 'nextjs-development',
                title: 'वेब विकास',
                description: 'Next.js का उपयोग करके उच्च-प्रदर्शन, SEO-अनुकूलित वेबसाइटें और वेब ऐप।',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['SEO अनुकूलित', 'तेजी से लोड हो रहा है', 'आधुनिक UI/UX']
            },
            {
                id: 'advanced-seo',
                title: 'उन्नत एसईओ',
                description: 'खोज रैंकिंग पर हावी हों और अपने व्यवसाय के लिए ऑर्गेनिक ट्रैफ़िक चलाएं।',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['तकनीकी ऑडिट', 'सामग्री रणनीति', 'कीवर्ड अनुसंधान']
            },
            {
                id: 'ai-automations',
                title: 'एआई बिजनेस ऑटोमेशन',
                description: 'संचालन को सुव्यवस्थित करने और मैन्युअल काम को कम करने के लिए कस्टम एआई समाधान।',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['वर्कफ़्लो स्वचालन', 'कस्टम एआई मॉडल', 'डेटा प्रोसेसिंग']
            }
        ],
        urgencyBanner: '🔥 सीमित: इस महीने केवल 5 कार्यान्वयन स्लॉट उपलब्ध',
        psychologicalHook: 'जब आप मूल्यांकन कर रहे हैं, AI ऑटोमेशन वाले प्रतिस्पर्धी आपके ग्राहकों को पकड़ रहे हैं।',
        stats: [
            { value: '6+', label: 'प्रीमियम सेवाएं' },
            { value: '300%', label: 'औसत ROI' },
            { value: '3-7d', label: 'लॉन्च समय' }
        ]
    },
    ms: {
        title: 'Perkhidmatan & Penyelesaian AI Kami',
        subtitle: 'Memperkasakan perniagaan dengan automasi AI yang canggih, chatbot pintar dan pembangunan perisian tersuai.',
        cta: 'Ketahui Lebih Lanjut',
        services: [
            {
                id: 'whatsapp-ai-chatbot',
                title: 'Chatbot WhatsApp AI',
                description: 'Automasi sokongan dan jualan di WhatsApp dengan ejen AI 24/7 yang pintar.',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['Balasan Auto 24/7', 'Automasi Jualan', 'Integrasi CRM']
            },
            {
                id: 'instagram-ai-chatbot',
                title: 'Bot AI Instagram',
                description: 'Tingkatkan penglibatan dan automasi DM, komen, dan balasan cerita di Instagram.',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['Automasi DM', 'Reaksi Cerita', 'Pengurusan Komen']
            },
            {
                id: 'messenger-ai-chatbot',
                title: 'Chatbot Messenger',
                description: 'Berhubung dengan pelanggan di Facebook Messenger dengan perbualan automatik pintar.',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['Penjanaan Lead', 'Automasi Sokongan', 'Iklan Facebook']
            },
            {
                id: 'nextjs-development',
                title: 'Pembangunan Web',
                description: 'Laman web dan aplikasi web berprestasi tinggi dan dioptimumkan SEO menggunakan Next.js.',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['Dioptimumkan SEO', 'Pemuatan Pantas', 'UI/UX Moden']
            },
            {
                id: 'advanced-seo',
                title: 'SEO Lanjutan',
                description: 'Kuasai kedudukan carian dan pacu trafik organik ke perniagaan anda.',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['Audit Teknikal', 'Strategi Kandungan', 'Penyelidikan Kata Kunci']
            },
            {
                id: 'ai-automations',
                title: 'Automasi Perniagaan AI',
                description: 'Penyelesaian AI tersuai untuk menyelaraskan operasi dan mengurangkan kerja manual.',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['Automasi Aliran Kerja', 'Model AI Tersuai', 'Pemprosesan Data']
            }
        ],
        urgencyBanner: '🔥 Terhad: Hanya 5 slot pelaksanaan tersedia bulan ini',
        psychologicalHook: 'Semasa anda menilai, pesaing dengan automasi AI sedang menangkap pelanggan anda.',
        stats: [
            { value: '6+', label: 'Perkhidmatan Premium' },
            { value: '300%', label: 'ROI Purata' },
            { value: '3-7h', label: 'Masa Pelancaran' }
        ]
    }
}

interface ServicesListProps {
    lang: string;
}

const ServicesList = ({ lang }: ServicesListProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language;
    const t = translations[currentLang];
    const isRtl = currentLang === 'ar';

    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`;

    return (
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-[#030014] font-sans selection:bg-cyan-500/30">

            {/* BACKGROUND GRADIENTS */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* URGENCY BANNER */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold mb-6 animate-pulse"
                    >
                        {t.urgencyBanner}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        {t.title.split(' ').slice(0, 2).join(' ')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            {t.title.split(' ').slice(2).join(' ')}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-400 mb-6 leading-relaxed max-w-2xl"
                    >
                        {t.subtitle}
                    </motion.p>

                    {/* PSYCHOLOGICAL HOOK */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="text-sm text-red-400/90 font-medium mb-10 flex items-center gap-2"
                    >
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        {t.psychologicalHook}
                    </motion.p>

                    {/* STATS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-8 border-t border-white/10 pt-8"
                    >
                        {t.stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.services.map((service, i) => (
                        <motion.a
                            href={getLink(service.link)}
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card-ai p-8 hover:border-cyan-500/30 transition-all duration-300 group block"
                        >
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                                {service.description}
                            </p>
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-slate-500">
                                        <CheckCircle2 className={`w-4 h-4 text-cyan-400 ${isRtl ? 'ml-2' : 'mr-2'} flex-shrink-0`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center text-sm">
                                {t.cta}
                                <ArrowRight className={`w-4 h-4 ${isRtl ? 'mr-2 rotate-180' : 'ml-2'}`} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ServicesList

