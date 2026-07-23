
import type { Language } from '../components/react/types';

export interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    faq: { question: string; answer: string }[];
    crisisSolved: string;
    workflow: string[];
    costOfInaction: string;
    psychologicalHook: string;
}

export const servicesData: Record<string, Record<Language, Service>> = {
    'whatsapp-ai-chatbot': {
        en: {
            id: 'whatsapp-ai-chatbot',
            icon: '💬',
            title: 'WhatsApp AI Chatbot',
            description: 'Imagine this: A customer messages you at 2 AM asking about your product. Before they finish typing their second question, they\'ve received a personalized response, been qualified as a hot lead, and scheduled a call with your sales team—all while you sleep. That\'s not the future. That\'s what we build today. Our AI agents don\'t just respond; they understand context, build relationships, and close deals.',
            features: [
                'Instant Response: Under 3 Seconds, Always',
                'Speaks Your Brand\'s Voice Perfectly',
                'Connects to Your CRM, ERP, Payment Systems',
                'Knows When to Hand Off to Humans'
            ],
            benefits: [
                'Never Lose a Lead to Slow Response Again',
                'Scale Without Hiring More Support Staff',
                'Turn Every Inquiry Into a Sales Opportunity',
                'See ROI Within 2 Weeks, Guaranteed'
            ],
            faq: [
                { question: 'Can the bot integrate with my CRM?', answer: 'Yes, we integrate with HubSpot, Salesforce, Zoho, and 50+ other CRMs.' },
                { question: 'Is WhatsApp API official?', answer: 'Yes, we use the official WhatsApp Business API (Meta verified).' }
            ],
            crisisSolved: 'Here\'s the brutal truth: When a customer messages you and waits more than 5 minutes, you lose 80% of potential conversions. That\'s not a theory—that\'s money walking out the door every single day. We plug this hole permanently. Your AI responds in 3 seconds or less, 24/7, 365 days a year. No breaks. No sick days. No excuses.',
            workflow: [
                'Day 1-2: We Audit Your Current Setup',
                'Day 3-5: Custom AI Trained on YOUR Business',
                'Day 6-7: Integration with Your Systems',
                'Day 8: Go Live (Zero Downtime)'
            ],
            costOfInaction: 'Every night you go to bed, 67% of the leads who messaged you after 6 PM are already talking to your competitors. They didn\'t wait. They won\'t wait. The question isn\'t whether you can afford AI automation—it\'s whether you can afford to keep losing customers to businesses that already have it.',
            psychologicalHook: 'Right now, someone is messaging your business. Will they get an answer—or will they message your competitor next?'
        },
        ar: {
            id: 'whatsapp-ai-chatbot',
            icon: '💬',
            title: 'روبوت واتساب الذكي',
            description: 'تخيل هذا: عميل يرسل لك رسالة الساعة 2 فجراً يسأل عن منتجك. قبل أن ينتهي من كتابة سؤاله الثاني، يكون قد تلقى رداً شخصياً، تم تأهيله كعميل محتمل، وحُجز له موعد مع فريق مبيعاتك—كل هذا وأنت نائم. هذا ليس خيالاً. هذا ما نبنيه لك اليوم. وكلاؤنا الأذكياء لا يردون فقط؛ بل يفهمون السياق، يبنون علاقات، ويُغلقون الصفقات.',
            features: [
                'رد فوري: أقل من 3 ثوانٍ، دائماً',
                'يتحدث بصوت علامتك التجارية بدقة',
                'يتصل بنظام CRM، ERP، وأنظمة الدفع',
                'يعرف متى يحول للموظف البشري'
            ],
            benefits: [
                'لن تخسر عميلاً بسبب بطء الرد مرة أخرى',
                'توسّع بدون توظيف المزيد من موظفي الدعم',
                'حوّل كل استفسار إلى فرصة بيع',
                'عائد استثمار خلال أسبوعين، مضمون'
            ],
            faq: [
                { question: 'هل يمكن للروبوت الاتصال بنظام CRM الخاص بي؟', answer: 'نعم، نتكامل مع HubSpot و Salesforce و Zoho وأكثر من 50 نظام آخر.' },
                { question: 'هل WhatsApp API رسمي؟', answer: 'نعم، نستخدم واجهة برمجة تطبيقات WhatsApp Business الرسمية (موثقة من Meta).' }
            ],
            crisisSolved: 'إليك الحقيقة القاسية: عندما يرسل لك عميل رسالة وينتظر أكثر من 5 دقائق، تخسر 80% من فرص التحويل. هذه ليست نظرية—هذه أموال تخرج من باب عملك كل يوم. نحن نسد هذه الفجوة نهائياً. الذكاء الاصطناعي الخاص بك يرد في 3 ثوانٍ أو أقل، 24/7، 365 يوماً في السنة. بدون استراحات. بدون إجازات. بدون أعذار.',
            workflow: [
                'اليوم 1-2: نفحص وضعك الحالي',
                'اليوم 3-5: تدريب AI مخصص لعملك أنت',
                'اليوم 6-7: التكامل مع أنظمتك',
                'اليوم 8: الإطلاق المباشر (صفر توقف)'
            ],
            costOfInaction: 'كل ليلة تذهب فيها للنوم، 67% من العملاء الذين راسلوك بعد الساعة 6 مساءً يتحدثون الآن مع منافسيك. لم ينتظروا. ولن ينتظروا. السؤال ليس هل تستطيع تحمل تكلفة أتمتة الذكاء الاصطناعي—السؤال هو هل تستطيع تحمل خسارة العملاء للشركات التي تمتلكها بالفعل؟',
            psychologicalHook: 'الآن، في هذه اللحظة، شخص ما يرسل رسالة لعملك. هل سيحصل على رد—أم سيرسل لمنافسك بعدها؟'
        },
        de: {
            id: 'whatsapp-ai-chatbot',
            icon: '💬',
            title: 'WhatsApp KI-Chatbot',
            description: 'Stellen Sie sich vor: Ein Kunde schreibt Ihnen um 2 Uhr nachts. Bevor er seine zweite Frage tippt, hat er bereits eine persönliche Antwort erhalten, wurde als heißer Lead qualifiziert und hat einen Termin mit Ihrem Vertrieb—während Sie schlafen. Das ist keine Zukunft. Das bauen wir heute. Unsere KI-Agenten antworten nicht nur; sie verstehen, bauen Beziehungen auf und schließen Deals.',
            features: [
                'Sofortige Antwort: Unter 3 Sekunden, immer',
                'Spricht perfekt mit Ihrer Markenstimme',
                'Verbindet sich mit CRM, ERP, Zahlungssystemen',
                'Weiß, wann an Menschen übergeben werden muss'
            ],
            benefits: [
                'Nie wieder einen Lead durch langsame Antwort verlieren',
                'Skalieren ohne mehr Support-Mitarbeiter einzustellen',
                'Jede Anfrage in eine Verkaufschance verwandeln',
                'ROI in 2 Wochen, garantiert'
            ],
            faq: [
                { question: 'Kann der Bot in mein CRM integriert werden?', answer: 'Ja, wir integrieren uns mit HubSpot, Salesforce, Zoho und 50+ anderen CRMs.' },
                { question: 'Ist die WhatsApp API offiziell?', answer: 'Ja, wir nutzen die offizielle WhatsApp Business API (Meta verifiziert).' }
            ],
            crisisSolved: 'Hier ist die brutale Wahrheit: Wenn ein Kunde Ihnen schreibt und mehr als 5 Minuten wartet, verlieren Sie 80% der potenziellen Konversionen. Das ist keine Theorie—das ist Geld, das täglich aus Ihrem Unternehmen läuft. Wir stopfen dieses Loch dauerhaft. Ihre KI antwortet in 3 Sekunden oder weniger, 24/7, 365 Tage im Jahr.',
            workflow: [
                'Tag 1-2: Wir prüfen Ihre aktuelle Einrichtung',
                'Tag 3-5: KI speziell für IHR Geschäft trainiert',
                'Tag 6-7: Integration mit Ihren Systemen',
                'Tag 8: Live gehen (keine Ausfallzeit)'
            ],
            costOfInaction: 'Jede Nacht, in der Sie schlafen gehen, sprechen 67% der Leads, die nach 18 Uhr geschrieben haben, bereits mit Ihren Wettbewerbern. Sie haben nicht gewartet. Sie werden nicht warten. Die Frage ist nicht, ob Sie sich KI-Automatisierung leisten können—sondern ob Sie es sich leisten können, weiter Kunden zu verlieren.',
            psychologicalHook: 'Gerade jetzt schreibt jemand Ihrem Unternehmen. Wird er eine Antwort bekommen—oder Ihrem Wettbewerber schreiben?'
        },
        fr: {
            id: 'whatsapp-ai-chatbot',
            icon: '💬',
            title: 'Chatbot IA WhatsApp',
            description: 'Imaginez: Un client vous écrit à 2h du matin. Avant qu\'il finisse sa deuxième question, il a reçu une réponse personnalisée, a été qualifié comme lead chaud, et a réservé un appel avec votre équipe commerciale—pendant que vous dormez. Ce n\'est pas le futur. C\'est ce que nous construisons aujourd\'hui. Nos agents IA ne répondent pas seulement; ils comprennent, construisent des relations et concluent des ventes.',
            features: [
                'Réponse instantanée: Moins de 3 secondes, toujours',
                'Parle parfaitement avec la voix de votre marque',
                'Se connecte à votre CRM, ERP, systèmes de paiement',
                'Sait quand transférer à un humain'
            ],
            benefits: [
                'Ne perdez plus jamais un lead par lenteur',
                'Scalez sans embaucher plus de support',
                'Transformez chaque demande en opportunité de vente',
                'ROI en 2 semaines, garanti'
            ],
            faq: [
                { question: 'Le bot peut-il s\'intégrer à mon CRM?', answer: 'Oui, nous nous intégrons à HubSpot, Salesforce, Zoho et plus de 50 autres CRM.' },
                { question: 'L\'API WhatsApp est-elle officielle?', answer: 'Oui, nous utilisons l\'API officielle WhatsApp Business (vérifiée par Meta).' }
            ],
            crisisSolved: 'Voici la vérité brutale: Quand un client vous écrit et attend plus de 5 minutes, vous perdez 80% des conversions potentielles. Ce n\'est pas une théorie—c\'est de l\'argent qui sort de votre entreprise chaque jour. Nous bouchons ce trou définitivement. Votre IA répond en 3 secondes ou moins, 24/7, 365 jours par an.',
            workflow: [
                'Jour 1-2: Nous auditons votre configuration actuelle',
                'Jour 3-5: IA entraînée sur VOTRE entreprise',
                'Jour 6-7: Intégration avec vos systèmes',
                'Jour 8: Mise en ligne (zéro interruption)'
            ],
            costOfInaction: 'Chaque nuit où vous dormez, 67% des leads qui vous ont écrit après 18h parlent déjà à vos concurrents. Ils n\'ont pas attendu. Ils n\'attendront pas. La question n\'est pas si vous pouvez vous permettre l\'automatisation IA—c\'est si vous pouvez continuer à perdre des clients.',
            psychologicalHook: 'En ce moment, quelqu\'un écrit à votre entreprise. Aura-t-il une réponse—ou écrira-t-il à votre concurrent?'
        },
        it: {
            id: 'whatsapp-ai-chatbot',
            icon: '💬',
            title: 'Chatbot IA WhatsApp',
            description: 'Immagina questo: Un cliente ti scrive alle 2 di notte. Prima che finisca la seconda domanda, ha ricevuto una risposta personalizzata, è stato qualificato come lead caldo e ha prenotato una chiamata con il tuo team vendite—mentre dormi. Questo non è il futuro. È quello che costruiamo oggi. I nostri agenti IA non rispondono solo; capiscono, costruiscono relazioni e chiudono affari.',
            features: [
                'Risposta istantanea: Meno di 3 secondi, sempre',
                'Parla perfettamente con la voce del tuo brand',
                'Si connette a CRM, ERP, sistemi di pagamento',
                'Sa quando passare a un umano'
            ],
            benefits: [
                'Non perdere mai più un lead per risposte lente',
                'Scala senza assumere più personale di supporto',
                'Trasforma ogni richiesta in opportunità di vendita',
                'ROI in 2 settimane, garantito'
            ],
            faq: [
                { question: 'Il bot può integrarsi con il mio CRM?', answer: 'Sì, ci integriamo con HubSpot, Salesforce, Zoho e oltre 50 altri CRM.' },
                { question: 'L\'API WhatsApp è ufficiale?', answer: 'Sì, utilizziamo l\'API ufficiale WhatsApp Business (verificata da Meta).' }
            ],
            crisisSolved: 'Ecco la verità brutale: Quando un cliente ti scrive e aspetta più di 5 minuti, perdi l\'80% delle conversioni potenziali. Non è una teoria—sono soldi che escono dalla tua azienda ogni giorno. Tappiamo questo buco definitivamente. La tua IA risponde in 3 secondi o meno, 24/7, 365 giorni all\'anno.',
            workflow: [
                'Giorno 1-2: Analizziamo la tua configurazione attuale',
                'Giorno 3-5: IA addestrata sulla TUA azienda',
                'Giorno 6-7: Integrazione con i tuoi sistemi',
                'Giorno 8: Vai live (zero interruzioni)'
            ],
            costOfInaction: 'Ogni notte che vai a dormire, il 67% dei lead che ti hanno scritto dopo le 18 stanno già parlando con i tuoi concorrenti. Non hanno aspettato. Non aspetteranno. La domanda non è se puoi permetterti l\'automazione IA—è se puoi continuare a perdere clienti.',
            psychologicalHook: 'Proprio ora, qualcuno sta scrivendo alla tua azienda. Riceverà una risposta—o scriverà al tuo concorrente?'
        },
        hi: {
            id: 'whatsapp-ai-chatbot',
            icon: '💬',
            title: 'WhatsApp AI चैटबॉट',
            description: 'यह सोचिए: एक ग्राहक रात 2 बजे आपको संदेश भेजता है। उसका दूसरा सवाल खत्म होने से पहले, उसे व्यक्तिगत जवाब मिल गया, उसे हॉट लीड के रूप में योग्य माना गया, और आपकी सेल्स टीम के साथ कॉल शेड्यूल हो गया—जब आप सो रहे थे। यह भविष्य नहीं है। यह हम आज बनाते हैं। हमारे AI एजेंट सिर्फ जवाब नहीं देते; वे समझते हैं, संबंध बनाते हैं, और डील बंद करते हैं।',
            features: [
                'तुरंत जवाब: 3 सेकंड से कम, हमेशा',
                'आपके ब्रांड की आवाज़ में परफेक्टली बोलता है',
                'CRM, ERP, भुगतान सिस्टम से जुड़ता है',
                'जानता है कब मनुष्य को हैंडओवर करना है'
            ],
            benefits: [
                'धीमी प्रतिक्रिया से फिर कभी लीड नहीं खोएं',
                'अधिक सपोर्ट स्टाफ को हायर किए बिना स्केल करें',
                'हर पूछताछ को बिक्री के मौके में बदलें',
                '2 हफ्तों में ROI, गारंटीड'
            ],
            faq: [
                { question: 'क्या बॉट मेरे CRM के साथ एकीकृत हो सकता है?', answer: 'हाँ, हम HubSpot, Salesforce, Zoho और 50+ अन्य CRM के साथ एकीकृत करते हैं।' },
                { question: 'क्या WhatsApp API आधिकारिक है?', answer: 'हाँ, हम आधिकारिक WhatsApp Business API (Meta सत्यापित) का उपयोग करते हैं।' }
            ],
            crisisSolved: 'यह कड़वी सच्चाई है: जब कोई ग्राहक आपको संदेश करता है और 5 मिनट से अधिक इंतजार करता है, तो आप 80% संभावित कन्वर्जन खो देते हैं। यह सिर्फ थियरी नहीं है—यह हर दिन आपके व्यवसाय से निकलता पैसा है। हम इस सुराग को स्थायी रूप से बंद करते हैं। आपका AI 3 सेकंड या उससे कम में जवाब देता है, 24/7, 365 दिन।',
            workflow: [
                'दिन 1-2: हम आपकी वर्तमान सेटअप की जांच करते हैं',
                'दिन 3-5: आपके व्यवसाय के लिए कस्टम AI ट्रेंड',
                'दिन 6-7: आपके सिस्टम से योजन',
                'दिन 8: लाइव हों (ज़ीरो डाउनटाइम)'
            ],
            costOfInaction: 'हर रात जब आप सोते हैं, शाम 6 बजे के बाद संदेश भेजने वाले 67% लीड पहले से ही आपके प्रतिस्पर्धियों से बात कर रहे होते हैं। उन्होंने इंतजार नहीं किया। वे नहीं करेंगे। सवाल यह नहीं है कि आप AI ऑटोमेशन अफोर्ड कर सकते हैं—सवाल यह है कि क्या आप ग्राहक खोना जारी रख सकते हैं।',
            psychologicalHook: 'अभी, इसी पल कोई आपके बिजनेस को संदेश भेज रहा है। क्या उसे जवाब मिलेगा—या वो आपके प्रतिस्पर्धी को संदेश भेजेगा?'
        },
        ms: {
            id: 'whatsapp-ai-chatbot',
            icon: '💬',
            title: 'Chatbot AI WhatsApp',
            description: 'Bayangkan ini: Seorang pelanggan menghantar mesej kepada anda pada pukul 2 pagi. Sebelum dia menaip soalan kedua, dia sudah menerima jawapan peribadi, telah layak sebagai lead panas, dan menjadualkan panggilan dengan pasukan jualan anda—semasa anda tidur. Ini bukan masa depan. Ini yang kami bina hari ini. Ejen AI kami bukan sekadar menjawab; mereka memahami, membina hubungan, dan menutup tawaran.',
            features: [
                'Respons Segera: Bawah 3 Saat, Sentiasa',
                'Bercakap Sempurna dengan Suara Jenama Anda',
                'Berhubung dengan CRM, ERP, Sistem Pembayaran',
                'Tahu Bila Perlu Serahkan kepada Manusia'
            ],
            benefits: [
                'Jangan Hilang Lead Lagi kerana Respons Lambat',
                'Scale Tanpa Menggaji Lebih Ramai Staff Sokongan',
                'Tukar Setiap Pertanyaan Jadi Peluang Jualan',
                'ROI dalam 2 Minggu, Dijamin'
            ],
            faq: [
                { question: 'Bolehkah bot berintegrasi dengan CRM saya?', answer: 'Ya, kami berintegrasi dengan HubSpot, Salesforce, Zoho, dan 50+ CRM lain.' },
                { question: 'Adakah API WhatsApp rasmi?', answer: 'Ya, kami menggunakan API Perniagaan WhatsApp rasmi (disahkan Meta).' }
            ],
            crisisSolved: 'Inilah kebenaran yang kejam: Apabila pelanggan menghantar mesej dan menunggu lebih dari 5 minit, anda kehilangan 80% penukaran berpotensi. Ini bukan teori—ini wang yang keluar dari perniagaan anda setiap hari. Kami menutup lubang ini secara kekal. AI anda menjawab dalam 3 saat atau kurang, 24/7, 365 hari setahun.',
            workflow: [
                'Hari 1-2: Kami Audit Setup Semasa Anda',
                'Hari 3-5: AI Dilatih Khas untuk Perniagaan ANDA',
                'Hari 6-7: Integrasi dengan Sistem Anda',
                'Hari 8: Go Live (Zero Downtime)'
            ],
            costOfInaction: 'Setiap malam anda tidur, 67% lead yang menghantar mesej selepas 6 petang sudah bercakap dengan pesaing anda. Mereka tidak menunggu. Mereka tidak akan menunggu. Persoalannya bukan sama ada anda mampu automasi AI—persoalannya ialah sama ada anda mampu terus kehilangan pelanggan.',
            psychologicalHook: 'Sekarang, seseorang sedang menghantar mesej kepada perniagaan anda. Adakah mereka akan dapat jawapan—atau akan mereka mesej pesaing anda?'
        }
    },
    'instagram-ai-chatbot': {
        en: {
            id: 'instagram-ai-chatbot',
            icon: '📸',
            title: 'Instagram Automation',
            description: 'Think about this: Someone scrolls past your post, pauses, and drops a comment—"How much?" They\'re interested. They\'re ready. But you\'re busy, or it\'s midnight, or you just missed the notification. By the time you reply, they\'ve forgotten about you. That moment is gone forever. We never let that happen. Our AI responds instantly, captures their info, and moves them into your sales pipeline before they scroll to the next post.',
            features: [
                'Replies to Comments in Seconds, Not Hours',
                'Turns Story Mentions Into Conversations',
                'Qualifies Leads Through Smart DM Flows',
                'Works on Posts, Reels, and Ads'
            ],
            benefits: [
                'Capture Every Single Interested Follower',
                '3x Your Engagement Without Extra Work',
                'Build Your Email List on Autopilot',
                'Sell Products While You Create Content'
            ],
            faq: [
                { question: 'Will this get me banned?', answer: 'No, we only use approved Meta automation tools that are 100% compliant.' },
                { question: 'Can it reply to comments on ads?', answer: 'Yes, it works on organic posts, reels, and paid ads.' }
            ],
            crisisSolved: 'Here\'s a painful truth: 70% of people who take the time to comment on your post or DM you will never hear back. They gave you attention—the most valuable currency online—and you ignored them. They didn\'t leave because your product was bad. They left because you were slow. We fix that permanently.',
            workflow: [
                'Day 1: Audit Your Instagram Profile & Content',
                'Day 2-3: Design Custom DM & Comment Flows',
                'Day 4-5: Build Lead Capture & CRM Integration',
                'Day 6-7: Launch, Test & Optimize'
            ],
            costOfInaction: 'Right now, every post you make is a half-open door. People knock, but nobody answers. Your competitors? They answer within seconds. And once a follower engages with them, you\'ve lost your chance. This isn\'t about convenience—it\'s about survival in the attention economy.',
            psychologicalHook: 'They commented. They\'re interested. Will you answer—or will they find someone who does?'
        },
        ar: {
            id: 'instagram-ai-chatbot',
            icon: '📸',
            title: 'أتمتة انستغرام',
            description: 'فكّر في هذا: شخص يمر على منشورك، يتوقف، ويكتب تعليق—"بكم؟" مهتم. جاهز. لكنك مشغول، أو الوقت متأخر، أو فاتك الإشعار. بحلول الوقت الذي ترد فيه، نسيك. هذه اللحظة ضاعت إلى الأبد. نحن لا ندع هذا يحدث. الذكاء الاصطناعي يرد فوراً، يجمع المعلومات، وينقلهم لمسار المبيعات قبل أن يمرروا للمنشور التالي.',
            features: [
                'يرد على التعليقات بثوانٍ، ليس ساعات',
                'يحوّل إشارات الستوري إلى محادثات',
                'يؤهل العملاء عبر رسائل ذكية',
                'يعمل على المنشورات، الريلز، والإعلانات'
            ],
            benefits: [
                'التقط كل متابع مهتم بدون استثناء',
                'ضاعف تفاعلك 3 مرات بدون جهد إضافي',
                'ابني قائمة بريدك تلقائياً',
                'بع منتجاتك وأنت تصنع المحتوى'
            ],
            faq: [
                { question: 'هل سيتسبب هذا في حظري؟', answer: 'لا، نحن نستخدم فقط أدوات أتمتة Meta المعتمدة والمتوافقة بنسبة 100%.' },
                { question: 'هل يمكنه الرد على تعليقات الإعلانات؟', answer: 'نعم، يعمل على المنشورات العادية والريلز والإعلانات المدفوعة.' }
            ],
            crisisSolved: 'إليك حقيقة مؤلمة: 70% من الناس الذين يأخذون وقتاً للتعليق أو مراسلتك لن يسمعوا رداً. منحوك اهتمامهم—أغلى عملة على الإنترنت—وتجاهلتهم. لم يغادروا لأن منتجك سيئ. غادروا لأنك كنت بطيئاً. نحن نصلح هذا نهائياً.',
            workflow: [
                'اليوم 1: تدقيق حسابك ومحتواك',
                'اليوم 2-3: تصميم مسارات الرد على DM والتعليقات',
                'اليوم 4-5: بناء نظام التقاط العملاء وربط CRM',
                'اليوم 6-7: الإطلاق والاختبار والتحسين'
            ],
            costOfInaction: 'الآن، كل منشور تنشره هو باب نصف مفتوح. الناس يطرقون، لكن لا أحد يرد. منافسوك؟ يردون في ثوانٍ. وبمجرد أن يتفاعل معهم متابع، خسرت فرصتك. هذا ليس رفاهية—هذا بقاء في اقتصاد الانتباه.',
            psychologicalHook: 'علّقوا. مهتمون. هل سترد—أم سيجدون من يرد؟'
        },
        de: {
            id: 'instagram-ai-chatbot',
            icon: '📸',
            title: 'Instagram Automatisierung',
            description: 'Denken Sie darüber nach: Jemand scrollt an Ihrem Beitrag vorbei, hält an und kommentiert—"Wie viel?" Interessiert. Bereit. Aber Sie sind beschäftigt, es ist Mitternacht, oder Sie haben die Benachrichtigung verpasst. Bis Sie antworten, hat er Sie vergessen. Dieser Moment ist für immer vorbei. Das lassen wir nicht zu. Unsere KI antwortet sofort, erfasst die Daten und bringt sie in Ihre Verkaufspipeline, bevor sie zum nächsten Post scrollen.',
            features: [
                'Antwortet auf Kommentare in Sekunden, nicht Stunden',
                'Verwandelt Story-Erwähnungen in Gespräche',
                'Qualifiziert Leads durch smarte DM-Flüsse',
                'Funktioniert bei Posts, Reels und Anzeigen'
            ],
            benefits: [
                'Erfassen Sie jeden interessierten Follower',
                '3x Engagement ohne zusätzliche Arbeit',
                'Bauen Sie Ihre E-Mail-Liste automatisch auf',
                'Verkaufen Sie Produkte während Sie Content erstellen'
            ],
            faq: [
                { question: 'Werde ich dadurch gesperrt?', answer: 'Nein, wir verwenden nur genehmigte Meta-Automatisierungstools, die zu 100% konform sind.' },
                { question: 'Kann es auf Kommentare bei Anzeigen antworten?', answer: 'Ja, es funktioniert bei organischen Beiträgen, Reels und bezahlten Anzeigen.' }
            ],
            crisisSolved: 'Hier eine schmerzhafte Wahrheit: 70% der Menschen, die kommentieren oder Ihnen eine DM schicken, hören nie zurück. Sie haben Ihnen Aufmerksamkeit geschenkt—die wertvollste Währung online—und Sie haben sie ignoriert. Sie sind nicht gegangen, weil Ihr Produkt schlecht war. Sie sind gegangen, weil Sie langsam waren. Das beheben wir dauerhaft.',
            workflow: [
                'Tag 1: Ihr Instagram-Profil & Content analysieren',
                'Tag 2-3: DM- & Kommentar-Antwortflüsse designen',
                'Tag 4-5: Lead-Erfassung & CRM-Integration aufbauen',
                'Tag 6-7: Starten, Testen & Optimieren'
            ],
            costOfInaction: 'Gerade jetzt ist jeder Beitrag eine halb offene Tür. Menschen klopfen, aber niemand antwortet. Ihre Konkurrenten? Antworten in Sekunden. Sobald ein Follower mit ihnen interagiert, haben Sie Ihre Chance verloren. Das ist keine Bequemlichkeit—das ist Überleben in der Aufmerksamkeitsökonomie.',
            psychologicalHook: 'Sie haben kommentiert. Sie sind interessiert. Werden Sie antworten—oder werden sie jemanden finden, der antwortet?'
        },
        fr: {
            id: 'instagram-ai-chatbot',
            icon: '📸',
            title: 'Automatisation Instagram',
            description: 'Pensez-y: Quelqu\'un fait défiler votre post, s\'arrête et commente—"Combien?" Intéressé. Prêt. Mais vous êtes occupé, c\'est minuit, ou vous avez raté la notification. Le temps de répondre, il vous a oublié. Ce moment est parti pour toujours. Nous ne laissons pas cela arriver. Notre IA répond instantanément, capture les infos et les déplace dans votre pipeline avant qu\'ils passent au post suivant.',
            features: [
                'Répond aux commentaires en secondes, pas en heures',
                'Transforme les mentions Story en conversations',
                'Qualifie les leads via des flux DM intelligents',
                'Fonctionne sur posts, reels et publicités'
            ],
            benefits: [
                'Capturez chaque follower intéressé',
                '3x l\'engagement sans travail supplémentaire',
                'Construisez votre liste email en autopilote',
                'Vendez des produits pendant que vous créez du contenu'
            ],
            faq: [
                { question: 'Est-ce que cela va me faire bannir?', answer: 'Non, nous utilisons uniquement des outils d\'automatisation Meta approuvés et 100% conformes.' },
                { question: 'Peut-il répondre aux commentaires sur les publicités?', answer: 'Oui, cela fonctionne sur les posts organiques, les reels et les publicités payantes.' }
            ],
            crisisSolved: 'Voici une vérité douloureuse: 70% des gens qui prennent le temps de commenter ou vous envoyer un DM n\'auront jamais de réponse. Ils vous ont donné leur attention—la monnaie la plus précieuse en ligne—et vous les avez ignorés. Ils ne sont pas partis parce que votre produit était mauvais. Ils sont partis parce que vous étiez lent. Nous réglons ça définitivement.',
            workflow: [
                'Jour 1: Audit de votre profil Instagram & contenu',
                'Jour 2-3: Conception des flux DM & commentaires',
                'Jour 4-5: Construction capture leads & intégration CRM',
                'Jour 6-7: Lancement, test & optimisation'
            ],
            costOfInaction: 'En ce moment, chaque post est une porte à moitié ouverte. Les gens frappent, mais personne ne répond. Vos concurrents? Répondent en secondes. Dès qu\'un follower interagit avec eux, vous avez perdu votre chance. Ce n\'est pas du confort—c\'est de la survie dans l\'économie de l\'attention.',
            psychologicalHook: 'Ils ont commenté. Ils sont intéressés. Répondrez-vous—ou trouveront-ils quelqu\'un qui répond?'
        },
        it: {
            id: 'instagram-ai-chatbot',
            icon: '📸',
            title: 'Automazione Instagram',
            description: 'Pensa a questo: Qualcuno scorre oltre il tuo post, si ferma e commenta—"Quanto costa?" Interessato. Pronto. Ma sei occupato, è mezzanotte, o hai perso la notifica. Quando rispondi, ti ha dimenticato. Quel momento è perso per sempre. Non lasciamo che succeda. La nostra IA risponde istantaneamente, cattura i dati e li sposta nella tua pipeline prima che scorrano al post successivo.',
            features: [
                'Risponde ai commenti in secondi, non ore',
                'Trasforma le menzioni delle Story in conversazioni',
                'Qualifica i lead tramite flussi DM intelligenti',
                'Funziona su post, reel e pubblicità'
            ],
            benefits: [
                'Cattura ogni follower interessato',
                '3x l\'engagement senza lavoro extra',
                'Costruisci la tua lista email in autopilota',
                'Vendi prodotti mentre crei contenuti'
            ],
            faq: [
                { question: 'Questo mi farà bannare?', answer: 'No, utilizziamo solo strumenti di automazione Meta approvati e conformi al 100%.' },
                { question: 'Può rispondere ai commenti sugli annunci?', answer: 'Sì, funziona su post organici, reel e annunci a pagamento.' }
            ],
            crisisSolved: 'Ecco una verità dolorosa: il 70% delle persone che si prendono il tempo di commentare o mandarti un DM non avrà mai risposta. Ti hanno dato la loro attenzione—la valuta più preziosa online—e li hai ignorati. Non se ne sono andati perché il tuo prodotto era scadente. Se ne sono andati perché eri lento. Risolviamo questo definitivamente.',
            workflow: [
                'Giorno 1: Audit del tuo profilo Instagram & contenuti',
                'Giorno 2-3: Progettazione flussi DM & commenti',
                'Giorno 4-5: Costruzione acquisizione lead & integrazione CRM',
                'Giorno 6-7: Lancio, test & ottimizzazione'
            ],
            costOfInaction: 'Proprio ora, ogni post che fai è una porta semiaperta. Le persone bussano, ma nessuno risponde. I tuoi concorrenti? Rispondono in secondi. Appena un follower interagisce con loro, hai perso la tua occasione. Questa non è comodità—è sopravvivenza nell\'economia dell\'attenzione.',
            psychologicalHook: 'Hanno commentato. Sono interessati. Risponderai—o troveranno qualcuno che risponde?'
        },
        hi: {
            id: 'instagram-ai-chatbot',
            icon: '📸',
            title: 'Instagram ऑटोमेशन',
            description: 'यह सोचिए: कोई आपकी पोस्ट पर रुकता है, रुकता है, और कमेंट करता है—"कितने का?" दिलचस्पी. तैयार. लेकिन आप व्यस्त हैं, रात है, या नोटिफिकेशन मिस हो गई. जब आप जवाब देते हैं, वो आपको भूल गया. वो पल हमेशा के लिए चला गया. हम ऐसा होने नहीं देते. हमारा AI तुरंत जवाब देता है, डेटा कैप्चर करता है, और उन्हें सेल्स पाइपलाइन में ले जाता है.',
            features: [
                'सेकंडों में कमेंट्स का जवाब, घंटों में नहीं',
                'स्टोरी मेंशन को बातचीत में बदलता है',
                'स्मार्ट DM फ्लो से लीड क्वालिफाई करता है',
                'पोस्ट्स, रील्स और एड्स पर काम करता है'
            ],
            benefits: [
                'हर इंटरेस्टेड फॉलोवर को कैप्चर करें',
                'बिना एक्स्ट्रा मेहनत 3x एंगेजमेंट',
                'ऑटोपायलट पर ईमेल लिस्ट बनाएं',
                'कंटेंट बनाते समय प्रोडक्ट्स बेचें'
            ],
            faq: [
                { question: 'क्या इससे मैं प्रतिबंधित हो जाऊंगा?', answer: 'नहीं, हम केवल अनुमोदित Meta स्वचालन टूल का उपयोग करते हैं जो 100% अनुपालन करते हैं।' },
                { question: 'क्या यह विज्ञापनों पर टिप्पणियों का उत्तर दे सकता है?', answer: 'हाँ, यह ऑर्गेनिक पोस्ट, रील्स और भुगतान किए गए विज्ञापनों पर काम करता है।' }
            ],
            crisisSolved: 'यह दर्दनाक सच्चाई है: 70% लोग जो कमेंट या DM करते हैं, उन्हें कभी जवाब नहीं मिलता. उन्होंने आपको अपना ध्यान दिया—ऑनलाइन की सबसे कीमती करेंसी—और आपने उन्हें इग्नोर किया. वो नहीं गए क्योंकि आपका प्रोडक्ट खराब था. वो गए क्योंकि आप धीमे थे. हम इसे हमेशा के लिए ठीक करते हैं.',
            workflow: [
                'दिन 1: आपके Instagram प्रोफाइल और कंटेंट का ऑडिट',
                'दिन 2-3: DM और कमेंट फ्लो डिज़ाइन',
                'दिन 4-5: लीड कैप्चर और CRM इंटीग्रेशन बनाना',
                'दिन 6-7: लॉन्च, टेस्ट और ऑप्टिमाइज़'
            ],
            costOfInaction: 'अभी, आपकी हर पोस्ट आधा खुला दरवाजा है. लोग दस्तक देते हैं, लेकिन कोई जवाब नहीं देता. आपके प्रतिस्पर्धी? सेकंडों में जवाब देते हैं. जैसे ही कोई फॉलोवर उनसे बात करता है, आपने अपना मौका खो दिया. यह सुविधा नहीं—यह अटेंशन इकॉनोमी में सरवाइवल है.',
            psychologicalHook: 'उन्होंने कमेंट किया. वो इंटरेस्टेड हैं. क्या आप जवाब देंगे—या वो किसी और को ढूंढेंगे जो जवाब दे?'
        },
        ms: {
            id: 'instagram-ai-chatbot',
            icon: '📸',
            title: 'Automasi Instagram',
            description: 'Fikirkan ini: Seseorang scroll post anda, berhenti, dan komen—"Berapa?" Berminat. Sedia. Tapi anda sibuk, tengah malam, atau terlepas notifikasi. Bila anda balas, dia dah lupa. Moment itu hilang selamanya. Kami tidak biarkan ini berlaku. AI kami balas serta-merta, tangkap info, dan pindahkan mereka ke pipeline jualan sebelum mereka scroll ke post seterusnya.',
            features: [
                'Balas Komen dalam Saat, Bukan Jam',
                'Tukar Sebutan Story Jadi Perbualan',
                'Layakkan Lead Melalui Aliran DM Pintar',
                'Berfungsi pada Post, Reels dan Iklan'
            ],
            benefits: [
                'Tangkap Setiap Pengikut yang Berminat',
                '3x Penglibatan Tanpa Kerja Tambahan',
                'Bina Senarai Email secara Autopilot',
                'Jual Produk Semasa Anda Cipta Kandungan'
            ],
            faq: [
                { question: 'Adakah ini akan membuatkan saya disekat?', answer: 'Tidak, kami hanya menggunakan alat automasi Meta yang diluluskan dan 100% patuh.' },
                { question: 'Bolehkah ia membalas komen pada iklan?', answer: 'Ya, ia berfungsi pada hantaran organik, reels, dan iklan berbayar.' }
            ],
            crisisSolved: 'Inilah kebenaran yang menyakitkan: 70% orang yang mengambil masa untuk komen atau DM anda tidak akan pernah dapat jawapan. Mereka beri anda perhatian—mata wang paling berharga dalam talian—dan anda abaikan mereka. Mereka tidak pergi kerana produk anda buruk. Mereka pergi kerana anda lambat. Kami selesaikan ini secara kekal.',
            workflow: [
                'Hari 1: Audit Profil Instagram & Kandungan Anda',
                'Hari 2-3: Reka Bentuk Aliran DM & Komen',
                'Hari 4-5: Bina Sistem Tangkap Lead & Integrasi CRM',
                'Hari 6-7: Lancar, Uji & Optimum'
            ],
            costOfInaction: 'Sekarang, setiap post adalah pintu separuh terbuka. Orang ketuk, tapi tiada siapa jawab. Pesaing anda? Jawab dalam saat. Sebaik sahaja follower berinteraksi dengan mereka, anda dah hilang peluang anda. Ini bukan kemudahan—ini kelangsungan dalam ekonomi perhatian.',
            psychologicalHook: 'Mereka komen. Mereka berminat. Adakah anda akan jawab—atau mereka akan cari seseorang yang jawab?'
        }
    },
    'messenger-ai-chatbot': {
        en: {
            id: 'messenger-ai-chatbot',
            icon: '🔵',
            title: 'Messenger AI Bot',
            description: 'You spend $500 on a Facebook ad. 100 people click. 10 send a message. But you\'re in a meeting, so you reply 3 hours later. By then, 8 of them have moved on. Sound familiar? Now imagine this: Every single person who clicks gets an instant reply. They\'re qualified, nurtured, and moved toward purchase—automatically. That\'s what we build. Your ads finally work the way they should.',
            features: [
                'Instant Reply to Every Ad Click',
                'Smart Lead Qualification Flows',
                'Recover Abandoned Conversations',
                'Works 24/7 Without Human Intervention'
            ],
            benefits: [
                'Get 5x More Leads From Same Ad Spend',
                '90% Message Open Rate (vs 20% Email)',
                'Cut Your Cost Per Lead by 40%',
                'Never Waste Another Ad Dollar'
            ],
            faq: [
                { question: 'Can I send broadcasts?', answer: 'Yes, compliant with Facebook\'s 24-hour rule and recurring notifications.' },
                { question: 'Does it work for support?', answer: 'Absolutely, it can handle thousands of support tickets simultaneously.' }
            ],
            crisisSolved: 'Facebook ads are expensive. Wasted ad clicks are criminal. Every person who clicks your ad and doesn\'t get an instant response is money thrown away. Most businesses lose 80% of their Messenger leads to slow response times. We make sure that never happens to you. Every click becomes a conversation. Every conversation becomes an opportunity.',
            workflow: [
                'Day 1: Audit Your Ad Campaigns',
                'Day 2-3: Build Your Messenger Funnel',
                'Day 4: Connect to Your CRM',
                'Day 5: Launch and Start Converting'
            ],
            costOfInaction: 'Every day you run ads without Messenger automation is a day you\'re paying for clicks that go nowhere. Your competitors are turning the same clicks into customers while you\'re still manually typing replies. The math is simple: automate or lose money.',
            psychologicalHook: 'You paid for that click. Are you going to let it walk away?'
        },
        ar: {
            id: 'messenger-ai-chatbot',
            icon: '🔵',
            title: 'روبوت ماسنجر الذكي',
            description: 'تنفق 500$ على إعلان فيسبوك. 100 شخص نقروا. 10 أرسلوا رسالة. لكنك في اجتماع، فترد بعد 3 ساعات. 8 منهم انتقلوا لغيرك. مألوف؟ تخيل هذا: كل من نقر يحصل على رد فوري. يتم تأهيله، رعايته، وتوجيهه للشراء—تلقائياً. هذا ما نبنيه. إعلاناتك أخيراً ستعمل كما يجب.',
            features: [
                'رد فوري على كل نقرة إعلان',
                'مسارات تأهيل عملاء ذكية',
                'استعادة المحادثات المتروكة',
                'يعمل 24/7 بدون تدخل بشري'
            ],
            benefits: [
                'احصل على 5 أضعاف العملاء من نفس الإنفاق',
                'معدل فتح 90% (مقابل 20% للإيميل)',
                'خفض تكلفة العميل 40%',
                'لا تضيع دولار إعلان آخر'
            ],
            faq: [
                { question: 'هل يمكنني إرسال رسائل جماعية؟', answer: 'نعم، بما يتوافق مع قاعدة 24 ساعة لفيسبوك والإشعارات المتكررة.' },
                { question: 'هل يعمل للدعم الفني؟', answer: 'بالتأكيد، يمكنه التعامل مع آلاف تذاكر الدعم في وقت واحد.' }
            ],
            crisisSolved: 'إعلانات فيسبوك غالية. إضاعة النقرات جريمة. كل شخص ينقر على إعلانك ولا يحصل على رد فوري هو مال ضائع. معظم الشركات تخسر 80% من عملاء ماسنجر بسبب بطء الرد. نتأكد أن هذا لن يحدث لك. كل نقرة تصبح محادثة. كل محادثة تصبح فرصة.',
            workflow: [
                'اليوم 1: نفحص حملاتك الإعلانية',
                'اليوم 2-3: نبني مسار ماسنجر',
                'اليوم 4: نربط بـ CRM',
                'اليوم 5: نطلق ونبدأ التحويل'
            ],
            costOfInaction: 'كل يوم تشغل إعلانات بدون أتمتة ماسنجر هو يوم تدفع فيه لنقرات لا تذهب لأي مكان. منافسوك يحولون نفس النقرات لعملاء بينما أنت لا زلت تكتب الردود يدوياً. المعادلة بسيطة: أتمت أو اخسر المال.',
            psychologicalHook: 'دفعت لهذه النقرة. هل ستتركها تذهب؟'
        },
        de: {
            id: 'messenger-ai-chatbot',
            icon: '🔵',
            title: 'Messenger KI-Bot',
            description: 'Sie geben 500€ für eine Facebook-Anzeige aus. 100 Leute klicken. 10 schicken eine Nachricht. Aber Sie sind in einem Meeting, also antworten Sie 3 Stunden später. Bis dahin sind 8 von ihnen weitergezogen. Kommt Ihnen das bekannt vor? Stellen Sie sich vor: Jeder, der klickt, bekommt sofort eine Antwort. Er wird qualifiziert, gepflegt und zum Kauf geführt—automatisch. Das bauen wir. Ihre Anzeigen funktionieren endlich so, wie sie sollten.',
            features: [
                'Sofortige Antwort auf jeden Anzeigenklick',
                'Intelligente Lead-Qualifizierungsflüsse',
                'Verlassene Gespräche zurückholen',
                '24/7 ohne menschliches Eingreifen'
            ],
            benefits: [
                '5x mehr Leads bei gleichem Werbebudget',
                '90% Nachrichten-Öffnungsrate (vs 20% E-Mail)',
                'Kosten pro Lead um 40% senken',
                'Nie wieder einen Werbe-Euro verschwenden'
            ],
            faq: [
                { question: 'Kann ich Broadcasts senden?', answer: 'Ja, konform mit der 24-Stunden-Regel von Facebook und wiederkehrenden Benachrichtigungen.' },
                { question: 'Funktioniert es für den Support?', answer: 'Absolut, es kann Tausende von Support-Tickets gleichzeitig bearbeiten.' }
            ],
            crisisSolved: 'Facebook-Anzeigen sind teuer. Verschwendete Klicks sind kriminell. Jeder Mensch, der auf Ihre Anzeige klickt und keine sofortige Antwort bekommt, ist weggeworfenes Geld. Die meisten Unternehmen verlieren 80% ihrer Messenger-Leads durch langsame Antwortzeiten. Wir stellen sicher, dass Ihnen das nie passiert. Jeder Klick wird zum Gespräch. Jedes Gespräch wird zur Chance.',
            workflow: [
                'Tag 1: Ihre Werbekampagnen analysieren',
                'Tag 2-3: Messenger-Funnel bauen',
                'Tag 4: Mit CRM verbinden',
                'Tag 5: Starten und konvertieren'
            ],
            costOfInaction: 'Jeder Tag, an dem Sie Anzeigen ohne Messenger-Automatisierung schalten, ist ein Tag, an dem Sie für Klicks bezahlen, die nirgendwo hingehen. Ihre Wettbewerber verwandeln dieselben Klicks in Kunden, während Sie noch manuell Antworten tippen. Die Rechnung ist einfach: automatisieren oder Geld verlieren.',
            psychologicalHook: 'Sie haben für diesen Klick bezahlt. Lassen Sie ihn davonlaufen?'
        },
        fr: {
            id: 'messenger-ai-chatbot',
            icon: '🔵',
            title: 'Bot IA Messenger',
            description: 'Vous dépensez 500€ sur une publicité Facebook. 100 personnes cliquent. 10 envoient un message. Mais vous êtes en réunion, donc vous répondez 3 heures plus tard. À ce moment-là, 8 d\'entre eux sont passés à autre chose. Ça vous dit quelque chose? Imaginez: Chaque personne qui clique reçoit une réponse instantanée. Elle est qualifiée, nurtured et guidée vers l\'achat—automatiquement. C\'est ce que nous construisons. Vos pubs marchent enfin comme elles devraient.',
            features: [
                'Réponse instantanée à chaque clic pub',
                'Flux de qualification de leads intelligents',
                'Récupérer les conversations abandonnées',
                '24/7 sans intervention humaine'
            ],
            benefits: [
                '5x plus de leads avec le même budget pub',
                'Taux d\'ouverture 90% (vs 20% email)',
                'Réduire le coût par lead de 40%',
                'Ne gaspillez plus un seul euro pub'
            ],
            faq: [
                { question: 'Puis-je envoyer des diffusions?', answer: 'Oui, conforme à la règle des 24 heures de Facebook et aux notifications récurrentes.' },
                { question: 'Cela fonctionne-t-il pour le support?', answer: 'Absolument, il peut gérer des milliers de tickets de support simultanément.' }
            ],
            crisisSolved: 'Les pubs Facebook coûtent cher. Gaspiller des clics est criminel. Chaque personne qui clique sur votre pub sans réponse immédiate est de l\'argent jeté. La plupart des entreprises perdent 80% de leurs leads Messenger à cause de réponses lentes. On s\'assure que ça ne vous arrive jamais. Chaque clic devient une conversation. Chaque conversation devient une opportunité.',
            workflow: [
                'Jour 1: Audit de vos campagnes pub',
                'Jour 2-3: Construction du funnel Messenger',
                'Jour 4: Connexion au CRM',
                'Jour 5: Lancement et conversion'
            ],
            costOfInaction: 'Chaque jour où vous faites des pubs sans automation Messenger est un jour où vous payez pour des clics qui ne mènent nulle part. Vos concurrents transforment les mêmes clics en clients pendant que vous tapez encore des réponses manuellement. Le calcul est simple: automatisez ou perdez de l\'argent.',
            psychologicalHook: 'Vous avez payé pour ce clic. Allez-vous le laisser partir?'
        },
        it: {
            id: 'messenger-ai-chatbot',
            icon: '🔵',
            title: 'Bot IA Messenger',
            description: 'Spendi 500€ in una pubblicità Facebook. 100 persone cliccano. 10 inviano un messaggio. Ma sei in riunione, quindi rispondi 3 ore dopo. A quel punto, 8 di loro sono già andati altrove. Ti suona familiare? Immagina: Ogni persona che clicca riceve una risposta istantanea. Viene qualificata, nurturata e guidata verso l\'acquisto—automaticamente. Questo è ciò che costruiamo. Le tue ads finalmente funzionano come dovrebbero.',
            features: [
                'Risposta Istantanea ad Ogni Clic Pubblicità',
                'Flussi Intelligenti di Qualificazione Lead',
                'Recupera Conversazioni Abbandonate',
                '24/7 Senza Intervento Umano'
            ],
            benefits: [
                '5x Più Lead con lo Stesso Budget Pubblicità',
                'Tasso Apertura 90% (vs 20% Email)',
                'Riduci Costo per Lead del 40%',
                'Non Sprecare Più un Euro in Pubblicità'
            ],
            faq: [
                { question: 'Posso inviare broadcast?', answer: 'Sì, conforme alla regola delle 24 ore di Facebook e alle notifiche ricorrenti.' },
                { question: 'Funziona per il supporto?', answer: 'Assolutamente, può gestire migliaia di ticket di supporto contemporaneamente.' }
            ],
            crisisSolved: 'Le pubblicità Facebook costano care. Sprecare clic è criminale. Ogni persona che clicca sulla tua pubblicità senza risposta immediata è denaro buttato. La maggior parte delle aziende perde l\'80% dei lead Messenger per risposte lente. Ci assicuriamo che non ti succeda mai. Ogni clic diventa conversazione. Ogni conversazione diventa opportunità.',
            workflow: [
                'Giorno 1: Audit delle tue campagne pubblicitarie',
                'Giorno 2-3: Costruzione funnel Messenger',
                'Giorno 4: Connessione al CRM',
                'Giorno 5: Lancio e conversione'
            ],
            costOfInaction: 'Ogni giorno che fai pubblicità senza automazione Messenger è un giorno in cui paghi per clic che non portano da nessuna parte. I tuoi concorrenti trasformano gli stessi clic in clienti mentre tu ancora digiti risposte manuali. Il calcolo è semplice: automatizza o perdi soldi.',
            psychologicalHook: 'Hai pagato per quel clic. Lo lascerai andare via?'
        },
        hi: {
            id: 'messenger-ai-chatbot',
            icon: '🔵',
            title: 'Messenger AI बॉट',
            description: 'आप Facebook विज्ञापन पर ₹40,000 खर्च करते हैं। 100 लोग क्लिक करते हैं। 10 संदेश भेजते हैं। लेकिन आप मीटिंग में हैं, तो 3 घंटे बाद जवाब देते हैं। तब तक 8 जा चुके होते हैं। पहचाना? तसव्वुर करें: हर क्लिक करने वाले को तुरंत जवाब मिलता है। उन्हें क्वालिफाई किया जाता है, नर्चर किया जाता है, और खरीद की ओर ले जाया जाता है—ऑटोमैटिकली। यही हम बनाते हैं। आपके एड्स आखिरकार वैसे काम करते हैं जैसे उन्हें करना चाहिए।',
            features: [
                'हर एड क्लिक पर तुरंत जवाब',
                'स्मार्ट लीड क्वालिफिकेशन फ्लो',
                'छोड़ी गई बातचीत वापस लाएं',
                '24/7 बिना मानवीय हस्तक्षेप'
            ],
            benefits: [
                'समान एड बजट से 5x ज्यादा लीड',
                '90% ओपन रेट (vs 20% ईमेल)',
                'प्रति लीड लागत 40% कम',
                'फिर कभी एड रुपया बर्बाद न करें'
            ],
            faq: [
                { question: 'क्या मैं ब्रॉडकास्ट भेज सकता हूँ?', answer: 'हाँ, Facebook के 24-घंटे के नियम और आवर्ती सूचनाओं के अनुरूप।' },
                { question: 'क्या यह समर्थन के लिए काम करता है?', answer: 'बिल्कुल, यह एक साथ हजारों समर्थन टिकटों को संभाल सकता है।' }
            ],
            crisisSolved: 'Facebook एड्स महंगे हैं। क्लिक बर्बाद करना अपराध है। जो व्यक्ति आपके एड पर क्लिक करता है और तुरंत जवाब नहीं पाता, वह फेंका गया पैसा है। अधिकांश कंपनियां 80% Messenger लीड धीमे जवाब के कारण खो देती हैं। हम सुनिश्चित करते हैं कि आपके साथ ऐसा न हो। हर क्लिक बातचीत बन जाती है। हर बातचीत मौका बन जाती है।',
            workflow: [
                'दिन 1: आपकी एड कैम्पेन का ऑडिट',
                'दिन 2-3: Messenger फनल बिल्ड',
                'दिन 4: CRM से कनेक्ट',
                'दिन 5: लॉन्च और कन्वर्ट'
            ],
            costOfInaction: 'हर दिन जब आप Messenger ऑटोमेशन के बिना एड्स चलाते हैं, आप उन क्लिक्स के लिए भुगतान कर रहे हैं जो कहीं नहीं जाते। आपके प्रतिस्पर्धी वही क्लिक्स ग्राहकों में बदल रहे हैं जब आप अभी भी मैन्युअल जवाब टाइप कर रहे हैं। हिसाब सीधा है: ऑटोमेट करें या पैसा गंवाएं।',
            psychologicalHook: 'आपने उस क्लिक के लिए भुगतान किया। क्या आप उसे जाने देंगे?'
        },
        ms: {
            id: 'messenger-ai-chatbot',
            icon: '🔵',
            title: 'Bot AI Messenger',
            description: 'Anda belanja RM2000 untuk iklan Facebook. 100 orang klik. 10 hantar mesej. Tapi anda dalam mesyuarat, jadi anda balas 3 jam kemudian. Masa tu, 8 dah pergi tempat lain. Biasa dengar? Bayangkan: Setiap orang yang klik dapat jawapan serta-merta. Mereka dilayak, dinurture, dan dibawa ke pembelian—secara automatik. Inilah yang kami bina. Iklan anda akhirnya berfungsi macam sepatutnya.',
            features: [
                'Jawapan Segera untuk Setiap Klik Iklan',
                'Aliran Kelayakan Lead Pintar',
                'Pulih Perbualan yang Ditinggalkan',
                '24/7 Tanpa Campur Tangan Manusia'
            ],
            benefits: [
                '5x Lebih Banyak Lead dengan Bajet Iklan Sama',
                'Kadar Buka 90% (vs 20% Email)',
                'Kurangkan Kos Per Lead 40%',
                'Jangan Bazir Satu Sen Iklan Lagi'
            ],
            faq: [
                { question: 'Bolehkah saya menghantar siaran?', answer: 'Ya, patuh dengan peraturan 24 jam Facebook dan pemberitahuan berulang.' },
                { question: 'Adakah ia berfungsi untuk sokongan?', answer: 'Sudah tentu, ia boleh mengendalikan beribu-ribu tiket sokongan secara serentak.' }
            ],
            crisisSolved: 'Iklan Facebook mahal. Membazir klik adalah jenayah. Setiap orang yang klik iklan anda tanpa dapat jawapan segera adalah wang dibuang. Kebanyakan perniagaan kehilangan 80% lead Messenger kerana respons lambat. Kami pastikan ini tidak berlaku pada anda. Setiap klik jadi perbualan. Setiap perbualan jadi peluang.',
            workflow: [
                'Hari 1: Audit Kempen Iklan Anda',
                'Hari 2-3: Bina Funnel Messenger',
                'Hari 4: Sambung ke CRM',
                'Hari 5: Lancar dan Tukar'
            ],
            costOfInaction: 'Setiap hari anda buat iklan tanpa automasi Messenger adalah hari anda bayar untuk klik yang tidak ke mana-mana. Pesaing anda tukarkan klik yang sama jadi pelanggan semasa anda masih taip jawapan manual. Kiraannya mudah: automatikkan atau rugi duit.',
            psychologicalHook: 'Anda dah bayar untuk klik tu. Anda nak biarkan dia pergi?'
        }
    },
    'nextjs-development': {
        en: {
            id: 'nextjs-development',
            icon: '⚡',
            title: 'Next.js Development',
            description: 'Your competitor\'s website loads in 1.5 seconds. Yours takes 6. Who do you think Google ranks higher? Who do you think customers trust more? This isn\'t about having a "nice" website—it\'s about survival. We build with Next.js, the same technology that powers Netflix, Uber, and TikTok. Your new website won\'t just look professional. It will load before your customers can blink.',
            features: [
                'Loads in Under 1.5 Seconds, Guaranteed',
                'SEO-Optimized From Day One',
                'Works Perfectly on Every Device',
                'Scales as You Grow'
            ],
            benefits: [
                '95+ Google PageSpeed Score',
                'First Page Google Rankings',
                'Lower Bounce Rates',
                'Higher Conversion Rates'
            ],
            faq: [
                { question: 'Do you design the UI too?', answer: 'Yes, we provide full UI/UX design and development.' },
                { question: 'Is it better than WordPress?', answer: 'For speed, security, and custom functionality, Next.js is vastly superior to WordPress.' }
            ],
            crisisSolved: 'Here\'s a fact that should scare you: 53% of visitors leave if your site takes more than 3 seconds to load. They don\'t wait. They don\'t come back. They go to your competitor. Your slow website isn\'t just a technical problem—it\'s a money problem. We solve it permanently with enterprise-grade Next.js architecture.',
            workflow: [
                'Day 1-3: Design That Converts',
                'Day 4-7: Build With Next.js',
                'Day 8-9: Speed Optimization',
                'Day 10: Launch Your New Site'
            ],
            costOfInaction: 'Every day your current website is slow, you\'re actively pushing customers away. Google penalizes slow sites. Customers don\'t trust slow sites. You\'re not just losing visitors—you\'re losing credibility. And credibility once lost is almost impossible to rebuild.',
            psychologicalHook: 'Your website is your first impression. What is it saying about you right now?'
        },
        ar: {
            id: 'nextjs-development',
            icon: '⚡',
            title: 'تطوير Next.js',
            description: 'موقع منافسك يحمَل في 1.5 ثانية. موقعك يأخذ 6. برأيك من سيرتبه جوجل أعلى؟ من سيثق به العملاء؟ هذا ليس عن امتلاك موقع "جميل"—هذا عن البقاء. نبني بتقنية Next.js، نفس التقنية التي تشغل Netflix وUber وTikTok. موقعك الجديد لن يكون احترافياً فقط. سيحمَل قبل أن يرمش عملاؤك.',
            features: [
                'يحمَل في أقل من 1.5 ثانية، مضمون',
                'مُحسّن لـ SEO من اليوم الأول',
                'يعمل بشكل مثالي على كل جهاز',
                'يتوسع مع نموك'
            ],
            benefits: [
                'نتيجة PageSpeed 95+',
                'الصفحة الأولى في جوجل',
                'معدل ارتداد أقل',
                'معدل تحويل أعلى'
            ],
            faq: [
                { question: 'هل تصممون الواجهة أيضاً؟', answer: 'نعم، نقدم تصميم وتطوير UI/UX كامل.' },
                { question: 'هل هو أفضل من ووردبريس؟', answer: 'بالنسبة للسرعة والأمان والوظائف المخصصة، Next.js يتفوق بمراحل على ووردبريس.' }
            ],
            crisisSolved: 'إليك حقيقة يجب أن تخيفك: 53% من الزوار يغادرون إذا استغرق موقعك أكثر من 3 ثوانٍ. لا ينتظرون. لا يعودون. يذهبون لمنافسك. موقعك البطيء ليس مشكلة تقنية—هو مشكلة مال. نحلها نهائياً بهندسة Next.js.',
            workflow: [
                'اليوم 1-3: تصميم يحوّل',
                'اليوم 4-7: بناء بـ Next.js',
                'اليوم 8-9: تحسين السرعة',
                'اليوم 10: إطلاق موقعك الجديد'
            ],
            costOfInaction: 'كل يوم موقعك بطيء، أنت تدفع العملاء بعيداً. جوجل يعاقب المواقع البطيئة. العملاء لا يثقون بالمواقع البطيئة. لست تخسر زوار فقط—أنت تخسر مصداقية. والمصداقية عندما تضيع يستحيل استردادها.',
            psychologicalHook: 'موقعك هو انطباعك الأول. ماذا يقول عنك الآن؟'
        },
        de: {
            id: 'nextjs-development',
            icon: '⚡',
            title: 'Next.js Entwicklung',
            description: 'Die Website Ihres Konkurrenten lädt in 1,5 Sekunden. Ihre braucht 6. Wen denken Sie, rankt Google höher? Wem vertrauen Kunden mehr? Es geht nicht um eine "schöne" Website—es geht ums Überleben. Wir bauen mit Next.js, der Technologie hinter Netflix, Uber und TikTok. Ihre neue Website sieht nicht nur professionell aus—sie lädt, bevor Ihre Kunden blinzeln.',
            features: [
                'Lädt in unter 1,5 Sekunden, garantiert',
                'SEO-optimiert vom ersten Tag',
                'Funktioniert perfekt auf jedem Gerät',
                'Wächst mit Ihrem Unternehmen'
            ],
            benefits: [
                'Google PageSpeed Score 95+',
                'Erste Seite bei Google',
                'Niedrigere Absprungraten',
                'Höhere Konversionsraten'
            ],
            faq: [
                { question: 'Ist es gut für SEO?', answer: 'Next.js ist der Goldstandard für SEO mit serverseitigem Rendering.' },
                { question: 'Können Sie von WordPress migrieren?', answer: 'Ja, wir können Ihre Inhalte migrieren und gleichzeitig die Leistung massiv verbessern.' }
            ],
            crisisSolved: 'Hier ist eine Tatsache, die Sie erschrecken sollte: 53% der Besucher gehen, wenn Ihre Seite länger als 3 Sekunden lädt. Sie warten nicht. Sie kommen nicht zurück. Sie gehen zu Ihrem Konkurrenten. Ihre langsame Website ist kein technisches Problem—es ist ein Geldproblem. Wir lösen es dauerhaft mit Next.js-Architektur.',
            workflow: [
                'Tag 1-3: Design das konvertiert',
                'Tag 4-7: Entwicklung mit Next.js',
                'Tag 8-9: Geschwindigkeitsoptimierung',
                'Tag 10: Launch Ihrer neuen Seite'
            ],
            costOfInaction: 'Jeden Tag, an dem Ihre Website langsam ist, stoßen Sie aktiv Kunden weg. Google bestraft langsame Seiten. Kunden vertrauen langsamen Seiten nicht. Sie verlieren nicht nur Besucher—Sie verlieren Glaubwürdigkeit. Und Glaubwürdigkeit, einmal verloren, ist fast unmöglich wieder aufzubauen.',
            psychologicalHook: 'Ihre Website ist Ihr erster Eindruck. Was sagt sie gerade über Sie aus?'
        },
        fr: {
            id: 'nextjs-development',
            icon: '⚡',
            title: 'Développement Next.js',
            description: 'Le site de votre concurrent charge en 1,5 seconde. Le vôtre prend 6. Qui pensez-vous que Google classe plus haut? À qui les clients font-ils confiance? Ce n\'est pas une question d\'avoir un "beau" site—c\'est une question de survie. Nous construisons avec Next.js, la technologie derrière Netflix, Uber et TikTok. Votre site ne sera pas seulement professionnel—il chargera avant que vos clients clignent des yeux.',
            features: [
                'Charge en moins de 1,5 seconde, garanti',
                'Optimisé SEO dès le premier jour',
                'Fonctionne parfaitement sur tous les appareils',
                'Évolue avec votre croissance'
            ],
            benefits: [
                'Score Google PageSpeed 95+',
                'Première page Google',
                'Taux de rebond plus bas',
                'Taux de conversion plus élevés'
            ],
            faq: [
                { question: 'Est-ce bon pour le SEO?', answer: 'Next.js est la référence absolue pour le SEO grâce au rendu côté serveur.' },
                { question: 'Pouvez-vous migrer depuis WordPress?', answer: 'Oui, nous pouvons migrer votre contenu tout en améliorant massivement les performances.' }
            ],
            crisisSolved: 'Voici un fait qui devrait vous effrayer: 53% des visiteurs partent si votre site met plus de 3 secondes à charger. Ils n\'attendent pas. Ils ne reviennent pas. Ils vont chez votre concurrent. Votre site lent n\'est pas un problème technique—c\'est un problème d\'argent. Nous le résolvons définitivement avec une architecture Next.js.',
            workflow: [
                'Jour 1-3: Design qui convertit',
                'Jour 4-7: Construction avec Next.js',
                'Jour 8-9: Optimisation de vitesse',
                'Jour 10: Lancement de votre nouveau site'
            ],
            costOfInaction: 'Chaque jour où votre site est lent, vous repoussez activement des clients. Google pénalise les sites lents. Les clients ne font pas confiance aux sites lents. Vous ne perdez pas seulement des visiteurs—vous perdez de la crédibilité. Et la crédibilité une fois perdue est presque impossible à reconstruire.',
            psychologicalHook: 'Votre site web est votre première impression. Que dit-il de vous en ce moment?'
        },
        it: {
            id: 'nextjs-development',
            icon: '⚡',
            title: 'Sviluppo Next.js',
            description: 'Il sito del tuo concorrente carica in 1,5 secondi. Il tuo impiega 6. Chi pensi che Google posizioni più in alto? Di chi si fidano i clienti? Non si tratta di avere un sito "bello"—si tratta di sopravvivenza. Costruiamo con Next.js, la tecnologia dietro Netflix, Uber e TikTok. Il tuo nuovo sito non sarà solo professionale—caricherà prima che i tuoi clienti battano le palpebre.',
            features: [
                'Carica in meno di 1,5 secondi, garantito',
                'Ottimizzato SEO dal primo giorno',
                'Funziona perfettamente su ogni dispositivo',
                'Scala con la tua crescita'
            ],
            benefits: [
                'Punteggio Google PageSpeed 95+',
                'Prima pagina su Google',
                'Tassi di rimbalzo più bassi',
                'Tassi di conversione più alti'
            ],
            faq: [
                { question: 'È buono per il SEO?', answer: 'Next.js è lo standard d\'oro per il SEO con il rendering lato server.' },
                { question: 'Puoi migrare da WordPress?', answer: 'Sì, possiamo migrare i tuoi contenuti migliorando massicciamente le prestazioni.' }
            ],
            crisisSolved: 'Ecco un fatto che dovrebbe spaventarti: il 53% dei visitatori se ne va se il tuo sito impiega più di 3 secondi a caricare. Non aspettano. Non tornano. Vanno dal tuo concorrente. Il tuo sito lento non è un problema tecnico—è un problema di soldi. Lo risolviamo definitivamente con architettura Next.js.',
            workflow: [
                'Giorno 1-3: Design che converte',
                'Giorno 4-7: Sviluppo con Next.js',
                'Giorno 8-9: Ottimizzazione velocità',
                'Giorno 10: Lancio del tuo nuovo sito'
            ],
            costOfInaction: 'Ogni giorno che il tuo sito è lento, stai attivamente allontanando clienti. Google penalizza i siti lenti. I clienti non si fidano dei siti lenti. Non stai perdendo solo visitatori—stai perdendo credibilità. E la credibilità una volta persa è quasi impossibile da ricostruire.',
            psychologicalHook: 'Il tuo sito web è la tua prima impressione. Cosa sta dicendo di te in questo momento?'
        },
        hi: {
            id: 'nextjs-development',
            icon: '⚡',
            title: 'Next.js डेवलपमेंट',
            description: 'आपके प्रतिस्पर्धी की वेबसाइट 1.5 सेकंड में लोड होती है। आपकी 6 सेकंड लेती है। आपको क्या लगता है Google किसे ऊपर रैंक करेगा? ग्राहक किस पर भरोसा करेंगे? यह "सुंदर" वेबसाइट की बात नहीं—यह सरवाइवल की बात है। हम Next.js से बनाते हैं, Netflix, Uber और TikTok की तकनीक। आपकी नई वेबसाइट सिर्फ प्रोफेशनल नहीं दिखेगी—आपके ग्राहकों की आंख झपकने से पहले लोड हो जाएगी।',
            features: [
                '1.5 सेकंड से कम में लोड, गारंटीड',
                'पहले दिन से SEO-ऑप्टिमाइज़्ड',
                'हर डिवाइस पर परफेक्ट',
                'आपकी ग्रोथ के साथ स्केल'
            ],
            benefits: [
                'Google PageSpeed स्कोर 95+',
                'Google पर पहला पेज',
                'कम बाउंस रेट',
                'हाई कन्वर्जन रेट'
            ],
            faq: [
                { question: 'क्या यह SEO के लिए अच्छा है?', answer: 'सर्वर-साइड रेंडरिंग के साथ SEO के लिए Next.js स्वर्ण मानक है।' },
                { question: 'क्या आप वर्डप्रेस से माइग्रेट कर सकते हैं?', answer: 'हाँ, हम प्रदर्शन में बड़े पैमाने पर सुधार करते हुए आपकी सामग्री को माइग्रेट कर सकते हैं।' }
            ],
            crisisSolved: 'यह सच आपको डराना चाहिए: 53% विज़िटर चले जाते हैं अगर आपकी साइट 3 सेकंड से ज्यादा लेती है। वे इंतजार नहीं करते। वापस नहीं आते। आपके प्रतिस्पर्धी के पास जाते हैं। आपकी धीमी वेबसाइट तकनीकी समस्या नहीं—पैसे की समस्या है। हम इसे Next.js आर्किटेक्चर से स्थायी रूप से हल करते हैं।',
            workflow: [
                'दिन 1-3: कन्वर्ट करने वाला डिज़ाइन',
                'दिन 4-7: Next.js से डेवलपमेंट',
                'दिन 8-9: स्पीड ऑप्टिमाइज़ेशन',
                'दिन 10: आपकी नई साइट का लॉन्च'
            ],
            costOfInaction: 'हर दिन जब आपकी वेबसाइट धीमी है, आप ग्राहकों को सक्रिय रूप से दूर कर रहे हैं। Google धीमी साइट्स को पेनलाइज़ करता है। ग्राहक धीमी साइट्स पर भरोसा नहीं करते। आप सिर्फ विज़िटर नहीं खो रहे—आप विश्वसनीयता खो रहे हैं।',
            psychologicalHook: 'आपकी वेबसाइट आपकी पहली छाप है। यह अभी आपके बारे में क्या कह रही है?'
        },
        ms: {
            id: 'nextjs-development',
            icon: '⚡',
            title: 'Pembangunan Next.js',
            description: 'Laman web pesaing anda memuatkan dalam 1.5 saat. Anda ambil 6. Siapa yang anda rasa Google letakkan lebih tinggi? Siapa yang pelanggan percaya? Ini bukan tentang mempunyai laman "cantik"—ini tentang kelangsungan. Kami bina dengan Next.js, teknologi di sebalik Netflix, Uber dan TikTok. Laman baru anda bukan sekadar profesional—ia akan memuatkan sebelum pelanggan anda berkelip.',
            features: [
                'Muat dalam bawah 1.5 saat, dijamin',
                'Dioptimumkan SEO dari hari pertama',
                'Berfungsi sempurna pada setiap peranti',
                'Berkembang dengan pertumbuhan anda'
            ],
            benefits: [
                'Skor Google PageSpeed 95+',
                'Halaman pertama Google',
                'Kadar lantunan lebih rendah',
                'Kadar penukaran lebih tinggi'
            ],
            faq: [
                { question: 'Adakah ia baik untuk SEO?', answer: 'Next.js ialah standard emas untuk SEO dengan rendering sisi pelayan.' },
                { question: 'Bolehkah anda berpindah dari WordPress?', answer: 'Ya, kami boleh memindahkan kandungan anda sambil meningkatkan prestasi secara besar-besaran.' }
            ],
            crisisSolved: 'Inilah fakta yang patut menakutkan anda: 53% pelawat pergi jika laman anda mengambil lebih dari 3 saat untuk memuatkan. Mereka tidak tunggu. Mereka tidak kembali. Mereka pergi ke pesaing anda. Laman lambat anda bukan masalah teknikal—ia masalah wang. Kami selesaikannya secara kekal dengan seni bina Next.js.',
            workflow: [
                'Hari 1-3: Reka bentuk yang menukarkan',
                'Hari 4-7: Pembangunan dengan Next.js',
                'Hari 8-9: Pengoptimuman kelajuan',
                'Hari 10: Lancarkan laman baru anda'
            ],
            costOfInaction: 'Setiap hari laman web anda lambat, anda sedang menolak pelanggan. Google menghukum laman lambat. Pelanggan tidak percaya laman lambat. Anda bukan sekadar kehilangan pelawat—anda kehilangan kredibiliti. Dan kredibiliti sekali hilang hampir mustahil untuk dibina semula.',
            psychologicalHook: 'Laman web anda adalah kesan pertama anda. Apa yang ia katakan tentang anda sekarang?'
        }
    },
    'ai-automations': {
        en: {
            id: 'ai-automations',
            icon: '🤖',
            title: 'AI Automation',
            description: 'Your best employee spent 3 hours yesterday copying data from one spreadsheet to another. Your accountant spent half her day processing invoices manually. Your marketing team posted the same content 5 times because nobody automated the schedule. This is madness—and it\'s eating your profit. We build AI agents that handle the boring stuff: data entry, email sorting, report generation, content scheduling. They work 24/7, never make mistakes, and cost less than one coffee per day.',
            features: [
                'Eliminates Repetitive Data Tasks',
                'Automates Email Processing',
                'Generates Reports Automatically',
                'Connects All Your Apps Together'
            ],
            benefits: [
                'Save 40+ Hours Per Week, Per Employee',
                'Zero Human Errors on Automated Tasks',
                'Your Team Focuses on Growth, Not Admin',
                'ROI in Weeks, Not Months'
            ],
            faq: [
                { question: 'What tasks can be automated?', answer: 'Data entry, email processing, reporting, social media posting, and much more.' },
                { question: 'Is it expensive?', answer: 'It actually saves money by reducing labor costs and manual errors.' }
            ],
            crisisSolved: 'Here\'s the real problem: Your smartest, most expensive talent is wasting time on $10/hour tasks. Every hour they spend on manual data entry is an hour they\'re NOT spending on growing your business. This is why companies hit growth ceilings they can\'t explain. We break through that ceiling with AI agents that handle operations while humans do what humans do best—think, strategize, and create.',
            workflow: [
                'Day 1: We Map Your Manual Processes',
                'Day 2-4: Build Your Custom AI Agents',
                'Day 5: Connect to Your Existing Tools',
                'Day 6: Launch and Monitor'
            ],
            costOfInaction: 'Every manual task you don\'t automate is a choice to waste money. Your competitors are automating everything. They\'re faster, leaner, and their margins are growing while yours are shrinking. This isn\'t about technology—it\'s about survival. The companies that automate win. The ones that don\'t, disappear.',
            psychologicalHook: 'You didn\'t start a business to do data entry. Why are you still doing it?'
        },
        ar: {
            id: 'ai-automations',
            icon: '🤖',
            title: 'أتمتة الذكاء الاصطناعي',
            description: 'أفضل موظف عندك أمضى 3 ساعات البارحة ينسخ بيانات من جدول لآخر. المحاسب أمضت نصف يومها تعالج فواتير يدوياً. فريق التسويق نشر نفس المحتوى 5 مرات لأنه لا أحد أتمت الجدولة. هذا جنون—وهو يأكل أرباحك. نبني وكلاء ذكية تتولى الممل: إدخال البيانات، ترتيب البريد، إنشاء التقارير. تعمل 24/7، لا تخطئ أبداً، وتكلف أقل من قهوة واحدة يومياً.',
            features: [
                'تخلص من مهام البيانات المتكررة',
                'أتمتة معالجة البريد',
                'إنشاء التقارير تلقائياً',
                'تربط كل تطبيقاتك معاً'
            ],
            benefits: [
                'وفّر 40+ ساعة أسبوعياً، لكل موظف',
                'صفر أخطاء بشرية على المهام المؤتمتة',
                'فريقك يركز على النمو، ليس الإدارة',
                'عائد استثمار في أسابيع، ليس أشهر'
            ],
            faq: [
                { question: 'ما المهام التي يمكن أتمتتها؟', answer: 'إدخال البيانات، معالجة البريد الإلكتروني، إعداد التقارير، النشر على وسائل التواصل، وأكثر من ذلك بكثير.' },
                { question: 'هل هو مكلف؟', answer: 'في الواقع، إنه يوفر المال عن طريق تقليل تكاليف العمالة والأخطاء اليدوية.' }
            ],
            crisisSolved: 'إليك المشكلة الحقيقية: أذكى موظفيك وأغلاهم يضيعون وقتهم على مهام بدولارات. كل ساعة يقضونها في إدخال البيانات يدوياً هي ساعة لا يقضونها في نمو عملك. لهذا الشركات تصل لسقف نمو لا تفهمه. نحن نخترق هذا السقف بوكلاء ذكية تتولى العمليات بينما البشر يفعلون ما يجيدونه—يفكرون، يخططون، ويبدعون.',
            workflow: [
                'اليوم 1: نرسم عملياتك اليدوية',
                'اليوم 2-4: نبني وكلاءك الذكية المخصصة',
                'اليوم 5: نربط بأدواتك الحالية',
                'اليوم 6: نطلق ونراقب'
            ],
            costOfInaction: 'كل مهمة يدوية لا تؤتمتها هي اختيار لإضاعة المال. منافسوك يؤتمتون كل شيء. هم أسرع، أرشق، وهوامش ربحهم تنمو بينما هوامشك تتقلص. هذا ليس عن التقنية—هذا عن البقاء. الشركات التي تؤتمت تفوز. والتي لا تؤتمت، تختفي.',
            psychologicalHook: 'لم تبدأ عملك لتدخل بيانات. لماذا لا زلت تفعل ذلك؟'
        },
        de: {
            id: 'ai-automations',
            icon: '🤖',
            title: 'KI-Automatisierung',
            description: 'Ihr bester Mitarbeiter hat gestern 3 Stunden damit verbracht, Daten von einer Tabelle in eine andere zu kopieren. Ihre Buchhalterin hat den halben Tag Rechnungen manuell bearbeitet. Ihr Marketing-Team hat denselben Inhalt 5 Mal gepostet, weil niemand den Zeitplan automatisiert hat. Das ist Wahnsinn—und es frisst Ihren Gewinn. Wir bauen KI-Agenten, die das Langweilige übernehmen: Dateneingabe, E-Mail-Sortierung, Berichtserstellung. Sie arbeiten 24/7, machen nie Fehler und kosten weniger als ein Kaffee pro Tag.',
            features: [
                'Eliminiert repetitive Datenaufgaben',
                'Automatisiert E-Mail-Verarbeitung',
                'Erstellt Berichte automatisch',
                'Verbindet all Ihre Apps miteinander'
            ],
            benefits: [
                'Sparen Sie 40+ Stunden pro Woche, pro Mitarbeiter',
                'Null menschliche Fehler bei automatisierten Aufgaben',
                'Ihr Team fokussiert auf Wachstum, nicht Verwaltung',
                'ROI in Wochen, nicht Monaten'
            ],
            faq: [
                { question: 'Welche Tools verwenden Sie?', answer: 'Wir verwenden eine Kombination aus OpenAI, Make.com, n8n und maßgeschneiderten Python-Lösungen.' },
                { question: 'Ist es sicher?', answer: 'Ja, wir implementieren Datensicherheit auf Enterprise-Niveau und halten alle lokalen Vorschriften ein.' }
            ],
            crisisSolved: 'Hier ist das echte Problem: Ihre klügsten, teuersten Talente verschwenden Zeit mit 10€/Stunde-Aufgaben. Jede Stunde, die sie mit manueller Dateneingabe verbringen, ist eine Stunde, die sie NICHT mit dem Wachstum Ihres Unternehmens verbringen. Deshalb stoßen Unternehmen an Wachstumsgrenzen, die sie nicht erklären können. Wir durchbrechen diese Decke mit KI-Agenten, die Operationen übernehmen, während Menschen tun, was Menschen am besten können—denken, strategisieren, kreieren.',
            workflow: [
                'Tag 1: Wir kartieren Ihre manuellen Prozesse',
                'Tag 2-4: Bauen Ihrer maßgeschneiderten KI-Agenten',
                'Tag 5: Verbinden mit Ihren bestehenden Tools',
                'Tag 6: Launch und Monitoring'
            ],
            costOfInaction: 'Jede manuelle Aufgabe, die Sie nicht automatisieren, ist eine Entscheidung, Geld zu verschwenden. Ihre Wettbewerber automatisieren alles. Sie sind schneller, schlanker, und ihre Margen wachsen, während Ihre schrumpfen. Das hat nichts mit Technologie zu tun—es geht ums Überleben.',
            psychologicalHook: 'Sie haben Ihr Unternehmen nicht gegründet, um Daten einzugeben. Warum tun Sie es immer noch?'
        },
        fr: {
            id: 'ai-automations',
            icon: '🤖',
            title: 'Automatisation IA',
            description: 'Votre meilleur employé a passé 3 heures hier à copier des données d\'une feuille de calcul à une autre. Votre comptable a passé la moitié de sa journée à traiter des factures manuellement. Votre équipe marketing a posté le même contenu 5 fois parce que personne n\'a automatisé le planning. C\'est de la folie—et ça mange vos profits. Nous construisons des agents IA qui gèrent l\'ennuyeux: saisie de données, tri d\'emails, génération de rapports. Ils travaillent 24/7, ne font jamais d\'erreurs, et coûtent moins qu\'un café par jour.',
            features: [
                'Élimine les tâches de données répétitives',
                'Automatise le traitement des emails',
                'Génère des rapports automatiquement',
                'Connecte toutes vos apps ensemble'
            ],
            benefits: [
                'Économisez 40+ heures par semaine, par employé',
                'Zéro erreurs humaines sur les tâches automatisées',
                'Votre équipe se concentre sur la croissance, pas l\'admin',
                'ROI en semaines, pas en mois'
            ],
            faq: [
                { question: 'Quels outils utilisez-vous?', answer: 'Nous utilisons une combinaison d\'OpenAI, Make.com, n8n et des solutions Python personnalisées.' },
                { question: 'Est-ce sécurisé?', answer: 'Oui, nous mettons en œuvre une sécurité des données au niveau entreprise et respectons toutes les réglementations locales.' }
            ],
            crisisSolved: 'Voici le vrai problème: Vos talents les plus brillants et les plus chers perdent du temps sur des tâches à 10€/heure. Chaque heure qu\'ils passent en saisie manuelle est une heure qu\'ils NE passent PAS à faire croître votre entreprise. C\'est pourquoi les entreprises atteignent des plafonds de croissance qu\'elles ne peuvent pas expliquer. Nous brisons ce plafond avec des agents IA qui gèrent les opérations pendant que les humains font ce qu\'ils font de mieux—penser, stratégiser, créer.',
            workflow: [
                'Jour 1: Nous cartographions vos processus manuels',
                'Jour 2-4: Construction de vos agents IA personnalisés',
                'Jour 5: Connexion à vos outils existants',
                'Jour 6: Lancement et monitoring'
            ],
            costOfInaction: 'Chaque tâche manuelle que vous n\'automatisez pas est un choix de gaspiller de l\'argent. Vos concurrents automatisent tout. Ils sont plus rapides, plus légers, et leurs marges augmentent pendant que les vôtres diminuent. Ce n\'est pas une question de technologie—c\'est une question de survie.',
            psychologicalHook: 'Vous n\'avez pas créé votre entreprise pour faire de la saisie de données. Pourquoi le faites-vous encore?'
        },
        it: {
            id: 'ai-automations',
            icon: '🤖',
            title: 'Automazione IA',
            description: 'Il tuo miglior dipendente ha passato 3 ore ieri a copiare dati da un foglio di calcolo all\'altro. La tua contabile ha passato metà giornata a elaborare fatture manualmente. Il tuo team marketing ha postato lo stesso contenuto 5 volte perché nessuno ha automatizzato il calendario. Questa è follia—e sta mangiando i tuoi profitti. Costruiamo agenti IA che gestiscono la noia: inserimento dati, smistamento email, generazione report. Lavorano 24/7, non sbagliano mai, e costano meno di un caffè al giorno.',
            features: [
                'Elimina i compiti dati ripetitivi',
                'Automatizza l\'elaborazione email',
                'Genera report automaticamente',
                'Connette tutte le tue app insieme'
            ],
            benefits: [
                'Risparmia 40+ ore a settimana, per dipendente',
                'Zero errori umani sui compiti automatizzati',
                'Il tuo team si concentra sulla crescita, non sull\'admin',
                'ROI in settimane, non mesi'
            ],
            faq: [
                { question: 'Quali strumenti utilizzate?', answer: 'Utilizziamo una combinazione di OpenAI, Make.com, n8n e soluzioni Python su misura.' },
                { question: 'È sicuro?', answer: 'Sì, implementiamo la sicurezza dei dati a livello enterprise e rispettiamo tutte le normative locali.' }
            ],
            crisisSolved: 'Ecco il vero problema: I tuoi talenti più brillanti e costosi stanno sprecando tempo su compiti da 10€/ora. Ogni ora che passano in inserimento dati manuale è un\'ora che NON stanno spendendo per far crescere la tua azienda. Ecco perché le aziende raggiungono tetti di crescita che non riescono a spiegare. Noi sfoniamo quel tetto con agenti IA che gestiscono le operazioni mentre gli umani fanno ciò che sanno fare meglio—pensare, pianificare, creare.',
            workflow: [
                'Giorno 1: Mappiamo i tuoi processi manuali',
                'Giorno 2-4: Costruzione dei tuoi agenti IA personalizzati',
                'Giorno 5: Connessione ai tuoi strumenti esistenti',
                'Giorno 6: Lancio e monitoraggio'
            ],
            costOfInaction: 'Ogni compito manuale che non automatizzi è una scelta di sprecare soldi. I tuoi concorrenti stanno automatizzando tutto. Sono più veloci, più snelli, e i loro margini crescono mentre i tuoi si riducono. Non si tratta di tecnologia—si tratta di sopravvivenza.',
            psychologicalHook: 'Non hai aperto un\'azienda per inserire dati. Perché lo stai ancora facendo?'
        },
        hi: {
            id: 'ai-automations',
            icon: '🤖',
            title: 'AI ऑटोमेशन',
            description: 'आपका सबसे अच्छा कर्मचारी कल 3 घंटे एक स्प्रेडशीट से दूसरी में डेटा कॉपी करता रहा। आपके अकाउंटेंट ने आधा दिन इनवॉइस प्रोसेस किया। मार्केटिंग टीम ने वही कंटेंट 5 बार पोस्ट किया क्योंकि किसी ने शेड्यूल ऑटोमेट नहीं किया। यह पागलपन है—और यह आपका मुनाफा खा रहा है। हम AI एजेंट्स बनाते हैं जो बोरिंग काम संभालते हैं: डेटा एंट्री, ईमेल सॉर्टिंग, रिपोर्ट जेनरेशन। 24/7 काम करते हैं, कभी गलती नहीं करते, और एक कॉफी से कम खर्च आती है।',
            features: [
                'दोहराए जाने वाले डेटा काम खत्म करें',
                'ईमेल प्रोसेसिंग ऑटोमेट करें',
                'रिपोर्ट्स ऑटोमैटिकली बनाएं',
                'सभी अईप्स को कनेक्ट करें'
            ],
            benefits: [
                'प्रति कर्मचारी 40+ घंटे साप्ताहिक बचाएं',
                'ऑटोमेटेड टास्क्स पर ज़ीरो ह्यूमन एरर',
                'टीम ग्रोथ पर फोकस करे, एडमिन पर नहीं',
                'ROI हफ्तों में, महीनों में नहीं'
            ],
            faq: [
                { question: 'आप किन उपकरणों का उपयोग करते हैं?', answer: 'हम OpenAI, Make.com, n8n और कस्टम पायथन समाधानों के संयोजन का उपयोग करते हैं।' },
                { question: 'क्या यह सुरक्षित है?', answer: 'हाँ, हम एंटरप्राइज़-लेवल डेटा सुरक्षा लागू करते हैं और सभी स्थानीय नियमों का पालन करते हैं।' }
            ],
            crisisSolved: 'असली समस्या यह है: आपके सबसे होशियार, महंगे टैलेंट्स $10/घंटा वाले कामों पर समय बर्बाद कर रहे हैं। हर घंटा जो वे मैन्युअल डेटा एंट्री पर बिताते हैं वो एक घंटा है जो वे आपके बिज़नेस को बढ़ाने पर नहीं लगा रहे। हम AI एजेंट्स से इस सीलिंग को तोड़ते हैं—जबकि इंसान वो करें जो इंसान सबसे अच्छे करते हैं—सोचना, रणनीति बनाना, सृजन करना।',
            workflow: [
                'दिन 1: हम आपकी मैन्युअल प्रोसेसेज़ मैप करते हैं',
                'दिन 2-4: आपके कस्टम AI एजेंट्स बनाते हैं',
                'दिन 5: मौजूदा टूल्स से कनेक्ट करते हैं',
                'दिन 6: लॉन्च और मॉनिटरिंग'
            ],
            costOfInaction: 'हर मैन्युअल टास्क जो आप ऑटोमेट नहीं करते, पैसा बर्बाद करने का चुनाव है। आपके प्रतिस्पर्धी सब कुछ ऑटोमेट कर रहे हैं। वे तेज़, लीन हैं, और उनके मार्जिन बढ़ रहे हैं जबकि आपके सिकुड़ रहे हैं। यह टेक्नोलॉजी की बात नहीं—सरवाइवल की बात है।',
            psychologicalHook: 'आपने अपना बिज़नेस डेटा एंट्री करने के लिए शुरू नहीं किया। तो अभी भी क्यों कर रहे हैं?'
        },
        ms: {
            id: 'ai-automations',
            icon: '🤖',
            title: 'Automasi AI',
            description: 'Pekerja terbaik anda semalam habiskan 3 jam menyalin data dari satu spreadsheet ke yang lain. Akauntan anda habiskan separuh hari memproses invois secara manual. Pasukan pemasaran anda post kandungan sama 5 kali kerana tiada siapa automatikkan jadual. Ini gila—dan ia memakan keuntungan anda. Kami bina ejen AI yang uruskan kerja membosankan: kemasukan data, susun email, generate laporan. Mereka kerja 24/7, tak pernah buat kesilapan, dan kos kurang dari secawan kopi sehari.',
            features: [
                'Hapuskan Tugas Data Berulang',
                'Automatikkan Pemprosesan Email',
                'Generate Laporan Automatik',
                'Sambungkan Semua App Anda'
            ],
            benefits: [
                'Jimat 40+ Jam Seminggu, Per Pekerja',
                'Sifar Kesilapan Manusia pada Tugas Automatik',
                'Pasukan Fokus Pertumbuhan, Bukan Admin',
                'ROI dalam Minggu, Bukan Bulan'
            ],
            faq: [
                { question: 'Apakah alat yang anda gunakan?', answer: 'Kami menggunakan gabungan OpenAI, Make.com, n8n dan penyelesaian Python tersuai.' },
                { question: 'Adakah ia selamat?', answer: 'Ya, kami melaksanakan keselamatan data peringkat perusahaan dan mematuhi semua peraturan tempatan.' }
            ],
            crisisSolved: 'Inilah masalah sebenar: Bakat paling bijak dan mahal anda membazir masa pada tugas RM30/jam. Setiap jam mereka habiskan pada kemasukan data manual adalah jam yang TIDAK dihabiskan untuk mengembangkan perniagaan anda. Sebab tu syarikat capai siling pertumbuhan yang mereka tak boleh jelaskan. Kami pecahkan siling itu dengan ejen AI yang urus operasi sementara manusia buat apa yang manusia paling pandai—fikir, strategize, cipta.',
            workflow: [
                'Hari 1: Kami Petakan Proses Manual Anda',
                'Hari 2-4: Bina Ejen AI Tersuai Anda',
                'Hari 5: Sambung ke Tool Sedia Ada Anda',
                'Hari 6: Lancar dan Pantau'
            ],
            costOfInaction: 'Setiap tugas manual yang anda tak automatikkan adalah pilihan untuk membazir duit. Pesaing anda sedang automatikkan segala-galanya. Mereka lebih pantas, lebih lean, dan margin mereka berkembang sementara anda menyusut. Ini bukan tentang teknologi—ini tentang kelangsungan hidup.',
            psychologicalHook: 'Anda tak buka perniagaan untuk buat kemasukan data. Kenapa masih buat?'
        }
    },
    'advanced-seo': {
        en: {
            id: 'advanced-seo',
            icon: '🔍',
            title: 'Advanced SEO',
            description: 'Right now, someone is searching for exactly what you sell. Google shows them 10 results. You\'re not one of them. Guess who gets the sale? Your competitor. This happens hundreds of times every day—and you don\'t even know it. We change this. Our SEO strategy doesn\'t just get you traffic; it gets you the RIGHT traffic—people actively looking to buy. We don\'t do "SEO tricks." We engineer search dominance.',
            features: [
                'Deep Technical Fixes Google Actually Cares About',
                'Content That Ranks AND Converts',
                'Authority Building Through Strategic Backlinks',
                'Local SEO for Real-World Customers'
            ],
            benefits: [
                'Appear on Page 1 for Your Best Keywords',
                'Get Customers Who Are Ready to Buy',
                'Results That Compound Over Time',
                'Stop Paying for Ads to Be Found'
            ],
            faq: [
                { question: 'How long does it take?', answer: 'SEO is a long-term game, but you can see technical improvements immediately and ranking changes in 3-6 months.' },
                { question: 'Do you guarantee #1 ranking?', answer: 'No honest agency can guarantee #1, but we have a proven track record of getting clients there.' }
            ],
            crisisSolved: 'Here\'s a brutal fact: 91% of web pages get ZERO traffic from Google. Zero. Your beautiful website, your great content—invisible. Meanwhile, your competitors show up when customers search, and they get the leads that should be yours. We end this invisibility permanently with an SEO strategy built on data, technical excellence, and content that Google can\'t ignore.',
            workflow: [
                'Week 1: Complete Technical Audit',
                'Week 2-3: Keyword Strategy & Content Plan',
                'Week 4-8: Implementation & Link Building',
                'Ongoing: Monthly Reports & Optimization'
            ],
            costOfInaction: 'Every day you\'re not ranking on Google, your competitors are capturing customers who should be yours. SEO compounds—the longer you wait, the harder it becomes to catch up. In 6 months, you\'ll wish you started today. Invisibility is not a strategy. Invisibility is death.',
            psychologicalHook: 'Someone is searching for what you sell right now. Will they find you—or your competitor?'
        },
        ar: {
            id: 'advanced-seo',
            icon: '🔍',
            title: 'تحسين محركات البحث المتقدم',
            description: 'الآن، شخص ما يبحث عن بالضبط ما تبيع. جوجل يعرض له 10 نتائج. أنت لست واحداً منها. خمّن من يحصل على البيعة؟ منافسك. هذا يحدث مئات المرات كل يوم—وأنت لا تعلم. نحن نغير هذا. استراتيجيتنا لا تجلب لك زوار فقط—تجلب الزوار الصح: ناس يبحثون بنشاط للشراء.',
            features: [
                'إصلاحات تقنية تهم جوجل فعلاً',
                'محتوى يتصدر ويحوّل',
                'بناء سلطة عبر روابط استراتيجية',
                'SEO محلي لعملاء حقيقيين'
            ],
            benefits: [
                'اظهر في الصفحة 1 لكلماتك الأهم',
                'احصل على عملاء جاهزين للشراء',
                'نتائج تتراكم مع الوقت',
                'توقف عن الدفع للإعلانات لتُوجد'
            ],
            faq: [
                { question: 'كم يستغرق من الوقت؟', answer: 'SEO لعبة طويلة الأمد، لكن يمكنك رؤية تحسينات تقنية فوراً وتغييرات في الترتيب خلال 3-6 أشهر.' },
                { question: 'هل تضمنون المركز #1؟', answer: 'لا توجد وكالة صادقة تضمن المركز #1، لكن لدينا سجل حافل في إيصال العملاء إلى هناك.' }
            ],
            crisisSolved: 'إليك حقيقة قاسية: 91% من صفحات الويب تحصل على صفر زيارات من جوجل. صفر. موقعك الجميل، محتواك الرائع—غير مرئي. بينما منافسوك يظهرون عندما يبحث العملاء، ويحصلون على العملاء الذين يجب أن يكونوا لك. ننهي هذا الاختفاء نهائياً.',
            workflow: [
                'الأسبوع 1: تدقيق تقني كامل',
                'الأسبوع 2-3: استراتيجية الكلمات وخطة المحتوى',
                'الأسبوع 4-8: التنفيذ وبناء الروابط',
                'مستمر: تقارير وتحسين شهري'
            ],
            costOfInaction: 'كل يوم لا تتصدر فيه جوجل، منافسوك يستولون على عملاءك. SEO يتراكم—كلما انتظرت، صعُب اللحاق. في 6 أشهر، ستتمنى لو بدأت اليوم. الاختفاء ليس استراتيجية. الاختفاء موت.',
            psychologicalHook: 'شخص ما يبحث عما تبيع الآن. هل سيجدك—أم منافسك؟'
        },
        de: {
            id: 'advanced-seo',
            icon: '🔍',
            title: 'Fortgeschrittenes SEO',
            description: 'Die Dominanz in den Suchergebnissen erfordert mehr als nur Keywords. Wir bieten technisches SEO, programmatische Content-Strategien und den Aufbau von Autorität, um Sie auf Platz 1 zu bringen.',
            features: [
                'Technisches Site-Audit',
                'Programmatisches SEO',
                'Backlink-Strategie',
                'Lokale SEO-Optimierung'
            ],
            benefits: [
                'Organischen Traffic steigern',
                'Leads mit hoher Absicht',
                'Langfristige Ergebnisse',
                'Wettbewerber übertreffen'
            ],
            faq: [
                { question: 'Wie lange dauert es, bis Ergebnisse sichtbar sind?', answer: 'SEO ist eine langfristige Strategie, aber Sie sehen normalerweise innerhalb von 3-6 Monaten signifikante Verbesserungen.' },
                { question: 'Garantieren Sie Platz 1?', answer: 'Niemand kann Platz 1 garantieren, aber wir garantieren eine massive Steigerung Ihrer organischen Sichtbarkeit und Ihres Traffics.' }
            ],
            crisisSolved: 'In der digitalen Welt bedeutet Unsichtbarkeit den Tod Ihres Unternehmens. 90 % des Suchverkehrs gehen an die erste Seite von Google, und wenn Sie dort nicht sind, existieren Sie für Ihre Kunden nicht. Wir lösen dies durch eine datengesteuerte SEO-Strategie, die nicht nur Rankings, sondern echte Marktdominanz aufbaut.',
            workflow: [
                'Technisches SEO-Audit',
                'KI-gestützte Keyword-Intelligence',
                'Autoritäts-Link-Building-Strategie',
                'ROI-Performance-Berichterstattung'
            ],
            costOfInaction: 'Jeden Tag, an dem Sie nicht auf der ersten Seite stehen, schenken Sie Ihren Konkurrenten wertvolle Leads. SEO ist ein Zinseszinseffekt; je länger Sie warten, desto schwieriger wird es, den Rückstand aufzuholen. Ignoranz gegenüber SEO ist eine Einladung an die Konkurrenz, Ihren Marktanteil zu übernehmen.',
            psychologicalHook: 'Werden Sie die erste Antwort auf die Fragen Ihrer Kunden.'
        },
        fr: {
            id: 'advanced-seo',
            icon: '🔍',
            title: 'SEO Avancé',
            description: 'Dominer les résultats de recherche implique plus que de simples mots-clés. Nous fournissons un SEO technique, des stratégies de contenu programmatiques et un renforcement de l\'autorité pour vous amener au #1.',
            features: [
                'Audit technique du site',
                'SEO programmatique',
                'Stratégie de backlinks',
                'Optimisation SEO locale'
            ],
            benefits: [
                'Augmenter le trafic organique',
                'Leads à haute intention',
                'Résultats à long terme',
                'Surclasser les concurrents'
            ],
            faq: [
                { question: 'Combien de temps faut-il pour voir des résultats?', answer: 'Le SEO est une stratégie à long terme, mais vous verrez généralement des améliorations significatives dans les 3 à 6 mois.' },
                { question: 'Garantissez-vous la première place?', answer: 'Personne ne peut garantir la première place, mais nous garantissons une augmentation massive de votre visibilité organique et de votre trafic.' }
            ],
            crisisSolved: 'Dans le monde numérique, l\'invisibilité signifie la mort de votre entreprise. 90 % du trafic de recherche va vers la première page de Google, et si vous n\'y êtes pas, vous n\'existez pas pour vos clients. Nous résolvons ce problème grâce à une stratégie SEO basée sur les données qui ne se contente pas de classements, mais construit une véritable dominance sur le marché.',
            workflow: [
                'Audit SEO technique',
                'Intelligence des mots-clés assistée par IA',
                'Stratégie de création de liens d\'autorité',
                'Rapports de performance ROI'
            ],
            costOfInaction: 'Chaque jour où vous n\'êtes pas sur la première page, vous offrez des prospects précieux à vos concurrents. Le SEO est un effet d\'intérêt composé ; plus vous attendez, plus il sera difficile de rattraper le retard. L\'ignorance du SEO est une invitation pour la concurrence à s\'emparer de votre part de marché.',
            psychologicalHook: 'Devenez la première réponse aux questions de vos clients.'
        },
        it: {
            id: 'advanced-seo',
            icon: '🔍',
            title: 'SEO Avanzato',
            description: 'Dominare i risultati di ricerca richiede più delle sole parole chiave. Forniamo SEO tecnico, strategie di contenuti programmatici e costruzione dell\'autorità per portarti al #1.',
            features: [
                'Audit tecnico del sito',
                'SEO programmatico',
                'Strategia di backlink',
                'Ottimizzazione SEO locale'
            ],
            benefits: [
                'Aumenta il traffico organico',
                'Lead ad alta intenzione',
                'Risultati a lungo termine',
                'Supera i concorrenti'
            ],
            faq: [
                { question: 'Quanto tempo ci vuole per vedere i risultati?', answer: 'La SEO è una strategia a lungo termine, ma di solito vedrai miglioramenti significativi entro 3-6 mesi.' },
                { question: 'Garantite il primo posto?', answer: 'Nessuno può garantire il primo posto, ma garantiamo un massiccio aumento della tua visibilità organica e del tuo traffico.' }
            ],
            crisisSolved: 'Nel mondo digitale, l\'invisibilità significa la morte della tua azienda. Il 90% del traffico di ricerca va alla prima pagina di Google, e se non ci sei, non esisti per i tuoi clienti. Risolviamo il problema con una strategia SEO basata sui dati che non mira solo ai posizionamenti, ma costruisce una vera dominanza di mercato.',
            workflow: [
                'Audit SEO tecnico',
                'Keyword Intelligence assistita da IA',
                'Strategia di link building d\'autorità',
                'Report sulle prestazioni ROI'
            ],
            costOfInaction: 'Ogni giorno in cui non sei in prima pagina, stai regalando lead preziosi ai tuoi concorrenti. La SEO è un effetto di interesse composto; più aspetti, più sarà difficile recuperare il ritardo. L\'ignoranza verso la SEO è un invito alla concorrenza a prendersi la tua quota di mercato.',
            psychologicalHook: 'Diventa la prima risposta alle domande dei tuoi clienti.'
        },
        hi: {
            id: 'advanced-seo',
            icon: '🔍',
            title: 'उन्नत SEO',
            description: 'खोज परिणामों पर हावी होने में केवल कीवर्ड से अधिक शामिल है। हम आपको #1 पर लाने के लिए तकनीकी SEO, प्रोग्रामिंग सामग्री रणनीतियाँ और अधिकार निर्माण प्रदान करते हैं।',
            features: [
                'तकनीकी साइट ऑडिट',
                'प्रोग्रामिंग SEO',
                'बैकलिंक रणनीति',
                'स्थानीय SEO अनुकूलन'
            ],
            benefits: [
                'ऑर्गेनिक ट्रैफ़िक बढ़ाएं',
                'उच्च-इरादे वाले लीड',
                'दीर्घकालिक परिणाम',
                'प्रतियोगियों को पछाड़ें'
            ],
            faq: [
                { question: 'परिणाम देखने में कितना समय लगता है?', answer: 'SEO एक दीर्घकालिक रणनीति है, लेकिन आप आमतौर पर 3-6 महीनों के भीतर महत्वपूर्ण सुधार देखेंगे।' },
                { question: 'क्या आप नंबर 1 रैंक की गारंटी देते हैं?', answer: 'कोई भी नंबर 1 रैंक की गारंटी नहीं दे सकता है, लेकिन हम आपकी ऑर्गेनिक दृश्यता और ट्रैफ़िक में बड़े पैमाने पर वृद्धि की गारंटी देते हैं।' }
            ],
            crisisSolved: 'डिजिटल दुनिया में, अदृश्यता का अर्थ है आपके व्यवसाय की मृत्यु। खोज ट्रैफ़िक का 90% Google के पहले पृष्ठ पर जाता है, और यदि आप वहां नहीं हैं, तो आप अपने ग्राहकों के लिए मौजूद नहीं हैं। हम डेटा-संचालित SEO रणनीति के माध्यम से इसे हल करते हैं जो न केवल रैंकिंग बल्कि वास्तविक बाजार प्रभुत्व का निर्माण करती है।',
            workflow: [
                'तकनीकी SEO ऑडिट',
                'एआई-संचालित कीवर्ड इंटेलिजेंस',
                'अथॉरिटी लिंक बिल्डिंग रणनीति',
                'ROI प्रदर्शन रिपोर्टिंग'
            ],
            costOfInaction: 'हर दिन जब आप पहले पन्ने पर नहीं होते हैं, तो आप अपने प्रतिस्पर्धियों को मूल्यवान लीड उपहार में दे रहे होते हैं। SEO एक चक्रवृद्धि ब्याज प्रभाव है; आप जितना अधिक प्रतीक्षा करेंगे, अंतर कम करना उतना ही कठिन होगा। SEO के प्रति अज्ञानता प्रतिस्पर्धा के लिए आपके बाजार हिस्सेदारी पर कब्जा करने का निमंत्रण है।',
            psychologicalHook: 'अपने ग्राहकों के सवालों का पहला जवाब बनें।'
        },
        ms: {
            id: 'advanced-seo',
            icon: '🔍',
            title: 'SEO Lanjutan',
            description: 'Menguasai hasil carian melibatkan lebih daripada sekadar kata kunci. Kami menyediakan SEO teknikal, strategi kandungan programatik, dan pembinaan autoriti untuk membawa anda ke #1.',
            features: [
                'Audit Tapak Teknikal',
                'SEO Programatik',
                'Strategi Pautan Balik',
                'Pengoptimuman SEO Tempatan'
            ],
            benefits: [
                'Tingkatkan trafik organik',
                'Lead berniat tinggi',
                'Keputusan jangka panjang',
                'Atasi pesaing'
            ],
            faq: [
                { question: 'Berapa lama masa yang diambil untuk melihat hasil?', answer: 'SEO ialah strategi jangka panjang, tetapi anda biasanya akan melihat peningkatan yang ketara dalam tempoh 3-6 bulan.' },
                { question: 'Adakah anda menjamin kedudukan #1?', answer: 'Tiada siapa yang boleh menjamin kedudukan #1, tetapi kami menjamin peningkatan besar dalam keterlihatan organik dan trafik anda.' }
            ],
            crisisSolved: 'Dalam dunia digital, tidak kelihatan bermakna kematian perniagaan anda. 90% trafik carian pergi ke halaman pertama Google, and jika anda tidak berada di sana, anda tidak wujud untuk pelanggan anda. Kami menyelesaikan perkara ini melalui strategi SEO berasaskan data yang bukan sahaja membina kedudukan tetapi penguasaan pasaran yang sebenar.',
            workflow: [
                'Audit SEO Teknikal',
                'Kepintaran Kata Kunci Dipacu AI',
                'Strategi Pembinaan Pautan Autoriti',
                'Pelaporan Prestasi ROI'
            ],
            costOfInaction: 'Setiap hari anda tidak berada di halaman pertama, anda menghadiahkan lead berharga kepada pesaing anda. SEO ialah kesan faedah kompaun; lebih lama anda menunggu, lebih sukar untuk mengejar. Kejahilan terhadap SEO adalah jemputan kepada pesaing untuk mengambil alih bahagian pasaran anda.',
            psychologicalHook: 'Jadilah jawapan pertama kepada soalan pelanggan anda.'
        }
    }
}
