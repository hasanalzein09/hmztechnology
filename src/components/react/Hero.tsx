import { motion } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import NeuralNetwork from './NeuralNetwork'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

interface HeroTranslation {
    badge: string
    titleLine1: string
    titleLine2: string
    titleLine3: string
    subtitle: string
    cta1: string
    cta2: string
    stats: { value: string; label: string }[]
    scrollText: string
}

const heroTranslations: Record<Language, HeroTranslation> = {
    en: {
        badge: '⚡ Your Competitors Already Started',
        titleLine1: 'Stop Losing',
        titleLine2: 'Customers to',
        titleLine3: 'Silence',
        subtitle: 'Every unanswered message is money walking to your competitor. Our AI responds in 3 seconds, sells while you sleep, and never asks for a raise.',
        cta1: 'Claim Your Free Audit',
        cta2: 'See Live Results',
        stats: [
            { value: '500+', label: 'Active Clients' },
            { value: '3 sec', label: 'Response Time' },
            { value: '24/7', label: 'Always Working' },
            { value: '0', label: 'Missed Leads' }
        ],
        scrollText: 'Discover the secret'
    },
    ar: {
        badge: '⚡ منافسوك بدأوا قبلك',
        titleLine1: 'توقف عن خسارة',
        titleLine2: 'عملائك بسبب',
        titleLine3: 'الصمت',
        subtitle: 'كل رسالة بدون رد = عميل ذهب لمنافسك. AI يرد بـ 3 ثواني، يبيع وأنت نايم، وما بيطلب علاوة.',
        cta1: 'احصل على تحليل مجاني',
        cta2: 'شوف النتائج الحية',
        stats: [
            { value: '+٥٠٠', label: 'عميل نشط' },
            { value: '٣ ث', label: 'وقت الرد' },
            { value: '٢٤/٧', label: 'شغّال دائماً' },
            { value: '٠', label: 'عملاء ضائعين' }
        ],
        scrollText: 'اكتشف السر'
    },
    de: {
        badge: '⚡ Ihre Konkurrenz hat schon begonnen',
        titleLine1: 'Hören Sie auf',
        titleLine2: 'Kunden durch',
        titleLine3: 'Stille zu verlieren',
        subtitle: 'Jede unbeantwortete Nachricht ist Geld, das zu Ihrem Konkurrenten geht. Unsere KI antwortet in 3 Sekunden, verkauft während Sie schlafen.',
        cta1: 'Kostenloses Audit anfordern',
        cta2: 'Live-Ergebnisse sehen',
        stats: [
            { value: '€2,3M', label: 'Generierter Umsatz' },
            { value: '3 Sek', label: 'Antwortzeit' },
            { value: '847%', label: 'ROI Durchschnitt' },
            { value: '0', label: 'Verlorene Leads' }
        ],
        scrollText: 'Entdecken Sie das Geheimnis'
    },
    fr: {
        badge: '⚡ Vos concurrents ont déjà commencé',
        titleLine1: 'Arrêtez de perdre',
        titleLine2: 'des clients à cause',
        titleLine3: 'du silence',
        subtitle: "Chaque message sans réponse = de l'argent qui va chez votre concurrent. Notre IA répond en 3 secondes, vend pendant que vous dormez.",
        cta1: 'Obtenez votre audit gratuit',
        cta2: 'Voir les résultats en direct',
        stats: [
            { value: '€2,3M', label: 'Revenus générés' },
            { value: '3 sec', label: 'Temps de réponse' },
            { value: '847%', label: 'ROI Moyen' },
            { value: '0', label: 'Leads perdus' }
        ],
        scrollText: 'Découvrez le secret'
    },
    it: {
        badge: '⚡ I tuoi concorrenti hanno già iniziato',
        titleLine1: 'Smetti di perdere',
        titleLine2: 'clienti a causa',
        titleLine3: 'del silenzio',
        subtitle: 'Ogni messaggio senza risposta = soldi che vanno al tuo concorrente. La nostra IA risponde in 3 secondi, vende mentre dormi.',
        cta1: 'Richiedi audit gratuito',
        cta2: 'Vedi risultati dal vivo',
        stats: [
            { value: '€2,3M', label: 'Ricavi generati' },
            { value: '3 sec', label: 'Tempo di risposta' },
            { value: '847%', label: 'ROI Medio' },
            { value: '0', label: 'Lead persi' }
        ],
        scrollText: 'Scopri il segreto'
    },
    hi: {
        badge: '⚡ आपके प्रतिस्पर्धी पहले ही शुरू कर चुके हैं',
        titleLine1: 'ग्राहकों को',
        titleLine2: 'चुप्पी की वजह से',
        titleLine3: 'खोना बंद करें',
        subtitle: 'हर अनुत्तरित संदेश = पैसा जो आपके प्रतिस्पर्धी के पास जा रहा है। हमारा AI 3 सेकंड में जवाब देता है, आप सोते समय बेचता है।',
        cta1: 'मुफ्त ऑडिट प्राप्त करें',
        cta2: 'लाइव परिणाम देखें',
        stats: [
            { value: '$2.3M', label: 'उत्पन्न राजस्व' },
            { value: '3 सेक', label: 'प्रतिक्रिया समय' },
            { value: '847%', label: 'औसत ROI' },
            { value: '0', label: 'खोए हुए लीड' }
        ],
        scrollText: 'रहस्य जानें'
    },
    ms: {
        badge: '⚡ Pesaing anda sudah bermula',
        titleLine1: 'Berhenti kehilangan',
        titleLine2: 'pelanggan kerana',
        titleLine3: 'kesunyian',
        subtitle: 'Setiap mesej tanpa jawapan = wang yang pergi kepada pesaing anda. AI kami menjawab dalam 3 saat, menjual semasa anda tidur.',
        cta1: 'Dapatkan audit percuma',
        cta2: 'Lihat hasil langsung',
        stats: [
            { value: '$2.3M', label: 'Pendapatan dijana' },
            { value: '3 saat', label: 'Masa respons' },
            { value: '847%', label: 'ROI Purata' },
            { value: '0', label: 'Leads hilang' }
        ],
        scrollText: 'Temui rahsia'
    }
}

interface HeroProps {
    lang: string
}

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayText, setDisplayText] = useState('')
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            let index = 0
            const interval = setInterval(() => {
                if (index <= text.length) {
                    setDisplayText(text.slice(0, index))
                    index++
                } else {
                    clearInterval(interval)
                    setTimeout(() => setShowCursor(false), 1000)
                }
            }, 50)
            return () => clearInterval(interval)
        }, delay)
        return () => clearTimeout(timeout)
    }, [text, delay])

    return (
        <span>
            {displayText}
            {showCursor && <span className="animate-pulse text-cyan-400">|</span>}
        </span>
    )
}

const AnimatedCounter = ({ value }: { value: string }) => {
    return <span>{value}</span>
}

const Hero = ({ lang }: HeroProps) => {
    const language = (heroTranslations[lang as Language] ? lang : 'en') as Language
    const t = heroTranslations[language]
    const isRtl = language === 'ar'
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const getContactLink = useCallback(() => {
        return lang === 'en' ? '/contact' : `/${lang}/contact`
    }, [lang])

    if (!mounted) {
        return (
            <section className="relative min-h-screen bg-[#030014] flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            </section>
        )
    }

    return (
        <section
            dir={isRtl ? 'rtl' : 'ltr'}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030014]"
        >
            {/* Neural Network Background */}
            <NeuralNetwork />

            {/* Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)'
                    }}
                />
                <motion.div
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                        scale: [1.2, 1, 1.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)'
                    }}
                />
                {/* Center Orb */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
                        filter: 'blur(80px)'
                    }}
                />
            </div>

            {/* Grid Pattern Overlay */}
            <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-0"
            >
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                            </span>
                            <span className="text-sm font-medium text-cyan-300 tracking-wide">
                                {t.badge}
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-8"
                    >
                        <h1 className="heading-ai text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight">
                            <span className="block text-white mb-2">
                                {t.titleLine1}
                            </span>
                            <span className="block text-white/80 mb-2">
                                {t.titleLine2}
                            </span>
                            <span className="block text-gradient-ai">
                                <TypewriterText text={t.titleLine3} delay={1000} />
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="subheading-ai text-lg md:text-xl lg:text-2xl max-w-3xl mb-12 text-white/60 leading-relaxed"
                    >
                        {t.subtitle}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 mb-16"
                    >
                        <motion.a
                            href={getContactLink()}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white text-lg overflow-hidden shadow-lg shadow-cyan-500/25"
                        >
                            <span className="relative z-10 flex items-center gap-2 justify-center">
                                {t.cta1}
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
                                initial={{ x: '100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>

                        <motion.a
                            href="https://wa.me/96170106083"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 rounded-full font-semibold text-white text-lg border border-white/20 hover:border-cyan-500/50 hover:bg-white/5 transition-all duration-300 flex items-center gap-2 justify-center"
                        >
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            {t.cta2}
                        </motion.a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
                    >
                        {t.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="stat-number text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                                    <AnimatedCounter value={stat.value} />
                                </div>
                                <div className="text-sm md:text-base text-white/50 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-xs text-white/40 tracking-widest uppercase">
                    {t.scrollText}
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
                >
                    <motion.div
                        animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                    />
                </motion.div>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent pointer-events-none" />
        </section>
    )
}

export default Hero
