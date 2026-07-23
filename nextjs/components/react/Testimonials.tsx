'use client';
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

interface Testimonial {
    name: string
    role: string
    company: string
    content: string
    rating: number
    avatar: string
}

interface TestimonialTranslation {
    title: string
    subtitle: string
    testimonials: Testimonial[]
}

const translations: Record<Language, TestimonialTranslation> = {
    en: {
        title: 'What Our Clients Say',
        subtitle: 'Real feedback from real businesses.',
        testimonials: [
            {
                name: 'Ahmad Al-Hassan',
                role: 'CEO',
                company: 'TechFlow Solutions',
                content: '"The WhatsApp bot transformed our customer service. We now respond instantly 24/7 and never miss a lead. Highly recommended!"',
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'Sarah Mitchell',
                role: 'Marketing Director',
                company: 'GrowthFirst Agency',
                content: '"Our Instagram engagement tripled after implementing the AI bot. DMs are now handled automatically and our team can focus on strategy."',
                rating: 5,
                avatar: '👩‍💻'
            },
            {
                name: 'Mohammed Khalil',
                role: 'Founder',
                company: 'Dubai Properties',
                content: '"The AI qualifies leads around the clock and books viewings automatically. Our sales team is much more productive now."',
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'Lisa Chen',
                role: 'Operations Manager',
                company: 'E-Commerce Plus',
                content: '"Support tickets dropped significantly. The automation handles routine questions so our team can focus on complex issues."',
                rating: 5,
                avatar: '👩‍💼'
            }
        ]
    },
    ar: {
        title: 'ماذا يقول عملاؤنا',
        subtitle: 'آراء حقيقية من شركات حقيقية.',
        testimonials: [
            {
                name: 'أحمد الحسن',
                role: 'المدير التنفيذي',
                company: 'تك فلو سوليوشنز',
                content: '"بوت الواتساب غيّر خدمة العملاء عندنا. صرنا نرد فوراً 24/7 وما نفوّت أي عميل. أنصح فيهم بقوة!"',
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'سارة ميتشل',
                role: 'مديرة التسويق',
                company: 'جروث فيرست',
                content: '"تفاعل الانستغرام تضاعف بعد تركيب البوت الذكي. الرسائل صارت تُعالج تلقائياً والفريق يركز على الاستراتيجية."',
                rating: 5,
                avatar: '👩‍💻'
            },
            {
                name: 'محمد خليل',
                role: 'المؤسس',
                company: 'دبي بروبرتيز',
                content: '"الـ AI يؤهل العملاء على مدار الساعة ويحجز المعاينات تلقائياً. فريق المبيعات صار أكثر إنتاجية."',
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'ليزا تشين',
                role: 'مديرة العمليات',
                company: 'إي كوميرس بلس',
                content: '"تذاكر الدعم انخفضت بشكل كبير. الأتمتة تتعامل مع الأسئلة الروتينية والفريق يركز على المعقد."',
                rating: 5,
                avatar: '👩‍💼'
            }
        ]
    },
    de: {
        title: 'Was unsere Kunden sagen',
        subtitle: 'Echte Ergebnisse von echten Unternehmen',
        testimonials: [
            {
                name: 'Ahmad Al-Hassan',
                role: 'CEO',
                company: 'TechFlow Solutions',
                content: 'HMZ hat unseren Kundenservice komplett transformiert. Unser WhatsApp-Bot bearbeitet jetzt 80% der Anfragen automatisch.',
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'Sarah Mitchell',
                role: 'Marketing-Direktorin',
                company: 'GrowthFirst Agency',
                content: 'Der Instagram-KI-Bot steigerte unser Engagement um 300%. Von verpassten DMs zu sofortigen Antworten.',
                rating: 5,
                avatar: '👩‍💻'
            },
            {
                name: 'Mohammed Khalil',
                role: 'Gründer',
                company: 'Dubai Properties',
                content: 'Die beste Investition. Die KI qualifiziert Leads 24/7 und bucht Besichtigungen automatisch.',
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'Lisa Chen',
                role: 'Operations Manager',
                company: 'E-Commerce Plus',
                content: 'Von 200 täglichen Support-Tickets auf 40. Die Automatisierung erledigt alles. Unglaublicher ROI.',
                rating: 5,
                avatar: '👩‍💼'
            }
        ]
    },
    fr: {
        title: 'Ce que disent nos clients',
        subtitle: 'Des résultats réels de vraies entreprises',
        testimonials: [
            {
                name: 'Ahmad Al-Hassan',
                role: 'PDG',
                company: 'TechFlow Solutions',
                content: 'HMZ a complètement transformé notre service client. Notre bot WhatsApp gère maintenant 80% des demandes automatiquement.',
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'Sarah Mitchell',
                role: 'Directrice Marketing',
                company: 'GrowthFirst Agency',
                content: "Le bot IA Instagram a augmenté notre engagement de 300%. Des DMs manqués aux réponses instantanées.",
                rating: 5,
                avatar: '👩‍💻'
            },
            {
                name: 'Mohammed Khalil',
                role: 'Fondateur',
                company: 'Dubai Properties',
                content: "Meilleur investissement. L'IA qualifie les leads 24/7 et réserve les visites automatiquement.",
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'Lisa Chen',
                role: 'Responsable des opérations',
                company: 'E-Commerce Plus',
                content: "De 200 tickets de support quotidiens à 40. L'automatisation gère tout. ROI incroyable.",
                rating: 5,
                avatar: '👩‍💼'
            }
        ]
    },
    it: {
        title: 'Cosa dicono i nostri clienti',
        subtitle: 'Risultati reali da aziende reali',
        testimonials: [
            {
                name: 'Ahmad Al-Hassan',
                role: 'CEO',
                company: 'TechFlow Solutions',
                content: 'HMZ ha trasformato completamente il nostro servizio clienti. Il nostro bot WhatsApp gestisce ora l\'80% delle richieste automaticamente.',
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'Sarah Mitchell',
                role: 'Direttrice Marketing',
                company: 'GrowthFirst Agency',
                content: 'Il bot IA Instagram ha aumentato il nostro engagement del 300%. Da DM persi a risposte istantanee.',
                rating: 5,
                avatar: '👩‍💻'
            },
            {
                name: 'Mohammed Khalil',
                role: 'Fondatore',
                company: 'Dubai Properties',
                content: 'Miglior investimento. L\'IA qualifica i lead 24/7 e prenota le visite automaticamente.',
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'Lisa Chen',
                role: 'Operations Manager',
                company: 'E-Commerce Plus',
                content: 'Da 200 ticket di supporto giornalieri a 40. L\'automazione gestisce tutto. ROI incredibile.',
                rating: 5,
                avatar: '👩‍💼'
            }
        ]
    },
    hi: {
        title: 'हमारे ग्राहक क्या कहते हैं',
        subtitle: 'असली व्यवसायों से असली परिणाम',
        testimonials: [
            {
                name: 'अहमद अल-हसन',
                role: 'CEO',
                company: 'टेकफ्लो सॉल्यूशंस',
                content: 'HMZ ने हमारी ग्राहक सेवा को पूरी तरह से बदल दिया। हमारा WhatsApp बॉट अब 80% पूछताछ को स्वचालित रूप से संभालता है।',
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'सारा मिशेल',
                role: 'मार्केटिंग डायरेक्टर',
                company: 'ग्रोथफर्स्ट एजेंसी',
                content: 'Instagram AI बॉट ने हमारी एंगेजमेंट को 300% बढ़ा दिया। मिस्ड DMs से तुरंत जवाब तक।',
                rating: 5,
                avatar: '👩‍💻'
            },
            {
                name: 'मोहम्मद खलील',
                role: 'संस्थापक',
                company: 'दुबई प्रॉपर्टीज',
                content: 'सबसे अच्छा निवेश। AI 24/7 लीड्स को क्वालिफाई करता है और स्वचालित रूप से व्यूइंग बुक करता है।',
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'लिसा चेन',
                role: 'ऑपरेशंस मैनेजर',
                company: 'ई-कॉमर्स प्लस',
                content: '200 दैनिक सपोर्ट टिकटों से 40 तक। ऑटोमेशन सब कुछ संभालता है। अविश्वसनीय ROI।',
                rating: 5,
                avatar: '👩‍💼'
            }
        ]
    },
    ms: {
        title: 'Apa Kata Pelanggan Kami',
        subtitle: 'Hasil sebenar dari perniagaan sebenar',
        testimonials: [
            {
                name: 'Ahmad Al-Hassan',
                role: 'CEO',
                company: 'TechFlow Solutions',
                content: 'HMZ mengubah perkhidmatan pelanggan kami sepenuhnya. Bot WhatsApp kami kini mengendalikan 80% pertanyaan secara automatik.',
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'Sarah Mitchell',
                role: 'Pengarah Pemasaran',
                company: 'GrowthFirst Agency',
                content: 'Bot AI Instagram meningkatkan penglibatan kami sebanyak 300%. Dari DM terlepas kepada respons segera.',
                rating: 5,
                avatar: '👩‍💻'
            },
            {
                name: 'Mohammed Khalil',
                role: 'Pengasas',
                company: 'Dubai Properties',
                content: 'Pelaburan terbaik. AI menapis lead 24/7 dan menempah lawatan secara automatik.',
                rating: 5,
                avatar: '👨‍💼'
            },
            {
                name: 'Lisa Chen',
                role: 'Pengurus Operasi',
                company: 'E-Commerce Plus',
                content: 'Dari 200 tiket sokongan harian kepada 40. Automasi mengendalikan semuanya. ROI yang luar biasa.',
                rating: 5,
                avatar: '👩‍💼'
            }
        ]
    }
}

interface TestimonialsProps {
    lang: string
}

const Testimonials = ({ lang }: TestimonialsProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % t.testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [t.testimonials.length])

    return (
        <section 
            dir={isRtl ? 'rtl' : 'ltr'}
            className="relative py-24 md:py-32 bg-[#030014] overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px]" />
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
                        {t.title}
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    {/* Main Testimonial */}
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="glass-card-ai p-8 md:p-12 text-center">
                            {/* Quote Icon */}
                            <div className="text-6xl text-cyan-500/20 mb-6">"</div>

                            {/* Stars */}
                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(t.testimonials[activeIndex].rating)].map((_, i) => (
                                    <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 font-light">
                                "{t.testimonials[activeIndex].content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-2xl">
                                    {t.testimonials[activeIndex].avatar}
                                </div>
                                <div className={`text-${isRtl ? 'right' : 'left'}`}>
                                    <div className="font-semibold text-white">
                                        {t.testimonials[activeIndex].name}
                                    </div>
                                    <div className="text-sm text-white/50">
                                        {t.testimonials[activeIndex].role}, {t.testimonials[activeIndex].company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {t.testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === activeIndex 
                                        ? 'bg-cyan-500 w-8' 
                                        : 'bg-white/20 hover:bg-white/40'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Small Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
                    {t.testimonials.map((testimonial, index) => (
                        <motion.button
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setActiveIndex(index)}
                            className={`p-4 rounded-2xl text-left transition-all duration-300 ${
                                index === activeIndex 
                                    ? 'bg-white/10 border border-cyan-500/30' 
                                    : 'bg-white/5 border border-white/5 hover:bg-white/10'
                            }`}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xl">{testimonial.avatar}</span>
                                <div>
                                    <div className="text-sm font-medium text-white">{testimonial.name}</div>
                                    <div className="text-xs text-white/40">{testimonial.company}</div>
                                </div>
                            </div>
                            <div className="flex gap-0.5">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
