import { motion } from 'framer-motion'
import type { Language } from './types'

const translations: Record<Language, {
    hero: { title: string; subtitle: string }
    mission: { title: string; text: string }
    values: { title: string; items: { icon: string; title: string; desc: string }[] }
    stats: { value: string; label: string }[]
    cta: { title: string; button: string }
}> = {
    en: {
        hero: { title: 'About HMZ Technology', subtitle: 'Transforming businesses with AI-powered automation since 2020' },
        mission: { title: 'Our Mission', text: 'We believe every business deserves enterprise-grade AI without the enterprise price tag. Our mission is to democratize automation, giving businesses of all sizes the power to scale, serve customers 24/7, and compete with industry giants.' },
        values: {
            title: 'Our Core Values',
            items: [
                { icon: '🎯', title: 'Results First', desc: 'We measure success by your ROI, not by hours worked.' },
                { icon: '🤝', title: 'True Partnership', desc: 'We succeed when you succeed. Your goals are our goals.' },
                { icon: '💡', title: 'Innovation', desc: 'We stay ahead of the curve, bringing you the latest AI tech.' },
                { icon: '🔒', title: 'Full Ownership', desc: 'You own your code, your data, and your future. No lock-in.' },
            ]
        },
        stats: [
            { value: '500+', label: 'Clients Worldwide' },
            { value: '25+', label: 'Countries Served' },
            { value: '1M+', label: 'Messages Automated' },
            { value: '4.9/5', label: 'Client Rating' },
        ],
        cta: { title: 'Ready to Transform Your Business?', button: 'Get Free Consultation' }
    },
    ar: {
        hero: { title: 'عن HMZ Technology', subtitle: 'نحوّل الأعمال بالأتمتة المدعومة بالذكاء الاصطناعي منذ 2020' },
        mission: { title: 'مهمتنا', text: 'نؤمن أن كل عمل يستحق ذكاءً اصطناعياً بمستوى المؤسسات بدون سعر المؤسسات. مهمتنا هي إتاحة الأتمتة للجميع، ومنح الشركات من جميع الأحجام القدرة على التوسع وخدمة العملاء 24/7 والمنافسة مع عمالقة الصناعة.' },
        values: {
            title: 'قيمنا الأساسية',
            items: [
                { icon: '🎯', title: 'النتائج أولاً', desc: 'نقيس النجاح بعائد استثمارك، وليس بساعات العمل.' },
                { icon: '🤝', title: 'شراكة حقيقية', desc: 'ننجح عندما تنجح. أهدافك هي أهدافنا.' },
                { icon: '💡', title: 'الابتكار', desc: 'نبقى في المقدمة، نقدم لك أحدث تقنيات الذكاء الاصطناعي.' },
                { icon: '🔒', title: 'ملكية كاملة', desc: 'تملك الكود والبيانات والمستقبل. بدون قيود.' },
            ]
        },
        stats: [
            { value: '+500', label: 'عميل حول العالم' },
            { value: '+25', label: 'دولة نخدمها' },
            { value: '+1M', label: 'رسالة مؤتمتة' },
            { value: '4.9/5', label: 'تقييم العملاء' },
        ],
        cta: { title: 'جاهز لتحويل عملك؟', button: 'احصل على استشارة مجانية' }
    },
    de: {
        hero: { title: 'Über HMZ Technology', subtitle: 'Wir transformieren Unternehmen mit KI-gestützter Automatisierung seit 2020' },
        mission: { title: 'Unsere Mission', text: 'Wir glauben, dass jedes Unternehmen Enterprise-KI ohne Enterprise-Preise verdient. Unsere Mission ist es, Automatisierung zu demokratisieren und Unternehmen aller Größen die Möglichkeit zu geben, zu skalieren und 24/7 Kunden zu bedienen.' },
        values: {
            title: 'Unsere Kernwerte',
            items: [
                { icon: '🎯', title: 'Ergebnisse zuerst', desc: 'Wir messen Erfolg an Ihrem ROI, nicht an Arbeitsstunden.' },
                { icon: '🤝', title: 'Echte Partnerschaft', desc: 'Wir sind erfolgreich, wenn Sie erfolgreich sind.' },
                { icon: '💡', title: 'Innovation', desc: 'Wir bringen Ihnen die neueste KI-Technologie.' },
                { icon: '🔒', title: 'Volles Eigentum', desc: 'Sie besitzen Ihren Code, Ihre Daten und Ihre Zukunft.' },
            ]
        },
        stats: [
            { value: '500+', label: 'Kunden weltweit' },
            { value: '25+', label: 'Länder bedient' },
            { value: '1M+', label: 'Nachrichten automatisiert' },
            { value: '4,9/5', label: 'Kundenbewertung' },
        ],
        cta: { title: 'Bereit, Ihr Geschäft zu transformieren?', button: 'Kostenlose Beratung' }
    },
    fr: {
        hero: { title: 'À propos de HMZ Technology', subtitle: 'Nous transformons les entreprises avec l\'automatisation IA depuis 2020' },
        mission: { title: 'Notre Mission', text: 'Nous croyons que chaque entreprise mérite une IA de niveau entreprise sans le prix entreprise. Notre mission est de démocratiser l\'automatisation, donnant aux entreprises de toutes tailles le pouvoir de se développer et servir les clients 24/7.' },
        values: {
            title: 'Nos Valeurs Fondamentales',
            items: [
                { icon: '🎯', title: 'Résultats d\'abord', desc: 'Nous mesurons le succès par votre ROI, pas par les heures travaillées.' },
                { icon: '🤝', title: 'Vrai partenariat', desc: 'Nous réussissons quand vous réussissez.' },
                { icon: '💡', title: 'Innovation', desc: 'Nous vous apportons les dernières technologies IA.' },
                { icon: '🔒', title: 'Propriété complète', desc: 'Vous possédez votre code, vos données et votre avenir.' },
            ]
        },
        stats: [
            { value: '500+', label: 'Clients dans le monde' },
            { value: '25+', label: 'Pays desservis' },
            { value: '1M+', label: 'Messages automatisés' },
            { value: '4,9/5', label: 'Note client' },
        ],
        cta: { title: 'Prêt à transformer votre entreprise?', button: 'Consultation gratuite' }
    },
    it: {
        hero: { title: 'Chi siamo - HMZ Technology', subtitle: 'Trasformiamo le aziende con l\'automazione IA dal 2020' },
        mission: { title: 'La Nostra Missione', text: 'Crediamo che ogni azienda meriti un\'IA enterprise senza il prezzo enterprise. La nostra missione è democratizzare l\'automazione.' },
        values: {
            title: 'I Nostri Valori',
            items: [
                { icon: '🎯', title: 'Prima i risultati', desc: 'Misuriamo il successo dal tuo ROI, non dalle ore lavorate.' },
                { icon: '🤝', title: 'Vera partnership', desc: 'Abbiamo successo quando tu hai successo.' },
                { icon: '💡', title: 'Innovazione', desc: 'Ti portiamo le ultime tecnologie IA.' },
                { icon: '🔒', title: 'Proprietà completa', desc: 'Possiedi il tuo codice, i tuoi dati e il tuo futuro.' },
            ]
        },
        stats: [
            { value: '500+', label: 'Clienti nel mondo' },
            { value: '25+', label: 'Paesi serviti' },
            { value: '1M+', label: 'Messaggi automatizzati' },
            { value: '4,9/5', label: 'Valutazione clienti' },
        ],
        cta: { title: 'Pronto a trasformare la tua azienda?', button: 'Consulenza gratuita' }
    },
    hi: {
        hero: { title: 'HMZ Technology के बारे में', subtitle: '2020 से AI-संचालित स्वचालन के साथ व्यवसायों को बदलना' },
        mission: { title: 'हमारा मिशन', text: 'हमारा मानना है कि हर व्यवसाय उद्यम-स्तर की कीमत के बिना उद्यम-स्तर की AI का हकदार है। हमारा मिशन स्वचालन का लोकतंत्रीकरण करना है, जिससे सभी आकार के व्यवसायों को स्केल करने, ग्राहकों की 24/7 सेवा करने और उद्योग के दिग्गजों के साथ प्रतिस्पर्धा करने की शक्ति मिल सके।' },
        values: {
            title: 'हमारे मूल मूल्य',
            items: [
                { icon: '🎯', title: 'परिणाम पहले', desc: 'हम सफलता को आपके ROI से मापते हैं, काम किए गए घंटों से नहीं।' },
                { icon: '🤝', title: 'सच्ची साझेदारी', desc: 'हम तब सफल होते हैं जब आप सफल होते हैं। आपके लक्ष्य हमारे लक्ष्य हैं।' },
                { icon: '💡', title: 'नवाचार', desc: 'हम वक्र से आगे रहते हैं, आपके लिए नवीनतम AI तकनीक लाते हैं।' },
                { icon: '🔒', title: 'पूर्ण स्वामित्व', desc: 'आप अपने कोड, अपने डेटा और अपने भविष्य के मालिक हैं। कोई लॉक-इन नहीं।' },
            ]
        },
        stats: [
            { value: '500+', label: 'दुनिया भर में ग्राहक' },
            { value: '25+', label: 'देश सेवित' },
            { value: '1M+', label: 'संदेश स्वचालित' },
            { value: '4.9/5', label: 'ग्राहक रेटिंग' },
        ],
        cta: { title: 'अपना व्यवसाय बदलने के लिए तैयार हैं?', button: 'मुफ्त परामर्श प्राप्त करें' }
    },
    ms: {
        hero: { title: 'Tentang HMZ Technology', subtitle: 'Mentransformasikan perniagaan dengan automasi dikuasakan AI sejak 2020' },
        mission: { title: 'Misi Kami', text: 'Kami percaya setiap perniagaan berhak mendapat AI gred perusahaan tanpa tanda harga perusahaan. Misi kami adalah untuk mendemokrasikan automasi, memberikan perniagaan dari semua saiz kuasa untuk berkembang, melayani pelanggan 24/7, dan bersaing dengan gergasi industri.' },
        values: {
            title: 'Nilai Teras Kami',
            items: [
                { icon: '🎯', title: 'Hasil Dahulu', desc: 'Kami mengukur kejayaan melalui ROI anda, bukan jam bekerja.' },
                { icon: '🤝', title: 'Perkongsian Sebenar', desc: 'Kami berjaya apabila anda berjaya. Matlamat anda adalah matlamat kami.' },
                { icon: '💡', title: 'Inovasi', desc: 'Kami kekal di hadapan, membawakan teknologi AI terkini kepada anda.' },
                { icon: '🔒', title: 'Pemilikan Penuh', desc: 'Anda memiliki kod anda, data anda, dan masa depan anda.' },
            ]
        },
        stats: [
            { value: '500+', label: 'Pelanggan Seluruh Dunia' },
            { value: '25+', label: 'Negara Dilayan' }
        ],
        cta: { title: 'Bersedia untuk Mentransformasikan Perniagaan Anda?', button: 'Dapatkan Konsultasi Percuma' }
    }
}

// Fix missing stats in MS translation to match type definition
translations.ms.stats = [
    { value: '500+', label: 'Pelanggan Seluruh Dunia' },
    { value: '25+', label: 'Negara Dilayan' },
    { value: '1M+', label: 'Mesej Diautomasikan' },
    { value: '4.9/5', label: 'Penilaian Pelanggan' }
];

interface AboutContentProps {
    lang: string;
}

const AboutContent = ({ lang }: AboutContentProps) => {
    // Default safe
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language;
    const t = translations[currentLang];
    const isRtl = currentLang === 'ar';

    return (
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t.hero.title}</h1>
                    <p className="text-xl text-gray-400">{t.hero.subtitle}</p>
                </motion.div>
            </section>

            {/* Mission */}
            <section className="py-16 px-6 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">{t.mission.title}</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">{t.mission.text}</p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {t.stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 px-6 bg-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">{t.values.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.values.items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{t.cta.title}</h2>
                    <a
                        href={lang === 'en' ? '/contact' : `/${lang}/contact`}
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
                    >
                        {t.cta.button}
                    </a>
                </motion.div>
            </section>
        </div>
    )
}

export default AboutContent
