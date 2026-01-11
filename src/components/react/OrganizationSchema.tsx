import type { FC } from 'react';

const OrganizationSchema: FC = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://www.hmz.technology/#organization',
        name: 'HMZ Technology',
        alternateName: 'HMZ AI Agency',
        url: 'https://www.hmz.technology',
        logo: 'https://www.hmz.technology/logo.png',
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+96170106083',
                contactType: 'sales',
                email: 'sales@hmz.technology',
                availableLanguage: ['English', 'Arabic', 'French', 'German', 'Italian', 'Hindi', 'Malay']
            },
            {
                '@type': 'ContactPoint',
                telephone: '+96170106083',
                contactType: 'technical support',
                availableLanguage: ['English', 'Arabic']
            }
        ],
        sameAs: [
            'https://www.linkedin.com/company/hmz-technology',
            'https://twitter.com/hmztechnology',
            'https://www.instagram.com/hmz.technology'
        ],
        description: 'Global leader in AI chatbot development and business process automation. Specialized in WhatsApp Business API, Instagram Automation, and Enterprise AI Architectures.',
        foundingDate: '2023',
        knowsAbout: [
            'Artificial Intelligence',
            'Chatbot Development',
            'Business Process Automation',
            'Natural Language Processing',
            'WhatsApp Business API',
            'Customer Support Automation'
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default OrganizationSchema;
