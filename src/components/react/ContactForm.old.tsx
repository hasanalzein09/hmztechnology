import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Language } from './types'

const translations: Record<Language, {
    title: string
    subtitle: string
    name: string
    email: string
    phone: string
    company: string
    message: string
    submit: string
    sending: string
    success: string
    error: string
    whatsappCta: string
    emailCta: string
    callCta: string
}> = {
    en: {
        title: 'Get in Touch',
        subtitle: 'Ready to automate your business? Let\'s talk.',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone (WhatsApp)',
        company: 'Company Name',
        message: 'How can we help you?',
        submit: 'Send Message',
        sending: 'Sending...',
        success: '✓ Message sent! We\'ll contact you within 24 hours.',
        error: 'Failed to send. Please try again.',
        whatsappCta: '💬 Chat on WhatsApp',
        emailCta: '📧 Send Email',
        callCta: '📞 Call Now'
    },
    ar: {
        title: 'تواصل معنا',
        subtitle: 'جاهز لأتمتة عملك؟ دعنا نتحدث.',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف (واتساب)',
        company: 'اسم الشركة',
        message: 'كيف يمكننا مساعدتك؟',
        submit: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        success: '✓ تم إرسال الرسالة! سنتواصل معك خلال 24 ساعة.',
        error: 'فشل الإرسال. يرجى المحاولة مرة أخرى.',
        whatsappCta: '💬 تواصل عبر واتساب',
        emailCta: '📧 أرسل بريد إلكتروني',
        callCta: '📞 اتصل الآن'
    },
    de: {
        title: 'Kontaktieren Sie uns',
        subtitle: 'Bereit, Ihr Geschäft zu automatisieren? Lassen Sie uns sprechen.',
        name: 'Vollständiger Name',
        email: 'E-Mail-Adresse',
        phone: 'Telefon (WhatsApp)',
        company: 'Firmenname',
        message: 'Wie können wir Ihnen helfen?',
        submit: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: '✓ Nachricht gesendet! Wir melden uns innerhalb von 24 Stunden.',
        error: 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.',
        whatsappCta: '💬 Per WhatsApp kontaktieren',
        emailCta: '📧 E-Mail senden',
        callCta: '📞 Jetzt anrufen'
    },
    fr: {
        title: 'Contactez-nous',
        subtitle: 'Prêt à automatiser votre entreprise? Parlons-en.',
        name: 'Nom complet',
        email: 'Adresse e-mail',
        phone: 'Téléphone (WhatsApp)',
        company: 'Nom de l\'entreprise',
        message: 'Comment pouvons-nous vous aider?',
        submit: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: '✓ Message envoyé! Nous vous contacterons dans les 24 heures.',
        error: 'Échec de l\'envoi. Veuillez réessayer.',
        whatsappCta: '💬 Contacter par WhatsApp',
        emailCta: '📧 Envoyer un e-mail',
        callCta: '📞 Appeler maintenant'
    },
    it: {
        title: 'Contattaci',
        subtitle: 'Pronto ad automatizzare la tua azienda? Parliamone.',
        name: 'Nome completo',
        email: 'Indirizzo email',
        phone: 'Telefono (WhatsApp)',
        company: 'Nome azienda',
        message: 'Come possiamo aiutarti?',
        submit: 'Invia messaggio',
        sending: 'Invio in corso...',
        success: '✓ Messaggio inviato! Ti contatteremo entro 24 ore.',
        error: 'Invio fallito. Riprova.',
        whatsappCta: '💬 Contattaci su WhatsApp',
        emailCta: '📧 Invia email',
        callCta: '📞 Chiama ora'
    },
    hi: {
        title: 'संपर्क करें',
        subtitle: 'अपने व्यवसाय को स्वचालित करने के लिए तैयार हैं? चलिए बात करते हैं।',
        name: 'पूरा नाम',
        email: 'ईमेल पता',
        phone: 'फ़ोन (WhatsApp)',
        company: 'कंपनी का नाम',
        message: 'हम आपकी कैसे मदद कर सकते हैं?',
        submit: 'संदेश भेजें',
        sending: 'भेजा जा रहा है...',
        success: '✓ संदेश भेजा गया! हम 24 घंटों के भीतर आपसे संपर्क करेंगे।',
        error: 'भेजने में विफल। कृपया पुन: प्रयास करें।',
        whatsappCta: '💬 WhatsApp पर चैट करें',
        emailCta: '📧 ईमेल भेजें',
        callCta: '📞 अभी कॉल करें'
    },
    ms: {
        title: 'Hubungi Kami',
        subtitle: 'Bersedia untuk mengautomasikan perniagaan anda? Mari berbincang.',
        name: 'Nama Penuh',
        email: 'Alamat E-mel',
        phone: 'Telefon (WhatsApp)',
        company: 'Nama Syarikat',
        message: 'Bagaimana kami boleh membantu anda?',
        submit: 'Hantar Mesej',
        sending: 'Sedang menghantar...',
        success: '✓ Mesej dihantar! Kami akan menghubungi anda dalam masa 24 jam.',
        error: 'Gagal menghantar. Sila cuba lagi.',
        whatsappCta: '💬 Sembang di WhatsApp',
        emailCta: '📧 Hantar E-mel',
        callCta: '📞 Hubungi Sekarang'
    }
}

interface ContactFormProps {
    lang: string;
}

const ContactForm = ({ lang }: ContactFormProps) => {
    // Default safe
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language;
    const t = translations[currentLang];
    const isRtl = currentLang === 'ar';

    const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Lead from HMZ Technology - ${formData.name}`,
                    _replyto: formData.email,
                    language: lang,
                    page: typeof window !== 'undefined' ? window.location.pathname : ''
                })
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', phone: '', company: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <section id="contact" dir={isRtl ? 'rtl' : 'ltr'} className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
                    <p className="text-xl text-gray-400">{t.subtitle}</p>
                </motion.div>

                {/* Quick Contact Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    <a href="https://wa.me/96170106083" className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        {t.whatsappCta}
                    </a>
                    <a href="mailto:sales@hmz.technology" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        {t.emailCta}
                    </a>
                    <a href="tel:+96170106083" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        {t.callCta}
                    </a>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            required
                            placeholder={t.name}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="email"
                            required
                            placeholder={t.email}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="tel"
                            placeholder={t.phone}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="text"
                            placeholder={t.company}
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <textarea
                        required
                        rows={5}
                        placeholder={t.message}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                    />

                    {status === 'success' && (
                        <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-green-400">{t.success}</div>
                    )}
                    {status === 'error' && (
                        <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-red-400">{t.error}</div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
                    >
                        {status === 'sending' ? t.sending : t.submit}
                    </button>
                </motion.form>
            </div>
        </section>
    )
}

export default ContactForm
