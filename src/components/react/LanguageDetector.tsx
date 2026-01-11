import { useEffect } from 'react';
import type { Language } from './types';

const DETECTOR_KEY = 'hmz_lang_pref';

const LanguageDetector = () => {
    useEffect(() => {
        const detectAndRedirect = async () => {
            // 1. Check if we already have a saved preference
            const savedPref = localStorage.getItem(DETECTOR_KEY);
            if (savedPref) return;

            // 2. Identify current URL language
            const pathParts = window.location.pathname.split('/');
            const currentUrlLang = pathParts[1] as Language;
            const supportedLangs: Language[] = ['en', 'ar', 'de', 'fr', 'it', 'hi', 'ms'];

            // If we are already on a non-English path that is supported, don't redirect
            if (supportedLangs.includes(currentUrlLang)) {
                localStorage.setItem(DETECTOR_KEY, currentUrlLang);
                return;
            }

            // 3. Try to detect language from browser/geo
            try {
                // First try: Browser language
                const browserLang = navigator.language.split('-')[0] as Language;

                // Second try: Geolocation API for more accuracy (optional but recommended)
                // We'll use ipapi.co (free tier) to detect country code
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                const countryCode = data.country_code; // e.g., 'SA', 'AE', 'DE', 'FR'

                let targetLang: Language = 'en';

                const countryToLang: Record<string, Language> = {
                    'SA': 'ar', 'AE': 'ar', 'QA': 'ar', 'KW': 'ar', 'OM': 'ar', 'BH': 'ar', 'EG': 'ar', 'JO': 'ar', 'LB': 'ar',
                    'DE': 'de', 'AT': 'de', 'CH': 'de',
                    'FR': 'fr', 'BE': 'fr', 'LU': 'fr',
                    'IT': 'it',
                    'IN': 'hi',
                    'MY': 'ms'
                };

                if (countryToLang[countryCode]) {
                    targetLang = countryToLang[countryCode];
                } else if (supportedLangs.includes(browserLang)) {
                    targetLang = browserLang;
                }

                // 4. Perform redirection if needed
                if (targetLang !== 'en') {
                    localStorage.setItem(DETECTOR_KEY, targetLang);
                    const newPath = `/${targetLang}${window.location.pathname === '/' ? '' : window.location.pathname}`;
                    window.location.href = newPath;
                } else {
                    localStorage.setItem(DETECTOR_KEY, 'en');
                }

            } catch (error) {
                console.error('Language detection failed:', error);
                // Fallback to English if geo/browser detection fails
                localStorage.setItem(DETECTOR_KEY, 'en');
            }
        };

        detectAndRedirect();
    }, []);

    return null; // Invisible component
};

export default LanguageDetector;
