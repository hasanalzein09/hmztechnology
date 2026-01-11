import type { Solution } from '../../lib/types'
import { getTranslatedSolution } from '../../lib/translations'
import { getExtendedBenefits } from '../../lib/contentEngine'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ArrowLeft, CheckCircle2, Star, Shield, Clock, Zap,
    MessageCircle, ArrowRight, ChevronDown, Check,
    Timer, Sparkles, Building2, Users, Layout, Smartphone,
    Globe, Server, Lock, Play, BarChart3, TrendingUp
} from 'lucide-react'
import { useState, useEffect } from 'react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

// ============= TRANSLATIONS =============
const translations: Record<Language, {
    backToResults: string
    getFreeQuote: string
    features: string
    benefits: string
    faq: string
    whyChooseUs: string
    bookConsultation: string
    customQuote: string
    limitedTime: string
    moneyBack: string
    lifetimeSupport: string
    viewDemo: string
    roiGuarantee: string
    trustedBy: string
    needHelp: string
    chatWithUs: string
    techSpecs: string
    implementation: string
    pricing: string
    contactSales: string
    requestQuote: string
    availability: string
    spotLeft: string
    checking: string
    verified: string
    launchIn: string
    integratedWith: string
}> = {
    en: {
        backToResults: 'Back',
        getFreeQuote: 'Get Quote',
        features: 'Core Capabilities',
        benefits: 'Business Value',
        faq: 'FAQs',
        whyChooseUs: 'Why HMZ?',
        bookConsultation: 'Book Strategy Call',
        customQuote: 'Enterprise Plan',
        limitedTime: 'Limited Offer',
        moneyBack: '30-Day Guarantee',
        lifetimeSupport: 'Lifetime Support',
        viewDemo: 'Watch Demo',
        roiGuarantee: 'Results Guaranteed',
        trustedBy: 'Trusted by leaders in',
        needHelp: 'Need guidance?',
        chatWithUs: 'Chat on WhatsApp',
        techSpecs: 'Tech Stack',
        implementation: 'Go Live',
        pricing: 'Investment',
        contactSales: 'Contact Sales',
        requestQuote: 'Start Now',
        availability: 'Capacity',
        spotLeft: '2 spots remaining',
        checking: 'Verifying...',
        verified: 'Enterprise Ready',
        launchIn: 'Launch in 3 Days',
        integratedWith: 'Works with',
        crisisTitle: 'The Crisis We Solve',
        crisisIntro: 'Right now, businesses like yours are losing customers because of slow responses, manual processes, and outdated systems. Every minute of delay costs you money.',
        workflowTitle: 'Your Success Roadmap',
        workflowSteps: ['Day 1-2: Deep Analysis', 'Day 3-5: Custom AI Training', 'Day 6-7: System Integration', 'Day 8: Launch & Optimization'],
        inactionTitle: 'The Cost of Waiting',
        inactionText: 'Every day without automation, your competitors are capturing the leads you\'re losing. The question isn\'t whether you can afford this solution—it\'s whether you can afford not to have it.',
        ctaUrgent: 'Start Your Transformation Today'
    },
    ar: {
        backToResults: 'عودة',
        getFreeQuote: 'احصل على عرض',
        features: 'القدرات الأساسية',
        benefits: 'القيمة التجارية',
        faq: 'الأسئلة الشائعة',
        whyChooseUs: 'لماذا HMZ؟',
        bookConsultation: 'حجز مكالمة',
        customQuote: 'خطة المؤسسات',
        limitedTime: 'عرض محدود',
        moneyBack: 'ضمان 30 يوم',
        lifetimeSupport: 'دعم مدى الحياة',
        viewDemo: 'شاهد الديمو',
        roiGuarantee: 'نتائج مضمونة',
        trustedBy: 'موثوق من قادة',
        needHelp: 'تحتاج توجيه؟',
        chatWithUs: 'واتساب',
        techSpecs: 'التقنيات',
        implementation: 'الإطلاق',
        pricing: 'الاستثمار',
        contactSales: 'تواصل معنا',
        requestQuote: 'ابدأ الآن',
        availability: 'السعة',
        spotLeft: 'مقعدين متبقيين',
        checking: 'جاري التحقق...',
        verified: 'جاهز للمؤسسات',
        launchIn: 'إطلاق في 3 أيام',
        integratedWith: 'يعمل مع',
        crisisTitle: 'الأزمة التي نحلها',
        crisisIntro: 'الآن، شركات مثل شركتك تخسر عملاء بسبب الردود البطيئة والعمليات اليدوية والأنظمة القديمة. كل دقيقة تأخير تكلفك أموالاً.',
        workflowTitle: 'خارطة طريق النجاح',
        workflowSteps: ['اليوم 1-2: تحليل معمق', 'اليوم 3-5: تدريب AI مخصص', 'اليوم 6-7: تكامل الأنظمة', 'اليوم 8: الإطلاق والتحسين'],
        inactionTitle: 'تكلفة الانتظار',
        inactionText: 'كل يوم بدون أتمتة، منافسوك يستحوذون على العملاء الذين تخسرهم. السؤال ليس هل تستطيع تحمل تكلفة هذا الحل—بل هل تستطيع تحمل عدم امتلاكه؟',
        ctaUrgent: 'ابدأ تحولك اليوم'
    },
    de: {
        backToResults: 'Zurück',
        getFreeQuote: 'Angebot',
        features: 'Kernfunktionen',
        benefits: 'Mehrwert',
        faq: 'FAQs',
        whyChooseUs: 'Warum HMZ?',
        bookConsultation: 'Gespräch buchen',
        customQuote: 'Enterprise Plan',
        limitedTime: 'Begrenzt',
        moneyBack: '30 Tage Garantie',
        lifetimeSupport: 'Lebenslanger Support',
        viewDemo: 'Demo ansehen',
        roiGuarantee: '300% ROI Garantie',
        trustedBy: 'Vertraut von Führern in',
        needHelp: 'Hilfe nötig?',
        chatWithUs: 'WhatsApp',
        techSpecs: 'Tech Stack',
        implementation: 'Go Live',
        pricing: 'Investition',
        contactSales: 'Vertrieb',
        requestQuote: 'Jetzt starten',
        availability: 'Kapazität',
        spotLeft: '2 Plätze übrig',
        checking: 'Prüfen...',
        verified: 'Enterprise Ready',
        launchIn: 'Start in 3 Tagen',
        integratedWith: 'Funktioniert mit',
        crisisTitle: 'Die Krise, die wir lösen',
        crisisIntro: 'Gerade jetzt verlieren Unternehmen wie Ihres Kunden durch langsame Antworten, manuelle Prozesse und veraltete Systeme. Jede Minute Verzögerung kostet Sie Geld.',
        workflowTitle: 'Ihr Erfolgs-Fahrplan',
        workflowSteps: ['Tag 1-2: Tiefenanalyse', 'Tag 3-5: KI-Training', 'Tag 6-7: Systemintegration', 'Tag 8: Launch & Optimierung'],
        inactionTitle: 'Die Kosten des Wartens',
        inactionText: 'Jeden Tag ohne Automatisierung erobern Ihre Wettbewerber die Leads, die Sie verlieren. Die Frage ist nicht, ob Sie sich diese Lösung leisten können—sondern ob Sie es sich leisten können, sie nicht zu haben.',
        ctaUrgent: 'Starten Sie Ihre Transformation heute'
    },
    fr: {
        backToResults: 'Retour',
        getFreeQuote: 'Devis',
        features: 'Fonctionnalités',
        benefits: 'Valeur',
        faq: 'FAQs',
        whyChooseUs: 'Pourquoi HMZ?',
        bookConsultation: 'Réserver appel',
        customQuote: 'Plan Entreprise',
        limitedTime: 'Offre limitée',
        moneyBack: 'Garantie 30j',
        lifetimeSupport: 'Support à vie',
        viewDemo: 'Voir démo',
        roiGuarantee: 'Garantie ROI 300%',
        trustedBy: 'Reconnu par',
        needHelp: 'Besoin d\'aide?',
        chatWithUs: 'WhatsApp',
        techSpecs: 'Technologies',
        implementation: 'Lancement',
        pricing: 'Investissement',
        contactSales: 'Ventes',
        requestQuote: 'Commencer',
        availability: 'Capacité',
        spotLeft: '2 places restantes',
        checking: 'Vérification...',
        verified: 'Prêt entreprise',
        launchIn: 'Lancement 3j',
        integratedWith: 'Fonctionne avec',
        crisisTitle: 'La crise que nous résolvons',
        crisisIntro: 'En ce moment, des entreprises comme la vôtre perdent des clients à cause de réponses lentes, de processus manuels et de systèmes obsolètes. Chaque minute de retard vous coûte de l\'argent.',
        workflowTitle: 'Votre feuille de route vers le succès',
        workflowSteps: ['Jour 1-2: Analyse approfondie', 'Jour 3-5: Formation IA', 'Jour 6-7: Intégration système', 'Jour 8: Lancement et optimisation'],
        inactionTitle: 'Le coût de l\'attente',
        inactionText: 'Chaque jour sans automatisation, vos concurrents capturent les leads que vous perdez. La question n\'est pas si vous pouvez vous permettre cette solution—c\'est si vous pouvez vous permettre de ne pas l\'avoir.',
        ctaUrgent: 'Commencez votre transformation aujourd\'hui'
    },
    it: {
        backToResults: 'Indietro',
        getFreeQuote: 'Preventivo',
        features: 'Funzionalità',
        benefits: 'Valore',
        faq: 'FAQ',
        whyChooseUs: 'Perché HMZ?',
        bookConsultation: 'Prenota call',
        customQuote: 'Piano Enterprise',
        limitedTime: 'Offerta limitata',
        moneyBack: 'Garanzia 30gg',
        lifetimeSupport: 'Supporto a vita',
        viewDemo: 'Vedi demo',
        roiGuarantee: 'Garanzia ROI 300%',
        trustedBy: 'Scelto da',
        needHelp: 'Serve aiuto?',
        chatWithUs: 'WhatsApp',
        techSpecs: 'Tecnologie',
        implementation: 'Lancio',
        pricing: 'Investimento',
        contactSales: 'Vendite',
        requestQuote: 'Inizia ora',
        availability: 'Capacità',
        spotLeft: '2 posti rimasti',
        checking: 'Verifica...',
        verified: 'Enterprise Ready',
        launchIn: 'Lancio in 3gg',
        integratedWith: 'Funziona con',
        crisisTitle: 'La crisi che risolviamo',
        crisisIntro: 'In questo momento, aziende come la tua stanno perdendo clienti a causa di risposte lente, processi manuali e sistemi obsoleti. Ogni minuto di ritardo ti costa denaro.',
        workflowTitle: 'La tua roadmap verso il successo',
        workflowSteps: ['Giorno 1-2: Analisi approfondita', 'Giorno 3-5: Training IA', 'Giorno 6-7: Integrazione sistemi', 'Giorno 8: Lancio e ottimizzazione'],
        inactionTitle: 'Il costo dell\'attesa',
        inactionText: 'Ogni giorno senza automazione, i tuoi concorrenti catturano i lead che stai perdendo. La domanda non è se puoi permetterti questa soluzione—è se puoi permetterti di non averla.',
        ctaUrgent: 'Inizia la tua trasformazione oggi'
    },
    hi: {
        backToResults: 'वापस',
        getFreeQuote: 'कोट प्राप्त करें',
        features: 'मुख्य क्षमताएं',
        benefits: 'व्यापार मूल्य',
        faq: 'अक्सर पूछे जाने वाले प्रश्न',
        whyChooseUs: 'HMZ क्यों?',
        bookConsultation: 'कॉल बुक करें',
        customQuote: 'एंटरप्राइज योजना',
        limitedTime: 'सीमित ऑफर',
        moneyBack: '30-दिन गारंटी',
        lifetimeSupport: 'लाइफटाइम सपोर्ट',
        viewDemo: 'डेमो देखें',
        roiGuarantee: '300% ROI गारंटी',
        trustedBy: 'नेताओं द्वारा विश्वसनीय',
        needHelp: 'मार्गदर्शन चाहिए?',
        chatWithUs: 'WhatsApp',
        techSpecs: 'टेक स्टैक',
        implementation: 'लॉन्च',
        pricing: 'निवेश',
        contactSales: 'बिक्री',
        requestQuote: 'अभी शुरू करें',
        availability: 'क्षमता',
        spotLeft: '2 स्थान शेष',
        checking: 'जांच हो रही है...',
        verified: 'एंटरप्राइज तैयार',
        launchIn: '3 दिनों में लॉन्च',
        integratedWith: 'के साथ काम करता है',
        crisisTitle: 'हम जो संकट हल करते हैं',
        crisisIntro: 'अभी, आपकी जैसी कंपनियां धीमी प्रतिक्रियाओं, मैनुअल प्रक्रियाओं और पुरानी प्रणालियों के कारण ग्राहक खो रही हैं। देरी का हर मिनट आपको पैसे खर्च करता है।',
        workflowTitle: 'आपकी सफलता का रोडमैप',
        workflowSteps: ['दिन 1-2: गहन विश्लेषण', 'दिन 3-5: AI प्रशिक्षण', 'दिन 6-7: सिस्टम एकीकरण', 'दिन 8: लॉन्च और अनुकूलन'],
        inactionTitle: 'प्रतीक्षा की कीमत',
        inactionText: 'ऑटोमेशन के बिना हर दिन, आपके प्रतिस्पर्धी उन लीड्स को पकड़ रहे हैं जिन्हें आप खो रहे हैं। सवाल यह नहीं है कि आप इस समाधान को वहन कर सकते हैं—यह है कि क्या आप इसके बिना रह सकते हैं।',
        ctaUrgent: 'आज अपना परिवर्तन शुरू करें'
    },
    ms: {
        backToResults: 'Kembali',
        getFreeQuote: 'Dapatkan Sebut Harga',
        features: 'Keupayaan Teras',
        benefits: 'Nilai Bisnes',
        faq: 'Soalan Lazim',
        whyChooseUs: 'Kenapa HMZ?',
        bookConsultation: 'Tempah Panggilan',
        customQuote: 'Pelan Enterprise',
        limitedTime: 'Tawaran Terhad',
        moneyBack: 'Jaminan 30 Hari',
        lifetimeSupport: 'Sokongan Seumur Hidup',
        viewDemo: 'Lihat Demo',
        roiGuarantee: 'Jaminan ROI 300%',
        trustedBy: 'Dipercayai oleh',
        needHelp: 'Perlukan bantuan?',
        chatWithUs: 'WhatsApp',
        techSpecs: 'Tech Stack',
        implementation: 'Pelancaran',
        pricing: 'Pelaburan',
        contactSales: 'Jualan',
        requestQuote: 'Mula Sekarang',
        availability: 'Kapasiti',
        spotLeft: '2 tempat tinggal',
        checking: 'Menyemak...',
        verified: 'Sedia Enterprise',
        launchIn: 'Lancar dlm 3 Hari',
        integratedWith: 'Berfungsi dengan',
        crisisTitle: 'Krisis yang Kami Selesaikan',
        crisisIntro: 'Sekarang, perniagaan seperti anda kehilangan pelanggan kerana respons yang lambat, proses manual dan sistem yang lapuk. Setiap minit kelewatan merugikan anda wang.',
        workflowTitle: 'Peta Jalan Kejayaan Anda',
        workflowSteps: ['Hari 1-2: Analisis Mendalam', 'Hari 3-5: Latihan AI', 'Hari 6-7: Integrasi Sistem', 'Hari 8: Pelancaran & Pengoptimuman'],
        inactionTitle: 'Kos Menunggu',
        inactionText: 'Setiap hari tanpa automasi, pesaing anda menangkap lead yang anda hilangkan. Persoalannya bukan sama ada anda mampu penyelesaian ini—tetapi sama ada anda mampu tidak memilikinya.',
        ctaUrgent: 'Mulakan Transformasi Anda Hari Ini'
    }
}

interface TranslatedSolutionDetailProps {
    solution: Solution
    lang: Language
    industrySlug: string
}

export default function TranslatedSolutionDetail({ solution, lang, industrySlug }: TranslatedSolutionDetailProps) {
    const t = translations[lang] || translations.en
    const isRtl = lang === 'ar'

    // Get translated content
    const translated = getTranslatedSolution(solution.id, lang)
    const title = translated?.title || (lang === 'ar' && solution.arabicTitle ? solution.arabicTitle : solution.title)
    const description = translated?.description || (lang === 'ar' && solution.arabicDescription ? solution.arabicDescription : solution.description)
    const features = translated?.features || (lang === 'ar' && solution.arabicFeatures ? solution.arabicFeatures : solution.features)
    const baseBenefits = translated?.benefits || (lang === 'ar' && solution.arabicBenefits ? solution.arabicBenefits : solution.benefits)
    const faqs = translated?.faqs || (lang === 'ar' && solution.arabicFaqs ? solution.arabicFaqs : solution.faqs)
    
    // Extend benefits to double the count (12 benefits)
    const benefits = getExtendedBenefits(baseBenefits, industrySlug, lang === 'ar' ? 'ar' : 'en', 12)

    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`

    // Fake availability check
    const [isChecking, setIsChecking] = useState(true)
    setTimeout(() => setIsChecking(false), 2000)

    const [activeTab, setActiveTab] = useState<'features' | 'tech'>('features')

    return (
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30">

            {/* BACKGROUND GRADIENTS */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            {/* NAV BAR */}
            <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <a
                        href={getLink(`/solutions/${industrySlug}`)}
                        className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className={`w-4 h-4 ${isRtl ? 'ml-2 rotate-180' : 'mr-2'} group-hover:-translate-x-1 transition-transform`} />
                        {t.backToResults}
                    </a>
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
                        <a href="#features" className="hover:text-white transition-colors">{t.features}</a>
                        <a href="#benefits" className="hover:text-white transition-colors">{t.benefits}</a>
                        <a href="#faq" className="hover:text-white transition-colors">{t.faq}</a>
                    </div>
                    <a href={getLink("/contact")} className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors">
                        {t.bookConsultation}
                    </a>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 pt-16 pb-32 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* LEFT COLUMN: Main Content */}
                    <div className="lg:col-span-8 space-y-20">

                        {/* HERO */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-md flex items-center gap-2">
                                    <Shield className="w-3 h-3" /> {t.verified}
                                </span>
                                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-md flex items-center gap-2">
                                    <Clock className="w-3 h-3" /> {t.launchIn}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                                {title}
                            </h1>

                            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-2 text-slate-300">
                                    <div className="p-2 bg-white/5 rounded-lg">
                                        <Smartphone className="w-5 h-5" />
                                    </div>
                                    <div className="text-sm">
                                        <div className="text-slate-500 text-xs uppercase">Platform</div>
                                        <div className="font-medium">Mobile & Web</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-300">
                                    <div className="p-2 bg-white/5 rounded-lg">
                                        <Server className="w-5 h-5" />
                                    </div>
                                    <div className="text-sm">
                                        <div className="text-slate-500 text-xs uppercase">Deployment</div>
                                        <div className="font-medium">Cloud Edge</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-300">
                                    <div className="p-2 bg-white/5 rounded-lg">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <div className="text-sm">
                                        <div className="text-slate-500 text-xs uppercase">Security</div>
                                        <div className="font-medium">Enterprise</div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* CRISIS SECTION - The Problem We Solve */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-red-500/5 to-red-900/10 border border-red-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px] -mr-32 -mt-32" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-red-500/20 rounded-xl">
                                        <Shield className="w-6 h-6 text-red-400" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                                        {t.crisisTitle}
                                    </h2>
                                </div>
                                <p className="text-lg md:text-xl text-slate-300 leading-relaxed border-l-4 border-red-500/50 pl-6 italic">
                                    "{t.crisisIntro}"
                                </p>
                            </div>
                        </motion.section>

                        {/* WORKFLOW - Success Roadmap */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
                                {t.workflowTitle}
                            </h2>
                            <div className="grid md:grid-cols-4 gap-4 md:gap-6">
                                {t.workflowSteps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 }}
                                        className="relative p-6 bg-slate-900 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group"
                                    >
                                        <div className="text-5xl font-black text-white/5 absolute top-4 right-4 group-hover:text-blue-500/10 transition-colors">
                                            0{i + 1}
                                        </div>
                                        <div className="relative z-10">
                                            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400 font-bold group-hover:bg-blue-500/30 transition-colors">
                                                {i + 1}
                                            </div>
                                            <p className="font-bold text-white leading-tight">{step}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* COST OF INACTION */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-slate-900 border border-white/5 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto group"
                        >
                            <h2 className="text-xl font-bold text-slate-400 mb-6 uppercase tracking-widest">
                                {t.inactionTitle}
                            </h2>
                            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-8">
                                {t.inactionText}
                            </p>
                            <a
                                href={getLink("/contact")}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                            >
                                {t.ctaUrgent}
                                <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                            </a>
                        </motion.section>

                        {/* FEATURES - Premium Bento Grid */}
                        <section id="features">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg shadow-cyan-500/25">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white">{t.features}</h2>
                                    <p className="text-slate-400 text-sm">{lang === 'ar' ? 'كل ما تحتاجه في حل واحد' : 'Everything you need in one solution'}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {features.map((feature, i) => {
                                    const icons = [CheckCircle2, Zap, Star, Shield, Timer, BarChart3, Globe, Lock];
                                    const gradients = [
                                        'from-cyan-500/20 to-blue-500/10 border-cyan-500/20 hover:border-cyan-400/40',
                                        'from-purple-500/20 to-pink-500/10 border-purple-500/20 hover:border-purple-400/40',
                                        'from-emerald-500/20 to-teal-500/10 border-emerald-500/20 hover:border-emerald-400/40',
                                        'from-orange-500/20 to-amber-500/10 border-orange-500/20 hover:border-orange-400/40',
                                        'from-blue-500/20 to-indigo-500/10 border-blue-500/20 hover:border-blue-400/40',
                                        'from-rose-500/20 to-red-500/10 border-rose-500/20 hover:border-rose-400/40',
                                        'from-violet-500/20 to-purple-500/10 border-violet-500/20 hover:border-violet-400/40',
                                        'from-teal-500/20 to-cyan-500/10 border-teal-500/20 hover:border-teal-400/40',
                                    ];
                                    const iconColors = ['text-cyan-400', 'text-purple-400', 'text-emerald-400', 'text-orange-400', 'text-blue-400', 'text-rose-400', 'text-violet-400', 'text-teal-400'];
                                    const Icon = icons[i % icons.length];
                                    const isLarge = i === 0 || i === 3;
                                    
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className={`relative group bg-gradient-to-br ${gradients[i % gradients.length]} border rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${isLarge ? 'md:col-span-2 lg:col-span-1' : ''}`}
                                        >
                                            <div className="absolute inset-0 bg-slate-900/80 rounded-2xl -z-10" />
                                            
                                            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${iconColors[i % iconColors.length]}`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            
                                            <h3 className="text-white font-bold text-lg mb-2 leading-tight">{feature}</h3>
                                            
                                            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                                <span className="text-emerald-400 text-xs font-medium">{lang === 'ar' ? 'مُفعّل' : 'Included'}</span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Tech Stack Mini Section */}
                            <div className="mt-12 grid md:grid-cols-2 gap-4">
                                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-purple-500/20 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-purple-500/10 rounded-lg">
                                            <Globe className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <h3 className="text-white font-bold">{lang === 'ar' ? 'تكامل API' : 'API Integration'}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {['REST API', 'Webhooks', '99.9% Uptime'].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-emerald-500/20 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-emerald-500/10 rounded-lg">
                                            <Lock className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <h3 className="text-white font-bold">{lang === 'ar' ? 'أمان البيانات' : 'Data Security'}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {['GDPR', 'Encrypted', 'Daily Backups'].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* BENEFITS - Impact Cards */}
                        <section id="benefits">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg shadow-emerald-500/25">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white">{t.benefits}</h2>
                                    <p className="text-slate-400 text-sm">{lang === 'ar' ? 'التأثير الحقيقي على عملك' : 'Real impact on your business'}</p>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                                {benefits.map((benefit, i) => {
                                    const icons = [TrendingUp, Zap, Clock, Users, Shield, Star];
                                    const Icon = icons[i % icons.length];
                                    const isHighlight = i === 0;
                                    
                                    return (
                                        <motion.div 
                                            key={i} 
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className={`relative group p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                                                isHighlight 
                                                    ? 'bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border-emerald-500/30 md:col-span-2' 
                                                    : 'bg-slate-900/50 border-white/5 hover:border-emerald-500/20'
                                            }`}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`p-3 rounded-xl flex-shrink-0 ${isHighlight ? 'bg-emerald-500/20' : 'bg-white/5'}`}>
                                                    <Icon className={`w-5 h-5 ${isHighlight ? 'text-emerald-400' : 'text-slate-400 group-hover:text-emerald-400'} transition-colors`} />
                                                </div>
                                                <div className="flex-1">
                                                    <p className={`font-medium leading-relaxed ${isHighlight ? 'text-white text-lg' : 'text-slate-300'}`}>{benefit}</p>
                                                    {isHighlight && (
                                                        <div className="mt-3 flex items-center gap-2">
                                                            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded">{lang === 'ar' ? 'الأكثر تأثيراً' : 'HIGHEST IMPACT'}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* FAQ - Premium Accordion */}
                        <section id="faq" className="pt-12">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg shadow-purple-500/25">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white">{t.faq}</h2>
                                    <p className="text-slate-400 text-sm">{lang === 'ar' ? 'أجوبة على أسئلتك الشائعة' : 'Answers to common questions'}</p>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <details key={i} className="group bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/20 transition-colors">
                                        <summary className="flex items-center justify-between cursor-pointer list-none p-6 text-lg font-medium text-slate-200 hover:text-white transition-colors">
                                            <div className="flex items-center gap-4">
                                                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 text-sm font-bold">
                                                    {i + 1}
                                                </span>
                                                {faq.question}
                                            </div>
                                            <span className="ml-4 flex-shrink-0 p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/10 transition-colors">
                                                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform text-slate-400 group-hover:text-purple-400" />
                                            </span>
                                        </summary>
                                        <div className="px-6 pb-6 pt-2 text-slate-400 leading-relaxed border-t border-white/5 mx-6 mt-2">
                                            {faq.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>

                    </div>


                    {/* RIGHT COLUMN: Sticky Sidebar CTA */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-6">

                            {/* Main CTA Card */}
                            <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16" />

                                <div className="relative z-10">
                                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        {t.availability}: {t.spotLeft}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-1">{t.customQuote}</h3>
                                    <div className="text-slate-400 text-sm mb-6">{t.contactSales}</div>

                                    <a href={getLink("/contact")} className="block w-full bg-white text-black text-center font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors mb-3">
                                        {t.requestQuote}
                                    </a>

                                    <a
                                        href="https://wa.me/96170106083"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-slate-800 text-white text-center font-medium py-3 rounded-lg hover:bg-slate-700 transition-colors border border-white/5 flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        {t.chatWithUs}
                                    </a>
                                </div>
                            </div>

                            {/* Trust Card */}
                            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 space-y-4">
                                <div className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-slate-400 mt-0.5" />
                                    <div>
                                        <div className="text-white font-medium text-sm">{t.moneyBack}</div>
                                        <div className="text-slate-500 text-xs mt-1">Risk-free trial period</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Users className="w-5 h-5 text-slate-400 mt-0.5" />
                                    <div>
                                        <div className="text-white font-medium text-sm">{t.lifetimeSupport}</div>
                                        <div className="text-slate-500 text-xs mt-1">24/7 Priority access</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
