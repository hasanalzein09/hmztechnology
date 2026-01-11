import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

/**
 * 🌍 PREMIUM HERO COMPONENT
 * Features: Mesh gradients, 3D Parallax, Industrial Tech Typography
 */

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms';

const heroTranslations: Record<Language, {
    badge: string
    title1: string
    title2: string
    subtitle: string
    highlight: string
    fear: string
    platforms: string
    cta1: string
    cta2: string
    trust1: string
    trust2: string
    trust3: string
    feature1Title: string
    feature1Desc: string
    feature2Title: string
    feature2Desc: string
    feature3Title: string
    feature3Desc: string
    urgency: string
}> = {
    en: {
        badge: 'Top-Tier AI Agency',
        title1: 'The AI Partner',
        title2: 'That Scales ROI',
        subtitle: 'Enterprise-grade AI solutions that transform complex workflows into ',
        highlight: 'pure profit',
        fear: '⚠️ The Cost of Inaction: Every minute without automation is a missed opportunity. Your competitors are already evolving with AI.',
        platforms: 'WhatsApp • Instagram • Messenger • High-Octane Custom Architectures 🚀',
        cta1: '💬 Get Free Analysis',
        cta2: '📅 Book Executive Demo',
        trust1: '500+ Global Partner Successes',
        trust2: 'Top Rated IA Agency',
        trust3: '30-Day Guarantee',
        feature1Title: 'Proprietary IP',
        feature1Desc: 'You own the code, forever',
        feature2Title: 'Rapid Deployment',
        feature2Desc: 'ROI-focused in 7 days',
        feature3Title: '24/7 Monitoring',
        feature3Desc: 'Industrial-grade reliability',
        urgency: '🔥 EXCLUSIVE: 3 Spots Left for Jan 2026 Batch — Claim Your AI Strategy Session'
    },
    ar: {
        badge: 'وكالة ذكاء اصطناعي رائدة',
        title1: 'شريكك الذكي',
        title2: 'الذي يضاعف الأرباح',
        subtitle: 'حلول ذكاء اصطناعي للمؤسسات تُحوّل سير العمل المعقد إلى ',
        highlight: 'أرباح صافية',
        fear: '⚠️ تكلفة الانتظار: كل دقيقة بدون أتمتة هي فرصة ضائعة. منافسوك يتطورون بالفعل باستخدام الذكاء الاصطناعي.',
        platforms: 'واتساب • انستغرام • ماسنجر • معماريات مخصصة عالية الأداء 🚀',
        cta1: '💬 احصل على تحليل مجاني',
        cta2: '📅 احجز عرض تنفيذي',
        trust1: '+500 نجاح عالمي للشركاء',
        trust2: 'أفضل وكالة ذكاء اصطناعي',
        trust3: 'ضمان لمدة 30 يوماً',
        feature1Title: 'ملكية فكرية كاملة',
        feature1Desc: 'أنت تملك الكود للأبد',
        feature2Title: 'انتشار سريع',
        feature2Desc: 'نتائج ملموسة خلال 7 أيام',
        feature3Title: 'مراقبة 24/7',
        feature3Desc: 'اعتمادية على مستوى صناعي',
        urgency: '🔥 حصري: بقي 3 مقاعد لدفعة يناير — احجز جلستك الاستراتيجية مجاناً'
    },
    // ... other languages can be updated similarly if needed, but keeping the English impact for now
    de: {
        badge: 'Weltweiter Marktführer für KI-Lösungen',
        title1: 'Architektur der Zukunft der',
        title2: 'Autonomen Intelligenz',
        subtitle: 'KI-Partnerschaften für Unternehmen, entwickelt für globale Skalierbarkeit. Menschliche Vision, unterstützt durch maschinelle Ausführung.',
        highlight: 'Autonomen Intelligenz',
        fear: '⚠️ Ohne Automatisierung: Sie verlieren 67% der Kunden, die keine sofortige Antwort erhalten. Ihre Wettbewerber automatisieren bereits.',
        platforms: 'Maßgeschneiderte Agenten • Zero-Latency Infrastruktur • ROI-Garantiert 🚀',
        cta1: '💬 Entwicklung starten',
        cta2: '📅 Kostenlose Demo buchen',
        trust1: '500+ Unternehmen vertrauen uns',
        trust2: 'Bewertung 4.9/5',
        trust3: '30-Tage-Garantie',
        feature1Title: 'Vollständiges Eigentum',
        feature1Desc: '100% Ihres, für immer',
        feature2Title: 'Sofortige Einrichtung',
        feature2Desc: 'In 48 Stunden live',
        feature3Title: '24/7 Support',
        feature3Desc: 'Immer für Sie da',
        urgency: '🔥 ZEITBEGRENZT: 25% Rabatt + Gratis Strategiegespräch — Nur noch 5 Plätze!'
    },
    fr: {
        badge: 'Leader mondial des solutions IA',
        title1: 'Architecturer l\'Avenir de l\'',
        title2: 'Intelligence Autonome',
        subtitle: 'Partenariats d\'IA de niveau entreprise conçus pour une évolutivité mondiale. Vision humaine propulsée par l\'exécution machine.',
        highlight: 'Intelligence Autonome',
        fear: '⚠️ Sans automatisation: Vous perdez 67% des clients qui n\'obtiennent pas de réponse immédiate. Vos concurrents automatisent déjà.',
        platforms: 'Agents sur Mesure • Infrastructure Zéro Latence • ROI Garanti 🚀',
        cta1: '💬 Initier le Développement',
        cta2: '📅 Réserver une démo gratuite',
        trust1: '500+ entreprises nous font confiance',
        trust2: 'Note 4.9/5',
        trust3: 'Garantie 30 jours',
        feature1Title: 'Propriété complète',
        feature1Desc: '100% à vous, pour toujours',
        feature2Title: 'Configuration instantanée',
        feature2Desc: 'En ligne en 48 heures',
        feature3Title: 'Support 24/7',
        feature3Desc: 'Toujours là pour vous',
        urgency: '🔥 OFFRE LIMITÉE: -25% + Session stratégique gratuite — Plus que 5 places!'
    },
    it: {
        badge: 'Leader mondiale nelle soluzioni IA',
        title1: 'Architettare il Futuro dell\'',
        title2: 'Intelligenza Autonoma',
        subtitle: 'Partnership IA di livello enterprise progettate per la scalabilità globale. Visione umana potenziata dall\'esecuzione machine.',
        highlight: 'Intelligenza Autonoma',
        fear: '⚠️ Senza automazione: Stai perdendo il 67% dei clienti che non ricevono risposta immediata. I tuoi concorrenti stanno già automatizzando.',
        platforms: 'Agenti su Misura • Infrastruttura Zero Latenza • ROI Garantito 🚀',
        cta1: '💬 Inizia lo Sviluppo',
        cta2: '📅 Prenota demo gratuita',
        trust1: '500+ aziende ci scelgono',
        trust2: 'Valutazione 4.9/5',
        trust3: 'Garanzia 30 giorni',
        feature1Title: 'Proprietà completa',
        feature1Desc: '100% tuo, per sempre',
        feature2Title: 'Configurazione istantanea',
        feature2Desc: 'Online in 48 ore',
        feature3Title: 'Supporto 24/7',
        feature3Desc: 'Sempre qui per te',
        urgency: '🔥 OFFERTA LIMITATA: -25% + Sessione strategica gratuita — Solo 5 posti!'
    },
    hi: {
        badge: 'दुनिया भर में AI समाधान लीडر',
        title1: 'AI जो',
        title2: 'पैसा छापता है',
        subtitle: 'कस्टम AI चैटबॉट्स जो सिर्फ चैट नहीं करते—',
        highlight: 'शुद्ध लाभ',
        fear: '⚠️ ऑटोमेशन के बिना: आप 67% ग्राहकों को खो रहे हैं जिन्हें तुरंत जवाब नहीं मिलता।',
        platforms: 'WhatsApp • Instagram • Messenger • इंजीनियरों द्वारा निर्मित, टेम्प्लेट नहीं 🚀',
        cta1: '💬 WhatsApp पर चैट करें',
        cta2: '📅 मुफ्त डेमो बुक करें',
        trust1: '500+ व्यवसाय हम पर भरोसा करते हैं',
        trust2: '4.9/5 रेटिंग',
        trust3: '30-दिन की गारंटी',
        feature1Title: 'पूर्ण स्वामित्व',
        feature1Desc: '100% आपका, हमेशा के लिए',
        feature2Title: 'तत्काल सेटअप',
        feature2Desc: '48 घंटे में लाइव',
        feature3Title: '24/7 समर्थन',
        feature3Desc: 'हमेशा आपके लिए यहाँ',
        urgency: '🔥 सीमित ऑफर: 25% छूट + मुफ्त रणनीति सत्र — केवल 5 स्थान शेष!'
    },
    ms: {
        badge: 'Pemimpin Penyelesaian AI Seluruh Dunia',
        title1: 'AI Yang',
        title2: 'Mencetak Wang',
        subtitle: 'Chatbot AI tersuai yang bukan sekadar bersembang—',
        highlight: 'keuntungan bersih',
        fear: '⚠️ Tanpa automasi: Anda kehilangan 67% pelanggan yang tidak mendapat balasan segera.',
        platforms: 'WhatsApp • Instagram • Messenger • Dibina oleh jurutera, bukan templat 🚀',
        cta1: '💬 Sembang di WhatsApp',
        cta2: '📅 Tempah Demo Percuma',
        trust1: '500+ Perniagaan Mempercayai Kami',
        trust2: 'Penilaian 4.9/5',
        trust3: 'Jaminan 30 Hari',
        feature1Title: 'Pemilikan Penuh',
        feature1Desc: '100% milik anda, selamanya',
        feature2Title: 'Persediaan Segera',
        feature2Desc: 'Langsung dalam 48 jam',
        feature3Title: 'Sokongan 24/7',
        feature3Desc: 'Sentiasa di sini untuk anda',
        urgency: '🔥 TAWARAN TERHAD: Diskaun 25% + Sesi Strategi Percuma — Hanya 5 tempat tinggal!'
    }
}

interface HeroProps {
    lang: string;
}

const Hero = ({ lang }: HeroProps) => {
    const language = (heroTranslations[lang as Language] ? lang : 'en') as Language;
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const t = heroTranslations[language];
    const isRtl = language === 'ar'

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 60,
                y: (e.clientY - window.innerHeight / 2) / 60,
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    if (!mounted) return <div className="min-h-screen bg-slate-950" />;

    return (
        <section
            ref={containerRef}
            dir={isRtl ? 'rtl' : 'ltr'}
            className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-slate-950"
        >
            {/* Dynamic Mesh Gradients */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        rotate: [0, 45, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -right-[10%] w-[80vw] h-[80vw] bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-transparent rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                        rotate: [0, -45, 0],
                        scale: [1.1, 1, 1.1]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-[10%] -left-[10%] w-[70vw] h-[70vw] bg-gradient-to-tr from-purple-600/20 via-pink-600/10 to-transparent rounded-full blur-[120px]"
                />
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
            </div>

            {/* Main Scene Container */}
            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 max-w-7xl mx-auto px-6"
            >
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-xs font-medium tracking-widest text-blue-200 uppercase">{t.badge}</span>
                        </div>
                    </motion.div>

                    {/* Headline with 3D Parallax */}
                    <motion.div
                        style={{ x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }}
                        className="relative mb-8"
                    >
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter">
                            <span className="block opacity-90">{t.title1}</span>
                            <span className="block text-gradient py-2">
                                {t.title2}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle & Value Prop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-3xl mb-12"
                    >
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                            {t.subtitle}
                            <span className="text-white font-bold italic underline decoration-blue-500/50"> {t.highlight}</span>.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500 font-mono tracking-widest uppercase">
                            {t.platforms}
                        </div>
                    </motion.div>

                    {/* CTA Interaction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 mb-16"
                    >
                        <motion.a
                            href="https://wa.me/96170106083"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-10 py-5 bg-white text-slate-950 rounded-full font-bold text-lg overflow-hidden"
                        >
                            <span className="relative z-10">{t.cta1}</span>
                            <motion.div
                                className="absolute inset-0 bg-blue-400"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '0%' }}
                                transition={{ ease: "circOut" }}
                            />
                        </motion.a>

                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05, border: '1px solid rgba(255,255,255,0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 border border-white/10 rounded-full text-white font-bold text-lg backdrop-blur-sm transition-colors"
                        >
                            {t.cta2}
                        </motion.a>
                    </motion.div>

                    {/* Industrial Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                        {[
                            { title: t.feature1Title, desc: t.feature1Desc, icon: "🛡️" },
                            { title: t.feature2Title, desc: t.feature2Desc, icon: "⚡" },
                            { title: t.feature3Title, desc: t.feature3Desc, icon: "⚙️" }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + (i * 0.1) }}
                                className="p-6 glass-card text-left group hover:bg-white/10 transition-all cursor-default"
                            >
                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Urgency Strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-12 py-3 px-6 bg-blue-500/10 border border-blue-500/20 rounded-full"
                    >
                        <p className="text-blue-200 text-sm font-medium animate-pulse">
                            {t.urgency}
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
