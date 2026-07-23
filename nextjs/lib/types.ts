/**
 * 🎯 SHARED TYPES - Breaking Circular Dependencies
 * This file contains shared type definitions used by both
 * solutionsData.ts and contentEngine.ts
 */
// 
export interface Solution {
    id: string
    slug: string
    serviceType: 'whatsapp' | 'instagram' | 'messenger' | 'nextjs' | 'seo' | 'automation'
    industry: string
    industrySlug: string
    title: string
    arabicTitle: string
    description: string
    arabicDescription: string
    shortDescription: string
    arabicShortDescription?: string
    features: string[]
    arabicFeatures?: string[]
    benefits: string[]
    arabicBenefits?: string[]
    useCases: string[]
    arabicUseCases?: string[]
    roi: {
        percentage: number
        timeframe: string
        arabicTimeframe?: string
        metrics: string[]
        arabicMetrics?: string[]
    }
    pricing: {
        starter: number
        professional: number
        enterprise: string
    }
    deliveryTime: string
    arabicDeliveryTime?: string
    techStack?: string[]
    integrations?: string[]
    keywords: string[]
    metaDescription: string
    faqs: Array<{
        question: string
        answer: string
    }>
    arabicFaqs?: Array<{
        question: string
        answer: string
    }>
    theme?: {
        color: string
        gradient: string
        icon: string
    }
    caseStudy?: {
        client: string
        arabicClient?: string
        challenge: string
        arabicChallenge?: string
        solution: string
        arabicSolution?: string
        results: string[]
        arabicResults?: string[]
    }
}

export interface SolutionTranslation {
    title: string
    description: string
    shortDescription: string
    features: string[]
    benefits: string[]
    useCases: string[]
    timeframe: string
    metrics: string[]
    deliveryTime: string
    faqs: Array<{ question: string; answer: string }>
}

