import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, Send, CheckCircle, AlertCircle, Shield, Clock, Sparkles } from 'lucide-react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

const translations: Record<Language, {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    name: string
    email: string
    message: string
    submit: string
    sending: string
    success: string
    error: string
    whatsappCta: string
    emailCta: string
    callCta: string
    orContact: string
    responseTime: string
    trustBadge1: string
    trustBadge2: string
    trustBadge3: string
    customNote: string
}> = {
    en: {
        badge: '🎯 100% Custom Solutions - No Templates',
        title: 'Get Your',
        titleHighlight: 'Custom AI Built',
        subtitle: 'Tell us your challenge. We\'ll design a solution specifically for YOUR business - not a one-size-fits-all template.',
        name: 'Your Name',
        email: 'Best Email',
        message: 'What challenge should your custom AI solve?',
        submit: 'Get My Custom Strategy →',
        sending: 'Creating your custom plan...',
        success: '✓ Got it! We\'re designing your custom solution now.',
        error: 'Failed to send. WhatsApp us: +961 70 106 083',
        whatsappCta: 'WhatsApp (Instant)',
        emailCta: 'Email Us',
        callCta: 'Call Now',
        orContact: 'Or reach us directly:',
        responseTime: '⚡ Custom strategy delivered within 2 hours',
        trustBadge1: 'No templates - 100% custom',
        trustBadge2: 'Free consultation',
        trustBadge3: 'No commitment required',
        customNote: 'Every solution we build is unique to your business'
    },
    ar: {
        badge: '🎯 حلول مخصصة 100% - بدون قوالب',
        title: 'احصل على',
        titleHighlight: 'AI مخصص لك',
        subtitle: 'احكيلنا عن تحديك. رح نصمم حل خصيصاً لعملك - مش قالب جاهز للكل.',
        name: 'اسمك',
        email: 'أفضل إيميل',
        message: 'شو التحدي اللي بدك AI المخصص يحله؟',
        submit: '← احصل على استراتيجيتي المخصصة',
        sending: 'عم نحضر خطتك المخصصة...',
        success: '✓ تم! عم نصمم حلك المخصص هلأ.',
        error: 'فشل الإرسال. واتساب: +961 70 106 083',
        whatsappCta: 'واتساب (فوري)',
        emailCta: 'إيميل',
        callCta: 'اتصل الحين',
        orContact: 'أو تواصل معنا مباشرة:',
        responseTime: '⚡ استراتيجية مخصصة خلال ساعتين',
        trustBadge1: 'بدون قوالب - مخصص 100%',
        trustBadge2: 'استشارة مجانية',
        trustBadge3: 'بدون أي التزام',
        customNote: 'كل حل نبنيه فريد لعملك'
    },
    de: {
        badge: '🎯 100% Maßgeschneiderte Lösungen',
        title: 'Holen Sie sich Ihre',
        titleHighlight: 'Maßgeschneiderte KI',
        subtitle: 'Erzählen Sie uns von Ihrer Herausforderung. Wir entwickeln eine Lösung speziell für IHR Unternehmen.',
        name: 'Ihr Name',
        email: 'E-Mail-Adresse',
        message: 'Welche Herausforderung soll Ihre KI lösen?',
        submit: 'Meine Strategie anfordern →',
        sending: 'Erstelle Ihren Plan...',
        success: '✓ Erhalten! Wir arbeiten an Ihrer Lösung.',
        error: 'Fehler. WhatsApp: +961 70 106 083',
        whatsappCta: 'WhatsApp (Sofort)',
        emailCta: 'E-Mail senden',
        callCta: 'Jetzt anrufen',
        orContact: 'Oder direkt kontaktieren:',
        responseTime: '⚡ Strategie innerhalb von 2 Stunden',
        trustBadge1: 'Keine Vorlagen - 100% individuell',
        trustBadge2: 'Kostenlose Beratung',
        trustBadge3: 'Keine Verpflichtung',
        customNote: 'Jede Lösung ist einzigartig für Ihr Unternehmen'
    },
    fr: {
        badge: '🎯 Solutions 100% Sur Mesure',
        title: 'Obtenez votre',
        titleHighlight: 'IA Personnalisée',
        subtitle: 'Décrivez votre défi. Nous concevrons une solution spécifiquement pour VOTRE entreprise.',
        name: 'Votre nom',
        email: 'Adresse e-mail',
        message: 'Quel défi votre IA personnalisée doit-elle résoudre?',
        submit: 'Obtenir ma stratégie →',
        sending: 'Création de votre plan...',
        success: '✓ Reçu! Nous travaillons sur votre solution.',
        error: 'Échec. WhatsApp: +961 70 106 083',
        whatsappCta: 'WhatsApp (Instant)',
        emailCta: 'Envoyer un e-mail',
        callCta: 'Appeler',
        orContact: 'Ou contactez-nous directement:',
        responseTime: '⚡ Stratégie livrée sous 2 heures',
        trustBadge1: 'Pas de modèles - 100% sur mesure',
        trustBadge2: 'Consultation gratuite',
        trustBadge3: 'Sans engagement',
        customNote: 'Chaque solution est unique à votre entreprise'
    },
    it: {
        badge: '🎯 Soluzioni 100% Personalizzate',
        title: 'Ottieni la tua',
        titleHighlight: 'AI Personalizzata',
        subtitle: 'Descrivi la tua sfida. Progetteremo una soluzione specificamente per la TUA azienda.',
        name: 'Il tuo nome',
        email: 'Indirizzo email',
        message: 'Quale sfida deve risolvere la tua AI personalizzata?',
        submit: 'Ottieni la mia strategia →',
        sending: 'Creazione del tuo piano...',
        success: '✓ Ricevuto! Stiamo lavorando alla tua soluzione.',
        error: 'Fallito. WhatsApp: +961 70 106 083',
        whatsappCta: 'WhatsApp (Istantaneo)',
        emailCta: 'Invia email',
        callCta: 'Chiama ora',
        orContact: 'O contattaci direttamente:',
        responseTime: '⚡ Strategia consegnata entro 2 ore',
        trustBadge1: 'Niente modelli - 100% personalizzato',
        trustBadge2: 'Consulenza gratuita',
        trustBadge3: 'Nessun impegno',
        customNote: 'Ogni soluzione è unica per la tua azienda'
    },
    hi: {
        badge: '🎯 100% कस्टम समाधान',
        title: 'अपना',
        titleHighlight: 'कस्टम AI पाएं',
        subtitle: 'हमें अपनी चुनौती बताएं। हम आपके व्यवसाय के लिए विशेष समाधान डिज़ाइन करेंगे।',
        name: 'आपका नाम',
        email: 'ईमेल पता',
        message: 'आपके कस्टम AI को कौन सी चुनौती हल करनी चाहिए?',
        submit: 'मेरी रणनीति पाएं →',
        sending: 'आपकी योजना बना रहे हैं...',
        success: '✓ मिल गया! हम आपके समाधान पर काम कर रहे हैं।',
        error: 'विफल। WhatsApp: +961 70 106 083',
        whatsappCta: 'WhatsApp (तुरंत)',
        emailCta: 'ईमेल भेजें',
        callCta: 'अभी कॉल करें',
        orContact: 'या सीधे संपर्क करें:',
        responseTime: '⚡ 2 घंटे में कस्टम रणनीति',
        trustBadge1: 'कोई टेम्पलेट नहीं - 100% कस्टम',
        trustBadge2: 'मुफ्त परामर्श',
        trustBadge3: 'कोई प्रतिबद्धता नहीं',
        customNote: 'हर समाधान आपके व्यवसाय के लिए अद्वितीय है'
    },
    ms: {
        badge: '🎯 Penyelesaian 100% Tersuai',
        title: 'Dapatkan',
        titleHighlight: 'AI Tersuai Anda',
        subtitle: 'Beritahu kami cabaran anda. Kami akan mereka penyelesaian khusus untuk perniagaan ANDA.',
        name: 'Nama Anda',
        email: 'Alamat E-mel',
        message: 'Apakah cabaran yang perlu AI tersuai anda selesaikan?',
        submit: 'Dapatkan strategi saya →',
        sending: 'Mencipta pelan anda...',
        success: '✓ Diterima! Kami sedang mengusahakan penyelesaian anda.',
        error: 'Gagal. WhatsApp: +961 70 106 083',
        whatsappCta: 'WhatsApp (Segera)',
        emailCta: 'Hantar E-mel',
        callCta: 'Hubungi Sekarang',
        orContact: 'Atau hubungi kami terus:',
        responseTime: '⚡ Strategi tersuai dalam 2 jam',
        trustBadge1: 'Tiada templat - 100% tersuai',
        trustBadge2: 'Perundingan percuma',
        trustBadge3: 'Tiada komitmen',
        customNote: 'Setiap penyelesaian unik untuk perniagaan anda'
    }
}

interface ContactFormProps {
    lang: string
}

const ContactForm = ({ lang }: ContactFormProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'

    // SIMPLIFIED: Only 3 fields now
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    service: 'Custom AI Solution',
                    _subject: `Custom AI Request - ${formData.name}`,
                    language: lang,
                    page: typeof window !== 'undefined' ? window.location.pathname : ''
                })
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <section dir={isRtl ? 'rtl' : 'ltr'} className="relative py-24 md:py-32 bg-[#030014] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
            </div>

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-8">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium text-cyan-300">{t.badge}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {t.title}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            {t.titleHighlight}
                        </span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">{t.subtitle}</p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Form - SIMPLIFIED to 3 fields */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="glass-card-ai p-8 space-y-6">
                            {/* Trust Badges Above Form */}
                            <div className="flex flex-wrap justify-center gap-4 mb-6 pb-6 border-b border-white/10">
                                <div className="flex items-center gap-2 text-sm text-white/60">
                                    <Shield className="w-4 h-4 text-cyan-400" />
                                    {t.trustBadge1}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-white/60">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    {t.trustBadge2}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-white/60">
                                    <Clock className="w-4 h-4 text-purple-400" />
                                    {t.trustBadge3}
                                </div>
                            </div>

                            {/* SIMPLIFIED: Just 3 fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        required
                                        placeholder={t.name}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        required
                                        placeholder={t.email}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder={t.message}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                                />
                            </div>

                            {status === 'success' && (
                                <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-emerald-400">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    {t.success}
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    {t.error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50"
                            >
                                {status === 'sending' ? t.sending : t.submit}
                                <Send className="w-5 h-5" />
                            </button>

                            <p className="text-center text-white/40 text-sm">{t.responseTime}</p>

                            {/* Custom Note */}
                            <p className="text-center text-cyan-400/60 text-xs italic">
                                {t.customNote}
                            </p>
                        </form>
                    </motion.div>

                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <p className="text-white/60 text-sm uppercase tracking-wider mb-4">{t.orContact}</p>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/96170106083"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 glass-card-ai p-6 hover:border-green-500/30 transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <div className="font-semibold text-white group-hover:text-green-400 transition-colors">{t.whatsappCta}</div>
                                <div className="text-sm text-white/50">+961 70 106 083</div>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:sales@hmz.technology"
                            className="group flex items-center gap-4 glass-card-ai p-6 hover:border-blue-500/30 transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                                <Mail className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">{t.emailCta}</div>
                                <div className="text-sm text-white/50">sales@hmz.technology</div>
                            </div>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+96170106083"
                            className="group flex items-center gap-4 glass-card-ai p-6 hover:border-purple-500/30 transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform">
                                <Phone className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <div className="font-semibold text-white group-hover:text-purple-400 transition-colors">{t.callCta}</div>
                                <div className="text-sm text-white/50">+961 70 106 083</div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
