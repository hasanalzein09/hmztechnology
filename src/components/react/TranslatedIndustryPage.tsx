import type { Solution } from '../../lib/types'
import { getTranslatedSolution } from '../../lib/translations'
import { motion } from 'framer-motion'
import {
    CheckCircle2, ArrowRight, ArrowLeft, Clock,
    ShieldCheck, Zap, AlertTriangle, TrendingUp,
    MessageCircle, Instagram, Send, Code2, Search, Cpu,
    LayoutDashboard, BarChart3, Globe, Lock
} from 'lucide-react'
import { useState, useEffect } from 'react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

// ============= TRANSLATIONS =============
const translations: Record<Language, {
    backToSolutions: string
    solutions: string
    overview: string
    whyThisIndustry: string
    impact: string
    caseStudies: string
    viewDetails: string
    roi: string
    implementation: string
    verified: string
    trustedBy: string
    bookDemo: string
    heroSubtitle: string
    urgencyTitle: string
    urgencyText: string
    transformTitle: string
    compareBefore: string
    compareAfter: string
    beforePoints: string[]
    afterPoints: string[]
    ctaUrgent: string
}> = {
    en: {
        backToSolutions: 'Back to Solutions',
        solutions: 'Solutions',
        overview: 'Overview',
        whyThisIndustry: 'Why Industry-Specific?',
        impact: 'Business Impact',
        caseStudies: 'Success Stories',
        viewDetails: 'View Solution',
        roi: 'Avg. ROI',
        implementation: 'Implementation',
        verified: 'Enterprise Verified',
        trustedBy: 'Used by leading companies in',
        bookDemo: 'Book Strategy Call',
        heroSubtitle: 'specialized automation tools designed to dominate the market.',
        urgencyTitle: 'Why Your Industry Can\'t Wait',
        urgencyText: 'While you evaluate options, competitors with AI automation are capturing your customers. Every day without these tools is revenue lost forever.',
        transformTitle: 'Transform Your Business',
        compareBefore: 'Without AI',
        compareAfter: 'With HMZ AI',
        beforePoints: ['Slow response times (hours)', 'Manual processes', 'Lost leads', 'High operational costs'],
        afterPoints: ['3-second responses 24/7', 'Full automation', '95% lead capture', '60% cost reduction'],
        ctaUrgent: 'Secure Your Competitive Edge'
    },
    ar: {
        backToSolutions: 'العودة للحلول',
        solutions: 'حلول',
        overview: 'نظرة عامة',
        whyThisIndustry: 'لماذا مخصص للصناعة؟',
        impact: 'تأثير الأعمال',
        caseStudies: 'قصص نجاح',
        viewDetails: 'عرض الحل',
        roi: 'عائد الاستثمار',
        implementation: 'التنفيذ',
        verified: 'مؤسسية موثقة',
        trustedBy: 'مستخدم من قبل الشركات الرائدة في',
        bookDemo: 'حجز مكالمة استراتيجية',
        heroSubtitle: 'أداة أتمتة متخصصة مصممة للسيطرة على السوق.',
        urgencyTitle: 'لماذا لا يمكن لقطاعك الانتظار',
        urgencyText: 'بينما تقيّم الخيارات، منافسوك الذين يملكون أتمتة AI يستحوذون على عملائك. كل يوم بدون هذه الأدوات هو إيراد ضائع للأبد.',
        transformTitle: 'حوّل عملك',
        compareBefore: 'بدون AI',
        compareAfter: 'مع HMZ AI',
        beforePoints: ['أوقات استجابة بطيئة (ساعات)', 'عمليات يدوية', 'فقدان العملاء المحتملين', 'تكاليف تشغيل عالية'],
        afterPoints: ['استجابة 3 ثوانٍ 24/7', 'أتمتة كاملة', 'التقاط 95% من العملاء', 'تخفيض التكاليف 60%'],
        ctaUrgent: 'احمِ ميزتك التنافسية'
    },
    de: {
        backToSolutions: 'Zurück zu Lösungen',
        solutions: 'Lösungen',
        overview: 'Überblick',
        whyThisIndustry: 'Warum branchenspezifisch?',
        impact: 'Geschäftsauswirkung',
        caseStudies: 'Erfolgsgeschichten',
        viewDetails: 'Lösung ansehen',
        roi: 'Durchschn. ROI',
        implementation: 'Implementierung',
        verified: 'Unternehmensgeprüft',
        trustedBy: 'Genutzt von führenden Unternehmen in',
        bookDemo: 'Strategiegespräch buchen',
        heroSubtitle: 'spezialisierte Automatisierungstools, um den Markt zu dominieren.',
        urgencyTitle: 'Warum Ihre Branche nicht warten kann',
        urgencyText: 'Während Sie Optionen bewerten, erobern Wettbewerber mit KI-Automatisierung Ihre Kunden. Jeder Tag ohne diese Tools ist verlorener Umsatz.',
        transformTitle: 'Transformieren Sie Ihr Geschäft',
        compareBefore: 'Ohne KI',
        compareAfter: 'Mit HMZ KI',
        beforePoints: ['Langsame Antwortzeiten (Stunden)', 'Manuelle Prozesse', 'Verlorene Leads', 'Hohe Betriebskosten'],
        afterPoints: ['3-Sekunden-Antworten 24/7', 'Volle Automatisierung', '95% Lead-Erfassung', '60% Kostenreduzierung'],
        ctaUrgent: 'Sichern Sie Ihren Wettbewerbsvorteil'
    },
    fr: {
        backToSolutions: 'Retour aux solutions',
        solutions: 'Solutions',
        overview: 'Aperçu',
        whyThisIndustry: 'Pourquoi spécifique?',
        impact: 'Impact commercial',
        caseStudies: 'Études de cas',
        viewDetails: 'Voir la solution',
        roi: 'ROI Moyen',
        implementation: 'Implémentation',
        verified: 'Vérifié Entreprise',
        trustedBy: 'Utilisé par les leaders en',
        bookDemo: 'Réserver un appel',
        heroSubtitle: 'outils d\'automatisation spécialisés conçus pour dominer le marché.',
        urgencyTitle: 'Pourquoi votre industrie ne peut pas attendre',
        urgencyText: 'Pendant que vous évaluez les options, les concurrents avec l\'automatisation IA capturent vos clients. Chaque jour sans ces outils est du revenu perdu.',
        transformTitle: 'Transformez votre entreprise',
        compareBefore: 'Sans IA',
        compareAfter: 'Avec HMZ IA',
        beforePoints: ['Temps de réponse lents (heures)', 'Processus manuels', 'Leads perdus', 'Coûts opérationnels élevés'],
        afterPoints: ['Réponses en 3 secondes 24/7', 'Automatisation complète', 'Capture de 95% des leads', 'Réduction des coûts de 60%'],
        ctaUrgent: 'Sécurisez votre avantage concurrentiel'
    },
    it: {
        backToSolutions: 'Torna alle soluzioni',
        solutions: 'Soluzioni',
        overview: 'Panoramica',
        whyThisIndustry: 'Perché specifico?',
        impact: 'Impatto aziendale',
        caseStudies: 'Casi di successo',
        viewDetails: 'Vedi soluzione',
        roi: 'ROI Medio',
        implementation: 'Implementazione',
        verified: 'Verificato Enterprise',
        trustedBy: 'Utilizzato dai leader in',
        bookDemo: 'Prenota chiamata',
        heroSubtitle: 'strumenti di automazione specializzati progettati per dominare il mercato.',
        urgencyTitle: 'Perché il tuo settore non può aspettare',
        urgencyText: 'Mentre valuti le opzioni, i concorrenti con automazione IA stanno catturando i tuoi clienti. Ogni giorno senza questi strumenti è fatturato perso.',
        transformTitle: 'Trasforma la tua azienda',
        compareBefore: 'Senza IA',
        compareAfter: 'Con HMZ IA',
        beforePoints: ['Tempi di risposta lenti (ore)', 'Processi manuali', 'Lead persi', 'Alti costi operativi'],
        afterPoints: ['Risposte in 3 secondi 24/7', 'Automazione completa', 'Cattura del 95% dei lead', 'Riduzione costi del 60%'],
        ctaUrgent: 'Assicura il tuo vantaggio competitivo'
    },
    hi: {
        backToSolutions: 'समाधान पर वापस जाएं',
        solutions: 'समाधान',
        overview: 'अवलोकन',
        whyThisIndustry: 'उद्योग-विशिष्ट क्यों?',
        impact: 'व्यापार प्रभाव',
        caseStudies: 'सफलता की कहानियां',
        viewDetails: 'समाधान देखें',
        roi: 'औसत ROI',
        implementation: 'कार्यान्वयन',
        verified: 'एंटरप्राइज सत्यापित',
        trustedBy: 'अग्रणी कंपनियों द्वारा उपयोग किया जाता है',
        bookDemo: 'रणनीति कॉल बुक करें',
        heroSubtitle: 'बाजार पर हावी होने के लिए डिज़ाइन किए गए विशेष स्वचालन उपकरण।',
        urgencyTitle: 'आपका उद्योग इंतजार क्यों नहीं कर सकता',
        urgencyText: 'जब आप विकल्पों का मूल्यांकन कर रहे हैं, AI ऑटोमेशन वाले प्रतिस्पर्धी आपके ग्राहकों को पकड़ रहे हैं। इन उपकरणों के बिना हर दिन राजस्व खोया हुआ है।',
        transformTitle: 'अपने व्यवसाय को बदलें',
        compareBefore: 'AI के बिना',
        compareAfter: 'HMZ AI के साथ',
        beforePoints: ['धीमी प्रतिक्रिया (घंटे)', 'मैनुअल प्रक्रियाएं', 'खोए हुए लीड्स', 'उच्च संचालन लागत'],
        afterPoints: ['24/7 3-सेकंड जवाब', 'पूर्ण ऑटोमेशन', '95% लीड कैप्चर', '60% लागत कटौती'],
        ctaUrgent: 'अपना प्रतिस्पर्धी लाभ सुरक्षित करें'
    },
    ms: {
        backToSolutions: 'Kembali ke Penyelesaian',
        solutions: 'Penyelesaian',
        overview: 'Gambaran Keseluruhan',
        whyThisIndustry: 'Kenapa Khusus Industri?',
        impact: 'Impak Perniagaan',
        caseStudies: 'Kisah Kejayaan',
        viewDetails: 'Lihat Penyelesaian',
        roi: 'ROI Purata',
        implementation: 'Pelaksanaan',
        verified: 'Disahkan Enterprise',
        trustedBy: 'Digunakan oleh syarikat terkemuka dalam',
        bookDemo: 'Tempah Panggilan Strategi',
        heroSubtitle: 'alat automasi khusus direka untuk menguasai pasaran.',
        urgencyTitle: 'Mengapa Industri Anda Tidak Boleh Tunggu',
        urgencyText: 'Semasa anda menilai pilihan, pesaing dengan automasi AI sedang menangkap pelanggan anda. Setiap hari tanpa alat ini adalah hasil yang hilang selama-lamanya.',
        transformTitle: 'Transformasi Perniagaan Anda',
        compareBefore: 'Tanpa AI',
        compareAfter: 'Dengan HMZ AI',
        beforePoints: ['Masa tindak balas lambat (jam)', 'Proses manual', 'Lead hilang', 'Kos operasi tinggi'],
        afterPoints: ['Respons 3 saat 24/7', 'Automasi penuh', 'Tangkapan 95% lead', 'Pengurangan kos 60%'],
        ctaUrgent: 'Amankan Kelebihan Daya Saing Anda'
    }
}

const industryNames: Record<Language, Record<string, string>> = {
    en: { 'ecommerce': 'E-commerce', 'healthcare': 'Healthcare', 'real-estate': 'Real Estate', 'restaurants': 'Restaurants', 'education': 'Education', 'automotive': 'Automotive', 'legal': 'Legal Services', 'finance': 'Finance', 'fitness': 'Fitness & Gyms', 'beauty': 'Beauty & Spa', 'cleaning': 'Cleaning Services', 'logistics': 'Logistics', 'travel': 'Travel & Tourism' },
    ar: { 'ecommerce': 'التجارة الإلكترونية', 'healthcare': 'الرعاية الصحية', 'real-estate': 'العقارات', 'restaurants': 'المطاعم', 'education': 'التعليم', 'automotive': 'السيارات', 'legal': 'الخدمات القانونية', 'finance': 'المالية والبنوك', 'fitness': 'اللياقة البدنية', 'beauty': 'الجمال والسبا', 'cleaning': 'خدمات التنظيف', 'logistics': 'اللوجستيات', 'travel': 'السياحة والسفر' },
    de: { 'ecommerce': 'E-Commerce', 'healthcare': 'Gesundheitswesen', 'real-estate': 'Immobilien', 'restaurants': 'Restaurants', 'education': 'Bildung', 'automotive': 'Automobil', 'legal': 'Rechtsdienstleistungen', 'finance': 'Finanzen', 'fitness': 'Fitness', 'beauty': 'Schönheit & Spa', 'cleaning': 'Reinigung', 'logistics': 'Logistik', 'travel': 'Reisen' },
    fr: { 'ecommerce': 'E-commerce', 'healthcare': 'Santé', 'real-estate': 'Immobilier', 'restaurants': 'Restaurants', 'education': 'Éducation', 'automotive': 'Automobile', 'legal': 'Services Juridiques', 'finance': 'Finance', 'fitness': 'Fitness', 'beauty': 'Beauté & Spa', 'cleaning': 'Nettoyage', 'logistics': 'Logistique', 'travel': 'Voyages' },
    it: { 'ecommerce': 'E-commerce', 'healthcare': 'Sanità', 'real-estate': 'Immobiliare', 'restaurants': 'Ristoranti', 'education': 'Istruzione', 'automotive': 'Automotive', 'legal': 'Servizi Legali', 'finance': 'Finanza', 'fitness': 'Fitness', 'beauty': 'Bellezza & Spa', 'cleaning': 'Pulizie', 'logistics': 'Logistica', 'travel': 'Viaggi' },
    hi: { 'ecommerce': 'ई-कॉमर्स', 'healthcare': 'स्वास्थ्य सेवा', 'real-estate': 'रियल एस्टेट', 'restaurants': 'रेस्टोरेंट', 'education': 'शिक्षा', 'automotive': 'ऑटोमोटिव', 'legal': 'कानूनी सेवाएं', 'finance': 'वित्त', 'fitness': 'फिटनेस', 'beauty': 'सौंदर्य और स्पा', 'cleaning': 'सफाई', 'logistics': 'लॉजिस्टिक्स', 'travel': 'यात्रा' },
    ms: { 'ecommerce': 'E-dagang', 'healthcare': 'Penjagaan Kesihatan', 'real-estate': 'Hartanah', 'restaurants': 'Restoran', 'education': 'Pendidikan', 'automotive': 'Automotif', 'legal': 'Perkhidmatan Undang-undang', 'finance': 'Kewangan', 'fitness': 'Kecergasan', 'beauty': 'Kecantikan', 'cleaning': 'Pembersihan', 'logistics': 'Logistik', 'travel': 'Pelancongan' }
}

const getIndustryName = (slug: string, lang: Language): string => industryNames[lang]?.[slug] || industryNames.en[slug] || slug

interface TranslatedIndustryPageProps {
    industrySlug: string
    solutions: Solution[]
    lang: Language
}

// Service type icons
const serviceIcons: Record<string, any> = { 'whatsapp': MessageCircle, 'instagram': Instagram, 'messenger': Send, 'nextjs': Code2, 'seo': Search, 'automation': Cpu }

export default function TranslatedIndustryPage({ industrySlug, solutions, lang }: TranslatedIndustryPageProps) {
    const t = translations[lang] || translations.en
    const isRtl = lang === 'ar'
    const industryName = getIndustryName(industrySlug, lang)

    const [activeSection, setActiveSection] = useState('overview')

    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`

    const getSolutionTitle = (solution: Solution) => {
        const translated = getTranslatedSolution(solution.id, lang)
        return translated?.title || (lang === 'ar' && solution.arabicTitle ? solution.arabicTitle : solution.title)
    }

    const getSolutionDescription = (solution: Solution) => {
        const translated = getTranslatedSolution(solution.id, lang)
        return translated?.description || (lang === 'ar' && solution.arabicDescription ? solution.arabicDescription : solution.shortDescription)
    }

    return (
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-[#030014] font-sans selection:bg-cyan-500/30">

            {/* IMMERSIVE HEADER */}
            <header className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden border-b border-white/5">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[#030014] z-0" />
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <a href={getLink("/solutions")} className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group">
                            <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''} group-hover:-translate-x-1 transition-transform`} />
                            {t.backToSolutions}
                        </a>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                                <LayoutDashboard className="w-7 h-7 text-white" />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                {industryName}
                                </span>
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
                            <span className="text-white font-semibold">{solutions.length}</span> {t.heroSubtitle}
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* STICKY NAV (Desktop) */}
            <div className="sticky top-0 z-40 bg-[#030014]/80 backdrop-blur-xl border-b border-white/5 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8">
                    {['overview', 'impact', 'solutions'].map((section) => (
                        <button
                            key={section}
                            onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
                            className={`text-sm font-medium transition-colors hover:text-white ${activeSection === section ? 'text-cyan-400' : 'text-slate-500'}`}
                        >
                            {t[section as keyof typeof t] || section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                    <div className="ml-auto">
                        <a href={getLink("/contact")} className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                            {t.bookDemo}
                        </a>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-20">

                {/* IMPACT METRICS (Overview) */}
                <section id="overview" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                    {[
                        { icon: TrendingUp, label: lang === 'ar' ? 'نتائج مثبتة' : 'Proven Results', value: "500+", color: "text-cyan-400", gradient: "from-cyan-500 to-blue-600" },
                        { icon: Clock, label: t.implementation, value: lang === 'ar' ? '٣-٧ أيام' : '3-7 Days', color: "text-purple-400", gradient: "from-purple-500 to-pink-600" },
                        { icon: ShieldCheck, label: lang === 'ar' ? 'دعم مستمر' : '24/7 Support', value: "24/7", color: "text-emerald-400", gradient: "from-emerald-500 to-teal-600" }
                    ].map((stat, i) => (
                        <div key={i} className="glass-card-ai p-8 flex items-center gap-6">
                            <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                                <div className="text-sm text-slate-500 uppercase tracking-tighter">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* URGENCY SECTION - Why Can't Wait */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-32 bg-gradient-to-br from-amber-500/5 to-red-500/10 border border-amber-500/20 rounded-3xl p-8 md:p-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-amber-500/20 rounded-xl">
                            <AlertTriangle className="w-6 h-6 text-amber-400" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            {t.urgencyTitle}
                        </h2>
                    </div>
                    <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
                        {t.urgencyText}
                    </p>
                </motion.section>

                {/* BEFORE vs AFTER COMPARISON */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-32"
                    id="impact"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        {t.transformTitle}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Before */}
                        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
                            <div className="text-red-400 font-bold uppercase text-sm tracking-wider mb-6 flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500" />
                                {t.compareBefore}
                            </div>
                            <ul className="space-y-4">
                                {t.beforePoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-400">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500/50 flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* After */}
                        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
                            <div className="text-emerald-400 font-bold uppercase text-sm tracking-wider mb-6 flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                                {t.compareAfter}
                            </div>
                            <ul className="space-y-4">
                                {t.afterPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <a
                            href={getLink("/contact")}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
                        >
                            {t.ctaUrgent}
                            <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                        </a>
                    </div>
                </motion.section>

                {/* ZIG-ZAG LAYOUT FOR SOLUTIONS */}
                <section id="solutions" className="space-y-32">
                    {solutions.map((solution, idx) => {
                        const isEven = idx % 2 === 0
                        const Icon = serviceIcons[solution.serviceType] || Code2

                        return (
                            <motion.div
                                key={solution.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                            >
                                {/* Text Side */}
                                <div className="flex-1 space-y-8">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${solution.serviceType === 'whatsapp' ? 'bg-green-500/10 text-green-400' :
                                            solution.serviceType === 'instagram' ? 'bg-purple-500/10 text-purple-400' :
                                                'bg-blue-500/10 text-blue-400'
                                            }`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-sm font-semibold tracking-wider text-slate-500 uppercase">
                                            {solution.serviceType} Solution
                                        </span>
                                    </div>

                                    <h2 className="text-4xl font-bold text-white leading-tight">
                                        {getSolutionTitle(solution)}
                                    </h2>

                                    <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-white/10 pl-6">
                                        {getSolutionDescription(solution)}
                                    </p>

                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-slate-300">
                                            <Clock className="w-4 h-4 text-cyan-400" />
                                            {lang === 'ar' ? 'جاهز خلال' : 'Ready in'} <span className="text-white font-bold mx-1">{lang === 'ar' ? '٣ أيام' : '3 Days'}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-sm text-slate-300">
                                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                            {lang === 'ar' ? 'دعم ٢٤/٧' : '24/7 Support'}
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <a
                                            href={getLink(`/solutions/${industrySlug}/${solution.slug}`)}
                                            className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-colors text-lg group"
                                        >
                                            {t.viewDetails}
                                            <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''} group-hover:translate-x-1 transition-transform`} />
                                        </a>
                                    </div>
                                </div>

                                {/* Visual Side - Feature Highlights */}
                                <div className="flex-1 w-full">
                                    <div className="relative w-full bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-white/10 rounded-3xl p-8 overflow-hidden group">
                                        {/* Gradient Orbs */}
                                        <div className={`absolute -top-20 ${isRtl ? '-left-20' : '-right-20'} w-40 h-40 rounded-full blur-[80px] transition-all duration-500 ${
                                            solution.serviceType === 'whatsapp' ? 'bg-green-500/30 group-hover:bg-green-400/40' :
                                            solution.serviceType === 'instagram' ? 'bg-purple-500/30 group-hover:bg-purple-400/40' :
                                            'bg-cyan-500/30 group-hover:bg-cyan-400/40'
                                        }`} />
                                        <div className={`absolute -bottom-20 ${isRtl ? '-right-20' : '-left-20'} w-40 h-40 rounded-full blur-[80px] transition-all duration-500 ${
                                            solution.serviceType === 'whatsapp' ? 'bg-emerald-500/20 group-hover:bg-emerald-400/30' :
                                            solution.serviceType === 'instagram' ? 'bg-pink-500/20 group-hover:bg-pink-400/30' :
                                            'bg-blue-500/20 group-hover:bg-blue-400/30'
                                        }`} />

                                        {/* Header */}
                                        <div className="flex items-center gap-4 mb-8 relative z-10">
                                            <div className={`p-4 rounded-2xl shadow-lg ${
                                                solution.serviceType === 'whatsapp' ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-green-500/25' :
                                                solution.serviceType === 'instagram' ? 'bg-gradient-to-br from-purple-500 to-pink-600 shadow-purple-500/25' :
                                                'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/25'
                                            }`}>
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-lg">{solution.serviceType.toUpperCase()}</div>
                                                <div className="text-slate-400 text-sm">{lang === 'ar' ? 'حل متكامل' : 'Complete Solution'}</div>
                                            </div>
                                        </div>

                                        {/* Features Grid */}
                                        <div className="grid grid-cols-2 gap-4 relative z-10">
                                            {(lang === 'ar' && solution.arabicFeatures ? solution.arabicFeatures : solution.features).slice(0, 4).map((feature, fi) => (
                                                <div key={fi} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all">
                                                    <div className={`w-8 h-8 rounded-lg mb-3 flex items-center justify-center ${
                                                        solution.serviceType === 'whatsapp' ? 'bg-green-500/20 text-green-400' :
                                                        solution.serviceType === 'instagram' ? 'bg-purple-500/20 text-purple-400' :
                                                        'bg-cyan-500/20 text-cyan-400'
                                                    }`}>
                                                        <Zap className="w-4 h-4" />
                                                    </div>
                                                    <div className="text-white text-sm font-medium leading-tight">{feature}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom Stats */}
                                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10 relative z-10">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                                <span className="text-emerald-400 text-sm font-medium">{lang === 'ar' ? 'متوفر الآن' : 'Available Now'}</span>
                                            </div>
                                            <div className="text-slate-400 text-sm">
                                                {lang === 'ar' ? solution.arabicDeliveryTime || solution.deliveryTime : solution.deliveryTime}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </section>

                {/* TRUST BADGE (Bottom) */}
                <section className="mt-32 pt-20 border-t border-white/5 text-center">
                    <p className="text-slate-500 mb-8 uppercase tracking-widest text-sm">{t.trustedBy} {industryName}</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-40">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="h-8 w-32 bg-white/20 rounded flex items-center justify-center text-xs font-mono">CLIENT LOGO</div>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    )
}
