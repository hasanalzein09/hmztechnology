'use client';
import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
import NeuralGalaxy3D from './NeuralGalaxy3D'

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
    marquee: string[]
}

// Same copy as Hero.tsx — kept in sync intentionally.
const heroTranslations: Record<Language, HeroTranslation> = {
    en: {
        badge: '🎯 100% Custom AI Solutions - No Templates',
        titleLine1: 'We Build AI',
        titleLine2: 'That Fits',
        titleLine3: 'YOUR Business',
        subtitle: 'Not templates. Not one-size-fits-all. We design custom AI solutions specifically for YOUR unique challenges. Tell us your problem, we\'ll build the solution.',
        cta1: 'Get My Custom Strategy',
        cta2: 'See Custom Projects',
        stats: [
            { value: '100%', label: 'Custom Built' },
            { value: '500+', label: 'Unique Solutions' },
            { value: '3 sec', label: 'AI Response' },
            { value: '0', label: 'Templates Used' }
        ],
        scrollText: 'See what we build',
        marquee: ['WhatsApp AI Chatbots', 'AI Voice Agents', 'RAG Assistants', 'AI SDR Agents', 'GEO', 'Private LLM', 'AI Training', 'Multi-Agent Systems', 'MCP Integrations', 'AI Automations']
    },
    ar: {
        badge: '🎯 حلول AI مخصصة 100% - بدون قوالب',
        titleLine1: 'نبني AI',
        titleLine2: 'يناسب',
        titleLine3: 'عملك أنت',
        subtitle: 'مش قوالب. مش حل واحد للكل. نصمم حلول AI مخصصة خصيصاً لتحدياتك الفريدة. احكيلنا مشكلتك، رح نبني الحل.',
        cta1: 'احصل على استراتيجيتي المخصصة',
        cta2: 'شوف مشاريعنا المخصصة',
        stats: [
            { value: '١٠٠٪', label: 'مخصص بالكامل' },
            { value: '+٥٠٠', label: 'حل فريد' },
            { value: '٣ ث', label: 'رد AI' },
            { value: '٠', label: 'قوالب مستخدمة' }
        ],
        scrollText: 'شوف شو منبني',
        marquee: ['روبوتات واتساب ذكية', 'وكلاء صوت AI', 'مساعدات RAG', 'وكلاء مبيعات AI', 'تحسين GEO', 'نماذج خاصة', 'تدريب AI', 'أنظمة متعددة الوكلاء', 'تكاملات MCP', 'أتمتة الأعمال']
    },
    de: {
        badge: '🎯 100% Maßgeschneiderte KI-Lösungen',
        titleLine1: 'Wir bauen KI',
        titleLine2: 'die zu IHREM',
        titleLine3: 'Geschäft passt',
        subtitle: 'Keine Vorlagen. Keine Einheitslösungen. Wir entwickeln maßgeschneiderte KI-Lösungen speziell für IHRE einzigartigen Herausforderungen.',
        cta1: 'Meine Strategie anfordern',
        cta2: 'Projekte ansehen',
        stats: [
            { value: '100%', label: 'Maßgeschneidert' },
            { value: '500+', label: 'Einzigartige Lösungen' },
            { value: '3 Sek', label: 'KI-Antwort' },
            { value: '0', label: 'Vorlagen' }
        ],
        scrollText: 'Sehen Sie, was wir bauen',
        marquee: ['WhatsApp KI-Chatbots', 'KI-Sprachagenten', 'RAG-Assistenten', 'KI-SDR-Agenten', 'GEO', 'Private LLMs', 'KI-Training', 'Multi-Agenten-Systeme', 'MCP-Integrationen', 'KI-Automatisierung']
    },
    fr: {
        badge: '🎯 Solutions IA 100% Sur Mesure',
        titleLine1: 'Nous créons l\'IA',
        titleLine2: 'adaptée à',
        titleLine3: 'VOTRE Entreprise',
        subtitle: "Pas de modèles. Pas de solution unique. Nous concevons des solutions IA personnalisées spécifiquement pour VOS défis uniques.",
        cta1: 'Obtenir ma stratégie',
        cta2: 'Voir nos projets',
        stats: [
            { value: '100%', label: 'Sur mesure' },
            { value: '500+', label: 'Solutions uniques' },
            { value: '3 sec', label: 'Réponse IA' },
            { value: '0', label: 'Modèles' }
        ],
        scrollText: 'Découvrez nos créations',
        marquee: ['Chatbots IA WhatsApp', 'Agents vocaux IA', 'Assistants RAG', 'Agents SDR IA', 'GEO', 'LLM privés', 'Formation IA', 'Systèmes multi-agents', 'Intégrations MCP', 'Automatisations IA']
    },
    it: {
        badge: '🎯 Soluzioni AI 100% Personalizzate',
        titleLine1: 'Costruiamo AI',
        titleLine2: 'su misura per',
        titleLine3: 'la TUA Azienda',
        subtitle: 'Niente modelli. Niente soluzioni standard. Progettiamo soluzioni AI personalizzate specificamente per le TUE sfide uniche.',
        cta1: 'Ottieni la mia strategia',
        cta2: 'Vedi i progetti',
        stats: [
            { value: '100%', label: 'Personalizzato' },
            { value: '500+', label: 'Soluzioni uniche' },
            { value: '3 sec', label: 'Risposta AI' },
            { value: '0', label: 'Modelli' }
        ],
        scrollText: 'Scopri cosa costruiamo',
        marquee: ['Chatbot AI WhatsApp', 'Agenti vocali AI', 'Assistenti RAG', 'Agenti SDR AI', 'GEO', 'LLM privati', 'Formazione AI', 'Sistemi multi-agente', 'Integrazioni MCP', 'Automazioni AI']
    },
    hi: {
        badge: '🎯 100% कस्टम AI समाधान',
        titleLine1: 'हम AI बनाते हैं',
        titleLine2: 'जो आपके',
        titleLine3: 'बिज़नेस के लिए फिट हो',
        subtitle: 'कोई टेम्पलेट नहीं। कोई एक-आकार-सबके-लिए नहीं। हम आपकी अनूठी चुनौतियों के लिए विशेष रूप से कस्टम AI समाधान डिज़ाइन करते हैं।',
        cta1: 'मेरी रणनीति पाएं',
        cta2: 'प्रोजेक्ट देखें',
        stats: [
            { value: '100%', label: 'कस्टम निर्मित' },
            { value: '500+', label: 'अद्वितीय समाधान' },
            { value: '3 सेक', label: 'AI प्रतिक्रिया' },
            { value: '0', label: 'टेम्पलेट' }
        ],
        scrollText: 'देखें हम क्या बनाते हैं',
        marquee: ['WhatsApp AI चैटबॉट', 'AI वॉइस एजेंट', 'RAG असिस्टेंट', 'AI SDR एजेंट', 'GEO', 'प्राइवेट LLM', 'AI ट्रेनिंग', 'मल्टी-एजेंट सिस्टम', 'MCP इंटीग्रेशन', 'AI ऑटोमेशन']
    },
    ms: {
        badge: '🎯 Penyelesaian AI 100% Tersuai',
        titleLine1: 'Kami membina AI',
        titleLine2: 'yang sesuai untuk',
        titleLine3: 'Perniagaan ANDA',
        subtitle: 'Tiada templat. Tiada penyelesaian satu-saiz-untuk-semua. Kami mereka penyelesaian AI tersuai khusus untuk cabaran unik ANDA.',
        cta1: 'Dapatkan strategi saya',
        cta2: 'Lihat projek',
        stats: [
            { value: '100%', label: 'Dibina khas' },
            { value: '500+', label: 'Penyelesaian unik' },
            { value: '3 saat', label: 'Respons AI' },
            { value: '0', label: 'Templat' }
        ],
        scrollText: 'Lihat apa yang kami bina',
        marquee: ['Chatbot AI WhatsApp', 'Ejen Suara AI', 'Pembantu RAG', 'Ejen SDR AI', 'GEO', 'LLM Peribadi', 'Latihan AI', 'Sistem Multi-Ejen', 'Integrasi MCP', 'Automasi AI']
    }
}

/** Word-by-word reveal — words stay in SSR HTML (crawler-safe), animation is pure transform/opacity. */
const StaggeredWords = ({ text, className, delay }: { text: string; className?: string; delay: number }) => (
    <span className={className}>
        {text.split(' ').map((word, i) => (
            <motion.span
                key={i}
                className="inline-block will-change-transform"
                initial={{ opacity: 0, y: 24, rotateX: -45, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.55, delay: delay + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
                {word}{'\u00A0'}
            </motion.span>
        ))}
    </span>
)

/** Count-up for ASCII-digit stat values; other scripts render the final value statically. */
const CountUp = ({ value, startDelay }: { value: string; startDelay: number }) => {
    const ref = useRef<HTMLSpanElement>(null)
    const match = value.match(/^(\d+)(.*)$/)

    useEffect(() => {
        if (!match || !ref.current) return
        const target = parseInt(match[1], 10)
        const suffix = match[2]
        let raf = 0
        const timeout = setTimeout(() => {
            const start = performance.now()
            const duration = 1600
            const step = (now: number) => {
                const p = Math.min((now - start) / duration, 1)
                const eased = 1 - Math.pow(1 - p, 3)
                if (ref.current) ref.current.textContent = `${Math.round(target * eased)}${suffix}`
                if (p < 1) raf = requestAnimationFrame(step)
            }
            raf = requestAnimationFrame(step)
        }, startDelay * 1000)
        return () => { clearTimeout(timeout); cancelAnimationFrame(raf) }
    }, [value, startDelay, match])

    return <span ref={ref}>{value}</span>
}

/** Infinite keyword marquee — direction-aware for RTL. */
const KeywordMarquee = ({ items, isRtl }: { items: string[]; isRtl: boolean }) => (
    <div className="relative w-full max-w-4xl overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
            className="flex gap-10 whitespace-nowrap w-max"
            animate={{ x: isRtl ? ['-50%', '0%'] : ['0%', '-50%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
            {[...items, ...items].map((keyword, i) => (
                <span key={i} className="flex items-center gap-3 text-sm font-medium text-white/35">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                    {keyword}
                </span>
            ))}
        </motion.div>
    </div>
)

interface Hero3DProps {
    lang: string
}

/**
 * Hero3D — hero copy is fully SSR'd (every word in initial HTML for crawlers).
 * The 3D Neural Galaxy is decorative: three.js loads lazily post-hydration.
 */
const Hero3D = ({ lang }: Hero3DProps) => {
    const language = (heroTranslations[lang as Language] ? lang : 'en') as Language
    const t = heroTranslations[language]
    const isRtl = language === 'ar'

    const getContactLink = useCallback(() => {
        return lang === 'en' ? '/contact' : `/${lang}/contact`
    }, [lang])

    const getProjectsLink = useCallback(() => {
        return lang === 'en' ? '/projects' : `/${lang}/projects`
    }, [lang])

    return (
        <section
            dir={isRtl ? 'rtl' : 'ltr'}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030014]"
        >
            {/* 3D Neural Galaxy Background (decorative, lazy three.js) */}
            <NeuralGalaxy3D />

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

                    {/* Main Headline — staggered word reveal */}
                    <div className="mb-8">
                        <h1 className="heading-ai text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight [perspective:800px]">
                            <StaggeredWords text={t.titleLine1} className="block text-white mb-2" delay={0.35} />
                            <StaggeredWords text={t.titleLine2} className="block text-white/80 mb-2" delay={0.7} />
                            <span className="block text-gradient-ai">
                                <StaggeredWords text={t.titleLine3} delay={1.05} />
                                <motion.span
                                    className="inline-block text-cyan-400"
                                    animate={{ opacity: [1, 0.2, 1] }}
                                    transition={{ duration: 1.1, repeat: Infinity }}
                                >
                                    |
                                </motion.span>
                            </span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="subheading-ai text-lg md:text-xl lg:text-2xl max-w-3xl mb-12 text-white/60 leading-relaxed"
                    >
                        {t.subtitle}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="flex flex-col sm:flex-row gap-4 mb-14"
                    >
                        <motion.a
                            href={getContactLink()}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white text-lg overflow-hidden shadow-lg shadow-cyan-500/25"
                        >
                            <span className="relative z-10 flex items-center gap-2 justify-center">
                                {t.cta1}
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            {/* Shine sweep */}
                            <motion.span
                                className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ x: ['-200%', '250%'] }}
                                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
                            />
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

                    {/* Keyword Marquee */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="w-full flex justify-center mb-10"
                    >
                        <KeywordMarquee items={t.marquee} isRtl={isRtl} />
                    </motion.div>

                    {/* Stats with count-up */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
                    >
                        {t.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 2.1 + index * 0.12 }}
                                className="text-center"
                            >
                                <div className="stat-number text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                                    <CountUp value={stat.value} startDelay={2.2 + index * 0.12} />
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
                transition={{ delay: 2.6, duration: 1 }}
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

export default Hero3D
