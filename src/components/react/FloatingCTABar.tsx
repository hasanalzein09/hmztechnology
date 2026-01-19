import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, ArrowRight } from 'lucide-react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

const translations: Record<Language, {
    text: string
    cta: string
    discount: string
}> = {
    en: {
        text: "Get your custom AI solution built this month",
        cta: "Claim Free Strategy",
        discount: "Limited spots available"
    },
    ar: {
        text: "احصل على حل AI مخصص هالشهر",
        cta: "احصل على استراتيجية مجانية",
        discount: "أماكن محدودة متاحة"
    },
    de: {
        text: "Lassen Sie Ihre maßgeschneiderte KI-Lösung diesen Monat bauen",
        cta: "Kostenlose Strategie",
        discount: "Begrenzte Plätze verfügbar"
    },
    fr: {
        text: "Faites construire votre solution IA sur mesure ce mois-ci",
        cta: "Stratégie gratuite",
        discount: "Places limitées disponibles"
    },
    it: {
        text: "Fai costruire la tua soluzione AI personalizzata questo mese",
        cta: "Strategia gratuita",
        discount: "Posti limitati disponibili"
    },
    hi: {
        text: "इस महीने अपना कस्टम AI समाधान बनवाएं",
        cta: "मुफ्त रणनीति",
        discount: "सीमित स्थान उपलब्ध"
    },
    ms: {
        text: "Dapatkan penyelesaian AI tersuai anda dibina bulan ini",
        cta: "Strategi percuma",
        discount: "Tempat terhad tersedia"
    }
}

interface FloatingCTABarProps {
    lang?: string
}

const FloatingCTABar = ({ lang = 'en' }: FloatingCTABarProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)

    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'

    useEffect(() => {
        if (isDismissed) return

        const handleScroll = () => {
            // Show after scrolling past 30% of viewport
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            setIsVisible(scrollPercentage > 15)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isDismissed])

    const getContactLink = () => {
        return lang === 'en' ? '/contact' : `/${lang}/contact`
    }

    if (isDismissed) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    dir={isRtl ? 'rtl' : 'ltr'}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="fixed bottom-0 left-0 right-0 z-40 p-4 pb-safe"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-[#030014] to-[#0a0a30] rounded-2xl shadow-2xl border border-cyan-500/20 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsDismissed(true)}
                                className="absolute top-2 right-2 sm:relative sm:top-auto sm:right-auto p-1.5 text-white/30 hover:text-white/60 transition-colors order-last sm:order-first"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Content */}
                            <div className="flex items-center gap-3 text-center sm:text-left">
                                <div className="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm sm:text-base">
                                        {t.text}
                                    </p>
                                    <p className="text-cyan-400 text-xs">
                                        {t.discount}
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <a
                                href={getContactLink()}
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all whitespace-nowrap"
                            >
                                {t.cta}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default FloatingCTABar
