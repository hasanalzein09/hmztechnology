import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'

type Language = 'en' | 'ar' | 'de' | 'fr' | 'it' | 'hi' | 'ms'

const translations: Record<Language, {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    name: string
    email: string
    phone: string
    company: string
    service: string
    message: string
    submit: string
    sending: string
    success: string
    error: string
    whatsappCta: string
    emailCta: string
    callCta: string
    orContact: string
    responseTime: string
    services: string[]
}> = {
    en: {
        badge: '⏰ Only 3 Spots Left This Month',
        title: 'Stop Losing',
        titleHighlight: 'Money Today',
        subtitle: 'Every day you wait, competitors with AI are taking your customers. Book your free strategy call.',
        name: 'Your Name',
        email: 'Best Email',
        phone: 'WhatsApp (Fastest Response)',
        company: 'Company Name',
        service: 'What\'s Costing You Money?',
        message: 'What problem is bleeding your business right now?',
        submit: 'Claim My Free Audit →',
        sending: 'Securing your spot...',
        success: '✓ Spot secured! We\'ll call you within 2 hours.',
        error: 'Failed to send. Call us directly: +961 70 106 083',
        whatsappCta: 'Get Instant Response',
        emailCta: 'Email Us',
        callCta: 'Call Now',
        orContact: 'Need answers faster?',
        responseTime: '⚡ Average response: 47 minutes',
        services: ['Losing leads on WhatsApp', 'Instagram DMs ignored', 'Website not converting', 'Manual tasks eating time', 'Competitors outranking me', 'Other']
    },
    ar: {
        badge: '⏰ باقي 3 أماكن فقط هالشهر',
        title: 'وقّف خسارة',
        titleHighlight: 'الفلوس اليوم',
        subtitle: 'كل يوم تأخير، منافسوك بالـ AI ياخذون عملائك. احجز مكالمة استراتيجية مجانية.',
        name: 'اسمك',
        email: 'أفضل إيميل',
        phone: 'واتساب (أسرع رد)',
        company: 'اسم الشركة',
        service: 'شو عم يكلفك فلوس؟',
        message: 'شو المشكلة اللي عم تنزف من عملك الحين؟',
        submit: 'احجز تحليلي المجاني ←',
        sending: 'عم نحجز مكانك...',
        success: '✓ تم الحجز! رح نتصل فيك خلال ساعتين.',
        error: 'فشل الإرسال. اتصل فينا مباشرة: +961 70 106 083',
        whatsappCta: 'رد فوري',
        emailCta: 'إيميل',
        callCta: 'اتصل الحين',
        orContact: 'بدك جواب أسرع؟',
        responseTime: '⚡ متوسط الرد: 47 دقيقة',
        services: ['عم خسر عملاء ع واتساب', 'رسائل انستغرام متجاهلة', 'الموقع ما بيحوّل', 'مهام يدوية تاكل وقتي', 'المنافسين متصدرين علي', 'غير']
    },
    de: {
        badge: '📬 Kontakt',
        title: 'Lassen Sie uns',
        titleHighlight: 'etwas Großartiges bauen',
        subtitle: 'Erzählen Sie uns von Ihrem Projekt und wir melden uns innerhalb von 24 Stunden',
        name: 'Ihr Name',
        email: 'E-Mail-Adresse',
        phone: 'Telefon / WhatsApp',
        company: 'Firmenname',
        service: 'Gewünschte Dienstleistung',
        message: 'Erzählen Sie uns von Ihrem Projekt...',
        submit: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: 'Nachricht gesendet! Wir melden uns innerhalb von 24 Stunden.',
        error: 'Senden fehlgeschlagen. Versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
        whatsappCta: 'Per WhatsApp kontaktieren',
        emailCta: 'E-Mail senden',
        callCta: 'Jetzt anrufen',
        orContact: 'Oder kontaktieren Sie uns direkt',
        responseTime: 'Durchschnittliche Antwortzeit: 2 Stunden',
        services: ['WhatsApp KI-Bot', 'Instagram KI-Bot', 'Messenger Bot', 'KI-Automatisierung', 'Webentwicklung', 'SEO-Dienste']
    },
    fr: {
        badge: '📬 Contactez-nous',
        title: 'Construisons',
        titleHighlight: 'quelque chose d\'incroyable',
        subtitle: 'Parlez-nous de votre projet et nous vous répondrons sous 24 heures',
        name: 'Votre nom',
        email: 'Adresse e-mail',
        phone: 'Téléphone / WhatsApp',
        company: 'Nom de l\'entreprise',
        service: 'Service souhaité',
        message: 'Parlez-nous de votre projet...',
        submit: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé! Nous vous contacterons sous 24 heures.',
        error: 'Échec de l\'envoi. Réessayez ou contactez-nous directement.',
        whatsappCta: 'Contacter par WhatsApp',
        emailCta: 'Envoyer un e-mail',
        callCta: 'Appeler maintenant',
        orContact: 'Ou contactez-nous directement',
        responseTime: 'Temps de réponse moyen: 2 heures',
        services: ['Bot IA WhatsApp', 'Bot IA Instagram', 'Bot Messenger', 'Automatisation IA', 'Développement Web', 'Services SEO']
    },
    it: {
        badge: '📬 Contattaci',
        title: 'Costruiamo',
        titleHighlight: 'qualcosa di straordinario',
        subtitle: 'Raccontaci del tuo progetto e ti risponderemo entro 24 ore',
        name: 'Il tuo nome',
        email: 'Indirizzo email',
        phone: 'Telefono / WhatsApp',
        company: 'Nome azienda',
        service: 'Servizio desiderato',
        message: 'Raccontaci del tuo progetto...',
        submit: 'Invia messaggio',
        sending: 'Invio in corso...',
        success: 'Messaggio inviato! Ti contatteremo entro 24 ore.',
        error: 'Invio fallito. Riprova o contattaci direttamente.',
        whatsappCta: 'Contatta su WhatsApp',
        emailCta: 'Invia email',
        callCta: 'Chiama ora',
        orContact: 'Oppure contattaci direttamente',
        responseTime: 'Tempo di risposta medio: 2 ore',
        services: ['Bot IA WhatsApp', 'Bot IA Instagram', 'Bot Messenger', 'Automazione IA', 'Sviluppo Web', 'Servizi SEO']
    },
    hi: {
        badge: '📬 संपर्क करें',
        title: 'आइए बनाएं',
        titleHighlight: 'कुछ अद्भुत',
        subtitle: 'हमें अपने प्रोजेक्ट के बारे में बताएं और हम 24 घंटों के भीतर आपसे संपर्क करेंगे',
        name: 'आपका नाम',
        email: 'ईमेल पता',
        phone: 'फ़ोन / WhatsApp',
        company: 'कंपनी का नाम',
        service: 'इच्छित सेवा',
        message: 'हमें अपने प्रोजेक्ट के बारे में बताएं...',
        submit: 'संदेश भेजें',
        sending: 'भेजा जा रहा है...',
        success: 'संदेश भेजा गया! हम 24 घंटों के भीतर आपसे संपर्क करेंगे।',
        error: 'भेजने में विफल। कृपया पुन: प्रयास करें या हमसे सीधे संपर्क करें।',
        whatsappCta: 'WhatsApp पर चैट करें',
        emailCta: 'ईमेल भेजें',
        callCta: 'अभी कॉल करें',
        orContact: 'या हमसे सीधे संपर्क करें',
        responseTime: 'औसत प्रतिक्रिया समय: 2 घंटे',
        services: ['WhatsApp AI बॉट', 'Instagram AI बॉट', 'Messenger बॉट', 'AI ऑटोमेशन', 'वेब डेवलपमेंट', 'SEO सेवाएं']
    },
    ms: {
        badge: '📬 Hubungi Kami',
        title: 'Mari Bina',
        titleHighlight: 'Sesuatu yang Menakjubkan',
        subtitle: 'Beritahu kami tentang projek anda dan kami akan menghubungi anda dalam masa 24 jam',
        name: 'Nama Anda',
        email: 'Alamat E-mel',
        phone: 'Telefon / WhatsApp',
        company: 'Nama Syarikat',
        service: 'Perkhidmatan Dikehendaki',
        message: 'Beritahu kami tentang projek anda...',
        submit: 'Hantar Mesej',
        sending: 'Sedang menghantar...',
        success: 'Mesej dihantar! Kami akan menghubungi anda dalam masa 24 jam.',
        error: 'Gagal menghantar. Sila cuba lagi atau hubungi kami secara langsung.',
        whatsappCta: 'Sembang di WhatsApp',
        emailCta: 'Hantar E-mel',
        callCta: 'Hubungi Sekarang',
        orContact: 'Atau hubungi kami secara langsung',
        responseTime: 'Purata masa respons: 2 jam',
        services: ['Bot AI WhatsApp', 'Bot AI Instagram', 'Bot Messenger', 'Automasi AI', 'Pembangunan Web', 'Perkhidmatan SEO']
    }
}

interface ContactFormProps {
    lang: string
}

const ContactForm = ({ lang }: ContactFormProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language
    const t = translations[currentLang]
    const isRtl = currentLang === 'ar'

    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        company: '', 
        service: '',
        message: '' 
    })
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Lead - ${formData.name} - ${formData.service}`,
                    language: lang,
                    page: typeof window !== 'undefined' ? window.location.pathname : ''
                })
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <section dir={isRtl ? 'rtl' : 'ltr'} className="relative py-24 md:py-32 bg-[#030014] overflow-hidden">
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

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-8">
                        <span className="text-sm font-medium text-cyan-300">{t.badge}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {t.title}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            {t.titleHighlight}
                        </span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">{t.subtitle}</p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="glass-card-ai p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        required
                                        placeholder={t.name}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        required
                                        placeholder={t.email}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="tel"
                                        placeholder={t.phone}
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder={t.company}
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <select
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none cursor-pointer"
                                >
                                    <option value="" className="bg-[#030014]">{t.service}</option>
                                    {t.services.map((service, i) => (
                                        <option key={i} value={service} className="bg-[#030014]">{service}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <textarea
                                    required
                                    rows={5}
                                    placeholder={t.message}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                                />
                            </div>

                            {status === 'success' && (
                                <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-emerald-400">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    {t.success}
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    {t.error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50"
                            >
                                {status === 'sending' ? t.sending : t.submit}
                                <Send className="w-5 h-5" />
                            </button>

                            <p className="text-center text-white/40 text-sm">{t.responseTime}</p>
                        </form>
                    </motion.div>

                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <p className="text-white/60 text-sm uppercase tracking-wider mb-4">{t.orContact}</p>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/96170106083"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 glass-card-ai p-6 hover:border-green-500/30 transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <div className="font-semibold text-white group-hover:text-green-400 transition-colors">{t.whatsappCta}</div>
                                <div className="text-sm text-white/50">+961 70 106 083</div>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:sales@hmz.technology"
                            className="group flex items-center gap-4 glass-card-ai p-6 hover:border-blue-500/30 transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                                <Mail className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">{t.emailCta}</div>
                                <div className="text-sm text-white/50">sales@hmz.technology</div>
                            </div>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+96170106083"
                            className="group flex items-center gap-4 glass-card-ai p-6 hover:border-purple-500/30 transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform">
                                <Phone className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <div className="font-semibold text-white group-hover:text-purple-400 transition-colors">{t.callCta}</div>
                                <div className="text-sm text-white/50">+961 70 106 083</div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
