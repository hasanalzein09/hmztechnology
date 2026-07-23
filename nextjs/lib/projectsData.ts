import type { Language } from '../components/react/types'

export interface Project {
    id: string
    slug: string
    title: string
    client: string
    industry: string
    serviceType: 'whatsapp' | 'instagram' | 'web' | 'seo' | 'automation'
    description: string
    challenge: string
    solution: string
    results: {
        metric: string
        value: string
        improvement: string
    }[]
    techStack: string[]
    testimonial?: {
        quote: string
        author: string
        role: string
    }
    featured: boolean
}

export const projectsData: Record<Language, {
    title: string
    subtitle: string
    urgencyBanner: string
    psychologicalHook: string
    stats: { value: string; label: string }[]
    viewProject: string
    viewAll: string
    challengeTitle: string
    solutionTitle: string
    resultsTitle: string
    projects: Project[]
}> = {
    en: {
        title: 'Success Stories',
        subtitle: 'Real results from real clients. See how we transform businesses with AI automation.',
        urgencyBanner: '🏆 50+ Successful Projects Delivered',
        psychologicalHook: 'These could be your results. Every day you wait, competitors are pulling ahead.',
        stats: [
            { value: '50+', label: 'Projects Delivered' },
            { value: '95%', label: 'Client Satisfaction' },
            { value: '300%', label: 'Avg. ROI Achieved' }
        ],
        viewProject: 'View Case Study',
        viewAll: 'View All Projects',
        challengeTitle: 'The Challenge',
        solutionTitle: 'Our Solution',
        resultsTitle: 'The Results',
        projects: [
            {
                id: 'clinic-whatsapp-bot',
                slug: 'healthcare-clinic-whatsapp-automation',
                title: 'Healthcare Clinic WhatsApp Automation',
                client: 'Premier Medical Center',
                industry: 'Healthcare',
                serviceType: 'whatsapp',
                description: 'Fully automated patient booking and follow-up system via WhatsApp.',
                challenge: 'The clinic was losing 40% of potential patients due to slow phone response times. Staff spent 6+ hours daily on manual appointment scheduling.',
                solution: 'We deployed an AI-powered WhatsApp bot that handles appointment booking, reminders, follow-ups, and patient FAQs 24/7.',
                results: [
                    { metric: 'Response Time', value: '3 sec', improvement: '99% faster' },
                    { metric: 'Bookings', value: '+85%', improvement: 'increase' },
                    { metric: 'Staff Hours Saved', value: '30h/week', improvement: 'freed up' }
                ],
                techStack: ['WhatsApp Business API', 'Node.js', 'AI/NLP', 'Google Calendar'],
                testimonial: {
                    quote: 'Our booking rate exploded. Patients love the instant responses.',
                    author: 'Dr. Sarah Ahmed',
                    role: 'Medical Director'
                },
                featured: true
            },
            {
                id: 'ecommerce-instagram',
                slug: 'ecommerce-instagram-sales-bot',
                title: 'E-commerce Instagram Sales Bot',
                client: 'Fashion Boutique ME',
                industry: 'E-commerce',
                serviceType: 'instagram',
                description: 'Automated Instagram DM sales funnel with order processing.',
                challenge: 'Manual DM responses taking 2-3 hours daily. Missing sales from customers in different time zones.',
                solution: 'AI Instagram bot handling product inquiries, size recommendations, and order processing directly in DMs.',
                results: [
                    { metric: 'Monthly Revenue', value: '+120%', improvement: 'growth' },
                    { metric: 'Response Rate', value: '100%', improvement: '24/7 coverage' },
                    { metric: 'Order Processing', value: '2 min', improvement: 'automated' }
                ],
                techStack: ['Instagram Graph API', 'AI Sales Agent', 'Shopify Integration'],
                testimonial: {
                    quote: 'We now sell while we sleep. Best investment we ever made.',
                    author: 'Layla K.',
                    role: 'Founder'
                },
                featured: true
            },
            {
                id: 'restaurant-ordering',
                slug: 'restaurant-whatsapp-ordering-system',
                title: 'Restaurant WhatsApp Ordering System',
                client: 'Gourmet Kitchen Chain',
                industry: 'Restaurants',
                serviceType: 'whatsapp',
                description: 'Complete WhatsApp ordering with menu browsing and payment.',
                challenge: 'Phone orders creating bottlenecks. High error rate in manual order taking. Missing delivery opportunities.',
                solution: 'WhatsApp-based ordering system with AI menu assistant, order tracking, and integrated payment.',
                results: [
                    { metric: 'Order Errors', value: '-95%', improvement: 'reduction' },
                    { metric: 'Delivery Orders', value: '+200%', improvement: 'increase' },
                    { metric: 'Customer Wait Time', value: '-70%', improvement: 'faster' }
                ],
                techStack: ['WhatsApp Business API', 'POS Integration', 'Payment Gateway'],
                featured: true
            }
        ]
    },
    ar: {
        title: 'قصص النجاح',
        subtitle: 'نتائج حقيقية من عملاء حقيقيين. شاهد كيف نحوّل الشركات بأتمتة الذكاء الاصطناعي.',
        urgencyBanner: '🏆 أكثر من 50 مشروع ناجح تم تسليمه',
        psychologicalHook: 'هذه يمكن أن تكون نتائجك. كل يوم تنتظره، منافسوك يتقدمون.',
        stats: [
            { value: '+50', label: 'مشروع منجز' },
            { value: '95%', label: 'رضا العملاء' },
            { value: '300%', label: 'متوسط العائد' }
        ],
        viewProject: 'عرض دراسة الحالة',
        viewAll: 'عرض كل المشاريع',
        challengeTitle: 'التحدي',
        solutionTitle: 'الحل',
        resultsTitle: 'النتائج',
        projects: [
            {
                id: 'clinic-whatsapp-bot',
                slug: 'healthcare-clinic-whatsapp-automation',
                title: 'أتمتة واتساب للعيادة الصحية',
                client: 'المركز الطبي المتميز',
                industry: 'الرعاية الصحية',
                serviceType: 'whatsapp',
                description: 'نظام حجز ومتابعة مرضى آلي بالكامل عبر واتساب.',
                challenge: 'كانت العيادة تخسر 40% من المرضى المحتملين بسبب بطء الرد على الهاتف. الموظفون يقضون 6+ ساعات يومياً في جدولة المواعيد.',
                solution: 'نشرنا بوت واتساب مدعوم بالذكاء الاصطناعي يتولى حجز المواعيد والتذكيرات والمتابعات والأسئلة الشائعة 24/7.',
                results: [
                    { metric: 'وقت الاستجابة', value: '3 ث', improvement: 'أسرع 99%' },
                    { metric: 'الحجوزات', value: '+85%', improvement: 'زيادة' },
                    { metric: 'ساعات الموظفين', value: '30س/أسبوع', improvement: 'تم توفيرها' }
                ],
                techStack: ['WhatsApp Business API', 'Node.js', 'AI/NLP', 'Google Calendar'],
                testimonial: {
                    quote: 'انفجر معدل الحجز لدينا. المرضى يحبون الردود الفورية.',
                    author: 'د. سارة أحمد',
                    role: 'المديرة الطبية'
                },
                featured: true
            },
            {
                id: 'ecommerce-instagram',
                slug: 'ecommerce-instagram-sales-bot',
                title: 'بوت مبيعات انستغرام للتجارة الإلكترونية',
                client: 'بوتيك الأزياء الشرق الأوسط',
                industry: 'التجارة الإلكترونية',
                serviceType: 'instagram',
                description: 'قمع مبيعات آلي عبر رسائل انستغرام مع معالجة الطلبات.',
                challenge: 'الردود اليدوية على الرسائل تستغرق 2-3 ساعات يومياً. فقدان مبيعات من عملاء في مناطق زمنية مختلفة.',
                solution: 'بوت انستغرام بالذكاء الاصطناعي يتولى استفسارات المنتجات وتوصيات المقاسات ومعالجة الطلبات مباشرة في الرسائل.',
                results: [
                    { metric: 'الإيرادات الشهرية', value: '+120%', improvement: 'نمو' },
                    { metric: 'معدل الرد', value: '100%', improvement: 'تغطية 24/7' },
                    { metric: 'معالجة الطلبات', value: '2 دقيقة', improvement: 'آلي' }
                ],
                techStack: ['Instagram Graph API', 'AI Sales Agent', 'Shopify Integration'],
                testimonial: {
                    quote: 'نبيع الآن ونحن نائمون. أفضل استثمار قمنا به.',
                    author: 'ليلى ك.',
                    role: 'المؤسسة'
                },
                featured: true
            },
            {
                id: 'restaurant-ordering',
                slug: 'restaurant-whatsapp-ordering-system',
                title: 'نظام طلبات المطاعم عبر واتساب',
                client: 'سلسلة مطابخ الذواقة',
                industry: 'المطاعم',
                serviceType: 'whatsapp',
                description: 'نظام طلبات واتساب كامل مع تصفح القائمة والدفع.',
                challenge: 'طلبات الهاتف تسبب اختناقات. معدل خطأ عالي في تسجيل الطلبات يدوياً. فقدان فرص التوصيل.',
                solution: 'نظام طلبات عبر واتساب مع مساعد قائمة بالذكاء الاصطناعي وتتبع الطلبات ودفع متكامل.',
                results: [
                    { metric: 'أخطاء الطلبات', value: '-95%', improvement: 'انخفاض' },
                    { metric: 'طلبات التوصيل', value: '+200%', improvement: 'زيادة' },
                    { metric: 'وقت انتظار العميل', value: '-70%', improvement: 'أسرع' }
                ],
                techStack: ['WhatsApp Business API', 'POS Integration', 'Payment Gateway'],
                featured: true
            }
        ]
    },
    de: {
        title: 'Erfolgsgeschichten',
        subtitle: 'Echte Ergebnisse von echten Kunden. Sehen Sie, wie wir Unternehmen mit KI-Automatisierung transformieren.',
        urgencyBanner: '🏆 50+ Erfolgreich gelieferte Projekte',
        psychologicalHook: 'Dies könnten Ihre Ergebnisse sein. Jeden Tag, den Sie warten, ziehen Wettbewerber voraus.',
        stats: [
            { value: '50+', label: 'Projekte geliefert' },
            { value: '95%', label: 'Kundenzufriedenheit' },
            { value: '300%', label: 'Durchschn. ROI' }
        ],
        viewProject: 'Fallstudie ansehen',
        viewAll: 'Alle Projekte',
        challengeTitle: 'Die Herausforderung',
        solutionTitle: 'Unsere Lösung',
        resultsTitle: 'Die Ergebnisse',
        projects: []
    },
    fr: {
        title: 'Études de Cas',
        subtitle: 'Des résultats réels de vrais clients. Découvrez comment nous transformons les entreprises avec l\'automatisation IA.',
        urgencyBanner: '🏆 50+ Projets livrés avec succès',
        psychologicalHook: 'Ces résultats pourraient être les vôtres. Chaque jour d\'attente, vos concurrents prennent de l\'avance.',
        stats: [
            { value: '50+', label: 'Projets livrés' },
            { value: '95%', label: 'Satisfaction client' },
            { value: '300%', label: 'ROI Moyen' }
        ],
        viewProject: 'Voir l\'étude de cas',
        viewAll: 'Tous les projets',
        challengeTitle: 'Le Défi',
        solutionTitle: 'Notre Solution',
        resultsTitle: 'Les Résultats',
        projects: []
    },
    it: {
        title: 'Casi di Successo',
        subtitle: 'Risultati reali da clienti reali. Scopri come trasformiamo le aziende con l\'automazione IA.',
        urgencyBanner: '🏆 50+ Progetti consegnati con successo',
        psychologicalHook: 'Questi potrebbero essere i tuoi risultati. Ogni giorno che aspetti, i concorrenti ti superano.',
        stats: [
            { value: '50+', label: 'Progetti consegnati' },
            { value: '95%', label: 'Soddisfazione cliente' },
            { value: '300%', label: 'ROI Medio' }
        ],
        viewProject: 'Vedi caso studio',
        viewAll: 'Tutti i progetti',
        challengeTitle: 'La Sfida',
        solutionTitle: 'La Nostra Soluzione',
        resultsTitle: 'I Risultati',
        projects: []
    },
    hi: {
        title: 'सफलता की कहानियां',
        subtitle: 'असली ग्राहकों से असली परिणाम। देखें कैसे हम AI ऑटोमेशन से व्यवसायों को बदलते हैं।',
        urgencyBanner: '🏆 50+ सफल प्रोजेक्ट डिलीवर किए',
        psychologicalHook: 'ये आपके परिणाम हो सकते हैं। हर दिन की देरी में प्रतिस्पर्धी आगे बढ़ रहे हैं।',
        stats: [
            { value: '50+', label: 'प्रोजेक्ट डिलीवर' },
            { value: '95%', label: 'ग्राहक संतुष्टि' },
            { value: '300%', label: 'औसत ROI' }
        ],
        viewProject: 'केस स्टडी देखें',
        viewAll: 'सभी प्रोजेक्ट',
        challengeTitle: 'चुनौती',
        solutionTitle: 'हमारा समाधान',
        resultsTitle: 'परिणाम',
        projects: []
    },
    ms: {
        title: 'Kisah Kejayaan',
        subtitle: 'Hasil sebenar dari pelanggan sebenar. Lihat bagaimana kami mengubah perniagaan dengan automasi AI.',
        urgencyBanner: '🏆 50+ Projek berjaya dihantar',
        psychologicalHook: 'Ini boleh jadi hasil anda. Setiap hari menunggu, pesaing semakin mendahului.',
        stats: [
            { value: '50+', label: 'Projek dihantar' },
            { value: '95%', label: 'Kepuasan pelanggan' },
            { value: '300%', label: 'ROI Purata' }
        ],
        viewProject: 'Lihat kajian kes',
        viewAll: 'Semua projek',
        challengeTitle: 'Cabaran',
        solutionTitle: 'Penyelesaian Kami',
        resultsTitle: 'Keputusan',
        projects: []
    }
}

export const getProjectBySlug = (slug: string, lang: Language): Project | undefined => {
    return projectsData[lang].projects.find(p => p.slug === slug) ||
        projectsData.en.projects.find(p => p.slug === slug)
}

export const getFeaturedProjects = (lang: Language): Project[] => {
    const projects = projectsData[lang].projects.length > 0
        ? projectsData[lang].projects
        : projectsData.en.projects
    return projects.filter(p => p.featured)
}

export const getAllProjects = (lang: Language): Project[] => {
    return projectsData[lang].projects.length > 0
        ? projectsData[lang].projects
        : projectsData.en.projects
}
