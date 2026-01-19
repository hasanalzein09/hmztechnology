import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

const translations: Record<Language, {
    greeting: string
    subtitle: string
    placeholder: string
    send: string
    online: string
    responseTime: string
}> = {
    en: {
        greeting: "Hi! Need a custom AI solution?",
        subtitle: "We build AI that fits YOUR business, not templates.",
        placeholder: "Type your message...",
        send: "Start Chat",
        online: "Online now",
        responseTime: "Usually replies instantly"
    },
    ar: {
        greeting: "مرحبا! بدك حل AI مخصص؟",
        subtitle: "منبني AI يناسب عملك، مش قوالب جاهزة.",
        placeholder: "اكتب رسالتك...",
        send: "ابدأ المحادثة",
        online: "متصل الآن",
        responseTime: "عادة نرد فوراً"
    },
    de: {
        greeting: "Hallo! Brauchen Sie eine maßgeschneiderte KI-Lösung?",
        subtitle: "Wir entwickeln KI, die zu IHREM Geschäft passt.",
        placeholder: "Nachricht eingeben...",
        send: "Chat starten",
        online: "Jetzt online",
        responseTime: "Antwortet normalerweise sofort"
    },
    fr: {
        greeting: "Bonjour! Besoin d'une solution IA sur mesure?",
        subtitle: "Nous créons de l'IA adaptée à VOTRE entreprise.",
        placeholder: "Tapez votre message...",
        send: "Démarrer le chat",
        online: "En ligne maintenant",
        responseTime: "Répond généralement instantanément"
    },
    it: {
        greeting: "Ciao! Hai bisogno di una soluzione AI personalizzata?",
        subtitle: "Creiamo AI su misura per la TUA azienda.",
        placeholder: "Scrivi il tuo messaggio...",
        send: "Inizia chat",
        online: "Online adesso",
        responseTime: "Risponde di solito istantaneamente"
    },
    hi: {
        greeting: "नमस्ते! कस्टम AI समाधान चाहिए?",
        subtitle: "हम AI बनाते हैं जो आपके बिज़नेस के लिए फिट हो।",
        placeholder: "अपना संदेश लिखें...",
        send: "चैट शुरू करें",
        online: "अभी ऑनलाइन",
        responseTime: "आमतौर पर तुरंत जवाब देते हैं"
    },
    ms: {
        greeting: "Hai! Perlukan penyelesaian AI tersuai?",
        subtitle: "Kami membina AI yang sesuai untuk perniagaan ANDA.",
        placeholder: "Taip mesej anda...",
        send: "Mula Sembang",
        online: "Dalam talian sekarang",
        responseTime: "Biasanya membalas serta-merta"
    }
}

interface WhatsAppWidgetProps {
    lang?: string
    phoneNumber?: string
}

const WhatsAppWidget = ({ lang = 'en', phoneNumber = '96170106083' }: WhatsAppWidgetProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [showPulse, setShowPulse] = useState(true)
    const [hasInteracted, setHasInteracted] = useState(false)

    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'

    // Auto-open after 30 seconds if user hasn't interacted
    useEffect(() => {
        if (!hasInteracted) {
            const timer = setTimeout(() => {
                setIsOpen(true)
                setShowPulse(false)
            }, 30000)
            return () => clearTimeout(timer)
        }
    }, [hasInteracted])

    // Pulse animation every 5 seconds
    useEffect(() => {
        if (!isOpen) {
            const interval = setInterval(() => {
                setShowPulse(true)
                setTimeout(() => setShowPulse(false), 2000)
            }, 5000)
            return () => clearInterval(interval)
        }
    }, [isOpen])

    const handleSend = () => {
        const encodedMessage = encodeURIComponent(message || t.greeting)
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
        setIsOpen(false)
        setHasInteracted(true)
    }

    const handleToggle = () => {
        setIsOpen(!isOpen)
        setHasInteracted(true)
        setShowPulse(false)
    }

    return (
        <div
            dir={isRtl ? 'rtl' : 'ltr'}
            className={`fixed bottom-6 z-50 ${isRtl ? 'left-6' : 'right-6'}`}
        >
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">HMZ Technology</h3>
                                        <div className="flex items-center gap-1">
                                            <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                                            <span className="text-xs text-green-100">{t.online}</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={handleToggle}
                                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="p-4 bg-gray-50">
                            {/* Message Bubble */}
                            <div className="bg-white rounded-lg p-3 shadow-sm mb-3 max-w-[85%]">
                                <p className="text-gray-800 font-medium">{t.greeting}</p>
                                <p className="text-gray-600 text-sm mt-1">{t.subtitle}</p>
                                <span className="text-xs text-gray-400 mt-2 block">
                                    {t.responseTime}
                                </span>
                            </div>

                            {/* Input */}
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder={t.placeholder}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    className="flex-1 px-4 py-3 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-green-500 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    className="px-6 py-3 bg-green-500 text-white rounded-full font-medium text-sm hover:bg-green-600 transition-colors whitespace-nowrap"
                                >
                                    {t.send}
                                </button>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-2 bg-gray-100 text-center">
                            <span className="text-xs text-gray-500">
                                Powered by WhatsApp Business
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={handleToggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-16 h-16 bg-green-500 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center group"
            >
                {/* Pulse Animation */}
                {showPulse && (
                    <>
                        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
                        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-50" />
                    </>
                )}

                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-7 h-7 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="whatsapp"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification Badge */}
                {!isOpen && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    >
                        1
                    </motion.span>
                )}
            </motion.button>
        </div>
    )
}

export default WhatsAppWidget
