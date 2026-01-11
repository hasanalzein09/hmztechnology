import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Language } from './types';

// Define translations locally to ensure atomic component
const translations: Record<Language, {
    title: string
    subtitle: string
    services: {
        whatsapp: { title: string; desc: string }
        instagram: { title: string; desc: string }
        messenger: { title: string; desc: string }
        nextjs: { title: string; desc: string }
        ai: { title: string; desc: string }
        seo: { title: string; desc: string }
    }
    cta: string
    viewAll: string
}> = {
    en: {
        title: 'Our AI Services',
        subtitle: 'Enterprise-grade automation solutions for modern businesses',
        services: {
            whatsapp: { title: 'WhatsApp AI Chatbot', desc: 'Automate sales, support & orders on the world\'s #1 messaging platform. 24/7 intelligent responses.' },
            instagram: { title: 'Instagram Automation', desc: 'Turn DMs into customers. Auto-reply, lead capture, and engagement automation.' },
            messenger: { title: 'Messenger AI Bot', desc: 'Smart Facebook automation. Customer service, lead generation, and sales.' },
            nextjs: { title: 'Next.js Development', desc: 'Lightning-fast websites with cutting-edge tech. SEO-optimized and mobile-first.' },
            ai: { title: 'AI Automation', desc: 'Custom AI solutions for any business process. Reduce costs by 80%.' },
            seo: { title: 'Advanced SEO', desc: 'Dominate search rankings. Technical SEO, content strategy, and local SEO.' }
        },
        cta: 'Get Started',
        viewAll: 'View All Services'
    },
    ar: {
        title: 'خدمات الذكاء الاصطناعي',
        subtitle: 'حلول أتمتة احترافية للشركات الحديثة',
        services: {
            whatsapp: { title: 'روبوت واتساب الذكي', desc: 'أتمتة المبيعات والدعم والطلبات على أشهر منصة مراسلة. ردود ذكية 24/7.' },
            instagram: { title: 'أتمتة انستغرام', desc: 'حوّل الرسائل المباشرة إلى عملاء. رد تلقائي وجمع leads وأتمتة التفاعل.' },
            messenger: { title: 'روبوت ماسنجر الذكي', desc: 'أتمتة فيسبوك الذكية. خدمة عملاء وتوليد leads ومبيعات.' },
            nextjs: { title: 'تطوير Next.js', desc: 'مواقع فائقة السرعة بأحدث التقنيات. محسّنة للـ SEO ومتوافقة مع الموبايل.' },
            ai: { title: 'أتمتة الذكاء الاصطناعي', desc: 'حلول ذكاء اصطناعي مخصصة لأي عملية تجارية. خفض التكاليف 80%.' },
            seo: { title: 'تحسين محركات البحث المتقدم', desc: 'تصدّر نتائج البحث. SEO تقني واستراتيجية محتوى وSEO محلي.' }
        },
        cta: 'ابدأ الآن',
        viewAll: 'عرض جميع الخدمات'
    },
    de: {
        title: 'Unsere KI-Dienste',
        subtitle: 'Enterprise-Automatisierungslösungen für moderne Unternehmen',
        services: {
            whatsapp: { title: 'WhatsApp KI-Chatbot', desc: 'Automatisieren Sie Vertrieb, Support und Bestellungen auf der weltweit führenden Messaging-Plattform.' },
            instagram: { title: 'Instagram Automatisierung', desc: 'Verwandeln Sie DMs in Kunden. Auto-Antwort, Lead-Erfassung und Engagement.' },
            messenger: { title: 'Messenger KI-Bot', desc: 'Intelligente Facebook-Automatisierung. Kundenservice, Lead-Generierung und Vertrieb.' },
            nextjs: { title: 'Next.js Entwicklung', desc: 'Blitzschnelle Websites mit modernster Technologie. SEO-optimiert und mobile-first.' },
            ai: { title: 'KI-Automatisierung', desc: 'Maßgeschneiderte KI-Lösungen für jeden Geschäftsprozess. Kosten um 80% senken.' },
            seo: { title: 'Fortgeschrittenes SEO', desc: 'Dominieren Sie die Suchrankings. Technisches SEO, Content-Strategie und lokales SEO.' }
        },
        cta: 'Jetzt starten',
        viewAll: 'Alle Dienste anzeigen'
    },
    fr: {
        title: 'Nos services IA',
        subtitle: 'Solutions d\'automatisation professionnelles pour les entreprises modernes',
        services: {
            whatsapp: { title: 'Chatbot IA WhatsApp', desc: 'Automatisez ventes, support et commandes sur la plateforme de messagerie #1 mondiale.' },
            instagram: { title: 'Automatisation Instagram', desc: 'Transformez les DMs en clients. Réponse auto, capture de leads et engagement.' },
            messenger: { title: 'Bot IA Messenger', desc: 'Automatisation Facebook intelligente. Service client, génération de leads et ventes.' },
            nextjs: { title: 'Développement Next.js', desc: 'Sites ultra-rapides avec technologie de pointe. Optimisé SEO et mobile-first.' },
            ai: { title: 'Automatisation IA', desc: 'Solutions IA personnalisées pour tout processus métier. Réduisez les coûts de 80%.' },
            seo: { title: 'SEO Avancé', desc: 'Dominez les classements. SEO technique, stratégie de contenu et SEO local.' }
        },
        cta: 'Commencer',
        viewAll: 'Voir tous les services'
    },
    it: {
        title: 'I nostri servizi IA',
        subtitle: 'Soluzioni di automazione enterprise per aziende moderne',
        services: {
            whatsapp: { title: 'Chatbot IA WhatsApp', desc: 'Automatizza vendite, supporto e ordini sulla piattaforma di messaggistica #1 al mondo.' },
            instagram: { title: 'Automazione Instagram', desc: 'Trasforma i DM in clienti. Risposta auto, cattura lead ed engagement.' },
            messenger: { title: 'Bot IA Messenger', desc: 'Automazione Facebook intelligente. Servizio clienti, generazione lead e vendite.' },
            nextjs: { title: 'Sviluppo Next.js', desc: 'Siti velocissimi con tecnologia all\'avanguardia. Ottimizzato SEO e mobile-first.' },
            ai: { title: 'Automazione IA', desc: 'Soluzioni IA personalizzate per qualsiasi processo aziendale. Riduci i costi dell\'80%.' },
            seo: { title: 'SEO Avanzato', desc: 'Domina le classifiche. SEO tecnico, strategia contenuti e SEO locale.' }
        },
        cta: 'Inizia ora',
        viewAll: 'Vedi tutti i servizi'
    },
    hi: {
        title: 'हमारी AI सेवाएं',
        subtitle: 'आधुनिक व्यवसायों के लिए उद्यम-स्तर के स्वचालन समाधान',
        services: {
            whatsapp: { title: 'WhatsApp AI चैटबॉट', desc: 'दुनिया के #1 मैसेजिंग प्लेटफॉर्म पर बिक्री, सहायता और ऑर्डर स्वचालित करें। 24/7 बुद्धिमान प्रतिक्रियाएँ।' },
            instagram: { title: 'Instagram ऑटोमेशन', desc: 'DMs को ग्राहकों में बदलें। ऑटो-रिप्लाई, लीड कैप्चर और एंगेजमेंट ऑटोमेशन।' },
            messenger: { title: 'Messenger AI बॉट', desc: 'स्मार्ट Facebook ऑटोमेशन। ग्राहक सेवा, लीड जनरेशन और बिक्री।' },
            nextjs: { title: 'Next.js डेवलपमेंट', desc: 'अत्याधुनिक तकनीक के साथ बिजली की तेजी वाली वेबसाइटें। SEO-अनुकूलित और मोबाइल-फर्स्ट।' },
            ai: { title: 'AI ऑटोमेशन', desc: 'किसी भी व्यावसायिक प्रक्रिया के लिए कस्टम AI समाधान। लागत को 80% तक कम करें।' },
            seo: { title: 'उन्नत SEO', desc: 'खोज रैंकिंग पर हावी हों। तकनीकी SEO, सामग्री रणनीति, और स्थानीय SEO।' }
        },
        cta: 'शुरू करें',
        viewAll: 'सभी सेवाएं देखें'
    },
    ms: {
        title: 'Perkhidmatan AI Kami',
        subtitle: 'Penyelesaian automasi gred perusahaan untuk perniagaan moden',
        services: {
            whatsapp: { title: 'Chatbot AI WhatsApp', desc: 'Automasi jualan, sokongan & pesanan pada platform pemesejan #1 dunia. Respons pintar 24/7.' },
            instagram: { title: 'Automasi Instagram', desc: 'Tukar DM menjadi pelanggan. Auto-balas, penangkapan lead, dan automasi penglibatan.' },
            messenger: { title: 'Bot AI Messenger', desc: 'Automasi Facebook pintar. Perkhidmatan pelanggan, penjanaan lead, dan jualan.' },
            nextjs: { title: 'Pembangunan Next.js', desc: 'Laman web pantas kilat dengan teknologi terkini. Dioptimumkan SEO dan mudah alih.' },
            ai: { title: 'Automasi AI', desc: 'Penyelesaian AI tersuai untuk sebarang proses perniagaan. Kurangkan kos sebanyak 80%.' },
            seo: { title: 'SEO Lanjutan', desc: 'Menguasai kedudukan carian. SEO teknikal, strategi kandungan, dan SEO tempatan.' }
        },
        cta: 'Mula Sekarang',
        viewAll: 'Lihat Semua Perkhidmatan'
    }
}

interface BentoShowcaseProps {
    lang: string;
}

const BentoShowcase = ({ lang }: BentoShowcaseProps) => {
    // Default to 'en' safe check
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language;
    const t = translations[currentLang];
    const isRtl = currentLang === 'ar';
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const services = [
        { key: 'whatsapp', icon: '💬', color: 'from-green-500 to-emerald-600', href: lang === 'en' ? '/services/whatsapp-ai-chatbot' : `/${lang}/services/whatsapp-ai-chatbot` },
        { key: 'instagram', icon: '📸', color: 'from-pink-500 to-rose-600', href: lang === 'en' ? '/services/instagram-ai-chatbot' : `/${lang}/services/instagram-ai-chatbot` },
        { key: 'messenger', icon: '🔵', color: 'from-blue-500 to-indigo-600', href: lang === 'en' ? '/services/messenger-ai-chatbot' : `/${lang}/services/messenger-ai-chatbot` },
        { key: 'nextjs', icon: '⚡', color: 'from-gray-700 to-gray-900', href: lang === 'en' ? '/services/nextjs-development' : `/${lang}/services/nextjs-development` },
        { key: 'ai', icon: '🤖', color: 'from-purple-500 to-violet-600', href: lang === 'en' ? '/services/ai-automations' : `/${lang}/services/ai-automations` },
        { key: 'seo', icon: '🔍', color: 'from-orange-500 to-amber-600', href: lang === 'en' ? '/services/advanced-seo' : `/${lang}/services/advanced-seo` },
    ]

    return (
        <section id="services" dir={isRtl ? 'rtl' : 'ltr'} className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const serviceData = t.services[service.key as keyof typeof t.services]
                        return (
                            <motion.div
                                key={service.key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative group"
                            >
                                <a href={service.href}>
                                    <div className={`relative h-full bg-gradient-to-br ${service.color} p-[1px] rounded-2xl overflow-hidden`}>
                                        <div className="h-full bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 hover:bg-slate-800/90 transition-all duration-300">
                                            <div className="text-4xl mb-4">{service.icon}</div>
                                            <h3 className="text-xl font-bold text-white mb-2">{serviceData.title}</h3>
                                            <p className="text-gray-400 text-sm mb-4">{serviceData.desc}</p>
                                            <motion.span
                                                animate={{ x: hoveredIndex === index ? 5 : 0 }}
                                                className="inline-flex items-center text-sm font-semibold text-white"
                                            >
                                                {t.cta} →
                                            </motion.span>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a href={lang === 'en' ? '/services' : `/${lang}/services`} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold">
                        {t.viewAll} →
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default BentoShowcase
