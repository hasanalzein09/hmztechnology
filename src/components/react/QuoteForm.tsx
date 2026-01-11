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
    service: string
    requirements: string
    submit: string
    sending: string
    success: string
    error: string
}> = {
    en: {
        title: 'Get a Free Quote',
        subtitle: 'Tell us about your project and we will get back to you with a custom proposal.',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        company: 'Company Name',
        service: 'Interested Service',
        requirements: 'Project Requirements',
        submit: 'Request Quote',
        sending: 'Sending...',
        success: '✓ Request sent! We will contact you soon.',
        error: 'Failed to send. Please try again.'
    },
    ar: {
        title: 'احصل على عرض سعر مجاني',
        subtitle: 'أخبرنا عن مشروعك وسنعود إليك بعرض مخصص.',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        company: 'اسم الشركة',
        service: 'الخدمة المطلوبة',
        requirements: 'متطلبات المشروع',
        submit: 'طلب عرض سعر',
        sending: 'جاري الإرسال...',
        success: '✓ تم إرسال الطلب! سنتواصل معك قريباً.',
        error: 'فشل الإرسال. يرجى المحاولة مرة أخرى.'
    },
    de: {
        title: 'Kostenloses Angebot anfordern',
        subtitle: 'Erzählen Sie uns von Ihrem Projekt und wir erstellen ein individuelles Angebot.',
        name: 'Vollständiger Name',
        email: 'E-Mail-Adresse',
        phone: 'Telefonnummer',
        company: 'Firmenname',
        service: 'Gewünschte Dienstleistung',
        requirements: 'Projektanforderungen',
        submit: 'Angebot anfordern',
        sending: 'Wird gesendet...',
        success: '✓ Anfrage gesendet! Wir werden uns bald bei Ihnen melden.',
        error: 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.'
    },
    fr: {
        title: 'Obtenez un devis gratuit',
        subtitle: 'Parlez-nous de votre projet et nous vous ferons une proposition personnalisée.',
        name: 'Nom complet',
        email: 'Adresse e-mail',
        phone: 'Numéro de téléphone',
        company: 'Nom de l\'entreprise',
        service: 'Service souhaité',
        requirements: 'Exigences du projet',
        submit: 'Demander un devis',
        sending: 'Envoi en cours...',
        success: '✓ Demande envoyée! Nous vous contacterons bientôt.',
        error: 'Échec de l\'envoi. Veuillez réessayer.'
    },
    it: {
        title: 'Richiedi un preventivo gratuito',
        subtitle: 'Parlaci del tuo progetto e ti invieremo una proposta personalizzata.',
        name: 'Nome completo',
        email: 'Indirizzo email',
        phone: 'Numero di telefono',
        company: 'Nome azienda',
        service: 'Servizio di interesse',
        requirements: 'Requisiti del progetto',
        submit: 'Richiedi preventivo',
        sending: 'Invio in corso...',
        success: '✓ Richiesta inviata! Ti contatteremo presto.',
        error: 'Invio fallito. Riprova.'
    },
    hi: {
        title: 'मुफ्त कोटेशन प्राप्त करें',
        subtitle: 'हमें अपने प्रोजेक्ट के बारे में बताएं और हम एक कस्टम प्रस्ताव के साथ आपसे संपर्क करेंगे।',
        name: 'पूरा नाम',
        email: 'ईमेल पता',
        phone: 'फ़ोन नंबर',
        company: 'कंपनी का नाम',
        service: 'इच्छुक सेवा',
        requirements: 'प्रोजेक्ट आवश्यकताएँ',
        submit: 'कोटेशन का अनुरोध करें',
        sending: 'भेजा जा रहा है...',
        success: '✓ अनुरोध भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।',
        error: 'भेजने में विफल। कृपया पुन: प्रयास करें।'
    },
    ms: {
        title: 'Dapatkan Sebut Harga Percuma',
        subtitle: 'Beritahu kami tentang projek anda dan kami akan kembali kepada anda dengan cadangan tersuai.',
        name: 'Nama Penuh',
        email: 'Alamat E-mel',
        phone: 'Nombor Telefon',
        company: 'Nama Syarikat',
        service: 'Perkhidmatan Diminati',
        requirements: 'Keperluan Projek',
        submit: 'Minta Sebut Harga',
        sending: 'Sedang menghantar...',
        success: '✓ Permintaan dihantar! Kami akan menghubungi anda tidak lama lagi.',
        error: 'Gagal menghantar. Sila cuba lagi.'
    }
}

interface QuoteFormProps {
    lang: string;
    defaultService?: string;
}

const QuoteForm = ({ lang, defaultService }: QuoteFormProps) => {
    const currentLang = (translations[lang as Language] ? lang : 'en') as Language;
    const t = translations[currentLang];
    const isRtl = currentLang === 'ar';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: defaultService || '',
        requirements: ''
    })
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, language: lang, page: window.location.pathname, type: 'quote' })
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', phone: '', company: '', service: defaultService || '', requirements: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h2>
                <p className="text-gray-600">{t.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.name}</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.email}</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.phone}</label>
                        <input
                            type="tel"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.company}</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.service}</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        placeholder="e.g. WhatsApp Chatbot, SEO..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.requirements}</label>
                    <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 resize-none"
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    />
                </div>

                {status === 'success' && (
                    <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-100">{t.success}</div>
                )}
                {status === 'error' && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-100">{t.error}</div>
                )}

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 cursor-pointer"
                >
                    {status === 'sending' ? t.sending : t.submit}
                </button>
            </form>
        </div>
    )
}

export default QuoteForm
