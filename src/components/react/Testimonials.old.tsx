import { motion } from 'framer-motion'
import type { Language } from './types'

/**
 * ⭐ TESTIMONIALS
 * High-trust social proof with glassmorphism and animated accents
 */

const translations: Record<Language, {
    title: string
    subtitle: string
    testimonials: { name: string; role: string; company: string; text: string; rating: number; avatar?: string }[]
}> = {
    en: {
        title: 'Executive Intelligence',
        subtitle: 'Global leaders on the impact of HMZ AI infrastructures.',
        testimonials: [
            { name: 'Ahmed Al-Rashid', role: 'Chief Executive', company: 'Gulf Trading Co.', text: 'HMZ Technology transformed our customer service. Our WhatsApp bot handles 80% of inquiries automatically, saving us $5,000/month.', rating: 5 },
            { name: 'Sarah Johnson', role: 'Marketing Director', company: 'TechStart USA', text: 'The Instagram automation increased our lead generation by 300%. Best investment we made this year.', rating: 5 },
            { name: 'Klaus Müller', role: 'Operations Manager', company: 'AutoHaus Berlin', text: 'Professional solution. 24/7 customer service without staff. Very satisfied with the result.', rating: 5 },
        ]
    },
    ar: {
        title: 'ذكاء تنفيذي',
        subtitle: 'قادة عالميون يتحدثون عن تأثير البنية التحتية لـ HMZ.',
        testimonials: [
            { name: 'أحمد الراشد', role: 'الرئيس التنفيذي', company: 'شركة الخليج للتجارة', text: 'HMZ Technology حوّلت خدمة العملاء لدينا. روبوت الواتساب يتعامل مع 80% من الاستفسارات تلقائياً، مما يوفر لنا $5,000 شهرياً.', rating: 5 },
            { name: 'سارة محمد', role: 'مديرة التسويق', company: 'تك ستارت الإمارات', text: 'أتمتة انستغرام زادت من توليد العملاء المحتملين بنسبة 300%. أفضل استثمار هذا العام.', rating: 5 },
            { name: 'خالد العتيبي', role: 'مدير العمليات', company: 'مجموعة الرياض', text: 'حل احترافي. خدمة عملاء 24/7 بدون موظفين. راضون جداً عن النتيجة.', rating: 5 },
        ]
    },
    de: {
        title: 'Executive Intelligence',
        subtitle: 'Globale Führungskräfte über die Auswirkungen von HMZ KI.',
        testimonials: [
            { name: 'Klaus Müller', role: 'Geschäftsführer', company: 'AutoHaus Berlin', text: 'HMZ Technology hat unseren Kundenservice transformiert. Unser WhatsApp-Bot bearbeitet 80% der Anfragen automatisch.', rating: 5 },
            { name: 'Anna Schmidt', role: 'Marketing-Leiterin', company: 'TechStart GmbH', text: 'Die Instagram-Automatisierung hat unsere Lead-Generierung um 300% gesteigert.', rating: 5 },
            { name: 'Thomas Weber', role: 'Betriebsleiter', company: 'Weber Handel AG', text: 'Professionelle Lösung. 24/7 Kundenservice ohne Personal.', rating: 5 },
        ]
    },
    fr: {
        title: 'Intelligence Exécutive',
        subtitle: 'Les leaders mondiaux sur l\'impact des infrastructures HMZ.',
        testimonials: [
            { name: 'Pierre Dubois', role: 'PDG', company: 'Tech France', text: 'HMZ Technology a transformé notre service client. Notre bot WhatsApp gère 80% des demandes automatiquement.', rating: 5 },
            { name: 'Marie Laurent', role: 'Dir. Marketing', company: 'StartUp Paris', text: 'L\'automatisation Instagram a augmenté notre génération de leads de 300%.', rating: 5 },
            { name: 'Jean Martin', role: 'Dir. Opérations', company: 'Commerce Lyon', text: 'Solution professionnelle. Service client 24/7 sans personnel.', rating: 5 },
        ]
    },
    it: {
        title: 'Intelligence Esecutiva',
        subtitle: 'Leader globali sull\'impatto delle infrastrutture HMZ.',
        testimonials: [
            { name: 'Marco Rossi', role: 'CEO', company: 'Tech Italia', text: 'HMZ Technology ha trasformato il nostro servizio clienti. Bot WhatsApp gestisce l\'80% delle richieste.', rating: 5 },
            { name: 'Giulia Bianchi', role: 'Direttrice Marketing', company: 'StartUp Milano', text: 'L\'automazione Instagram ha aumentato la generazione di lead del 300%.', rating: 5 },
            { name: 'Luca Ferrari', role: 'Direttore Operativo', company: 'Commercio Roma', text: 'Soluzione professionale. Servizio clienti 24/7 senza personale.', rating: 5 },
        ]
    },
    hi: {
        title: 'कार्यकारी इंटेलिजेंस',
        subtitle: 'HMZ AI बुनियादी ढांचे के प्रभाव पर वैश्विक नेता।',
        testimonials: [
            { name: 'आरव पटेल', role: 'CEO', company: 'Tech India Ltd.', text: 'HMZ Technology ने हमारी ग्राहक सेवा को बदल दिया। हमारा WhatsApp बॉट 80% पूछताछ को स्वचालित रूप से संभालता है।', rating: 5 },
            { name: 'रिया शर्मा', role: 'निदेशक', company: 'StartUp Delhi', text: 'Instagram ऑटोमेशन ने हमारी लीड जनरेशन में 300% की वृद्धि की।', rating: 5 },
            { name: 'विक्रम सिंह', role: 'प्रबंधक', company: 'Retail Mumbai', text: 'पेशेवर समाधान। कर्मचारियों के बिना 24/7 ग्राहक सेवा।', rating: 5 },
        ]
    },
    ms: {
        title: 'Perisikan Eksekutif',
        subtitle: 'Pemimpin global mengenai kesan infrastruktur HMZ AI.',
        testimonials: [
            { name: 'Mohd Azlan', role: 'CEO', company: 'Tech Malaysia', text: 'HMZ Technology mengubah perkhidmatan pelanggan kami. Bot WhatsApp kami mengendalikan 80% pertanyaan.', rating: 5 },
            { name: 'Siti Aminah', role: 'Pengarah Pemasaran', company: 'StartUp KL', text: 'Automasi Instagram meningkatkan penjanaan lead kami sebanyak 300%.', rating: 5 },
            { name: 'Wong Wei', role: 'Pengurus Operasi', company: 'Retail Penang', text: 'Penyelesaian profesional. Perkhidmatan pelanggan 24/7 tanpa kakitangan.', rating: 5 },
        ]
    }
}

interface TestimonialsProps {
    lang: string;
}

const Testimonials = ({ lang }: TestimonialsProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language;
    const t = translations[currentLang];
    const isRtl = currentLang === 'ar';

    return (
        <section dir={isRtl ? 'rtl' : 'ltr'} className="py-24 relative overflow-hidden bg-slate-950">
            {/* Design Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-tighter mb-6"
                    >
                        Verified Deployments
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter"
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="glass-card p-10 flex flex-col hover:border-blue-500/30 transition-all duration-500 relative group"
                        >
                            <div className="absolute top-8 right-8 text-6xl text-white/5 font-serif group-hover:text-blue-500/10 transition-colors pointer-events-none">
                                &rdquo;
                            </div>

                            <div className="flex mb-8 gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-blue-100/90 mb-10 leading-relaxed font-light text-lg italic grow">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                                <div className="w-14 h-14 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl border border-white/10 group-hover:border-blue-500/50 transition-colors">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white font-bold tracking-tight text-lg">{testimonial.name}</p>
                                    <p className="text-blue-400/60 text-xs font-mono uppercase tracking-widest">{testimonial.role} / {testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
