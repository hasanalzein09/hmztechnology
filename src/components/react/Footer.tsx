import { motion } from 'framer-motion'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

interface FooterTranslation {
    tagline: string
    description: string
    quickLinks: string
    services: string
    contact: string
    home: string
    servicesLink: string
    solutions: string
    about: string
    contactLink: string
    whatsapp: string
    instagram: string
    messenger: string
    webDev: string
    seo: string
    automation: string
    privacyPolicy: string
    termsOfService: string
    copyright: string
    newsletter: string
    emailPlaceholder: string
    subscribe: string
}

const translations: Record<Language, FooterTranslation> = {
    en: {
        tagline: 'Stop Losing Money to Slow Responses',
        description: 'We build intelligent systems that work 24/7 to grow your business. From AI chatbots to custom automation solutions.',
        quickLinks: 'Quick Links',
        services: 'Fix Your Revenue Leaks',
        contact: 'Get Free Audit',
        home: 'Home',
        servicesLink: 'All Solutions',
        solutions: 'Industry Solutions',
        about: 'Why We\'re Different',
        contactLink: 'Claim Free Audit',
        whatsapp: 'WhatsApp Money Machine',
        instagram: 'Instagram Lead Capture',
        messenger: 'Facebook Ad Multiplier',
        webDev: 'Website That Converts',
        seo: 'Steal Competitor Traffic',
        automation: 'Fire Repetitive Tasks',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',
        copyright: '© 2025 HMZ Technology. Your competitors are already clients.',
        newsletter: 'Get Revenue Tips (No Spam)',
        emailPlaceholder: 'Your best email',
        subscribe: 'Send Me Tips'
    },
    ar: {
        tagline: 'وقّف خسارة الفلوس للردود البطيئة',
        description: 'نبني أنظمة ذكية تعمل 24/7 لتنمية عملك. من روبوتات المحادثة لحلول الأتمتة المخصصة.',
        quickLinks: 'روابط سريعة',
        services: 'سد تسريبات إيراداتك',
        contact: 'احصل على تحليل مجاني',
        home: 'الرئيسية',
        servicesLink: 'كل الحلول',
        solutions: 'حلول الصناعات',
        about: 'ليش نحنا مختلفين',
        contactLink: 'احجز تحليلك المجاني',
        whatsapp: 'ماكينة فلوس واتساب',
        instagram: 'التقاط عملاء انستغرام',
        messenger: 'مضاعف إعلانات فيسبوك',
        webDev: 'موقع يحوّل',
        seo: 'اسرق زوار المنافسين',
        automation: 'طرد المهام المتكررة',
        privacyPolicy: 'سياسة الخصوصية',
        termsOfService: 'شروط الخدمة',
        copyright: '© 2025 HMZ Technology. منافسوك صاروا عملائنا.',
        newsletter: 'نصائح إيرادات (بدون سبام)',
        emailPlaceholder: 'أفضل إيميل لك',
        subscribe: 'أرسلي النصائح'
    },
    de: {
        tagline: 'Die Zukunft der KI gestalten',
        description: 'Wir entwickeln intelligente Systeme, die 24/7 für Ihr Geschäftswachstum arbeiten. Von KI-Chatbots bis zu maßgeschneiderten Automatisierungslösungen.',
        quickLinks: 'Schnelllinks',
        services: 'Leistungen',
        contact: 'Kontakt',
        home: 'Startseite',
        servicesLink: 'Leistungen',
        solutions: 'Lösungen',
        about: 'Über uns',
        contactLink: 'Kontakt',
        whatsapp: 'WhatsApp KI',
        instagram: 'Instagram KI',
        messenger: 'Messenger KI',
        webDev: 'Webentwicklung',
        seo: 'Erweiterte SEO',
        automation: 'KI-Automatisierung',
        privacyPolicy: 'Datenschutz',
        termsOfService: 'Nutzungsbedingungen',
        copyright: '© 2025 HMZ Technology. Alle Rechte vorbehalten.',
        newsletter: 'Bleiben Sie informiert',
        emailPlaceholder: 'E-Mail eingeben',
        subscribe: 'Abonnieren'
    },
    fr: {
        tagline: "Construire l'avenir de l'IA",
        description: 'Nous créons des systèmes intelligents qui travaillent 24h/24 pour développer votre entreprise. Des chatbots IA aux solutions d\'automatisation personnalisées.',
        quickLinks: 'Liens rapides',
        services: 'Services',
        contact: 'Contact',
        home: 'Accueil',
        servicesLink: 'Services',
        solutions: 'Solutions',
        about: 'À propos',
        contactLink: 'Contact',
        whatsapp: 'WhatsApp IA',
        instagram: 'Instagram IA',
        messenger: 'Messenger IA',
        webDev: 'Développement web',
        seo: 'SEO avancé',
        automation: 'Automatisation IA',
        privacyPolicy: 'Politique de confidentialité',
        termsOfService: 'Conditions d\'utilisation',
        copyright: '© 2025 HMZ Technology. Tous droits réservés.',
        newsletter: 'Restez informé',
        emailPlaceholder: 'Entrez votre email',
        subscribe: "S'abonner"
    },
    it: {
        tagline: "Costruire il futuro dell'IA",
        description: 'Creiamo sistemi intelligenti che lavorano 24/7 per far crescere il tuo business. Dai chatbot IA alle soluzioni di automazione personalizzate.',
        quickLinks: 'Link rapidi',
        services: 'Servizi',
        contact: 'Contatto',
        home: 'Home',
        servicesLink: 'Servizi',
        solutions: 'Soluzioni',
        about: 'Chi siamo',
        contactLink: 'Contatti',
        whatsapp: 'WhatsApp IA',
        instagram: 'Instagram IA',
        messenger: 'Messenger IA',
        webDev: 'Sviluppo web',
        seo: 'SEO avanzato',
        automation: 'Automazione IA',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Termini di servizio',
        copyright: '© 2025 HMZ Technology. Tutti i diritti riservati.',
        newsletter: 'Rimani aggiornato',
        emailPlaceholder: 'Inserisci la tua email',
        subscribe: 'Iscriviti'
    },
    hi: {
        tagline: 'AI का भविष्य बनाना',
        description: 'हम बुद्धिमान सिस्टम बनाते हैं जो आपके व्यवसाय को बढ़ाने के लिए 24/7 काम करते हैं। AI चैटबॉट से लेकर कस्टम ऑटोमेशन समाधान तक।',
        quickLinks: 'त्वरित लिंक',
        services: 'सेवाएं',
        contact: 'संपर्क',
        home: 'होम',
        servicesLink: 'सेवाएं',
        solutions: 'समाधान',
        about: 'हमारे बारे में',
        contactLink: 'संपर्क करें',
        whatsapp: 'WhatsApp AI',
        instagram: 'Instagram AI',
        messenger: 'Messenger AI',
        webDev: 'वेब डेवलपमेंट',
        seo: 'उन्नत SEO',
        automation: 'AI ऑटोमेशन',
        privacyPolicy: 'गोपनीयता नीति',
        termsOfService: 'सेवा की शर्तें',
        copyright: '© 2025 HMZ Technology. सर्वाधिकार सुरक्षित।',
        newsletter: 'अपडेट रहें',
        emailPlaceholder: 'अपना ईमेल दर्ज करें',
        subscribe: 'सब्सक्राइब करें'
    },
    ms: {
        tagline: 'Membina Masa Depan AI',
        description: 'Kami mencipta sistem pintar yang bekerja 24/7 untuk mengembangkan perniagaan anda. Dari chatbot AI hingga penyelesaian automasi tersuai.',
        quickLinks: 'Pautan Pantas',
        services: 'Perkhidmatan',
        contact: 'Hubungi',
        home: 'Utama',
        servicesLink: 'Perkhidmatan',
        solutions: 'Penyelesaian',
        about: 'Tentang Kami',
        contactLink: 'Hubungi Kami',
        whatsapp: 'WhatsApp AI',
        instagram: 'Instagram AI',
        messenger: 'Messenger AI',
        webDev: 'Pembangunan Web',
        seo: 'SEO Lanjutan',
        automation: 'Automasi AI',
        privacyPolicy: 'Dasar Privasi',
        termsOfService: 'Syarat Perkhidmatan',
        copyright: '© 2025 HMZ Technology. Hak cipta terpelihara.',
        newsletter: 'Kekal Dikemas Kini',
        emailPlaceholder: 'Masukkan e-mel anda',
        subscribe: 'Langgan'
    }
}

interface FooterProps {
    lang: string
}

const Footer = ({ lang }: FooterProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'

    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`

    const quickLinks = [
        { name: t.home, href: getLink('/') },
        { name: t.servicesLink, href: getLink('/services') },
        { name: t.solutions, href: getLink('/solutions') },
        { name: t.about, href: getLink('/about') },
        { name: t.contactLink, href: getLink('/contact') },
    ]

    const serviceLinks = [
        { name: t.whatsapp, href: getLink('/services/whatsapp-ai-chatbot') },
        { name: t.instagram, href: getLink('/services/instagram-ai-chatbot') },
        { name: t.messenger, href: getLink('/services/messenger-ai-chatbot') },
        { name: t.webDev, href: getLink('/services/nextjs-development') },
        { name: t.seo, href: getLink('/services/advanced-seo') },
        { name: t.automation, href: getLink('/services/ai-automations') },
    ]

    return (
        <footer 
            dir={isRtl ? 'rtl' : 'ltr'}
            className="relative bg-[#030014] overflow-hidden"
        >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            {/* Neural Background */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* Logo */}
                            <a href={getLink('/')} className="inline-flex items-center gap-3 mb-6 group">
                                <div className="relative w-10 h-10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl rotate-6 group-hover:rotate-12 transition-transform" />
                                    <div className="absolute inset-0 bg-[#030014] rounded-xl flex items-center justify-center">
                                        <span className="text-lg font-bold text-gradient-ai">H</span>
                                    </div>
                                </div>
                                <span className="text-xl font-bold text-white">
                                    HMZ<span className="text-cyan-400">.</span>
                                </span>
                            </a>

                            <p className="text-sm text-white/40 mb-4">
                                {t.tagline}
                            </p>
                            <p className="text-sm text-white/60 leading-relaxed mb-6">
                                {t.description}
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                <a 
                                    href="https://wa.me/96170106083" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-green-500 hover:border-green-500/30 hover:bg-green-500/10 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="mailto:sales@hmz.technology"
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                                <a 
                                    href="tel:+96170106083"
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h4 className="text-white font-semibold mb-6">{t.quickLinks}</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.href}
                                            className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-cyan-400 transition-colors" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Services */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-white font-semibold mb-6">{t.services}</h4>
                            <ul className="space-y-3">
                                {serviceLinks.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.href}
                                            className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-cyan-400 transition-colors" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h4 className="text-white font-semibold mb-6">{t.contact}</h4>
                            <div className="space-y-4">
                                <a 
                                    href="tel:+96170106083"
                                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                                        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-mono">+961 70 106 083</span>
                                </a>
                                <a 
                                    href="mailto:sales@hmz.technology"
                                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-purple-500/10 transition-colors">
                                        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm">sales@hmz.technology</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-white/40">
                            {t.copyright}
                        </p>
                        <div className="flex items-center gap-6">
                            <a 
                                href={getLink('/privacy-policy')}
                                className="text-sm text-white/40 hover:text-white transition-colors"
                            >
                                {t.privacyPolicy}
                            </a>
                            <a 
                                href={getLink('/terms-of-service')}
                                className="text-sm text-white/40 hover:text-white transition-colors"
                            >
                                {t.termsOfService}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/96170106083"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300"
            >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
            </a>
        </footer>
    )
}

export default Footer
