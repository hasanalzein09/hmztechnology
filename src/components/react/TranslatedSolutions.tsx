import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getAllIndustries, getSolutionsByIndustry } from '../../lib/solutionsData'
import {
    ShoppingCart, HeartPulse, Building2, UtensilsCrossed,
    GraduationCap, Car, Scale, CircleDollarSign,
    Dumbbell, Sparkles, SprayCan, Truck, Plane,
    Search, ArrowRight, TrendingUp, CheckCircle2, Zap
} from 'lucide-react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

interface TranslatedSolutionsProps {
    lang: Language
}

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
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    searchPlaceholder: string
    filterAll: string
    filterHot: string
    noResults: string
    viewSolutions: string
    solutions: string
    hot: string
    stats: { value: string; label: string }[]
    cta: string
}> = {
    en: {
        badge: '🎯 Industry Solutions',
        title: 'AI Solutions for',
        titleHighlight: 'Your Industry',
        subtitle: 'Over 300+ specialized AI tools designed to automate and scale your specific business.',
        searchPlaceholder: 'Search industries...',
        filterAll: 'All Industries',
        filterHot: 'Trending',
        noResults: 'No industries found.',
        viewSolutions: 'Explore',
        solutions: 'solutions',
        hot: 'HOT',
        stats: [
            { value: '300+', label: 'Solutions' },
            { value: '13', label: 'Industries' },
            { value: '24/7', label: 'AI Support' },
        ],
        cta: 'Get Started'
    },
    ar: {
        badge: '🎯 حلول الصناعات',
        title: 'حلول AI لـ',
        titleHighlight: 'صناعتك',
        subtitle: 'أكثر من 300 أداة AI متخصصة مصممة لأتمتة وتوسيع عملك.',
        searchPlaceholder: 'ابحث عن الصناعات...',
        filterAll: 'كل الصناعات',
        filterHot: 'رائج',
        noResults: 'لم يتم العثور على نتائج.',
        viewSolutions: 'استكشف',
        solutions: 'حل',
        hot: 'رائج',
        stats: [
            { value: '+٣٠٠', label: 'حل' },
            { value: '١٣', label: 'صناعة' },
            { value: '٢٤/٧', label: 'دعم AI' },
        ],
        cta: 'ابدأ الآن'
    },
    de: {
        badge: '🎯 Branchenlösungen',
        title: 'KI-Lösungen für',
        titleHighlight: 'Ihre Branche',
        subtitle: 'Über 300 spezialisierte KI-Tools zur Automatisierung und Skalierung Ihres Unternehmens.',
        searchPlaceholder: 'Branchen suchen...',
        filterAll: 'Alle Branchen',
        filterHot: 'Beliebt',
        noResults: 'Keine Branchen gefunden.',
        viewSolutions: 'Entdecken',
        solutions: 'Lösungen',
        hot: 'HOT',
        stats: [
            { value: '300+', label: 'Lösungen' },
            { value: '13', label: 'Branchen' },
            { value: '24/7', label: 'KI-Support' },
        ],
        cta: 'Jetzt starten'
    },
    fr: {
        badge: '🎯 Solutions Sectorielles',
        title: 'Solutions IA pour',
        titleHighlight: 'Votre Secteur',
        subtitle: 'Plus de 300 outils IA spécialisés pour automatiser et développer votre entreprise.',
        searchPlaceholder: 'Rechercher...',
        filterAll: 'Tous les secteurs',
        filterHot: 'Tendance',
        noResults: 'Aucun secteur trouvé.',
        viewSolutions: 'Explorer',
        solutions: 'solutions',
        hot: 'HOT',
        stats: [
            { value: '300+', label: 'Solutions' },
            { value: '13', label: 'Secteurs' },
            { value: '24/7', label: 'Support IA' },
        ],
        cta: 'Commencer'
    },
    it: {
        badge: '🎯 Soluzioni di Settore',
        title: 'Soluzioni IA per',
        titleHighlight: 'Il Tuo Settore',
        subtitle: 'Oltre 300 strumenti IA specializzati per automatizzare e scalare la tua attività.',
        searchPlaceholder: 'Cerca settori...',
        filterAll: 'Tutti i settori',
        filterHot: 'Di tendenza',
        noResults: 'Nessun settore trovato.',
        viewSolutions: 'Esplora',
        solutions: 'soluzioni',
        hot: 'HOT',
        stats: [
            { value: '300+', label: 'Soluzioni' },
            { value: '13', label: 'Settori' },
            { value: '24/7', label: 'Supporto IA' },
        ],
        cta: 'Inizia'
    },
    hi: {
        badge: '🎯 उद्योग समाधान',
        title: 'AI समाधान',
        titleHighlight: 'आपके उद्योग के लिए',
        subtitle: '300+ विशिष्ट AI टूल्स आपके व्यवसाय को स्वचालित और स्केल करने के लिए।',
        searchPlaceholder: 'उद्योग खोजें...',
        filterAll: 'सभी उद्योग',
        filterHot: 'ट्रेंडिंग',
        noResults: 'कोई उद्योग नहीं मिला।',
        viewSolutions: 'देखें',
        solutions: 'समाधान',
        hot: 'HOT',
        stats: [
            { value: '300+', label: 'समाधान' },
            { value: '13', label: 'उद्योग' },
            { value: '24/7', label: 'AI सपोर्ट' },
        ],
        cta: 'शुरू करें'
    },
    ms: {
        badge: '🎯 Penyelesaian Industri',
        title: 'Penyelesaian AI untuk',
        titleHighlight: 'Industri Anda',
        subtitle: '300+ alat AI khusus untuk mengautomasikan dan mengembangkan perniagaan anda.',
        searchPlaceholder: 'Cari industri...',
        filterAll: 'Semua Industri',
        filterHot: 'Popular',
        noResults: 'Tiada industri ditemui.',
        viewSolutions: 'Terokai',
        solutions: 'penyelesaian',
        hot: 'PANAS',
        stats: [
            { value: '300+', label: 'Penyelesaian' },
            { value: '13', label: 'Industri' },
            { value: '24/7', label: 'Sokongan AI' },
        ],
        cta: 'Mulakan'
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

const getIndustryName = (slug: string, lang: Language): string => {
    return industryNames[lang]?.[slug] || industryNames.en[slug] || slug
}

const gradients = [
    'from-cyan-500 to-blue-600',
    'from-purple-500 to-pink-600',
    'from-amber-500 to-orange-600',
    'from-emerald-500 to-teal-600',
    'from-rose-500 to-red-600',
    'from-indigo-500 to-purple-600',
]

const TranslatedSolutions = ({ lang }: TranslatedSolutionsProps) => {
    const t = translations[lang] || translations.en
    const isRtl = lang === 'ar'
    const industries = getAllIndustries()

    const [searchQuery, setSearchQuery] = useState('')
    const [activeFilter, setActiveFilter] = useState<'all' | 'hot'>('all')

    const hotIndustries = ['ecommerce', 'healthcare', 'restaurants', 'real-estate']

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

    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`

    return (
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-[#030014]">
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
                </div>

                {/* Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }}
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
                            <span className="text-sm font-medium text-cyan-300">{t.badge}</span>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-center mb-8"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                            {t.title}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                {t.titleHighlight}
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                            {t.subtitle}
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center gap-8 md:gap-16 mb-12"
                    >
                        {t.stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-white/40">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Search & Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Search */}
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={t.searchPlaceholder}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                />
                            </div>

                            {/* Filter Buttons */}
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setActiveFilter('all')}
                                    className={`px-6 py-4 rounded-xl font-medium transition-all ${
                                        activeFilter === 'all'
                                            ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                                            : 'bg-white/5 text-white/60 hover:bg-white/10'
                                    }`}
                                >
                                    {t.filterAll}
                                </button>
                                <button
                                    onClick={() => setActiveFilter('hot')}
                                    className={`px-6 py-4 rounded-xl font-medium transition-all flex items-center gap-2 ${
                                        activeFilter === 'hot'
                                            ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25'
                                            : 'bg-white/5 text-white/60 hover:bg-white/10'
                                    }`}
                                >
                                    <TrendingUp className="w-4 h-4" />
                                    {t.filterHot}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredIndustries.length === 0 ? (
                        <div className="text-center py-20">
                            <Search className="w-16 h-16 text-white/20 mx-auto mb-4" />
                            <p className="text-white/40 text-lg">{t.noResults}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <AnimatePresence>
                                {filteredIndustries.map((industry, index) => {
                                    const solutions = getSolutionsByIndustry(industry.slug)
                                    const isHot = hotIndustries.includes(industry.slug)
                                    const Icon = industryIcons[industry.slug] || Building2
                                    const gradient = gradients[index % gradients.length]

                                    return (
                                        <motion.a
                                            key={industry.slug}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ delay: index * 0.05 }}
                                            href={getLink(`/solutions/${industry.slug}`)}
                                            className="group relative"
                                        >
                                            <div className="glass-card-ai p-6 h-full relative overflow-hidden">
                                                {/* Gradient Glow on Hover */}
                                                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />

                                                {/* Hot Badge */}
                                                {isHot && (
                                                    <div className="absolute top-4 right-4">
                                                        <span className="px-2 py-1 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[10px] font-bold uppercase rounded-full flex items-center gap-1">
                                                            <Zap className="w-3 h-3" /> {t.hot}
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Icon */}
                                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                    <Icon className="w-7 h-7 text-white" />
                                                </div>

                                                {/* Content */}
                                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                                    {getIndustryName(industry.slug, lang)}
                                                </h3>

                                                {/* Solutions Preview */}
                                                <div className="space-y-2 mb-6">
                                                    {solutions.slice(0, 2).map(s => (
                                                        <div key={s.id} className="flex items-start text-sm text-white/50">
                                                            <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                                                            <span className="line-clamp-1">{s.shortDescription}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Footer */}
                                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                                    <span className="text-sm text-white/40">
                                                        {solutions.length} {t.solutions}
                                                    </span>
                                                    <span className="text-sm text-cyan-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                        {t.viewSolutions}
                                                        <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.a>
                                    )
                                })}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default TranslatedSolutions
