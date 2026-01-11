
import { defineMiddleware } from "astro:middleware";

const LOCALE_REGIONS: Record<string, string> = {
    // Arabic
    'ae': 'ar', 'sa': 'ar', 'qa': 'ar', 'eg': 'ar', 'lb': 'ar', 'kw': 'ar', 'om': 'ar', 'bh': 'ar', 'jo': 'ar',
    // German
    'de': 'de', 'at': 'de', 'ch': 'de',
    // French
    'fr': 'fr', 'be': 'fr', 'ma': 'fr', 'dz': 'fr', 'tn': 'fr',
    // Italian
    'it': 'it',
    // Hindi
    'in': 'hi',
    // Malay
    'my': 'ms', 'sg': 'ms', 'bn': 'ms'
};

const SUPPORTED_LOCALES = ['en', 'ar', 'de', 'fr', 'it', 'hi', 'ms'];

export const onRequest = defineMiddleware(async (context, next) => {
    const { request, url, redirect } = context;

    // Only apply detection on root path
    if (url.pathname === "/") {
        const headers = request.headers;

        // Check if user has manually selected a language
        const cookies = request.headers.get('cookie') || '';
        const preferredLangMatch = cookies.match(/preferredLang=([^;]+)/);

        if (preferredLangMatch) {
            // User has a preference, respect it
            const preferredLang = preferredLangMatch[1];
            if (preferredLang !== 'en' && SUPPORTED_LOCALES.includes(preferredLang)) {
                return redirect(`/${preferredLang}`);
            }
            // If preferred is 'en', just continue to show English homepage
            return next();
        }

        // No preference set, do auto-detection
        let targetLang = 'en';

        // 1. Check Cloudflare IP Country header
        const country = headers.get("cf-ipcountry")?.toLowerCase();
        if (country && LOCALE_REGIONS[country]) {
            targetLang = LOCALE_REGIONS[country];
        } else {
            // 2. Fallback to Accept-Language header
            const acceptLanguage = headers.get("accept-language");
            if (acceptLanguage) {
                const preferredLocale = acceptLanguage.split(',')[0].split('-')[0];
                if (SUPPORTED_LOCALES.includes(preferredLocale)) {
                    targetLang = preferredLocale;
                }
            }
        }

        // Redirect if target is not default 'en'
        if (targetLang !== 'en') {
            return redirect(`/${targetLang}`);
        }
    }

    return next();
});
