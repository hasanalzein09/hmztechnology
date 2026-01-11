import { useState, useEffect } from 'react'
import LanguageSwitcher from './LanguageSwitcher';
import type { Language } from './types';

interface HeaderProps {
    lang: string;
}

const headerTranslations: Record<Language, {
    home: string
    services: string
    solutions: string
    about: string
    contact: string
    getStarted: string
}> = {
    en: { home: 'Home', services: 'Services', solutions: 'Solutions', about: 'About', contact: 'Contact', getStarted: 'Get Started' },
    ar: { home: 'الرئيسية', services: 'الخدمات', solutions: 'الحلول', about: 'من نحن', contact: 'اتصل بنا', getStarted: 'ابدأ الآن' },
    de: { home: 'Startseite', services: 'Dienstleistungen', solutions: 'Lösungen', about: 'Über uns', contact: 'Kontakt', getStarted: 'Loslegen' },
    fr: { home: 'Accueil', services: 'Services', solutions: 'Solutions', about: 'À propos', contact: 'Contact', getStarted: 'Commencer' },
    it: { home: 'Home', services: 'Servizi', solutions: 'Soluzioni', about: 'Chi siamo', contact: 'Contatti', getStarted: 'Inizia' },
    hi: { home: 'होम', services: 'सेवाएं', solutions: 'समाधान', about: 'हमारे बारे में', contact: 'संपर्क', getStarted: 'शुरू करें' },
    ms: { home: 'Laman Utama', services: 'Perkhidmatan', solutions: 'Penyelesaian', about: 'Tentang Kami', contact: 'Hubungi', getStarted: 'Mula Sekarang' }
}

const Header = ({ lang }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Safe language fallback
    const currentLang = (headerTranslations[lang as Language] ? lang : 'en') as Language;
    const t = headerTranslations[currentLang];
    const isRtl = currentLang === 'ar';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    const navigation = [
        { name: t.home, href: lang === 'en' ? '/' : `/${lang}/`, section: '#home' },
        { name: t.services, href: lang === 'en' ? '/services' : `/${lang}/services`, section: '#services' },
        { name: t.solutions, href: lang === 'en' ? '/solutions' : `/${lang}/solutions` },
        { name: t.about, href: lang === 'en' ? '/about' : `/${lang}/about` },
        // Pricing removed as per user request
        { name: t.contact, href: lang === 'en' ? '/contact' : `/${lang}/contact` },
    ]

    return (
        <>
            <header
                dir={isRtl ? 'rtl' : 'ltr'}
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-100'
                    : 'bg-white/95 backdrop-blur-lg'
                    }`}
            >
                {/* Top Info Bar */}
                <div className="bg-gray-900 text-white py-2 hidden sm:block">
                    <div className="container mx-auto px-4 flex justify-between items-center text-xs md:text-sm font-medium">
                        <div className="flex items-center gap-6">
                            <a href="tel:+96170106083" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +961 70 106 083
                            </a>
                            <a href="mailto:sales@hmz.technology" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z" />
                                </svg>
                                sales@hmz.technology
                            </a>
                        </div>
                        <div className="opacity-80">
                            {isRtl ? 'حلول الذكاء الاصطناعي العالمية' : 'Global AI Architectures'}
                        </div>
                    </div>
                </div>

                <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo */}
                        <div className="flex items-center flex-shrink-0">
                            <a
                                href={lang === 'en' ? '/' : `/${lang}/`}
                                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                            >
                                HMZ Technology
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-3 xl:px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm xl:text-base"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="ml-2">
                                <LanguageSwitcher currentLang={lang} />
                            </div>
                            <a
                                href={lang === 'en' ? '/contact' : `/${lang}/contact`}
                                className="ml-4 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
                            >
                                {t.getStarted}
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center gap-3">
                            <LanguageSwitcher currentLang={lang} />
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="relative w-12 h-12 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-200"
                                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            >
                                <div className="w-6 h-5 flex flex-col justify-between">
                                    <span
                                        className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                            }`}
                                    />
                                    <span
                                        className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''
                                            }`}
                                    />
                                    <span
                                        className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                            }`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation Overlay - CSS Animation */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Mobile Menu Panel */}
                    <div
                        dir={isRtl ? 'rtl' : 'ltr'}
                        className={`fixed top-0 ${isRtl ? 'left-0' : 'right-0'} w-[85%] max-w-sm h-full bg-white z-50 lg:hidden shadow-2xl animate-slide-in`}
                    >
                        {/* Menu Header */}
                        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-100">
                            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Menu
                            </span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="py-4 px-4 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="w-full flex items-center gap-3 px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 text-lg font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Menu Footer CTA */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50">
                            <a
                                href={lang === 'en' ? '/contact' : `/${lang}/contact`}
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/25 active:scale-95 transition-transform"
                            >
                                {t.getStarted}
                            </a>
                            <a
                                href="https://wa.me/96170106083"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 flex items-center justify-center gap-2 w-full py-3 bg-green-500 text-white rounded-xl font-medium active:scale-95 transition-transform"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </>
            )}

            {/* Spacer for fixed header */}
            <div className="h-24 md:h-28" />
        </>
    )
}

export default Header
