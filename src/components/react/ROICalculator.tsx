import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight, Zap } from 'lucide-react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

const translations: Record<Language, {
    title: string
    titleHighlight: string
    subtitle: string
    inquiriesLabel: string
    responseTimeLabel: string
    dealValueLabel: string
    calculateBtn: string
    resultsTitle: string
    currentLoss: string
    potentialSavings: string
    timeSaved: string
    roi: string
    cta: string
    perMonth: string
    hours: string
    disclaimer: string
}> = {
    en: {
        title: "Calculate Your",
        titleHighlight: "Custom AI ROI",
        subtitle: "See how much a custom-built AI solution could save YOUR specific business",
        inquiriesLabel: "Monthly customer inquiries",
        responseTimeLabel: "Current avg. response time (hours)",
        dealValueLabel: "Average deal value ($)",
        calculateBtn: "Calculate My ROI",
        resultsTitle: "Your Custom AI Impact",
        currentLoss: "Currently losing monthly",
        potentialSavings: "Potential monthly savings",
        timeSaved: "Hours saved monthly",
        roi: "Expected ROI",
        cta: "Get Your Custom Solution →",
        perMonth: "/month",
        hours: "hrs",
        disclaimer: "*Based on industry averages. Your custom solution may vary."
    },
    ar: {
        title: "احسب",
        titleHighlight: "عائد AI المخصص",
        subtitle: "شوف قديش ممكن حل AI مخصص يوفر لعملك بالتحديد",
        inquiriesLabel: "استفسارات العملاء الشهرية",
        responseTimeLabel: "متوسط وقت الرد الحالي (ساعات)",
        dealValueLabel: "متوسط قيمة الصفقة ($)",
        calculateBtn: "احسب عائدي",
        resultsTitle: "تأثير AI المخصص عليك",
        currentLoss: "خسارتك الشهرية الحالية",
        potentialSavings: "التوفير الشهري المحتمل",
        timeSaved: "ساعات موفرة شهرياً",
        roi: "العائد المتوقع",
        cta: "← احصل على حلك المخصص",
        perMonth: "/شهرياً",
        hours: "ساعة",
        disclaimer: "*مبني على متوسطات الصناعة. حلك المخصص قد يختلف."
    },
    de: {
        title: "Berechnen Sie Ihren",
        titleHighlight: "Maßgeschneiderten KI-ROI",
        subtitle: "Sehen Sie, wie viel eine maßgeschneiderte KI-Lösung für IHR Geschäft sparen könnte",
        inquiriesLabel: "Monatliche Kundenanfragen",
        responseTimeLabel: "Aktuelle Antwortzeit (Stunden)",
        dealValueLabel: "Durchschnittlicher Dealwert (€)",
        calculateBtn: "Meinen ROI berechnen",
        resultsTitle: "Ihre KI-Auswirkung",
        currentLoss: "Aktueller monatlicher Verlust",
        potentialSavings: "Potenzielle monatliche Einsparungen",
        timeSaved: "Eingesparte Stunden monatlich",
        roi: "Erwarteter ROI",
        cta: "Ihre maßgeschneiderte Lösung →",
        perMonth: "/Monat",
        hours: "Std",
        disclaimer: "*Basierend auf Branchendurchschnitten."
    },
    fr: {
        title: "Calculez votre",
        titleHighlight: "ROI IA sur mesure",
        subtitle: "Voyez combien une solution IA personnalisée pourrait économiser pour VOTRE entreprise",
        inquiriesLabel: "Demandes clients mensuelles",
        responseTimeLabel: "Temps de réponse actuel (heures)",
        dealValueLabel: "Valeur moyenne d'un deal (€)",
        calculateBtn: "Calculer mon ROI",
        resultsTitle: "Votre impact IA",
        currentLoss: "Perte mensuelle actuelle",
        potentialSavings: "Économies mensuelles potentielles",
        timeSaved: "Heures économisées mensuellement",
        roi: "ROI attendu",
        cta: "Obtenez votre solution sur mesure →",
        perMonth: "/mois",
        hours: "h",
        disclaimer: "*Basé sur les moyennes de l'industrie."
    },
    it: {
        title: "Calcola il tuo",
        titleHighlight: "ROI AI personalizzato",
        subtitle: "Scopri quanto una soluzione AI su misura potrebbe far risparmiare alla TUA azienda",
        inquiriesLabel: "Richieste clienti mensili",
        responseTimeLabel: "Tempo di risposta attuale (ore)",
        dealValueLabel: "Valore medio deal (€)",
        calculateBtn: "Calcola il mio ROI",
        resultsTitle: "Il tuo impatto AI",
        currentLoss: "Perdita mensile attuale",
        potentialSavings: "Risparmio mensile potenziale",
        timeSaved: "Ore risparmiate mensilmente",
        roi: "ROI atteso",
        cta: "Ottieni la tua soluzione su misura →",
        perMonth: "/mese",
        hours: "ore",
        disclaimer: "*Basato sulle medie del settore."
    },
    hi: {
        title: "अपना",
        titleHighlight: "कस्टम AI ROI गणना करें",
        subtitle: "देखें कि एक कस्टम-बिल्ट AI समाधान आपके व्यवसाय को कितना बचा सकता है",
        inquiriesLabel: "मासिक ग्राहक पूछताछ",
        responseTimeLabel: "वर्तमान औसत प्रतिक्रिया समय (घंटे)",
        dealValueLabel: "औसत डील मूल्य ($)",
        calculateBtn: "मेरा ROI गणना करें",
        resultsTitle: "आपका AI प्रभाव",
        currentLoss: "वर्तमान मासिक नुकसान",
        potentialSavings: "संभावित मासिक बचत",
        timeSaved: "मासिक बचाए गए घंटे",
        roi: "अपेक्षित ROI",
        cta: "अपना कस्टम समाधान पाएं →",
        perMonth: "/माह",
        hours: "घंटे",
        disclaimer: "*उद्योग औसत पर आधारित।"
    },
    ms: {
        title: "Kira",
        titleHighlight: "ROI AI Tersuai Anda",
        subtitle: "Lihat berapa banyak penyelesaian AI tersuai boleh jimat untuk perniagaan ANDA",
        inquiriesLabel: "Pertanyaan pelanggan bulanan",
        responseTimeLabel: "Masa respons semasa (jam)",
        dealValueLabel: "Nilai purata urus niaga ($)",
        calculateBtn: "Kira ROI saya",
        resultsTitle: "Impak AI anda",
        currentLoss: "Kerugian bulanan semasa",
        potentialSavings: "Penjimatan bulanan berpotensi",
        timeSaved: "Jam dijimat bulanan",
        roi: "ROI dijangka",
        cta: "Dapatkan penyelesaian tersuai anda →",
        perMonth: "/bulan",
        hours: "jam",
        disclaimer: "*Berdasarkan purata industri."
    }
}

interface ROICalculatorProps {
    lang?: string
}

const ROICalculator = ({ lang = 'en' }: ROICalculatorProps) => {
    const [inquiries, setInquiries] = useState(200)
    const [responseTime, setResponseTime] = useState(4)
    const [dealValue, setDealValue] = useState(500)
    const [showResults, setShowResults] = useState(false)

    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'

    // Calculate ROI
    const lostLeadRate = Math.min(responseTime * 5, 40) / 100 // Up to 40% lost due to slow response
    const lostLeads = Math.round(inquiries * lostLeadRate)
    const currentLoss = lostLeads * dealValue * 0.1 // 10% conversion rate assumption
    const potentialSavings = Math.round(currentLoss * 0.8) // AI can recover 80%
    const timeSaved = Math.round(inquiries * 0.15) // 15 minutes per inquiry average
    const roi = Math.round((potentialSavings / 799) * 100) // Assuming $799 solution

    const handleCalculate = () => {
        setShowResults(true)
    }

    const getContactLink = () => {
        return lang === 'en' ? '/contact' : `/${lang}/contact`
    }

    return (
        <section
            dir={isRtl ? 'rtl' : 'ltr'}
            className="relative py-24 bg-[#030014] overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-6">
                        <Calculator className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium text-cyan-300">ROI Calculator</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t.title}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            {t.titleHighlight}
                        </span>
                    </h2>

                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Calculator Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                >
                    {/* Inputs */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* Inquiries */}
                        <div>
                            <label className="block text-white/70 text-sm mb-2">
                                {t.inquiriesLabel}
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={inquiries}
                                    onChange={(e) => setInquiries(Number(e.target.value))}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-2xl font-bold focus:outline-none focus:border-cyan-500/50 transition-colors"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">
                                    {t.perMonth}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="50"
                                max="1000"
                                value={inquiries}
                                onChange={(e) => setInquiries(Number(e.target.value))}
                                className="w-full mt-2 accent-cyan-500"
                            />
                        </div>

                        {/* Response Time */}
                        <div>
                            <label className="block text-white/70 text-sm mb-2">
                                {t.responseTimeLabel}
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={responseTime}
                                    onChange={(e) => setResponseTime(Number(e.target.value))}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-2xl font-bold focus:outline-none focus:border-cyan-500/50 transition-colors"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">
                                    {t.hours}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="0.5"
                                max="24"
                                step="0.5"
                                value={responseTime}
                                onChange={(e) => setResponseTime(Number(e.target.value))}
                                className="w-full mt-2 accent-cyan-500"
                            />
                        </div>

                        {/* Deal Value */}
                        <div>
                            <label className="block text-white/70 text-sm mb-2">
                                {t.dealValueLabel}
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">$</span>
                                <input
                                    type="number"
                                    value={dealValue}
                                    onChange={(e) => setDealValue(Number(e.target.value))}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 pl-8 text-white text-2xl font-bold focus:outline-none focus:border-cyan-500/50 transition-colors"
                                />
                            </div>
                            <input
                                type="range"
                                min="100"
                                max="5000"
                                step="100"
                                value={dealValue}
                                onChange={(e) => setDealValue(Number(e.target.value))}
                                className="w-full mt-2 accent-cyan-500"
                            />
                        </div>
                    </div>

                    {/* Calculate Button */}
                    {!showResults && (
                        <button
                            onClick={handleCalculate}
                            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                        >
                            <Zap className="w-5 h-5" />
                            {t.calculateBtn}
                        </button>
                    )}

                    {/* Results */}
                    {showResults && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 text-center">
                                {t.resultsTitle}
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {/* Current Loss */}
                                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                                    <DollarSign className="w-6 h-6 text-red-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-red-400">
                                        ${currentLoss.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-white/50">{t.currentLoss}</div>
                                </div>

                                {/* Potential Savings */}
                                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                                    <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-green-400">
                                        ${potentialSavings.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-white/50">{t.potentialSavings}</div>
                                </div>

                                {/* Time Saved */}
                                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 text-center">
                                    <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-cyan-400">
                                        {timeSaved}h
                                    </div>
                                    <div className="text-xs text-white/50">{t.timeSaved}</div>
                                </div>

                                {/* ROI */}
                                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 text-center">
                                    <Calculator className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-purple-400">
                                        {roi}%
                                    </div>
                                    <div className="text-xs text-white/50">{t.roi}</div>
                                </div>
                            </div>

                            {/* CTA */}
                            <a
                                href={getContactLink()}
                                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                            >
                                {t.cta}
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            <p className="text-center text-white/30 text-xs mt-4">
                                {t.disclaimer}
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}

export default ROICalculator
