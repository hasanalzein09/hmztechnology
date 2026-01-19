import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

// Fake data for social proof notifications
const notifications = {
    en: [
        { name: "Ahmed", location: "Dubai", action: "requested a custom AI chatbot" },
        { name: "Sarah", location: "Singapore", action: "booked a free consultation" },
        { name: "Michael", location: "Germany", action: "started with WhatsApp AI" },
        { name: "Fatima", location: "Saudi Arabia", action: "requested custom automation" },
        { name: "David", location: "UK", action: "signed up for AI strategy" },
        { name: "Chen", location: "Singapore", action: "got their custom bot live" },
        { name: "Omar", location: "Lebanon", action: "requested e-commerce AI" },
        { name: "Lisa", location: "USA", action: "booked enterprise demo" }
    ],
    ar: [
        { name: "أحمد", location: "دبي", action: "طلب شات بوت AI مخصص" },
        { name: "سارة", location: "الرياض", action: "حجزت استشارة مجانية" },
        { name: "محمد", location: "لبنان", action: "بدأ مع WhatsApp AI" },
        { name: "فاطمة", location: "الكويت", action: "طلبت أتمتة مخصصة" },
        { name: "خالد", location: "قطر", action: "سجل لاستراتيجية AI" },
        { name: "نور", location: "الإمارات", action: "شغّلت البوت المخصص" }
    ],
    de: [
        { name: "Thomas", location: "München", action: "hat einen KI-Chatbot angefordert" },
        { name: "Julia", location: "Berlin", action: "hat eine Beratung gebucht" },
        { name: "Stefan", location: "Hamburg", action: "startet mit WhatsApp KI" },
        { name: "Anna", location: "Frankfurt", action: "hat Automatisierung angefordert" }
    ],
    fr: [
        { name: "Pierre", location: "Paris", action: "a demandé un chatbot IA" },
        { name: "Marie", location: "Lyon", action: "a réservé une consultation" },
        { name: "Jean", location: "Marseille", action: "commence avec WhatsApp IA" },
        { name: "Sophie", location: "Nice", action: "a demandé une automatisation" }
    ],
    it: [
        { name: "Marco", location: "Milano", action: "ha richiesto un chatbot AI" },
        { name: "Giulia", location: "Roma", action: "ha prenotato una consulenza" },
        { name: "Luca", location: "Napoli", action: "inizia con WhatsApp AI" },
        { name: "Chiara", location: "Torino", action: "ha richiesto automazione" }
    ],
    hi: [
        { name: "राज", location: "मुंबई", action: "ने AI चैटबॉट का अनुरोध किया" },
        { name: "प्रिया", location: "दिल्ली", action: "ने परामर्श बुक किया" },
        { name: "अमित", location: "बैंगलोर", action: "WhatsApp AI शुरू किया" }
    ],
    ms: [
        { name: "Ahmad", location: "Kuala Lumpur", action: "meminta chatbot AI" },
        { name: "Siti", location: "Singapore", action: "menempah perundingan" },
        { name: "Ali", location: "Johor", action: "bermula dengan WhatsApp AI" }
    ]
}

const timeAgo = {
    en: ["just now", "2 minutes ago", "5 minutes ago", "12 minutes ago", "23 minutes ago"],
    ar: ["الآن", "منذ دقيقتين", "منذ 5 دقائق", "منذ 12 دقيقة", "منذ 23 دقيقة"],
    de: ["gerade eben", "vor 2 Minuten", "vor 5 Minuten", "vor 12 Minuten", "vor 23 Minuten"],
    fr: ["à l'instant", "il y a 2 minutes", "il y a 5 minutes", "il y a 12 minutes", "il y a 23 minutes"],
    it: ["proprio ora", "2 minuti fa", "5 minuti fa", "12 minuti fa", "23 minuti fa"],
    hi: ["अभी", "2 मिनट पहले", "5 मिनट पहले", "12 मिनट पहले", "23 मिनट पहले"],
    ms: ["baru sahaja", "2 minit lalu", "5 minit lalu", "12 minit lalu", "23 minit lalu"]
}

interface SocialProofNotificationProps {
    lang?: string
}

const SocialProofNotification = ({ lang = 'en' }: SocialProofNotificationProps) => {
    const [currentNotification, setCurrentNotification] = useState<{
        name: string
        location: string
        action: string
        time: string
    } | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)

    const currentLang = (notifications[lang as Language] ? lang : 'en') as Language
    const notificationList = notifications[currentLang]
    const times = timeAgo[currentLang]
    const isRtl = currentLang === 'ar'

    useEffect(() => {
        if (isDismissed) return

        // Initial delay before first notification
        const initialDelay = setTimeout(() => {
            showRandomNotification()
        }, 8000)

        // Show notifications every 15-30 seconds
        const interval = setInterval(() => {
            showRandomNotification()
        }, Math.random() * 15000 + 15000)

        return () => {
            clearTimeout(initialDelay)
            clearInterval(interval)
        }
    }, [isDismissed, currentLang])

    const showRandomNotification = () => {
        const randomNotification = notificationList[Math.floor(Math.random() * notificationList.length)]
        const randomTime = times[Math.floor(Math.random() * times.length)]

        setCurrentNotification({
            ...randomNotification,
            time: randomTime
        })
        setIsVisible(true)

        // Auto-hide after 5 seconds
        setTimeout(() => {
            setIsVisible(false)
        }, 5000)
    }

    const handleDismiss = () => {
        setIsVisible(false)
        setIsDismissed(true)
    }

    return (
        <AnimatePresence>
            {isVisible && currentNotification && (
                <motion.div
                    dir={isRtl ? 'rtl' : 'ltr'}
                    initial={{ opacity: 0, x: isRtl ? -100 : -100, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: isRtl ? -100 : -100, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className={`fixed bottom-24 z-40 ${isRtl ? 'right-4' : 'left-4'}`}
                >
                    <div className="bg-white rounded-xl shadow-2xl p-4 max-w-sm border border-gray-100">
                        <button
                            onClick={handleDismiss}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="w-3 h-3" />
                        </button>

                        <div className="flex items-start gap-3">
                            {/* Avatar */}
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                                {currentNotification.name.charAt(0)}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold text-gray-900">
                                        {currentNotification.name}
                                    </span>
                                    <span className="text-gray-400 text-sm">
                                        {currentNotification.location}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    {currentNotification.action}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                    <span className="text-xs text-gray-400">
                                        {currentNotification.time}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Verified Badge */}
                        <div className="mt-2 pt-2 border-t border-gray-100 flex items-center gap-2">
                            <span className="text-xs text-gray-400">
                                Verified by HMZ Technology
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SocialProofNotification
