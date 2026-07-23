import { motion } from 'framer-motion'
import { Check, X, Zap } from 'lucide-react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

interface ComparisonRow {
    label: string
    traditional: string
    hmz: string
}

interface AdvantageTranslation {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    columnAspect: string
    columnTraditional: string
    columnHmz: string
    rows: ComparisonRow[]
    cta: string
}

const translations: Record<Language, AdvantageTranslation> = {
    en: {
        badge: 'The Unfair Advantage',
        title: 'Traditional Team',
        titleHighlight: 'vs HMZ AI Systems',
        subtitle: 'Why pay for limitations when AI gives you superpowers? This is not about replacing humans — it is about giving your business an engine that never sleeps.',
        columnAspect: 'What Matters',
        columnTraditional: 'Traditional Team',
        columnHmz: 'HMZ AI Systems',
        rows: [
            { label: 'Availability', traditional: '9-to-5, weekdays only', hmz: '24/7/365 — never offline' },
            { label: 'Cost', traditional: '$45K+/year per employee', hmz: 'From $200/month' },
            { label: 'Response Time', traditional: 'Hours (if you\'re lucky)', hmz: 'Under 3 seconds' },
            { label: 'Languages', traditional: '1–2 languages', hmz: 'Arabic, English, French +' },
            { label: 'Scaling', traditional: 'Hire, train, wait months', hmz: 'Instant — infinite capacity' },
            { label: 'Sick Days & Vacation', traditional: 'Yes — coverage gaps', hmz: 'Never. Zero downtime' }
        ],
        cta: 'Switch to AI — Free Strategy Call'
    },
    ar: {
        badge: 'الميزة غير العادلة',
        title: 'الفريق التقليدي',
        titleHighlight: 'مقابل أنظمة HMZ AI',
        subtitle: 'لماذا تدفع مقابل القيود بينما AI يعطيك قوى خارقة؟ هذا ليس عن استبدال البشر — بل عن محرك لعملك لا ينام أبداً.',
        columnAspect: 'ما يهمك',
        columnTraditional: 'الفريق التقليدي',
        columnHmz: 'أنظمة HMZ AI',
        rows: [
            { label: 'التوفر', traditional: '9-5، أيام العمل فقط', hmz: '24/7/365 — لا ينقطع أبداً' },
            { label: 'التكلفة', traditional: '+45 ألف دولار سنوياً للموظف', hmz: 'ابتداءً من 200$ شهرياً' },
            { label: 'سرعة الرد', traditional: 'ساعات (إذا كنت محظوظاً)', hmz: 'أقل من 3 ثواني' },
            { label: 'اللغات', traditional: 'لغة أو لغتان', hmz: 'العربية، الإنجليزية، الفرنسية +' },
            { label: 'التوسع', traditional: 'توظيف وتدريب وشهور انتظار', hmz: 'فوري — قدرة لا نهائية' },
            { label: 'المرض والإجازات', traditional: 'نعم — فجوات تغطية', hmz: 'أبداً. صفر توقف' }
        ],
        cta: 'انتقل إلى AI — استشارة مجانية'
    },
    de: {
        badge: 'Der unfaire Vorteil',
        title: 'Traditionelles Team',
        titleHighlight: 'vs HMZ KI-Systeme',
        subtitle: 'Warum für Einschränkungen zahlen, wenn KI Superkräfte liefert? Ein Motor für Ihr Geschäft, der nie schläft.',
        columnAspect: 'Was zählt',
        columnTraditional: 'Traditionelles Team',
        columnHmz: 'HMZ KI-Systeme',
        rows: [
            { label: 'Verfügbarkeit', traditional: '9–17 Uhr, nur werktags', hmz: '24/7/365 — nie offline' },
            { label: 'Kosten', traditional: '45.000 $+/Jahr pro Mitarbeiter', hmz: 'Ab 200 $/Monat' },
            { label: 'Antwortzeit', traditional: 'Stunden', hmz: 'Unter 3 Sekunden' },
            { label: 'Sprachen', traditional: '1–2 Sprachen', hmz: 'Arabisch, Englisch, Französisch +' },
            { label: 'Skalierung', traditional: 'Einstellen, schulen, warten', hmz: 'Sofort — unbegrenzt' },
            { label: 'Krankheit & Urlaub', traditional: 'Ja — Deckungslücken', hmz: 'Niemals. Null Ausfall' }
        ],
        cta: 'Zu KI wechseln — kostenloses Gespräch'
    },
    fr: {
        badge: "L'avantage injuste",
        title: 'Équipe Traditionnelle',
        titleHighlight: 'vs Systèmes IA HMZ',
        subtitle: "Pourquoi payer pour des limites quand l'IA offre des super-pouvoirs ? Un moteur qui ne dort jamais.",
        columnAspect: 'Ce qui compte',
        columnTraditional: 'Équipe traditionnelle',
        columnHmz: 'Systèmes IA HMZ',
        rows: [
            { label: 'Disponibilité', traditional: '9h–17h, jours ouvrés', hmz: '24/7/365 — jamais hors ligne' },
            { label: 'Coût', traditional: '45 000 $+/an par employé', hmz: 'À partir de 200 $/mois' },
            { label: 'Temps de réponse', traditional: 'Des heures', hmz: 'Moins de 3 secondes' },
            { label: 'Langues', traditional: '1–2 langues', hmz: 'Arabe, anglais, français +' },
            { label: 'Évolutivité', traditional: 'Recruter, former, attendre', hmz: 'Instantané — capacité infinie' },
            { label: 'Maladie & vacances', traditional: 'Oui — interruptions', hmz: 'Jamais. Zéro interruption' }
        ],
        cta: "Passez à l'IA — appel gratuit"
    },
    it: {
        badge: 'Il vantaggio sleale',
        title: 'Team Tradizionale',
        titleHighlight: 'vs Sistemi AI HMZ',
        subtitle: "Perché pagare per dei limiti quando l'AI ti dà superpoteri? Un motore che non dorme mai.",
        columnAspect: 'Cosa conta',
        columnTraditional: 'Team tradizionale',
        columnHmz: 'Sistemi AI HMZ',
        rows: [
            { label: 'Disponibilità', traditional: '9–17, solo feriali', hmz: '24/7/365 — mai offline' },
            { label: 'Costo', traditional: '45.000 $+/anno per dipendente', hmz: 'Da 200 $/mese' },
            { label: 'Tempo di risposta', traditional: 'Ore', hmz: 'Meno di 3 secondi' },
            { label: 'Lingue', traditional: '1–2 lingue', hmz: 'Arabo, inglese, francese +' },
            { label: 'Scalabilità', traditional: 'Assumere, formare, attendere', hmz: 'Istantanea — capacità infinita' },
            { label: 'Malattia & ferie', traditional: 'Sì — vuoti di copertura', hmz: 'Mai. Zero downtime' }
        ],
        cta: "Passa all'AI — consulenza gratuita"
    },
    hi: {
        badge: 'अनुचित लाभ',
        title: 'पारंपरिक टीम',
        titleHighlight: 'बनाम HMZ AI सिस्टम',
        subtitle: 'सीमाओं के लिए भुगतान क्यों करें जब AI सुपरपावर देता है? एक इंजन जो कभी नहीं सोता।',
        columnAspect: 'जो मायने रखता है',
        columnTraditional: 'पारंपरिक टीम',
        columnHmz: 'HMZ AI सिस्टम',
        rows: [
            { label: 'उपलब्धता', traditional: '9–5, केवल कार्यदिवस', hmz: '24/7/365 — कभी ऑफ़लाइन नहीं' },
            { label: 'लागत', traditional: '$45K+/वर्ष प्रति कर्मचारी', hmz: '$200/माह से शुरू' },
            { label: 'प्रतिक्रिया समय', traditional: 'घंटे', hmz: '3 सेकंड से कम' },
            { label: 'भाषाएं', traditional: '1–2 भाषाएं', hmz: 'अरबी, अंग्रेज़ी, फ्रेंच +' },
            { label: 'स्केलिंग', traditional: 'भर्ती, प्रशिक्षण, प्रतीक्षा', hmz: 'तुरंत — असीमित क्षमता' },
            { label: 'बीमारी और छुट्टी', traditional: 'हाँ — कवरेज गैप', hmz: 'कभी नहीं। शून्य डाउनटाइम' }
        ],
        cta: 'AI पर जाएं — मुफ़्त कॉल'
    },
    ms: {
        badge: 'Kelebihan Tidak Adil',
        title: 'Pasukan Tradisional',
        titleHighlight: 'vs Sistem AI HMZ',
        subtitle: 'Mengapa bayar untuk had apabila AI memberi kuasa super? Enjin yang tidak pernah tidur.',
        columnAspect: 'Apa Yang Penting',
        columnTraditional: 'Pasukan Tradisional',
        columnHmz: 'Sistem AI HMZ',
        rows: [
            { label: 'Ketersediaan', traditional: '9–5, hari bekerja sahaja', hmz: '24/7/365 — tidak pernah offline' },
            { label: 'Kos', traditional: '$45K+/setahun sepekerja', hmz: 'Bermula $200/bulan' },
            { label: 'Masa Respons', traditional: 'Berjam-jam', hmz: 'Bawah 3 saat' },
            { label: 'Bahasa', traditional: '1–2 bahasa', hmz: 'Arab, Inggeris, Perancis +' },
            { label: 'Penskalaan', traditional: 'Gaji, latih, tunggu berbulan', hmz: 'Segera — kapasiti tanpa had' },
            { label: 'Cuti Sakit & Bercuti', traditional: 'Ya — jurang liputan', hmz: 'Tidak pernah. Sifar henti' }
        ],
        cta: 'Beralih ke AI — Panggilan Percuma'
    }
}

interface AIAdvantageTableProps {
    lang: string
}

const AIAdvantageTable = ({ lang }: AIAdvantageTableProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'

    const getContactLink = () => (lang === 'en' ? '/contact' : `/${lang}/contact`)

    return (
        <section
            dir={isRtl ? 'rtl' : 'ltr'}
            className="relative py-24 md:py-32 bg-[#030014] overflow-hidden"
        >
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-6">
                        <Zap className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium text-cyan-300 tracking-wide">
                            {t.badge}
                        </span>
                    </div>
                    <h2 className="heading-ai text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        {t.title}{' '}
                        <span className="text-gradient-ai">{t.titleHighlight}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="glass-card-ai overflow-hidden"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-3 border-b border-white/10">
                        <div className="p-4 md:p-6 text-white/50 text-sm md:text-base font-medium">
                            {t.columnAspect}
                        </div>
                        <div className="p-4 md:p-6 text-center border-x border-white/10">
                            <span className="text-white/60 text-sm md:text-base font-semibold">
                                {t.columnTraditional}
                            </span>
                        </div>
                        <div className="p-4 md:p-6 text-center relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
                            <span className="relative text-gradient-ai text-sm md:text-base font-bold">
                                {t.columnHmz}
                            </span>
                        </div>
                    </div>

                    {/* Table Rows */}
                    {t.rows.map((row, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="grid grid-cols-3 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="p-4 md:p-6 text-white font-medium text-sm md:text-base flex items-center">
                                {row.label}
                            </div>
                            <div className="p-4 md:p-6 border-x border-white/5 flex items-center justify-center gap-2 text-center">
                                <X className="w-4 h-4 text-red-400/70 shrink-0 hidden sm:block" />
                                <span className="text-white/50 text-xs md:text-sm">
                                    {row.traditional}
                                </span>
                            </div>
                            <div className="p-4 md:p-6 flex items-center justify-center gap-2 text-center relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
                                <Check className="relative w-4 h-4 text-cyan-400 shrink-0 hidden sm:block" />
                                <span className="relative text-white font-medium text-xs md:text-sm">
                                    {row.hmz}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href={getContactLink()}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white text-lg shadow-lg shadow-cyan-500/25 hover:scale-105 transition-transform"
                    >
                        {t.cta}
                        <Zap className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default AIAdvantageTable
