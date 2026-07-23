import { motion } from 'framer-motion'
import { Bot, Mic, Database, Search, Cpu, Blocks, Users, ShieldCheck, Sparkles, Building2, Rocket } from 'lucide-react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

interface TimelineFeature {
    icon: 'bot' | 'mic' | 'database' | 'search' | 'cpu' | 'blocks' | 'users' | 'shield' | 'sparkles' | 'building' | 'rocket'
    label: string
}

interface Era {
    period: string
    title: string
    description: string
    gradient: string
    glow: string
    features: TimelineFeature[]
}

interface TimelineTranslation {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    eras: Era[]
    cta: string
}

const iconMap = {
    bot: Bot,
    mic: Mic,
    database: Database,
    search: Search,
    cpu: Cpu,
    blocks: Blocks,
    users: Users,
    shield: ShieldCheck,
    sparkles: Sparkles,
    building: Building2,
    rocket: Rocket
}

const translations: Record<Language, TimelineTranslation> = {
    en: {
        badge: 'Future-Proof Your Business',
        title: 'The AI Roadmap:',
        titleHighlight: '2026 → 2050',
        subtitle: 'AI is not a trend — it is the new infrastructure. Here is where the world is going, and how HMZ keeps you ahead of every wave.',
        eras: [
            {
                period: 'NOW',
                title: 'The Automation Wave',
                description: 'AI chatbots, voice agents, RAG knowledge systems and GEO (Generative Engine Optimization) are already deciding who wins customers. Businesses deploying them today compound an unfair advantage.',
                gradient: 'from-cyan-500 to-blue-600',
                glow: 'rgba(0, 212, 255, 0.35)',
                features: [
                    { icon: 'bot', label: 'AI Chatbots' },
                    { icon: 'mic', label: 'Voice Agents' },
                    { icon: 'database', label: 'RAG Systems' },
                    { icon: 'search', label: 'GEO Optimization' }
                ]
            },
            {
                period: '2026 — 2030',
                title: 'The Agentic Workforce',
                description: 'Custom AI agents connected through MCP integrations will run entire workflows. AI security becomes mission-critical as digital workforces outnumber human teams.',
                gradient: 'from-purple-500 to-pink-600',
                glow: 'rgba(124, 58, 237, 0.35)',
                features: [
                    { icon: 'cpu', label: 'Custom AI Agents' },
                    { icon: 'blocks', label: 'MCP Integrations' },
                    { icon: 'users', label: 'AI Workforce' },
                    { icon: 'shield', label: 'AI Security' }
                ]
            },
            {
                period: '2030 — 2050',
                title: 'The Autonomous Enterprise',
                description: 'AGI-ready architectures, fully autonomous enterprises and humanoid robotics integration. The companies that start building AI-native today will own this era.',
                gradient: 'from-pink-500 to-orange-500',
                glow: 'rgba(236, 72, 153, 0.35)',
                features: [
                    { icon: 'sparkles', label: 'AGI-Readiness' },
                    { icon: 'building', label: 'Autonomous Enterprises' },
                    { icon: 'rocket', label: 'Humanoid Robotics' }
                ]
            }
        ],
        cta: 'Start Your AI Journey Today'
    },
    ar: {
        badge: 'حمِّ شركتك للمستقبل',
        title: 'خارطة طريق الذكاء الاصطناعي:',
        titleHighlight: '2026 ← 2050',
        subtitle: 'الذكاء الاصطناعي ليس موضة — إنه البنية التحتية الجديدة. هذا هو اتجاه العالم، وكيف تبقيك HMZ في المقدمة مع كل موجة.',
        eras: [
            {
                period: 'الآن',
                title: 'موجة الأتمتة',
                description: 'روبوتات الدردشة والوكلاء الصوتيون وأنظمة RAG وتحسين محركات التوليد (GEO) تحسم اليوم من يكسب العملاء. الشركات التي تنشرها الآن تبني ميزة تنافسية مركّبة.',
                gradient: 'from-cyan-500 to-blue-600',
                glow: 'rgba(0, 212, 255, 0.35)',
                features: [
                    { icon: 'bot', label: 'روبوتات دردشة AI' },
                    { icon: 'mic', label: 'وكلاء صوتيون' },
                    { icon: 'database', label: 'أنظمة RAG' },
                    { icon: 'search', label: 'تحسين GEO' }
                ]
            },
            {
                period: '2026 — 2030',
                title: 'القوى العاملة الوكيلة',
                description: 'وكلاء AI مخصصون متصلون عبر تكاملات MCP سيديرون سير عمل كاملة. أمن الذكاء الاصطناعي يصبح حرجاً مع تجاوز القوى الرقمية الفرق البشرية.',
                gradient: 'from-purple-500 to-pink-600',
                glow: 'rgba(124, 58, 237, 0.35)',
                features: [
                    { icon: 'cpu', label: 'وكلاء AI مخصصون' },
                    { icon: 'blocks', label: 'تكاملات MCP' },
                    { icon: 'users', label: 'قوى عمل AI' },
                    { icon: 'shield', label: 'أمن AI' }
                ]
            },
            {
                period: '2030 — 2050',
                title: 'المؤسسة الذاتية التشغيل',
                description: 'بنى جاهزة للذكاء العام AGI، مؤسسات ذاتية التشغيل بالكامل، وتكامل الروبوتات البشرية. الشركات التي تبني بالذكاء الاصطناعي اليوم ستمتلك هذا العصر.',
                gradient: 'from-pink-500 to-orange-500',
                glow: 'rgba(236, 72, 153, 0.35)',
                features: [
                    { icon: 'sparkles', label: 'الجاهزية لـ AGI' },
                    { icon: 'building', label: 'مؤسسات ذاتية' },
                    { icon: 'rocket', label: 'روبوتات بشرية' }
                ]
            }
        ],
        cta: 'ابدأ رحلتك مع الذكاء الاصطناعي اليوم'
    },
    de: {
        badge: 'Machen Sie Ihr Unternehmen zukunftssicher',
        title: 'Die KI-Roadmap:',
        titleHighlight: '2026 → 2050',
        subtitle: 'KI ist kein Trend — sie ist die neue Infrastruktur. So bleiben Sie mit HMZ jeder Welle voraus.',
        eras: [
            {
                period: 'JETZT',
                title: 'Die Automatisierungswelle',
                description: 'KI-Chatbots, Voice Agents, RAG-Systeme und GEO entscheiden bereits, wer Kunden gewinnt.',
                gradient: 'from-cyan-500 to-blue-600',
                glow: 'rgba(0, 212, 255, 0.35)',
                features: [
                    { icon: 'bot', label: 'KI-Chatbots' },
                    { icon: 'mic', label: 'Voice Agents' },
                    { icon: 'database', label: 'RAG-Systeme' },
                    { icon: 'search', label: 'GEO' }
                ]
            },
            {
                period: '2026 — 2030',
                title: 'Die agentische Belegschaft',
                description: 'Maßgeschneiderte KI-Agenten mit MCP-Integrationen steuern komplette Workflows. KI-Sicherheit wird geschäftskritisch.',
                gradient: 'from-purple-500 to-pink-600',
                glow: 'rgba(124, 58, 237, 0.35)',
                features: [
                    { icon: 'cpu', label: 'KI-Agenten' },
                    { icon: 'blocks', label: 'MCP-Integrationen' },
                    { icon: 'users', label: 'KI-Belegschaft' },
                    { icon: 'shield', label: 'KI-Sicherheit' }
                ]
            },
            {
                period: '2030 — 2050',
                title: 'Das autonome Unternehmen',
                description: 'AGI-fähige Architekturen, autonome Unternehmen und humanoide Robotik. Wer heute KI-nativ baut, besitzt diese Ära.',
                gradient: 'from-pink-500 to-orange-500',
                glow: 'rgba(236, 72, 153, 0.35)',
                features: [
                    { icon: 'sparkles', label: 'AGI-Bereitschaft' },
                    { icon: 'building', label: 'Autonome Firmen' },
                    { icon: 'rocket', label: 'Humanoide Robotik' }
                ]
            }
        ],
        cta: 'Starten Sie Ihre KI-Reise'
    },
    fr: {
        badge: 'Préparez votre entreprise au futur',
        title: 'La Feuille de Route IA :',
        titleHighlight: '2026 → 2050',
        subtitle: "L'IA n'est pas une tendance — c'est la nouvelle infrastructure. HMZ vous garde en avance sur chaque vague.",
        eras: [
            {
                period: 'MAINTENANT',
                title: "La Vague d'Automatisation",
                description: "Chatbots IA, agents vocaux, systèmes RAG et GEO décident déjà qui gagne les clients.",
                gradient: 'from-cyan-500 to-blue-600',
                glow: 'rgba(0, 212, 255, 0.35)',
                features: [
                    { icon: 'bot', label: 'Chatbots IA' },
                    { icon: 'mic', label: 'Agents vocaux' },
                    { icon: 'database', label: 'Systèmes RAG' },
                    { icon: 'search', label: 'GEO' }
                ]
            },
            {
                period: '2026 — 2030',
                title: 'La Main-d\'œuvre Agentique',
                description: "Des agents IA sur mesure connectés via MCP piloteront des workflows entiers. La sécurité IA devient critique.",
                gradient: 'from-purple-500 to-pink-600',
                glow: 'rgba(124, 58, 237, 0.35)',
                features: [
                    { icon: 'cpu', label: 'Agents IA' },
                    { icon: 'blocks', label: 'Intégrations MCP' },
                    { icon: 'users', label: 'Workforce IA' },
                    { icon: 'shield', label: 'Sécurité IA' }
                ]
            },
            {
                period: '2030 — 2050',
                title: "L'Entreprise Autonome",
                description: "Architectures prêtes pour l'AGI, entreprises autonomes et robotique humanoïde. Les pionniers d'aujourd'hui posséderont cette ère.",
                gradient: 'from-pink-500 to-orange-500',
                glow: 'rgba(236, 72, 153, 0.35)',
                features: [
                    { icon: 'sparkles', label: 'Prêt pour l\'AGI' },
                    { icon: 'building', label: 'Entreprises autonomes' },
                    { icon: 'rocket', label: 'Robotique humanoïde' }
                ]
            }
        ],
        cta: 'Lancez votre parcours IA'
    },
    it: {
        badge: 'Rendi la tua azienda a prova di futuro',
        title: 'La Roadmap AI:',
        titleHighlight: '2026 → 2050',
        subtitle: "L'AI non è una moda — è la nuova infrastruttura. Ecco come HMZ ti tiene sempre un passo avanti.",
        eras: [
            {
                period: 'ORA',
                title: "L'Onda dell'Automazione",
                description: 'Chatbot AI, agenti vocali, sistemi RAG e GEO decidono già chi conquista i clienti.',
                gradient: 'from-cyan-500 to-blue-600',
                glow: 'rgba(0, 212, 255, 0.35)',
                features: [
                    { icon: 'bot', label: 'Chatbot AI' },
                    { icon: 'mic', label: 'Agenti vocali' },
                    { icon: 'database', label: 'Sistemi RAG' },
                    { icon: 'search', label: 'GEO' }
                ]
            },
            {
                period: '2026 — 2030',
                title: 'La Forza Lavoro Agentica',
                description: "Agenti AI personalizzati con integrazioni MCP gestiranno interi workflow. La sicurezza AI diventa critica.",
                gradient: 'from-purple-500 to-pink-600',
                glow: 'rgba(124, 58, 237, 0.35)',
                features: [
                    { icon: 'cpu', label: 'Agenti AI' },
                    { icon: 'blocks', label: 'Integrazioni MCP' },
                    { icon: 'users', label: 'Workforce AI' },
                    { icon: 'shield', label: 'Sicurezza AI' }
                ]
            },
            {
                period: '2030 — 2050',
                title: "L'Impresa Autonoma",
                description: "Architetture AGI-ready, imprese autonome e robotica umanoide. Chi costruisce AI-native oggi possiederà quest'era.",
                gradient: 'from-pink-500 to-orange-500',
                glow: 'rgba(236, 72, 153, 0.35)',
                features: [
                    { icon: 'sparkles', label: 'Pronto per AGI' },
                    { icon: 'building', label: 'Imprese autonome' },
                    { icon: 'rocket', label: 'Robotica umanoide' }
                ]
            }
        ],
        cta: 'Inizia il tuo percorso AI'
    },
    hi: {
        badge: 'अपने बिज़नेस को फ़्यूचर-प्रूफ़ बनाएं',
        title: 'AI रोडमैप:',
        titleHighlight: '2026 → 2050',
        subtitle: 'AI कोई ट्रेंड नहीं — यह नया इन्फ्रास्ट्रक्चर है। HMZ आपको हर लहर से आगे रखती है।',
        eras: [
            {
                period: 'अभी',
                title: 'ऑटोमेशन की लहर',
                description: 'AI चैटबॉट्स, वॉइस एजेंट्स, RAG सिस्टम और GEO पहले से तय कर रहे हैं कि ग्राहक कौन जीतता है।',
                gradient: 'from-cyan-500 to-blue-600',
                glow: 'rgba(0, 212, 255, 0.35)',
                features: [
                    { icon: 'bot', label: 'AI चैटबॉट्स' },
                    { icon: 'mic', label: 'वॉइस एजेंट्स' },
                    { icon: 'database', label: 'RAG सिस्टम' },
                    { icon: 'search', label: 'GEO' }
                ]
            },
            {
                period: '2026 — 2030',
                title: 'एजेंटिक वर्कफ़ोर्स',
                description: 'MCP इंटीग्रेशन से जुड़े कस्टम AI एजेंट्स पूरे वर्कफ़्लो चलाएंगे। AI सुरक्षा मिशन-क्रिटिकल बन जाएगी।',
                gradient: 'from-purple-500 to-pink-600',
                glow: 'rgba(124, 58, 237, 0.35)',
                features: [
                    { icon: 'cpu', label: 'कस्टम AI एजेंट्स' },
                    { icon: 'blocks', label: 'MCP इंटीग्रेशन' },
                    { icon: 'users', label: 'AI वर्कफ़ोर्स' },
                    { icon: 'shield', label: 'AI सुरक्षा' }
                ]
            },
            {
                period: '2030 — 2050',
                title: 'स्वायत्त एंटरप्राइज़',
                description: 'AGI-रेडी आर्किटेक्चर, स्वायत्त एंटरप्राइज़ और ह्यूमनॉइड रोबोटिक्स। आज AI-native बनाने वाले इस युग के मालिक होंगे।',
                gradient: 'from-pink-500 to-orange-500',
                glow: 'rgba(236, 72, 153, 0.35)',
                features: [
                    { icon: 'sparkles', label: 'AGI-तैयारी' },
                    { icon: 'building', label: 'स्वायत्त एंटरप्राइज़' },
                    { icon: 'rocket', label: 'ह्यूमनॉइड रोबोटिक्स' }
                ]
            }
        ],
        cta: 'आज ही अपनी AI यात्रा शुरू करें'
    },
    ms: {
        badge: 'Masa Depan Perniagaan Anda',
        title: 'Pelan Hala Tuju AI:',
        titleHighlight: '2026 → 2050',
        subtitle: 'AI bukan sekadar trend — ia infrastruktur baharu. HMZ memastikan anda kekal di hadapan setiap gelombang.',
        eras: [
            {
                period: 'KINI',
                title: 'Gelombang Automasi',
                description: 'Chatbot AI, ejen suara, sistem RAG dan GEO sudah menentukan siapa memenangi pelanggan.',
                gradient: 'from-cyan-500 to-blue-600',
                glow: 'rgba(0, 212, 255, 0.35)',
                features: [
                    { icon: 'bot', label: 'Chatbot AI' },
                    { icon: 'mic', label: 'Ejen Suara' },
                    { icon: 'database', label: 'Sistem RAG' },
                    { icon: 'search', label: 'GEO' }
                ]
            },
            {
                period: '2026 — 2030',
                title: 'Tenaga Kerja Agen',
                description: 'Ejen AI tersuai dengan integrasi MCP akan mengendalikan aliran kerja penuh. Keselamatan AI menjadi kritikal.',
                gradient: 'from-purple-500 to-pink-600',
                glow: 'rgba(124, 58, 237, 0.35)',
                features: [
                    { icon: 'cpu', label: 'Ejen AI Tersuai' },
                    { icon: 'blocks', label: 'Integrasi MCP' },
                    { icon: 'users', label: 'Tenaga Kerja AI' },
                    { icon: 'shield', label: 'Keselamatan AI' }
                ]
            },
            {
                period: '2030 — 2050',
                title: 'Perusahaan Autonomi',
                description: 'Senibina sedia-AGI, perusahaan autonomi dan robotik humanoid. Syarikat yang membina hari ini akan memiliki era ini.',
                gradient: 'from-pink-500 to-orange-500',
                glow: 'rgba(236, 72, 153, 0.35)',
                features: [
                    { icon: 'sparkles', label: 'Kesediaan AGI' },
                    { icon: 'building', label: 'Perusahaan Autonomi' },
                    { icon: 'rocket', label: 'Robotik Humanoid' }
                ]
            }
        ],
        cta: 'Mulakan Perjalanan AI Anda'
    }
}

interface FutureTimelineProps {
    lang: string
}

const FutureTimeline = ({ lang }: FutureTimelineProps) => {
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
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm mb-6">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-medium text-purple-300 tracking-wide">
                            {t.badge}
                        </span>
                    </div>
                    <h2 className="heading-ai text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        {t.title}{' '}
                        <span className="text-gradient-ai">{t.titleHighlight}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center line (desktop) / start-side line (mobile) */}
                    <div className="absolute top-0 bottom-0 start-6 md:start-1/2 md:-translate-x-1/2 w-px bg-gradient-to-b from-cyan-500/60 via-purple-500/60 to-pink-500/60" />

                    {t.eras.map((era, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className={`relative mb-16 last:mb-0 ps-16 md:ps-0 md:flex ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                        >
                            {/* Glowing node */}
                            <div className="absolute start-6 md:start-1/2 top-8 -translate-x-1/2 rtl:translate-x-1/2 z-10">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 + index * 0.1 }}
                                    className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#030014] border border-white/10"
                                    style={{ boxShadow: `0 0 30px ${era.glow}` }}
                                >
                                    <span className={`absolute inline-flex h-full w-full rounded-full bg-gradient-to-br ${era.gradient} opacity-20 animate-ping`} />
                                    <span className={`relative inline-flex rounded-full h-4 w-4 bg-gradient-to-br ${era.gradient}`} />
                                </motion.div>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block md:w-1/2" />

                            {/* Era Card */}
                            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ps-14' : 'md:pe-14'}`}>
                                <div className="glass-card-ai p-8 relative overflow-hidden group">
                                    {/* Card glow */}
                                    <div
                                        className={`absolute -top-24 -end-24 w-48 h-48 bg-gradient-to-br ${era.gradient} opacity-15 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}
                                    />

                                    {/* Era badge */}
                                    <div className={`inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r ${era.gradient} text-xs md:text-sm font-bold text-white tracking-widest mb-5`}>
                                        {era.period}
                                    </div>

                                    <h3 className="heading-ai text-2xl md:text-3xl font-bold text-white mb-4">
                                        {era.title}
                                    </h3>
                                    <p className="text-white/60 leading-relaxed mb-6">
                                        {era.description}
                                    </p>

                                    {/* Feature chips */}
                                    <div className="flex flex-wrap gap-2">
                                        {era.features.map((feature, fi) => {
                                            const Icon = iconMap[feature.icon]
                                            return (
                                                <motion.span
                                                    key={fi}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.3 + fi * 0.08 }}
                                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:border-cyan-500/40 transition-colors"
                                                >
                                                    <Icon className="w-3.5 h-3.5 text-cyan-400" />
                                                    {feature.label}
                                                </motion.span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a
                        href={getContactLink()}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white text-lg shadow-lg shadow-cyan-500/25 hover:scale-105 transition-transform"
                    >
                        {t.cta}
                        <Rocket className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default FutureTimeline
