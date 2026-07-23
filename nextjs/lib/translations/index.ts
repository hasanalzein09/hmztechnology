/**
 * 🌍 SOLUTIONS TRANSLATIONS INDEX
 * Central hub for all solution translations
 */

import { arabicTranslations } from './solutions-ar'
import type { SolutionTranslation } from '../types'
import { germanTranslations } from './solutions-de'
import { frenchTranslations } from './solutions-fr'
import { italianTranslations } from './solutions-it'
import { hindiTranslations } from './solutions-hi'
import { malayTranslations } from './solutions-ms'

export type { SolutionTranslation }

// All translations by language
export const solutionTranslations: Record<string, Record<string, SolutionTranslation>> = {
    ar: arabicTranslations,
    de: germanTranslations,
    fr: frenchTranslations,
    it: italianTranslations,
    hi: hindiTranslations,
    ms: malayTranslations,
}

/**
 * Get translated solution data
 */
export function getTranslatedSolution(solutionId: string, language: string): Partial<SolutionTranslation> | null {
    // English is the source, no translation needed
    if (language === 'en') return null

    const langTranslations = solutionTranslations[language]
    if (!langTranslations) return null

    return langTranslations[solutionId] || null
}

/**
 * Get a specific field translation with fallback
 */
export function getTranslatedField<K extends keyof SolutionTranslation>(
    solutionId: string,
    language: string,
    field: K,
    fallback: SolutionTranslation[K]
): SolutionTranslation[K] {
    const translation = getTranslatedSolution(solutionId, language)
    if (!translation) return fallback
    return translation[field] ?? fallback
}

/**
 * Check if translation exists for a solution
 */
export function hasTranslation(solutionId: string, language: string): boolean {
    if (language === 'en') return true
    const langTranslations = solutionTranslations[language]
    return !!langTranslations?.[solutionId]
}

// Language display names
export const languageNames: Record<string, { native: string; english: string }> = {
    en: { native: 'English', english: 'English' },
    ar: { native: 'العربية', english: 'Arabic' },
    de: { native: 'Deutsch', english: 'German' },
    fr: { native: 'Français', english: 'French' },
    it: { native: 'Italiano', english: 'Italian' },
    hi: { native: 'हिंदी', english: 'Hindi' },
    ms: { native: 'Bahasa Melayu', english: 'Malay' },
}

// Supported languages for translations
export const supportedLanguages = ['en', 'ar', 'de', 'fr', 'it', 'hi', 'ms'] as const
export type SupportedLanguage = typeof supportedLanguages[number]
