'use client';
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

interface ServiceItem {
    id: string
    title: string
    description: string
    icon: string
    link: string
    features: string[]
    gradient: string
    size: 'large' | 'medium' | 'wide'
}

interface TranslationData {
    sectionTitle: string
    sectionSubtitle: string
    cta: string
    services: ServiceItem[]
}

const translations: Record<Language, TranslationData> = {
    en: {
        sectionTitle: 'Your Competitors Are Using These',
        sectionSubtitle: 'Every hour without AI = customers lost to someone who has it',
        cta: 'Stop Losing Money',
        services: [
            {
                id: 'whatsapp',
                title: 'WhatsApp Money Machine',
                description: 'Responds in 3 seconds while competitors take 3 hours. Closes sales at 2 AM. Never calls in sick.',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['24/7 Auto-reply', 'Sells while you sleep', 'Zero missed leads'],
                gradient: 'from-green-500 to-emerald-600',
                size: 'large'
            },
            {
                id: 'instagram',
                title: 'Instagram Lead Magnet',
                description: 'Turn every DM into a sale. Your competitors ignore 80% of messages. You won\'t.',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['3x more engagement', 'Auto DM sequences', 'Story monetization'],
                gradient: 'from-pink-500 to-purple-600',
                size: 'medium'
            },
            {
                id: 'messenger',
                title: 'Facebook Profit Bot',
                description: 'Every ad dollar wasted without follow-up. We turn clicks into customers.',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['40% better ad ROI', 'Instant lead capture', 'Auto nurture'],
                gradient: 'from-blue-500 to-indigo-600',
                size: 'medium'
            },
            {
                id: 'web',
                title: 'Website That Actually Sells',
                description: 'Slow sites lose 53% of visitors. Yours will load in 0.8 seconds and convert.',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['Google loves it', '0.8s load time', '3x more leads'],
                gradient: 'from-cyan-500 to-blue-600',
                size: 'wide'
            },
            {
                id: 'seo',
                title: 'Own Page 1 of Google',
                description: 'Your competitors are stealing your customers right now. Take them back.',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['Rank in 90 days', 'Steal competitor traffic', 'Free organic leads'],
                gradient: 'from-amber-500 to-orange-600',
                size: 'medium'
            },
            {
                id: 'automation',
                title: 'Fire Your Repetitive Tasks',
                description: 'Stop paying humans for robot work. We automate what wastes your time.',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['Save 20hrs/week', 'Zero errors', 'Scales infinitely'],
                gradient: 'from-purple-500 to-pink-600',
                size: 'medium'
            }
        ]
    },
    ar: {
        sectionTitle: 'منافسوك يستخدمون هذا الآن',
        sectionSubtitle: 'كل ساعة بدون AI = عملاء يروحون لمنافسك',
        cta: 'وقّف الخسارة',
        services: [
            {
                id: 'whatsapp',
                title: 'ماكينة واتساب للمبيعات',
                description: 'يرد بـ 3 ثواني بينما منافسك بـ 3 ساعات. يبيع الساعة 2 بالليل. ما بيمرض أبداً.',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['رد فوري 24/7', 'يبيع وأنت نايم', 'صفر عملاء ضائعين'],
                gradient: 'from-green-500 to-emerald-600',
                size: 'large'
            },
            {
                id: 'instagram',
                title: 'مغناطيس عملاء انستغرام',
                description: 'حوّل كل رسالة لمبيعة. منافسوك يتجاهلون 80% من الرسائل. أنت لا.',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['3x تفاعل أكثر', 'رسائل متسلسلة', 'ستوري = فلوس'],
                gradient: 'from-pink-500 to-purple-600',
                size: 'medium'
            },
            {
                id: 'messenger',
                title: 'بوت أرباح فيسبوك',
                description: 'كل دولار إعلان بدون متابعة = ضائع. نحوّل النقرات لعملاء.',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['40% عائد إعلانات أفضل', 'التقاط فوري', 'متابعة آلية'],
                gradient: 'from-blue-500 to-indigo-600',
                size: 'medium'
            },
            {
                id: 'web',
                title: 'موقع يبيع فعلاً',
                description: 'المواقع البطيئة تخسر 53% من الزوار. موقعك يحمّل بـ 0.8 ثانية ويحوّل.',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['جوجل يحبه', '0.8 ثانية تحميل', '3x عملاء أكثر'],
                gradient: 'from-cyan-500 to-blue-600',
                size: 'wide'
            },
            {
                id: 'seo',
                title: 'امتلك صفحة 1 بجوجل',
                description: 'منافسوك يسرقون عملائك الآن. استردّهم.',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['ترتيب بـ 90 يوم', 'اسرق زوار المنافس', 'عملاء مجانيين'],
                gradient: 'from-amber-500 to-orange-600',
                size: 'medium'
            },
            {
                id: 'automation',
                title: 'طرد المهام المتكررة',
                description: 'توقف عن دفع رواتب لشغل روبوتات. نحن نأتمت ما يضيع وقتك.',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['روبوتات سير العمل', 'معالجة البيانات', 'ذكاء مخصص'],
                gradient: 'from-purple-500 to-pink-600',
                size: 'medium'
            }
        ]
    },
    de: {
        sectionTitle: 'Ihre Konkurrenten nutzen das bereits',
        sectionSubtitle: 'Jede Stunde ohne KI = Kunden gehen zur Konkurrenz',
        cta: 'Verluste stoppen',
        services: [
            {
                id: 'whatsapp',
                title: 'WhatsApp KI-Agent',
                description: 'Ein unermüdlicher Mitarbeiter, der verkauft und supportet — während Sie schlafen',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['24/7 Sofort-Antworten', 'Smarte Lead-Qualifizierung', 'CRM-Auto-Sync'],
                gradient: 'from-green-500 to-emerald-600',
                size: 'large'
            },
            {
                id: 'instagram',
                title: 'Instagram KI-Bot',
                description: 'Auto-Engagement für jede DM, Kommentar und Story',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['DM-Automatisierung', 'Story-Reaktionen', 'Kommentar-KI'],
                gradient: 'from-pink-500 to-purple-600',
                size: 'medium'
            },
            {
                id: 'messenger',
                title: 'Messenger Bot',
                description: 'Verwandeln Sie Facebook-Traffic in qualifizierte Leads',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['Lead-Generierung', 'Ads-Integration', 'Support-Bot'],
                gradient: 'from-blue-500 to-indigo-600',
                size: 'medium'
            },
            {
                id: 'web',
                title: 'Blitzschnelle Websites',
                description: 'Next.js-Seiten, die sofort laden und besser ranken',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['SEO-optimiert', 'Sub-Sekunden-Ladezeit', 'Modernes UI/UX'],
                gradient: 'from-cyan-500 to-blue-600',
                size: 'wide'
            },
            {
                id: 'seo',
                title: 'Suche dominieren',
                description: 'Erreichen Sie Kunden vor Ihren Wettbewerbern',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['Technisches Audit', 'Content-Strategie', 'Linkaufbau'],
                gradient: 'from-amber-500 to-orange-600',
                size: 'medium'
            },
            {
                id: 'automation',
                title: 'KI-Automatisierung',
                description: 'Eliminieren Sie repetitive Aufgaben für immer',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['Workflow-Bots', 'Datenverarbeitung', 'Individuelle KI'],
                gradient: 'from-purple-500 to-pink-600',
                size: 'medium'
            }
        ]
    },
    fr: {
        sectionTitle: 'Vos concurrents utilisent déjà ceci',
        sectionSubtitle: "Chaque heure sans IA = clients perdus pour la concurrence",
        cta: 'Arrêter les pertes',
        services: [
            {
                id: 'whatsapp',
                title: 'Agent IA WhatsApp',
                description: 'Un employé infatigable qui vend et assiste — pendant que vous dormez',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['Réponses 24/7', 'Qualification intelligente', 'Sync CRM auto'],
                gradient: 'from-green-500 to-emerald-600',
                size: 'large'
            },
            {
                id: 'instagram',
                title: 'Bot IA Instagram',
                description: 'Engagement auto pour chaque DM, commentaire et story',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['Automatisation DM', 'Réactions stories', 'IA commentaires'],
                gradient: 'from-pink-500 to-purple-600',
                size: 'medium'
            },
            {
                id: 'messenger',
                title: 'Bot Messenger',
                description: 'Transformez le trafic Facebook en leads qualifiés',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['Génération leads', 'Intégration pubs', 'Bot support'],
                gradient: 'from-blue-500 to-indigo-600',
                size: 'medium'
            },
            {
                id: 'web',
                title: 'Sites ultra-rapides',
                description: 'Sites Next.js qui chargent instantanément',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['Optimisé SEO', 'Chargement < 1s', 'UI/UX moderne'],
                gradient: 'from-cyan-500 to-blue-600',
                size: 'wide'
            },
            {
                id: 'seo',
                title: 'Dominer la recherche',
                description: 'Atteignez vos clients avant vos concurrents',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['Audit technique', 'Stratégie contenu', 'Link building'],
                gradient: 'from-amber-500 to-orange-600',
                size: 'medium'
            },
            {
                id: 'automation',
                title: 'Automatisation IA',
                description: 'Éliminez les tâches répétitives pour toujours',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['Bots workflow', 'Traitement données', 'IA personnalisée'],
                gradient: 'from-purple-500 to-pink-600',
                size: 'medium'
            }
        ]
    },
    it: {
        sectionTitle: 'I tuoi concorrenti lo usano già',
        sectionSubtitle: "Ogni ora senza IA = clienti persi per la concorrenza",
        cta: 'Ferma le perdite',
        services: [
            {
                id: 'whatsapp',
                title: 'Agente IA WhatsApp',
                description: 'Un dipendente instancabile che vende e assiste — mentre dormi',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['Risposte 24/7', 'Qualificazione smart', 'Sync CRM auto'],
                gradient: 'from-green-500 to-emerald-600',
                size: 'large'
            },
            {
                id: 'instagram',
                title: 'Bot IA Instagram',
                description: 'Auto-engagement per ogni DM, commento e story',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['Automazione DM', 'Reazioni stories', 'IA commenti'],
                gradient: 'from-pink-500 to-purple-600',
                size: 'medium'
            },
            {
                id: 'messenger',
                title: 'Bot Messenger',
                description: 'Trasforma il traffico Facebook in lead qualificati',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['Generazione lead', 'Integrazione ads', 'Bot supporto'],
                gradient: 'from-blue-500 to-indigo-600',
                size: 'medium'
            },
            {
                id: 'web',
                title: 'Siti velocissimi',
                description: 'Siti Next.js che caricano istantaneamente',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['Ottimizzato SEO', 'Caricamento < 1s', 'UI/UX moderno'],
                gradient: 'from-cyan-500 to-blue-600',
                size: 'wide'
            },
            {
                id: 'seo',
                title: 'Domina la ricerca',
                description: 'Raggiungi i clienti prima dei concorrenti',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['Audit tecnico', 'Strategia contenuti', 'Link building'],
                gradient: 'from-amber-500 to-orange-600',
                size: 'medium'
            },
            {
                id: 'automation',
                title: 'Automazione IA',
                description: 'Elimina le attività ripetitive per sempre',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['Bot workflow', 'Elaborazione dati', 'IA personalizzata'],
                gradient: 'from-purple-500 to-pink-600',
                size: 'medium'
            }
        ]
    },
    hi: {
        sectionTitle: 'AI समाधान जो बदलाव लाते हैं',
        sectionSubtitle: 'ऑटोमेशन उत्कृष्टता का अपना रास्ता चुनें',
        cta: 'एक्सप्लोर करें',
        services: [
            {
                id: 'whatsapp',
                title: 'WhatsApp AI एजेंट',
                description: 'एक अथक कर्मचारी जो बेचता और सपोर्ट करता है — जब आप सो रहे हों',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['24/7 तत्काल जवाब', 'स्मार्ट लीड क्वालिफिकेशन', 'CRM ऑटो-सिंक'],
                gradient: 'from-green-500 to-emerald-600',
                size: 'large'
            },
            {
                id: 'instagram',
                title: 'Instagram AI बॉट',
                description: 'हर DM, कमेंट और स्टोरी के लिए ऑटो-एंगेज',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['DM ऑटोमेशन', 'स्टोरी रिएक्शन', 'कमेंट AI'],
                gradient: 'from-pink-500 to-purple-600',
                size: 'medium'
            },
            {
                id: 'messenger',
                title: 'Messenger बॉट',
                description: 'Facebook ट्रैफिक को क्वालिफाइड लीड्स में बदलें',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['लीड जनरेशन', 'एड इंटीग्रेशन', 'सपोर्ट बॉट'],
                gradient: 'from-blue-500 to-indigo-600',
                size: 'medium'
            },
            {
                id: 'web',
                title: 'बिजली जैसी तेज़ वेबसाइट',
                description: 'Next.js साइट्स जो तुरंत लोड होती हैं',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['SEO ऑप्टिमाइज़्ड', 'सब-सेकंड लोड', 'मॉडर्न UI/UX'],
                gradient: 'from-cyan-500 to-blue-600',
                size: 'wide'
            },
            {
                id: 'seo',
                title: 'सर्च पर राज करें',
                description: 'प्रतिस्पर्धियों से पहले ग्राहकों तक पहुंचें',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['टेक्निकल ऑडिट', 'कंटेंट स्ट्रैटेजी', 'लिंक बिल्डिंग'],
                gradient: 'from-amber-500 to-orange-600',
                size: 'medium'
            },
            {
                id: 'automation',
                title: 'AI ऑटोमेशन',
                description: 'दोहराए जाने वाले कार्यों को हमेशा के लिए खत्म करें',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['वर्कफ्लो बॉट्स', 'डेटा प्रोसेसिंग', 'कस्टम AI'],
                gradient: 'from-purple-500 to-pink-600',
                size: 'medium'
            }
        ]
    },
    ms: {
        sectionTitle: 'Penyelesaian AI yang Mentransformasi',
        sectionSubtitle: 'Pilih laluan anda ke kecemerlangan automasi',
        cta: 'Teroka',
        services: [
            {
                id: 'whatsapp',
                title: 'Ejen AI WhatsApp',
                description: 'Pekerja yang tidak kenal penat yang menjual dan menyokong — semasa anda tidur',
                icon: '💬',
                link: '/services/whatsapp-ai-chatbot',
                features: ['Balasan 24/7', 'Kelayakan Lead Pintar', 'Segerak CRM Auto'],
                gradient: 'from-green-500 to-emerald-600',
                size: 'large'
            },
            {
                id: 'instagram',
                title: 'Bot AI Instagram',
                description: 'Auto-engage setiap DM, komen dan story',
                icon: '📸',
                link: '/services/instagram-ai-chatbot',
                features: ['Automasi DM', 'Reaksi Story', 'AI Komen'],
                gradient: 'from-pink-500 to-purple-600',
                size: 'medium'
            },
            {
                id: 'messenger',
                title: 'Bot Messenger',
                description: 'Tukar trafik Facebook kepada lead berkualiti',
                icon: '💭',
                link: '/services/messenger-ai-chatbot',
                features: ['Jana Lead', 'Integrasi Iklan', 'Bot Sokongan'],
                gradient: 'from-blue-500 to-indigo-600',
                size: 'medium'
            },
            {
                id: 'web',
                title: 'Laman Web Sepantas Kilat',
                description: 'Laman Next.js yang memuatkan serta-merta',
                icon: '⚡',
                link: '/services/nextjs-development',
                features: ['Dioptimumkan SEO', 'Muat < 1 saat', 'UI/UX Moden'],
                gradient: 'from-cyan-500 to-blue-600',
                size: 'wide'
            },
            {
                id: 'seo',
                title: 'Dominasi Carian',
                description: 'Capai pelanggan sebelum pesaing',
                icon: '📈',
                link: '/services/advanced-seo',
                features: ['Audit Teknikal', 'Strategi Kandungan', 'Pembinaan Pautan'],
                gradient: 'from-amber-500 to-orange-600',
                size: 'medium'
            },
            {
                id: 'automation',
                title: 'Automasi AI',
                description: 'Hapuskan tugas berulang selama-lamanya',
                icon: '🤖',
                link: '/services/ai-automations',
                features: ['Bot Aliran Kerja', 'Pemprosesan Data', 'AI Tersuai'],
                gradient: 'from-purple-500 to-pink-600',
                size: 'medium'
            }
        ]
    }
}

interface BentoShowcaseProps {
    lang: string
}

const ServiceCard = ({ 
    service, 
    cta, 
    lang,
    index 
}: { 
    service: ServiceItem
    cta: string
    lang: string
    index: number 
}) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateXValue = (y - centerY) / 20
        const rotateYValue = (centerX - x) / 20
        setRotateX(rotateXValue)
        setRotateY(rotateYValue)
    }

    const handleMouseLeave = () => {
        setRotateX(0)
        setRotateY(0)
    }

    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`

    const sizeClasses = {
        large: 'md:col-span-2 md:row-span-2',
        medium: 'md:col-span-1 md:row-span-1',
        wide: 'md:col-span-2 md:row-span-1'
    }

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`${sizeClasses[service.size]} group relative`}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.1s ease-out'
            }}
        >
            <a
                href={getLink(service.link)}
                className="block h-full"
            >
                {/* Card Background */}
                <div className="relative h-full glass-card-ai p-6 md:p-8 overflow-hidden">
                    {/* Gradient Glow */}
                    <div 
                        className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <div className="relative mb-4">
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                            <span className="text-2xl">{service.icon}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                        <h3 className="heading-ai text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gradient-ai transition-all duration-300">
                            {service.title}
                        </h3>
                        <p className="text-white/60 mb-6 leading-relaxed">
                            {service.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {service.features.map((feature, i) => (
                                <span 
                                    key={i}
                                    className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-full"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all duration-300">
                            <span>{cta}</span>
                            <svg 
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-500/30 transition-colors duration-500 pointer-events-none" />
                </div>
            </a>
        </motion.div>
    )
}

const BentoShowcase = ({ lang }: BentoShowcaseProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'

    return (
        <section 
            id="services"
            dir={isRtl ? 'rtl' : 'ltr'} 
            className="relative py-24 md:py-32 bg-[#030014] overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-ai text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        {t.sectionTitle}
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                        {t.sectionSubtitle}
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                    {t.services.map((service, index) => (
                        <ServiceCard 
                            key={service.id}
                            service={service}
                            cta={t.cta}
                            lang={lang}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BentoShowcase
