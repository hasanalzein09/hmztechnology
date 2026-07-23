'use client';
import { motion } from 'framer-motion'
import { Target, Handshake, Lightbulb, Shield, Users, Globe, MessageSquare, Star } from 'lucide-react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

const translations: Record<Language, {
    badge: string
    hero: { title: string; titleHighlight: string; subtitle: string }
    mission: { title: string; text: string }
    values: { title: string; items: { icon: string; title: string; desc: string }[] }
    stats: { value: string; label: string }[]
    team: { title: string; subtitle: string }
    cta: { title: string; subtitle: string; button: string }
}> = {
    en: {
        badge: '🔥 Why 500+ Businesses Trust Us',
        hero: { 
            title: 'We Started Because', 
            titleHighlight: 'We Were Tired of Watching Businesses Fail', 
            subtitle: 'In 2020, we watched a client lose $340,000 to slow response times. We built the solution so you never have to.' 
        },
        mission: { 
            title: 'The Problem We Solve', 
            text: 'Every day, businesses lose customers to competitors who respond faster. We\'ve generated $2.3M+ in revenue for clients by making sure no lead ever waits. Your competitors are using AI. The question is: why aren\'t you?' 
        },
        values: {
            title: 'Why We\'re Different',
            items: [
                { icon: 'target', title: 'We Get Paid When You Win', desc: 'Your ROI is our only metric. No results? We fix it free.' },
                { icon: 'handshake', title: 'No Contracts, No Lock-in', desc: 'Stay because it works, not because you\'re stuck.' },
                { icon: 'lightbulb', title: 'Built by Business Owners', desc: 'We\'ve lost money to slow responses too. We get it.' },
                { icon: 'shield', title: 'You Own Everything', desc: 'Your code, your data, your future. Walk away anytime.' },
            ]
        },
        stats: [
            { value: '500+', label: 'Happy Clients' },
            { value: '25+', label: 'Countries Served' },
            { value: '24/7', label: 'Always Available' },
            { value: '4.9/5', label: 'Client Rating' },
        ],
        team: { title: 'Battle-Tested Team', subtitle: 'Former startup founders who\'ve been in your shoes' },
        cta: { title: 'Your Competitors Started Yesterday', subtitle: 'Every day you wait, they\'re taking your customers', button: 'Claim Your Free Audit' }
    },
    ar: {
        badge: '🔥 ليش +500 شركة تثق فينا',
        hero: { 
            title: 'بدأنا لأننا', 
            titleHighlight: 'تعبنا من مشاهدة الشركات تخسر', 
            subtitle: 'بـ 2020، شاهدنا عميل يخسر $340,000 بسبب الردود البطيئة. بنينا الحل عشان ما تمر بهذا أبداً.' 
        },
        mission: { 
            title: 'المشكلة اللي نحلها', 
            text: 'كل يوم، شركات تخسر عملاء لمنافسين يردون أسرع. حققنا أكثر من $2.3 مليون إيرادات للعملاء بضمان إن ما حد ينتظر. منافسوك يستخدمون AI. السؤال: ليش أنت لا؟' 
        },
        values: {
            title: 'ليش نحنا مختلفين',
            items: [
                { icon: 'target', title: 'نربح لما تربح', desc: 'عائد استثمارك هو مقياسنا الوحيد. ما في نتائج؟ نصلحها مجاناً.' },
                { icon: 'handshake', title: 'بدون عقود، بدون قيود', desc: 'ابقى لأن الشغل ماشي، مش لأنك محبوس.' },
                { icon: 'lightbulb', title: 'بناها أصحاب أعمال', desc: 'خسرنا فلوس بسبب الردود البطيئة كمان. نفهمك.' },
                { icon: 'shield', title: 'تملك كل شي', desc: 'الكود لك، البيانات لك، المستقبل لك. امشي وقت ما بدك.' },
            ]
        },
        stats: [
            { value: '+٥٠٠', label: 'عميل سعيد' },
            { value: '+٢٥', label: 'دولة نخدمها' },
            { value: '٢٤/٧', label: 'متوفرين دائماً' },
            { value: '٤.٩/٥', label: 'تقييم العملاء' },
        ],
        team: { title: 'فريق مجرّب بالميدان', subtitle: 'مؤسسين سابقين مروا بنفس تجربتك' },
        cta: { title: 'منافسوك بدأوا أمس', subtitle: 'كل يوم تأخير، هم ياخذون عملائك', button: 'احصل على تحليل مجاني' }
    },
    de: {
        badge: '🏢 Über Uns',
        hero: { 
            title: 'Wir bauen', 
            titleHighlight: 'KI die funktioniert', 
            subtitle: 'Wir transformieren Unternehmen mit intelligenter Automatisierung seit 2020' 
        },
        mission: { 
            title: 'Unsere Mission', 
            text: 'Wir glauben, dass jedes Unternehmen Enterprise-KI verdient, ohne den Enterprise-Preis zu zahlen. Unsere Mission ist es, Automatisierung zu demokratisieren.' 
        },
        values: {
            title: 'Unsere Kernwerte',
            items: [
                { icon: 'target', title: 'Ergebnisse zuerst', desc: 'Wir messen Erfolg an Ihrem ROI.' },
                { icon: 'handshake', title: 'Echte Partnerschaft', desc: 'Wir sind erfolgreich, wenn Sie es sind.' },
                { icon: 'lightbulb', title: 'Innovation', desc: 'Wir bringen Ihnen die neueste KI-Technologie.' },
                { icon: 'shield', title: 'Volles Eigentum', desc: 'Sie besitzen Ihren Code und Ihre Daten.' },
            ]
        },
        stats: [
            { value: '500+', label: 'Zufriedene Kunden' },
            { value: '25+', label: 'Länder' },
            { value: '1M+', label: 'Automatisierte Nachrichten' },
            { value: '4,9/5', label: 'Kundenbewertung' },
        ],
        team: { title: 'Globales Team', subtitle: 'Arbeiten über Kontinente hinweg für Exzellenz' },
        cta: { title: 'Bereit zur Transformation?', subtitle: 'Lassen Sie uns gemeinsam etwas Großartiges bauen', button: 'Starten Sie Ihre Reise' }
    },
    fr: {
        badge: '🏢 À Propos',
        hero: { 
            title: 'Nous construisons', 
            titleHighlight: 'une IA qui fonctionne', 
            subtitle: 'Nous transformons les entreprises avec l\'automatisation intelligente depuis 2020' 
        },
        mission: { 
            title: 'Notre Mission', 
            text: 'Nous croyons que chaque entreprise mérite une IA de niveau entreprise sans le prix entreprise. Notre mission est de démocratiser l\'automatisation.' 
        },
        values: {
            title: 'Nos Valeurs',
            items: [
                { icon: 'target', title: 'Résultats d\'abord', desc: 'Nous mesurons le succès par votre ROI.' },
                { icon: 'handshake', title: 'Vrai partenariat', desc: 'Nous réussissons quand vous réussissez.' },
                { icon: 'lightbulb', title: 'Innovation', desc: 'Nous vous apportons les dernières technologies IA.' },
                { icon: 'shield', title: 'Propriété complète', desc: 'Vous possédez votre code et vos données.' },
            ]
        },
        stats: [
            { value: '500+', label: 'Clients satisfaits' },
            { value: '25+', label: 'Pays' },
            { value: '1M+', label: 'Messages automatisés' },
            { value: '4,9/5', label: 'Note client' },
        ],
        team: { title: 'Équipe mondiale', subtitle: 'Travaillant à travers les continents pour l\'excellence' },
        cta: { title: 'Prêt à transformer?', subtitle: 'Construisons quelque chose d\'incroyable ensemble', button: 'Commencez votre voyage' }
    },
    it: {
        badge: '🏢 Chi Siamo',
        hero: { 
            title: 'Costruiamo', 
            titleHighlight: 'IA che funziona', 
            subtitle: 'Trasformiamo le aziende con l\'automazione intelligente dal 2020' 
        },
        mission: { 
            title: 'La Nostra Missione', 
            text: 'Crediamo che ogni azienda meriti un\'IA enterprise senza il prezzo enterprise. La nostra missione è democratizzare l\'automazione.' 
        },
        values: {
            title: 'I Nostri Valori',
            items: [
                { icon: 'target', title: 'Prima i risultati', desc: 'Misuriamo il successo dal tuo ROI.' },
                { icon: 'handshake', title: 'Vera partnership', desc: 'Abbiamo successo quando tu hai successo.' },
                { icon: 'lightbulb', title: 'Innovazione', desc: 'Ti portiamo le ultime tecnologie IA.' },
                { icon: 'shield', title: 'Proprietà completa', desc: 'Possiedi il tuo codice e i tuoi dati.' },
            ]
        },
        stats: [
            { value: '500+', label: 'Clienti soddisfatti' },
            { value: '25+', label: 'Paesi' },
            { value: '1M+', label: 'Messaggi automatizzati' },
            { value: '4,9/5', label: 'Valutazione clienti' },
        ],
        team: { title: 'Team globale', subtitle: 'Lavoriamo attraverso i continenti per l\'eccellenza' },
        cta: { title: 'Pronto a trasformare?', subtitle: 'Costruiamo qualcosa di straordinario insieme', button: 'Inizia il tuo viaggio' }
    },
    hi: {
        badge: '🏢 हमारे बारे में',
        hero: { 
            title: 'हम बनाते हैं', 
            titleHighlight: 'AI जो काम करती है', 
            subtitle: '2020 से बुद्धिमान स्वचालन के साथ व्यवसायों को बदलना' 
        },
        mission: { 
            title: 'हमारा मिशन', 
            text: 'हमारा मानना है कि हर व्यवसाय एंटरप्राइज-स्तर की AI का हकदार है बिना एंटरप्राइज कीमत के। हमारा मिशन स्वचालन का लोकतंत्रीकरण करना है।' 
        },
        values: {
            title: 'हमारे मूल मूल्य',
            items: [
                { icon: 'target', title: 'परिणाम पहले', desc: 'हम सफलता को आपके ROI से मापते हैं।' },
                { icon: 'handshake', title: 'सच्ची साझेदारी', desc: 'हम तब सफल होते हैं जब आप सफल होते हैं।' },
                { icon: 'lightbulb', title: 'नवाचार', desc: 'हम आपके लिए नवीनतम AI तकनीक लाते हैं।' },
                { icon: 'shield', title: 'पूर्ण स्वामित्व', desc: 'आप अपने कोड और डेटा के मालिक हैं।' },
            ]
        },
        stats: [
            { value: '500+', label: 'खुश ग्राहक' },
            { value: '25+', label: 'देश' },
            { value: '1M+', label: 'स्वचालित संदेश' },
            { value: '4.9/5', label: 'ग्राहक रेटिंग' },
        ],
        team: { title: 'वैश्विक टीम', subtitle: 'उत्कृष्टता के लिए महाद्वीपों में काम करना' },
        cta: { title: 'बदलने के लिए तैयार?', subtitle: 'आइए मिलकर कुछ अद्भुत बनाएं', button: 'अपनी यात्रा शुरू करें' }
    },
    ms: {
        badge: '🏢 Tentang Kami',
        hero: { 
            title: 'Kami Membina', 
            titleHighlight: 'AI Yang Berfungsi', 
            subtitle: 'Mentransformasikan perniagaan dengan automasi pintar sejak 2020' 
        },
        mission: { 
            title: 'Misi Kami', 
            text: 'Kami percaya setiap perniagaan berhak mendapat AI gred perusahaan tanpa harga perusahaan. Misi kami adalah untuk mendemokrasikan automasi.' 
        },
        values: {
            title: 'Nilai Teras Kami',
            items: [
                { icon: 'target', title: 'Hasil Dahulu', desc: 'Kami mengukur kejayaan melalui ROI anda.' },
                { icon: 'handshake', title: 'Perkongsian Sebenar', desc: 'Kami berjaya apabila anda berjaya.' },
                { icon: 'lightbulb', title: 'Inovasi', desc: 'Kami membawakan teknologi AI terkini kepada anda.' },
                { icon: 'shield', title: 'Pemilikan Penuh', desc: 'Anda memiliki kod dan data anda.' },
            ]
        },
        stats: [
            { value: '500+', label: 'Pelanggan Gembira' },
            { value: '25+', label: 'Negara' },
            { value: '1M+', label: 'Mesej Diautomasikan' },
            { value: '4.9/5', label: 'Penilaian Pelanggan' },
        ],
        team: { title: 'Pasukan Global', subtitle: 'Bekerja merentasi benua untuk kecemerlangan' },
        cta: { title: 'Bersedia untuk Berubah?', subtitle: 'Mari bina sesuatu yang menakjubkan bersama', button: 'Mulakan Perjalanan Anda' }
    }
}

const iconMap: Record<string, any> = {
    target: Target,
    handshake: Handshake,
    lightbulb: Lightbulb,
    shield: Shield,
}

interface AboutContentProps {
    lang: string
}

const AboutContent = ({ lang }: AboutContentProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'

    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`

    return (
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-[#030014]">
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
                </div>

                {/* Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-8">
                            <span className="text-sm font-medium text-cyan-300">{t.badge}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            {t.hero.title}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                {t.hero.titleHighlight}
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                            {t.hero.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {t.stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card-ai p-6 text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/50 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card-ai p-8 md:p-12 text-center"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-cyan-500/25">
                            <Globe className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.mission.title}</h2>
                        <p className="text-lg text-white/70 leading-relaxed">{t.mission.text}</p>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
                    >
                        {t.values.title}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.values.items.map((item, i) => {
                            const Icon = iconMap[item.icon] || Target
                            const gradients = [
                                'from-cyan-500 to-blue-600',
                                'from-purple-500 to-pink-600',
                                'from-amber-500 to-orange-600',
                                'from-emerald-500 to-teal-600'
                            ]
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card-ai p-8 text-center group hover:border-cyan-500/30 transition-all"
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-white/50 text-sm">{item.desc}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-cyan-500/25">
                            <Users className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.team.title}</h2>
                        <p className="text-lg text-white/60">{t.team.subtitle}</p>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card-ai p-8 md:p-12 text-center relative overflow-hidden"
                    >
                        {/* Gradient Glow */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500 to-purple-600 opacity-20 blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-600 opacity-20 blur-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
                            <p className="text-lg text-white/60 mb-8">{t.cta.subtitle}</p>
                            <a
                                href={getLink('/contact')}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all"
                            >
                                {t.cta.button}
                                <Star className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default AboutContent
