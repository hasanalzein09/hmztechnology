import { motion } from 'framer-motion'
import type { Language } from './types'

interface CaseStudy {
    id: string
    title: string
    client: string
    industry: string
    results: { label: string; value: string }[]
    description: string
    image: string
}

const caseStudies: Record<Language, CaseStudy[]> = {
    en: [
        {
            id: 'banking-automation',
            title: 'Multichannel Support Automation',
            client: 'Tier-1 Regional Bank',
            industry: 'Banking & Finance',
            results: [
                { label: 'Reduction in Support Costs', value: '65%' },
                { label: 'Customer Satisfaction (CSAT)', value: '94%' }
            ],
            description: 'Implemented a WhatsApp & Messenger AI ecosystem handling 50k+ monthly inquiries with zero human intervention for common tasks.',
            image: '/images/case-banking.jpg'
        },
        {
            id: 'retail-scaling',
            title: 'End-to-End E-commerce Bot',
            client: 'Global Fashion Retailer',
            industry: 'E-commerce',
            results: [
                { label: 'Sales Conversion Bump', value: '22%' },
                { label: 'Recovered Carts', value: '$120k/mo' }
            ],
            description: 'Automated the entire shopping journey from product discovery to checkout and tracking via a custom Instagram & WhatsApp AI agent.',
            image: '/images/case-retail.jpg'
        }
    ],
    ar: [
        {
            id: 'banking-automation',
            title: 'أتمتة الدعم عبر القنوات المتعددة',
            client: 'بنك إقليمي من الفئة الأولى',
            industry: 'الخدمات المصرفية والتمويل',
            results: [
                { label: 'خفض تكاليف الدعم', value: '65%' },
                { label: 'رضا العملاء (CSAT)', value: '94%' }
            ],
            description: 'تم تنفيذ نظام بيئي للذكاء الاصطناعي عبر WhatsApp و Messenger يتعامل مع أكثر من 50 ألف استفسار شهرياً دون أي تدخل بشري للمهام الشائعة.',
            image: '/images/case-banking.jpg'
        },
        {
            id: 'retail-scaling',
            title: 'روبوت تجارة إلكترونية متكامل',
            client: 'تاجر تجزئة عالمي للأزياء',
            industry: 'التجارة الإلكترونية',
            results: [
                { label: 'ارتفاع تحويل المبيعات', value: '22%' },
                { label: 'السلال المستردة', value: '120 ألف دولار شهرياً' }
            ],
            description: 'أتمتة رحلة التسوق بالكامل من اكتشاف المنتج إلى السداد والتتبع عبر وكيل ذكاء اصطناعي مخصص لـ Instagram و WhatsApp.',
            image: '/images/case-retail.jpg'
        }
    ],
    de: [
        {
            id: 'banking-automation',
            title: 'Multichannel-Support-Automatisierung',
            client: 'Tier-1 Regionale Bank',
            industry: 'Bankwesen & Finanzen',
            results: [
                { label: 'Supportkosten-Reduzierung', value: '65%' },
                { label: 'Kundenzufriedenheit (CSAT)', value: '94%' }
            ],
            description: 'Implementierung eines WhatsApp & Messenger KI-Ökosystems, das monatlich 50k+ Anfragen ohne menschliches Eingreifen für Routineaufgaben bearbeitet.',
            image: '/images/case-banking.jpg'
        },
        {
            id: 'retail-scaling',
            title: 'End-to-End E-Commerce Bot',
            client: 'Globaler Modeeinzelhändler',
            industry: 'E-Commerce',
            results: [
                { label: 'Umsatzsteigerung', value: '22%' },
                { label: 'Wiederhergestellte Warenkörbe', value: '120k$/Mo' }
            ],
            description: 'Automatisierung der gesamten Shopping-Journey von der Produktentdeckung bis zum Checkout via Instagram & WhatsApp KI-Agent.',
            image: '/images/case-retail.jpg'
        }
    ],
    fr: [
        {
            id: 'banking-automation',
            title: 'Automatisation du Support Multicanal',
            client: 'Banque Régionale de Rang 1',
            industry: 'Banque et Finance',
            results: [
                { label: 'Réduction des coûts support', value: '65%' },
                { label: 'Satisfaction Client (CSAT)', value: '94%' }
            ],
            description: 'Mise en place d\'un écosystème IA WhatsApp & Messenger gérant plus de 50 000 demandes mensuelles sans intervention humaine pour les tâches courantes.',
            image: '/images/case-banking.jpg'
        },
        {
            id: 'retail-scaling',
            title: 'Bot E-commerce de bout en bout',
            client: 'Détaillant de mode mondial',
            industry: 'E-commerce',
            results: [
                { label: 'Augmentation des ventes', value: '22%' },
                { label: 'Paniers récupérés', value: '120k$/mois' }
            ],
            description: 'Automatisation du parcours d\'achat complet, de la découverte du produit au paiement, via un agent IA personnalisé Instagram & WhatsApp.',
            image: '/images/case-retail.jpg'
        }
    ],
    it: [
        {
            id: 'banking-automation',
            title: 'Automazione Supporto Multicanale',
            client: 'Banca Regionale Tier-1',
            industry: 'Bancario e Finanziario',
            results: [
                { label: 'Riduzione costi supporto', value: '65%' },
                { label: 'Soddisfazione Cliente (CSAT)', value: '94%' }
            ],
            description: 'Implementazione di un ecosistema IA WhatsApp e Messenger che gestisce oltre 50.000 richieste mensili senza intervento umano per le attività comuni.',
            image: '/images/case-banking.jpg'
        },
        {
            id: 'retail-scaling',
            title: 'Bot E-commerce End-to-End',
            client: 'Rivenditore di moda globale',
            industry: 'E-commerce',
            results: [
                { label: 'Incremento conversioni vendite', value: '22%' },
                { label: 'Carrelli recuperati', value: '120k$/mese' }
            ],
            description: 'Automazione dell\'intero percorso di acquisto dalla scoperta del prodotto al checkout tramite un agente IA personalizzato su Instagram e WhatsApp.',
            image: '/images/case-retail.jpg'
        }
    ],
    hi: [
        {
            id: 'banking-automation',
            title: 'मल्टीचैनल सपोर्ट ऑटोमेशन',
            client: 'टियर-1 क्षेत्रीय बैंक',
            industry: 'बैंकिंग और वित्त',
            results: [
                { label: 'सपोर्ट लागत में कमी', value: '65%' },
                { label: 'ग्राहक संतुष्टि (CSAT)', value: '94%' }
            ],
            description: 'सामान्य कार्यों के लिए बिना किसी मानवीय हस्तक्षेप के 50k+ मासिक पूछताछ को संभालने के लिए WhatsApp और Messenger AI पारिस्थितिकी तंत्र लागू किया गया।',
            image: '/images/case-banking.jpg'
        },
        {
            id: 'retail-scaling',
            title: 'एंड-टू-एंड ई-कॉमर्स बॉट',
            client: 'वैश्विक फैशन रिटेलर',
            industry: 'ई-कॉमर्स',
            results: [
                { label: 'बिक्री रूपांतरण वृद्धि', value: '22%' },
                { label: 'बरामद गाड़ियां', value: '$120k/माह' }
            ],
            description: 'एक कस्टम Instagram और WhatsApp AI एजेंट के माध्यम से उत्पाद की खोज से लेकर चेकआउट और ट्रैकिंग तक पूरी खरीदारी यात्रा को स्वचालित किया गया।',
            image: '/images/case-retail.jpg'
        }
    ],
    ms: [
        {
            id: 'banking-automation',
            title: 'Automatik Sokongan Berbilang Saluran',
            client: 'Bank Serantau Tier-1',
            industry: 'Perbankan & Kewangan',
            results: [
                { label: 'Pengurangan Kos Sokongan', value: '65%' },
                { label: 'Kepuasan Pelanggan (CSAT)', value: '94%' }
            ],
            description: 'Melaksanakan ekosistem AI WhatsApp & Messenger yang mengendalikan 50k+ pertanyaan bulanan tanpa campur tangan manusia untuk tugas biasa.',
            image: '/images/case-banking.jpg'
        },
        {
            id: 'retail-scaling',
            title: 'Bot E-dagang Hujung ke Hujung',
            client: 'Peruncit Fesyen Global',
            industry: 'E-dagang',
            results: [
                { label: 'Lonjakan Penukaran Jualan', value: '22%' },
                { label: 'Troli Dipulihkan', value: '$120k/bln' }
            ],
            description: 'Mengautomasikan keseluruhan perjalanan membeli-belah dari penemuan produk ke pembayaran dan penjejakan melalui ejen AI Instagram & WhatsApp tersuai.',
            image: '/images/case-retail.jpg'
        }
    ]
}

const CaseStudies = ({ lang }: { lang: string }) => {
    const currentLang = (caseStudies[lang as Language] ? lang : 'en') as Language;
    const studies = caseStudies[currentLang];
    const isRtl = currentLang === 'ar';

    return (
        <section dir={isRtl ? 'rtl' : 'ltr'} className="py-24 bg-slate-950/50 backdrop-blur-sm relative overflow-hidden">
            {/* Gradient Accent */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-brand-purple font-mono text-xs tracking-widest uppercase mb-4 block underline underline-offset-8"
                        >
                            Impact Report
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-white"
                        >
                            {isRtl ? 'قصص النجاح وعائد الاستثمار' : 'Proven Impact & Real-World ROI'}
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 text-lg md:text-xl font-light max-w-sm"
                    >
                        {isRtl ? 'كيف نساعد المؤسسات على النمو من خلال الأتمتة الذكية.' : 'Transforming organizations through industrial-grade AI automation.'}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {studies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-purple/30 transition-all duration-500"
                        >
                            <div className="p-8 md:p-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <div className="text-brand-purple text-sm font-bold uppercase tracking-widest mb-1">{study.industry}</div>
                                        <div className="text-white text-2xl font-black">{study.client}</div>
                                    </div>
                                    <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-brand-purple group-hover:text-white transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="mb-10">
                                    <h3 className="text-xl text-blue-200/80 font-medium mb-4">{study.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-light">{study.description}</p>
                                </div>

                                <div className="mt-auto grid grid-cols-2 gap-4">
                                    {study.results.map((result, rIdx) => (
                                        <div key={rIdx} className="p-6 bg-white/[0.03] rounded-2xl border border-white/5 group-hover:bg-brand-purple/5 transition-all">
                                            <div className="text-3xl font-black text-white mb-1">{result.value}</div>
                                            <div className="text-gray-500 text-xs uppercase tracking-wider">{result.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseStudies
