import ServiceTemplate from './ServiceTemplate';
import type { Language } from './types'

interface ServiceContentProps {
    lang: string;
    serviceId: 'whatsapp' | 'instagram' | 'messenger' | 'nextjs' | 'seo' | 'automation';
}

const ServiceContent = ({ lang, serviceId }: ServiceContentProps) => {

    const content = {
        whatsapp: {
            en: {
                title: 'WhatsApp AI Chatbot',
                subtitle: 'Automate customer support, lead generation, and sales on the world\'s most popular messaging app.',
                description: 'Transform your WhatsApp Business presence with an intelligent 24/7 AI assistant.',
                features: [
                    { title: '24/7 Auto-Replies', description: 'Instantly answer FAQs and customer queries at any time of day.', icon: '🕒' },
                    { title: 'Smart Lead Qualification', description: 'Collect and qualify leads automatically before passing to agents.', icon: '🎯' },
                    { title: 'CRM Integration', description: 'Sync conversations and leads directly to your HubSpot, Salesforce, or Zoho.', icon: '🔄' },
                    { title: 'Multi-Language Support', description: 'Communicate with customers in their native language automatically.', icon: '🌍' }
                ],
                benefits: {
                    title: 'Why choose our WhatsApp Bot?',
                    items: ['Reduce support costs by 70%', 'Increase engagement by 300%', 'Zero downtime reliability', 'Secure & GDPR Compliant']
                },
                ctaValues: [
                    { value: '98%', label: 'Open Rate' },
                    { value: '24/7', label: 'Availability' },
                    { value: '3x', label: 'Conversion' }
                ]
            },
            ar: {
                title: 'شات بوت واتساب الذكي',
                subtitle: 'أتمتة خدمة العملاء والمبيعات على تطبيق المراسلة الأكثر شهرة في العالم.',
                description: 'حول حساب واتساب التجاري الخاص بك إلى مساعد ذكي يعمل 24/7.',
                features: [
                    { title: 'ردود تلقائية 24/7', description: 'أجب فوراً على الأسئلة الشائعة واستفسارات العملاء في أي وقت.', icon: '🕒' },
                    { title: 'تأهيل العملاء المحتملين', description: 'جمع وتصنيف العملاء المحتملين تلقائياً قبل تحويلهم للموظفين.', icon: '🎯' },
                    { title: 'ربط مع CRM', description: 'زامنة المحادثات والبيانات مباشرة مع أنظمة إدارة العملاء.', icon: '🔄' },
                    { title: 'دعم متعدد اللغات', description: 'تواصل مع عملائك بلغتهم الأم تلقائياً.', icon: '🌍' }
                ],
                benefits: {
                    title: 'لماذا تختار بوت واتساب الخاص بنا؟',
                    items: ['تقليل تكاليف الدعم بنسبة 70%', 'زيادة التفاعل بنسبة 300%', 'متاح دائماً بدون توقف', 'آمن ومتوافق مع الخصوصية']
                },
                ctaValues: [
                    { value: '98%', label: 'معدل فتح' },
                    { value: '24/7', label: 'توافر' },
                    { value: '3x', label: 'تحويل' }
                ]
            }
        },
        instagram: {
            en: {
                title: 'Instagram AI Automation',
                subtitle: 'Skyrocket your engagement and sales with automated DMs, comments, and story reactions.',
                description: 'Turn your Instagram followers into customers with smart automation.',
                features: [
                    { title: 'Instant DM Replies', description: 'Never leave a customer waiting. Reply to DMs instantly.', icon: '⚡' },
                    { title: 'Story Mentions', description: 'Automatically thank users who mention you in stories.', icon: '📸' },
                    { title: 'Comment Management', description: 'Auto-reply to comments or hide offensive ones.', icon: '💬' },
                    { title: 'Sales Funnel', description: 'Guide users from a post comment to a purchase link automatically.', icon: '💰' }
                ],
                benefits: {
                    title: 'Boost Your Instagram Growth',
                    items: ['Increase engagement rate', 'Drive more website traffic', 'Save hours of manual work', 'Build community loyalty']
                },
                ctaValues: [
                    { value: '5x', label: 'Engagement' },
                    { value: '24/7', label: 'Active' },
                    { value: '100%', label: 'Secure' }
                ]
            },
            ar: {
                title: 'أتمتة انستغرام الذكية',
                subtitle: 'ضاعف تفاعلك ومبيعاتك مع أتمتة الرسائل والتعليقات والقصص.',
                description: 'حول متابعيك على انستغرام إلى عملاء مع الأتمتة الذكية.',
                features: [
                    { title: 'ردود فورية', description: 'لا تترك العميل ينتظر. رد على الرسائل فوراً.', icon: '⚡' },
                    { title: 'تفاعل القصص', description: 'اشكر المستخدمين الذين يذكرونك في قصصهم تلقائياً.', icon: '📸' },
                    { title: 'إدارة التعليقات', description: 'رد تلقائي على التعليقات أو إخفاء المسيئة.', icon: '💬' },
                    { title: 'قمع مبيعات', description: 'وجه المستخدمين من تعليق إلى رابط الشراء تلقائياً.', icon: '💰' }
                ],
                benefits: {
                    title: 'عزز نمو انستغرام',
                    items: ['زيادة معدل التفاعل', 'زيادة زيارات الموقع', 'توفير ساعات عمل', 'بناء ولاء المجتمع']
                },
                ctaValues: [
                    { value: '5x', label: 'تفاعل' },
                    { value: '24/7', label: 'نشط' },
                    { value: '100%', label: 'آمن' }
                ]
            }
        },
        messenger: {
            en: {
                title: 'Messenger AI Chatbot',
                subtitle: 'Automate Facebook Messenger with AI to capture leads, support users, and drive conversions 24/7.',
                description: 'Connect with your customers on the platform they use most with intelligent automated conversations.',
                features: [
                    { title: 'Lead Capture', description: 'Automatically collect and qualify leads directly within Messenger.', icon: '🎣' },
                    { title: 'Facebook Ads Integration', description: 'Connect your Click-to-Messenger ads directly to your chatbot funnel.', icon: '📢' },
                    { title: 'Product Showcase', description: 'Display your products and allow customers to browse within the chat.', icon: '🛍️' },
                    { title: 'Support Automation', description: 'Handle common support queries instantly without human intervention.', icon: '🤖' }
                ],
                benefits: {
                    title: 'Maximize Facebook ROI',
                    items: ['Lower cost per lead', 'Instant response time', 'Higher conversion rates', 'Seamless ad integration']
                },
                ctaValues: [
                    { value: '80%', label: 'Resolution' },
                    { value: '24/7', label: 'Support' },
                    { value: '2x', label: 'Conversion' }
                ]
            },
            ar: {
                title: 'شات بوت ماسنجر الذكي',
                subtitle: 'أتمتة فيسبوك ماسنجر بالذكاء الاصطناعي لجذب العملاء ودعمهم وزيادة المبيعات على مدار الساعة.',
                description: 'تواصل مع عملائك على المنصة التي يستخدمونها أكثر من غيرها بمحادثات آلية ذكية.',
                features: [
                    { title: 'جذب العملاء', description: 'جمع وتأهيل العملاء المحتملين تلقائياً مباشرة داخل ماسنجر.', icon: '🎣' },
                    { title: 'ربط إعلانات فيسبوك', description: 'اربط إعلانات "النقر للمراسلة" مباشرة بقمع الشات بوت الخاص بك.', icon: '📢' },
                    { title: 'عرض المنتجات', description: 'اعرض منتجاتك واسمح للعملاء بالتصفح داخل المحادثة.', icon: '🛍️' },
                    { title: 'أتمتة الدعم', description: 'تعامل مع استفسارات الدعم الشائعة فوراً دون تدخل بشري.', icon: '🤖' }
                ],
                benefits: {
                    title: 'عظم العائد من فيسبوك',
                    items: ['تكلفة أقل لكل عميل', 'وقت استجابة فوري', 'معدلات تحويل أعلى', 'تكامل سلس مع الإعلانات']
                },
                ctaValues: [
                    { value: '80%', label: 'حل المشاكل' },
                    { value: '24/7', label: 'دعم' },
                    { value: '2x', label: 'تحويل' }
                ]
            }
        },
        nextjs: {
            en: {
                title: 'Next.js Development',
                subtitle: 'Professional Next.js development for fast, SEO-optimized websites and apps. Built with modern React architecture.',
                description: 'We build high-performance web applications using the latest Next.js 15 features, ensuring speed, scalability, and SEO success.',
                features: [
                    { title: 'Server-Side Rendering (SSR)', description: 'Blazing fast initial loads and superior SEO with dynamic rendering.', icon: '⚡' },
                    { title: 'SEO Optimized Architecture', description: 'Built from the ground up to rank high on Google with proper meta tags and structure.', icon: '🔍' },
                    { title: 'Modern UI/UX', description: 'Beautiful, responsive interfaces built with Tailwind CSS and Framer Motion.', icon: '🎨' },
                    { title: 'Scalable Backend', description: 'Integrated API routes and database connections for robust functionality.', icon: '⚙️' }
                ],
                benefits: {
                    title: 'Why Next.js for your business?',
                    items: ['Better Google Rankings', 'Faster Customer Experience', 'Future-proof Technology', 'Easy to Scale']
                },
                ctaValues: [
                    { value: '100%', label: 'Performance' },
                    { value: 'SEO', label: 'Optimized' },
                    { value: '15.0', label: 'Version' }
                ]
            },
            ar: {
                title: 'تطوير مواقع Next.js',
                subtitle: 'تطوير احترافي باستخدام Next.js لمواقع وتطبيقات سريعة ومحسنة لمحركات البحث.',
                description: 'نقوم ببناء تطبيقات ويب عالية الأداء باستخدام أحدث ميزات Next.js 15 لضمان السرعة والقابلية للتوسع.',
                features: [
                    { title: 'العرض من جانب الخادم (SSR)', description: 'تحميل أولي فائق السرعة وأداء SEO ممتاز مع العرض الديناميكي.', icon: '⚡' },
                    { title: 'هيكلية محسنة للـ SEO', description: 'مبنية من الأساس لتتصدر نتائج جوجل مع هيكلية وبيانات وصفية صحيحة.', icon: '🔍' },
                    { title: 'واجهة مستخدم عصرية', description: 'واجهات جميلة وسريعة الاستجابة مبنية بـ Tailwind CSS و Framer Motion.', icon: '🎨' },
                    { title: 'خلفية برمجية قابلة للتوسع', description: 'مسارات API متكاملة واتصالات قاعدة بيانات لوظائف قوية.', icon: '⚙️' }
                ],
                benefits: {
                    title: 'لماذا Next.js لعملك؟',
                    items: ['تصنيفات جوجل أفضل', 'تجربة مستخدم أسرع', 'تقنية مستقبلية', 'سهولة التوسع']
                },
                ctaValues: [
                    { value: '100%', label: 'أداء' },
                    { value: 'SEO', label: 'محسن' },
                    { value: '15.0', label: 'إصدار' }
                ]
            }
        },
        seo: {
            en: {
                title: 'Advanced SEO Services',
                subtitle: 'Technical excellence, content quality, and authority building aligned to your revenue goals.',
                description: 'Drive organic traffic and dominate search rankings with our data-driven SEO strategies and technical audits.',
                features: [
                    { title: 'Technical Audit', description: 'Deep dive into your site\'s structure, speed, and indexing issues.', icon: '🧭' },
                    { title: 'Keyword Strategy', description: 'Target high-intent keywords that drive actual sales, not just clicks.', icon: '🎯' },
                    { title: 'On-Page Optimization', description: 'Perfecting content, meta tags, and internal linking for maximum relevance.', icon: '📝' },
                    { title: 'Authority Building', description: 'Ethical link acquisition and digital PR to boost your domain authority.', icon: '🚀' }
                ],
                benefits: {
                    title: 'Our SEO Promise',
                    items: ['Transparent Reporting', 'White-hat Techniques', 'Long-term Growth', 'Revenue Focused']
                },
                ctaValues: [
                    { value: 'Top 1', label: 'Rankings' },
                    { value: '300%', label: 'Growth' },
                    { value: '90', label: 'Days Plan' }
                ]
            },
            ar: {
                title: 'خدمات SEO المتقدمة',
                subtitle: 'التميز التقني، جودة المحتوى، وبناء السلطة بما يتماشى مع أهداف إيراداتك.',
                description: 'اجذب الزيارات العضوية وسيطر على نتائج البحث مع استراتيجياتنا المبنية على البيانات.',
                features: [
                    { title: 'التدقيق التقني', description: 'فحص عميق لهيكلية موقعك، سرعته، ومشاكل الأرشفة.', icon: '🧭' },
                    { title: 'استراتيجية الكلمات المفتاحية', description: 'استهداف الكلمات ذات النية الشرائية العالية التي تحقق مبيعات فعلية.', icon: '🎯' },
                    { title: 'تحسين داخل الصفحة', description: 'تحسين المحتوى، العلامات الوصفية، والربط الداخلي لأقصى صلة.', icon: '📝' },
                    { title: 'بناء السلطة', description: 'بناء روابط أخلاقي وعلاقات عامة رقمية لتعزيز سلطة موقعك.', icon: '🚀' }
                ],
                benefits: {
                    title: 'وعدنا في الـ SEO',
                    items: ['تقارير شفافة', 'تقنيات موثوقة', 'نمو طويل الأجل', 'التركيز على العائد']
                },
                ctaValues: [
                    { value: 'الأول', label: 'ترتيب' },
                    { value: '300%', label: 'نمو' },
                    { value: '90', label: 'يوم خطة' }
                ]
            }
        },
        automation: {
            en: {
                title: 'AI Business Automations',
                subtitle: 'Transform your business with intelligent workflow automation and custom AI solutions.',
                description: 'Streamline operations, reduce manual work, and cut costs with our tailored AI automation systems.',
                features: [
                    { title: 'Workflow Automation', description: 'Connect your apps (CRM, Email, Sheets) to work together automatically.', icon: '⚙️' },
                    { title: 'Data Processing', description: 'Automatically extract and process data from documents, emails, and forms.', icon: '📊' },
                    { title: 'Custom AI Models', description: 'Train AI on your specific business data for unique insights and tasks.', icon: '🧠' },
                    { title: 'Customer Ops', description: 'Automate onboarding, support tickets, and client communications.', icon: '🤝' }
                ],
                benefits: {
                    title: 'Automation Impact',
                    items: ['Save 75% Manual Time', 'Reduce Errors by 95%', '24/7 Operation', 'Scalable Processes']
                },
                ctaValues: [
                    { value: '75%', label: 'Time Saved' },
                    { value: '60%', label: 'Cost Cut' },
                    { value: '95%', label: 'Accuracy' }
                ]
            },
            ar: {
                title: 'أتمتة الأعمال بالذكاء الاصطناعي',
                subtitle: 'حول عملك مع أتمتة سير العمل الذكية وحلول الذكاء الاصطناعي المخصصة.',
                description: 'بسط العمليات، قلل العمل اليدوي، وخفض التكاليف مع أنظمة الأتمتة المخصصة لدينا.',
                features: [
                    { title: 'أتمتة سير العمل', description: 'اربط تطبيقاتك (CRM، البريد، الجداول) لتعمل معاً تلقائياً.', icon: '⚙️' },
                    { title: 'معالجة البيانات', description: 'استخرج وعالج البيانات تلقائياً من المستندات والرسائل والنماذج.', icon: '📊' },
                    { title: 'نماذج ذكاء اصطناعي مخصصة', description: 'درب الذكاء الاصطناعي على بيانات عملك الخاصة لرؤى ومهام فريدة.', icon: '🧠' },
                    { title: 'عمليات العملاء', description: 'أتمتة تسجيل العملاء، تذاكر الدعم، وتواصل العملاء.', icon: '🤝' }
                ],
                benefits: {
                    title: 'تأثير الأتمتة',
                    items: ['توفير 75% من الوقت', 'تقليل الأخطاء بنسبة 95%', 'تشغيل 24/7', 'عمليات قابلة للتوسع']
                },
                ctaValues: [
                    { value: '75%', label: 'وقت موفر' },
                    { value: '60%', label: 'تكلفة أقل' },
                    { value: '95%', label: 'دقة' }
                ]
            }
        }
    } as any;

    const getServiceData = (id: string, l: string) => {
        const s = content[id] || content['whatsapp'];
        const c = s[l] || s['en'] || content['whatsapp']['en'];

        if (content[id] && !content[id][l]) {
            return content[id]['en'];
        }
        return c;
    };

    const data = getServiceData(serviceId, lang);

    return (
        <ServiceTemplate
            lang={lang}
            title={data.title}
            subtitle={data.subtitle}
            description={data.description}
            features={data.features}
            benefits={data.benefits}
            ctaValues={data.ctaValues}
        />
    );
}

export default ServiceContent;
