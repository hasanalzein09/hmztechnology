import { motion } from 'framer-motion'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

interface CaseStudy {
    title: string
    industry: string
    challenge: string
    result: string
    metrics: { value: string; label: string }[]
    gradient: string
}

interface CaseStudyTranslation {
    title: string
    subtitle: string
    viewAll: string
    caseStudies: CaseStudy[]
}

const translations: Record<Language, CaseStudyTranslation> = {
    en: {
        title: 'They Stopped Losing Customers. You Can Too.',
        subtitle: 'Real results from real businesses like yours.',
        viewAll: 'Read Full Story',
        caseStudies: [
            {
                title: 'Real Estate Agency',
                industry: 'Real Estate',
                challenge: 'Missing 70% of inquiries outside business hours',
                result: 'Now captures leads at 2AM and books viewings automatically',
                metrics: [
                    { value: '+340%', label: 'More Leads' },
                    { value: '3 sec', label: 'Response Time' },
                    { value: '24/7', label: 'Availability' }
                ],
                gradient: 'from-amber-500 to-orange-600'
            },
            {
                title: 'E-Commerce Store',
                industry: 'Retail',
                challenge: 'Team overwhelmed with 200+ daily support tickets',
                result: 'AI handles 80% of questions instantly. Team focuses on complex issues.',
                metrics: [
                    { value: '-80%', label: 'Ticket Volume' },
                    { value: '< 5s', label: 'Response Time' },
                    { value: '4.9★', label: 'Customer Rating' }
                ],
                gradient: 'from-purple-500 to-pink-600'
            },
            {
                title: 'Medical Clinic',
                industry: 'Healthcare',
                challenge: 'High no-show rate and manual appointment booking',
                result: 'Smart reminders and easy rebooking reduced no-shows significantly',
                metrics: [
                    { value: '-60%', label: 'No-Shows' },
                    { value: '2 min', label: 'Avg Booking' },
                    { value: '24/7', label: 'Booking Available' }
                ],
                gradient: 'from-cyan-500 to-blue-600'
            }
        ]
    },
    ar: {
        title: 'هم وقّفوا خسارة العملاء. وأنت كمان تقدر.',
        subtitle: 'نتائج حقيقية من شركات مثل شركتك.',
        viewAll: 'اقرأ القصة كاملة',
        caseStudies: [
            {
                title: 'وكالة عقارية',
                industry: 'العقارات',
                challenge: 'تفويت 70% من الاستفسارات خارج ساعات العمل',
                result: 'الحين تلتقط العملاء الساعة 2 بالليل وتحجز معاينات تلقائياً',
                metrics: [
                    { value: '+٣٤٠٪', label: 'عملاء أكثر' },
                    { value: '٣ ث', label: 'وقت الرد' },
                    { value: '٢٤/٧', label: 'متوفر دائماً' }
                ],
                gradient: 'from-amber-500 to-orange-600'
            },
            {
                title: 'متجر إلكتروني',
                industry: 'التجزئة',
                challenge: 'الفريق مثقل بـ +200 تذكرة دعم يومياً',
                result: 'AI يرد على 80% من الأسئلة فوراً. الفريق يركز على المعقد.',
                metrics: [
                    { value: '-٨٠٪', label: 'حجم التذاكر' },
                    { value: '< ٥ث', label: 'وقت الرد' },
                    { value: '٤.٩★', label: 'تقييم العملاء' }
                ],
                gradient: 'from-purple-500 to-pink-600'
            },
            {
                title: 'عيادة طبية',
                industry: 'الرعاية الصحية',
                challenge: 'نسبة تغيب عالية وحجز يدوي للمواعيد',
                result: 'تذكيرات ذكية وإعادة حجز سهلة قللت التغيب بشكل كبير',
                metrics: [
                    { value: '-٦٠٪', label: 'نسبة التغيب' },
                    { value: '٢ د', label: 'متوسط الحجز' },
                    { value: '٢٤/٧', label: 'حجز متاح' }
                ],
                gradient: 'from-cyan-500 to-blue-600'
            }
        ]
    },
    de: {
        title: 'Erfolgsgeschichten',
        subtitle: 'Echte Ergebnisse von Unternehmen wie Ihrem',
        viewAll: 'Fallstudie ansehen',
        caseStudies: [
            {
                title: 'Immobilienagentur',
                industry: 'Immobilien',
                challenge: '70% der Anfragen außerhalb der Geschäftszeiten verpasst',
                result: 'KI-Agent qualifiziert Leads und bucht Besichtigungen 24/7',
                metrics: [
                    { value: '+340%', label: 'Lead-Antwort' },
                    { value: '24/7', label: 'Verfügbarkeit' },
                    { value: '+85%', label: 'Buchungen' }
                ],
                gradient: 'from-amber-500 to-orange-600'
            },
            {
                title: 'E-Commerce Shop',
                industry: 'Einzelhandel',
                challenge: '200+ tägliche Support-Tickets überfordern das Team',
                result: '80% der Anfragen automatisiert, Team fokussiert auf Komplexes',
                metrics: [
                    { value: '-80%', label: 'Ticket-Volumen' },
                    { value: '< 5s', label: 'Antwortzeit' },
                    { value: '+45%', label: 'Zufriedenheit' }
                ],
                gradient: 'from-purple-500 to-pink-600'
            },
            {
                title: 'Arztpraxis',
                industry: 'Gesundheit',
                challenge: 'Hohe No-Show-Rate und manuelle Terminbuchung',
                result: 'Smarte Erinnerungen reduzierten No-Shows',
                metrics: [
                    { value: '-60%', label: 'No-Shows' },
                    { value: '2min', label: 'Buchungszeit' },
                    { value: '+30%', label: 'Effizienz' }
                ],
                gradient: 'from-cyan-500 to-blue-600'
            }
        ]
    },
    fr: {
        title: 'Histoires de réussite',
        subtitle: 'Des résultats réels d\'entreprises comme la vôtre',
        viewAll: 'Voir l\'étude de cas',
        caseStudies: [
            {
                title: 'Agence immobilière',
                industry: 'Immobilier',
                challenge: '70% des demandes manquées en dehors des heures',
                result: 'L\'agent IA qualifie les leads et réserve 24/7',
                metrics: [
                    { value: '+340%', label: 'Réponse leads' },
                    { value: '24/7', label: 'Disponibilité' },
                    { value: '+85%', label: 'Réservations' }
                ],
                gradient: 'from-amber-500 to-orange-600'
            },
            {
                title: 'Boutique E-Commerce',
                industry: 'Commerce',
                challenge: '200+ tickets de support quotidiens submergent l\'équipe',
                result: '80% des demandes automatisées',
                metrics: [
                    { value: '-80%', label: 'Volume tickets' },
                    { value: '< 5s', label: 'Temps réponse' },
                    { value: '+45%', label: 'Satisfaction' }
                ],
                gradient: 'from-purple-500 to-pink-600'
            },
            {
                title: 'Clinique médicale',
                industry: 'Santé',
                challenge: 'Taux élevé d\'absences et réservation manuelle',
                result: 'Rappels intelligents ont réduit les absences',
                metrics: [
                    { value: '-60%', label: 'Absences' },
                    { value: '2min', label: 'Réservation' },
                    { value: '+30%', label: 'Efficacité' }
                ],
                gradient: 'from-cyan-500 to-blue-600'
            }
        ]
    },
    it: {
        title: 'Storie di successo',
        subtitle: 'Risultati reali da aziende come la tua',
        viewAll: 'Vedi caso studio',
        caseStudies: [
            {
                title: 'Agenzia immobiliare',
                industry: 'Immobiliare',
                challenge: '70% delle richieste perse fuori orario',
                result: 'Agente IA qualifica lead e prenota visite 24/7',
                metrics: [
                    { value: '+340%', label: 'Risposta lead' },
                    { value: '24/7', label: 'Disponibilità' },
                    { value: '+85%', label: 'Prenotazioni' }
                ],
                gradient: 'from-amber-500 to-orange-600'
            },
            {
                title: 'Negozio E-Commerce',
                industry: 'Retail',
                challenge: '200+ ticket di supporto giornalieri',
                result: '80% delle richieste automatizzate',
                metrics: [
                    { value: '-80%', label: 'Volume ticket' },
                    { value: '< 5s', label: 'Tempo risposta' },
                    { value: '+45%', label: 'Soddisfazione' }
                ],
                gradient: 'from-purple-500 to-pink-600'
            },
            {
                title: 'Clinica medica',
                industry: 'Sanità',
                challenge: 'Alto tasso di no-show e prenotazione manuale',
                result: 'Promemoria smart hanno ridotto i no-show',
                metrics: [
                    { value: '-60%', label: 'No-Show' },
                    { value: '2min', label: 'Prenotazione' },
                    { value: '+30%', label: 'Efficienza' }
                ],
                gradient: 'from-cyan-500 to-blue-600'
            }
        ]
    },
    hi: {
        title: 'सफलता की कहानियां',
        subtitle: 'आपके जैसे व्यवसायों से वास्तविक परिणाम',
        viewAll: 'केस स्टडी देखें',
        caseStudies: [
            {
                title: 'रियल एस्टेट एजेंसी',
                industry: 'रियल एस्टेट',
                challenge: 'व्यावसायिक घंटों के बाहर 70% पूछताछ छूट रही थी',
                result: 'AI एजेंट अब 24/7 लीड्स को क्वालिफाई करता है',
                metrics: [
                    { value: '+340%', label: 'लीड रिस्पॉन्स' },
                    { value: '24/7', label: 'उपलब्धता' },
                    { value: '+85%', label: 'बुकिंग' }
                ],
                gradient: 'from-amber-500 to-orange-600'
            },
            {
                title: 'ई-कॉमर्स स्टोर',
                industry: 'रिटेल',
                challenge: 'रोजाना 200+ सपोर्ट टिकट टीम को ओवरलोड कर रहे थे',
                result: '80% पूछताछ स्वचालित, टीम जटिल मुद्दों पर ध्यान देती है',
                metrics: [
                    { value: '-80%', label: 'टिकट वॉल्यूम' },
                    { value: '< 5s', label: 'रिस्पॉन्स टाइम' },
                    { value: '+45%', label: 'संतुष्टि' }
                ],
                gradient: 'from-purple-500 to-pink-600'
            },
            {
                title: 'मेडिकल क्लिनिक',
                industry: 'हेल्थकेयर',
                challenge: 'उच्च नो-शो दर और मैनुअल अपॉइंटमेंट बुकिंग',
                result: 'स्मार्ट रिमाइंडर ने नो-शो कम किए',
                metrics: [
                    { value: '-60%', label: 'नो-शो' },
                    { value: '2min', label: 'औसत बुकिंग' },
                    { value: '+30%', label: 'दक्षता' }
                ],
                gradient: 'from-cyan-500 to-blue-600'
            }
        ]
    },
    ms: {
        title: 'Cerita Kejayaan',
        subtitle: 'Hasil sebenar dari perniagaan seperti anda',
        viewAll: 'Lihat Kajian Kes',
        caseStudies: [
            {
                title: 'Agensi Hartanah',
                industry: 'Hartanah',
                challenge: 'Terlepas 70% pertanyaan di luar waktu pejabat',
                result: 'Ejen AI kini menapis lead dan menempah lawatan 24/7',
                metrics: [
                    { value: '+340%', label: 'Respons Lead' },
                    { value: '24/7', label: 'Ketersediaan' },
                    { value: '+85%', label: 'Tempahan' }
                ],
                gradient: 'from-amber-500 to-orange-600'
            },
            {
                title: 'Kedai E-Dagang',
                industry: 'Runcit',
                challenge: '200+ tiket sokongan harian membebankan pasukan',
                result: '80% pertanyaan diautomasi',
                metrics: [
                    { value: '-80%', label: 'Jumlah Tiket' },
                    { value: '< 5s', label: 'Masa Respons' },
                    { value: '+45%', label: 'Kepuasan' }
                ],
                gradient: 'from-purple-500 to-pink-600'
            },
            {
                title: 'Klinik Perubatan',
                industry: 'Kesihatan',
                challenge: 'Kadar tidak hadir tinggi dan tempahan manual',
                result: 'Peringatan pintar mengurangkan ketidakhadiran',
                metrics: [
                    { value: '-60%', label: 'Tidak Hadir' },
                    { value: '2min', label: 'Purata Tempahan' },
                    { value: '+30%', label: 'Kecekapan' }
                ],
                gradient: 'from-cyan-500 to-blue-600'
            }
        ]
    }
}

interface CaseStudiesProps {
    lang: string
}

const CaseStudies = ({ lang }: CaseStudiesProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'

    return (
        <section 
            dir={isRtl ? 'rtl' : 'ltr'}
            className="relative py-24 md:py-32 bg-[#030014] overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-ai text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        {t.title}
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {t.caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group"
                        >
                            <div className="glass-card-ai p-8 h-full relative overflow-hidden">
                                {/* Gradient Glow */}
                                <div 
                                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${study.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}
                                />

                                {/* Industry Badge */}
                                <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${study.gradient} bg-opacity-20 border border-white/10 text-xs font-medium text-white/80 mb-6`}>
                                    {study.industry}
                                </div>

                                {/* Title */}
                                <h3 className="heading-ai text-2xl font-bold text-white mb-4">
                                    {study.title}
                                </h3>

                                {/* Challenge */}
                                <div className="mb-4">
                                    <span className="text-red-400/80 text-sm font-medium">Challenge:</span>
                                    <p className="text-white/60 text-sm mt-1">{study.challenge}</p>
                                </div>

                                {/* Result */}
                                <div className="mb-6">
                                    <span className="text-green-400/80 text-sm font-medium">Result:</span>
                                    <p className="text-white/60 text-sm mt-1">{study.result}</p>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                                    {study.metrics.map((metric, i) => (
                                        <div key={i} className="text-center">
                                            <div className={`stat-number text-xl font-bold`}>
                                                {metric.value}
                                            </div>
                                            <div className="text-xs text-white/40 mt-1">
                                                {metric.label}
                                            </div>
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
