import { motion } from 'framer-motion'
import type { Language } from './types'

/**
 * 📈 PROCESS WORKFLOW
 * Elegant step-by-step visualization of HMZ's methodology
 */

const translations: Record<Language, {
    title: string
    subtitle: string
    steps: { title: string; desc: string; icon: string }[]
}> = {
    en: {
        title: 'The HMZ Methodology',
        subtitle: 'Our proven framework for deploying enterprise-grade AI infrastructures.',
        steps: [
            { title: 'Discovery & Audit', desc: 'Deep-dive into your operational bottlenecks and data landscape.', icon: '🔍' },
            { title: 'Architecture Design', desc: 'Crafting bespoke AI agent workflows and integration maps.', icon: '🏗️' },
            { title: 'Rapid Prototype', desc: 'Low-latency pilot deployments for immediate feedback loops.', icon: '⚡' },
            { title: 'Global Scale', desc: 'Enterprise-wide rollout with 99.9% uptime and zero-drift monitoring.', icon: '🌍' }
        ]
    },
    ar: {
        title: 'منهجية HMZ',
        subtitle: 'إطار عملنا المثبت لنشر البنى التحتية للذكاء الاصطناعي بمستوى المؤسسات.',
        steps: [
            { title: 'الاكتشاف والتدقيق', desc: 'دراسة عميقة لعقبات التشغيل ومشهد البيانات لديك.', icon: '🔍' },
            { title: 'تصميم البنية', desc: 'صياغة مسارات عمل مخصصة لوكلاء الذكاء الاصطناعي وخرائط التكامل.', icon: '🏗️' },
            { title: 'النموذج الأولي', desc: 'تطبيقات تجريبية سريعة للحصول على تعليقات فورية.', icon: '⚡' },
            { title: 'التوسع العالمي', desc: 'نشر على مستوى المؤسسة مع مراقبة مستمرة وضمان الأداء.', icon: '🌍' }
        ]
    },
    de: {
        title: 'Die HMZ-Methodik',
        subtitle: 'Unser bewährter Rahmen für den Einsatz von KI-Infrastrukturen.',
        steps: [
            { title: 'Analyse & Audit', desc: 'Tiefgreifende Untersuchung Ihrer betrieblichen Engpässe.', icon: '🔍' },
            { title: 'Design & Architektur', desc: 'Entwurf maßgeschneiderter KI-Agenten und Integrationspläne.', icon: '🏗️' },
            { title: 'Prototyping', desc: 'Schnelle Pilotbereitstellungen für sofortiges Feedback.', icon: '⚡' },
            { title: 'Globaler Rollout', desc: 'Unternehmensweite Skalierung mit höchster Zuverlässigkeit.', icon: '🌍' }
        ]
    },
    fr: {
        title: 'La Méthodologie HMZ',
        subtitle: 'Notre cadre éprouvé pour le déploiement d\'infrastructures IA.',
        steps: [
            { title: 'Audit & Découverte', desc: 'Analyse approfondie de vos processus et données.', icon: '🔍' },
            { title: 'Conception Architecture', desc: 'Création de flux d\'agents IA sur mesure.', icon: '🏗️' },
            { title: 'Prototypage Rapide', desc: 'Déploiements pilotes pour un retour immédiat.', icon: '⚡' },
            { title: 'Déploiement Global', desc: 'Mise à l\'échelle avec une disponibilité de 99,9%.', icon: '🌍' }
        ]
    },
    it: {
        title: 'La Metodologia HMZ',
        subtitle: 'Il nostro framework per il deployment di infrastrutture IA.',
        steps: [
            { title: 'Audit & Discovery', desc: 'Analisi approfondita dei colli di bottiglia operativi.', icon: '🔍' },
            { title: 'Design Architetturale', desc: 'Creazione di workflow IA personalizzati.', icon: '🏗️' },
            { title: 'Prototipazione Rapida', desc: 'Deployment pilota per feedback immediati.', icon: '⚡' },
            { title: 'Scale-up Globale', desc: 'Rollout aziendale con monitoraggio continuo.', icon: '🌍' }
        ]
    },
    hi: {
        title: 'HMZ कार्यप्रणाली',
        subtitle: 'एंटरप्राइज़-ग्रेड AI बुनियादी ढांचे को तैनात करने के लिए हमारा सिद्ध ढांचा।',
        steps: [
            { title: 'खोज और ऑडिट', desc: 'आपकी परिचालन बाधाओं और डेटा परिदृश्य में गहराई से गोता लगाना।', icon: '🔍' },
            { title: 'आर्किटेक्चर डिजाइन', desc: 'कस्टम AI एजेंट वर्कफ़्लो और एकीकरण मानचित्र तैयार करना।', icon: '🏗️' },
            { title: 'रैपिड प्रोटोटाइप', desc: 'तत्काल फीडबैक के लिए लो-लेटेंसी पायलट परिनियोजन।', icon: '⚡' },
            { title: 'वैश्विक पैमाना', desc: '99.9% अपटाइम के साथ उद्यम-व्यापी रोलआउट।', icon: '🌍' }
        ]
    },
    ms: {
        title: 'Metodologi HMZ',
        subtitle: 'Kerangka kerja terbukti kami untuk menggunakan infrastruktur AI.',
        steps: [
            { title: 'Audit & Penemuan', desc: 'Analisis mendalam tentang operasi dan data anda.', icon: '🔍' },
            { title: 'Reka Bentuk Arkitektur', desc: 'Membina aliran kerja ejen AI tersuai.', icon: '🏗️' },
            { title: 'Prototaip Pantas', desc: 'Penyebaran rintis untuk maklum balas segera.', icon: '⚡' },
            { title: 'Skala Global', desc: 'Pelancaran menyeluruh dengan pemantauan prestasi.', icon: '🌍' }
        ]
    }
}

interface ProcessWorkflowProps {
    lang: string;
}

const ProcessWorkflow = ({ lang }: ProcessWorkflowProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language;
    const t = translations[currentLang];
    const isRtl = currentLang === 'ar';

    return (
        <section dir={isRtl ? 'rtl' : 'ltr'} className="py-32 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
                    >
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 text-lg md:text-2xl font-light max-w-2xl"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {t.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Connector Line (Desktop) */}
                            {index < t.steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-[80%] w-full h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent z-0" />
                            )}

                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center text-4xl mb-8 border border-white/10 group-hover:border-blue-500/50 transition-colors shadow-2xl shadow-blue-500/5">
                                    {step.icon}
                                </div>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="font-mono text-xs text-blue-500 font-bold uppercase tracking-widest">Phase 0{index + 1}</span>
                                    <div className="h-[1px] w-12 bg-white/10" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light group-hover:text-gray-300 transition-colors">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA / Branding */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
                >
                    <div className="flex gap-4">
                        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-xs font-mono text-white/40 uppercase tracking-widest">System Status: Optimized for ROI</span>
                    </div>
                    <a href="/contact" className="group flex items-center gap-4 text-white">
                        <span className="font-black text-sm uppercase tracking-[0.2em]">Start Partnership Development</span>
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default ProcessWorkflow
