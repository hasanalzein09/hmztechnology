
const LocalBusinessSchema = ({ locale }: { locale?: string }) => {
    const allBusinessSchemas = [
        // Lebanon Local Business
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.hmz.technology/#lebanon-local-business',
            name: 'HMZ Technology Lebanon - WhatsApp Bot Lebanon',
            description: 'Professional AI chatbot development services in Lebanon. WhatsApp, Instagram, and Messenger automation for Lebanese businesses.',
            url: 'https://www.hmz.technology/lebanon',
            telephone: '+96170106083',
            email: 'sales@hmz.technology',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Beirut Digital District',
                addressLocality: 'Beirut',
                addressRegion: 'Beirut Governorate',
                postalCode: '1103',
                addressCountry: 'LB'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: '33.8938',
                longitude: '35.5018'
            },
            openingHours: 'Mo-Su 00:00-23:59',
            areaServed: [
                { '@type': 'City', 'name': 'Beirut' },
                { '@type': 'City', 'name': 'Tripoli' },
                { '@type': 'City', 'name': 'Sidon' },
                { '@type': 'City', 'name': 'Tyre' },
                { '@type': 'City', 'name': 'Zahle' },
                { '@type': 'City', 'name': 'Jounieh' }
            ],
            serviceType: [
                'AI Chatbot Development Lebanon',
                'WhatsApp Bot Lebanon',
                'Instagram Automation Lebanon',
                'Messenger Chatbot Lebanon',
                'Business Process Automation Beirut',
                'AI Agents Lebanon'
            ],
            priceRange: '$$$',
            locale: 'lb'
        },

        // Saudi Arabia Local Business
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.hmz.technology/#saudi-local-business',
            name: 'HMZ Technology Saudi Arabia - WhatsApp Bot Saudi Arabia',
            description: 'Professional AI chatbot development services in Saudi Arabia. WhatsApp, Instagram, and Messenger automation for Saudi businesses.',
            url: 'https://www.hmz.technology/saudi-arabia',
            telephone: '+96170106083',
            email: 'sales@hmz.technology',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Riyadh',
                addressRegion: 'Riyadh Province',
                addressCountry: 'SA'
            },
            openingHours: 'Mo-Su 00:00-23:59',
            areaServed: [
                { '@type': 'City', 'name': 'Riyadh' },
                { '@type': 'City', 'name': 'Jeddah' },
                { '@type': 'City', 'name': 'Dammam' },
                { '@type': 'City', 'name': 'Mecca' },
                { '@type': 'City', 'name': 'Medina' },
                { '@type': 'City', 'name': 'Taif' }
            ],
            serviceType: [
                'AI Chatbot Development Saudi Arabia',
                'WhatsApp Bot Saudi Arabia',
                'Instagram Automation Saudi Arabia',
                'Business Automation Saudi Arabia',
                'AI Agents Riyadh',
                'Customer Support Automation KSA',
                'Government AI Solutions Saudi'
            ],
            priceRange: '$$$',
            locale: 'sa'
        },

        // UAE Local Business
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.hmz.technology/#uae-local-business',
            name: 'HMZ Technology UAE Dubai - WhatsApp Bot UAE Dubai',
            description: 'Professional AI chatbot development services in the UAE and Dubai. WhatsApp, Instagram, and Messenger automation for Emirati businesses.',
            url: 'https://www.hmz.technology/uae',
            telephone: '+96170106083',
            email: 'sales@hmz.technology',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dubai',
                addressRegion: 'Dubai Emirate',
                addressCountry: 'AE'
            },
            openingHours: 'Mo-Su 00:00-23:59',
            areaServed: [
                { '@type': 'City', 'name': 'Dubai' },
                { '@type': 'City', 'name': 'Abu Dhabi' },
                { '@type': 'City', 'name': 'Sharjah' },
                { '@type': 'City', 'name': 'Ajman' },
                { '@type': 'City', 'name': 'Ras Al Khaimah' },
                { '@type': 'City', 'name': 'Al Ain' }
            ],
            serviceType: [
                'AI Chatbot Development UAE',
                'WhatsApp Bot Dubai',
                'Instagram Automation UAE',
                'Business Automation Dubai',
                'AI Solutions Abu Dhabi',
                'Real Estate AI Bots UAE',
                'Ecommerce Automation Dubai'
            ],
            priceRange: '$$$',
            locale: 'ae'
        },

        // USA Local Business
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.hmz.technology/#usa-local-business',
            name: 'HMZ Technology USA - AI Chatbot Development United States',
            description: 'Professional AI chatbot development services in United States. WhatsApp, Instagram & Messenger automation for American businesses across all 50 states.',
            url: 'https://www.hmz.technology/usa',
            telephone: '+96170106083',
            email: 'sales@hmz.technology',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'New York',
                addressRegion: 'NY',
                addressCountry: 'US'
            },
            openingHours: 'Mo-Su 00:00-23:59',
            areaServed: [
                { '@type': 'State', 'name': 'New York' },
                { '@type': 'State', 'name': 'California' },
                { '@type': 'State', 'name': 'Texas' },
                { '@type': 'State', 'name': 'Florida' },
                { '@type': 'State', 'name': 'Illinois' },
                { '@type': 'State', 'name': 'Pennsylvania' },
                { '@type': 'State', 'name': 'Ohio' },
                { '@type': 'State', 'name': 'Georgia' },
                { '@type': 'Country', 'name': 'United States' }
            ],
            serviceType: [
                'AI Chatbot Development USA',
                'WhatsApp Bot United States',
                'Instagram Automation America',
                'Enterprise AI Solutions USA',
                'Business Automation United States'
            ],
            priceRange: '$$$',
            locale: 'us'
        },

        // Germany Local Business
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.hmz.technology/#germany-local-business',
            name: 'HMZ Technology Germany - AI Chatbot Development',
            description: 'Professional AI chatbot development services in Germany. WhatsApp, Instagram, and Messenger automation for German businesses.',
            url: 'https://www.hmz.technology/deutschland',
            telephone: '+96170106083',
            email: 'sales@hmz.technology',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Berlin',
                addressRegion: 'Berlin',
                addressCountry: 'DE'
            },
            openingHours: 'Mo-Su 00:00-23:59',
            areaServed: [
                { '@type': 'City', 'name': 'Berlin' },
                { '@type': 'City', 'name': 'Munich' },
                { '@type': 'City', 'name': 'Hamburg' },
                { '@type': 'City', 'name': 'Cologne' },
                { '@type': 'City', 'name': 'Frankfurt' },
                { '@type': 'City', 'name': 'Dusseldorf' },
                { '@type': 'City', 'name': 'Stuttgart' },
                { '@type': 'Country', 'name': 'Germany' }
            ],
            serviceType: [
                'AI Chatbot Development Germany',
                'WhatsApp Bot Germany',
                'Instagram Automation Germany',
                'Business Automation Germany',
                'AI Solutions Germany'
            ],
            priceRange: '$$$',
            locale: 'de'
        },

        // France Local Business
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.hmz.technology/#france-local-business',
            name: 'HMZ Technology France - AI Chatbot Development',
            description: 'Professional AI chatbot development services in France. WhatsApp, Instagram, and Messenger automation for French businesses.',
            url: 'https://www.hmz.technology/france',
            telephone: '+96170106083',
            email: 'sales@hmz.technology',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Paris',
                addressRegion: 'Ile-de-France',
                addressCountry: 'FR'
            },
            openingHours: 'Mo-Su 00:00-23:59',
            areaServed: [
                { '@type': 'City', 'name': 'Paris' },
                { '@type': 'City', 'name': 'Lyon' },
                { '@type': 'City', 'name': 'Marseille' },
                { '@type': 'Country', 'name': 'France' }
            ],
            serviceType: [
                'AI Chatbot Development France',
                'WhatsApp Bot France',
                'Instagram Automation France'
            ],
            priceRange: '$$$',
            locale: 'fr'
        },

        // Italy Local Business
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.hmz.technology/#italy-local-business',
            name: 'HMZ Technology Italy - AI Chatbot Development',
            description: 'Professional AI chatbot development services in Italy. WhatsApp, Instagram, and Messenger automation for Italian businesses.',
            url: 'https://www.hmz.technology/italia',
            telephone: '+96170106083',
            email: 'sales@hmz.technology',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Rome',
                addressRegion: 'Lazio',
                addressCountry: 'IT'
            },
            openingHours: 'Mo-Su 00:00-23:59',
            areaServed: [
                { '@type': 'City', 'name': 'Rome' },
                { '@type': 'City', 'name': 'Milan' },
                { '@type': 'Country', 'name': 'Italy' }
            ],
            serviceType: [
                'AI Chatbot Development Italy',
                'WhatsApp Bot Italy',
                'Instagram Automation Italy'
            ],
            priceRange: '$$$',
            locale: 'it'
        },

        // India Local Business
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.hmz.technology/#india-local-business',
            name: 'HMZ Technology India - AI Chatbot Development',
            description: 'Professional AI chatbot development services in India. WhatsApp, Instagram, and Messenger automation for Indian businesses.',
            url: 'https://www.hmz.technology/india',
            telephone: '+96170106083',
            email: 'sales@hmz.technology',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mumbai',
                addressRegion: 'Maharashtra',
                addressCountry: 'IN'
            },
            openingHours: 'Mo-Su 00:00-23:59',
            areaServed: [
                { '@type': 'City', 'name': 'Mumbai' },
                { '@type': 'City', 'name': 'Delhi' },
                { '@type': 'Country', 'name': 'India' }
            ],
            serviceType: [
                'AI Chatbot Development India',
                'WhatsApp Bot India',
                'Instagram Automation India'
            ],
            priceRange: '$$$',
            locale: 'hi' // Mapping Hindi to India locale
        },

        // Malaysia Local Business
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.hmz.technology/#malaysia-local-business',
            name: 'HMZ Technology Malaysia - AI Chatbot Development',
            description: 'Professional AI chatbot development services in Malaysia. WhatsApp, Instagram, and Messenger automation for Malaysian businesses.',
            url: 'https://www.hmz.technology/malaysia',
            telephone: '+96170106083',
            email: 'sales@hmz.technology',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kuala Lumpur',
                addressRegion: 'Wilayah Persekutuan',
                addressCountry: 'MY'
            },
            openingHours: 'Mo-Su 00:00-23:59',
            areaServed: [
                { '@type': 'City', 'name': 'Kuala Lumpur' },
                { '@type': 'Country', 'name': 'Malaysia' }
            ],
            serviceType: [
                'AI Chatbot Development Malaysia',
                'WhatsApp Bot Malaysia',
                'Instagram Automation Malaysia'
            ],
            priceRange: '$$$',
            locale: 'ms' // Mapping Malay to Malaysia locale
        }
        // ... other schemas can be filtered similarly
    ];

    // Filter by locale if provided, otherwise show matching ones or default
    const filteredSchemas = locale
        ? allBusinessSchemas.filter(s => (s as any).locale === locale)
        : allBusinessSchemas.filter(s => (s as any).locale === 'lb'); // Default to Lebanon

    return (
        <div style={{ display: 'none' }}>
            {filteredSchemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema)
                    }}
                />
            ))}

            {/* Service-specific Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        '@id': 'https://www.hmz.technology/#whatsapp-service',
                        name: 'WhatsApp AI Chatbot Development Global',
                        description: 'Professional WhatsApp Business API chatbot development services worldwide. Automated customer service, lead generation, and sales automation.',
                        provider: {
                            '@type': 'Organization',
                            '@id': 'https://www.hmz.technology/#organization'
                        },
                        areaServed: [
                            { '@type': 'Country', 'name': 'Lebanon', 'alternateName': 'Lebanese Republic' },
                            { '@type': 'Country', 'name': 'Saudi Arabia', 'alternateName': 'Kingdom of Saudi Arabia' },
                            { '@type': 'Country', 'name': 'United Arab Emirates', 'alternateName': 'UAE' },
                            { '@type': 'Country', 'name': 'United States', 'alternateName': 'United States of America' },
                            { '@type': 'Country', 'name': 'Germany', 'alternateName': 'Federal Republic of Germany' },
                            { '@type': 'Country', 'name': 'France', 'alternateName': 'French Republic' },
                            { '@type': 'Country', 'name': 'Italy', 'alternateName': 'Italian Republic' },
                            { '@type': 'Country', 'name': 'India', 'alternateName': 'Republic of India' },
                            { '@type': 'Country', 'name': 'Malaysia', 'alternateName': 'Malaysia' }
                        ],
                        serviceType: 'AI Chatbot Development',
                        category: 'Technology Services',
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'AI Chatbot Services',
                            itemListElement: [
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'WhatsApp Business Bot Development'
                                    }
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Instagram Automation Services'
                                    }
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Messenger Chatbot Development'
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
        </div>
    )
}

export default LocalBusinessSchema
