import { motion } from 'framer-motion'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

interface TrustTranslation {
    title: string
    subtitle: string
    stats: { value: string; label: string; icon: string }[]
    partners: string
}

const translations: Record<Language, TrustTranslation> = {
    en: {
        title: 'Why Are 500+ Businesses Switching to Us?',
        subtitle: 'Because their competitors already did. Don\'t be the last one.',
        stats: [
            { value: '500+', label: 'Happy Clients', icon: '👥' },
            { value: '0', label: 'Missed Messages', icon: '🎯' },
            { value: '3 sec', label: 'Average Response Time', icon: '⚡' },
            { value: '24/7', label: 'Always Online', icon: '🤖' }
        ],
        partners: 'Trusted by businesses that refuse to lose'
    },
    ar: {
        title: 'ليش +500 شركة انتقلوا لنا؟',
        subtitle: 'لأن منافسيهم سبقوهم. لا تكون آخر واحد.',
        stats: [
            { value: '+٥٠٠', label: 'عميل سعيد', icon: '👥' },
            { value: '٠', label: 'رسائل ضائعة', icon: '🎯' },
            { value: '٣ ث', label: 'متوسط وقت الرد', icon: '⚡' },
            { value: '٢٤/٧', label: 'متصل دائماً', icon: '🤖' }
        ],
        partners: 'موثوق من شركات ترفض الخسارة'
    },
    de: {
        title: 'Vertraut von Branchenführern',
        subtitle: 'Schließen Sie sich 500+ Unternehmen an, die ihre Abläufe mit unseren KI-Lösungen transformiert haben',
        stats: [
            { value: '500+', label: 'Zufriedene Kunden', icon: '👥' },
            { value: '10M+', label: 'Verarbeitete Nachrichten', icon: '💬' },
            { value: '99,9%', label: 'Garantierte Verfügbarkeit', icon: '⚡' },
            { value: '24/7', label: 'KI schläft nie', icon: '🤖' }
        ],
        partners: 'Unternehmen weltweit unterstützen'
    },
    fr: {
        title: 'Approuvé par les leaders du secteur',
        subtitle: 'Rejoignez plus de 500 entreprises qui ont transformé leurs opérations avec nos solutions IA',
        stats: [
            { value: '500+', label: 'Clients satisfaits', icon: '👥' },
            { value: '10M+', label: 'Messages traités', icon: '💬' },
            { value: '99,9%', label: 'Disponibilité garantie', icon: '⚡' },
            { value: '24/7', label: "L'IA ne dort jamais", icon: '🤖' }
        ],
        partners: 'Au service des entreprises du monde entier'
    },
    it: {
        title: 'Fiducia dai leader del settore',
        subtitle: 'Unisciti a oltre 500 aziende che hanno trasformato le loro operazioni con le nostre soluzioni IA',
        stats: [
            { value: '500+', label: 'Clienti soddisfatti', icon: '👥' },
            { value: '10M+', label: 'Messaggi elaborati', icon: '💬' },
            { value: '99,9%', label: 'Disponibilità garantita', icon: '⚡' },
            { value: '24/7', label: "L'IA non dorme mai", icon: '🤖' }
        ],
        partners: 'Al servizio delle aziende in tutto il mondo'
    },
    hi: {
        title: 'उद्योग के नेताओं द्वारा विश्वसनीय',
        subtitle: '500+ व्यवसायों में शामिल हों जिन्होंने हमारे AI समाधानों से अपने संचालन को बदल दिया',
        stats: [
            { value: '500+', label: 'खुश ग्राहक', icon: '👥' },
            { value: '10M+', label: 'संसाधित संदेश', icon: '💬' },
            { value: '99.9%', label: 'गारंटीड अपटाइम', icon: '⚡' },
            { value: '24/7', label: 'AI कभी नहीं सोता', icon: '🤖' }
        ],
        partners: 'दुनिया भर में व्यवसायों को शक्ति प्रदान करना'
    },
    ms: {
        title: 'Dipercayai oleh Pemimpin Industri',
        subtitle: 'Sertai 500+ perniagaan yang mentransformasikan operasi mereka dengan penyelesaian AI kami',
        stats: [
            { value: '500+', label: 'Pelanggan Gembira', icon: '👥' },
            { value: '10M+', label: 'Mesej Diproses', icon: '💬' },
            { value: '99.9%', label: 'Masa Operasi Dijamin', icon: '⚡' },
            { value: '24/7', label: 'AI Tidak Pernah Tidur', icon: '🤖' }
        ],
        partners: 'Memperkasakan perniagaan di seluruh dunia'
    }
}

interface TrustBadgesProps {
    lang: string
}

const TrustBadges = ({ lang }: TrustBadgesProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'

    const partnerLogos = [
        { name: 'Meta', icon: '◉' },
        { name: 'WhatsApp', icon: '💬' },
        { name: 'Instagram', icon: '📸' },
        { name: 'OpenAI', icon: '🤖' },
        { name: 'Vercel', icon: '▲' },
        { name: 'AWS', icon: '☁️' },
    ]

    return (
        <section 
            dir={isRtl ? 'rtl' : 'ltr'}
            className="relative py-20 bg-[#030014] overflow-hidden"
        >
            {/* Subtle gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats Grid */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16"
                >
                    {t.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="glass-card-ai p-6 text-center h-full">
                                {/* Icon */}
                                <div className="text-3xl mb-3">{stat.icon}</div>
                                
                                {/* Value */}
                                <div className="stat-number text-3xl md:text-4xl font-bold mb-2">
                                    {stat.value}
                                </div>
                                
                                {/* Label */}
                                <div className="text-sm text-white/50 font-medium">
                                    {stat.label}
                                </div>

                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Partner Logos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sm text-white/40 uppercase tracking-widest mb-8">
                        {t.partners}
                    </p>

                    {/* Logo Scroll Container */}
                    <div className="relative overflow-hidden">
                        {/* Fade edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030014] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030014] to-transparent z-10 pointer-events-none" />

                        {/* Scrolling logos */}
                        <div className="flex gap-12 animate-scroll">
                            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 text-white/30 hover:text-white/60 transition-colors duration-300 shrink-0"
                                >
                                    <span className="text-2xl">{partner.icon}</span>
                                    <span className="text-lg font-semibold whitespace-nowrap">{partner.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            {/* CSS for infinite scroll animation */}
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}

export default TrustBadges
