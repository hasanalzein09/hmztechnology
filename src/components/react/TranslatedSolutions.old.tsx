import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getAllIndustries, getSolutionsByIndustry } from '../../lib/solutionsData'
import {
    ShoppingCart, HeartPulse, Building2, UtensilsCrossed,
    GraduationCap, Car, Scale, CircleDollarSign,
    Dumbbell, Sparkles, SprayCan, Truck, Plane,
    Search, X, ArrowRight, ArrowLeft, TrendingUp, CheckCircle2,
    Grid2X2, Menu, Filter, Zap, Globe
} from 'lucide-react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

interface TranslatedSolutionsProps {
    lang: Language
}

// Icon Mapping
const industryIcons: Record<string, any> = {
    'ecommerce': ShoppingCart,
    'healthcare': HeartPulse,
    'real-estate': Building2,
    'restaurants': UtensilsCrossed,
    'education': GraduationCap,
    'automotive': Car,
    'legal': Scale,
    'finance': CircleDollarSign,
    'fitness': Dumbbell,
    'beauty': Sparkles,
    'cleaning': SprayCan,
    'logistics': Truck,
    'travel': Plane,
}

const translations: Record<Language, {
    title: string
    subtitle: string
    searchPlaceholder: string
    filterAll: string
    filterHot: string
    noResults: string
    viewSolutions: string
    solutionsCount: string
    trustedBy: string
    hot: string
    stats: { value: string; label: string }[]
}> = {
    en: {
        title: 'Enterprise-Grade Solutions for Every Industry',
        subtitle: 'Accelerate your digital transformation with over 300+ specialized tools designed for high-growth businesses.',
        searchPlaceholder: 'Search industries...',
        filterAll: 'All Industries',
        filterHot: 'Trending',
        noResults: 'No industries found matching your criteria.',
        viewSolutions: 'View Solutions',
        solutionsCount: 'solutions available',
        trustedBy: 'Trusted by 500+ market leaders',
        hot: 'HOT',
        stats: [
            { value: '300+', label: 'Total Solutions' },
            { value: '3-7d', label: 'Setup Time' },
            { value: '300%', label: 'Avg. ROI' },
        ],
        urgencyBanner: '🔥 Limited: Only 3 Enterprise spots available this month',
        psychologicalHook: 'Your competitors are already automating. Every day you wait is market share lost.',
        ctaText: 'Find Your Industry'
    },
    ar: {
        title: 'حلول مؤسسية لكل الصناعات',
        subtitle: 'سرّع تحولك الرقمي مع أكثر من 300 أداة متخصصة مصممة للشركات عالية النمو.',
        searchPlaceholder: 'ابحث عن الصناعات...',
        filterAll: 'كل الصناعات',
        filterHot: 'رائج',
        noResults: 'لم يتم العثور على نتائج.',
        viewSolutions: 'عرض الحلول',
        solutionsCount: 'حل متاح',
        trustedBy: 'موثوق من 500+ شركة رائدة',
        hot: 'رائج',
        stats: [
            { value: '+300', label: 'إجمالي الحلول' },
            { value: '3-7', label: 'أيام للإعداد' },
            { value: '300%', label: 'عائد استثمار' },
        ],
        urgencyBanner: '🔥 محدود: 3 مقاعد مؤسسية فقط متاحة هذا الشهر',
        psychologicalHook: 'منافسوك يؤتمتون بالفعل. كل يوم تنتظره هو حصة سوق تخسرها.',
        ctaText: 'ابحث عن قطاعك'
    },
    de: {
        title: 'Unternehmenslösungen für jede Branche',
        subtitle: 'Beschleunigen Sie Ihre digitale Transformation mit über 300 spezialisierten Tools für wachstumsstarke Unternehmen.',
        searchPlaceholder: 'Branchen suchen...',
        filterAll: 'Alle Branchen',
        filterHot: 'Beliebt',
        noResults: 'Keine Branchen gefunden.',
        viewSolutions: 'Lösungen anzeigen',
        solutionsCount: 'Lösungen verfügbar',
        trustedBy: 'Vertraut von 500+ Marktführern',
        hot: 'HEISS',
        stats: [
            { value: '300+', label: 'Gesamtlösungen' },
            { value: '3-7T', label: 'Einrichtungszeit' },
            { value: '300%', label: 'Durchschn. ROI' },
        ],
        urgencyBanner: '🔥 Begrenzt: Nur 3 Enterprise-Plätze diesen Monat verfügbar',
        psychologicalHook: 'Ihre Wettbewerber automatisieren bereits. Jeder Tag, den Sie warten, ist verlorener Marktanteil.',
        ctaText: 'Finden Sie Ihre Branche'
    },
    fr: {
        title: 'Solutions d\'entreprise pour chaque industrie',
        subtitle: 'Accélérez votre transformation numérique avec plus de 300 outils spécialisés pour les entreprises à forte croissance.',
        searchPlaceholder: 'Rechercher des industries...',
        filterAll: 'Toutes les industries',
        filterHot: 'Tendance',
        noResults: 'Aucune industrie trouvée.',
        viewSolutions: 'Voir les solutions',
        solutionsCount: 'solutions disponibles',
        trustedBy: 'Approuvé par 500+ leaders du marché',
        hot: 'CHAUD',
        stats: [
            { value: '300+', label: 'Solutions totales' },
            { value: '3-7j', label: 'Temps de config' },
            { value: '300%', label: 'ROI Moyen' },
        ],
        urgencyBanner: '🔥 Limité: Seulement 3 places Enterprise disponibles ce mois',
        psychologicalHook: 'Vos concurrents automatisent déjà. Chaque jour d\'attente est une part de marché perdue.',
        ctaText: 'Trouvez votre industrie'
    },
    it: {
        title: 'Soluzioni Enterprise per ogni settore',
        subtitle: 'Accelera la tua trasformazione digitale con oltre 300 strumenti specializzati per aziende in forte crescita.',
        searchPlaceholder: 'Cerca industrie...',
        filterAll: 'Tutte le industrie',
        filterHot: 'Di tendenza',
        noResults: 'Nessuna industria trovata.',
        viewSolutions: 'Vedi soluzioni',
        solutionsCount: 'soluzioni disponibili',
        trustedBy: 'Scelto da 500+ leader di mercato',
        hot: 'HOT',
        stats: [
            { value: '300+', label: 'Soluzioni totali' },
            { value: '3-7gg', label: 'Configurazione' },
            { value: '300%', label: 'ROI Medio' },
        ],
        urgencyBanner: '🔥 Limitato: Solo 3 posti Enterprise disponibili questo mese',
        psychologicalHook: 'I tuoi concorrenti stanno già automatizzando. Ogni giorno che aspetti è quota di mercato persa.',
        ctaText: 'Trova il tuo settore'
    },
    hi: {
        title: 'हर उद्योग के लिए एंटरप्राइज-ग्रेड समाधान',
        subtitle: 'तेजी से बढ़ती कंपनियों के लिए डिज़ाइन किए गए 300+ विशिष्ट उपकरणों के साथ अपने डिजिटल परिवर्तन में तेजी लाएं।',
        searchPlaceholder: 'उद्योग खोजें...',
        filterAll: 'सभी उद्योग',
        filterHot: 'ट्रेंडिंग',
        noResults: 'कोई उद्योग नहीं मिला।',
        viewSolutions: 'समाधान देखें',
        solutionsCount: 'समाधान उपलब्ध',
        trustedBy: '500+ बाजार नेताओं द्वारा विश्वसनीय',
        hot: 'HOT',
        stats: [
            { value: '300+', label: 'कुल समाधान' },
            { value: '3-7d', label: 'सेटअप समय' },
            { value: '300%', label: 'औसत ROI' },
        ],
        urgencyBanner: '🔥 सीमित: इस महीने केवल 3 एंटरप्राइज स्पॉट उपलब्ध',
        psychologicalHook: 'आपके प्रतिस्पर्धी पहले से ऑटोमेट कर रहे हैं। हर दिन की देरी बाजार हिस्सा खोया है।',
        ctaText: 'अपना उद्योग खोजें'
    },
    ms: {
        title: 'Penyelesaian Gred Enterprise untuk Setiap Industri',
        subtitle: 'Percepat transformasi digital anda dengan lebih 300 alat khusus yang direka untuk perniagaan bertumbuh tinggi.',
        searchPlaceholder: 'Cari industri...',
        filterAll: 'Semua Industri',
        filterHot: 'Popular',
        noResults: 'Tiada industri ditemui.',
        viewSolutions: 'Lihat Penyelesaian',
        solutionsCount: 'penyelesaian tersedia',
        trustedBy: 'Dipercayai oleh 500+ pemimpin pasaran',
        hot: 'PANAS',
        stats: [
            { value: '300+', label: 'Jumlah Penyelesaian' },
            { value: '3-7h', label: 'Masa Persediaan' },
            { value: '300%', label: 'ROI Purata' },
        ],
        urgencyBanner: '🔥 Terhad: Hanya 3 slot Enterprise tersedia bulan ini',
        psychologicalHook: 'Pesaing anda sudah mengautomasi. Setiap hari menunggu adalah bahagian pasaran yang hilang.',
        ctaText: 'Cari Industri Anda'
    }
}

// Industry Names (Reused for consistency)
const industryNames: Record<Language, Record<string, string>> = {
    en: { 'ecommerce': 'E-commerce', 'healthcare': 'Healthcare', 'real-estate': 'Real Estate', 'restaurants': 'Restaurants', 'education': 'Education', 'automotive': 'Automotive', 'legal': 'Legal Services', 'finance': 'Finance', 'fitness': 'Fitness & Gyms', 'beauty': 'Beauty & Spa', 'cleaning': 'Cleaning Services', 'logistics': 'Logistics', 'travel': 'Travel & Tourism' },
    ar: { 'ecommerce': 'التجارة الإلكترونية', 'healthcare': 'الرعاية الصحية', 'real-estate': 'العقارات', 'restaurants': 'المطاعم', 'education': 'التعليم', 'automotive': 'السيارات', 'legal': 'الخدمات القانونية', 'finance': 'المالية والبنوك', 'fitness': 'اللياقة البدنية', 'beauty': 'الجمال والسبا', 'cleaning': 'خدمات التنظيف', 'logistics': 'اللوجستيات', 'travel': 'السياحة والسفر' },
    de: { 'ecommerce': 'E-Commerce', 'healthcare': 'Gesundheitswesen', 'real-estate': 'Immobilien', 'restaurants': 'Restaurants', 'education': 'Bildung', 'automotive': 'Automobil', 'legal': 'Rechtsdienstleistungen', 'finance': 'Finanzen', 'fitness': 'Fitness', 'beauty': 'Schönheit & Spa', 'cleaning': 'Reinigung', 'logistics': 'Logistik', 'travel': 'Reisen' },
    fr: { 'ecommerce': 'E-commerce', 'healthcare': 'Santé', 'real-estate': 'Immobilier', 'restaurants': 'Restaurants', 'education': 'Éducation', 'automotive': 'Automobile', 'legal': 'Services Juridiques', 'finance': 'Finance', 'fitness': 'Fitness', 'beauty': 'Beauté & Spa', 'cleaning': 'Nettoyage', 'logistics': 'Logistique', 'travel': 'Voyages' },
    it: { 'ecommerce': 'E-commerce', 'healthcare': 'Sanità', 'real-estate': 'Immobiliare', 'restaurants': 'Ristoranti', 'education': 'Istruzione', 'automotive': 'Automotive', 'legal': 'Servizi Legali', 'finance': 'Finanza', 'fitness': 'Fitness', 'beauty': 'Bellezza & Spa', 'cleaning': 'Pulizie', 'logistics': 'Logistica', 'travel': 'Viaggi' },
    hi: { 'ecommerce': 'ई-कॉमर्स', 'healthcare': 'स्वास्थ्य सेवा', 'real-estate': 'रियल एस्टेट', 'restaurants': 'रेस्टोरेंट', 'education': 'शिक्षा', 'automotive': 'ऑटोमोटिव', 'legal': 'कानूनी सेवाएं', 'finance': 'वित्त', 'fitness': 'फिटनेस', 'beauty': 'सौंदर्य और स्पा', 'cleaning': 'सफाई', 'logistics': 'लॉजिस्टिक्स', 'travel': 'यात्रा' },
    ms: { 'ecommerce': 'E-dagang', 'healthcare': 'Penjagaan Kesihatan', 'real-estate': 'Hartanah', 'restaurants': 'Restoran', 'education': 'Pendidikan', 'automotive': 'Automotif', 'legal': 'Perkhidmatan Undang-undang', 'finance': 'Kewangan', 'fitness': 'Kecergasan', 'beauty': 'Kecantikan', 'cleaning': 'Pembersihan', 'logistics': 'Logistik', 'travel': 'Pelancongan' }
}

const getIndustryName = (slug: string, lang: Language): string => {
    return industryNames[lang]?.[slug] || industryNames.en[slug] || slug
}

const TranslatedSolutions = ({ lang }: TranslatedSolutionsProps) => {
    const t = translations[lang] || translations.en
    const isRtl = lang === 'ar'
    const industries = getAllIndustries()

    // State
    const [searchQuery, setSearchQuery] = useState('')
    const [activeFilter, setActiveFilter] = useState<'all' | 'hot'>('all')
    const [scrollScrub, setScrollScrub] = useState(0)

    const hotIndustries = ['ecommerce', 'healthcare', 'restaurants', 'real-estate']

    // Filtering logic
    const filteredIndustries = useMemo(() => {
        let filtered = industries
        if (activeFilter === 'hot') {
            filtered = filtered.filter(ind => hotIndustries.includes(ind.slug))
        }
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter(ind => {
                const name = getIndustryName(ind.slug, lang).toLowerCase()
                return name.includes(query)
            })
        }
        return filtered
    }, [industries, searchQuery, activeFilter, lang])

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            setScrollScrub(scrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`

    return (
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 overflow-x-hidden">

            {/* 1. HERO SECTION (Split Layout) */}
            <section className="relative pt-32 pb-20 border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0" />

                {/* Abstract Background Mesh */}
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-40">
                    <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
                    <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen" />
                </div>

                <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Text Content */}
                    <div className="max-w-2xl">
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{t.title.split(' ').slice(2).join(' ')}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-slate-400 mb-6 leading-relaxed max-w-lg"
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

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex items-center gap-8 border-t border-white/10 pt-8"
                        >
                            {t.stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Abstract UI Visual */}
                    <div className="relative hidden lg:block h-[600px] w-full perspective-1000">
                        <motion.div
                            style={{ rotateY: scrollScrub * 0.02, rotateX: scrollScrub * 0.01 }}
                            className="relative w-full h-full"
                        >
                            {/* Floating Cards simulating a dashboard */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 z-20">
                                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                                    <div className="h-3 w-24 bg-white/10 rounded-full" />
                                    <div className="flex gap-2">
                                        <div className="h-3 w-3 rounded-full bg-red-500/50" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                                        <div className="h-3 w-3 rounded-full bg-green-500/50" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-12 w-full bg-blue-500/10 rounded-lg border border-blue-500/20 flex items-center px-4">
                                        <div className="h-2 w-1/3 bg-blue-500/40 rounded-full" />
                                    </div>
                                    <div className="h-12 w-full bg-white/5 rounded-lg flex items-center px-4">
                                        <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                                    </div>
                                    <div className="h-12 w-full bg-white/5 rounded-lg flex items-center px-4">
                                        <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                                    </div>
                                </div>
                            </div>

                            {/* Background Elements */}
                            <div className="absolute top-10 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl z-0" />
                            <div className="absolute bottom-10 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl z-0" />
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* 2. MAIN CONTENT (Sticky Sidebar Layout) */}
            <div className="max-w-[1400px] mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* STICKY SIDEBAR (Desktop) */}
                    <aside className="hidden lg:block w-72 flex-shrink-0">
                        <div className="sticky top-24 space-y-8">
                            {/* Search */}
                            <div>
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block">
                                    Search
                                </label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder={t.searchPlaceholder}
                                        className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            {/* Filters */}
                            <div>
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block">
                                    Filter
                                </label>
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => setActiveFilter('all')}
                                        className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all ${activeFilter === 'all'
                                            ? 'bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/20'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Globe className="w-4 h-4" />
                                            {t.filterAll}
                                        </div>
                                        {activeFilter === 'all' && <CheckCircle2 className="w-4 h-4" />}
                                    </button>

                                    <button
                                        onClick={() => setActiveFilter('hot')}
                                        className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all ${activeFilter === 'hot'
                                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium shadow-lg shadow-orange-500/20'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <TrendingUp className="w-4 h-4" />
                                            {t.filterHot}
                                        </div>
                                        {activeFilter === 'hot' && <CheckCircle2 className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            {/* Mini Trust Badge */}
                            <div className="pt-8 border-t border-white/5">
                                <p className="text-xs text-slate-500 mb-4">{t.trustedBy}</p>
                                <div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                    {/* Placeholders for logos (React Icons used for demo) */}
                                    <div className="h-6 w-6 bg-white/20 rounded-full" />
                                    <div className="h-6 w-6 bg-white/20 rounded-full" />
                                    <div className="h-6 w-6 bg-white/20 rounded-full" />
                                    <div className="h-6 w-6 bg-white/20 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* MOBILE CONTROLS (Visible only on mobile) */}
                    <div className="lg:hidden mb-8 sticky top-20 z-40 bg-slate-950/80 backdrop-blur-md p-4 -mx-6 px-6 border-b border-white/10">
                        <div className="flex gap-3">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={t.searchPlaceholder}
                                    className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <button
                                onClick={() => setActiveFilter(activeFilter === 'all' ? 'hot' : 'all')}
                                className={`px-4 rounded-lg border flex items-center justify-center ${activeFilter === 'hot'
                                    ? 'bg-orange-500/10 border-orange-500/50 text-orange-400'
                                    : 'bg-white/5 border-white/10 text-white'
                                    }`}
                            >
                                <Filter className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* MAIN GRID */}
                    <main className="flex-1">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Grid2X2 className="w-5 h-5 text-blue-500" />
                                {activeFilter === 'hot' ? t.filterHot : t.filterAll}
                            </h2>
                            <span className="text-sm text-slate-500">
                                {filteredIndustries.length} {t.solutionsCount}
                            </span>
                        </div>

                        {filteredIndustries.length === 0 ? (
                            <div className="text-center py-20 bg-white/5 rounded-2xl border border-dashed border-white/10">
                                <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                                <h3 className="text-lg text-white font-medium mb-1">{t.noResults}</h3>
                                <button onClick={() => { setSearchQuery(''); setActiveFilter('all') }} className="text-blue-400 text-sm hover:underline">
                                    Clear filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <AnimatePresence>
                                    {filteredIndustries.map((industry) => {
                                        const solutions = getSolutionsByIndustry(industry.slug)
                                        const isHot = hotIndustries.includes(industry.slug)
                                        const Icon = industryIcons[industry.slug] || Building2

                                        return (
                                            <motion.a
                                                key={industry.slug}
                                                layout
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                href={getLink(`/solutions/${industry.slug}`)}
                                                className="group relative bg-slate-900 border border-white/5 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full overflow-hidden"
                                            >
                                                {/* Hover Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                {/* Card Header */}
                                                <div className="relative z-10 flex justify-between items-start mb-6">
                                                    <div className={`p-3 rounded-lg ${isHot ? 'bg-orange-500/10 text-orange-400' : 'bg-slate-800 text-slate-300'} group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors`}>
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                    {isHot && (
                                                        <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase rounded tracking-wider flex items-center gap-1">
                                                            <Zap className="w-3 h-3" /> {t.hot}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Card Content */}
                                                <div className="relative z-10 flex-1">
                                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                                        {getIndustryName(industry.slug, lang)}
                                                    </h3>
                                                    <div className="space-y-2 mb-6">
                                                        {solutions.slice(0, 2).map(s => (
                                                            <div key={s.id} className="flex items-start text-xs text-slate-400">
                                                                <CheckCircle2 className="w-3 h-3 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                                                <span className="line-clamp-1">{s.shortDescription}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Card Footer */}
                                                <div className="relative z-10 mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                                    <span className="text-xs text-slate-500">
                                                        {solutions.length} solutions
                                                    </span>
                                                    <span className="text-xs text-blue-400 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                                                        {t.viewSolutions} <ArrowRight className={`w-3 h-3 ${isRtl ? 'rotate-180 mr-1' : 'ml-1'}`} />
                                                    </span>
                                                </div>
                                            </motion.a>
                                        )
                                    })}
                                </AnimatePresence>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default TranslatedSolutions
