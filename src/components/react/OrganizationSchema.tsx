import type { FC } from 'react';

/**
 * Global entity @graph — 2026 Entity SEO / GEO foundation.
 * Stable @ids cross-referenced by every other schema on the site.
 * Rendered once in Layout.astro on every page.
 */
const OrganizationSchema: FC = () => {
    const graph = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': ['Organization', 'ProfessionalService'],
                '@id': 'https://hmz.technology/#organization',
                name: 'HMZ Technology',
                alternateName: 'HMZ AI Agency',
                url: 'https://hmz.technology',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://hmz.technology/og-image.png',
                    width: 1200,
                    height: 630,
                },
                image: 'https://hmz.technology/og-image.png',
                description:
                    'AI agency building production-grade AI systems: WhatsApp/Instagram AI chatbots, AI voice agents, RAG knowledge assistants, AI sales agents, custom AI agents, MCP integrations, business process automation, and Generative Engine Optimization (GEO). Serving Lebanon, the Middle East, and worldwide in 7 languages.',
                foundingDate: '2023',
                founder: { '@id': 'https://hmz.technology/#founder' },
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Beirut',
                    addressCountry: 'LB',
                },
                contactPoint: [
                    {
                        '@type': 'ContactPoint',
                        telephone: '+96170106083',
                        contactType: 'sales',
                        email: 'sales@hmz.technology',
                        availableLanguage: ['English', 'Arabic', 'French', 'German', 'Italian', 'Hindi', 'Malay'],
                    },
                    {
                        '@type': 'ContactPoint',
                        telephone: '+96170106083',
                        contactType: 'technical support',
                        availableLanguage: ['English', 'Arabic'],
                    },
                ],
                sameAs: [
                    'https://www.linkedin.com/company/hmz-technology',
                    'https://twitter.com/hmztechnology',
                    'https://www.instagram.com/hmz.technology',
                ],
                knowsAbout: [
                    'Artificial Intelligence',
                    'AI Chatbots',
                    'AI Agents',
                    'AI Voice Agents',
                    'Retrieval-Augmented Generation (RAG)',
                    'AI Sales Development (AI SDR)',
                    'Model Context Protocol (MCP)',
                    'Multi-Agent Systems',
                    'Business Process Automation',
                    'Generative Engine Optimization',
                    'Answer Engine Optimization',
                    'Natural Language Processing',
                    'WhatsApp Business API',
                    'Machine Learning Integration',
                    'AI Security and Governance',
                ],
                areaServed: [
                    { '@type': 'Country', name: 'Lebanon' },
                    { '@type': 'Country', name: 'Saudi Arabia' },
                    { '@type': 'Country', name: 'United Arab Emirates' },
                    { '@type': 'AdministrativeArea', name: 'Middle East' },
                    { '@type': 'AdministrativeArea', name: 'Worldwide' },
                ],
                slogan: 'Production AI systems, not demos.',
            },
            {
                '@type': 'Person',
                '@id': 'https://hmz.technology/#founder',
                name: 'Hasan El Zein',
                jobTitle: 'Founder & AI Engineer',
                worksFor: { '@id': 'https://hmz.technology/#organization' },
                knowsAbout: [
                    'Artificial Intelligence',
                    'AI Chatbots',
                    'AI Agents',
                    'Generative Engine Optimization',
                    'Business Automation',
                    'Web Development',
                ],
            },
            {
                '@type': 'WebSite',
                '@id': 'https://hmz.technology/#website',
                url: 'https://hmz.technology',
                name: 'HMZ Technology',
                description: 'AI agency for chatbots, voice agents, AI automation, and Generative Engine Optimization.',
                publisher: { '@id': 'https://hmz.technology/#organization' },
                inLanguage: ['en', 'ar', 'de', 'fr', 'it', 'hi', 'ms'],
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
    );
};

export default OrganizationSchema;
