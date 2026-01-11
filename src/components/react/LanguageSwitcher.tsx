import { useState } from 'react'
import type { Language } from './types'

interface LanguageSwitcherProps {
    currentLang: string;
}

const languages: Record<Language, { label: string; flag: string }> = {
    en: { label: 'English', flag: '🇺🇸' },
    ar: { label: 'العربية', flag: '🇸🇦' },
    de: { label: 'Deutsch', flag: '🇩🇪' },
    fr: { label: 'Français', flag: '🇫🇷' },
    it: { label: 'Italiano', flag: '🇮🇹' },
    hi: { label: 'हिंदी', flag: '🇮🇳' },
    ms: { label: 'Bahasa Melayu', flag: '🇲🇾' }
}

const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const current = languages[currentLang as Language] || languages.en

    const switchLanguage = (langCode: string) => {
        // Save language preference to cookie (expires in 30 days)
        document.cookie = `preferredLang=${langCode}; path=/; max-age=${30 * 24 * 60 * 60}`

        const currentPath = window.location.pathname
        const segments = currentPath.split('/').filter(Boolean)
        const firstSegment = segments[0]

        let neutralPath = currentPath

        if (firstSegment && languages[firstSegment as Language]) {
            // We are at /ar/...
            neutralPath = '/' + segments.slice(1).join('/')
        }

        let targetPath = ''
        if (langCode === 'en') {
            targetPath = neutralPath || '/'
        } else {
            targetPath = `/${langCode}${neutralPath === '/' ? '' : neutralPath}`
        }

        window.location.href = targetPath || '/'
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
                <span className="text-xl">{current.flag}</span>
                <span className="hidden xl:block text-sm font-medium text-gray-700">
                    {current.label}
                </span>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-20 animate-fade-in-up">
                        {Object.entries(languages).map(([code, { label, flag }]) => (
                            <button
                                key={code}
                                onClick={() => switchLanguage(code)}
                                className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-left ${currentLang === code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                    }`}
                            >
                                <span className="text-xl">{flag}</span>
                                <span className="text-sm font-medium">{label}</span>
                                {currentLang === code && (
                                    <span className="ml-auto text-blue-600">✓</span>
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default LanguageSwitcher
