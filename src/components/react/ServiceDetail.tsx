import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Shield, Star, Zap } from 'lucide-react'
import type { Language } from './types'
import { servicesData } from '../../lib/servicesData'

// Reuse translations from TranslatedSolutionDetail or define similar ones
const translations: Record<Language, {
    backToHome: string
    getFreeQuote: string
    features: string
    benefits: string
    faq: string
    crisisTitle: string
    workflowTitle: string
    inactionTitle: string
    ctaHook: string
    contactNow: string
    requestQuote: string
    techSpecs: string
}> = {
    en: {
        backToHome: 'Back to Home',
        getFreeQuote: 'Get Free Quote',
        features: 'Core Capabilities',
        benefits: 'Executive Impact',
        faq: 'Intelligence & Deployment FAQ',
        crisisTitle: 'The Crisis We Solve',
        workflowTitle: 'The Success Roadmap',
        inactionTitle: 'The Penalty of the Status Quo',
        ctaHook: 'Ready to bridge the gap?',
        contactNow: 'Contact an Expert',
        requestQuote: 'Initiate Transformation',
        techSpecs: 'Deployment Architecture'
    },
    ar: {
        backToHome: 'العودة للرئيسية',
        getFreeQuote: 'احصل على عرض سعر',
        features: 'القدرات الأساسية',
        benefits: 'التأثير التنفيذي',
        faq: 'الأسئلة الشائعة حول النشر',
        crisisTitle: 'الأزمات التي نحلها',
        workflowTitle: 'خارطة طريق النجاح',
        inactionTitle: 'ضريبة البقاء على الوضع الراهن',
        ctaHook: 'هل أنت جاهز لسد الفجوة؟',
        contactNow: 'تحدث مع خبير',
        requestQuote: 'بدء التحول الرقمي',
        techSpecs: 'هندسة النشر'
    },
    de: {
        backToHome: 'Zurück zur Startseite',
        getFreeQuote: 'Angebot anfordern',
        features: 'Kernkompetenzen',
        benefits: 'Executive Impact',
        faq: 'Häufig gestellte Fragen',
        crisisTitle: 'Die Krise, die wir lösen',
        workflowTitle: 'Erfolgs-Roadmap',
        inactionTitle: 'Die Strafe des Status Quo',
        ctaHook: 'Bereit, die Lücke zu schließen?',
        contactNow: 'Experten kontaktieren',
        requestQuote: 'Angebot anfordern',
        techSpecs: 'Bereitstellungsarchitektur'
    },
    fr: {
        backToHome: 'Retour à l\'accueil',
        getFreeQuote: 'Obtenir un devis gratuit',
        features: 'Capacités clés',
        benefits: 'Impact exécutif',
        faq: 'Foire aux questions',
        crisisTitle: 'La crise que nous résolvons',
        workflowTitle: 'Feuille de route du succès',
        inactionTitle: 'La pénalité du statu quo',
        ctaHook: 'Prêt à combler le fossé ?',
        contactNow: 'Contacter un expert',
        requestQuote: 'Demander un devis',
        techSpecs: 'Architecture de déploiement'
    },
    it: {
        backToHome: 'Torna alla Home',
        getFreeQuote: 'Ottieni preventivo gratuito',
        features: 'Capacità principali',
        benefits: 'Impatto esecutivo',
        faq: 'Domande frequenti',
        crisisTitle: 'La crisi que risolviamo',
        workflowTitle: 'Tabella di marcia del successo',
        inactionTitle: 'La penale dello status quo',
        ctaHook: 'Pronto a colmare il divario?',
        contactNow: 'Contatta un esperto',
        requestQuote: 'Richiedi preventivo',
        techSpecs: 'Architettura di implementazione'
    },
    hi: {
        backToHome: 'होम पर वापस जाएं',
        getFreeQuote: 'मुफ्त कोट प्राप्त करें',
        features: 'प्रमुख क्षमताएं',
        benefits: 'कार्यकारी प्रभाव',
        faq: 'अक्सर पूछे जाने वाले प्रश्न',
        crisisTitle: 'वह संकट जिसे हम हल करते हैं',
        workflowTitle: 'सफलता का रोडमैप',
        inactionTitle: 'यथास्थिति का दंड',
        ctaHook: 'क्या आप खाई को पाटने के लिए तैयार हैं?',
        contactNow: 'विशेषज्ञ से संपर्क करें',
        requestQuote: 'कोट का अनुरोध करें',
        techSpecs: 'परिनियोजन वास्तुकला'
    },
    ms: {
        backToHome: 'Kembali ke Rumah',
        getFreeQuote: 'Dapatkan Sebut Harga Percuma',
        features: 'Keupayaan Teras',
        benefits: 'Impak Eksekutif',
        faq: 'Soalan Lazim',
        crisisTitle: 'Krisis yang Kami Selesaikan',
        workflowTitle: 'Pelan Hala Tuju Kejayaan',
        inactionTitle: 'Penalti Status Quo',
        ctaHook: 'Sedia untuk merapatkan jurang?',
        contactNow: 'Hubungi Pakar',
        requestQuote: 'Minta Sebut Harga',
        techSpecs: 'Seni Bina Penempatan'
    }
}

interface ServiceDetailProps {
    serviceId: string;
    lang: string;
}

export default function ServiceDetail({ serviceId, lang }: ServiceDetailProps) {
    // Determine language and fallback
    const languageKeys: Language[] = ['en', 'ar', 'de', 'fr', 'it', 'hi', 'ms'];
    const currentLang = languageKeys.includes(lang as Language) ? (lang as Language) : 'en';

    const t = translations[currentLang];
    const isRtl = currentLang === 'ar';

    // Get service data
    const service = servicesData[serviceId]?.[currentLang];

    if (!service) {
        return <div className="text-white text-center py-20">Service not found</div>;
    }

    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`

    return (
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-[#030014] font-sans">
            {/* Nav Back */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030014]/80 backdrop-blur-xl border-b border-white/5 h-16 flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <a
                        href={lang === 'en' ? '/' : `/${lang}`}
                        className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                        {isRtl ? <ArrowRight className="ml-2 w-5 h-5" /> : <ArrowLeft className="mr-2 w-5 h-5" />}
                        {t.backToHome}
                    </a>
                </div>
            </nav>

            <div className="pt-24 pb-20">
                <main className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <header className="mb-12 border-b border-white/10 pb-12">
                        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-4xl">{service.icon}</span>
                                    <span className="flex items-center text-yellow-500 text-sm">
                                        <Star className="w-4 h-4 fill-current mr-1" />
                                        4.9/5
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{service.title}</span>
                                </h1>
                                <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Sticky CTA Card */}
                            <div className="lg:w-96 p-6 glass-card-ai lg:sticky lg:top-24">
                                <div className="mb-6">
                                    <div className="text-3xl font-bold text-white mb-2">{service.psychologicalHook || t.features}</div>
                                    <p className="text-sm text-gray-400">{t.contactNow}</p>
                                </div>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center text-green-400 text-sm">
                                        <CheckCircle2 className="w-4 h-4 mr-2" />
                                        {isRtl ? 'ضمان استرداد 30 يوم' : '30-Day Risk Free'}
                                    </div>
                                    <div className="flex items-center text-blue-400 text-sm">
                                        <Zap className="w-4 h-4 mr-2" />
                                        {isRtl ? 'دعم فني مدى الحياة' : 'Lifetime Support'}
                                    </div>
                                    <div className="flex items-center text-purple-400 text-sm">
                                        <Shield className="w-4 h-4 mr-2" />
                                        {isRtl ? 'عائد استثمار مضمون' : 'Guaranteed ROI'}
                                    </div>
                                </div>
                                <a
                                    href={getLink("/contact")}
                                    className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg hover:shadow-cyan-500/25 text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] mb-3"
                                >
                                    {t.requestQuote}
                                </a>
                                <div className="flex justify-center">
                                    <a
                                        href="https://wa.me/96170106083"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white text-sm flex items-center transition-colors"
                                    >
                                        <MessageCircle className="w-4 h-4 mr-2" />
                                        {isRtl ? 'تحدث معنا عبر واتساب' : 'Chat via WhatsApp'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Neuro-Marketing Sections */}
                    <div className="space-y-24 mb-24">
                        {/* Crisis Section */}
                        {service.crisisSolved && (
                            <section className="glass-card-ai p-8 md:p-12 relative overflow-hidden group border-red-500/20">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px] -mr-32 -mt-32" />
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                        <Shield className="w-8 h-8 text-red-500" />
                                        {t.crisisTitle}
                                    </h2>
                                    <p className="text-xl text-gray-300 leading-relaxed italic border-l-4 border-red-500 pl-6">
                                        "{service.crisisSolved}"
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* Workflow section */}
                        {service.workflow && service.workflow.length > 0 && (
                            <section>
                                <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.workflowTitle}</h2>
                                <div className="grid md:grid-cols-4 gap-6">
                                    {service.workflow.map((step, i) => (
                                        <div key={i} className="relative p-6 glass-card-ai hover:border-cyan-500/30 transition-all group">
                                            <div className="text-5xl font-black text-white/10 absolute top-4 right-4 group-hover:text-blue-500/20 transition-colors">0{i + 1}</div>
                                            <div className="relative z-10">
                                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white font-bold shadow-lg shadow-cyan-500/25">
                                                    {i + 1}
                                                </div>
                                                <p className="font-bold text-white leading-tight">{step}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Inaction Penalty */}
                        {service.costOfInaction && (
                            <section className="glass-card-ai p-8 md:p-12 text-center max-w-4xl mx-auto group">
                                <h2 className="text-2xl font-bold text-gray-500 mb-6 uppercase tracking-widest">{t.inactionTitle}</h2>
                                <p className="text-2xl md:text-3xl font-medium text-white leading-tight mb-8">
                                    {service.costOfInaction}
                                </p>
                                <a
                                    href={getLink("/contact")}
                                    className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors cursor-pointer"
                                >
                                    {t.ctaHook} {isRtl ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />}
                                </a>
                            </section>
                        )}
                    </div>

                    {/* Features & Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        {/* Features */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <Zap className="w-6 h-6 mr-3 text-yellow-500" />
                                {t.features}
                            </h2>
                            <div className="space-y-4">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                        <div className="mr-4 mt-1 bg-blue-500/20 p-2 rounded-lg h-fit">
                                            <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-200">{feature}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <Star className="w-6 h-6 mr-3 text-purple-500" />
                                {t.benefits}
                            </h2>
                            <div className="space-y-4">
                                {service.benefits.map((benefit, i) => (
                                    <div key={i} className="flex p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                        <div className="mr-4 mt-1 bg-green-500/20 p-2 rounded-lg h-fit">
                                            <Star className="w-5 h-5 text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-200">{benefit}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Technical Specs */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold text-white mb-8">{t.techSpecs}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="text-gray-400 text-sm mb-1">Architecture</div>
                                <div className="text-white font-medium">Serverless / Edge</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="text-gray-400 text-sm mb-1">Database</div>
                                <div className="text-white font-medium">PostgreSQL / Redis</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="text-gray-400 text-sm mb-1">Security</div>
                                <div className="text-white font-medium">AES-256 Encryption</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="text-gray-400 text-sm mb-1">API Access</div>
                                <div className="text-white font-medium">REST / GraphQL</div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-10 text-center">{t.faq}</h2>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {service.faq.map((faq, i) => (
                                <details key={i} className="group bg-white/5 rounded-xl transition-all duration-300 open:bg-white/10 open:ring-1 open:ring-blue-500/50">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                        <span className="font-semibold text-white">{faq.question}</span>
                                        <span className="transition-transform group-open:rotate-180 text-gray-400">
                                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
