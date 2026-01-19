import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, ArrowRight, Zap } from 'lucide-react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

const translations: Record<Language, {
    title: string
    titleHighlight: string
    subtitle: string
    benefit1: string
    benefit2: string
    benefit3: string
    emailPlaceholder: string
    cta: string
    noThanks: string
    guarantee: string
}> = {
    en: {
        title: "Wait! Get Your FREE",
        titleHighlight: "Custom AI Strategy",
        subtitle: "Before you go, claim your personalized AI roadmap. We'll analyze YOUR business and show you exactly where AI can save you hours and make you money.",
        benefit1: "Custom AI analysis for YOUR business",
        benefit2: "Discover hidden automation opportunities",
        benefit3: "See potential ROI calculated for you",
        emailPlaceholder: "Enter your email",
        cta: "Get My Free Strategy →",
        noThanks: "No thanks, I'll keep losing leads",
        guarantee: "100% Free • No spam • Unsubscribe anytime"
    },
    ar: {
        title: "!انتظر احصل على",
        titleHighlight: "استراتيجية AI مخصصة مجاناً",
        subtitle: "قبل ما تمشي، احصل على خارطة طريق AI مخصصة لعملك. رح نحلل عملك ونوريك وين بالظبط AI بيقدر يوفرلك ساعات ويكسبك فلوس.",
        benefit1: "تحليل AI مخصص لعملك",
        benefit2: "اكتشف فرص الأتمتة المخفية",
        benefit3: "شوف العائد المحتمل محسوب إلك",
        emailPlaceholder: "أدخل إيميلك",
        cta: "← احصل على استراتيجيتي المجانية",
        noThanks: "لا شكراً، رح ضل خسر عملاء",
        guarantee: "مجاني 100% • بدون سبام • إلغاء الاشتراك بأي وقت"
    },
    de: {
        title: "Warten Sie! Holen Sie sich Ihre KOSTENLOSE",
        titleHighlight: "Maßgeschneiderte KI-Strategie",
        subtitle: "Bevor Sie gehen, sichern Sie sich Ihre personalisierte KI-Roadmap. Wir analysieren IHR Geschäft und zeigen, wo KI Ihnen Zeit und Geld sparen kann.",
        benefit1: "Individuelle KI-Analyse für IHR Geschäft",
        benefit2: "Verborgene Automatisierungsmöglichkeiten entdecken",
        benefit3: "Potenzielle ROI für Sie berechnet",
        emailPlaceholder: "E-Mail eingeben",
        cta: "Kostenlose Strategie holen →",
        noThanks: "Nein danke, ich verliere lieber weiter Leads",
        guarantee: "100% Kostenlos • Kein Spam • Jederzeit abmelden"
    },
    fr: {
        title: "Attendez! Obtenez votre",
        titleHighlight: "Stratégie IA personnalisée GRATUITE",
        subtitle: "Avant de partir, réclamez votre feuille de route IA personnalisée. Nous analyserons VOTRE entreprise et vous montrerons où l'IA peut vous faire gagner du temps et de l'argent.",
        benefit1: "Analyse IA personnalisée pour VOTRE entreprise",
        benefit2: "Découvrez les opportunités d'automatisation cachées",
        benefit3: "ROI potentiel calculé pour vous",
        emailPlaceholder: "Entrez votre email",
        cta: "Obtenir ma stratégie gratuite →",
        noThanks: "Non merci, je préfère perdre des leads",
        guarantee: "100% Gratuit • Pas de spam • Désabonnement à tout moment"
    },
    it: {
        title: "Aspetta! Ottieni la tua",
        titleHighlight: "Strategia AI personalizzata GRATIS",
        subtitle: "Prima di andare, richiedi la tua roadmap AI personalizzata. Analizzeremo la TUA azienda e ti mostreremo dove l'AI può farti risparmiare tempo e guadagnare.",
        benefit1: "Analisi AI personalizzata per la TUA azienda",
        benefit2: "Scopri opportunità di automazione nascoste",
        benefit3: "ROI potenziale calcolato per te",
        emailPlaceholder: "Inserisci la tua email",
        cta: "Ottieni la mia strategia gratuita →",
        noThanks: "No grazie, preferisco perdere lead",
        guarantee: "100% Gratuito • Niente spam • Cancellazione in qualsiasi momento"
    },
    hi: {
        title: "रुकिए! अपनी मुफ्त पाएं",
        titleHighlight: "कस्टम AI रणनीति",
        subtitle: "जाने से पहले, अपना व्यक्तिगत AI रोडमैप प्राप्त करें। हम आपके बिज़नेस का विश्लेषण करेंगे।",
        benefit1: "आपके बिज़नेस के लिए कस्टम AI विश्लेषण",
        benefit2: "छिपे हुए ऑटोमेशन अवसर खोजें",
        benefit3: "आपके लिए संभावित ROI की गणना",
        emailPlaceholder: "अपना ईमेल दर्ज करें",
        cta: "मेरी मुफ्त रणनीति पाएं →",
        noThanks: "नहीं धन्यवाद",
        guarantee: "100% मुफ्त • कोई स्पैम नहीं • कभी भी सदस्यता रद्द करें"
    },
    ms: {
        title: "Tunggu! Dapatkan",
        titleHighlight: "Strategi AI Tersuai PERCUMA",
        subtitle: "Sebelum anda pergi, dapatkan peta jalan AI peribadi anda. Kami akan menganalisis perniagaan ANDA.",
        benefit1: "Analisis AI tersuai untuk perniagaan ANDA",
        benefit2: "Temui peluang automasi tersembunyi",
        benefit3: "Lihat potensi ROI dikira untuk anda",
        emailPlaceholder: "Masukkan email anda",
        cta: "Dapatkan strategi percuma saya →",
        noThanks: "Tidak, terima kasih",
        guarantee: "100% Percuma • Tiada spam • Berhenti langgan bila-bila masa"
    }
}

interface ExitIntentPopupProps {
    lang?: string
}

const ExitIntentPopup = ({ lang = 'en' }: ExitIntentPopupProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [hasShown, setHasShown] = useState(false)

    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'

    useEffect(() => {
        // Check if already shown this session
        const shown = sessionStorage.getItem('exitPopupShown')
        if (shown) {
            setHasShown(true)
            return
        }

        const handleMouseLeave = (e: MouseEvent) => {
            // Only trigger when mouse leaves from top of viewport
            if (e.clientY <= 10 && !hasShown) {
                setIsVisible(true)
                setHasShown(true)
                sessionStorage.setItem('exitPopupShown', 'true')
            }
        }

        // Add delay before enabling exit intent
        const timer = setTimeout(() => {
            document.addEventListener('mouseleave', handleMouseLeave)
        }, 5000) // Wait 5 seconds before enabling

        return () => {
            clearTimeout(timer)
            document.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [hasShown])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus('loading')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: 'Exit Intent Lead',
                    email,
                    message: 'Requested free AI strategy via exit intent popup',
                    service: 'Free AI Strategy',
                    page: typeof window !== 'undefined' ? window.location.pathname : ''
                })
            })

            if (response.ok) {
                setStatus('success')
                setTimeout(() => setIsVisible(false), 2000)
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    const handleClose = () => {
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />

                    {/* Popup */}
                    <motion.div
                        dir={isRtl ? 'rtl' : 'ltr'}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 w-auto md:w-full md:max-w-lg"
                    >
                        <div className="bg-gradient-to-br from-[#030014] to-[#0a0a20] rounded-2xl shadow-2xl border border-cyan-500/20 overflow-hidden">
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Content */}
                            <div className="p-8">
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                                        <Gift className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
                                    {t.title}{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                        {t.titleHighlight}
                                    </span>
                                </h2>

                                {/* Subtitle */}
                                <p className="text-white/60 text-center mb-6">
                                    {t.subtitle}
                                </p>

                                {/* Benefits */}
                                <div className="space-y-3 mb-6">
                                    {[t.benefit1, t.benefit2, t.benefit3].map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                                                <Zap className="w-3 h-3 text-cyan-400" />
                                            </div>
                                            <span className="text-white/80 text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Form */}
                                {status === 'success' ? (
                                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                                        <p className="text-green-400 font-medium">
                                            ✓ Check your inbox! Your strategy is on the way.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="flex gap-2">
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder={t.emailPlaceholder}
                                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                            />
                                            <button
                                                type="submit"
                                                disabled={status === 'loading'}
                                                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
                                            >
                                                {status === 'loading' ? (
                                                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        {t.cta.replace(' →', '')}
                                                        <ArrowRight className="w-4 h-4" />
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                        {status === 'error' && (
                                            <p className="text-red-400 text-sm text-center">
                                                Something went wrong. Please try again.
                                            </p>
                                        )}

                                        <p className="text-white/40 text-xs text-center">
                                            {t.guarantee}
                                        </p>
                                    </form>
                                )}

                                {/* No Thanks Link */}
                                <button
                                    onClick={handleClose}
                                    className="w-full mt-4 text-white/30 text-sm hover:text-white/50 transition-colors"
                                >
                                    {t.noThanks}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default ExitIntentPopup
