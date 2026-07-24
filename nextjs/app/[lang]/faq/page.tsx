import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/schemas";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

interface FaqContent {
  title: string;
  description: string;
  h1a: string;
  h1b: string;
  intro: string;
  groups: { category: string; faqs: { q: string; a: string }[] }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

const content: Record<string, FaqContent> = {
  ar: {
    title: "الأسئلة الشائعة — روبوتات الدردشة ووكلاء الصوت وGEO ووكلاء الذكاء الاصطناعي | HMZ Technology",
    description: "إجابات مباشرة عن خدمات HMZ Technology في الذكاء الاصطناعي: روبوتات دردشة واتساب الذكية، وكلاء الصوت الذكيون، تحسين محركات التوليد (GEO)، وكلاء الذكاء الاصطناعي المخصصون، الأسعار، سرعة التنفيذ، واستراتيجية الذكاء الاصطناعي 2026-2030.",
    h1a: "الأسئلة",
    h1b: "الشائعة",
    intro: "إجابات مباشرة وواضحة عن روبوتات الدردشة ووكلاء الصوت وGEO، وكيف تبني HMZ Technology أنظمة ذكاء اصطناعي جاهزة للإنتاج للشركات في الشرق الأوسط وشمال أفريقيا وحول العالم.",
    groups: [
      {
        category: "التعامل مع HMZ",
        faqs: [
          {
            q: "ماذا تقدم HMZ Technology؟",
            a: "HMZ Technology وكالة ذكاء اصطناعي تبني أنظمة ذكاء اصطناعي جاهزة للإنتاج للشركات: روبوتات دردشة ذكية على واتساب وإنستغرام وماسنجر، ووكلاء صوت ذكيين، ومساعدي معرفة بتقنية RAG، ووكلاء مبيعات ذكيين، ووكلاء ذكاء اصطناعي مخصصين، وتكاملات MCP، وأتمتة العمليات التجارية، ومواقع إلكترونية، وتحسين محركات البحث (SEO)، وتحسين محركات التوليد (GEO). مقرنا بيروت، لبنان، ونخدم عملاء في منطقة الشرق الأوسط وشمال أفريقيا وحول العالم.",
          },
          {
            q: "أين يقع مقر HMZ Technology وما الأسواق التي تخدمها؟",
            a: "يقع المقر الرئيسي لـ HMZ Technology في بيروت، لبنان. نخدم عملاء في لبنان والسعودية والإمارات ودول مجلس التعاون الخليجي وأوروبا وأمريكا الشمالية. تُسلَّم جميع الأنظمة عن بُعد مع توثيق وتدريب كاملين، ويعمل موقعنا ودعمنا بسبع لغات منها العربية والإنجليزية.",
          },
          {
            q: "ما مدى سرعة نشر روبوت دردشة ذكي من HMZ؟",
            a: "ينطلق روبوت دردشة واتساب الذكي القياسي خلال نحو 8 أيام: في اليومين 1-2 نراجع وضعك الحالي، وفي الأيام 3-5 ندرّب الذكاء الاصطناعي على بيانات شركتك، وفي اليومين 6-7 ندمجه مع أنظمتك، وفي اليوم 8 يكون الإطلاق دون أي توقف. الأنظمة الوكيلة الأكبر تستغرق عادة 4-8 أسابيع بحسب التكاملات.",
          },
          {
            q: "كم تبلغ تكلفة خدمات HMZ للذكاء الاصطناعي؟",
            a: "تبدأ الأتمتة وروبوتات الدردشة الأساسية بتسعير حسب المشروع يتناسب مع نطاق عملك، بينما ينتقل معظم العملاء إلى عقود شهرية تشمل المراقبة وضبط الأوامر وبناء أتمتة جديدة كل شهر. تبدأ كل شراكة باستشارة مجانية تحصل فيها على أرقام دقيقة لحالتك — تواصل عبر sales@hmz.technology أو واتساب +961 70 106 083.",
          },
        ],
      },
      {
        category: "روبوتات الدردشة ووكلاء الصوت الذكيون",
        faqs: [
          {
            q: "ما روبوت دردشة واتساب الذكي ولماذا تحتاجه شركتي؟",
            a: "روبوت دردشة واتساب الذكي هو وكيل ذكاء اصطناعي داخل رقم واتساب للأعمال الخاص بك يرد على العملاء في أقل من 3 ثوانٍ، على مدار الساعة، وبصوت علامتك التجارية. تخسر الشركات ما يصل إلى 80% من التحويلات المحتملة عندما تتجاوز الردود 5 دقائق — روبوت الدردشة يسد هذه الفجوة، ويؤهل العملاء المحتملين، ويحجز المواعيد، ويحوّل المحادثة إلى فريقك البشري عند الحاجة.",
          },
          {
            q: "هل أتمتة واتساب رسمية وآمنة لرقمي؟",
            a: "نعم. تبني HMZ حلولها حصريًا على واجهة واتساب للأعمال الرسمية (WhatsApp Business API) المعتمدة من Meta، ومصممة وفق قواعد Meta لعام 2026. يبقى رقمك ملتزمًا، وحسابك آمنًا، وتقييمات جودة الرسائل في حالة ممتازة.",
          },
          {
            q: "ما وكيل الصوت الذكي؟",
            a: "وكيل الصوت الذكي هو موظف استقبال افتراضي يرد على المكالمات الهاتفية بالعربية أو الإنجليزية أو الفرنسية بطلاقة طبيعية، ويحجز المواعيد، ويجيب عن الأسئلة، ويؤهل العملاء المحتملين. نحو 38% من المكالمات الواردة إلى الشركات الصغيرة تبقى دون رد — وكيل الصوت الذكي يرد على كل مكالمة في أقل من ثانية، وبتكلفة أقل بنسبة 80-85% من موظف الاستقبال البشري.",
          },
          {
            q: "هل قد يقدم الذكاء الاصطناعي إجابات خاطئة لعملائي؟",
            a: "تستخدم أنظمة HMZ تقنية التوليد المعزز بالاسترجاع (RAG) التي تؤسس كل إجابة على مستندات شركتك المعتمدة وتقلل الهلوسات بنسبة 60-80% مقارنة بالنماذج الخام. الذكاء الاصطناعي يتحدث فقط من قاعدة معرفتك الموثقة، ويصعّد المحادثة إلى فريقك كلما لم يكن متأكدًا.",
          },
        ],
      },
      {
        category: "GEO وSEO والبحث بالذكاء الاصطناعي",
        faqs: [
          {
            q: "ما تحسين محركات التوليد (GEO)؟",
            a: "GEO هو ممارسة جعل علامتك التجارية مرئية وقابلة للاستشهاد داخل محركات الذكاء الاصطناعي مثل ChatGPT وPerplexity وGemini ونظرة Google AI العامة. تُظهر الأبحاث أن ذكر العلامة التجارية يرتبط باستشهادات الذكاء الاصطناعي بمعامل r=0.664 — أي أقوى بثلاث مرات من الروابط الخلفية (r=0.218). يجمع GEO بين تحسين الكيانات والبيانات المنظمة وملف llms.txt وإدارة زواحف الذكاء الاصطناعي والمحتوى الذي يبدأ بالإجابة.",
          },
          {
            q: "كيف يختلف GEO عن SEO التقليدي؟",
            a: "SEO يرتّب الصفحات في روابط Google الزرقاء؛ أما GEO فيجعل علامتك التجارية تُذكر داخل الإجابات المولدة بالذكاء الاصطناعي. نحو 80-90% من استشهادات الذكاء الاصطناعي تأتي من صفحات خارج أول 10 نتائج في Google، لذا تكافئ محركات الذكاء الاصطناعي الكيانات الواضحة والإجابات المباشرة والإحصاءات والذكر من طرف ثالث بدل إشارات الترتيب الكلاسيكية وحدها. تبني HMZ للاثنين معًا في آن واحد.",
          },
          {
            q: "هل تستطيع HMZ جعل ChatGPT يوصي بشركتي؟",
            a: "لا تستطيع أي وكالة ضمان إجابة محددة من الذكاء الاصطناعي — فالإجابات احتمالية بطبيعتها. ما تفعله HMZ هو تعظيم احتمالية استشهادك بشكل منهجي: وضوح الكيان عبر الويب، ومحتوى يبدأ بالإجابة، وبيانات منظمة، وملف llms.txt، وإتاحة زواحف الذكاء الاصطناعي، وحضور في الأدلة والمراجعات، ومراقبة شهرية للاستشهادات عبر ChatGPT وPerplexity وGemini وClaude.",
          },
        ],
      },
      {
        category: "وكلاء الذكاء الاصطناعي والمستقبل",
        faqs: [
          {
            q: "ما الفرق بين روبوت الدردشة ووكيل الذكاء الاصطناعي؟",
            a: "روبوت الدردشة يجيب عن الأسئلة؛ أما وكيل الذكاء الاصطناعي فيخطط ويقرر وينفذ أعمالًا متعددة الخطوات — يقرأ نظام CRM لديك، ويعدّ عروض الأسعار، ويحدّث السجلات، ويطلق سير العمل. تتوقع Gartner أن 40% من تطبيقات المؤسسات ستضمّن وكلاء ذكاء اصطناعي متخصصين بحلول نهاية 2026. تبني HMZ وكلاء محكومين وقابلين للتدقيق مصممين للإنتاج الفعلي، لا للعروض التجريبية.",
          },
          {
            q: "ما بروتوكول سياق النموذج (MCP) ولماذا يهم؟",
            a: "MCP هو المعيار الصناعي الجديد — المدعوم من OpenAI وGoogle وMicrosoft وAWS — لربط مساعدي الذكاء الاصطناعي بأمان بأنظمة الأعمال مثل CRM وERP وقواعد البيانات. يتيح لأدوات الذكاء الاصطناعي قراءة بيانات أعمالك الحقيقية والتصرف بناءً عليها عبر بروتوكول واحد محكوم. HMZ من السبّاقين إلى بناء تكاملات MCP في منطقة الشرق الأوسط وشمال أفريقيا.",
          },
          {
            q: "هل سيحل الذكاء الاصطناعي محل موظفيّ؟",
            a: "تصمم HMZ الذكاء الاصطناعي كمضاعف للقوى العاملة لا كبديل عنها: الذكاء الاصطناعي يعدّ المسودات، والبشر يعتمدونها. يتولى الوكلاء الجزء المتكرر (70-80%) — الردود الأولى وإدخال البيانات والمتابعات والجدولة — ليركز فريقك على العلاقات والحكم وإتمام الصفقات. كل نشر من HMZ يتضمن تحويلًا إلى العنصر البشري ضمن التصميم.",
          },
          {
            q: "كيف تستعد شركتي للذكاء الاصطناعي من الآن حتى 2030؟",
            a: "ابدأ بثلاث ركائز: بيانات أعمال نظيفة ومنظمة، وعمليات موثقة، ونظام ذكاء اصطناعي واحد في الإنتاج يثبت العائد على الاستثمار (عادة روبوت دردشة أو وكيل صوت). ثم توسّع نحو وكلاء مترابطين وقوة عاملة ذكية مُدارة. استشارات الجاهزية للـ AGI من HMZ ترسم خارطة طريق 2026-2035 خصيصًا لشركتك.",
          },
        ],
      },
    ],
    ctaTitle: "ما زالت لديك أسئلة؟",
    ctaText: "احصل على استشارة مجانية — إجابات حقيقية عن شركتك تحديدًا خلال أقل من 24 ساعة.",
    ctaButton: "احصل على استشارة مجانية",
  },
  de: {
    title: "FAQ — KI-Chatbots, Sprachagenten, GEO & KI-Agenten | HMZ Technology",
    description: "Direkte Antworten zu den KI-Dienstleistungen von HMZ Technology: WhatsApp-KI-Chatbots, KI-Sprachagenten, Generative Engine Optimization (GEO), individuelle KI-Agenten, Preise, Bereitstellungsgeschwindigkeit und KI-Strategie für 2026-2030.",
    h1a: "Häufig gestellte",
    h1b: "Fragen",
    intro: "Direkte Antworten ohne Umschweife zu KI-Chatbots, Sprachagenten, GEO und dazu, wie HMZ Technology produktionsreife KI-Systeme für Unternehmen in der MENA-Region und weltweit entwickelt.",
    groups: [
      {
        category: "Zusammenarbeit mit HMZ",
        faqs: [
          {
            q: "Was macht HMZ Technology?",
            a: "HMZ Technology ist eine KI-Agentur, die produktionsreife KI-Systeme für Unternehmen entwickelt: KI-Chatbots für WhatsApp, Instagram und Messenger, KI-Sprachagenten, RAG-Wissensassistenten, KI-Vertriebsagenten, individuelle KI-Agenten, MCP-Integrationen, Automatisierung von Geschäftsprozessen, Websites, SEO und Generative Engine Optimization (GEO). Wir haben unseren Sitz in Beirut, Libanon, und betreuen Kunden in der gesamten MENA-Region und weltweit.",
          },
          {
            q: "Wo befindet sich HMZ Technology und welche Märkte betreuen Sie?",
            a: "Der Hauptsitz von HMZ Technology ist Beirut, Libanon. Wir betreuen Kunden im Libanon, in Saudi-Arabien, den Vereinigten Arabischen Emiraten, der gesamten Golfregion, Europa und Nordamerika. Alle Systeme werden remote mit vollständiger Dokumentation und Schulung geliefert; unsere Website und unser Support arbeiten in 7 Sprachen, darunter Arabisch und Englisch.",
          },
          {
            q: "Wie schnell kann HMZ einen KI-Chatbot bereitstellen?",
            a: "Ein Standard-WhatsApp-KI-Chatbot geht in etwa 8 Tagen live: An den Tagen 1-2 analysieren wir Ihre aktuelle Konfiguration, an den Tagen 3-5 trainieren wir die KI mit Ihren Unternehmensdaten, an den Tagen 6-7 integrieren wir sie in Ihre Systeme, und an Tag 8 erfolgt der Go-Live ohne Ausfallzeit. Größere agentische Systeme dauern je nach Integrationen in der Regel 4-8 Wochen.",
          },
          {
            q: "Was kosten die KI-Dienstleistungen von HMZ?",
            a: "Einstiegsautomatisierungen und Chatbots beginnen mit projektbasierter Preisgestaltung, die auf Ihren Umfang zugeschnitten ist; die meisten Kunden wechseln anschließend zu monatlichen Retainern, die Überwachung, Prompt-Optimierung und jeden Monat neue Automatisierungen abdecken. Jedes Engagement beginnt mit einer kostenlosen Beratung, in der Sie genaue Zahlen für Ihren Fall erhalten — kontaktieren Sie sales@hmz.technology oder WhatsApp +961 70 106 083.",
          },
        ],
      },
      {
        category: "KI-Chatbots & Sprachagenten",
        faqs: [
          {
            q: "Was ist ein WhatsApp-KI-Chatbot und warum braucht mein Unternehmen einen?",
            a: "Ein WhatsApp-KI-Chatbot ist ein KI-Agent in Ihrer WhatsApp-Business-Nummer, der Kunden in unter 3 Sekunden rund um die Uhr in der Stimme Ihrer Marke beantwortet. Unternehmen verlieren bis zu 80 % der potenziellen Conversions, wenn Antworten länger als 5 Minuten dauern — der Chatbot schließt diese Lücke, qualifiziert Leads, bucht Termine und übergibt bei Bedarf an Menschen.",
          },
          {
            q: "Ist die WhatsApp-Automatisierung offiziell und sicher für meine Nummer?",
            a: "Ja. HMZ baut ausschließlich auf der offiziellen WhatsApp Business API (Meta-verifiziert) auf, die speziell nach den Meta-Regeln von 2026 entwickelt wurde. Ihre Nummer bleibt konform, Ihr Konto bleibt sicher und die Bewertungen Ihrer Nachrichtenqualität bleiben gesund.",
          },
          {
            q: "Was ist ein KI-Sprachagent?",
            a: "Ein KI-Sprachagent ist eine virtuelle Empfangskraft, die Telefonanrufe in natürlichem Arabisch, Englisch oder Französisch entgegennimmt, Termine bucht, Fragen beantwortet und Leads qualifiziert. 38 % der eingehenden Anrufe bei Kleinunternehmen bleiben unbeantwortet — ein KI-Sprachagent nimmt jeden Anruf in unter einer Sekunde entgegen, bei 80-85 % geringeren Kosten als eine menschliche Empfangskraft.",
          },
          {
            q: "Wird die KI meinen Kunden falsche Antworten geben?",
            a: "HMZ-Systeme nutzen Retrieval-Augmented Generation (RAG), wodurch jede Antwort auf Ihren genehmigten Unternehmensdokumenten basiert und Halluzinationen um 60-80 % gegenüber reinen KI-Modellen reduziert werden. Die KI spricht ausschließlich aus Ihrer verifizierten Wissensdatenbank und leitet an Ihr Team weiter, wann immer sie unsicher ist.",
          },
        ],
      },
      {
        category: "GEO, SEO & KI-Suche",
        faqs: [
          {
            q: "Was ist Generative Engine Optimization (GEO)?",
            a: "GEO ist die Praxis, Ihre Marke in KI-Engines wie ChatGPT, Perplexity, Gemini und Google AI Overviews sichtbar und zitierfähig zu machen. Studien zeigen, dass Markenerwähnungen mit KI-Zitaten bei r=0,664 korrelieren — dreimal stärker als Backlinks (r=0,218). GEO kombiniert Entity-Optimierung, strukturierte Daten, llms.txt, KI-Crawler-Management und Content, der die Antwort an den Anfang stellt.",
          },
          {
            q: "Wie unterscheidet sich GEO von traditionellem SEO?",
            a: "SEO rankt Seiten in den blauen Links von Google; GEO sorgt dafür, dass Ihre Marke in KI-generierten Antworten genannt wird. Etwa 80-90 % der KI-Zitate stammen von Seiten außerhalb der Google-Top-10 — KI-Engines belohnen daher klare Entitäten, direkte Antworten, Statistiken und Erwähnungen durch Dritte statt klassischer Ranking-Signale allein. HMZ baut für beides gleichzeitig.",
          },
          {
            q: "Kann HMZ dafür sorgen, dass ChatGPT mein Unternehmen empfiehlt?",
            a: "Keine Agentur kann eine bestimmte KI-Antwort garantieren — KI-Antworten sind probabilistisch. Was HMZ tut, ist die systematische Maximierung Ihrer Zitationswahrscheinlichkeit: Entity-Klarheit im gesamten Web, Content mit Antworten an erster Stelle, strukturierte Daten, llms.txt, Zugang für KI-Crawler, Präsenz in Verzeichnissen und Bewertungsportalen sowie monatliches Zitations-Monitoring über ChatGPT, Perplexity, Gemini und Claude.",
          },
        ],
      },
      {
        category: "KI-Agenten & die Zukunft",
        faqs: [
          {
            q: "Was ist der Unterschied zwischen einem Chatbot und einem KI-Agenten?",
            a: "Ein Chatbot beantwortet Fragen; ein KI-Agent plant, entscheidet und führt mehrstufige Arbeiten aus — er liest Ihr CRM, erstellt Angebote, aktualisiert Datensätze und löst Workflows aus. Gartner prognostiziert, dass bis Ende 2026 40 % der Unternehmensanwendungen aufgabenspezifische KI-Agenten enthalten werden. HMZ baut gesteuerte, überprüfbare Agenten, die für die Produktion konzipiert sind, nicht für Demos.",
          },
          {
            q: "Was ist MCP (Model Context Protocol) und warum ist es wichtig?",
            a: "MCP ist der neue Industriestandard — unterstützt von OpenAI, Google, Microsoft und AWS — zur sicheren Verbindung von KI-Assistenten mit Geschäftssystemen wie CRMs, ERPs und Datenbanken. Es ermöglicht Ihren KI-Tools, über ein einziges gesteuertes Protokoll echte Geschäftsdaten zu lesen und darauf zu reagieren. HMZ ist ein Vorreiter beim Aufbau von MCP-Integrationen in der MENA-Region.",
          },
          {
            q: "Wird KI meine Mitarbeiter ersetzen?",
            a: "HMZ konzipiert KI als Multiplikator der Belegschaft, nicht als Ersatz: Die KI erstellt Entwürfe, Menschen genehmigen sie. Agenten übernehmen die repetitiven 70-80 % (Erstantworten, Dateneingabe, Nachfassen, Terminplanung), damit sich Ihre Mitarbeiter auf Beziehungen, Urteilsvermögen und Abschlüsse konzentrieren können. Jede HMZ-Bereitstellung beinhaltet von Grund auf eine Human-in-the-Loop-Übergabe.",
          },
          {
            q: "Wie sollte sich mein Unternehmen zwischen jetzt und 2030 auf KI vorbereiten?",
            a: "Beginnen Sie mit drei Grundlagen: sauberen, organisierten Geschäftsdaten; dokumentierten Prozessen; und einem produktiven KI-System, das den ROI belegt (in der Regel ein Chatbot oder Sprachagent). Erweitern Sie dann in Richtung vernetzter Agenten und einer verwalteten KI-Belegschaft. Die AGI-Readiness-Beratung von HMZ kartiert diese Roadmap 2026-2035 speziell für Ihr Unternehmen.",
          },
        ],
      },
    ],
    ctaTitle: "Noch Fragen?",
    ctaText: "Holen Sie sich eine kostenlose Beratung — echte Antworten zu Ihrem konkreten Unternehmen in unter 24 Stunden.",
    ctaButton: "Kostenlose Beratung erhalten",
  },
  fr: {
    title: "FAQ — Chatbots IA, Agents Vocaux, GEO & Agents IA | HMZ Technology",
    description: "Des réponses directes sur les services IA de HMZ Technology : chatbots IA WhatsApp, agents vocaux IA, optimisation pour les moteurs génératifs (GEO), agents IA sur mesure, tarifs, rapidité de déploiement et stratégie IA pour 2026-2030.",
    h1a: "Questions",
    h1b: "Fréquentes",
    intro: "Des réponses directes et sans détour sur les chatbots IA, les agents vocaux, le GEO et la manière dont HMZ Technology conçoit des systèmes d'IA en production pour les entreprises de la région MENA et du monde entier.",
    groups: [
      {
        category: "Travailler avec HMZ",
        faqs: [
          {
            q: "Que fait HMZ Technology ?",
            a: "HMZ Technology est une agence d'IA qui conçoit des systèmes d'intelligence artificielle de niveau production pour les entreprises : chatbots IA pour WhatsApp, Instagram et Messenger, agents vocaux IA, assistants de connaissances RAG, agents commerciaux IA, agents IA sur mesure, intégrations MCP, automatisation des processus métier, sites web, SEO et optimisation pour les moteurs génératifs (GEO). Nous sommes basés à Beyrouth, au Liban, et nous servons des clients dans toute la région MENA et dans le monde entier.",
          },
          {
            q: "Où se trouve HMZ Technology et quels marchés servez-vous ?",
            a: "Le siège de HMZ Technology se trouve à Beyrouth, au Liban. Nous servons des clients au Liban, en Arabie saoudite, aux Émirats arabes unis, dans l'ensemble du CCG, en Europe et en Amérique du Nord. Tous les systèmes sont livrés à distance avec une documentation et une formation complètes, et notre site web comme notre support fonctionnent en 7 langues, dont l'arabe et l'anglais.",
          },
          {
            q: "En combien de temps HMZ peut-elle déployer un chatbot IA ?",
            a: "Un chatbot IA WhatsApp standard est en ligne en environ 8 jours : les jours 1-2, nous auditons votre configuration actuelle ; les jours 3-5, nous entraînons l'IA sur vos données d'entreprise ; les jours 6-7, nous l'intégrons à vos systèmes ; et le jour 8, la mise en service se fait sans aucune interruption. Les systèmes agentiques plus importants prennent généralement 4 à 8 semaines selon les intégrations.",
          },
          {
            q: "Combien coûtent les services IA de HMZ ?",
            a: "Les automatisations et chatbots d'entrée de gamme démarrent avec une tarification par projet adaptée à votre périmètre, tandis que la plupart des clients passent ensuite à des forfaits mensuels couvrant la supervision, l'optimisation des prompts et la création de nouvelles automatisations chaque mois. Chaque collaboration commence par une consultation gratuite au cours de laquelle vous obtenez des chiffres précis pour votre cas — contactez sales@hmz.technology ou WhatsApp +961 70 106 083.",
          },
        ],
      },
      {
        category: "Chatbots IA & Agents Vocaux",
        faqs: [
          {
            q: "Qu'est-ce qu'un chatbot IA WhatsApp et pourquoi mon entreprise en a-t-elle besoin ?",
            a: "Un chatbot IA WhatsApp est un agent d'intelligence artificielle intégré à votre numéro WhatsApp Business qui répond aux clients en moins de 3 secondes, 24h/24 et 7j/7, avec la voix de votre marque. Les entreprises perdent jusqu'à 80 % de leurs conversions potentielles lorsque les réponses prennent plus de 5 minutes — le chatbot comble ce fossé, qualifie les prospects, prend les rendez-vous et transmet aux humains lorsque nécessaire.",
          },
          {
            q: "L'automatisation WhatsApp est-elle officielle et sûre pour mon numéro ?",
            a: "Oui. HMZ développe exclusivement sur l'API officielle WhatsApp Business (vérifiée par Meta), conçue spécifiquement selon les règles Meta 2026. Votre numéro reste conforme, votre compte reste protégé et vos indices de qualité de messagerie restent sains.",
          },
          {
            q: "Qu'est-ce qu'un agent vocal IA ?",
            a: "Un agent vocal IA est un réceptionniste virtuel qui répond aux appels téléphoniques en arabe, anglais ou français naturels, prend des rendez-vous, répond aux questions et qualifie les prospects. 38 % des appels entrants vers les petites entreprises restent sans réponse — un agent vocal IA répond à chaque appel en moins d'une seconde, pour un coût inférieur de 80 à 85 % à celui d'un réceptionniste humain.",
          },
          {
            q: "L'IA donnera-t-elle de mauvaises réponses à mes clients ?",
            a: "Les systèmes HMZ utilisent la génération augmentée par récupération (RAG), qui ancre chaque réponse dans vos documents d'entreprise approuvés et réduit les hallucinations de 60 à 80 % par rapport aux modèles d'IA bruts. L'IA ne s'exprime qu'à partir de votre base de connaissances vérifiée et escalade vers votre équipe dès qu'elle n'est pas sûre d'elle.",
          },
        ],
      },
      {
        category: "GEO, SEO & Recherche IA",
        faqs: [
          {
            q: "Qu'est-ce que l'optimisation pour les moteurs génératifs (GEO) ?",
            a: "Le GEO est la pratique consistant à rendre votre marque visible et citable au sein des moteurs d'IA comme ChatGPT, Perplexity, Gemini et les aperçus IA de Google. Les recherches montrent que les mentions de marque sont corrélées aux citations d'IA avec r=0,664 — soit trois fois plus que les backlinks (r=0,218). Le GEO combine l'optimisation des entités, les données structurées, le fichier llms.txt, la gestion des crawlers IA et un contenu qui donne la réponse d'abord.",
          },
          {
            q: "En quoi le GEO diffère-t-il du SEO traditionnel ?",
            a: "Le SEO classe les pages dans les liens bleus de Google ; le GEO fait citer votre marque dans les réponses générées par l'IA. Environ 80 à 90 % des citations d'IA proviennent de pages hors du top 10 de Google — les moteurs d'IA récompensent donc les entités claires, les réponses directes, les statistiques et les mentions tierces plutôt que les seuls signaux de classement classiques. HMZ construit pour les deux simultanément.",
          },
          {
            q: "HMZ peut-elle faire en sorte que ChatGPT recommande mon entreprise ?",
            a: "Aucune agence ne peut garantir une réponse d'IA spécifique — les réponses d'IA sont probabilistes. Ce que fait HMZ, c'est maximiser systématiquement votre probabilité de citation : clarté des entités sur le web, contenu qui donne la réponse d'abord, données structurées, llms.txt, accès aux crawlers IA, présence dans les annuaires et avis, et suivi mensuel des citations sur ChatGPT, Perplexity, Gemini et Claude.",
          },
        ],
      },
      {
        category: "Agents IA & Avenir",
        faqs: [
          {
            q: "Quelle est la différence entre un chatbot et un agent IA ?",
            a: "Un chatbot répond aux questions ; un agent IA planifie, décide et exécute des tâches en plusieurs étapes — il lit votre CRM, rédige des devis, met à jour les dossiers et déclenche des workflows. Gartner prévoit que 40 % des applications d'entreprise intégreront des agents IA spécialisés d'ici fin 2026. HMZ construit des agents gouvernés et auditables, conçus pour la production, pas pour les démonstrations.",
          },
          {
            q: "Qu'est-ce que le MCP (Model Context Protocol) et pourquoi est-ce important ?",
            a: "Le MCP est la nouvelle norme industrielle — soutenue par OpenAI, Google, Microsoft et AWS — pour connecter en toute sécurité les assistants IA aux systèmes d'entreprise comme les CRM, les ERP et les bases de données. Il permet à vos outils d'IA de lire vos données métier réelles et d'agir dessus via un protocole unique et gouverné. HMZ est un précurseur dans la création d'intégrations MCP dans la région MENA.",
          },
          {
            q: "L'IA va-t-elle remplacer mes employés ?",
            a: "HMZ conçoit l'IA comme un multiplicateur de la force de travail, non comme un remplacement : l'IA rédige, les humains approuvent. Les agents prennent en charge les 70 à 80 % répétitifs (premières réponses, saisie de données, relances, planification) afin que vos équipes se concentrent sur les relations, le jugement et la conclusion des ventes. Chaque déploiement HMZ inclut par conception un passage de relais humain (human-in-the-loop).",
          },
          {
            q: "Comment mon entreprise doit-elle se préparer à l'IA d'ici 2030 ?",
            a: "Commencez par trois fondations : des données d'entreprise propres et organisées, des processus documentés, et un système d'IA en production qui prouve son ROI (généralement un chatbot ou un agent vocal). Étendez ensuite vers des agents connectés et une main-d'œuvre IA managée. Le conseil AGI-readiness de HMZ trace cette feuille de route 2026-2035 spécifiquement pour votre entreprise.",
          },
        ],
      },
    ],
    ctaTitle: "Encore des questions ?",
    ctaText: "Obtenez une consultation gratuite — de vraies réponses sur votre entreprise en moins de 24 heures.",
    ctaButton: "Obtenir une consultation gratuite",
  },
  it: {
    title: "FAQ — Chatbot IA, Agenti Vocali, GEO e Agenti IA | HMZ Technology",
    description: "Risposte dirette sui servizi IA di HMZ Technology: chatbot IA per WhatsApp, agenti vocali IA, Generative Engine Optimization (GEO), agenti IA personalizzati, prezzi, velocità di implementazione e strategia IA per il 2026-2030.",
    h1a: "Domande",
    h1b: "Frequenti",
    intro: "Risposte dirette e senza fronzoli su chatbot IA, agenti vocali, GEO e su come HMZ Technology costruisce sistemi di IA in produzione per aziende in Medio Oriente, Nord Africa e in tutto il mondo.",
    groups: [
      {
        category: "Lavorare con HMZ",
        faqs: [
          {
            q: "Cosa fa HMZ Technology?",
            a: "HMZ Technology è un'agenzia di intelligenza artificiale che costruisce sistemi IA pronti per la produzione per le aziende: chatbot IA per WhatsApp, Instagram e Messenger, agenti vocali IA, assistenti di conoscenza RAG, agenti di vendita IA, agenti IA personalizzati, integrazioni MCP, automazione dei processi aziendali, siti web, SEO e Generative Engine Optimization (GEO). Abbiamo sede a Beirut, in Libano, e serviamo clienti in tutta la regione MENA e nel mondo.",
          },
          {
            q: "Dove si trova HMZ Technology e quali mercati servite?",
            a: "La sede principale di HMZ Technology è a Beirut, in Libano. Serviamo clienti in Libano, Arabia Saudita, Emirati Arabi Uniti, nell'intero GCC, in Europa e in Nord America. Tutti i sistemi vengono consegnati da remoto con documentazione e formazione complete, e il nostro sito e supporto operano in 7 lingue, tra cui arabo e inglese.",
          },
          {
            q: "In quanto tempo HMZ può implementare un chatbot IA?",
            a: "Un chatbot IA WhatsApp standard va online in circa 8 giorni: nei giorni 1-2 analizziamo la tua configurazione attuale, nei giorni 3-5 addestriamo l'IA sui dati della tua azienda, nei giorni 6-7 la integriamo con i tuoi sistemi, e il giorno 8 è il go-live senza alcun downtime. I sistemi agentici più grandi richiedono in genere 4-8 settimane a seconda delle integrazioni.",
          },
          {
            q: "Quanto costano i servizi IA di HMZ?",
            a: "Le automazioni e i chatbot base partono da prezzi per progetto dimensionati sul tuo ambito, mentre la maggior parte dei clienti passa a contratti mensili che coprono monitoraggio, ottimizzazione dei prompt e nuove automazioni ogni mese. Ogni collaborazione inizia con una consulenza gratuita in cui ottieni cifre precise per il tuo caso — contatta sales@hmz.technology o WhatsApp +961 70 106 083.",
          },
        ],
      },
      {
        category: "Chatbot IA e Agenti Vocali",
        faqs: [
          {
            q: "Cos'è un chatbot IA per WhatsApp e perché la mia azienda ne ha bisogno?",
            a: "Un chatbot IA per WhatsApp è un agente di intelligenza artificiale all'interno del tuo numero WhatsApp Business che risponde ai clienti in meno di 3 secondi, 24 ore su 24 e 7 giorni su 7, con la voce del tuo brand. Le aziende perdono fino all'80% delle conversioni potenziali quando le risposte richiedono più di 5 minuti — il chatbot colma questo divario, qualifica i lead, prenota appuntamenti e passa la conversazione agli umani quando necessario.",
          },
          {
            q: "L'automazione WhatsApp è ufficiale e sicura per il mio numero?",
            a: "Sì. HMZ sviluppa esclusivamente sull'API ufficiale WhatsApp Business (verificata da Meta), progettata appositamente secondo le regole Meta 2026. Il tuo numero resta conforme, il tuo account resta al sicuro e le valutazioni della qualità dei messaggi rimangono sane.",
          },
          {
            q: "Cos'è un agente vocale IA?",
            a: "Un agente vocale IA è un receptionist virtuale che risponde alle telefonate in arabo, inglese o francese naturali, prenota appuntamenti, risponde alle domande e qualifica i lead. Il 38% delle chiamate in entrata verso le piccole imprese resta senza risposta — un agente vocale IA risponde a ogni chiamata in meno di un secondo, con un costo inferiore dell'80-85% rispetto a un receptionist umano.",
          },
          {
            q: "L'IA darà risposte sbagliate ai miei clienti?",
            a: "I sistemi HMZ utilizzano la Retrieval-Augmented Generation (RAG), che fonda ogni risposta sui tuoi documenti aziendali approvati e riduce le allucinazioni del 60-80% rispetto ai modelli IA grezzi. L'IA parla solo dalla tua base di conoscenza verificata ed escala al tuo team ogni volta che non è sicura.",
          },
        ],
      },
      {
        category: "GEO, SEO e Ricerca IA",
        faqs: [
          {
            q: "Cos'è la Generative Engine Optimization (GEO)?",
            a: "La GEO è la pratica di rendere il tuo brand visibile e citabile all'interno dei motori IA come ChatGPT, Perplexity, Gemini e le panoramiche IA di Google. Le ricerche mostrano che le menzioni del brand sono correlate alle citazioni IA con r=0,664 — tre volte più dei backlink (r=0,218). La GEO combina ottimizzazione delle entità, dati strutturati, llms.txt, gestione dei crawler IA e contenuti che mettono la risposta al primo posto.",
          },
          {
            q: "In cosa la GEO differisce dalla SEO tradizionale?",
            a: "La SEO posiziona le pagine nei link blu di Google; la GEO fa sì che il tuo brand venga nominato nelle risposte generate dall'IA. Circa l'80-90% delle citazioni IA proviene da pagine fuori dalla top 10 di Google — i motori IA premiano quindi entità chiare, risposte dirette, statistiche e menzioni di terze parti, non solo i classici segnali di ranking. HMZ costruisce per entrambi contemporaneamente.",
          },
          {
            q: "HMZ può far sì che ChatGPT raccomandi la mia azienda?",
            a: "Nessuna agenzia può garantire una risposta IA specifica — le risposte dell'IA sono probabilistiche. Ciò che fa HMZ è massimizzare sistematicamente la tua probabilità di citazione: chiarezza delle entità sul web, contenuti con la risposta in primo piano, dati strutturati, llms.txt, accesso ai crawler IA, presenza in directory e recensioni, e monitoraggio mensile delle citazioni su ChatGPT, Perplexity, Gemini e Claude.",
          },
        ],
      },
      {
        category: "Agenti IA e Futuro",
        faqs: [
          {
            q: "Qual è la differenza tra un chatbot e un agente IA?",
            a: "Un chatbot risponde alle domande; un agente IA pianifica, decide ed esegue lavori in più fasi — legge il tuo CRM, redige preventivi, aggiorna i record e attiva workflow. Gartner prevede che entro la fine del 2026 il 40% delle applicazioni aziendali integrerà agenti IA specifici per attività. HMZ costruisce agenti governati e verificabili, progettati per la produzione, non per le demo.",
          },
          {
            q: "Cos'è l'MCP (Model Context Protocol) e perché è importante?",
            a: "MCP è il nuovo standard industriale — supportato da OpenAI, Google, Microsoft e AWS — per connettere in modo sicuro gli assistenti IA ai sistemi aziendali come CRM, ERP e database. Consente ai tuoi strumenti IA di leggere i dati aziendali reali e di agire su di essi tramite un unico protocollo governato. HMZ è tra i primi a costruire integrazioni MCP nella regione MENA.",
          },
          {
            q: "L'IA sostituirà i miei dipendenti?",
            a: "HMZ progetta l'IA come moltiplicatore della forza lavoro, non come sostituto: l'IA prepara le bozze, gli umani le approvano. Gli agenti gestiscono il 70-80% ripetitivo (prime risposte, inserimento dati, follow-up, pianificazione) così che le tue persone si concentrino su relazioni, giudizio e chiusura delle vendite. Ogni implementazione HMZ include per design il passaggio human-in-the-loop.",
          },
          {
            q: "Come dovrebbe prepararsi la mia azienda all'IA da oggi al 2030?",
            a: "Inizia con tre fondamenta: dati aziendali puliti e organizzati, processi documentati e un sistema IA in produzione che dimostri il ROI (di solito un chatbot o un agente vocale). Poi espanditi verso agenti connessi e una forza lavoro IA gestita. La consulenza AGI-readiness di HMZ traccia questa roadmap 2026-2035 specificamente per la tua azienda.",
          },
        ],
      },
    ],
    ctaTitle: "Hai ancora domande?",
    ctaText: "Ottieni una consulenza gratuita — risposte concrete sulla tua azienda in meno di 24 ore.",
    ctaButton: "Richiedi una consulenza gratuita",
  },
  hi: {
    title: "FAQ — AI चैटबॉट, वॉइस एजेंट, GEO और AI एजेंट | HMZ Technology",
    description: "HMZ Technology की AI सेवाओं के बारे में सीधे जवाब: WhatsApp AI चैटबॉट, AI वॉइस एजेंट, जेनरेटिव इंजन ऑप्टिमाइज़ेशन (GEO), कस्टम AI एजेंट, मूल्य निर्धारण, तैनाती की गति और 2026-2030 के लिए AI रणनीति।",
    h1a: "अक्सर पूछे जाने वाले",
    h1b: "प्रश्न",
    intro: "AI चैटबॉट, वॉइस एजेंट, GEO और इस बारे में सीधे, बिना घुमाव के जवाब कि HMZ Technology MENA और दुनिया भर के व्यवसायों के लिए प्रोडक्शन-रेडी AI सिस्टम कैसे बनाती है।",
    groups: [
      {
        category: "HMZ के साथ काम करना",
        faqs: [
          {
            q: "HMZ Technology क्या करती है?",
            a: "HMZ Technology एक AI एजेंसी है जो व्यवसायों के लिए प्रोडक्शन-ग्रेड AI सिस्टम बनाती है: WhatsApp, Instagram और Messenger AI चैटबॉट, AI वॉइस एजेंट, RAG नॉलेज असिस्टेंट, AI सेल्स एजेंट, कस्टम AI एजेंट, MCP इंटीग्रेशन, बिज़नेस प्रोसेस ऑटोमेशन, वेबसाइटें, SEO और जेनरेटिव इंजन ऑप्टिमाइज़ेशन (GEO)। हमारा मुख्यालय बेरूत, लेबनान में है और हम MENA क्षेत्र और दुनिया भर के ग्राहकों की सेवा करते हैं।",
          },
          {
            q: "HMZ Technology कहाँ स्थित है और आप किन बाज़ारों की सेवा करते हैं?",
            a: "HMZ Technology का मुख्यालय बेरूत, लेबनान में है। हम लेबनान, सऊदी अरब, UAE, पूरे GCC, यूरोप और उत्तरी अमेरिका के ग्राहकों की सेवा करते हैं। सभी सिस्टम पूर्ण दस्तावेज़ीकरण और प्रशिक्षण के साथ दूरस्थ रूप से डिलीवर किए जाते हैं, और हमारी वेबसाइट तथा सपोर्ट अरबी और अंग्रेज़ी सहित 7 भाषाओं में काम करते हैं।",
          },
          {
            q: "HMZ AI चैटबॉट कितनी जल्दी तैनात कर सकती है?",
            a: "एक स्टैंडर्ड WhatsApp AI चैटबॉट लगभग 8 दिनों में लाइव हो जाता है: दिन 1-2 में हम आपके मौजूदा सेटअप का ऑडिट करते हैं, दिन 3-5 में आपके बिज़नेस डेटा पर AI को प्रशिक्षित करते हैं, दिन 6-7 में आपके सिस्टम से इंटीग्रेट करते हैं, और दिन 8 पर बिना किसी डाउनटाइम के गो-लाइव होता है। बड़े एजेंटिक सिस्टम में इंटीग्रेशन के अनुसार आमतौर पर 4-8 सप्ताह लगते हैं।",
          },
          {
            q: "HMZ की AI सेवाओं की लागत कितनी है?",
            a: "एंट्री-लेवल ऑटोमेशन और चैटबॉट आपके दायरे के अनुसार प्रोजेक्ट-आधारित मूल्य निर्धारण से शुरू होते हैं, जबकि अधिकांश ग्राहक मासिक रिटेनर की ओर बढ़ते हैं जिनमें मॉनिटरिंग, प्रॉम्प्ट ट्यूनिंग और हर महीने नए ऑटोमेशन शामिल होते हैं। हर सहयोग की शुरुआत एक मुफ्त परामर्श से होती है जिसमें आपको अपने मामले के सटीक आंकड़े मिलते हैं — sales@hmz.technology या WhatsApp +961 70 106 083 पर संपर्क करें।",
          },
        ],
      },
      {
        category: "AI चैटबॉट और वॉइस एजेंट",
        faqs: [
          {
            q: "WhatsApp AI चैटबॉट क्या है और मेरे व्यवसाय को इसकी आवश्यकता क्यों है?",
            a: "WhatsApp AI चैटबॉट आपके WhatsApp Business नंबर के अंदर एक AI एजेंट है जो ग्राहकों को 3 सेकंड से कम समय में, 24/7, आपके ब्रांड की आवाज़ में जवाब देता है। जब जवाब देने में 5 मिनट से अधिक लगते हैं तो व्यवसाय संभावित कन्वर्ज़न का 80% तक खो देते हैं — चैटबॉट इस अंतर को पाटता है, लीड को क्वालीफाई करता है, अपॉइंटमेंट बुक करता है और ज़रूरत पड़ने पर मनुष्यों को सौंप देता है।",
          },
          {
            q: "क्या WhatsApp ऑटोमेशन आधिकारिक है और मेरे नंबर के लिए सुरक्षित है?",
            a: "हाँ। HMZ विशेष रूप से आधिकारिक WhatsApp Business API (Meta-सत्यापित) पर बनाती है, जो Meta के 2026 नियमों के अनुसार तैयार की गई है। आपका नंबर अनुपालन में रहता है, आपका अकाउंट सुरक्षित रहता है और मैसेजिंग गुणवत्ता रेटिंग स्वस्थ बनी रहती है।",
          },
          {
            q: "AI वॉइस एजेंट क्या है?",
            a: "AI वॉइस एजेंट एक वर्चुअल रिसेप्शनिस्ट है जो स्वाभाविक अरबी, अंग्रेज़ी या फ्रेंच में फोन कॉल उठाता है, अपॉइंटमेंट बुक करता है, सवालों के जवाब देता है और लीड को क्वालीफाई करता है। छोटे व्यवसायों के पास आने वाली 38% कॉल का जवाब नहीं दिया जाता — AI वॉइस एजेंट हर कॉल का जवाब एक सेकंड से भी कम समय में देता है, और मानव रिसेप्शनिस्ट की तुलना में 80-85% कम लागत पर।",
          },
          {
            q: "क्या AI मेरे ग्राहकों को गलत जवाब देगा?",
            a: "HMZ के सिस्टम रिट्रीवल-ऑगमेंटेड जनरेशन (RAG) का उपयोग करते हैं, जो हर जवाब को आपके स्वीकृत बिज़नेस दस्तावेज़ों में आधारित करता है और कच्चे AI मॉडल की तुलना में हैलुसिनेशन को 60-80% तक कम करता है। AI केवल आपके सत्यापित नॉलेज बेस से बोलता है, और जब भी उसे संदेह होता है तो आपकी टीम को भेज देता है।",
          },
        ],
      },
      {
        category: "GEO, SEO और AI सर्च",
        faqs: [
          {
            q: "जेनरेटिव इंजन ऑप्टिमाइज़ेशन (GEO) क्या है?",
            a: "GEO आपके ब्रांड को ChatGPT, Perplexity, Gemini और Google AI Overviews जैसे AI इंजनों के अंदर दृश्यमान और उद्धरण योग्य बनाने की प्रक्रिया है। शोध बताते हैं कि ब्रांड मेंशन AI साइटेशन से r=0.664 पर जुड़े होते हैं — बैकलिंक (r=0.218) से तीन गुना मजबूत। GEO एंटिटी ऑप्टिमाइज़ेशन, स्ट्रक्चर्ड डेटा, llms.txt, AI क्रॉलर प्रबंधन और उत्तर-पहले कंटेंट को जोड़ता है।",
          },
          {
            q: "GEO पारंपरिक SEO से कैसे अलग है?",
            a: "SEO पेजों को Google के नीले लिंक में रैंक करता है; GEO आपके ब्रांड को AI-जनरेटेड उत्तरों के अंदर नामित करवाता है। लगभग 80-90% AI साइटेशन Google के टॉप 10 से बाहर के पेजों से आते हैं, इसलिए AI इंजन क्लासिक रैंकिंग सिग्नल के बजाय स्पष्ट एंटिटी, सीधे उत्तर, आंकड़े और तृतीय-पक्ष मेंशन को पुरस्कृत करते हैं। HMZ दोनों के लिए एक साथ बनाती है।",
          },
          {
            q: "क्या HMZ मेरे व्यवसाय को ChatGPT से सिफारिश करवा सकती है?",
            a: "कोई भी एजेंसी किसी विशिष्ट AI उत्तर की गारंटी नहीं दे सकती — AI प्रतिक्रियाएँ संभाव्यताओं पर आधारित होती हैं। HMZ जो करती है वह है आपकी साइटेशन संभावना को व्यवस्थित रूप से अधिकतम करना: पूरे वेब पर एंटिटी स्पष्टता, उत्तर-पहले कंटेंट, स्ट्रक्चर्ड डेटा, llms.txt, AI क्रॉलर एक्सेस, डायरेक्टरी और रिव्यू उपस्थिति, और ChatGPT, Perplexity, Gemini और Claude पर मासिक साइटेशन मॉनिटरिंग।",
          },
        ],
      },
      {
        category: "AI एजेंट और भविष्य",
        faqs: [
          {
            q: "चैटबॉट और AI एजेंट में क्या अंतर है?",
            a: "चैटबॉट सवालों के जवाब देता है; AI एजेंट योजना बनाता है, निर्णय लेता है और बहु-चरणीय काम निष्पादित करता है — आपका CRM पढ़ना, कोटेशन तैयार करना, रिकॉर्ड अपडेट करना और वर्कफ़्लो ट्रिगर करना। Gartner का अनुमान है कि 2026 के अंत तक 40% एंटरप्राइज़ एप्लिकेशन में कार्य-विशिष्ट AI एजेंट होंगे। HMZ डेमो के लिए नहीं, प्रोडक्शन के लिए डिज़ाइन किए गए नियंत्रित, ऑडिट करने योग्य एजेंट बनाती है।",
          },
          {
            q: "MCP (Model Context Protocol) क्या है और यह क्यों महत्वपूर्ण है?",
            a: "MCP नया उद्योग मानक है — OpenAI, Google, Microsoft और AWS द्वारा समर्थित — जो AI असिस्टेंट को CRM, ERP और डेटाबेस जैसे बिज़नेस सिस्टम से सुरक्षित रूप से जोड़ता है। यह आपके AI टूल्स को एक ही नियंत्रित प्रोटोकॉल के माध्यम से वास्तविक बिज़नेस डेटा पढ़ने और उस पर कार्रवाई करने देता है। HMZ MENA क्षेत्र में MCP इंटीग्रेशन बनाने वाली अग्रणी कंपनियों में से एक है।",
          },
          {
            q: "क्या AI मेरे कर्मचारियों की जगह ले लेगा?",
            a: "HMZ AI को वर्कफ़ोर्स का गुणक बनाती है, प्रतिस्थापन नहीं: AI मसौदा तैयार करता है, मनुष्य मंज़ूरी देते हैं। एजेंट दोहराव वाले 70-80% काम संभालते हैं (पहला जवाब, डेटा एंट्री, फ़ॉलो-अप, शेड्यूलिंग) ताकि आपके लोग संबंधों, निर्णय और डील क्लोज़ करने पर ध्यान दें। हर HMZ तैनाती में डिज़ाइन के अनुसार ह्यूमन-इन-द-लूप हैंडऑफ़ शामिल होता है।",
          },
          {
            q: "मेरे व्यवसाय को अब से 2030 तक AI के लिए कैसे तैयारी करनी चाहिए?",
            a: "तीन नींव से शुरुआत करें: साफ़, व्यवस्थित बिज़नेस डेटा; दस्तावेज़ित प्रक्रियाएँ; और एक प्रोडक्शन AI सिस्टम जो ROI साबित करे (आमतौर पर चैटबॉट या वॉइस एजेंट)। फिर कनेक्टेड एजेंट और प्रबंधित AI वर्कफ़ोर्स की ओर बढ़ें। HMZ की AGI-रेडीनेस कंसल्टिंग इस 2026-2035 रोडमैप को विशेष रूप से आपके व्यवसाय के लिए मैप करती है।",
          },
        ],
      },
    ],
    ctaTitle: "अभी भी सवाल हैं?",
    ctaText: "मुफ्त परामर्श प्राप्त करें — 24 घंटे से कम समय में आपके व्यवसाय के बारे में वास्तविक जवाब।",
    ctaButton: "मुफ्त परामर्श प्राप्त करें",
  },
  ms: {
    title: "Soalan Lazim — Chatbot AI, Ejen Suara, GEO & Ejen AI | HMZ Technology",
    description: "Jawapan langsung tentang perkhidmatan AI HMZ Technology: chatbot AI WhatsApp, ejen suara AI, Generative Engine Optimization (GEO), ejen AI tersuai, harga, kelajuan pelaksanaan dan strategi AI untuk 2026-2030.",
    h1a: "Soalan",
    h1b: "Lazim",
    intro: "Jawapan langsung tanpa selindung tentang chatbot AI, ejen suara, GEO dan bagaimana HMZ Technology membina sistem AI berskala pengeluaran untuk perniagaan di MENA dan seluruh dunia.",
    groups: [
      {
        category: "Bekerjasama dengan HMZ",
        faqs: [
          {
            q: "Apa yang HMZ Technology lakukan?",
            a: "HMZ Technology ialah agensi AI yang membina sistem AI gred pengeluaran untuk perniagaan: chatbot AI WhatsApp, Instagram dan Messenger, ejen suara AI, pembantu pengetahuan RAG, ejen jualan AI, ejen AI tersuai, integrasi MCP, automasi proses perniagaan, laman web, SEO dan Generative Engine Optimization (GEO). Kami berpangkalan di Beirut, Lubnan dan melayani pelanggan di seluruh MENA dan di seluruh dunia.",
          },
          {
            q: "Di manakah lokasi HMZ Technology dan pasaran mana yang anda layani?",
            a: "Ibu pejabat HMZ Technology terletak di Beirut, Lubnan. Kami melayani pelanggan di Lubnan, Arab Saudi, UAE, seluruh GCC, Eropah dan Amerika Utara. Semua sistem disampaikan dari jauh dengan dokumentasi dan latihan penuh, dan laman web serta sokongan kami beroperasi dalam 7 bahasa termasuk Bahasa Arab dan Inggeris.",
          },
          {
            q: "Berapa pantas HMZ boleh melancarkan chatbot AI?",
            a: "Chatbot AI WhatsApp standard boleh beroperasi dalam masa kira-kira 8 hari: hari 1-2 kami mengaudit persediaan semasa anda, hari 3-5 kami melatih AI dengan data perniagaan anda, hari 6-7 kami mengintegrasikannya dengan sistem anda, dan hari ke-8 ialah pelancaran tanpa sebarang gangguan. Sistem ejen yang lebih besar biasanya mengambil masa 4-8 minggu bergantung pada integrasi.",
          },
          {
            q: "Berapakah kos perkhidmatan AI HMZ?",
            a: "Automasi dan chatbot peringkat permulaan bermula dengan harga berasaskan projek yang disesuaikan dengan skop anda, manakala kebanyakan pelanggan beralih kepada pakej bulanan yang merangkumi pemantauan, penalaan prompt dan pembinaan automasi baharu setiap bulan. Setiap kerjasama bermula dengan perundingan percuma di mana anda mendapat angka tepat untuk kes anda — hubungi sales@hmz.technology atau WhatsApp +961 70 106 083.",
          },
        ],
      },
      {
        category: "Chatbot AI & Ejen Suara",
        faqs: [
          {
            q: "Apakah chatbot AI WhatsApp dan mengapa perniagaan saya memerlukannya?",
            a: "Chatbot AI WhatsApp ialah ejen AI di dalam nombor WhatsApp Business anda yang menjawab pelanggan dalam masa kurang daripada 3 saat, 24/7, dengan suara jenama anda. Perniagaan kehilangan sehingga 80% penukaran berpotensi apabila balasan mengambil masa lebih 5 minit — chatbot menutup jurang itu, melayakkan prospek, menempah janji temu dan menyerahkan kepada manusia apabila perlu.",
          },
          {
            q: "Adakah automasi WhatsApp ini rasmi dan selamat untuk nombor saya?",
            a: "Ya. HMZ membina secara eksklusif di atas API WhatsApp Business rasmi (disahkan Meta), yang dibina khas mengikut peraturan Meta 2026. Nombor anda kekal patuh, akaun anda kekal selamat dan penarafan kualiti pemesejan kekal sihat.",
          },
          {
            q: "Apakah ejen suara AI?",
            a: "Ejen suara AI ialah penyambut tetamu maya yang menjawab panggilan telefon dalam Bahasa Arab, Inggeris atau Perancis yang natural, menempah janji temu, menjawab soalan dan melayakkan prospek. 38% panggilan masuk ke perniagaan kecil tidak dijawab — ejen suara AI menjawab setiap panggilan dalam masa kurang satu saat, dengan kos 80-85% lebih rendah berbanding penyambut tetamu manusia.",
          },
          {
            q: "Adakah AI akan memberi jawapan yang salah kepada pelanggan saya?",
            a: "Sistem HMZ menggunakan Retrieval-Augmented Generation (RAG), yang mengasaskan setiap jawapan pada dokumen perniagaan anda yang diluluskan dan mengurangkan halusinasi sebanyak 60-80% berbanding model AI mentah. AI hanya bercakap daripada pangkalan pengetahuan anda yang disahkan, dan menyerahkan kepada pasukan anda setiap kali ia tidak pasti.",
          },
        ],
      },
      {
        category: "GEO, SEO & Carian AI",
        faqs: [
          {
            q: "Apakah Generative Engine Optimization (GEO)?",
            a: "GEO ialah amalan menjadikan jenama anda kelihatan dan boleh dipetik di dalam enjin AI seperti ChatGPT, Perplexity, Gemini dan Google AI Overviews. Kajian menunjukkan sebutan jenama berkorelasi dengan petikan AI pada r=0.664 — tiga kali lebih kuat daripada pautan balik (r=0.218). GEO menggabungkan pengoptimuman entiti, data berstruktur, llms.txt, pengurusan perayap AI dan kandungan yang mengutamakan jawapan.",
          },
          {
            q: "Apakah perbezaan GEO dengan SEO tradisional?",
            a: "SEO menyenaraikan halaman dalam pautan biru Google; GEO memastikan jenama anda disebut dalam jawapan yang dijana AI. Kira-kira 80-90% petikan AI datang daripada halaman di luar 10 teratas Google, jadi enjin AI mengganjarkan entiti yang jelas, jawapan langsung, statistik dan sebutan pihak ketiga, bukan sekadar isyarat kedudukan klasik. HMZ membina untuk kedua-duanya serentak.",
          },
          {
            q: "Bolehkah HMZ memastikan perniagaan saya disyorkan oleh ChatGPT?",
            a: "Tiada agensi boleh menjamin jawapan AI tertentu — respons AI bersifat kebarangkalian. Apa yang HMZ lakukan ialah memaksimumkan kebarangkalian petikan anda secara sistematik: kejelasan entiti merentasi web, kandungan yang mengutamakan jawapan, data berstruktur, llms.txt, akses perayap AI, kehadiran direktori dan ulasan, serta pemantauan petikan bulanan merentasi ChatGPT, Perplexity, Gemini dan Claude.",
          },
        ],
      },
      {
        category: "Ejen AI & Masa Depan",
        faqs: [
          {
            q: "Apakah perbezaan antara chatbot dan ejen AI?",
            a: "Chatbot menjawab soalan; ejen AI merancang, membuat keputusan dan melaksanakan kerja berbilang langkah — membaca CRM anda, menyediakan sebut harga, mengemas kini rekod dan mencetuskan aliran kerja. Gartner mengunjurkan 40% aplikasi perusahaan akan menyepadukan ejen AI khusus tugas menjelang akhir 2026. HMZ membina ejen yang terkawal dan boleh diaudit, direka untuk pengeluaran sebenar, bukan demo.",
          },
          {
            q: "Apakah MCP (Model Context Protocol) dan mengapa ia penting?",
            a: "MCP ialah piawaian industri baharu — disokong oleh OpenAI, Google, Microsoft dan AWS — untuk menyambungkan pembantu AI dengan selamat kepada sistem perniagaan seperti CRM, ERP dan pangkalan data. Ia membolehkan alat AI anda membaca dan bertindak atas data perniagaan sebenar melalui satu protokol terkawal. HMZ ialah perintis dalam membina integrasi MCP di rantau MENA.",
          },
          {
            q: "Adakah AI akan menggantikan pekerja saya?",
            a: "HMZ mereka bentuk AI sebagai pengganda tenaga kerja, bukan pengganti: AI menyediakan draf, manusia meluluskannya. Ejen mengendalikan 70-80% kerja berulang (balasan pertama, kemasukan data, susulan, penjadualan) supaya kakitangan anda fokus pada hubungan, pertimbangan dan penutupan jualan. Setiap pelaksanaan HMZ merangkumi serahan human-in-the-loop mengikut reka bentuk.",
          },
          {
            q: "Bagaimanakah perniagaan saya harus bersedia untuk AI dari sekarang hingga 2030?",
            a: "Mulakan dengan tiga asas: data perniagaan yang bersih dan teratur; proses yang didokumentasikan; dan satu sistem AI pengeluaran yang membuktikan ROI (biasanya chatbot atau ejen suara). Kemudian kembangkan ke arah ejen yang berhubung dan tenaga kerja AI yang diuruskan. Perundingan kesediaan AGI HMZ memetakan pelan tindakan 2026-2035 ini khusus untuk perniagaan anda.",
          },
        ],
      },
    ],
    ctaTitle: "Masih ada soalan?",
    ctaText: "Dapatkan perundingan percuma — jawapan sebenar tentang perniagaan anda dalam masa kurang 24 jam.",
    ctaButton: "Dapatkan Perundingan Percuma",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = content[lang];
  return buildMetadata({
    title: t.title,
    description: t.description,
    path: "/faq",
    locale: lang,
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = content[lang];

  const allFaqs = t.groups.flatMap((g) => g.faqs);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://www.hmz.technology/${lang}/faq#faq`,
    inLanguage: lang,
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Header lang={lang} />
      <main className="bg-[#030014] min-h-screen text-white">
        <section className="max-w-4xl mx-auto px-4 pt-32 pb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {t.h1a}{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t.h1b}
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 text-center max-w-2xl mx-auto">
            {t.intro}
          </p>

          {t.groups.map((group) => (
            <section key={group.category} className="mt-14">
              <h2 className="text-2xl font-bold text-cyan-300 mb-6">
                {group.category}
              </h2>
              <div className="space-y-4">
                {group.faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 open:border-cyan-400/40 transition"
                  >
                    <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-semibold text-lg">
                      <span>{f.q}</span>
                      <span className="text-cyan-400 group-open:rotate-45 transition text-2xl leading-none shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-300 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-16 text-center rounded-2xl border border-purple-400/30 bg-purple-500/10 p-10">
            <h2 className="text-2xl font-bold">{t.ctaTitle}</h2>
            <p className="mt-3 text-gray-300">{t.ctaText}</p>
            <a
              href={`/${lang}/contact`}
              className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:opacity-90 transition"
            >
              {t.ctaButton}
            </a>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd(
              [
                { name: "Home", path: "/" },
                { name: "FAQ", path: "/faq" },
              ],
              lang,
            ),
          ),
        }}
      />
    </>
  );
}
