import type { Solution } from './types'

// Industry Keywords & Terminology Map (Bilingual)
export const industryTerminology: Record<string, {
  en: { audience: string, painPoints: string[], goals: string[], keywords: string[] },
  ar: { audience: string, painPoints: string[], goals: string[], keywords: string[] },
  theme: { color: string, gradient: string, icon: string }
}> = {
  general: {
    en: {
      audience: 'customers',
      painPoints: ['slow response times', 'missed opportunities', 'high support costs'],
      goals: ['increase sales', 'improve satisfaction', 'automate operations'],
      keywords: ['business', 'growth', 'efficiency']
    },
    ar: {
      audience: 'العملاء',
      painPoints: ['بطء الاستجابة', 'الفرص الضائعة', 'ارتفاع تكاليف الدعم'],
      goals: ['زيادة المبيعات', 'تحسين رضا العملاء', 'أتمتة العمليات'],
      keywords: ['أعمال', 'نمو', 'كفاءة']
    },
    theme: { color: 'blue', gradient: 'from-blue-600 to-indigo-600', icon: 'Briefcase' }
  },
  healthcare: {
    en: {
      audience: 'patients',
      painPoints: ['missed appointments', 'administrative overload', 'patient follow-up'],
      goals: ['improve patient care', 'reduce no-shows', 'streamline booking'],
      keywords: ['clinic', 'practice', 'medical', 'doctor', 'treatment', 'care']
    },
    ar: {
      audience: 'المرضى',
      painPoints: ['المواعيد الفائتة', 'العبء الإداري', 'متابعة المرضى'],
      goals: ['تحسين رعاية المرضى', 'تقليل التغيب', 'تسهيل الحجز'],
      keywords: ['عيادة', 'مركز طبي', 'طبيب', 'علاج', 'رعاية صحية']
    },
    theme: { color: 'cyan', gradient: 'from-cyan-500 to-blue-500', icon: 'Stethoscope' }
  },
  'real-estate': {
    en: {
      audience: 'property buyers',
      painPoints: ['unqualified leads', 'missed viewings', 'repetitive inquiries'],
      goals: ['sell more properties', 'qualify leads faster', '24/7 virtual agent'],
      keywords: ['property', 'listing', 'agent', 'broker', 'viewing', 'tenant']
    },
    ar: {
      audience: 'مشتري العقارات',
      painPoints: ['العملاء غير المؤهلين', 'تفويت المعاينات', 'الاستفسارات المكررة'],
      goals: ['بيع المزيد من العقارات', 'تأهيل العملاء بسرعة', 'وكيل افتراضي 24/7'],
      keywords: ['عقار', 'وسيط', 'سمسار', 'معاينة', 'تأجير']
    },
    theme: { color: 'amber', gradient: 'from-amber-500 to-orange-600', icon: 'Building' }
  },
  ecommerce: {
    en: {
      audience: 'shoppers',
      painPoints: ['abandoned carts', 'order status queries', 'return requests'],
      goals: ['boost conversion rate', 'automate support', 'increase average order value'],
      keywords: ['store', 'shop', 'order', 'product', 'shipping', 'checkout']
    },
    ar: {
      audience: 'المتسوقين',
      painPoints: ['السلات المتروكة', 'استفسارات الطلبات', 'طلبات الإرجاع'],
      goals: ['زيادة معدل التحويل', 'أتمتة الدعم', 'زيادة قيمة الطلب'],
      keywords: ['متجر', 'تسوق', 'طلب', 'منتج', 'شحن', 'دفع']
    },
    theme: { color: 'purple', gradient: 'from-purple-600 to-pink-500', icon: 'ShoppingBag' }
  },
  education: {
    en: {
      audience: 'students',
      painPoints: ['enrollment questions', 'course scheduling', 'student support'],
      goals: ['increase enrollment', 'streamline admission', 'support student success'],
      keywords: ['school', 'course', 'campus', 'learning', 'enrollment', 'tuition']
    },
    ar: {
      audience: 'الطلاب',
      painPoints: ['أسئلة التسجيل', 'جدولة الدورات', 'دعم الطلاب'],
      goals: ['زيادة التسجيل', 'تسهيل القبول', 'دعم نجاح الطلاب'],
      keywords: ['مدرسة', 'دورة', 'حرم جامعي', 'تعليم', 'تسجيل']
    },
    theme: { color: 'emerald', gradient: 'from-emerald-500 to-teal-600', icon: 'GraduationCap' }
  },
  automotive: {
    en: {
      audience: 'car buyers',
      painPoints: ['service booking coordination', 'lead response time', 'inventory queries'],
      goals: ['book more test drives', 'automate service appointment', 'sell more cars'],
      keywords: ['dealership', 'vehicle', 'service', 'test drive', 'showroom', 'mechanic']
    },
    ar: {
      audience: 'مشتري السيارات',
      painPoints: ['تنسيق حجز الخدمة', 'وقت الاستجابة', 'استفسارات المخزون'],
      goals: ['حجز تجارب قيادة', 'أتمتة مواعيد الصيانة', 'بيع المزيد من السيارات'],
      keywords: ['وكالة', 'سيارة', 'صيانة', 'تجربة قيادة', 'معرض']
    },
    theme: { color: 'red', gradient: 'from-red-600 to-orange-600', icon: 'Car' }
  },
  legal: {
    en: {
      audience: 'clients',
      painPoints: ['client intake inefficiencies', 'scheduling consultations', 'routine questions'],
      goals: ['qualify cases faster', 'automate intake', 'billable hours optimization'],
      keywords: ['law firm', 'case', 'attorney', 'consultation', 'legal', 'advice']
    },
    ar: {
      audience: 'الموكلين',
      painPoints: ['عدم كفاءة الاستقبال', 'جدولة الاستشارات', 'الأسئلة الروتينية'],
      goals: ['تأهيل القضايا', 'أتمتة الاستقبال', 'تحسين ساعات العمل'],
      keywords: ['مكتب محاماة', 'قضية', 'محامي', 'استشارة', 'قانون']
    },
    theme: { color: 'slate', gradient: 'from-slate-700 to-slate-900', icon: 'Scale' }
  },
  restaurants: {
    en: {
      audience: 'diners',
      painPoints: ['missed phone orders', 'table mismanagement', 'staff shortages'],
      goals: ['increase table turnover', 'automate reservations', 'boost delivery orders'],
      keywords: ['dining', 'menu', 'reservation', 'delivery', 'food', 'table']
    },
    ar: {
      audience: 'الزبائن',
      painPoints: ['طلبات الهاتف الفائتة', 'سوء إدارة الطاولات', 'نقص الموظفين'],
      goals: ['زيادة دوران الطاولات', 'أتمتة الحجوزات', 'زيادة طلبات التوصيل'],
      keywords: ['مطعم', 'قائمة', 'حجز', 'توصيل', 'طعام', 'طاولة']
    },
    theme: { color: 'orange', gradient: 'from-orange-500 to-red-500', icon: 'Utensils' }
  },
  finance: {
    en: {
      audience: 'clients',
      painPoints: ['repetitive account queries', 'document collection', 'onboarding friction'],
      goals: ['secure client data', 'accelerate automated onboarding', '24/7 advisory'],
      keywords: ['banking', 'loan', 'investment', 'account', 'financial', 'wealth']
    },
    ar: {
      audience: 'العملاء',
      painPoints: ['استفسارات الحساب المكررة', 'جمع المستندات', 'صعوبات الالتحاق'],
      goals: ['تأمين بيانات العملاء', 'تسريع الالتحاق', 'استشارات 24/7'],
      keywords: ['بنك', 'قرض', 'استثمار', 'حساب', 'مالي', 'ثروة']
    },
    theme: { color: 'green', gradient: 'from-green-600 to-emerald-600', icon: 'Banknote' }
  },
  fitness: {
    en: {
      audience: 'members',
      painPoints: ['class booking chaos', 'membership renewals', 'workout tracking'],
      goals: ['increase retention', 'fill classes', 'automate membership'],
      keywords: ['gym', 'trainer', 'workout', 'class', 'membership', 'studio']
    },
    ar: {
      audience: 'الأعضاء',
      painPoints: ['فوضى حجز الكلاسات', 'تجديد الاشتراكات', 'تتبع التمارين'],
      goals: ['زيادة الاحتفاظ بالأعضاء', 'ملء الكلاسات', 'أتمتة العضويات'],
      keywords: ['جيم', 'مدرب', 'تمرين', 'كلاس', 'عضوية']
    },
    theme: { color: 'lime', gradient: 'from-lime-500 to-green-500', icon: 'Dumbbell' }
  },
  beauty: {
    en: {
      audience: 'clients',
      painPoints: ['appointment juggling', 'last-minute cancellations', 'product upsells'],
      goals: ['fill appointment slots', 'reduce gaps', 'sell more retail'],
      keywords: ['salon', 'spa', 'treatment', 'stylist', 'booking', 'beauty']
    },
    ar: {
      audience: 'العملاء',
      painPoints: ['تضارب المواعيد', 'الإلغاءات المفاجئة', 'بيع المنتجات'],
      goals: ['ملء المواعيد', 'تقليل الفراغات', 'بيع منتجات أكثر'],
      keywords: ['صالون', 'سبا', 'علاج', 'تجميل', 'حجز']
    },
    theme: { color: 'rose', gradient: 'from-rose-400 to-pink-500', icon: 'Sparkles' }
  },
  logistics: {
    en: {
      audience: 'shippers',
      painPoints: ['shipment tracking', 'delay notifications', 'paperwork errors'],
      goals: ['real-time tracking', 'proactive updates', 'automate documentation'],
      keywords: ['logistics', 'shipping', 'delivery', 'freight', 'cargo', 'transport']
    },
    ar: {
      audience: 'الشاحنين',
      painPoints: ['تتبع الشحنات', 'تنبيهات التأخير', 'أخطاء المستندات'],
      goals: ['تتبع فوري', 'تحديثات استباقية', 'أتمتة الوثائق'],
      keywords: ['لوجستيات', 'شحن', 'توصيل', 'نقل', 'بضائع']
    },
    theme: { color: 'slate', gradient: 'from-slate-600 to-gray-700', icon: 'Truck' }
  },
  travel: {
    en: {
      audience: 'travelers',
      painPoints: ['itinerary changes', 'booking confirmations', 'travel advisories'],
      goals: ['automate itinerary updates', 'instant confirmations', '24/7 travel support'],
      keywords: ['travel', 'booking', 'flight', 'hotel', 'tourism', 'vacation']
    },
    ar: {
      audience: 'المسافرين',
      painPoints: ['تغييرات الرحلة', 'تأكيدات الحجز', 'نصائح السفر'],
      goals: ['تحديثات الرحلة الآلية', 'تأكيدات فورية', 'دعم سفر 24/7'],
      keywords: ['سفر', 'حجز', 'طيران', 'فندق', 'سياحة', 'عطلة']
    },
    theme: { color: 'blue', gradient: 'from-blue-400 to-sky-500', icon: 'Plane' }
  }
}

// Fallback logic
function getIndustryConfig(industrySlug: string) {
  // Try exact match
  if (industryTerminology[industrySlug]) return industryTerminology[industrySlug]

  // Try partial match
  const key = Object.keys(industryTerminology).find(k => industrySlug.includes(k))
  if (key) return industryTerminology[key]

  // Fallback to general
  return industryTerminology.general
}

// ============= EXTENDED BENEFITS GENERATOR =============
// Use this to double/extend benefits for any solution
const additionalBenefitsPool = {
  en: [
    'Eliminate manual data entry errors completely',
    'Scale operations without increasing headcount',
    'Get real-time analytics and performance insights',
    'Improve team productivity by 40%',
    'Reduce customer wait times to under 3 seconds',
    'Capture leads 24/7 even while you sleep',
    'Integrate seamlessly with your existing tools',
    'Customize workflows to match your exact needs',
    'Access enterprise-grade security and encryption',
    'Get dedicated support and training included',
    'Future-proof your business with AI technology',
    'Outperform competitors still using manual processes',
    'Free up staff for high-value strategic work',
    'Build stronger customer relationships automatically',
    'Track every interaction for continuous improvement'
  ],
  ar: [
    'إلغاء أخطاء إدخال البيانات اليدوية بالكامل',
    'توسيع العمليات دون زيادة عدد الموظفين',
    'الحصول على تحليلات ورؤى أداء فورية',
    'تحسين إنتاجية الفريق بنسبة 40%',
    'تقليل وقت انتظار العملاء إلى أقل من 3 ثوانٍ',
    'التقاط العملاء المحتملين 24/7 حتى أثناء نومك',
    'التكامل السلس مع أدواتك الحالية',
    'تخصيص سير العمل ليتناسب مع احتياجاتك بالضبط',
    'الوصول إلى أمان وتشفير على مستوى المؤسسات',
    'الحصول على دعم مخصص وتدريب مشمول',
    'تأمين مستقبل عملك بتقنية الذكاء الاصطناعي',
    'التفوق على المنافسين الذين لا يزالون يستخدمون العمليات اليدوية',
    'تحرير الموظفين للعمل الاستراتيجي عالي القيمة',
    'بناء علاقات أقوى مع العملاء تلقائياً',
    'تتبع كل تفاعل للتحسين المستمر'
  ]
}

// Function to extend benefits for a solution
export function getExtendedBenefits(
  existingBenefits: string[],
  industrySlug: string,
  lang: 'en' | 'ar' = 'en',
  targetCount: number = 12
): string[] {
  const pool = additionalBenefitsPool[lang]
  const config = getIndustryConfig(industrySlug)
  const industryGoals = lang === 'en' ? config.en.goals : config.ar.goals
  
  // Start with existing benefits
  const extended = [...existingBenefits]
  
  // Add industry-specific benefits based on goals
  industryGoals.forEach(goal => {
    if (extended.length < targetCount) {
      const benefit = lang === 'en' 
        ? `Achieve your goal: ${goal}` 
        : `تحقيق هدفك: ${goal}`
      if (!extended.includes(benefit)) extended.push(benefit)
    }
  })
  
  // Add from general pool until we reach target count
  let poolIndex = 0
  while (extended.length < targetCount && poolIndex < pool.length) {
    if (!extended.includes(pool[poolIndex])) {
      extended.push(pool[poolIndex])
    }
    poolIndex++
  }
  
  return extended
}


// Service Template Generators (Bilingual)
const serviceTemplates = {
  whatsapp: {
    en: {
      titlePrefix: 'Smart WhatsApp Automation for',
      descTemplate: (industry: string, audience: string) =>
        `Transform your ${industry} business with intelligent WhatsApp automation. Instantly connect with ${audience}, automate 24/7 support, and streamline operations without adding staff.`,
      featureList: [
        '24/7 Automated Responses',
        'Instant Lead Qualification',
        'Seamless CRM Integration',
        'Multi-Language Support'
      ]
    },
    ar: {
      titlePrefix: 'أتمتة واتساب الذكية لقطاع',
      descTemplate: (industry: string, audience: string) =>
        `حول أعمال ${industry} الخاصة بك مع أتمتة واتساب الذكية. تواصل فورياً مع ${audience}، وأتمتة الدعم على مدار الساعة، وقم بتبسيط العمليات دون الحاجة لموظفين إضافيين.`,
      featureList: [
        'ردود آلية 24/7',
        'تأهيل العملاء فورياً',
        'ربط مع نظام إدارة العملاء',
        'دعم متعدد اللغات'
      ]
    }
  },
  instagram: {
    en: {
      titlePrefix: 'Viral Instagram Growth & Automation for',
      descTemplate: (industry: string, audience: string) =>
        `Turn your Instagram into a revenue machine for your ${industry} business. Auto-reply to DMs, boost engagement with ${audience}, and convert followers into paying customers 24/7.`,
      featureList: [
        'Auto-DM Responses',
        'Story Mention Reactions',
        'Comment to DM Automation',
        'Lead Capture Forms'
      ]
    },
    ar: {
      titlePrefix: 'نمو وأتمتة انستجرام لـ',
      descTemplate: (industry: string, audience: string) =>
        `حول حساب انستجرام الخاص بأعمال ${industry} إلى آلة مبيعات. رد تلقائي على الرسائل، زيادة التفاعل مع ${audience}، وتحويل المتابعين إلى عملاء دائمين على مدار الساعة.`,
      featureList: [
        'رد تلقائي على الرسائل',
        'تفاعل مع القصص (Stories)',
        'تحويل التعليقات لرسائل',
        'نماذج جمع بيانات العملاء'
      ]
    }
  },
  // Add other services with generic fallback logic
  default: {
    en: {
      titlePrefix: 'Premium Digital Solutions for',
      descTemplate: (industry: string, audience: string) =>
        `Elevate your ${industry} business with world-class digital solutions designed to engage ${audience} and drive massive growth.`,
      featureList: [
        'Custom Strategic Planning',
        'Digital Transformation',
        'Process Automation',
        'Analytics & Reporting'
      ]
    },
    ar: {
      titlePrefix: 'حلول رقمية متطورة لـ',
      descTemplate: (industry: string, audience: string) =>
        `ارتقِ بأعمال ${industry} الخاصة بك مع حلول رقمية عالمية المستوى مصممة لجذب ${audience} وتحقيق نمو هائل.`,
      featureList: [
        'تخطيط استراتيجي مخصص',
        'تحول رقمي شامل',
        'أتمتة العمليات',
        'تحليلات وتقارير'
      ]
    }
  }
}

export function generateDynamicContent(
  industryNameEn: string,
  industrySlug: string,
  serviceType: 'whatsapp' | 'instagram' | 'messenger' | 'nextjs' | 'seo' | 'automation'
): Partial<Solution> {

  const config = getIndustryConfig(industrySlug)

  // Select Template (Default to 'default' if service not manually mapped details yet)
  const templateKey = (serviceType in serviceTemplates) ? serviceType : 'default'
  // @ts-ignore
  const template = serviceTemplates[templateKey] || serviceTemplates.default

  // --- ENGLISH GENERATION ---
  const enConfig = config.en
  const enTemplate = template.en

  const title = `${enTemplate.titlePrefix} ${industryNameEn}`
  const description = enTemplate.descTemplate(industryNameEn, enConfig.audience)

  const enFeatures = [
    ...enTemplate.featureList,
    ...enConfig.goals.map(g => `Automate: ${g}`)
  ]

  const enBenefits = enConfig.goals.map((g, i) => `Stop dealing with ${enConfig.painPoints[i] || 'issues'} and start to ${g}`)

  const enFaqs = [
    {
      question: `How can automation help my ${industryNameEn} business?`,
      answer: `Automation enables ${industryNameEn} businesses to handle ${enConfig.painPoints[0]} instantly.`
    },
    {
      question: `Is this suitable for small ${industryNameEn} companies?`,
      answer: `Absolutely. Our solutions scale from small local ${industryNameEn} operations to large enterprises.`
    }
  ]

  // --- ARABIC GENERATION ---
  const arConfig = config.ar
  const arTemplate = template.ar

  // Simple Arabic Industry Name Mapping (In a real app, pass this in or maintain a map)
  // For now, we try to use the Arabic keyword from config or fallback
  const industryNameAr = arConfig.keywords[0] // e.g. "عيادة" or "عقار"

  const arabicTitle = `${arTemplate.titlePrefix} ${industryNameAr}`
  const arabicDescription = arTemplate.descTemplate(industryNameAr, arConfig.audience)

  // NOTE: In the Solution interface, we might not have `arabicFeatures` etc yet. 
  // We should add them to `solutionsData.ts` interface if not present, OR
  // reusing the existing structure.

  // Check existing interface in solutionsData: 
  // It has `arabicTitle`, `arabicDescription`.
  // It lacks `arabicFeatures`, `arabicBenefits`, `arabicFaqs`.
  // CHECKPOINT: I will update the Solution interface in the next step to include these. 
  // For now, I return them in the object, and will update the interface to match.

  const arabicFeatures = [
    ...arTemplate.featureList,
    ...arConfig.goals.map(g => `أتمتة: ${g}`)
  ]

  const arabicBenefits = arConfig.goals.map((g, i) => `تخلص من ${arConfig.painPoints[i] || 'المشاكل'} وابدأ في ${g}`)

  const arabicFaqs = [
    {
      question: `كيف يمكن للأتمتة مساعدة أعمال ${industryNameAr}؟`,
      answer: `الأتمتة تمكن أعمال ${industryNameAr} من التعامل مع ${arConfig.painPoints[0]} فورياً.`
    }
  ]

  return {
    title,
    arabicTitle,
    description,
    arabicDescription,
    features: enFeatures,
    // @ts-ignore - Will add to interface
    arabicFeatures: arabicFeatures,
    benefits: enBenefits,
    // @ts-ignore
    arabicBenefits: arabicBenefits,
    useCases: enConfig.keywords.map(k => `${industryNameEn} ${k} Automation`),
    faqs: enFaqs,
    // @ts-ignore
    arabicFaqs: arabicFaqs,

    keywords: [...enConfig.keywords, industryNameEn, serviceType],
    roi: {
      percentage: 300,
      timeframe: '3 months',
      metrics: enConfig.goals
    },
    pricing: {
      starter: 399,
      professional: 799,
      enterprise: 'Custom'
    },
    deliveryTime: '1-2 Weeks',
    metaDescription: description.substring(0, 155) + '...',
    theme: config.theme
  }
}
