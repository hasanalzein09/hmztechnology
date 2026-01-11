import { useState, useEffect } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

interface NavTranslation {
    home: string
    services: string
    solutions: string
    about: string
    contact: string
    getStarted: string
}

const headerTranslations: Record<Language, NavTranslation> = {
    en: { 
        home: 'Home', 
        services: 'Services', 
        solutions: 'Solutions', 
        about: 'About', 
        contact: 'Contact', 
        getStarted: 'Get Free Consultation' 
    },
    ar: { 
        home: 'الرئيسية', 
        services: 'الخدمات', 
        solutions: 'الحلول', 
        about: 'من نحن', 
        contact: 'تواصل معنا', 
        getStarted: 'استشارة مجانية' 
    },
    de: { 
        home: 'Startseite', 
        services: 'Leistungen', 
        solutions: 'Lösungen', 
        about: 'Über uns', 
        contact: 'Kontakt', 
        getStarted: 'Kostenlose Beratung' 
    },
    fr: { 
        home: 'Accueil', 
        services: 'Services', 
        solutions: 'Solutions', 
        about: 'À propos', 
        contact: 'Contact', 
        getStarted: 'Consultation gratuite' 
    },
    it: { 
        home: 'Home', 
        services: 'Servizi', 
        solutions: 'Soluzioni', 
        about: 'Chi siamo', 
        contact: 'Contatti', 
        getStarted: 'Consulenza gratuita' 
    },
    hi: { 
        home: 'होम', 
        services: 'सेवाएं', 
        solutions: 'समाधान', 
        about: 'हमारे बारे में', 
        contact: 'संपर्क', 
        getStarted: 'मुफ्त परामर्श' 
    },
    ms: { 
        home: 'Utama', 
        services: 'Perkhidmatan', 
        solutions: 'Penyelesaian', 
        about: 'Tentang Kami', 
        contact: 'Hubungi', 
        getStarted: 'Perundingan Percuma' 
    }
}

interface HeaderProps {
    lang: string
}

const Header = ({ lang }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const currentLang = (headerTranslations[lang as Language] ? lang : 'en') as Language
    const t = headerTranslations[currentLang]
    const isRtl = currentLang === 'ar'

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
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

    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`

    const navigation = [
        { name: t.home, href: getLink('/') },
        { name: t.services, href: getLink('/services') },
        { name: t.solutions, href: getLink('/solutions') },
        { name: t.about, href: getLink('/about') },
        { name: t.contact, href: getLink('/contact') },
    ]

    return (
        <>
            <header
                dir={isRtl ? 'rtl' : 'ltr'}
                className={`fixed w-full top-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-[#030014]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <a
                            href={getLink('/')}
                            className="group flex items-center gap-3"
                        >
                            {/* Animated Logo Icon */}
                            <div className="relative w-10 h-10">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-[#030014] rounded-xl flex items-center justify-center">
                                    <span className="text-lg font-bold text-gradient-ai">H</span>
                                </div>
                            </div>
                            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                HMZ<span className="text-cyan-400">.</span>
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-2 text-white/70 hover:text-white font-medium text-sm transition-colors duration-300 group"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                                </a>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="hidden lg:flex items-center gap-4">
                            <LanguageSwitcher currentLang={lang} />
                            
                            <a
                                href={getLink('/contact')}
                                className="group relative px-6 py-2.5 rounded-full overflow-hidden"
                            >
                                {/* Animated Border */}
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-cyan-500 bg-[length:200%_100%] animate-[gradientShift_3s_linear_infinite]" />
                                <span className="absolute inset-[1px] rounded-full bg-[#030014] group-hover:bg-[#030014]/80 transition-colors" />
                                <span className="relative z-10 flex items-center gap-2 text-sm font-semibold text-white">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    {t.getStarted}
                                </span>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-3">
                            <LanguageSwitcher currentLang={lang} />
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="relative w-12 h-12 flex items-center justify-center text-white rounded-xl hover:bg-white/5 transition-colors"
                                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            >
                                <div className="w-6 h-5 flex flex-col justify-between">
                                    <span
                                        className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                                            isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                        }`}
                                    />
                                    <span
                                        className={`h-0.5 bg-current rounded-full transition-all duration-300 ${
                                            isMenuOpen ? 'opacity-0 w-0' : 'w-full'
                                        }`}
                                    />
                                    <span
                                        className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                                            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                        }`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div
                        dir={isRtl ? 'rtl' : 'ltr'}
                        className={`fixed top-0 ${isRtl ? 'left-0' : 'right-0'} w-[85%] max-w-sm h-full bg-[#030014] border-l border-white/5 z-50 lg:hidden animate-slide-in overflow-y-auto`}
                    >
                        {/* Neural Network Pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
                        </div>

                        {/* Menu Header */}
                        <div className="relative flex items-center justify-between h-20 px-6 border-b border-white/5">
                            <span className="text-lg font-bold text-white">
                                Menu
                            </span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="relative py-6 px-4">
                            {navigation.map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-4 px-4 py-4 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-lg font-medium group"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-500 transition-colors" />
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Menu Footer */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/5 bg-[#030014]/80 backdrop-blur-xl">
                            <a
                                href={getLink('/contact')}
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/20 active:scale-95 transition-transform"
                            >
                                {t.getStarted}
                            </a>
                            <a
                                href="https://wa.me/96170106083"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 flex items-center justify-center gap-2 w-full py-3 bg-green-600/20 border border-green-500/30 text-green-400 rounded-xl font-medium active:scale-95 transition-transform"
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

            {/* Header Spacer */}
            <div className="h-20" />
        </>
    )
}

export default Header
