'use client';
import { motion } from 'framer-motion'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

interface Step {
    number: string
    title: string
    description: string
    icon: string
}

interface ProcessTranslation {
    title: string
    subtitle: string
    steps: Step[]
    cta: string
}

const translations: Record<Language, ProcessTranslation> = {
    en: {
        title: 'From Bleeding Money to Making Money in 4 Steps',
        subtitle: 'Most clients see ROI within 11 days. Here\'s exactly how:',
        steps: [
            {
                number: '01',
                title: 'Free Revenue Audit (15 min)',
                description: 'We show you exactly where you\'re losing money and how much. No pitch, just numbers. Walk away if you want.',
                icon: '🎯'
            },
            {
                number: '02',
                title: 'Custom Battle Plan',
                description: 'We design your AI system around YOUR specific revenue leaks. Not templates. Custom.',
                icon: '🧠'
            },
            {
                number: '03',
                title: 'We Build, You Approve',
                description: '3-7 days later, your AI is ready. Test it. Break it. We refine until it\'s perfect.',
                icon: '⚡'
            },
            {
                number: '04',
                title: 'Watch Money Come In',
                description: 'Go live. See leads captured at 2AM. Watch sales happen while you sleep. Average ROI: 847%.',
                icon: '🚀'
            }
        ],
        cta: 'Get My Free Audit'
    },
    ar: {
        title: 'من نزيف الفلوس للربح بـ 4 خطوات',
        subtitle: 'أغلب العملاء يشوفون العائد خلال 11 يوم. هيك بالظبط:',
        steps: [
            {
                number: '٠١',
                title: 'تحليل إيرادات مجاني (15 دقيقة)',
                description: 'نوريك بالظبط وين عم تخسر فلوس وقديش. بدون بيع، بس أرقام. امشي إذا بدك.',
                icon: '🎯'
            },
            {
                number: '٠٢',
                title: 'خطة معركة مخصصة',
                description: 'نصمم نظام AI حول تسريبات إيراداتك أنت. مش قوالب جاهزة. مخصص.',
                icon: '🧠'
            },
            {
                number: '٠٣',
                title: 'نبني، أنت توافق',
                description: 'بعد 3-7 أيام، الـ AI جاهز. جربه. كسّره. نعدّل لحد ما يصير مثالي.',
                icon: '⚡'
            },
            {
                number: '٠٤',
                title: 'شاهد الفلوس تيجي',
                description: 'انطلق. شوف العملاء ينلتقطون الساعة 2 بالليل. شوف المبيعات وأنت نايم. عائد: 847%.',
                icon: '🚀'
            }
        ],
        cta: 'احصل على تحليلي المجاني'
    },
    de: {
        title: 'Wie wir arbeiten',
        subtitle: 'Von der Idee zum Launch in Rekordzeit',
        steps: [
            {
                number: '01',
                title: 'Erstgespräch',
                description: 'Wir analysieren Ihre Geschäftsanforderungen und erstellen eine maßgeschneiderte Strategie.',
                icon: '🎯'
            },
            {
                number: '02',
                title: 'KI-Architektur',
                description: 'Unsere Ingenieure entwerfen Ihr intelligentes System mit den neuesten KI-Modellen.',
                icon: '🧠'
            },
            {
                number: '03',
                title: 'Entwicklung',
                description: 'Wir bauen, testen und verfeinern Ihre KI-Lösung passend zu Ihrer Marke.',
                icon: '⚡'
            },
            {
                number: '04',
                title: 'Launch & Skalierung',
                description: 'Go-Live mit 24/7-Überwachung. Kontinuierliche Optimierung basierend auf Echtzeitdaten.',
                icon: '🚀'
            }
        ],
        cta: 'Projekt starten'
    },
    fr: {
        title: 'Comment nous travaillons',
        subtitle: "De l'idée au lancement en un temps record",
        steps: [
            {
                number: '01',
                title: 'Appel découverte',
                description: 'Nous analysons vos besoins et créons une stratégie personnalisée.',
                icon: '🎯'
            },
            {
                number: '02',
                title: 'Architecture IA',
                description: 'Nos ingénieurs conçoivent votre système intelligent avec les derniers modèles IA.',
                icon: '🧠'
            },
            {
                number: '03',
                title: 'Développement',
                description: 'Nous construisons, testons et affinons votre solution IA selon votre marque.',
                icon: '⚡'
            },
            {
                number: '04',
                title: 'Lancement & Croissance',
                description: 'Mise en ligne avec surveillance 24/7. Optimisation continue basée sur les données.',
                icon: '🚀'
            }
        ],
        cta: 'Démarrer votre projet'
    },
    it: {
        title: 'Come lavoriamo',
        subtitle: "Dall'idea al lancio in tempo record",
        steps: [
            {
                number: '01',
                title: 'Chiamata conoscitiva',
                description: 'Analizziamo le tue esigenze e creiamo una strategia personalizzata.',
                icon: '🎯'
            },
            {
                number: '02',
                title: 'Architettura IA',
                description: 'I nostri ingegneri progettano il tuo sistema intelligente con i più recenti modelli IA.',
                icon: '🧠'
            },
            {
                number: '03',
                title: 'Sviluppo',
                description: 'Costruiamo, testiamo e perfezioniamo la tua soluzione IA in linea con il tuo brand.',
                icon: '⚡'
            },
            {
                number: '04',
                title: 'Lancio e crescita',
                description: 'Go-live con monitoraggio 24/7. Ottimizzazione continua basata sui dati reali.',
                icon: '🚀'
            }
        ],
        cta: 'Inizia il tuo progetto'
    },
    hi: {
        title: 'हम कैसे काम करते हैं',
        subtitle: 'विचार से लॉन्च तक रिकॉर्ड समय में',
        steps: [
            {
                number: '01',
                title: 'डिस्कवरी कॉल',
                description: 'हम आपकी व्यावसायिक जरूरतों का विश्लेषण करते हैं और एक कस्टम रणनीति बनाते हैं।',
                icon: '🎯'
            },
            {
                number: '02',
                title: 'AI आर्किटेक्चर',
                description: 'हमारे इंजीनियर नवीनतम AI मॉडल के साथ आपका बुद्धिमान सिस्टम डिज़ाइन करते हैं।',
                icon: '🧠'
            },
            {
                number: '03',
                title: 'डेवलपमेंट',
                description: 'हम आपके ब्रांड से मेल खाते हुए आपके AI समाधान को बनाते और परीक्षण करते हैं।',
                icon: '⚡'
            },
            {
                number: '04',
                title: 'लॉन्च और स्केल',
                description: '24/7 मॉनिटरिंग के साथ लाइव जाएं। वास्तविक प्रदर्शन डेटा के आधार पर निरंतर अनुकूलन।',
                icon: '🚀'
            }
        ],
        cta: 'अपना प्रोजेक्ट शुरू करें'
    },
    ms: {
        title: 'Cara Kami Bekerja',
        subtitle: 'Dari idea ke pelancaran dalam masa yang singkat',
        steps: [
            {
                number: '01',
                title: 'Panggilan Penemuan',
                description: 'Kami menganalisis keperluan perniagaan anda dan mencipta strategi tersuai.',
                icon: '🎯'
            },
            {
                number: '02',
                title: 'Seni Bina AI',
                description: 'Jurutera kami mereka bentuk sistem pintar anda dengan model AI terkini.',
                icon: '🧠'
            },
            {
                number: '03',
                title: 'Pembangunan',
                description: 'Kami membina, menguji dan memperhalusi penyelesaian AI anda mengikut jenama anda.',
                icon: '⚡'
            },
            {
                number: '04',
                title: 'Pelancaran & Skala',
                description: 'Pergi langsung dengan pemantauan 24/7. Pengoptimuman berterusan berdasarkan data sebenar.',
                icon: '🚀'
            }
        ],
        cta: 'Mulakan Projek Anda'
    }
}

interface ProcessWorkflowProps {
    lang: string
}

const ProcessWorkflow = ({ lang }: ProcessWorkflowProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'

    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`

    return (
        <section 
            dir={isRtl ? 'rtl' : 'ltr'}
            className="relative py-24 md:py-32 bg-[#030014] overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="heading-ai text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        {t.title}
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative group"
                            >
                                {/* Step Card */}
                                <div className="glass-card-ai p-8 h-full relative z-10">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-cyan-500/30">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="heading-ai text-xl font-bold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector Arrow (visible on lg) */}
                                {index < t.steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 z-20">
                                        <div className="w-8 h-8 rounded-full bg-[#030014] border border-cyan-500/30 flex items-center justify-center">
                                            <svg 
                                                className={`w-4 h-4 text-cyan-500 ${isRtl ? 'rotate-180' : ''}`} 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a
                        href={getLink('/contact')}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                    >
                        {t.cta}
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default ProcessWorkflow
