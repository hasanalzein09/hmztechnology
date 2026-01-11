import type { Language } from './types';

const footerTranslations: Record<Language, {
    description: string
    quickLinks: string
    services: string
    home: string
    servicesLink: string
    about: string
    portfolio: string
    contact: string
    whatsapp: string
    instagram: string
    messenger: string
    nextjs: string
    aiAutomation: string
    seo: string
    copyright: string
    privacyPolicy: string
    termsOfService: string
}> = {
    en: {
        description: 'Leading provider of AI-powered chatbots for WhatsApp, Instagram, and Messenger. We also specialize in Next.js development, AI automations, and advanced SEO solutions.',
        quickLinks: 'Quick Links',
        services: 'AI Services',
        home: 'Home',
        servicesLink: 'Services',
        about: 'About',
        portfolio: 'Portfolio',
        contact: 'Contact',
        whatsapp: 'WhatsApp AI Chatbot',
        instagram: 'Instagram AI Chatbot',
        messenger: 'Messenger AI Chatbot',
        nextjs: 'Next.js Development',
        aiAutomation: 'AI Automations',
        seo: 'Advanced SEO',
        copyright: '© 2025 HMZ Technology. All rights reserved.',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service'
    },
    ar: {
        description: 'الرائد في تقديم روبوتات الدردشة المدعومة بالذكاء الاصطناعي لواتساب وانستغرام وماسنجر. نتخصص أيضاً في تطوير Next.js وأتمتة الذكاء الاصطناعي وحلول SEO المتقدمة.',
        quickLinks: 'روابط سريعة',
        services: 'خدمات الذكاء الاصطناعي',
        home: 'الرئيسية',
        servicesLink: 'الخدمات',
        about: 'من نحن',
        portfolio: 'أعمالنا',
        contact: 'تواصل معنا',
        whatsapp: 'روبوت واتساب الذكي',
        instagram: 'روبوت انستغرام الذكي',
        messenger: 'روبوت ماسنجر الذكي',
        nextjs: 'تطوير Next.js',
        aiAutomation: 'أتمتة الذكاء الاصطناعي',
        seo: 'تحسين محركات البحث المتقدم',
        copyright: '© 2025 HMZ Technology. جميع الحقوق محفوظة.',
        privacyPolicy: 'سياسة الخصوصية',
        termsOfService: 'شروط الخدمة'
    },
    de: {
        description: 'Führender Anbieter von KI-gestützten Chatbots für WhatsApp, Instagram und Messenger. Wir sind auch spezialisiert auf Next.js-Entwicklung, KI-Automatisierung und fortgeschrittene SEO-Lösungen.',
        quickLinks: 'Schnelllinks',
        services: 'KI-Dienste',
        home: 'Startseite',
        servicesLink: 'Leistungen',
        about: 'Über uns',
        portfolio: 'Portfolio',
        contact: 'Kontakt',
        whatsapp: 'WhatsApp KI-Chatbot',
        instagram: 'Instagram KI-Chatbot',
        messenger: 'Messenger KI-Chatbot',
        nextjs: 'Next.js Entwicklung',
        aiAutomation: 'KI-Automatisierungen',
        seo: 'Fortgeschrittenes SEO',
        copyright: '© 2025 HMZ Technology. Alle Rechte vorbehalten.',
        privacyPolicy: 'Datenschutzerklärung',
        termsOfService: 'Nutzungsbedingungen'
    },
    fr: {
        description: 'Leader des chatbots IA pour WhatsApp, Instagram et Messenger. Nous sommes également spécialisés dans le développement Next.js, l\'automatisation IA et les solutions SEO avancées.',
        quickLinks: 'Liens rapides',
        services: 'Services IA',
        home: 'Accueil',
        servicesLink: 'Services',
        about: 'À propos',
        portfolio: 'Portfolio',
        contact: 'Contact',
        whatsapp: 'Chatbot IA WhatsApp',
        instagram: 'Chatbot IA Instagram',
        messenger: 'Chatbot IA Messenger',
        nextjs: 'Développement Next.js',
        aiAutomation: 'Automatisations IA',
        seo: 'SEO avancé',
        copyright: '© 2025 HMZ Technology. Tous droits réservés.',
        privacyPolicy: 'Politique de confidentialité',
        termsOfService: 'Conditions d\'utilisation'
    },
    it: {
        description: 'Leader nei chatbot IA per WhatsApp, Instagram e Messenger. Siamo anche specializzati nello sviluppo Next.js, automazione IA e soluzioni SEO avanzate.',
        quickLinks: 'Link rapidi',
        services: 'Servizi IA',
        home: 'Home',
        servicesLink: 'Servizi',
        about: 'Chi siamo',
        portfolio: 'Portfolio',
        contact: 'Contatti',
        whatsapp: 'Chatbot IA WhatsApp',
        instagram: 'Chatbot IA Instagram',
        messenger: 'Chatbot IA Messenger',
        nextjs: 'Sviluppo Next.js',
        aiAutomation: 'Automazioni IA',
        seo: 'SEO avanzato',
        copyright: '© 2025 HMZ Technology. Tutti i diritti riservati.',
        privacyPolicy: 'Informativa sulla privacy',
        termsOfService: 'Termini di servizio'
    },
    hi: {
        description: 'WhatsApp, Instagram और Messenger के लिए AI-संचालित चैटबॉट का अग्रणी प्रदाता। हम Next.js विकास, AI ऑटोमेशन और उन्नत SEO समाधानों में भी विशेषज्ञ हैं।',
        quickLinks: 'त्वरित लिंक',
        services: 'AI सेवाएं',
        home: 'होम',
        servicesLink: 'सेवाएं',
        about: 'हमारे बारे में',
        portfolio: 'पोर्टफोलियो',
        contact: 'संपर्क',
        whatsapp: 'WhatsApp AI चैटबॉट',
        instagram: 'Instagram AI चैटबॉट',
        messenger: 'Messenger AI चैटबॉट',
        nextjs: 'Next.js डेवलपमेंट',
        aiAutomation: 'AI ऑटोमेशन',
        seo: 'उन्नत SEO',
        copyright: '© 2025 HMZ Technology. सर्वाधिकार सुरक्षित।',
        privacyPolicy: 'गोपनीयता नीति',
        termsOfService: 'सेवा की शर्तें'
    },
    ms: {
        description: 'Penyedia terkemuka chatbot berkuasa AI untuk WhatsApp, Instagram, dan Messenger. Kami juga pakar dalam pembangunan Next.js, automasi AI, dan penyelesaian SEO lanjutan.',
        quickLinks: 'Pautan Pantas',
        services: 'Perkhidmatan AI',
        home: 'Laman Utama',
        servicesLink: 'Perkhidmatan',
        about: 'Tentang Kami',
        portfolio: 'Portfolio',
        contact: 'Hubungi',
        whatsapp: 'Chatbot AI WhatsApp',
        instagram: 'Chatbot AI Instagram',
        messenger: 'Chatbot AI Messenger',
        nextjs: 'Pembangunan Next.js',
        aiAutomation: 'Automasi AI',
        seo: 'SEO Lanjutan',
        copyright: '© 2025 HMZ Technology. Hak cipta terpelihara.',
        privacyPolicy: 'Dasar Privasi',
        termsOfService: 'Syarat Perkhidmatan'
    }
}

interface FooterProps {
    lang: string;
}

const Footer = ({ lang }: FooterProps) => {
    // Default safe
    const currentLang = (footerTranslations[lang as Language] ? lang : 'en') as Language;
    const t = footerTranslations[currentLang];
    const isRtl = currentLang === 'ar';

    // Helper for creating links
    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`

    return (
        <footer dir={isRtl ? 'rtl' : 'ltr'} className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">HMZ Technology</h3>
                        <p className="text-gray-300 mb-4 max-w-md">
                            {t.description}
                        </p>
                        <div className={`flex ${isRtl ? 'space-x-reverse' : ''} space-x-4`}>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">{t.home}</a></li>
                            <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">{t.servicesLink}</a></li>
                            <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">{t.about}</a></li>
                            {/* Legal Links added here */}
                            <li>
                                <a href={getLink('/privacy-policy')} className="text-gray-300 hover:text-white transition-colors duration-200">
                                    {t.privacyPolicy}
                                </a>
                            </li>
                            <li>
                                <a href={getLink('/terms-of-service')} className="text-gray-300 hover:text-white transition-colors duration-200">
                                    {t.termsOfService}
                                </a>
                            </li>
                            <li>
                                <a href={getLink('/contact')} className="text-gray-300 hover:text-white transition-colors duration-200">
                                    {t.contact}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t.services}</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href={getLink('/services/whatsapp-ai-chatbot')} className="text-gray-300 hover:text-white transition-colors duration-200">
                                    {t.whatsapp}
                                </a>
                            </li>
                            <li>
                                <a href={getLink('/services/instagram-ai-chatbot')} className="text-gray-300 hover:text-white transition-colors duration-200">
                                    {t.instagram}
                                </a>
                            </li>
                            <li>
                                <a href={getLink('/services/messenger-ai-chatbot')} className="text-gray-300 hover:text-white transition-colors duration-200">
                                    {t.messenger}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Block */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-blue-400">{t.contact}</h4>
                        <div className="space-y-4">
                            <a href="tel:+96170106083" className="flex items-center gap-3 text-gray-300 hover:text-white group">
                                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="font-mono">+961 70 106 083</span>
                            </a>
                            <a href="mailto:sales@hmz.technology" className="flex items-center gap-3 text-gray-300 hover:text-white group">
                                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z" />
                                    </svg>
                                </div>
                                <span>sales@hmz.technology</span>
                            </a>
                            <div className="pt-4 flex gap-4">
                                <a href="https://wa.me/96170106083" target="_blank" className="p-2 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors">
                                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-300 hover:text-white transition-colors duration-300">
                        {t.copyright}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
