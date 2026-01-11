import { motion } from 'framer-motion'
import type { Language } from './types'

/**
 * 🏆 AUTHORITY STRIP (PREVIOUSLY TRUST BADGES)
 * High-impact social proof with industrial tech styling
 */

const translations: Record<Language, {
    title: string
    subtitle: string
    badges: { icon: string; value: string; label: string; detail: string }[]
}> = {
    en: {
        title: 'Global Performance Infrastructure',
        subtitle: 'Enterprise-grade results delivered across 25+ countries',
        badges: [
            { icon: '🚀', value: '500+', label: 'Deployments', detail: 'Production-ready agents' },
            { icon: '⭐', value: '4.9/5', label: 'Satisfaction', detail: 'Executive-level rating' },
            { icon: '🤖', value: '1M+', label: 'Daily Events', detail: 'Automated interactions' },
            { icon: '💰', value: '$2M+', label: 'Net Savings', detail: 'Annual operational ROI' },
            { icon: '🌍', value: '25+', label: 'Regions', detail: 'Global cloud footprint' },
            { icon: '⚡', value: '<200ms', label: 'Latency', detail: 'Industrial-grade speed' }
        ]
    },
    ar: {
        title: 'بنية تحتية للأداء العالمي',
        subtitle: 'نتائج على مستوى المؤسسات يتم تسليمها عبر أكثر من 25 دولة',
        badges: [
            { icon: '🚀', value: '+500', label: 'عملية نشر', detail: 'وكلاء جاهزون للإنتاج' },
            { icon: '⭐', value: '4.9/5', label: 'رضا العملاء', detail: 'تقييم على مستوى تنفيذي' },
            { icon: '🤖', value: '+1M', label: 'حدث يومي', detail: 'تفاعلات مؤتمتة' },
            { icon: '💰', value: '+$2M', label: 'صافي التوفير', detail: 'عائد الاستثمار التشغيلي' },
            { icon: '🌍', value: '+25', label: 'منطقة', detail: 'بصمة سحابية عالمية' },
            { icon: '⚡', value: '200ms>', label: 'زمن الاستجابة', detail: 'سرعة بمستوى صناعي' }
        ]
    },
    // ... translations updated to match new schema
    de: {
        title: 'Globale Performance-Infrastruktur',
        subtitle: 'Enterprise-Ergebnisse in über 25 Ländern',
        badges: [
            { icon: '🚀', value: '500+', label: 'Deployments', detail: 'Produktionsbereite Agenten' },
            { icon: '⭐', value: '4,9/5', label: 'Zufriedenheit', detail: 'Executive-Bewertung' },
            { icon: '🤖', value: '1M+', label: 'Events', detail: 'Automatisierte Interaktionen' },
            { icon: '💰', value: '2M€+', label: 'Ersparnis', detail: 'Jährlicher ROI' },
            { icon: '🌍', value: '25+', label: 'Regionen', detail: 'Globaler Footprint' },
            { icon: '⚡', value: '<200ms', label: 'Latenz', detail: 'Industriegeschwindigkeit' }
        ]
    },
    fr: {
        title: 'Infrastructure de Performance Globale',
        subtitle: 'Résultats entreprise livrés dans plus de 25 pays',
        badges: [
            { icon: '🚀', value: '500+', label: 'Déploiements', detail: 'Agents prêts pour la prod' },
            { icon: '⭐', value: '4,9/5', label: 'Satisfaction', detail: 'Évaluation exécutive' },
            { icon: '🤖', value: '1M+', label: 'Événements', detail: 'Interactions automatisées' },
            { icon: '💰', value: '2M€+', label: 'Économies', detail: 'ROI opérationnel annuel' },
            { icon: '🌍', value: '25+', label: 'Régions', detail: 'Empreinte cloud mondiale' },
            { icon: '⚡', value: '<200ms', label: 'Latence', detail: 'Vitesse industrielle' }
        ]
    },
    it: {
        title: 'Infrastruttura di Performance Globale',
        subtitle: 'Risultati enterprise in oltre 25 paesi',
        badges: [
            { icon: '🚀', value: '500+', label: 'Distribuzioni', detail: 'Agenti pronti alla produzione' },
            { icon: '⭐', value: '4,9/5', label: 'Soddisfazione', detail: 'Valutazione executive' },
            { icon: '🤖', value: '1M+', label: 'Eventi', detail: 'Interazioni automatizzate' },
            { icon: '💰', value: '2M€+', label: 'Risparmi', detail: 'ROI operativo annuo' },
            { icon: '🌍', value: '25+', label: 'Regioni', detail: 'Presenza cloud globale' },
            { icon: '⚡', value: '<200ms', label: 'Latenza', detail: 'Velocità industriale' }
        ]
    },
    hi: {
        title: 'वैश्विक प्रदर्शन बुनियादी ढांचा',
        subtitle: '25+ देशों में दिया गया एंटरप्राइज़-ग्रेड परिणाम',
        badges: [
            { icon: '🚀', value: '500+', label: 'परिनियोजन', detail: 'उत्पादन के लिए तैयार एजेंट' },
            { icon: '⭐', value: '4.9/5', label: 'संतुष्टि', detail: 'कार्यकारी स्तर की रेटिंग' },
            { icon: '🤖', value: '1M+', label: 'दैनिक कार्यक्रम', detail: 'स्वचालित बातचीत' },
            { icon: '💰', value: '$2M+', label: 'शुद्ध बचत', detail: 'वार्षिक परिचालन ROI' },
            { icon: '🌍', value: '25+', label: 'क्षेत्रों', detail: 'वैश्विक क्लाउड पदचिह्न' },
            { icon: '⚡', value: '<200ms', label: 'विलंबता', detail: 'औद्योगिक ग्रेड गति' }
        ]
    },
    ms: {
        title: 'Infrastruktur Prestasi Global',
        subtitle: 'Keputusan gred perusahaan disampaikan di 25+ negara',
        badges: [
            { icon: '🚀', value: '500+', label: 'Penempatan', detail: 'Ejen sedia pengeluaran' },
            { icon: '⭐', value: '4.9/5', label: 'Kepuasan', detail: 'Penilaian peringkat eksekutif' },
            { icon: '🤖', value: '1M+', label: 'Acara Harian', detail: 'Interaksi automatik' },
            { icon: '💰', value: '$2M+', label: 'Simpanan Bersih', detail: 'ROI operasi tahunan' },
            { icon: '🌍', value: '25+', label: 'Wilayah', detail: 'Jejak awan global' },
            { icon: '⚡', value: '<200ms', label: 'Kependaman', detail: 'Kelajuan gred industri' }
        ]
    }
}

interface TrustBadgesProps {
    lang: string;
}

const TrustBadges = ({ lang }: TrustBadgesProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language;
    const t = translations[currentLang];
    const isRtl = currentLang === 'ar';

    return (
        <section dir={isRtl ? 'rtl' : 'ltr'} className="py-24 relative overflow-hidden bg-slate-950">
            {/* Subtle Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-4 block"
                    >
                        Standard of Excellence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
                    >
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 text-lg md:text-xl font-light"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 glass-card group hover:bg-white/[0.08] transition-all border-white/5"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300">
                                    <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all">{badge.icon}</span>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-white mb-1 group-hover:text-gradient transition-all">{badge.value}</div>
                                    <div className="text-blue-200/60 font-medium text-sm mb-2 uppercase tracking-wide">{badge.label}</div>
                                    <div className="text-gray-500 text-sm leading-relaxed">{badge.detail}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Authority Line - Hidden for now, can be used for scrolling logos later */}
                <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all cursor-default">
                    <div className="text-white font-black text-xl tracking-tighter italic">ENTERPRISE</div>
                    <div className="text-white font-black text-xl tracking-tighter italic">FINTECH</div>
                    <div className="text-white font-black text-xl tracking-tighter italic">GOVERNMENT</div>
                    <div className="text-white font-black text-xl tracking-tighter italic">HEALTHCARE</div>
                    <div className="text-white font-black text-xl tracking-tighter italic">RETAIL</div>
                </div>
            </div>
        </section>
    )
}

export default TrustBadges
