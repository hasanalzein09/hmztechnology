/**
 * 🌍 SOLUTIONS TRANSLATIONS - GERMAN (de)
 * Complete German translations for all 300 solutions
 */

import type { SolutionTranslation } from '../types'

export const germanTranslations: Record<string, SolutionTranslation> = {
    // ==================== HEALTHCARE (10 solutions) ====================

    'whatsapp-clinic-booking': {
        title: 'Klinik-Terminbuchungssystem über WhatsApp',
        description: 'Automatisiertes Terminplanungssystem für Arztpraxen, das Patienten ermöglicht, Termine direkt über WhatsApp zu buchen, umzubuchen und zu stornieren, mit automatischen Erinnerungen und Bestätigungen.',
        shortDescription: 'Buchen Sie Kliniktermine sofort über WhatsApp',
        features: [
            'Echtzeit-Terminverfügbarkeit',
            'Multi-Arzt-Planung',
            'Automatische Erinnerungen 24h vorher',
            'Umbuchung und Stornierung',
            'Patientenakte-Integration',
            'Wartelistenverwaltung',
            'Mehrsprachige Unterstützung',
            'Kalendersynchronisation'
        ],
        benefits: [
            'Reduzierung von No-Shows um 40%',
            '3 Stunden täglich bei Anrufen sparen',
            '24/7 Buchungsverfügbarkeit',
            'Patientenzufriedenheit um 60% steigern',
            'Verwaltungsaufwand um 50% reduzieren',
            'Bessere Terminauslastung'
        ],
        useCases: [
            'Arztpraxen',
            'Zahnarztpraxen',
            'Fachärztliche Konsultationen',
            'Diagnosezentren',
            'Impfzentren'
        ],
        timeframe: '6 Monate',
        metrics: ['Reduzierte No-Shows', 'Zeitersparnis', 'Mehr Buchungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [
            {
                question: 'Wie funktioniert die Terminbuchung?',
                answer: 'Patienten senden eine Nachricht an Ihre WhatsApp-Nummer, der Bot zeigt verfügbare Slots, sie wählen einen aus und erhalten sofortige Bestätigung.'
            },
            {
                question: 'Kann es mehrere Ärzte verwalten?',
                answer: 'Ja, das System unterstützt unbegrenzt viele Ärzte mit individuellen Zeitplänen und Einstellungen.'
            },
            {
                question: 'Sendet es Erinnerungen?',
                answer: 'Ja, automatische Erinnerungen werden 24 Stunden und 2 Stunden vor dem Termin gesendet.'
            },
            {
                question: 'Ist es HIPAA-konform?',
                answer: 'Ja, alle Patientendaten werden verschlüsselt und sicher nach internationalen Datenschutzstandards gespeichert.'
            }
        ]
    },

    'whatsapp-pharmacy-assistant': {
        title: 'Intelligenter Apotheken-Assistent auf WhatsApp',
        description: 'KI-gestützter Apotheken-Assistent, der Kunden bei der Medikamentenverfügbarkeit, Bestellungen und Rezeptverarbeitung über WhatsApp hilft.',
        shortDescription: 'Prüfen Sie Medikamentenverfügbarkeit über WhatsApp',
        features: [
            'Echtzeit-Medikamentenverfügbarkeit',
            'Rezept-Upload und OCR-Validierung',
            'Alternative Medikamentenvorschläge',
            'Preisvergleich über Filialen',
            'Lieferplanung und -verfolgung',
            'Dosierungserinnerungen',
            'Wechselwirkungswarnungen',
            'Versicherungsanspruch-Unterstützung'
        ],
        benefits: [
            'Umsatzsteigerung um 35%',
            '24/7 automatisierter Kundenservice',
            'Telefonanfragen um 70% reduzieren',
            'Schnellere Auftragsbearbeitung',
            'Verbesserte Medikamenten-Compliance',
            'Besseres Bestandsmanagement'
        ],
        useCases: [
            'Gemeinschaftsapotheken',
            'Krankenhausapotheken',
            'Online-Apotheken',
            'Apothekenketten',
            'Spezialdrogerien'
        ],
        timeframe: '4 Monate',
        metrics: ['Umsatzsteigerung', 'Reduzierte Supportkosten', 'Kundenbindung'],
        deliveryTime: '3-4 Wochen',
        faqs: [
            {
                question: 'Wie laden Kunden Rezepte hoch?',
                answer: 'Kunden fotografieren ihr Rezept und senden es über WhatsApp. Unser KI-OCR-System validiert es sofort.'
            },
            {
                question: 'Kann es alternative Medikamente vorschlagen?',
                answer: 'Ja, wenn ein Medikament nicht vorrätig ist, schlägt es Alternativen mit gleichen Wirkstoffen vor.'
            },
            {
                question: 'Verarbeitet es Versicherungsansprüche?',
                answer: 'Ja, es kann Versicherungsdeckung prüfen und bei der digitalen Dokumentation helfen.'
            }
        ]
    },

    'whatsapp-medical-consultations': {
        title: 'Telemedizin-Beratungsplattform auf WhatsApp',
        description: 'Komplette Telemedizin-Plattform auf WhatsApp, die Patienten ermöglicht, medizinische Beratungen und digitale Rezepte zu erhalten.',
        shortDescription: 'Medizinische Beratung über WhatsApp erhalten',
        features: [
            'KI-Symptomprüfung und Triage',
            'Video-Beratungsbuchung',
            'Sichere Krankenaktenteilung',
            'Digitale Rezeptausstellung',
            'Zahlungsintegration',
            'Nachsorgeplanung',
            'Multi-Fachrichtungen-Support',
            'Notfall-Eskalation'
        ],
        benefits: [
            'Entfernte Patienten erreichen',
            'Beratungskapazität um 3x steigern',
            'Praxiskosten reduzieren',
            '24/7 Verfügbarkeit',
            'Bessere Patientenergebnisse',
            'Servicegebiet erweitern'
        ],
        useCases: [
            'Privatärzte',
            'Arztpraxen',
            'Fachärztliche Beratungen',
            'Mentale Gesundheitsdienste',
            'Nachsorge-Beratungen'
        ],
        timeframe: '5 Monate',
        metrics: ['Patientenvolumen', 'Umsatz pro Arzt', 'Geografische Reichweite'],
        deliveryTime: '4-5 Wochen',
        faqs: [
            {
                question: 'Ist es sicher für medizinische Daten?',
                answer: 'Ja, Ende-zu-Ende-Verschlüsselung, HIPAA-Konformität und sichere Krankenaktenspeicherung.'
            },
            {
                question: 'Können Ärzte Rezepte ausstellen?',
                answer: 'Ja, digitale Rezepte mit QR-Codes, die Apotheken verifizieren können.'
            },
            {
                question: 'Was passiert bei Notfällen?',
                answer: 'Eingebautes Triage-System identifiziert Notfälle und eskaliert sofort an Notdienste.'
            }
        ]
    },

    // ==================== E-COMMERCE (10 solutions) ====================

    'whatsapp-product-catalog': {
        title: 'Interaktiver Produktkatalog auf WhatsApp',
        description: 'Präsentieren Sie Ihre Produkte professionell auf WhatsApp mit Bildern, Preisen und detaillierten Beschreibungen, und lassen Sie Kunden direkt kaufen.',
        shortDescription: 'Professioneller Produktkatalog auf WhatsApp',
        features: [
            'Produktpräsentation mit Bildern',
            'Kategoriedurchsicht',
            'Produktsuche',
            'Preise und Rabatte anzeigen',
            'In den Warenkorb legen',
            'Direktbestellung',
            'Produkte teilen',
            'Verfügbarkeitswarnungen'
        ],
        benefits: [
            'Umsatzsteigerung um 50%',
            'Einfaches Einkaufserlebnis',
            'Keine separate App nötig',
            'WhatsApp-Kundenbasis erreichen',
            'Wiederholte Fragen reduzieren',
            'Schnellere Bestellungen'
        ],
        useCases: [
            'E-Commerce-Shops',
            'Modeboutiquen',
            'Elektronikgeschäfte',
            'Juweliergeschäfte',
            'Möbelgeschäfte'
        ],
        timeframe: '3 Monate',
        metrics: ['Umsatzsteigerung', 'Konversionsrate', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [
            {
                question: 'Wie funktioniert der Katalog?',
                answer: 'Kunden senden eine Nachricht, sehen Kategorien, wählen Produkte, sehen Details und Bilder, und können direkt bestellen.'
            },
            {
                question: 'Können Produkte aktualisiert werden?',
                answer: 'Ja, einfaches Dashboard zum sofortigen Hinzufügen, Bearbeiten und Löschen von Produkten.'
            },
            {
                question: 'Unterstützt es Zahlungen?',
                answer: 'Ja, Integration mit beliebten Zahlungs-Gateways und Nachnahme.'
            }
        ]
    },

    'whatsapp-order-tracking': {
        title: 'Auftragsverfolgungssystem über WhatsApp',
        description: 'Lassen Sie Ihre Kunden ihre Bestellungen in Echtzeit über WhatsApp verfolgen mit automatischen Updates bei jedem Versandschritt.',
        shortDescription: 'Echtzeit-Auftragsverfolgung',
        features: [
            'Auftragsverfolgung per Nummer',
            'Automatische Statusupdates',
            'Versandbenachrichtigungen',
            'Live-Fahrerstandort',
            'Ankunftszeitschätzung',
            'Empfangsbestätigung',
            'Neuterminierung',
            'Lieferbewertung'
        ],
        benefits: [
            'Support-Anfragen um 70% reduzieren',
            'Kundenvertrauen erhöhen',
            'Volle Transparenz',
            'Besseres Empfangserlebnis',
            'Beschwerden reduzieren',
            'Kundenloyalität'
        ],
        useCases: [
            'E-Commerce-Shops',
            'Lieferunternehmen',
            'Restaurants',
            'Lebensmittelgeschäfte',
            'Versanddienste'
        ],
        timeframe: '3 Monate',
        metrics: ['Kundenzufriedenheit', 'Reduzierte Anfragen', 'Wiederholungskäufe'],
        deliveryTime: '2-3 Wochen',
        faqs: [
            {
                question: 'Wie verfolgt der Kunde seine Bestellung?',
                answer: 'Er sendet die Bestellnummer über WhatsApp und erhält sofort den aktuellen Status und voraussichtlichen Standort.'
            },
            {
                question: 'Integriert es sich mit Versandunternehmen?',
                answer: 'Ja, Integration mit DHL, FedEx und lokalen Lieferdiensten.'
            },
            {
                question: 'Kann die Lieferung umgeplant werden?',
                answer: 'Ja, Kunden können Zeit oder Ort der Lieferung über WhatsApp ändern.'
            }
        ]
    },

    'whatsapp-flash-sale': {
        title: 'Flash-Sale-Kampagnen auf WhatsApp',
        description: 'Starten Sie exklusive Rabattaktionen für WhatsApp-Kunden mit Countdown-Timern und limitierten Angeboten.',
        shortDescription: 'Exklusive Angebote auf WhatsApp',
        features: [
            'Geplante Kampagnenstarts',
            'Countdown-Timer',
            'Exklusive WhatsApp-Angebote',
            'Segment-basiertes Targeting',
            'Direkte Kauflinks',
            'Kampagnen-Performance-Tracking',
            'Automatischer Stopp bei Ausverkauf',
            'Gewinner-Ankündigungen'
        ],
        benefits: [
            '80%+ Öffnungsrate',
            'Verkaufsgeschwindigkeit erhöhen',
            'FOMO erzeugen',
            'Inventar schnell räumen',
            'Neue Kunden gewinnen',
            'Zusätzlicher Umsatz'
        ],
        useCases: [
            'Saisonale Rabatte',
            'Produkteinführungen',
            'Feiertagsangebote',
            'Limitierte Editionen',
            'Lagerräumung'
        ],
        timeframe: '2 Monate',
        metrics: ['80%+ Öffnungsrate', '45% Klickrate', '$35K+ Kampagnenumsatz'],
        deliveryTime: '1-2 Wochen',
        faqs: [
            {
                question: 'Wie plane ich Kampagnen?',
                answer: 'Einfaches Dashboard zum Erstellen von Kampagnen mit Start-/Endzeit und Zielgruppe.'
            },
            {
                question: 'Wie kann ich Kunden targeten?',
                answer: 'Basierend auf Kaufhistorie, Standort, Interessen und Ausgabebetrag.'
            },
            {
                question: 'Was wenn der Artikel ausverkauft ist?',
                answer: 'Das System stoppt die Kampagne automatisch und informiert Kunden mit Alternativen.'
            }
        ]
    },

    // ==================== REAL ESTATE ====================

    'whatsapp-property-search': {
        title: 'Immobiliensuche über WhatsApp',
        description: 'Lassen Sie Kunden über WhatsApp nach Immobilien suchen mit erweiterten Filtern, Fotos und Besichtigungsbuchung.',
        shortDescription: 'Finden Sie Ihre Traumimmobilie über WhatsApp',
        features: [
            'Suche nach Standort und Budget',
            'Erweiterte Filter (Zimmer, Fläche)',
            'Immobilienfotos und -videos',
            'Detaillierte Informationen',
            'Besichtigungsbuchung',
            'Immobilienvergleich',
            'Benachrichtigungen für neue Objekte',
            'Kontakt mit Makler'
        ],
        benefits: [
            'Mehr Kunden erreichen',
            'Einfaches Sucherlebnis',
            'Maklerzeit sparen',
            'Qualifiziertere Leads',
            'Mehr Besichtigungen',
            'Schnellere Abschlüsse'
        ],
        useCases: [
            'Immobilienagenturen',
            'Projektentwickler',
            'Immobilienmakler',
            'Vermietung',
            'Gewerbeimmobilien'
        ],
        timeframe: '4 Monate',
        metrics: ['Mehr Leads', 'Konversionsrate', 'Verkaufsgeschwindigkeit'],
        deliveryTime: '3-4 Wochen',
        faqs: [
            {
                question: 'Wie sucht der Kunde nach einer Immobilie?',
                answer: 'Er sendet seine Anforderungen und erhält eine Liste passender Immobilien mit Fotos.'
            },
            {
                question: 'Kann eine Besichtigung gebucht werden?',
                answer: 'Ja, der Kunde wählt einen passenden Zeitpunkt und erhält sofortige Bestätigung.'
            },
            {
                question: 'Wie werden Immobilien aktualisiert?',
                answer: 'Integration mit Immobilienverwaltungssystem oder separates Dashboard.'
            }
        ]
    },

    // ==================== RESTAURANTS ====================

    'whatsapp-food-ordering': {
        title: 'Essensbestellsystem über WhatsApp',
        description: 'Ermöglichen Sie Kunden, Essen direkt über WhatsApp zu bestellen mit interaktiver Speisekarte und Online-Zahlung.',
        shortDescription: 'Bestellen Sie Ihr Essen über WhatsApp',
        features: [
            'Interaktive Speisekarte',
            'Bestellanpassung',
            'Online-Zahlung',
            'Sofortige Bestätigung',
            'Lieferverfolgung',
            'Bestellhistorie',
            'Angebote und Rabatte',
            'Servicebewertung'
        ],
        benefits: [
            'Bestellungen um 40% steigern',
            'Keine App-Provisionen',
            'Direkte Kundenbeziehung',
            'Kundendaten sammeln',
            'Personalisierte Angebote',
            'Höhere Loyalität'
        ],
        useCases: [
            'Restaurants',
            'Cafés',
            'Bäckereien',
            'Süßwarenläden',
            'Cloud-Küchen'
        ],
        timeframe: '2 Monate',
        metrics: ['Mehr Bestellungen', 'Keine Provisionen', 'Kundenzufriedenheit'],
        deliveryTime: '1-2 Wochen',
        faqs: [
            {
                question: 'Wie bestellt der Kunde?',
                answer: 'Er sendet eine Nachricht, durchstöbert die Karte, wählt Artikel, passt an, zahlt und erhält Bestätigung.'
            },
            {
                question: 'Welche Zahlungsmethoden werden unterstützt?',
                answer: 'Kreditkarten, Apple Pay, Nachnahme und lokale Zahlungs-Gateways.'
            },
            {
                question: 'Unterstützt es Lieferung und Abholung?',
                answer: 'Ja, Kunden wählen Lieferung mit Adresse oder Abholung mit bevorzugter Zeit.'
            }
        ]
    },

    'whatsapp-table-reservation': {
        title: 'Tischreservierung über WhatsApp',
        description: 'Einfaches und effektives Tischreservierungssystem über WhatsApp mit Zeitauswahl und sofortiger Bestätigung.',
        shortDescription: 'Reservieren Sie Ihren Tisch über WhatsApp',
        features: ['Verfügbare Zeiten anzeigen', 'Personenzahl auswählen', 'Tischpräferenzen', 'Sofortige Bestätigung', 'Erinnerung vor Termin', 'Einfache Stornierung/Änderung', 'Besondere Anlässe', 'Warteliste'],
        benefits: ['Mehr Reservierungen', 'Weniger Stornierungen', 'Bessere Gästeverteilung', 'Exzellentes Kundenerlebnis', 'Mitarbeiterzeit sparen', 'Wertvolle Daten'],
        useCases: ['Fine-Dining-Restaurants', 'Premium-Cafés', 'Hotels', 'Veranstaltungsräume', 'Clubs'],
        timeframe: '2 Monate',
        metrics: ['Mehr Reservierungen', 'Weniger No-Shows', 'Kundenzufriedenheit'],
        deliveryTime: '1-2 Wochen',
        faqs: [{ question: 'Wie reserviert der Kunde einen Tisch?', answer: 'Er wählt Datum, Zeit und Personenzahl, sieht Optionen und erhält sofortige Bestätigung.' }]
    },

    // ==================== ADDITIONAL HEALTHCARE ====================

    'whatsapp-lab-results': {
        title: 'Laborergebnis-System über WhatsApp',
        description: 'Senden Sie Laborergebnisse sicher an Patienten über WhatsApp mit Erläuterungen und Empfehlungen.',
        shortDescription: 'Erhalten Sie Ihre Laborergebnisse über WhatsApp',
        features: ['Verschlüsselte Ergebnisse', 'Ergebnisinterpretation', 'Warnungen bei abnormalen Werten', 'Folgetermin buchen', 'Testhistorie', 'Vergleich mit vorherigen Tests', 'Wiederholungstest anfordern', 'An Arzt senden'],
        benefits: ['Schnellere Ergebnislieferung', 'Weniger Anfrageanrufe', 'Patientenzufriedenheit', 'Papierersparnis', 'Mehr Privatsphäre', 'Bessere Nachverfolgung'],
        useCases: ['Medizinische Labore', 'Diagnosezentren', 'Krankenhäuser', 'Kliniken', 'Radiologiezentren'],
        timeframe: '3 Monate',
        metrics: ['Liefergeschwindigkeit', 'Patientenzufriedenheit', 'Reduzierte Anrufe'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Sind die Ergebnisse sicher?', answer: 'Ja, vollständig verschlüsselt und passwortgeschützt.' }]
    },

    'whatsapp-dental-reminders': {
        title: 'Zahnarzt-Erinnerungen',
        description: 'Intelligentes Erinnerungssystem für Zahnarzttermine, regelmäßige Untersuchungen und Behandlungsnachverfolgung.',
        shortDescription: 'Intelligente Erinnerungen für Zahnarzttermine',
        features: ['Terminerinnerungen', 'Planung regelmäßiger Untersuchungen', 'Behandlungsnachverfolgung', 'Zahnpflegetipps', 'Bleaching-Angebote', 'Anwesenheitsbestätigung', 'Umplanung', 'Röntgenerinnerungen'],
        benefits: ['45% weniger No-Shows', 'Mehr regelmäßige Untersuchungen', 'Bessere Behandlungsnachverfolgung', 'Treue Kunden', 'Höherer Umsatz', 'Weniger Anrufzeit'],
        useCases: ['Zahnarztpraxen', 'Kieferorthopädie-Zentren', 'Kinderzahnkliniken', 'Implantatzentren', 'Kosmetische Zahnkliniken'],
        timeframe: '4 Monate',
        metrics: ['Weniger No-Shows', 'Mehr Routinebesuche', 'Patientenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie oft wird erinnert?', answer: 'Erinnerung eine Woche, einen Tag und zwei Stunden vor dem Termin.' }]
    },

    'whatsapp-veterinary-care': {
        title: 'Tierpflege über WhatsApp',
        description: 'Umfassendes System für Tierarztpraxen mit Terminbuchung, Impferinnerungen und Gesundheitsverfolgung.',
        shortDescription: 'Kümmern Sie sich um Ihr Haustier über WhatsApp',
        features: ['Terminbuchung', 'Impferinnerungen', 'Gesundheitsakte', 'Pflegetipps', 'Medikamentenbestellung', 'Schnelle Beratung', 'Notfall 24/7', 'Zubehörshop'],
        benefits: ['Bessere Tierpflege', 'Impftreue', 'Treue Kunden', 'Zusätzliche Verkäufe', 'Weniger Notfälle', 'Zeitersparnis'],
        useCases: ['Tierarztpraxen', 'Tierkliniken', 'Tierhandlungen', 'Tierhotels', 'Adoptionsdienste'],
        timeframe: '4 Monate',
        metrics: ['Impftreue', 'Kundenzufriedenheit', 'Zusatzverkäufe'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Erinnert es an Impfungen?', answer: 'Ja, automatische Erinnerungen für alle Impfungen und Routineuntersuchungen.' }]
    },

    // ==================== EDUCATION ====================

    'whatsapp-student-enrollment': {
        title: 'Schüleranmeldungssystem über WhatsApp',
        description: 'Automatisierung des Schüleranmelde- und Zulassungsprozesses über WhatsApp mit Dokumentenverfolgung.',
        shortDescription: 'Schulanmeldung über WhatsApp',
        features: ['Zulassungsanfragen', 'Bewerbung einreichen', 'Dokumente hochladen', 'Bewerbungsstatus verfolgen', 'Gebührenzahlung', 'Virtuelle Touren', 'Stundenplan', 'Berater kontaktieren'],
        benefits: ['Schnellerer Zulassungsprozess', 'Weniger Verwaltungsaufwand', 'Bessere Elternerfahrung', 'Genaue Nachverfolgung', 'Weniger Fehler', 'Mehr Anmeldungen'],
        useCases: ['Privatschulen', 'Universitäten', 'Sprachschulen', 'Ausbildungszentren', 'Kindergärten'],
        timeframe: '4 Monate',
        metrics: ['Zulassungsgeschwindigkeit', 'Anmeldequote', 'Elternzufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Können Dokumente hochgeladen werden?', answer: 'Ja, sicheres Hochladen von Zeugnissen und Dokumenten direkt über WhatsApp.' }]
    },

    'whatsapp-parent-communication': {
        title: 'Elternkommunikation',
        description: 'Umfassende Kommunikationsplattform zwischen Schule und Eltern über WhatsApp für Ankündigungen und Berichte.',
        shortDescription: 'Direkte Kommunikation mit der Schule',
        features: ['Ankündigungen senden', 'Schülerberichte', 'Prüfungsplan', 'Anwesenheitsbenachrichtigungen', 'Urlaubsanträge', 'Lehrerkontakt', 'Noten und Bewertungen', 'Aktivitäten und Events'],
        benefits: ['Bessere Kommunikation', 'Einfachere Nachverfolgung', 'Weniger Papier', 'Sofortige Benachrichtigungen', 'Elternzufriedenheit', 'Mehr Transparenz'],
        useCases: ['Schulen', 'Kindergärten', 'Betreuungszentren', 'Sommercamps', 'Trainingszentren'],
        timeframe: '3 Monate',
        metrics: ['Interaktionsrate', 'Elternzufriedenheit', 'Reduzierte Anfragen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kann man den Lehrer kontaktieren?', answer: 'Ja, private Nachrichten an Lehrer mit schneller Antwort.' }]
    },

    'whatsapp-online-courses': {
        title: 'Online-Kurse über WhatsApp',
        description: 'Plattform für Kursbereitstellung und Lerninhalt über WhatsApp mit Tests und Fortschrittsverfolgung.',
        shortDescription: 'Lernen über WhatsApp',
        features: ['Tägliche Inhalte', 'Lernvideos', 'Tests und Bewertungen', 'Abschlusszertifikate', 'Diskussionsgruppen', 'Trainer-Support', 'Kurserinnerungen', 'Fortschrittsberichte'],
        benefits: ['Einfacherer Zugang für Lernende', 'Höheres Engagement', 'Bessere Kursabschlüsse', 'Niedrigere Kosten', 'Flexible Lernzeiten', 'Skalierbarkeit'],
        useCases: ['Trainingszentren', 'Freiberufliche Trainer', 'Unternehmen', 'Bildungseinrichtungen', 'Berater'],
        timeframe: '4 Monate',
        metrics: ['Abschlussrate', 'Teilnehmerzufriedenheit', 'Verkäufe'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Wie werden Tests durchgeführt?', answer: 'Interaktive Tests über WhatsApp mit sofortigen Ergebnissen.' }]
    },

    // ==================== TRAVEL & TOURISM ====================

    'whatsapp-travel-booking': {
        title: 'Reise- und Tourismusbuchung über WhatsApp',
        description: 'Buchen Sie Ihre Reisen, Hotels und Sehenswürdigkeiten einfach über WhatsApp mit sofortigem Support.',
        shortDescription: 'Buchen Sie Ihre Reise über WhatsApp',
        features: ['Flugbuchung', 'Hotelbuchung', 'Touristische Touren', 'Reisevisa', 'Autovermietung', 'Versicherung', 'Buchungsverfolgung', '24/7 Support'],
        benefits: ['Schnelle Buchung', 'Wettbewerbsfähige Preise', 'Persönlicher Support', 'Einfache Änderungen', 'Alles an einem Ort', 'Exklusive Angebote'],
        useCases: ['Reisebüros', 'Tourismusunternehmen', 'Hotels', 'Fluggesellschaften', 'Reiseveranstalter'],
        timeframe: '5 Monate',
        metrics: ['Buchungen', 'Kundenzufriedenheit', 'Umsatz'],
        deliveryTime: '4-5 Wochen',
        faqs: [{ question: 'Kann man die Buchung ändern?', answer: 'Ja, einfache Änderung oder Stornierung über WhatsApp.' }]
    },

    // ==================== FINANCE & BANKING ====================

    'whatsapp-banking-assistant': {
        title: 'Banking-Assistent über WhatsApp',
        description: 'Intelligente Bankdienstleistungen über WhatsApp mit Kontoabfrage, Überweisungen und Rechnungszahlung.',
        shortDescription: 'Ihre Bankdienste über WhatsApp',
        features: ['Kontostandabfrage', 'Kontoauszug', 'Überweisungen', 'Rechnungszahlung', 'Transaktionswarnungen', 'Kartenbestellung', 'Karte sperren', 'Kundensupport'],
        benefits: ['24/7 Service', 'Schnelle Transaktionen', 'Hohe Sicherheit', 'Weniger Filialbesuche', 'Kundenzufriedenheit', 'Kosteneinsparung'],
        useCases: ['Banken', 'Finanzierungsunternehmen', 'Digitale Wallets', 'Zahlungsanbieter', 'Kreditunionen'],
        timeframe: '6 Monate',
        metrics: ['Digitale Transaktionen', 'Kundenzufriedenheit', 'Kosteneinsparungen'],
        deliveryTime: '5-6 Wochen',
        faqs: [{ question: 'Ist es sicher?', answer: 'Ja, Bankverschlüsselung und Multi-Faktor-Authentifizierung.' }]
    },

    // ==================== AUTOMOTIVE ====================

    'whatsapp-car-service': {
        title: 'Autowartungsservice über WhatsApp',
        description: 'Buchen Sie Wartungstermine, erhalten Sie Serviceerinnerungen und verfolgen Sie Reparaturen über WhatsApp.',
        shortDescription: 'Pflegen Sie Ihr Auto über WhatsApp',
        features: ['Wartungsbuchung', 'Regelmäßige Serviceerinnerungen', 'Reparaturverfolgung', 'Kostenvoranschläge', 'Ersatzteilbestellung', 'Wartungshistorie', 'Pflegetipps', 'Notdienst'],
        benefits: ['Regelmäßige Wartung', 'Weniger Pannen', 'Treue Kunden', 'Kontinuierliche Einnahmen', 'Zeitersparnis', 'Kundenzufriedenheit'],
        useCases: ['Autowerkstätten', 'Autohäuser', 'Reifencenter', 'Ersatzteilhändler', 'Pannendienste'],
        timeframe: '4 Monate',
        metrics: ['Regelmäßige Wartungen', 'Kundenzufriedenheit', 'Umsatz'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Wie verfolge ich die Wartung meines Autos?', answer: 'Komplette Wartungshistorie mit Erinnerungen für den nächsten Service.' }]
    },

    // ==================== LEGAL SERVICES ====================

    'whatsapp-legal-consultation': {
        title: 'Rechtsberatung über WhatsApp',
        description: 'Erhalten Sie schnelle und zuverlässige Rechtsberatung über WhatsApp von zugelassenen Anwälten.',
        shortDescription: 'Beraten Sie sich mit einem Anwalt über WhatsApp',
        features: ['Schnelle Beratung', 'Terminbuchung', 'Dokumentenversand', 'Fallverfolgung', 'Rechtsfragen', 'Vertragsvorlagen', 'Vollmachten', 'Gebührenzahlung'],
        benefits: ['Einfacher Zugang zur Justiz', 'Zeitersparnis', 'Niedrigere Kosten', 'Experten in vielen Bereichen', 'Volle Vertraulichkeit', 'Kontinuierliche Nachverfolgung'],
        useCases: ['Anwaltskanzleien', 'Freiberufliche Anwälte', 'Unternehmen', 'Institutionen', 'Privatpersonen'],
        timeframe: '4 Monate',
        metrics: ['Beratungen', 'Kundenzufriedenheit', 'Umsatz'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Ist die Beratung vertraulich?', answer: 'Ja, volle Anwaltsschweigepflicht mit Verschlüsselung.' }]
    },

    // ==================== FITNESS & GYM ====================

    'whatsapp-gym-membership': {
        title: 'Fitnessstudio-Mitgliedschaft über WhatsApp',
        description: 'Verwalten Sie Gym-Mitgliedschaften, buchen Sie Kurse und kommunizieren Sie mit Trainern über WhatsApp.',
        shortDescription: 'Ihr Fitnessstudio über WhatsApp',
        features: ['Mitgliedschaftsverlängerung', 'Kursbuchung', 'Trainingsplan', 'Trainer kontaktieren', 'Fortschrittsverfolgung', 'Ernährungstipps', 'Sonderangebote', 'Mitgliedschaft pausieren'],
        benefits: ['Treue Kunden', 'Bessere Anwesenheit', 'Kontinuierliche Kommunikation', 'Mehr Verlängerungen', 'Mitgliederzufriedenheit', 'Zusätzliche Einnahmen'],
        useCases: ['Fitnessstudios', 'Yoga-Studios', 'Fitnesszentren', 'Personal Trainer', 'Sportvereine'],
        timeframe: '3 Monate',
        metrics: ['Verlängerungsrate', 'Anwesenheit', 'Mitgliederzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie buche ich einen Kurs?', answer: 'Wählen Sie Art und Zeit und erhalten Sie sofortige Bestätigung.' }]
    },

    // ==================== BEAUTY & SPA ====================

    'whatsapp-beauty-booking': {
        title: 'Schönheitssalon-Buchung über WhatsApp',
        description: 'Buchen Sie Schönheitssalon- und Spa-Termine einfach mit Auswahl von Dienstleistung, Mitarbeiter und Zeit.',
        shortDescription: 'Buchen Sie Ihren Beauty-Termin über WhatsApp',
        features: ['Dienstleistungen buchen', 'Mitarbeiter auswählen', 'Preisliste', 'Sonderangebote', 'Terminerinnerungen', 'Treuepunkte', 'Arbeitsgalerie', 'Produktbestellung'],
        benefits: ['Mehr Buchungen', 'Weniger Stornierungen', 'Treue Kunden', 'Einfaches Marketing', 'Zeitersparnis', 'Wertvolle Daten'],
        useCases: ['Schönheitssalons', 'Spa-Zentren', 'Friseure', 'Hautpflegezentren', 'Nagelstudios'],
        timeframe: '3 Monate',
        metrics: ['Buchungen', 'Stornierungen', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kann man den Mitarbeiter wählen?', answer: 'Ja, wählen Sie Ihren bevorzugten Mitarbeiter und sehen Sie dessen Verfügbarkeit.' }]
    },

    // ==================== LOGISTICS & DELIVERY ====================

    'whatsapp-delivery-management': {
        title: 'Liefer- und Versandmanagement über WhatsApp',
        description: 'Verwalten Sie Liefervorgänge komplett von Abholung bis Zustellung mit Live-Tracking von Fahrern und Paketen.',
        shortDescription: 'Verwalten Sie Ihre Lieferungen über WhatsApp',
        features: ['Lieferung anfordern', 'Sendungsverfolgung', 'Fahrer kontaktieren', 'Liefernachweis', 'Abholung planen', 'Kostenberechnung', 'Erneute Lieferung', 'Leistungsberichte'],
        benefits: ['Volle Transparenz', 'Kundenzufriedenheit', 'Höhere Effizienz', 'Weniger Probleme', 'Genaues Tracking', 'Kosteneinsparung'],
        useCases: ['Lieferunternehmen', 'E-Commerce-Shops', 'Restaurants', 'Apotheken', 'Versandunternehmen'],
        timeframe: '4 Monate',
        metrics: ['Zustellrate', 'Kundenzufriedenheit', 'Effizienz'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Kann man den Fahrer verfolgen?', answer: 'Ja, Live-Standort des Fahrers mit voraussichtlicher Ankunftszeit.' }]
    },

    // ==================== EVENTS & ENTERTAINMENT ====================

    'whatsapp-event-booking': {
        title: 'Event- und Ticketbuchung über WhatsApp',
        description: 'Buchen Sie Konzert-, Event- und Konferenztickets einfach über WhatsApp mit digitalen Tickets.',
        shortDescription: 'Buchen Sie Ihr Event über WhatsApp',
        features: ['Events durchsuchen', 'Tickets buchen', 'Platzauswahl', 'Online-Zahlung', 'Digitale QR-Tickets', 'Erinnerungen', 'Stornierung und Erstattung', 'Mit Freunden teilen'],
        benefits: ['Höhere Verkäufe', 'Einfache Erfahrung', 'Keine Warteschlangen', 'Direktmarketing', 'Kundendaten', 'Niedrigere Kosten'],
        useCases: ['Konzertveranstalter', 'Theater', 'Konferenzen', 'Stadien', 'Museen'],
        timeframe: '3 Monate',
        metrics: ['Ticketverkäufe', 'Besucherzufriedenheit', 'Kosten'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie erhalte ich mein Ticket?', answer: 'Digitales QR-Ticket wird sofort auf WhatsApp gesendet.' }]
    },

    // ==================== INSURANCE ====================

    'whatsapp-insurance-claims': {
        title: 'Versicherungsansprüche über WhatsApp',
        description: 'Reichen Sie Versicherungsansprüche ein, verfolgen Sie den Status und erhalten Sie Entschädigungen einfach über WhatsApp.',
        shortDescription: 'Reichen Sie Ihren Anspruch über WhatsApp ein',
        features: ['Ansprüche einreichen', 'Dokumente hochladen', 'Status verfolgen', 'Sachbearbeiter kontaktieren', 'Policen erneuern', 'Anfragen', 'Bescheinigungen anfordern', 'Pläne vergleichen'],
        benefits: ['Schnellere Ansprüche', 'Statustransparenz', 'Kundenzufriedenheit', 'Zeitersparnis', 'Höhere Genauigkeit', 'Niedrigere Kosten'],
        useCases: ['Versicherungsunternehmen', 'Versicherungsmakler', 'Krankenversicherung', 'Kfz-Versicherung', 'Lebensversicherung'],
        timeframe: '5 Monate',
        metrics: ['Anspruchsgeschwindigkeit', 'Kundenzufriedenheit', 'Abschlussrate'],
        deliveryTime: '4-5 Wochen',
        faqs: [{ question: 'Können Unfallfotos hochgeladen werden?', answer: 'Ja, laden Sie alle Dokumente und Fotos direkt über WhatsApp hoch.' }]
    },

    // ==================== B2B SERVICES ====================

    'whatsapp-b2b-orders': {
        title: 'B2B-Großhandelsbestellungen über WhatsApp',
        description: 'Verwalten Sie Großhandelsbestellungen mit speziellem Katalog, individuellen Preisen und Auftragsverfolgung.',
        shortDescription: 'Bestellen Sie Großhandel über WhatsApp',
        features: ['Großhandelskatalog', 'Händlerpreise', 'Kreditlimit', 'Auftragsverfolgung', 'Automatische Rechnungen', 'Zahlungserinnerungen', 'Händlerangebote', 'Verkaufsberichte'],
        benefits: ['Schnellere Bestellungen', 'Weniger Fehler', 'Bessere Beziehungen', 'Mehr Umsatz', 'Zeitersparnis', 'Genaue Daten'],
        useCases: ['Distributoren', 'Hersteller', 'Großhändler', 'Lieferanten', 'Importeure'],
        timeframe: '4 Monate',
        metrics: ['Auftragsvolumen', 'Zyklusgeschwindigkeit', 'Händlerzufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Kann man den Kontostand sehen?', answer: 'Ja, Kreditguthaben und offene Rechnungen sind jederzeit verfügbar.' }]
    },

    // ==================== PET CARE ====================

    'whatsapp-pet-services': {
        title: 'Haustierpflegedienste',
        description: 'Buchen Sie Tierpflegedienste wie Fellpflege, Beherbergung und Training über WhatsApp.',
        shortDescription: 'Verwöhnen Sie Ihr Haustier über WhatsApp',
        features: ['Fellpflege buchen', 'Tierbeherbergung', 'Trainingssitzungen', 'Tägliches Gassigehen', 'Gesundheitspflege', 'Zubehörshop', 'Impfungen', 'Pflegetipps'],
        benefits: ['Bequemer Service', 'Regelmäßige Erinnerungen', 'Treue Kunden', 'Zusatzverkäufe', 'Bessere Pflege', 'Zeitersparnis'],
        useCases: ['Tiersalons', 'Tierhotels', 'Trainingszentren', 'Gassigehservice', 'Tierhandlungen'],
        timeframe: '3 Monate',
        metrics: ['Buchungen', 'Kundenzufriedenheit', 'Verkäufe'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kann man Beherbergung buchen?', answer: 'Ja, buchen Sie mit Angabe von Zeitraum und Zusatzleistungen.' }]
    },

    // ==================== RESTAURANT (Additional) ====================

    'whatsapp-restaurant-ordering': {
        title: 'Intelligentes Restaurant-Bestellsystem',
        description: 'Umfassendes Bestellsystem für Restaurants mit Inhouse- und Lieferbestellungen plus Küchenmanagement.',
        shortDescription: 'Bestellen Sie im Restaurant über WhatsApp',
        features: ['Intelligente Speisekarte', 'Tischbestellung (QR)', 'Lieferbestellung', 'Abholbestellung', 'Multi-Zahlung', 'Rechnung teilen', 'Treueprogramm', 'Essensbewertung'],
        benefits: ['Mehr Bestellungen', 'Schnellerer Service', 'Weniger Fehler', 'Höhere Zufriedenheit', 'Wertvolle Daten', 'Kundenloyalität'],
        useCases: ['Restaurants', 'Restaurantketten', 'Cafeterien', 'Food Courts', 'Catering'],
        timeframe: '3 Monate',
        metrics: ['Bestellrate', 'Bestellwert', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Unterstützt es Tischbestellung?', answer: 'Ja, QR-Code an jedem Tisch für direkte Bestellung.' }]
    },

    // ==================== E-COMMERCE (Additional) ====================

    'cart-abandonment-recovery-whatsapp': {
        title: 'Warenkorbabbruch-Wiederherstellung',
        description: 'Automatisiertes System zum Senden von Erinnerungen an Kunden mit abgebrochenen Warenkörben.',
        shortDescription: 'Verlorene Verkäufe über WhatsApp wiedergewinnen',
        features: ['Automatische Erinnerungen', 'Personalisierte Rabatte', 'Multi-Follow-up', 'Conversion-Analysen'],
        benefits: ['25% Warenkörbe wiederherstellen', 'Mehr Umsatz', 'Bessere Conversion'],
        useCases: ['E-Commerce', 'Mode', 'Elektronik'],
        timeframe: '2 Monate',
        metrics: ['Wiederherstellungsrate', 'Umsatz'],
        deliveryTime: '1-2 Wochen',
        faqs: [{ question: 'Wie funktioniert es?', answer: 'Automatische Nachrichten nach Warenkorbabbruch.' }]
    },

    'loyalty-rewards-program-whatsapp': {
        title: 'Treueprogramm und Belohnungen',
        description: 'Integriertes Punkte- und Belohnungssystem über WhatsApp.',
        shortDescription: 'Punkte sammeln und einlösen über WhatsApp',
        features: ['Punkteverfolgung', 'Automatische Belohnungen', 'Exklusive Angebote', 'Mitgliedsstufen'],
        benefits: ['40% mehr Loyalität', 'Wiederholkäufe', 'Kundenzufriedenheit'],
        useCases: ['Einzelhandel', 'Restaurants', 'Salons'],
        timeframe: '3 Monate',
        metrics: ['Bindungsrate', 'Wiederholkaufrate'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie verdient man Punkte?', answer: 'Automatisch bei jedem Einkauf.' }]
    },

    // ==================== REAL ESTATE (Additional) ====================

    'virtual-property-tours-whatsapp': {
        title: 'Virtuelle Immobilienbesichtigungen',
        description: 'Interaktive Video-Rundgänge von Immobilien über WhatsApp.',
        shortDescription: 'Immobilien virtuell erkunden',
        features: ['360-Grad-Video', 'Live-Tour', 'Sofortige Fragen', 'Besichtigung buchen'],
        benefits: ['Zeitersparnis', 'Bessere Filterung', 'Schnellere Entscheidungen'],
        useCases: ['Immobilienunternehmen', 'Entwickler', 'Makler'],
        timeframe: '3 Monate',
        metrics: ['Besichtigungsrate', 'Conversion'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie starte ich eine Tour?', answer: 'Senden Sie den Immobiliennamen für die virtuelle Tour.' }]
    },

    'mortgage-calculator-whatsapp': {
        title: 'Hypothekenrechner',
        description: 'Berechnung von Finanzierungsraten und Berechtigung über WhatsApp.',
        shortDescription: 'Berechnen Sie Ihre Hypothek sofort',
        features: ['Sofortige Berechnung', 'Bankenvergleich', 'Berechtigungsprüfung', 'Antrag stellen'],
        benefits: ['Volle Transparenz', 'Informierte Entscheidungen', 'Zeitersparnis'],
        useCases: ['Banken', 'Finanzierungsgesellschaften', 'Immobilienmakler'],
        timeframe: '2 Monate',
        metrics: ['Finanzierungsanträge', 'Conversion'],
        deliveryTime: '2 Wochen',
        faqs: [{ question: 'Welche Infos werden benötigt?', answer: 'Einkommen, Immobilienwert und Anzahlung.' }]
    },

    // ==================== INSTAGRAM SOLUTIONS ====================

    'ig-fashion-boutique': {
        title: 'Instagram Mode-Boutique',
        description: 'Integriertes Verkaufssystem für Mode über Instagram mit Katalog und Bestellungen.',
        shortDescription: 'Mode über Instagram verkaufen',
        features: ['Interaktiver Katalog', 'Direktbestellung', 'Online-Zahlung', 'Bestellverfolgung'],
        benefits: ['Verkäufe über Instagram', 'Nahtlose Erfahrung', 'Neue Kunden'],
        useCases: ['Boutiquen', 'Designer', 'Aufstrebende Marken'],
        timeframe: '2 Monate',
        metrics: ['Verkäufe', 'Engagement', 'Follower'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie funktioniert es?', answer: 'Kunden browsen und bestellen direkt über DM.' }]
    },

    'ig-fitness-coaching': {
        title: 'Fitness-Coaching über Instagram',
        description: 'Persönliche Trainingsplattform und Fitness-Tracking über Instagram.',
        shortDescription: 'Persönliches Fitness-Coaching über Instagram',
        features: ['Trainingsprogramme', 'Fortschrittsverfolgung', 'Ernährungstipps', 'Live-Sessions'],
        benefits: ['Regelmäßige Einnahmen', 'Globale Kunden', 'Volle Flexibilität'],
        useCases: ['Personal Trainer', 'Fitnessstudios', 'Ernährungsberater'],
        timeframe: '3 Monate',
        metrics: ['Kunden', 'Abonnements', 'Ergebnisse'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Wie beginne ich?', answer: 'Programm wählen und wir kontaktieren Sie.' }]
    },

    // ==================== MESSENGER SOLUTIONS ====================

    'msg-b2b-leads': {
        title: 'B2B-Lead-Qualifizierung über Messenger',
        description: 'Automatisiertes Qualifizierungs- und Follow-up-System für Geschäftskunden.',
        shortDescription: 'Automatische B2B-Lead-Qualifizierung',
        features: ['Automatische Qualifizierung', 'Meeting-Planung', 'Intelligentes Follow-up', 'CRM-Integration'],
        benefits: ['Qualifizierte Leads', 'Zeitersparnis im Vertrieb', 'Höhere Conversion'],
        useCases: ['B2B-Unternehmen', 'SaaS', 'Professionelle Dienstleistungen'],
        timeframe: '3 Monate',
        metrics: ['Lead-Qualität', 'Conversion-Rate'],
        deliveryTime: '3 Wochen',
        faqs: [{ question: 'Wie wird qualifiziert?', answer: 'Intelligente Fragen ermitteln Bedürfnisse und Budget.' }]
    },

    'msg-customer-support': {
        title: 'Messenger-Kundensupport',
        description: 'Automatisierter 24/7-Kundensupport über Facebook Messenger.',
        shortDescription: 'Automatisierter Support über Messenger',
        features: ['Sofortige Antwort 24/7', 'FAQ', 'Weiterleitung an Mitarbeiter', 'Ticketverfolgung'],
        benefits: ['Kundenzufriedenheit', 'Kostenersparnis', 'Durchgehender Service'],
        useCases: ['Einzelhandel', 'Services', 'Technologie'],
        timeframe: '2 Monate',
        metrics: ['Antwortzeit', 'Kundenzufriedenheit'],
        deliveryTime: '2 Wochen',
        faqs: [{ question: 'Ersetzt es Menschen?', answer: 'Nein, behandelt häufige Fragen und leitet Komplexes weiter.' }]
    },

    // ==================== NEXT.JS SOLUTIONS ====================

    'next-saas-platform': {
        title: 'SaaS-Plattform mit Next.js',
        description: 'Entwicklung einer vollständigen SaaS-Plattform mit Abonnements und Dashboard.',
        shortDescription: 'Professionelle SaaS-Plattform',
        features: ['Abonnements', 'Dashboard', 'Integrierte API', 'Analysen', 'Online-Zahlung'],
        benefits: ['Höchste Geschwindigkeit', 'Exzellentes SEO', 'Skalierbarkeit'],
        useCases: ['Startups', 'Digitale Produkte', 'Cloud-Services'],
        timeframe: '4-6 Monate',
        metrics: ['Abonnements', 'Bindung', 'Umsatz'],
        deliveryTime: '8-12 Wochen',
        faqs: [{ question: 'Warum Next.js?', answer: 'Hohe Leistung, exzellentes SEO, nahtlose Entwicklererfahrung.' }]
    },

    'next-ecommerce': {
        title: 'Next.js E-Commerce-Shop',
        description: 'Schneller und skalierbarer Online-Shop mit Next.js-Technologie.',
        shortDescription: 'Ultraschneller Online-Shop',
        features: ['Dynamischer Katalog', 'Warenkorb', 'Multi-Zahlung', 'Bestandsverwaltung'],
        benefits: ['Ladezeit <1 Sekunde', 'Exzellentes SEO', 'Höhere Conversion'],
        useCases: ['Einzelhandel', 'Marken', 'Distributoren'],
        timeframe: '3-4 Monate',
        metrics: ['Verkäufe', 'Website-Geschwindigkeit', 'Conversion'],
        deliveryTime: '6-8 Wochen',
        faqs: [{ question: 'Unterstützt es tausende Produkte?', answer: 'Ja, für Skalierung mit hoher Leistung konzipiert.' }]
    },

    // ==================== SEO SOLUTIONS ====================

    'seo-ecommerce': {
        title: 'E-Commerce SEO-Optimierung',
        description: 'Umfassende SEO-Strategie für Online-Shops zur Steigerung des organischen Traffics.',
        shortDescription: 'Spezialisiertes Shop-SEO',
        features: ['Produktoptimierung', 'Keywords', 'Backlinks', 'Website-Geschwindigkeit'],
        benefits: ['200% mehr Traffic', 'Organische Verkäufe', 'Niedrigere Kosten'],
        useCases: ['Online-Shops', 'Marktplätze', 'Einzelhandel'],
        timeframe: '6-12 Monate',
        metrics: ['Keyword-Ranking', 'Organischer Traffic', 'Verkäufe'],
        deliveryTime: 'Fortlaufend',
        faqs: [{ question: 'Wann sehe ich Ergebnisse?', answer: 'Erste Ergebnisse in 3 Monaten, signifikante in 6-12 Monaten.' }]
    },

    'seo-local': {
        title: 'Lokales SEO für Unternehmen',
        description: 'Optimierung der Sichtbarkeit in lokaler Suche und Google Maps.',
        shortDescription: 'Bessere Sichtbarkeit in lokaler Suche',
        features: ['Google Business', 'Bewertungen', 'Maps', 'Lokale Keywords'],
        benefits: ['Sichtbarkeit in Maps', 'Lokale Kunden', 'Höheres Vertrauen'],
        useCases: ['Restaurants', 'Praxen', 'Einzelhandel'],
        timeframe: '3-6 Monate',
        metrics: ['Lokales Ranking', 'Anrufe', 'Ladenbesuche'],
        deliveryTime: 'Fortlaufend',
        faqs: [{ question: 'Was unterscheidet es von normalem SEO?', answer: 'Fokus auf lokale Suche, Maps und Bewertungen.' }]
    },

    // ==================== AI AUTOMATION ====================

    'auto-sales': {
        title: 'KI-Vertriebsautomatisierung',
        description: 'Automatisierung von Vertriebsprozessen von der Qualifizierung bis zum Abschluss mit KI.',
        shortDescription: 'Automatisierter Vertrieb mit KI',
        features: ['Automatische Qualifizierung', 'Intelligentes Follow-up', 'Chancenanalyse', 'Verkaufsprognosen'],
        benefits: ['40% mehr Verkäufe', 'Zeitersparnis', 'Bessere Entscheidungen'],
        useCases: ['Vertriebsteams', 'B2B-Unternehmen', 'SaaS'],
        timeframe: '3 Monate',
        metrics: ['Conversion-Rate', 'Deal-Wert', 'Abschlussgeschwindigkeit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Braucht es Training?', answer: 'KI lernt automatisch aus Ihren Daten.' }]
    },

    'auto-customer-service': {
        title: 'KI-Kundenservice',
        description: 'Intelligenter Chatbot für 24/7-Kundenservice.',
        shortDescription: 'Intelligenter 24/7-Support',
        features: ['Sofortige Antwort', 'Natürliches Sprachverständnis', 'Kontinuierliches Lernen', 'Weiterleitung an Menschen'],
        benefits: ['Service 24/7', '60% Kosteneinsparung', 'Höhere Zufriedenheit'],
        useCases: ['Alle Unternehmen', 'E-Commerce', 'Dienstleistungen'],
        timeframe: '2 Monate',
        metrics: ['Antwortzeit', 'Lösungsrate', 'Kundenzufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Versteht es Deutsch?', answer: 'Ja, trainiert für Deutsch und Englisch.' }]
    },

    // ==================== EDUCATION (Additional) ====================

    'attendance-tracking-notifications-whatsapp': {
        title: 'Anwesenheitsverfolgung und Benachrichtigungen',
        description: 'Automatisches System zur Verfolgung der Schüleranwesenheit und sofortige Elternbenachrichtigung.',
        shortDescription: 'Anwesenheit über WhatsApp verfolgen',
        features: ['Anwesenheitserfassung', 'Sofortige Abwesenheitsbenachrichtigung', 'Wöchentliche Berichte'],
        benefits: ['Bessere Überwachung', 'Weniger Fehlzeiten', 'Sofortige Kommunikation'],
        useCases: ['Schulen', 'Universitäten', 'Ausbildungszentren'],
        timeframe: '2 Monate',
        metrics: ['Anwesenheitsrate', 'Elternzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie wird erfasst?', answer: 'Automatisch beim Eintritt oder durch den Lehrer.' }]
    },

    'class-schedule-timetable-whatsapp': {
        title: 'Stundenplan und Termine',
        description: 'Verwaltung von Stundenplänen und Änderungsbenachrichtigungen.',
        shortDescription: 'Intelligenter Stundenplan über WhatsApp',
        features: ['Stundenplan anzeigen', 'Änderungsbenachrichtigungen', 'Stundenerinnerungen'],
        benefits: ['Bessere Organisation', 'Sofortige Benachrichtigungen'],
        useCases: ['Schulen', 'Universitäten', 'Ausbildungszentren'],
        timeframe: '1 Monat',
        metrics: ['Systemnutzung', 'Benutzerzufriedenheit'],
        deliveryTime: '1-2 Wochen',
        faqs: [{ question: 'Last-Minute-Änderungen?', answer: 'Ja, sofortige Benachrichtigungen bei Änderungen.' }]
    },

    'exam-result-notification-whatsapp': {
        title: 'Prüfungsergebnis-Benachrichtigungen',
        description: 'System zum Senden von Prüfungsergebnissen an Schüler und Eltern.',
        shortDescription: 'Prüfungsergebnisse über WhatsApp',
        features: ['Ergebnisse senden', 'Leistungsanalyse', 'Verbesserungstipps'],
        benefits: ['Sofortige Information', 'Datenschutz', 'Zeitersparnis'],
        useCases: ['Schulen', 'Universitäten', 'Prüfungszentren'],
        timeframe: '1 Monat',
        metrics: ['Benachrichtigungsgeschwindigkeit', 'Elternzufriedenheit'],
        deliveryTime: '1-2 Wochen',
        faqs: [{ question: 'Sind Ergebnisse sicher?', answer: 'Ja, verschlüsselt und passwortgeschützt.' }]
    },

    'homework-assignment-reminders-whatsapp': {
        title: 'Hausaufgaben-Erinnerungen',
        description: 'Erinnerungssystem für Hausaufgaben und Abgabetermine.',
        shortDescription: 'Hausaufgaben-Erinnerungen über WhatsApp',
        features: ['Aufgabenliste', 'Erinnerung vor Termin', 'Elektronische Abgabe'],
        benefits: ['Bessere Verbindlichkeit', 'Weniger Vergessen'],
        useCases: ['Schulen', 'Privatlehrer', 'Bildungszentren'],
        timeframe: '1 Monat',
        metrics: ['Abgaberate', 'Termintreue'],
        deliveryTime: '1-2 Wochen',
        faqs: [{ question: 'Wann wird erinnert?', answer: 'Zwei Tage, einen Tag und zwei Stunden vorher.' }]
    },

    'library-book-management-whatsapp': {
        title: 'Bibliotheksverwaltung',
        description: 'Ausleihe und Rückgabesystem mit Erinnerungen.',
        shortDescription: 'Bibliothek über WhatsApp verwalten',
        features: ['Buchsuche', 'Ausleihanfrage', 'Rückgabeerinnerung', 'Vorbestellung'],
        benefits: ['Einfachere Verwaltung', 'Weniger Verspätungen'],
        useCases: ['Schulbibliotheken', 'Universitätsbibliotheken', 'Öffentliche Bibliotheken'],
        timeframe: '2 Monate',
        metrics: ['Ausleihrate', 'Rückgabeverzögerungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kann ich ein ausgeliehenes Buch reservieren?', answer: 'Ja, Sie werden benachrichtigt, sobald es verfügbar ist.' }]
    },

    'online-class-meeting-links-whatsapp': {
        title: 'Virtuelle Klassenlinks',
        description: 'Automatisches Senden von Links zu virtuellen Unterrichtsstunden.',
        shortDescription: 'Unterrichtslinks über WhatsApp',
        features: ['Automatisches Senden', 'Erinnerung vor der Stunde', 'Aufzeichnungslink'],
        benefits: ['Keine verlorenen Links', 'Höhere Teilnahme'],
        useCases: ['Schulen', 'Universitäten', 'Online-Kurse'],
        timeframe: '1 Monat',
        metrics: ['Teilnahmerate', 'Zugänglichkeit'],
        deliveryTime: '1-2 Wochen',
        faqs: [{ question: 'Welche Plattformen?', answer: 'Zoom, Google Meet und Microsoft Teams.' }]
    },

    'student-enrollment-automation-whatsapp': {
        title: 'Automatische Schülereinschreibung',
        description: 'Automatisches System zur Einschreibung neuer Schüler.',
        shortDescription: 'Schülereinschreibung über WhatsApp',
        features: ['Anmeldeformular', 'Dokumenten-Upload', 'Statusverfolgung', 'Gebührenzahlung'],
        benefits: ['Schnellere Einschreibung', 'Weniger Fehler'],
        useCases: ['Schulen', 'Universitäten', 'Ausbildungszentren'],
        timeframe: '3 Monate',
        metrics: ['Einschreibungsgeschwindigkeit', 'Elternzufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Online-Zahlung?', answer: 'Ja, Karten und E-Wallets.' }]
    },

    // ==================== E-COMMERCE (Additional) ====================

    'ecommerce-store-automation': {
        title: 'E-Commerce-Automatisierung',
        description: 'Umfassendes System zur Automatisierung von Online-Shop-Prozessen.',
        shortDescription: 'Shop automatisieren über WhatsApp',
        features: ['Interaktiver Katalog', 'Warenkorb', 'Online-Zahlung', 'Bestellverfolgung'],
        benefits: ['Verkauf 24/7', 'Reibungsloses Erlebnis', 'Mehr Kunden'],
        useCases: ['Online-Shops', 'Marken', 'Distributoren'],
        timeframe: '3 Monate',
        metrics: ['Verkäufe', 'Conversion', 'Kundenzufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Website nötig?', answer: 'Nein, funktioniert eigenständig über WhatsApp.' }]
    },

    'ecommerce-customer-support-whatsapp': {
        title: 'E-Commerce-Kundensupport',
        description: 'Integriertes Kundensupport-System für Online-Shops.',
        shortDescription: 'Shop-Kundensupport über WhatsApp',
        features: ['Auto-Antwort', 'Bestellverfolgung', 'FAQ', 'Weiterleitung'],
        benefits: ['24/7-Support', 'Höhere Zufriedenheit', 'Kosteneinsparung'],
        useCases: ['Online-Shops', 'Marken', 'Distributoren'],
        timeframe: '2 Monate',
        metrics: ['Antwortzeit', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie viele Fragen automatisch?', answer: '80% der häufigen Fragen.' }]
    },

    'order-tracking-notifications-whatsapp': {
        title: 'Bestellverfolgung-Benachrichtigungen',
        description: 'Versand- und Bestellverfolgungssystem mit Kundenbenachrichtigungen.',
        shortDescription: 'Bestellungen über WhatsApp verfolgen',
        features: ['Echtzeit-Tracking', 'Statusbenachrichtigungen', 'Liefertermin'],
        benefits: ['Volle Transparenz', 'Kundenzufriedenheit', 'Weniger Anfragen'],
        useCases: ['Online-Shops', 'Versandunternehmen', 'Restaurants'],
        timeframe: '2 Monate',
        metrics: ['Kundenzufriedenheit', 'Anfragen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie oft Updates?', answer: 'Bei jeder Statusänderung.' }]
    },

    'flash-sale-campaigns-whatsapp': {
        title: 'Blitzverkauf-Kampagnen',
        description: 'Verwaltung von Angebots- und Rabattkampagnen.',
        shortDescription: 'Angebotskampagnen über WhatsApp',
        features: ['Angebotsbenachrichtigung', 'Countdown', 'Direkter Kauflink'],
        benefits: ['Schnelle Verkäufe', 'Hohe Interaktion', 'Kundenbindung'],
        useCases: ['Online-Shops', 'Marken', 'Angebotsplattformen'],
        timeframe: '1 Monat',
        metrics: ['Kampagnenverkäufe', 'Öffnungsrate'],
        deliveryTime: '1-2 Wochen',
        faqs: [{ question: 'Wie viele Kunden?', answer: 'Unbegrenzt mit intelligenter Segmentierung.' }]
    },

    // ==================== REAL ESTATE (Additional) ====================

    'property-search-assistant-whatsapp': {
        title: 'Immobiliensuch-Assistent',
        description: 'Intelligenter Assistent zur Immobiliensuche nach Kriterien.',
        shortDescription: 'Immobilie über WhatsApp suchen',
        features: ['Kriteriensuche', 'Intelligente Vorschläge', 'Immobilienvergleich'],
        benefits: ['Zeitersparnis', 'Genaue Ergebnisse', 'Einfache Erfahrung'],
        useCases: ['Immobilienunternehmen', 'Makler', 'Immobilienportale'],
        timeframe: '3 Monate',
        metrics: ['Anfragen', 'Besichtigungsbuchungen'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Wie Kriterien angeben?', answer: 'Antworten Sie auf einfache Fragen zu Lage, Budget und Fläche.' }]
    },

    'property-alerts-matching-whatsapp': {
        title: 'Passende Immobilien-Benachrichtigungen',
        description: 'System zur Benachrichtigung über neue passende Immobilien.',
        shortDescription: 'Neue Immobilien-Alerts',
        features: ['Sofortige Benachrichtigung', 'Genaue Übereinstimmung', 'Schnelle Buchung'],
        benefits: ['Erste Chancen', 'Nichts verpassen'],
        useCases: ['Immobilienunternehmen', 'Immobilienportale', 'Makler'],
        timeframe: '2 Monate',
        metrics: ['Geöffnete Benachrichtigungen', 'Buchungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie oft Benachrichtigungen?', answer: 'Sobald eine passende Immobilie hinzugefügt wird.' }]
    },

    'property-document-collection-whatsapp': {
        title: 'Immobiliendokumente sammeln',
        description: 'System zum Sammeln von Kauf- und Verkaufsdokumenten.',
        shortDescription: 'Immobiliendokumente über WhatsApp',
        features: ['Dokumentenliste', 'Sicherer Upload', 'Statusverfolgung'],
        benefits: ['Schnellere Verfahren', 'Weniger Fehler'],
        useCases: ['Immobilienunternehmen', 'Anwälte', 'Banken'],
        timeframe: '2 Monate',
        metrics: ['Abschlussgeschwindigkeit', 'Vollständige Dokumente'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Sind Dokumente sicher?', answer: 'Ja, verschlüsselt und geschützt.' }]
    },

    'property-contract-esignature-whatsapp': {
        title: 'Elektronische Vertragsunterschrift',
        description: 'Elektronisches Unterschriftssystem für Immobilienverträge.',
        shortDescription: 'Vertrag über WhatsApp unterschreiben',
        features: ['Digitaler Vertrag', 'E-Signatur', 'Sichere Archivierung'],
        benefits: ['Zeitersparnis', 'Rechtsgültigkeit'],
        useCases: ['Immobilienunternehmen', 'Anwälte', 'Eigentümer'],
        timeframe: '3 Monate',
        metrics: ['Unterschriebene Verträge', 'Abschlussgeschwindigkeit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Rechtlich bindend?', answer: 'Ja, anerkannt und rechtsgültig.' }]
    },

    'property-investment-roi-calculator': {
        title: 'Investitions-ROI-Rechner',
        description: 'Berechnung der erwarteten Rendite von Immobilieninvestitionen.',
        shortDescription: 'Immobilien-ROI berechnen',
        features: ['ROI-Berechnung', 'Marktanalyse', 'Chancenvergleich'],
        benefits: ['Informierte Entscheidungen', 'Klügere Investitionen'],
        useCases: ['Investoren', 'Immobilienunternehmen', 'Banken'],
        timeframe: '2 Monate',
        metrics: ['Rechnernutzung', 'Erfolgreiche Investitionen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie genau?', answer: '85-90% basierend auf Marktdaten.' }]
    },

    // ==================== INSTAGRAM (Additional) ====================

    'ig-beauty-salon': {
        title: 'Instagram Beauty-Salon',
        description: 'Terminbuchungssystem für Schönheitssalons über Instagram.',
        shortDescription: 'Beauty-Termine über Instagram',
        features: ['Dienstleistungen anzeigen', 'Direkte Buchung', 'Arbeitsportfolio'],
        benefits: ['Mehr Buchungen', 'Kostenloses Marketing', 'Neue Kunden'],
        useCases: ['Schönheitssalons', 'Spas', 'Make-up-Artists'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Follower'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie bucht der Kunde?', answer: 'Über DM oder Buchungslink.' }]
    },

    'ig-ecommerce-store': {
        title: 'Instagram-Shop',
        description: 'Integrierter Online-Shop über Instagram.',
        shortDescription: 'Produkte über Instagram verkaufen',
        features: ['Produktkatalog', 'DM-Bestellung', 'Online-Zahlung', 'Versandintegration'],
        benefits: ['Verkäufe über Instagram', 'Fertiges Publikum', 'Geringere Kosten'],
        useCases: ['Online-Shops', 'Handwerker', 'Kleine Marken'],
        timeframe: '2 Monate',
        metrics: ['Verkäufe', 'Bestellungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Website nötig?', answer: 'Nein, funktioniert direkt über Instagram.' }]
    },

    'ig-restaurant-orders': {
        title: 'Restaurant-Bestellungen über Instagram',
        description: 'Bestellannahme-System für Restaurants über Instagram.',
        shortDescription: 'Essensbestellungen über Instagram',
        features: ['Digitale Speisekarte', 'DM-Bestellung', 'Bestellverfolgung'],
        benefits: ['Neuer Kanal', 'Jüngere Kunden', 'Kostenloses Marketing'],
        useCases: ['Restaurants', 'Cafés', 'Bäckereien'],
        timeframe: '2 Monate',
        metrics: ['Bestellungen', 'Neue Follower'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie bestellt der Kunde?', answer: 'Per DM oder interaktives Menü.' }]
    },

    // ==================== MESSENGER (Additional) ====================

    'msg-real-estate': {
        title: 'Immobilien über Messenger',
        description: 'Immobiliensuche und -anfragen über Messenger.',
        shortDescription: 'Immobilie über Messenger suchen',
        features: ['Immobiliensuche', 'Besichtigung buchen', 'Anfragen', 'Benachrichtigungen'],
        benefits: ['Einfacherer Zugang', 'Schnelle Interaktion'],
        useCases: ['Immobilienunternehmen', 'Makler', 'Immobilienportale'],
        timeframe: '2 Monate',
        metrics: ['Anfragen', 'Buchungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Facebook-Verknüpfung?', answer: 'Ja, vollständige Integration mit Facebook-Seite.' }]
    },

    'msg-education': {
        title: 'Bildung über Messenger',
        description: 'Interaktive Lernplattform über Messenger.',
        shortDescription: 'Lernen über Messenger',
        features: ['Interaktive Lektionen', 'Tests', 'Fortschrittsverfolgung', 'Zertifikate'],
        benefits: ['Einfaches Lernen', 'Breite Reichweite', 'Hohe Interaktion'],
        useCases: ['Schulen', 'Trainer', 'Lernplattformen'],
        timeframe: '3 Monate',
        metrics: ['Lernende', 'Abschlussrate'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Welche Inhalte?', answer: 'Text, Video und interaktive Tests.' }]
    },

    'msg-travel-booking': {
        title: 'Reisebuchung über Messenger',
        description: 'Buchungssystem für Flüge und Hotels über Messenger.',
        shortDescription: 'Reise über Messenger buchen',
        features: ['Flugsuche', 'Hotelbuchung', 'Reisepakete', '24/7-Support'],
        benefits: ['Einfache Buchung', 'Wettbewerbsfähige Preise'],
        useCases: ['Reisebüros', 'Tourismusunternehmen', 'Buchungsplattformen'],
        timeframe: '3 Monate',
        metrics: ['Buchungen', 'Kundenzufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Zahlung unterstützt?', answer: 'Ja, sichere Zahlung per Karte und E-Wallet.' }]
    },

    // ==================== NEXT.JS (Additional) ====================

    'next-marketplace': {
        title: 'Next.js Marktplatz',
        description: 'Multi-Verkäufer-Marktplatz mit Next.js-Technologie.',
        shortDescription: 'Multi-Verkäufer-Marktplatz',
        features: ['Multi-Verkäufer', 'Dashboard', 'Provisionen', 'Bewertungen'],
        benefits: ['Höchste Geschwindigkeit', 'Exzellentes SEO', 'Skalierbar'],
        useCases: ['Online-Marktplätze', 'Handwerkerplattformen', 'Lokale Märkte'],
        timeframe: '4-6 Monate',
        metrics: ['Verkäufer', 'Verkäufe', 'Wachstum'],
        deliveryTime: '8-12 Wochen',
        faqs: [{ question: 'Wie viele Verkäufer?', answer: 'Unbegrenzt mit hoher Leistung.' }]
    },

    'next-blog-cms': {
        title: 'Next.js Blog und CMS',
        description: 'Blog und Content-Management-System mit Next.js.',
        shortDescription: 'Professioneller schneller Blog',
        features: ['Erweiterter Editor', 'Integriertes SEO', 'Kategorien', 'Kommentare'],
        benefits: ['Höchste Geschwindigkeit', 'Höheres Ranking'],
        useCases: ['Blogger', 'Unternehmen', 'Nachrichtenseiten'],
        timeframe: '2-3 Monate',
        metrics: ['Besuche', 'Suchranking'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Deutsch unterstützt?', answer: 'Ja, vollständiges RTL und Mehrsprachigkeit.' }]
    },

    'next-booking-platform': {
        title: 'Next.js Buchungsplattform',
        description: 'Integrierte Buchungsplattform mit Next.js.',
        shortDescription: 'Professionelle Buchungsplattform',
        features: ['Terminbuchung', 'Online-Zahlung', 'Intelligenter Kalender', 'Benachrichtigungen'],
        benefits: ['Reibungsloses Erlebnis', 'Einfache Verwaltung'],
        useCases: ['Praxen', 'Salons', 'Berater', 'Dienstleistungen'],
        timeframe: '3-4 Monate',
        metrics: ['Buchungen', 'Kundenzufriedenheit'],
        deliveryTime: '6-8 Wochen',
        faqs: [{ question: 'Mehrere Termine?', answer: 'Ja, mehrere Mitarbeiter und Dienstleistungen.' }]
    },

    // ==================== SEO (Additional) ====================

    'seo-technical': {
        title: 'Technisches SEO',
        description: 'Optimierung der technischen Aspekte der Website für Suchmaschinen.',
        shortDescription: 'Technische Suchmaschinenoptimierung',
        features: ['Website-Geschwindigkeit', 'Datenstrukturierung', 'Core Web Vitals', 'Crawling und Indexierung'],
        benefits: ['Höheres Ranking', 'Bessere Erfahrung', 'Ausgezeichnete Leistung'],
        useCases: ['Große Websites', 'Shops', 'Nachrichtenseiten'],
        timeframe: '3-6 Monate',
        metrics: ['Website-Geschwindigkeit', 'Core Web Vitals'],
        deliveryTime: 'Fortlaufend',
        faqs: [{ question: 'Unterschied zu normalem SEO?', answer: 'Fokus auf technische Aspekte und Struktur.' }]
    },

    'seo-content': {
        title: 'Content-SEO',
        description: 'Inhaltsstrategie optimiert für Suchmaschinen.',
        shortDescription: 'SEO-optimierter Content',
        features: ['Keyword-Recherche', 'Content-Erstellung', 'Artikeloptimierung', 'Interne Verlinkung'],
        benefits: ['Organischer Traffic', 'Höheres Vertrauen', 'Mehr Kunden'],
        useCases: ['Blogs', 'Unternehmen', 'Shops'],
        timeframe: '6-12 Monate',
        metrics: ['Organischer Traffic', 'Keyword-Ranking'],
        deliveryTime: 'Fortlaufend',
        faqs: [{ question: 'Wie viele Artikel pro Monat?', answer: '4-8 Artikel je nach Plan.' }]
    },

    'seo-enterprise': {
        title: 'Enterprise SEO',
        description: 'Umfassende SEO-Strategie für große Unternehmen.',
        shortDescription: 'SEO für Großunternehmen',
        features: ['Umfassende Strategie', 'Spezialisiertes Team', 'Executive Reports', 'Marketing-Integration'],
        benefits: ['Marktdominanz', 'Nachhaltiges Wachstum', 'Hoher ROI'],
        useCases: ['Großunternehmen', 'Banken', 'Multinationale Konzerne'],
        timeframe: '12+ Monate',
        metrics: ['Marktanteil', 'Organischer Traffic', 'Umsatz'],
        deliveryTime: 'Fortlaufend',
        faqs: [{ question: 'Was ist der Unterschied?', answer: 'Umfassende, maßgeschneiderte Strategie mit spezialisiertem Team.' }]
    },

    // ==================== AI AUTOMATION (Additional) ====================

    'auto-marketing': {
        title: 'KI-Marketing-Automatisierung',
        description: 'Automatisierung von Marketingkampagnen und Kundeninteraktion.',
        shortDescription: 'Automatisiertes KI-Marketing',
        features: ['Automatische Kampagnen', 'Intelligente Segmentierung', 'Personalisierter Content', 'Analysen'],
        benefits: ['Höhere Effizienz', 'Genaueres Targeting', 'Bessere Ergebnisse'],
        useCases: ['Marketingunternehmen', 'Shops', 'SaaS'],
        timeframe: '3 Monate',
        metrics: ['Conversion', 'ROI', 'Engagement'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Welche Kanäle?', answer: 'E-Mail, WhatsApp, SMS und Anzeigen.' }]
    },

    'auto-operations': {
        title: 'KI-Betriebsautomatisierung',
        description: 'Automatisierung routinemäßiger Betriebsabläufe.',
        shortDescription: 'Automatisierte KI-Prozesse',
        features: ['Aufgabenautomatisierung', 'Systemintegration', 'Intelligente Berichte', 'Alarme'],
        benefits: ['Zeitersparnis', 'Weniger Fehler', 'Höhere Effizienz'],
        useCases: ['Unternehmen', 'Fabriken', 'Logistik'],
        timeframe: '4 Monate',
        metrics: ['Eingesparte Zeit', 'Effizienz'],
        deliveryTime: '6-8 Wochen',
        faqs: [{ question: 'Welche Prozesse?', answer: 'Dateneingabe, Berichte, Genehmigungen und Benachrichtigungen.' }]
    },

    'auto-data-analytics': {
        title: 'KI-Datenanalyse',
        description: 'Datenanalyse und umsetzbare Erkenntnisse.',
        shortDescription: 'Intelligente KI-Analysen',
        features: ['Automatische Analyse', 'Prognosen', 'Dashboards', 'Intelligente Alarme'],
        benefits: ['Bessere Entscheidungen', 'Genaue Prognosen', 'Tiefe Einblicke'],
        useCases: ['Unternehmen', 'Handel', 'Finanzdienstleistungen'],
        timeframe: '4 Monate',
        metrics: ['Prognosegenauigkeit', 'Verbesserte Entscheidungen'],
        deliveryTime: '6-8 Wochen',
        faqs: [{ question: 'Welche Daten?', answer: 'Verkäufe, Kunden, Operationen und Marketing.' }]
    },

    // ==================== OTHER WHATSAPP ====================

    'travel-booking-assistant-whatsapp': {
        title: 'Reisebuchungs-Assistent',
        description: 'Intelligenter Assistent für Flug- und Hotelbuchungen.',
        shortDescription: 'Reise über WhatsApp buchen',
        features: ['Flugsuche', 'Hotelbuchung', 'Visa', 'Pakete'],
        benefits: ['Einfache Buchung', 'Wettbewerbsfähige Preise', '24/7-Support'],
        useCases: ['Reisebüros', 'Tourismusunternehmen', 'Fluggesellschaften'],
        timeframe: '4 Monate',
        metrics: ['Buchungen', 'Kundenzufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Zahlung unterstützt?', answer: 'Ja, Karten und E-Wallets.' }]
    },

    'banking-account-assistant-whatsapp': {
        title: 'Bank-Konto-Assistent',
        description: 'Intelligente Bankdienstleistungen über WhatsApp.',
        shortDescription: 'Banking über WhatsApp',
        features: ['Kontostand', 'Kontoauszug', 'Überweisungen', 'Rechnungszahlung'],
        benefits: ['24/7-Service', 'Schnelle Transaktionen', 'Hohe Sicherheit'],
        useCases: ['Banken', 'Digitale Geldbörsen', 'FinTech'],
        timeframe: '6 Monate',
        metrics: ['Transaktionen', 'Kundenzufriedenheit'],
        deliveryTime: '8-12 Wochen',
        faqs: [{ question: 'Ist es sicher?', answer: 'Ja, Bankverschlüsselung und Zwei-Faktor-Authentifizierung.' }]
    },

    'b2b-lead-qualification-whatsapp': {
        title: 'B2B-Lead-Qualifizierung',
        description: 'System zur Qualifizierung und Nachverfolgung von Geschäftskunden.',
        shortDescription: 'B2B-Leads über WhatsApp qualifizieren',
        features: ['Automatische Qualifizierung', 'Meeting-Planung', 'Nachverfolgung', 'CRM-Integration'],
        benefits: ['Qualifizierte Leads', 'Zeitersparnis', 'Höhere Conversion'],
        useCases: ['B2B-Unternehmen', 'SaaS', 'Professionelle Dienstleistungen'],
        timeframe: '3 Monate',
        metrics: ['Lead-Qualität', 'Conversion'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Wie wird qualifiziert?', answer: 'Intelligente Fragen ermitteln Bedürfnisse und Budget.' }]
    },

    'logistics-shipment-tracking-whatsapp': {
        title: 'Logistik-Sendungsverfolgung',
        description: 'Sendungsverfolgungs- und Logistikmanagement-System.',
        shortDescription: 'Sendungen über WhatsApp verfolgen',
        features: ['Echtzeit-Tracking', 'Benachrichtigungen', 'Liefertermin', 'Bewertung'],
        benefits: ['Transparenz', 'Kundenzufriedenheit', 'Höhere Effizienz'],
        useCases: ['Versandunternehmen', 'Logistik', 'Distribution'],
        timeframe: '3 Monate',
        metrics: ['Kundenzufriedenheit', 'Tracking-Genauigkeit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Wie oft Updates?', answer: 'Bei jeder Statusänderung.' }]
    },

    'insurance-claim-filing-whatsapp': {
        title: 'Versicherungsschadensmeldung',
        description: 'System zur Einreichung und Verfolgung von Versicherungsansprüchen.',
        shortDescription: 'Schadensmeldung über WhatsApp',
        features: ['Schadensmeldung', 'Dokumenten-Upload', 'Statusverfolgung', 'Kommunikation'],
        benefits: ['Schnellere Verfahren', 'Transparenz', 'Höhere Zufriedenheit'],
        useCases: ['Versicherungen', 'Makler', 'Banken'],
        timeframe: '4 Monate',
        metrics: ['Bearbeitungsgeschwindigkeit', 'Kundenzufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Wie lange dauert es?', answer: '50% schneller als traditionell.' }]
    },

    'automotive-service-booking-whatsapp': {
        title: 'Kfz-Service-Buchung',
        description: 'Buchungssystem für Autowartung und -service.',
        shortDescription: 'Autowartung über WhatsApp buchen',
        features: ['Wartungsbuchung', 'Erinnerungen', 'Reparaturverfolgung', 'Kostenvoranschläge'],
        benefits: ['Regelmäßige Wartung', 'Treue Kunden', 'Kontinuierliche Einnahmen'],
        useCases: ['Autowerkstätten', 'Händler', 'Servicezentren'],
        timeframe: '3 Monate',
        metrics: ['Buchungen', 'Wiederkehrende Kunden'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Erinnert an Wartungstermine?', answer: 'Ja, automatische Erinnerungen.' }]
    },

    'event-ticketing-management-whatsapp': {
        title: 'Event-Ticketverwaltung',
        description: 'Verkaufs- und Verwaltungssystem für Veranstaltungstickets.',
        shortDescription: 'Event-Tickets über WhatsApp',
        features: ['Ticketverkauf', 'QR-Einlass', 'Erinnerungen', 'Stornierung/Rückerstattung'],
        benefits: ['Einfacherer Verkauf', 'Reibungsloses Erlebnis', 'Daten'],
        useCases: ['Veranstalter', 'Theater', 'Konferenzen'],
        timeframe: '2 Monate',
        metrics: ['Ticketverkäufe', 'Anwesenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie erhält man das Ticket?', answer: 'Digitaler QR-Code über WhatsApp.' }]
    },

    'gym-membership-class-booking-whatsapp': {
        title: 'Fitnessstudio-Mitgliedschaft und Kursbuchung',
        description: 'Verwaltungssystem für Fitnessstudio-Mitgliedschaften und Kursbuchungen.',
        shortDescription: 'Fitnessstudio über WhatsApp',
        features: ['Mitgliedschaftsverlängerung', 'Kursbuchung', 'Trainingsprogramme', 'Trainer-Kontakt'],
        benefits: ['Treue Mitglieder', 'Bessere Anwesenheit', 'Kontinuierliche Kommunikation'],
        useCases: ['Fitnessstudios', 'Studios', 'Trainer'],
        timeframe: '2 Monate',
        metrics: ['Verlängerungen', 'Anwesenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie Kurs buchen?', answer: 'Tag und Zeit wählen und Bestätigung erhalten.' }]
    },

    'legal-consultation-booking-whatsapp': {
        title: 'Rechtsberatungsbuchung',
        description: 'Buchungssystem für Rechtsberatungstermine.',
        shortDescription: 'Anwaltsberatung über WhatsApp',
        features: ['Terminbuchung', 'Erstberatung', 'Dokumentenversand', 'Fallverfolgung'],
        benefits: ['Einfacherer Zugang', 'Geringere Kosten', 'Vertraulichkeit'],
        useCases: ['Anwaltskanzleien', 'Freie Anwälte', 'Unternehmen'],
        timeframe: '2 Monate',
        metrics: ['Beratungen', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Vertraulich?', answer: 'Ja, vollständige Anwalts-Mandanten-Vertraulichkeit.' }]
    },

    'salon-beauty-appointment-whatsapp': {
        title: 'Schönheitssalon-Termine',
        description: 'Buchungssystem für Schönheitssalons und Spas.',
        shortDescription: 'Termin über WhatsApp buchen',
        features: ['Servicebuchung', 'Mitarbeiterauswahl', 'Angebote', 'Erinnerungen'],
        benefits: ['Mehr Buchungen', 'Weniger Stornierungen', 'Kundenbindung'],
        useCases: ['Salons', 'Spas', 'Kosmetikkliniken'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Mitarbeiter wählbar?', answer: 'Ja, wählen Sie Ihren Favoriten.' }]
    },

    'pet-care-vet-booking-whatsapp': {
        title: 'Tierarzt und Tierpflege-Buchung',
        description: 'Buchungssystem für Tierarzttermine und Tierpflegedienste.',
        shortDescription: 'Tierpflege über WhatsApp',
        features: ['Terminbuchung', 'Impferinnerungen', 'Tipps', 'Produktbestellung'],
        benefits: ['Bessere Pflege', 'Treue Kunden', 'Zusätzliche Verkäufe'],
        useCases: ['Tierarztpraxen', 'Tierhandlungen', 'Tierhotels'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Regelmäßige Impfungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Impferinnerungen?', answer: 'Ja, automatische Erinnerungen.' }]
    },

    'student-counseling-appointment-whatsapp': {
        title: 'Schülerberatungstermine',
        description: 'Buchungssystem für Beratungs- und Unterstützungssitzungen.',
        shortDescription: 'Beratungstermine über WhatsApp',
        features: ['Terminbuchung', 'Volle Vertraulichkeit', 'Erinnerungen', 'Hilfsressourcen'],
        benefits: ['Einfacherer Zugang zur Unterstützung', 'Datenschutz', 'Kontinuierliche Betreuung'],
        useCases: ['Schulen', 'Universitäten', 'Beratungszentren'],
        timeframe: '2 Monate',
        metrics: ['Anzahl Sitzungen', 'Schülerzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Vertraulich?', answer: 'Ja, volle Privatsphäre und Verschlüsselung.' }]
    },

    'educational-content-distribution-whatsapp': {
        title: 'Bildungsinhalt-Verteilung',
        description: 'System zum Versenden von Lernmaterialien und Dateien.',
        shortDescription: 'Lernmaterialien über WhatsApp verteilen',
        features: ['Dateiversand', 'Videos', 'Kurztests', 'Lesefortschritt'],
        benefits: ['Einfacher Zugang', 'Höhere Interaktion', 'Kontinuierliches Lernen'],
        useCases: ['Schulen', 'Trainer', 'Lernplattformen'],
        timeframe: '2 Monate',
        metrics: ['Ansichtsrate', 'Interaktion'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Dateitypen?', answer: 'PDF, Word, Video, Bilder und Links.' }]
    },

    // ==================== LANDWIRTSCHAFT ====================

    'agriculture-crop-monitoring': {
        title: 'Ernteüberwachung',
        description: 'System zur Überwachung und Berichterstattung über Erntebedingungen.',
        shortDescription: 'Ernteberichte per WhatsApp',
        features: ['Wetterwarnungen', 'Schädlingsalarme', 'Bewässerungserinnerungen', 'Marktpreise'],
        benefits: ['Höhere Erträge', 'Frühwarnung', 'Bessere Entscheidungen'],
        useCases: ['Landwirte', 'Agrarbetriebe', 'Genossenschaften'],
        timeframe: '3 Monate',
        metrics: ['Ertragssteigerung', 'Reaktionszeit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Welche Wetterdaten?', answer: 'Lokale Wetterstationen und Satellitendaten.' }]
    },

    'agriculture-livestock-management': {
        title: 'Viehwirtschaftsmanagement',
        description: 'System zur Verwaltung und Überwachung von Nutztieren.',
        shortDescription: 'Viehmanagement per WhatsApp',
        features: ['Gesundheitsverfolgung', 'Impferinnerungen', 'Zuchtkalender', 'Futterplanung'],
        benefits: ['Gesündere Tiere', 'Weniger Verluste', 'Bessere Organisation'],
        useCases: ['Viehzüchter', 'Bauernhöfe', 'Tierärzte'],
        timeframe: '3 Monate',
        metrics: ['Tiergesundheit', 'Produktivität'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Welche Tiere?', answer: 'Rinder, Schweine, Geflügel, Schafe.' }]
    },

    'agriculture-equipment-rental': {
        title: 'Landmaschinen-Vermietung',
        description: 'System zur Buchung von landwirtschaftlichen Geräten.',
        shortDescription: 'Maschinen buchen per WhatsApp',
        features: ['Maschinenkatalog', 'Verfügbarkeit', 'Buchung', 'Lieferung'],
        benefits: ['Kosteneffizient', 'Einfache Buchung', 'Vollständiger Katalog'],
        useCases: ['Landwirte', 'Vermietungen', 'Genossenschaften'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Auslastung'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Lieferung?', answer: 'Ja, zum Feld.' }]
    },

    'agriculture-market-prices': {
        title: 'Agrar-Marktpreise',
        description: 'System für Echtzeit-Agrarmarktpreise.',
        shortDescription: 'Marktpreise per WhatsApp',
        features: ['Tagespreise', 'Preistrends', 'Marktnachrichten', 'Alarme'],
        benefits: ['Bessere Verkaufsentscheidungen', 'Aktuelle Informationen', 'Mehr Gewinn'],
        useCases: ['Landwirte', 'Händler', 'Genossenschaften'],
        timeframe: '1 Monat',
        metrics: ['Abonnenten', 'Interaktion'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Produkte?', answer: 'Alle wichtigen Agrarprodukte.' }]
    },

    'agriculture-weather-alerts': {
        title: 'Wetterwarnungen für Landwirte',
        description: 'Wetterwarnsystem für die Landwirtschaft.',
        shortDescription: 'Wetterwarnungen per WhatsApp',
        features: ['Unwetterwarnungen', 'Frost-Alarme', 'Niederschlagsprognose', 'Windwarnungen'],
        benefits: ['Ernteschutz', 'Frühe Vorbereitung', 'Weniger Verluste'],
        useCases: ['Landwirte', 'Obstbauern', 'Winzer'],
        timeframe: '1 Monat',
        metrics: ['Warngenauigkeit', 'Reaktionszeit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie früh?', answer: 'Bis zu 7 Tage im Voraus.' }]
    },

    // ==================== FERTIGUNG & INDUSTRIE ====================

    'manufacturing-production-tracking': {
        title: 'Produktionsverfolgung',
        description: 'System zur Echtzeit-Überwachung der Produktion.',
        shortDescription: 'Produktion überwachen per WhatsApp',
        features: ['Echtzeit-Status', 'Stillstandsalarme', 'Schichtberichte', 'KPIs'],
        benefits: ['Weniger Ausfallzeiten', 'Bessere Übersicht', 'Schnelle Reaktion'],
        useCases: ['Fabriken', 'Produktionsleiter', 'Qualitätssicherung'],
        timeframe: '3 Monate',
        metrics: ['Ausfallzeiten', 'Produktivität'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Integration?', answer: 'Mit gängigen ERP-Systemen.' }]
    },

    'manufacturing-quality-control': {
        title: 'Qualitätskontroll-Meldungen',
        description: 'System für Qualitätsprüfungsberichte.',
        shortDescription: 'Qualitätsberichte per WhatsApp',
        features: ['Prüfberichte', 'Fehleralarme', 'Fotos', 'Maßnahmen'],
        benefits: ['Höhere Qualität', 'Schnelle Reaktion', 'Dokumentation'],
        useCases: ['QS-Abteilungen', 'Produktionsleiter', 'Zertifizierung'],
        timeframe: '2 Monate',
        metrics: ['Fehlerquote', 'Reaktionszeit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Fotos?', answer: 'Ja, mit Zeitstempel.' }]
    },

    'manufacturing-maintenance-alerts': {
        title: 'Wartungsalarme',
        description: 'Vorbeugendes Wartungswarnsystem.',
        shortDescription: 'Wartungserinnerungen per WhatsApp',
        features: ['Planmäßige Wartung', 'Notfallalarme', 'Ersatzteilbestellung', 'Technikerzuweisung'],
        benefits: ['Weniger Ausfälle', 'Längere Lebensdauer', 'Geplante Wartung'],
        useCases: ['Wartungsteams', 'Facility Manager', 'Techniker'],
        timeframe: '2 Monate',
        metrics: ['Verfügbarkeit', 'Wartungskosten'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Vorausschauend?', answer: 'Ja, basierend auf Nutzungsdaten.' }]
    },

    'manufacturing-inventory-alerts': {
        title: 'Lagerbestandswarnungen',
        description: 'System für Materialbestandsüberwachung.',
        shortDescription: 'Lageralarme per WhatsApp',
        features: ['Mindestbestand-Alarme', 'Nachbestellungserinnerungen', 'Lieferstatus', 'Berichte'],
        benefits: ['Keine Engpässe', 'Optimale Bestände', 'Weniger Kapitalbindung'],
        useCases: ['Lagerleiter', 'Einkauf', 'Produktionsplanung'],
        timeframe: '2 Monate',
        metrics: ['Bestandsgenauigkeit', 'Engpässe'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Automatische Bestellung?', answer: 'Ja, optional.' }]
    },

    'manufacturing-shift-communication': {
        title: 'Schicht-Kommunikation',
        description: 'Kommunikationssystem für Schichtarbeiter.',
        shortDescription: 'Schicht-Updates per WhatsApp',
        features: ['Schichtübergabe', 'Ankündigungen', 'Notfälle', 'Zeiterfassung'],
        benefits: ['Bessere Übergabe', 'Klare Kommunikation', 'Weniger Fehler'],
        useCases: ['Fabriken', 'Lagerhäuser', 'Logistik'],
        timeframe: '2 Monate',
        metrics: ['Übergabequalität', 'Vorfälle'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Mehrsprachig?', answer: 'Ja, für multinationale Teams.' }]
    },

    // ==================== BAU & HANDWERK ====================

    'construction-project-updates': {
        title: 'Bauprojekt-Updates',
        description: 'System für Bauprojekt-Fortschrittsberichte.',
        shortDescription: 'Baustellen-Updates per WhatsApp',
        features: ['Tagesberichte', 'Fotos', 'Meilensteine', 'Problemberichte'],
        benefits: ['Transparenz', 'Schnelle Reaktion', 'Dokumentation'],
        useCases: ['Bauunternehmen', 'Projektleiter', 'Investoren'],
        timeframe: '2 Monate',
        metrics: ['Pünktlichkeit', 'Kundenzufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Tägliche Updates?', answer: 'Ja, mit Fotos.' }]
    },

    'construction-crew-coordination': {
        title: 'Bauteam-Koordination',
        description: 'Koordinationssystem für Bauarbeiter.',
        shortDescription: 'Team koordinieren per WhatsApp',
        features: ['Einsatzplanung', 'Anwesenheit', 'Aufgaben', 'Materialanforderungen'],
        benefits: ['Bessere Organisation', 'Weniger Wartezeiten', 'Klare Aufgaben'],
        useCases: ['Bauunternehmen', 'Subunternehmer', 'Handwerker'],
        timeframe: '2 Monate',
        metrics: ['Effizienz', 'Termintreue'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'GPS-Tracking?', answer: 'Optional für Außendienst.' }]
    },

    'construction-safety-reports': {
        title: 'Sicherheitsberichte Baustelle',
        description: 'Arbeitssicherheits-Berichtssystem.',
        shortDescription: 'Sicherheit melden per WhatsApp',
        features: ['Unfallberichte', 'Gefahrenmeldungen', 'Sicherheitschecks', 'Schulungserinnerungen'],
        benefits: ['Weniger Unfälle', 'Dokumentation', 'Schnelle Reaktion'],
        useCases: ['Baustellen', 'Sicherheitsbeauftragte', 'Auftraggeber'],
        timeframe: '2 Monate',
        metrics: ['Unfallrate', 'Compliance'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Anonym?', answer: 'Gefahrenmeldungen optional anonym.' }]
    },

    'construction-material-ordering': {
        title: 'Baumaterial-Bestellung',
        description: 'System zur Materialbestellung für Baustellen.',
        shortDescription: 'Material bestellen per WhatsApp',
        features: ['Katalog', 'Schnellbestellung', 'Lieferverfolgung', 'Rechnungen'],
        benefits: ['Schnelle Beschaffung', 'Weniger Verzögerungen', 'Kostenkontrolle'],
        useCases: ['Bauunternehmen', 'Handwerker', 'Baustoffhändler'],
        timeframe: '2 Monate',
        metrics: ['Lieferzeit', 'Bestellungen'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Lieferung?', answer: 'Direkt zur Baustelle.' }]
    },

    'construction-client-portal': {
        title: 'Bauherren-Portal',
        description: 'Kommunikationsportal für Bauherren.',
        shortDescription: 'Baufortschritt verfolgen per WhatsApp',
        features: ['Fortschrittsberichte', 'Fotos', 'Änderungsanfragen', 'Zahlungsplan'],
        benefits: ['Transparenz', 'Vertrauen', 'Weniger Rückfragen'],
        useCases: ['Bauunternehmen', 'Projektentwickler', 'Bauherren'],
        timeframe: '2 Monate',
        metrics: ['Kundenzufriedenheit', 'Kommunikation'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Echtzeitfotos?', answer: 'Ja, mit Datum.' }]
    },

    // ==================== HAUSHALTSDIENSTLEISTUNGEN ====================

    'home-plumbing-service': {
        title: 'Klempner-Service',
        description: 'Buchungssystem für Klempnerdienste.',
        shortDescription: 'Klempner buchen per WhatsApp',
        features: ['Terminbuchung', 'Notdienst', 'Preisschätzung', 'Bewertungen'],
        benefits: ['Schnelle Hilfe', 'Transparente Preise', 'Vertrauenswürdige Handwerker'],
        useCases: ['Klempner', 'Haushaltsservices', 'Hausverwaltungen'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Notdienst?', answer: 'Ja, 24/7 verfügbar.' }]
    },

    'home-electrical-service': {
        title: 'Elektriker-Service',
        description: 'Buchungssystem für Elektrikerdienste.',
        shortDescription: 'Elektriker buchen per WhatsApp',
        features: ['Terminbuchung', 'Fehlerbeschreibung', 'Kostenvoranschlag', 'Zertifizierungen'],
        benefits: ['Sicherheit', 'Qualifizierte Fachleute', 'Faire Preise'],
        useCases: ['Elektriker', 'Haushaltsservices', 'Immobilienverwaltung'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Zertifiziert?', answer: 'Alle Elektriker sind zugelassen.' }]
    },

    'home-hvac-service': {
        title: 'Heizung & Klima Service',
        description: 'Buchungssystem für Heizung und Klimaanlagen.',
        shortDescription: 'HVAC-Service per WhatsApp',
        features: ['Wartungstermine', 'Reparaturen', 'Installation', 'Energieberatung'],
        benefits: ['Optimale Temperatur', 'Energieeffizienz', 'Zuverlässiger Service'],
        useCases: ['HVAC-Unternehmen', 'Hausbesitzer', 'Gewerbeobjekte'],
        timeframe: '2 Monate',
        metrics: ['Servicetermine', 'Kundenbindung'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Wartungsverträge?', answer: 'Ja, mit Rabatt.' }]
    },

    'home-locksmith-service': {
        title: 'Schlüsseldienst',
        description: 'Buchungssystem für Schlüsseldienste.',
        shortDescription: 'Schlüsseldienst per WhatsApp',
        features: ['Notöffnung', 'Schlossaustausch', 'Standort-Tracking', 'Preistransparenz'],
        benefits: ['Schnelle Hilfe', 'Keine Wucherpreise', 'Standortgenaue Ankunft'],
        useCases: ['Schlüsseldienste', 'Sicherheitsfirmen', 'Hausverwaltungen'],
        timeframe: '1 Monat',
        metrics: ['Reaktionszeit', 'Bewertungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: '24/7?', answer: 'Ja, Notdienst rund um die Uhr.' }]
    },

    'home-handyman-service': {
        title: 'Handwerker-Service',
        description: 'Allround-Handwerker-Buchungssystem.',
        shortDescription: 'Handwerker buchen per WhatsApp',
        features: ['Verschiedene Services', 'Terminbuchung', 'Fotos des Problems', 'Preisschätzung'],
        benefits: ['Ein Ansprechpartner', 'Flexible Termine', 'Qualitätsarbeit'],
        useCases: ['Handwerker', 'Hausmeister', 'Servicefirmen'],
        timeframe: '2 Monate',
        metrics: ['Aufträge', 'Weiterempfehlungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Arbeiten?', answer: 'Montage, Reparaturen, kleine Renovierungen.' }]
    },

    // ==================== REINIGUNGSDIENSTE ====================

    'cleaning-home-service': {
        title: 'Hausreinigung',
        description: 'Buchungssystem für Hausreinigung.',
        shortDescription: 'Reinigung buchen per WhatsApp',
        features: ['Regelmäßige Reinigung', 'Einmalreinigung', 'Zeitfenster', 'Sonderwünsche'],
        benefits: ['Sauberes Zuhause', 'Flexible Termine', 'Vertrauenswürdiges Personal'],
        useCases: ['Reinigungsunternehmen', 'Privatpersonen', 'Airbnb-Vermieter'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Stammkunden'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Eigene Produkte?', answer: 'Ja, oder wir bringen alles mit.' }]
    },

    'cleaning-office-service': {
        title: 'Büroreinigung',
        description: 'Buchungssystem für gewerbliche Reinigung.',
        shortDescription: 'Büro-Reinigung per WhatsApp',
        features: ['Regelmäßige Reinigung', 'Grundreinigung', 'Fensterreinigung', 'Desinfizierung'],
        benefits: ['Professionelles Umfeld', 'Hygiene', 'Flexible Zeiten'],
        useCases: ['Reinigungsfirmen', 'Büros', 'Geschäfte'],
        timeframe: '2 Monate',
        metrics: ['Verträge', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Nach Feierabend?', answer: 'Ja, zu Ihren Wunschzeiten.' }]
    },

    'cleaning-carpet-upholstery': {
        title: 'Teppich- & Polsterreinigung',
        description: 'Buchungssystem für Spezialreinigung.',
        shortDescription: 'Teppichreinigung per WhatsApp',
        features: ['Vor-Ort-Service', 'Abhol-Service', 'Fleckenentfernung', 'Desinfektion'],
        benefits: ['Tiefenreinigung', 'Längere Lebensdauer', 'Frische Möbel'],
        useCases: ['Spezialreiniger', 'Hotels', 'Privatpersonen'],
        timeframe: '2 Monate',
        metrics: ['Aufträge', 'Bewertungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Trockenzeit?', answer: '2-4 Stunden.' }]
    },

    'cleaning-window-service': {
        title: 'Fensterreinigung',
        description: 'Buchungssystem für professionelle Fensterreinigung.',
        shortDescription: 'Fenster reinigen per WhatsApp',
        features: ['Innen & Außen', 'Höhenarbeit', 'Regelmäßig', 'Rahmen inklusive'],
        benefits: ['Klare Sicht', 'Professionell', 'Sicher'],
        useCases: ['Gebäudereiniger', 'Privatpersonen', 'Unternehmen'],
        timeframe: '1 Monat',
        metrics: ['Aufträge', 'Regelmäßige Kunden'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Hochhäuser?', answer: 'Ja, mit Spezialausrüstung.' }]
    },

    'cleaning-post-construction': {
        title: 'Baureinigung',
        description: 'Reinigungsservice nach Bauarbeiten.',
        shortDescription: 'Baureinigung per WhatsApp',
        features: ['Grobreinigung', 'Feinreinigung', 'Fenster', 'Entsorgung'],
        benefits: ['Bezugsfertig', 'Schnell', 'Gründlich'],
        useCases: ['Baufirmen', 'Renovierer', 'Immobilienentwickler'],
        timeframe: '2 Monate',
        metrics: ['Projekte', 'Folgeaufträge'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wann fertig?', answer: 'Je nach Größe 1-3 Tage.' }]
    },

    // ==================== SICHERHEITSDIENSTE ====================

    'security-guard-service': {
        title: 'Sicherheitspersonal',
        description: 'Buchungssystem für Sicherheitspersonal.',
        shortDescription: 'Sicherheit buchen per WhatsApp',
        features: ['Objektschutz', 'Veranstaltungen', 'Personenschutz', 'Patrouillendienst'],
        benefits: ['Sicherheit', 'Professionelle Kräfte', 'Flexibel'],
        useCases: ['Sicherheitsfirmen', 'Events', 'Unternehmen'],
        timeframe: '2 Monate',
        metrics: ['Einsätze', 'Kundenzufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Kurzfristig?', answer: 'Ja, auch kurzfristige Buchungen.' }]
    },

    'security-alarm-monitoring': {
        title: 'Alarmüberwachung',
        description: 'System für Alarmmeldungen und Reaktion.',
        shortDescription: 'Alarme per WhatsApp',
        features: ['Echtzeit-Alarme', 'Videoverifikation', 'Notfallreaktion', 'Berichte'],
        benefits: ['Schnelle Reaktion', 'Weniger Fehlalarme', '24/7 Überwachung'],
        useCases: ['Sicherheitsfirmen', 'Privathaushalte', 'Geschäfte'],
        timeframe: '3 Monate',
        metrics: ['Reaktionszeit', 'Fehlalarme'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Integration?', answer: 'Mit gängigen Alarmsystemen.' }]
    },

    'security-access-control': {
        title: 'Zutrittskontrolle',
        description: 'System für Zutrittskontrollbenachrichtigungen.',
        shortDescription: 'Zutritt überwachen per WhatsApp',
        features: ['Zutrittsmeldungen', 'Besucheranmeldung', 'Freigaben', 'Protokolle'],
        benefits: ['Sicherheit', 'Übersicht', 'Dokumentation'],
        useCases: ['Unternehmen', 'Wohnanlagen', 'Parkplätze'],
        timeframe: '3 Monate',
        metrics: ['Zutritte', 'Sicherheitsvorfälle'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Remote?', answer: 'Ja, Freigabe per WhatsApp möglich.' }]
    },

    'security-patrol-tracking': {
        title: 'Streifendienst-Tracking',
        description: 'Verfolgungssystem für Wachpatrouillen.',
        shortDescription: 'Patrouillen verfolgen per WhatsApp',
        features: ['GPS-Tracking', 'Kontrollpunkte', 'Vorfallsberichte', 'Echtzeitkarte'],
        benefits: ['Nachweisbare Kontrollen', 'Schnelle Reaktion', 'Dokumentation'],
        useCases: ['Sicherheitsfirmen', 'Industriegelände', 'Wohnanlagen'],
        timeframe: '2 Monate',
        metrics: ['Kontrollpunkte', 'Abdeckung'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Echtzeit?', answer: 'Ja, Live-Tracking.' }]
    },

    'security-visitor-management': {
        title: 'Besuchermanagement',
        description: 'System für Besucheranmeldung und -verfolgung.',
        shortDescription: 'Besucher verwalten per WhatsApp',
        features: ['Voranmeldung', 'QR-Check-in', 'Echtzeit-Benachrichtigung', 'Besucherlog'],
        benefits: ['Professioneller Empfang', 'Sicherheit', 'Dokumentation'],
        useCases: ['Bürogebäude', 'Fabriken', 'Schulen'],
        timeframe: '2 Monate',
        metrics: ['Besucher', 'Check-in-Zeit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kontaktloses Check-in?', answer: 'Ja, per QR-Code.' }]
    },

    // ==================== TELEKOMMUNIKATION ====================

    'telecom-plan-inquiry': {
        title: 'Tarifanfragen',
        description: 'System für Mobilfunktarif-Beratung.',
        shortDescription: 'Tarife erkunden per WhatsApp',
        features: ['Tarifvergleich', 'Empfehlungen', 'Buchung', 'Upgrades'],
        benefits: ['Bester Tarif', 'Einfacher Wechsel', 'Beratung'],
        useCases: ['Mobilfunkanbieter', 'Händler', 'Reseller'],
        timeframe: '2 Monate',
        metrics: ['Anfragen', 'Konversionen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Alle Anbieter?', answer: 'Abhängig vom Partner.' }]
    },

    'telecom-bill-inquiry': {
        title: 'Rechnungsanfragen',
        description: 'System für Rechnungsinformationen.',
        shortDescription: 'Rechnung prüfen per WhatsApp',
        features: ['Rechnungsübersicht', 'Verbrauch', 'Zahlungsstatus', 'Zahlungslinks'],
        benefits: ['Transparenz', 'Schnelle Antworten', 'Einfache Zahlung'],
        useCases: ['Telekommunikation', 'Versorger', 'Abodienste'],
        timeframe: '2 Monate',
        metrics: ['Anfragen', 'Self-Service-Rate'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Zahlung?', answer: 'Ja, direkter Zahlungslink.' }]
    },

    'telecom-service-outage': {
        title: 'Störungsmeldungen',
        description: 'System für Netzwerkstörungsinformationen.',
        shortDescription: 'Störungen per WhatsApp',
        features: ['Störungsmeldungen', 'Status-Updates', 'Behebungszeit', 'Betroffene Gebiete'],
        benefits: ['Proaktive Information', 'Weniger Anrufe', 'Vertrauen'],
        useCases: ['Telekommunikation', 'Internet-Provider', 'Versorger'],
        timeframe: '2 Monate',
        metrics: ['Erreichbarkeit', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Automatisch?', answer: 'Ja, bei Störungen in Ihrem Gebiet.' }]
    },

    'telecom-data-usage': {
        title: 'Datenverbrauchswarnungen',
        description: 'System für Datenverbrauchsbenachrichtigungen.',
        shortDescription: 'Datenverbrauch per WhatsApp',
        features: ['Verbrauchsübersicht', 'Warnungen', 'Datenpakete kaufen', 'Verlauf'],
        benefits: ['Keine Überraschungen', 'Kostenkontrolle', 'Einfaches Nachkaufen'],
        useCases: ['Mobilfunkanbieter', 'Reseller', 'Kunden'],
        timeframe: '2 Monate',
        metrics: ['Aktivierungen', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Warnung bei...?', answer: '50%, 80%, 100% Verbrauch.' }]
    },

    'telecom-device-support': {
        title: 'Geräte-Support',
        description: 'Technischer Support für Mobilgeräte.',
        shortDescription: 'Gerätehilfe per WhatsApp',
        features: ['Fehlerbehebung', 'Einrichtungshilfe', 'FAQs', 'Videoanleitungen'],
        benefits: ['Schnelle Hilfe', 'Self-Service', 'Weniger Frust'],
        useCases: ['Mobilfunk', 'Elektronikhändler', 'Hersteller'],
        timeframe: '2 Monate',
        metrics: ['Gelöste Anfragen', 'Kundenzufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Welche Geräte?', answer: 'Alle gängigen Smartphones.' }]
    },

    // ==================== HR & REKRUTIERUNG ====================

    'hr-job-application': {
        title: 'Bewerbungs-Chatbot',
        description: 'System für Stellenbewerbungen per WhatsApp.',
        shortDescription: 'Bewerben per WhatsApp',
        features: ['Stellenübersicht', 'Schnellbewerbung', 'Statusverfolgung', 'Interviewtermine'],
        benefits: ['Einfache Bewerbung', 'Mehr Bewerber', 'Schnellere Reaktion'],
        useCases: ['Personalagenturen', 'Unternehmen', 'Zeitarbeit'],
        timeframe: '3 Monate',
        metrics: ['Bewerbungen', 'Time-to-Hire'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Lebenslauf?', answer: 'Als PDF oder Foto.' }]
    },

    'hr-employee-onboarding': {
        title: 'Mitarbeiter-Onboarding',
        description: 'Onboarding-System für neue Mitarbeiter.',
        shortDescription: 'Onboarding per WhatsApp',
        features: ['Checklisten', 'Dokumente', 'Schulungsvideos', 'Ansprechpartner'],
        benefits: ['Schnellere Integration', 'Weniger Papierkram', 'Zufriedene Mitarbeiter'],
        useCases: ['HR-Abteilungen', 'Unternehmen', 'Personaldienstleister'],
        timeframe: '2 Monate',
        metrics: ['Onboarding-Zeit', 'Zufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Automatisiert?', answer: 'Ja, mit Erinnerungen.' }]
    },

    'hr-leave-management': {
        title: 'Urlaubsanträge',
        description: 'System für Urlaubsanträge und -genehmigungen.',
        shortDescription: 'Urlaub beantragen per WhatsApp',
        features: ['Antrag stellen', 'Genehmigung anfordern', 'Resttagekonto', 'Teamkalender'],
        benefits: ['Einfacher Prozess', 'Schnelle Genehmigung', 'Transparenz'],
        useCases: ['Unternehmen', 'HR-Abteilungen', 'Manager'],
        timeframe: '2 Monate',
        metrics: ['Anträge', 'Bearbeitungszeit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Genehmigung?', answer: 'Per WhatsApp an den Vorgesetzten.' }]
    },

    'hr-internal-communication': {
        title: 'Interne Kommunikation',
        description: 'Mitarbeiterkommunikations-System.',
        shortDescription: 'Team-Updates per WhatsApp',
        features: ['Ankündigungen', 'Umfragen', 'Events', 'Feedback'],
        benefits: ['Verbundene Mitarbeiter', 'Schnelle Infos', 'Höheres Engagement'],
        useCases: ['Unternehmen', 'HR', 'Interne Komm'],
        timeframe: '2 Monate',
        metrics: ['Öffnungsrate', 'Engagement'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Privatsphäre?', answer: 'Getrennt von privaten Chats.' }]
    },

    'hr-training-management': {
        title: 'Schulungsmanagement',
        description: 'System für Mitarbeiterschulungen.',
        shortDescription: 'Schulungen verwalten per WhatsApp',
        features: ['Kurskatalog', 'Anmeldung', 'Erinnerungen', 'Zertifikate'],
        benefits: ['Einfache Anmeldung', 'Tracking', 'Qualifikationsnachweis'],
        useCases: ['Unternehmen', 'Schulungsanbieter', 'HR'],
        timeframe: '2 Monate',
        metrics: ['Teilnahmen', 'Abschlussrate'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Online-Kurse?', answer: 'Ja, mit Links zu Plattformen.' }]
    },

    // ==================== BERATUNG & PROFESSIONELLE DIENSTE ====================

    'consulting-appointment-booking': {
        title: 'Beratungstermine',
        description: 'Terminbuchungssystem für Berater.',
        shortDescription: 'Beratung buchen per WhatsApp',
        features: ['Terminbuchung', 'Themenauswahl', 'Vorbereitung', 'Erinnerungen'],
        benefits: ['Einfache Buchung', 'Vorbereitete Meetings', 'Weniger No-Shows'],
        useCases: ['Berater', 'Coaches', 'Agenturen'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Konversionen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kostenloses Erstgespräch?', answer: 'Konfigurierbar.' }]
    },

    'consulting-proposal-tracking': {
        title: 'Angebotsverfolgung',
        description: 'System zur Verfolgung von Angeboten.',
        shortDescription: 'Angebote tracken per WhatsApp',
        features: ['Angebotsstatus', 'Erinnerungen', 'Fragen', 'Unterschrift'],
        benefits: ['Höhere Abschlussrate', 'Schnellere Reaktion', 'Bessere Nachverfolgung'],
        useCases: ['Beratungen', 'Agenturen', 'Freelancer'],
        timeframe: '2 Monate',
        metrics: ['Angebote', 'Abschlussrate'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Digitale Unterschrift?', answer: 'Ja, integriert.' }]
    },

    'consulting-client-updates': {
        title: 'Kunden-Updates',
        description: 'System für regelmäßige Kundenberichte.',
        shortDescription: 'Statusberichte per WhatsApp',
        features: ['Wöchentliche Updates', 'Meilensteine', 'Fragen', 'Dokumente'],
        benefits: ['Transparenz', 'Vertrauen', 'Zufriedene Kunden'],
        useCases: ['Beratungen', 'Agenturen', 'Projektmanagement'],
        timeframe: '2 Monate',
        metrics: ['Kundenzufriedenheit', 'Kommunikation'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Automatisch?', answer: 'Ja, geplante Updates.' }]
    },

    // ==================== FOTOGRAFIE & VIDEO ====================

    'photo-booking-service': {
        title: 'Fotoshooting-Buchung',
        description: 'Buchungssystem für Fotografen.',
        shortDescription: 'Fotoshooting buchen per WhatsApp',
        features: ['Terminbuchung', 'Pakete', 'Locationvorschläge', 'Portfolio'],
        benefits: ['Einfache Buchung', 'Alle Infos', 'Schnelle Kommunikation'],
        useCases: ['Fotografen', 'Studios', 'Event-Fotografie'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Umsatz'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Anzahlung?', answer: 'Ja, zur Buchungsbestätigung.' }]
    },

    'photo-gallery-delivery': {
        title: 'Foto-Galerie-Lieferung',
        description: 'System zur Lieferung von Fotos an Kunden.',
        shortDescription: 'Fotos erhalten per WhatsApp',
        features: ['Download-Links', 'Vorschau', 'Auswahl', 'Nachbestellungen'],
        benefits: ['Schnelle Lieferung', 'Einfacher Zugang', 'Mehr Bestellungen'],
        useCases: ['Fotografen', 'Event-Fotografie', 'Bildagenturen'],
        timeframe: '1 Monat',
        metrics: ['Lieferungen', 'Nachbestellungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Qualität?', answer: 'Hochauflösend, druckfertig.' }]
    },

    'video-production-updates': {
        title: 'Videoproduktions-Updates',
        description: 'System für Projektstatus-Updates.',
        shortDescription: 'Video-Projekt verfolgen per WhatsApp',
        features: ['Meilensteine', 'Vorschauvideos', 'Feedback', 'Abnahme'],
        benefits: ['Transparenz', 'Schnelleres Feedback', 'Zufriedene Kunden'],
        useCases: ['Videoproduktionen', 'Werbeagenturen', 'Freelancer'],
        timeframe: '2 Monate',
        metrics: ['Projekte', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Änderungswünsche?', answer: 'Direkt über WhatsApp.' }]
    },

    // ==================== SPORT & FREIZEIT ====================

    'sports-facility-booking': {
        title: 'Sportanlage-Buchung',
        description: 'Buchungssystem für Sportanlagen.',
        shortDescription: 'Platz buchen per WhatsApp',
        features: ['Platzverfügbarkeit', 'Buchung', 'Zahlung', 'Stornierung'],
        benefits: ['Einfache Buchung', 'Keine Wartezeiten', 'Übersicht'],
        useCases: ['Sportvereine', 'Hallen', 'Tennisplätze'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Auslastung'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Sportarten?', answer: 'Fußball, Tennis, Badminton, usw.' }]
    },

    'sports-team-management': {
        title: 'Team-Management',
        description: 'Kommunikationssystem für Sportteams.',
        shortDescription: 'Team koordinieren per WhatsApp',
        features: ['Training', 'Spiele', 'Anwesenheit', 'Mitteilungen'],
        benefits: ['Bessere Organisation', 'Höhere Teilnahme', 'Team-Spirit'],
        useCases: ['Vereine', 'Trainer', 'Freizeitteams'],
        timeframe: '2 Monate',
        metrics: ['Teilnahme', 'Kommunikation'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Abstimmungen?', answer: 'Ja, für Termine und Events.' }]
    },

    'sports-league-updates': {
        title: 'Liga-Updates',
        description: 'Ergebnisse und Tabellen für Sportligen.',
        shortDescription: 'Liga verfolgen per WhatsApp',
        features: ['Spielergebnisse', 'Tabellen', 'Spielpläne', 'Statistiken'],
        benefits: ['Immer aktuell', 'Alle Infos', 'Fan-Engagement'],
        useCases: ['Sportligen', 'Verbände', 'Vereine'],
        timeframe: '2 Monate',
        metrics: ['Abonnenten', 'Interaktion'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Echtzeit?', answer: 'Ja, direkt nach Spielende.' }]
    },

    'sports-event-registration': {
        title: 'Sportevent-Anmeldung',
        description: 'Anmeldesystem für Sportveranstaltungen.',
        shortDescription: 'Anmelden per WhatsApp',
        features: ['Veranstaltungsliste', 'Anmeldung', 'Zahlung', 'Startnummer'],
        benefits: ['Einfache Anmeldung', 'Schnelle Bestätigung', 'Alle Infos'],
        useCases: ['Marathons', 'Turniere', 'Fitness-Events'],
        timeframe: '2 Monate',
        metrics: ['Anmeldungen', 'Teilnehmer'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Gruppenbuchung?', answer: 'Ja, mit Rabatt.' }]
    },

    // ==================== HOCHZEIT & EVENTS ====================

    'wedding-planning-service': {
        title: 'Hochzeitsplanung',
        description: 'Kommunikationssystem für Hochzeitsplaner.',
        shortDescription: 'Hochzeit planen per WhatsApp',
        features: ['Checklisten', 'Vendoren', 'Termine', 'Budget'],
        benefits: ['Stressfrei', 'Alles organisiert', 'Schnelle Kommunikation'],
        useCases: ['Hochzeitsplaner', 'Paare', 'Eventlocations'],
        timeframe: '3 Monate',
        metrics: ['Hochzeiten', 'Kundenzufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Für Paare?', answer: 'Ja, für Paare und Planer.' }]
    },

    'wedding-vendor-coordination': {
        title: 'Dienstleister-Koordination',
        description: 'System zur Koordination von Hochzeitsdienstleistern.',
        shortDescription: 'Dienstleister koordinieren per WhatsApp',
        features: ['Timeline', 'Aufgaben', 'Änderungen', 'Kontakte'],
        benefits: ['Reibungsloser Ablauf', 'Klare Kommunikation', 'Weniger Stress'],
        useCases: ['Hochzeitsplaner', 'Caterer', 'Fotografen'],
        timeframe: '2 Monate',
        metrics: ['Koordination', 'Zufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Am Tag selbst?', answer: 'Ja, Live-Updates.' }]
    },

    'wedding-guest-management': {
        title: 'Gäste-Management',
        description: 'System für Hochzeitsgäste-Verwaltung.',
        shortDescription: 'Gäste verwalten per WhatsApp',
        features: ['Einladungen', 'RSVP', 'Sitzplan', 'Infos'],
        benefits: ['Einfache Verwaltung', 'Weniger Telefonate', 'Alle Infos'],
        useCases: ['Paare', 'Hochzeitsplaner', 'Locations'],
        timeframe: '2 Monate',
        metrics: ['Antwortrate', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Erinnerungen?', answer: 'Ja, automatische RSVP-Erinnerungen.' }]
    },

    // ==================== GEMEINNÜTZIG & NGO ====================

    'nonprofit-donation': {
        title: 'Spenden-System',
        description: 'Spendensammlung per WhatsApp.',
        shortDescription: 'Spenden per WhatsApp',
        features: ['Spendenformular', 'Kampagnen', 'Quittungen', 'Updates'],
        benefits: ['Mehr Spenden', 'Einfach', 'Transparent'],
        useCases: ['NGOs', 'Vereine', 'Hilfsorganisationen'],
        timeframe: '2 Monate',
        metrics: ['Spenden', 'Spenderzahl'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Spendenquittung?', answer: 'Ja, automatisch.' }]
    },

    'nonprofit-volunteer': {
        title: 'Freiwilligen-Management',
        description: 'System zur Koordination von Freiwilligen.',
        shortDescription: 'Freiwillige koordinieren per WhatsApp',
        features: ['Anmeldung', 'Einsatzplan', 'Aufgaben', 'Stunden'],
        benefits: ['Bessere Organisation', 'Mehr Engagement', 'Wertschätzung'],
        useCases: ['NGOs', 'Vereine', 'Kirchen'],
        timeframe: '2 Monate',
        metrics: ['Freiwillige', 'Stunden'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Zertifikate?', answer: 'Ja, für Stunden.' }]
    },

    'nonprofit-member-updates': {
        title: 'Mitglieder-Updates',
        description: 'Kommunikationssystem für Vereinsmitglieder.',
        shortDescription: 'Mitglieder informieren per WhatsApp',
        features: ['News', 'Events', 'Umfragen', 'Dokumente'],
        benefits: ['Verbundene Gemeinschaft', 'Schnelle Infos', 'Engagement'],
        useCases: ['Vereine', 'NGOs', 'Kirchen'],
        timeframe: '1 Monat',
        metrics: ['Öffnungsrate', 'Engagement'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Bidirektional?', answer: 'Ja, mit Feedback-Option.' }]
    },

    // ==================== BUCHHALTUNG & STEUERN ====================

    'accounting-tax-filing': {
        title: 'Steuererklärung',
        description: 'System für Steuererklärungsassistenz.',
        shortDescription: 'Steuern per WhatsApp',
        features: ['Dokumentensammlung', 'Steuerberechnung', 'Erinnerungen', 'Status'],
        benefits: ['Weniger Stress', 'Keine Fristen verpassen', 'Einfach'],
        useCases: ['Steuerberater', 'Buchhalter', 'Privatpersonen'],
        timeframe: '3 Monate',
        metrics: ['Erklärungen', 'Genauigkeit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Privat und Geschäft?', answer: 'Ja, beides.' }]
    },

    'accounting-expense-tracking': {
        title: 'Ausgabenverfolgung',
        description: 'System zur Erfassung von Ausgaben.',
        shortDescription: 'Ausgaben erfassen per WhatsApp',
        features: ['Belegfotos', 'Kategorisierung', 'Berichte', 'Export'],
        benefits: ['Überblick', 'Steuervorbereitung', 'Einfach'],
        useCases: ['Unternehmen', 'Freelancer', 'Buchhalter'],
        timeframe: '2 Monate',
        metrics: ['Erfasste Belege', 'Genauigkeit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'OCR?', answer: 'Ja, automatische Erkennung.' }]
    },

    'accounting-invoice-management': {
        title: 'Rechnungsverwaltung',
        description: 'System für Rechnungserstellung und -versand.',
        shortDescription: 'Rechnungen per WhatsApp',
        features: ['Rechnungserstellung', 'Versand', 'Zahlungserinnerungen', 'Berichte'],
        benefits: ['Schnellere Zahlung', 'Weniger Aufwand', 'Überblick'],
        useCases: ['Kleinunternehmen', 'Freelancer', 'Handwerker'],
        timeframe: '2 Monate',
        metrics: ['Rechnungen', 'Zahlungszeit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Vorlagen?', answer: 'Ja, anpassbar.' }]
    },

    // ==================== ZAHNMEDIZIN ====================

    'dental-appointment-booking': {
        title: 'Zahnarzttermine',
        description: 'Terminbuchungssystem für Zahnarztpraxen.',
        shortDescription: 'Zahnarzt buchen per WhatsApp',
        features: ['Terminbuchung', 'Behandlungswahl', 'Erinnerungen', 'Krankengeschichte'],
        benefits: ['Einfache Buchung', 'Weniger No-Shows', 'Vollständige Akten'],
        useCases: ['Zahnarztpraxen', 'Kieferorthopäden', 'Kliniken'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Patientenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Notfälle?', answer: 'Ja, Prioritätstermine.' }]
    },

    'dental-treatment-reminders': {
        title: 'Behandlungserinnerungen',
        description: 'System für Zahnarztpraxis-Erinnerungen.',
        shortDescription: 'Zahnarzt-Erinnerungen per WhatsApp',
        features: ['Kontrolltermine', 'Nachsorge', 'Pflegetipps', 'Angebote'],
        benefits: ['Bessere Mundgesundheit', 'Treue Patienten', 'Mehr Besuche'],
        useCases: ['Zahnarztpraxen', 'Dentalhygiene', 'Kliniken'],
        timeframe: '1 Monat',
        metrics: ['Wiederkehrende Besuche', 'Gesundheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie oft?', answer: 'Alle 6 Monate oder nach Plan.' }]
    },

    // ==================== OPTIK ====================

    'optometry-appointment': {
        title: 'Augenarzttermine',
        description: 'Terminbuchung für Augenarzt und Optiker.',
        shortDescription: 'Sehtest buchen per WhatsApp',
        features: ['Terminbuchung', 'Servicewahl', 'Erinnerungen', 'Ergebnisse'],
        benefits: ['Einfache Buchung', 'Gesundheitsüberwachung', 'Erinnerungen'],
        useCases: ['Augenärzte', 'Optiker', 'Kliniken'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Patientenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Digitale Ergebnisse?', answer: 'Ja, per WhatsApp.' }]
    },

    'optometry-lens-orders': {
        title: 'Brillen- & Kontaktlinsen',
        description: 'Bestellsystem für Sehhilfen.',
        shortDescription: 'Brille bestellen per WhatsApp',
        features: ['Bestellung', 'Verfolgung', 'Fertigmeldung', 'Zahlung'],
        benefits: ['Einfach', 'Benachrichtigung', 'Schnelle Lieferung'],
        useCases: ['Optiker', 'Brillengeschäfte', 'Online-Optiker'],
        timeframe: '2 Monate',
        metrics: ['Bestellungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Lieferung?', answer: 'Ja, nach Hause oder Abholung.' }]
    },

    // ==================== YOGA & WELLNESS ====================

    'yoga-class-booking': {
        title: 'Yoga-Kurse',
        description: 'Buchungssystem für Yoga-Studios.',
        shortDescription: 'Yoga buchen per WhatsApp',
        features: ['Kursplan', 'Buchung', 'Lehrerwahl', 'Erinnerungen'],
        benefits: ['Einfache Buchung', 'Flexibilität', 'Erinnerungen'],
        useCases: ['Yoga-Studios', 'Lehrer', 'Wellness-Center'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Teilnahme'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Alle Levels?', answer: 'Ja, vom Anfänger bis Fortgeschritten.' }]
    },

    'yoga-online-sessions': {
        title: 'Online-Yoga',
        description: 'System für Online-Yoga-Sitzungen.',
        shortDescription: 'Online-Yoga per WhatsApp',
        features: ['Kursplan', 'Links', 'Aufzeichnungen', 'Fortschritt'],
        benefits: ['Von Zuhause', 'Flexible Zeiten', 'Aufzeichnungen'],
        useCases: ['Lehrer', 'Fitness-Plattformen', 'Studios'],
        timeframe: '2 Monate',
        metrics: ['Sitzungen', 'Aufrufe'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Aufzeichnungen?', answer: 'Ja, für Abonnenten.' }]
    },

    // ==================== KAMPFSPORT ====================

    'martialarts-class-booking': {
        title: 'Kampfsport-Training',
        description: 'Buchungssystem für Kampfsportschulen.',
        shortDescription: 'Kampfsport buchen per WhatsApp',
        features: ['Stundenplan', 'Sportartwahl', 'Buchung', 'Gürtelverfolgung'],
        benefits: ['Einfache Buchung', 'Fortschrittsverfolgung', 'Organisation'],
        useCases: ['Kampfsportschulen', 'Trainer', 'Vereine'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Beförderungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Sportarten?', answer: 'Karate, Taekwondo, Jiu-Jitsu, usw.' }]
    },

    'martialarts-belt-tracking': {
        title: 'Gürtel-Tracking',
        description: 'System zur Verfolgung von Gürteln und Prüfungen.',
        shortDescription: 'Gürtel verfolgen per WhatsApp',
        features: ['Trainingsprotokoll', 'Prüfungsanforderungen', 'Prüfungstermine', 'Zertifikate'],
        benefits: ['Motivation', 'Transparenz', 'Dokumentation'],
        useCases: ['Schulen', 'Verbände', 'Trainer'],
        timeframe: '2 Monate',
        metrics: ['Beförderungen', 'Engagement'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Offizielle Zertifikate?', answer: 'Ja, anerkannt.' }]
    },

    // ==================== FRISEUR & BARBERSHOP ====================

    'barbershop-booking': {
        title: 'Friseurtermine',
        description: 'Terminbuchung für Friseursalons.',
        shortDescription: 'Friseur buchen per WhatsApp',
        features: ['Terminbuchung', 'Friseurwahl', 'Servicewahl', 'Erinnerungen'],
        benefits: ['Kein Warten', 'Lieblingsfriseur', 'Erinnerungen'],
        useCases: ['Friseursalons', 'Barbershops', 'Stylisten'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Friseurwahl?', answer: 'Ja, Ihren Lieblingsfriseur.' }]
    },

    'barbershop-style-gallery': {
        title: 'Frisuren-Galerie',
        description: 'System zur Anzeige von Frisuren.',
        shortDescription: 'Frisur wählen per WhatsApp',
        features: ['Frisuren-Galerie', 'Vorauswahl', 'Favoriten', 'Terminverknüpfung'],
        benefits: ['Klare Erwartungen', 'Bessere Ergebnisse', 'Bequem'],
        useCases: ['Salons', 'Friseure', 'Stylisten'],
        timeframe: '1 Monat',
        metrics: ['Engagement', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Neue Frisuren?', answer: 'Ja, regelmäßige Updates.' }]
    },

    // ==================== CATERING ====================

    'catering-quote-request': {
        title: 'Catering-Anfrage',
        description: 'System für Catering-Angebote.',
        shortDescription: 'Catering anfragen per WhatsApp',
        features: ['Eventdetails', 'Menüauswahl', 'Preisangebot', 'Buchung'],
        benefits: ['Schnelles Angebot', 'Vergleich', 'Einfache Buchung'],
        useCases: ['Caterer', 'Hotels', 'Restaurants'],
        timeframe: '2 Monate',
        metrics: ['Anfragen', 'Konversionen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Größe?', answer: 'Von 10 bis 10.000 Personen.' }]
    },

    'catering-menu-customization': {
        title: 'Menü-Anpassung',
        description: 'System zur Menü-Anpassung für Events.',
        shortDescription: 'Menü gestalten per WhatsApp',
        features: ['Fertige Menüs', 'Anpassung', 'Ernährungswünsche', 'Sofortpreis'],
        benefits: ['Perfektes Menü', 'Flexibilität', 'Preistransparenz'],
        useCases: ['Caterer', 'Eventplaner', 'Hochzeiten'],
        timeframe: '2 Monate',
        metrics: ['Anpassungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Allergien?', answer: 'Ja, wir berücksichtigen alle.' }]
    },

    // ==================== TAXI & FAHRDIENST ====================

    'taxi-booking': {
        title: 'Taxi-Buchung',
        description: 'Buchungssystem für Taxis.',
        shortDescription: 'Taxi buchen per WhatsApp',
        features: ['Sofortbuchung', 'Fahrzeugverfolgung', 'Preisschätzung', 'Zahlung'],
        benefits: ['Einfach', 'Sicher', 'Transparent'],
        useCases: ['Taxiunternehmen', 'Fahrer', 'Apps'],
        timeframe: '3 Monate',
        metrics: ['Fahrten', 'Kundenzufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Vorausbuchung?', answer: 'Ja, bis zu einer Woche.' }]
    },

    'taxi-airport-transfer': {
        title: 'Flughafentransfer',
        description: 'System für Flughafentransfers.',
        shortDescription: 'Flughafentransfer per WhatsApp',
        features: ['Vorausbuchung', 'Flugverfolgung', 'Abholschild', 'Gepäck'],
        benefits: ['Zuverlässig', 'Bequem', 'Festpreise'],
        useCases: ['Taxiunternehmen', 'Hotels', 'Reisebüros'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Zufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Flugverspätung?', answer: 'Wir verfolgen Ihren Flug.' }]
    },

    // ==================== BOOTSVERMIETUNG ====================

    'boat-charter': {
        title: 'Bootsvercharterung',
        description: 'Buchungssystem für Boote und Yachten.',
        shortDescription: 'Boot mieten per WhatsApp',
        features: ['Katalog', 'Buchung', 'Services', 'Crew'],
        benefits: ['Luxuserlebnis', 'Einfache Buchung', 'Vielfalt'],
        useCases: ['Yachtvercharterer', 'Häfen', 'Tourismus'],
        timeframe: '3 Monate',
        metrics: ['Buchungen', 'Umsatz'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Mit Crew?', answer: 'Ja, oder ohne.' }]
    },

    'boat-fishing-trip': {
        title: 'Angelfahrten',
        description: 'Buchungssystem für Angeltouren.',
        shortDescription: 'Angelfahrt buchen per WhatsApp',
        features: ['Tourarten', 'Ausrüstung', 'Buchung', 'Wetter'],
        benefits: ['Tolles Erlebnis', 'Ausrüstung inklusive', 'Erfahrener Guide'],
        useCases: ['Angelboote', 'Tourismusunternehmen', 'Vereine'],
        timeframe: '2 Monate',
        metrics: ['Fahrten', 'Zufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Anfänger?', answer: 'Ja, willkommen.' }]
    },

    // ==================== SAFARIS & TOUREN ====================

    'safari-booking': {
        title: 'Safari-Buchung',
        description: 'Buchungssystem für Safari-Touren.',
        shortDescription: 'Safari buchen per WhatsApp',
        features: ['Tourarten', 'Unterkunft', 'Buchung', 'Guide'],
        benefits: ['Einzigartiges Erlebnis', 'Volle Organisation', 'Sicherheit'],
        useCases: ['Reiseveranstalter', 'Naturreservate', 'Resorts'],
        timeframe: '3 Monate',
        metrics: ['Buchungen', 'Zufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Welche Tiere?', answer: 'Je nach Ort und Saison.' }]
    },

    'city-tour-booking': {
        title: 'Stadtführungen',
        description: 'Buchungssystem für Stadttouren.',
        shortDescription: 'Stadtführung buchen per WhatsApp',
        features: ['Tourarten', 'Dauer', 'Sprachen', 'Buchung'],
        benefits: ['Stadt entdecken', 'Professioneller Guide', 'Flexibel'],
        useCases: ['Reiseveranstalter', 'Guides', 'Hotels'],
        timeframe: '2 Monate',
        metrics: ['Touren', 'Kundenzufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Private Tour?', answer: 'Ja, verfügbar.' }]
    },

    // ==================== BLUMENLADEN ====================

    'flower-order-delivery': {
        title: 'Blumenbestellung',
        description: 'Bestell- und Liefersystem für Blumen.',
        shortDescription: 'Blumen bestellen per WhatsApp',
        features: ['Blumenkatalog', 'Anpassung', 'Nachricht', 'Lieferung'],
        benefits: ['Einfach', 'Schnelle Lieferung', 'Schöne Sträuße'],
        useCases: ['Blumenläden', 'Eventplaner', 'Hotels'],
        timeframe: '2 Monate',
        metrics: ['Bestellungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Taggleiche Lieferung?', answer: 'Ja, innerhalb der Stadt.' }]
    },

    'flower-subscription': {
        title: 'Blumen-Abo',
        description: 'Abonnement für regelmäßige Blumenlieferung.',
        shortDescription: 'Blumen-Abo per WhatsApp',
        features: ['Wöchentlich/monatlich', 'Anpassung', 'Regelmäßige Lieferung', 'Verwaltung'],
        benefits: ['Immer frische Blumen', 'Ersparnis', 'Bequem'],
        useCases: ['Blumenläden', 'Unternehmen', 'Privat'],
        timeframe: '2 Monate',
        metrics: ['Abonnenten', 'Bindung'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Pausieren?', answer: 'Ja, möglich.' }]
    },

    // ==================== BÄCKEREI & KONDITOREI ====================

    'cake-custom-order': {
        title: 'Tortenbestellung',
        description: 'System für individuelle Tortenbestellungen.',
        shortDescription: 'Torte bestellen per WhatsApp',
        features: ['Design wählen', 'Anpassung', 'Termin', 'Lieferung/Abholung'],
        benefits: ['Einzigartige Torte', 'Volle Anpassung', 'Einfach'],
        useCases: ['Konditoreien', 'Bäckereien', 'Eventplaner'],
        timeframe: '2 Monate',
        metrics: ['Bestellungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Vorlaufzeit?', answer: '3-7 Tage je nach Aufwand.' }]
    },

    'bakery-daily-orders': {
        title: 'Tägliche Backwaren',
        description: 'System für tägliche Backwarenbestellungen.',
        shortDescription: 'Backwaren bestellen per WhatsApp',
        features: ['Tagesangebot', 'Vorbestellung', 'Lieferung/Abholung', 'Abo'],
        benefits: ['Frische Backwaren', 'Kein Warten', 'Lieferung'],
        useCases: ['Bäckereien', 'Cafés', 'Konditoreien'],
        timeframe: '2 Monate',
        metrics: ['Tägliche Bestellungen', 'Stammkunden'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Frühbestellung?', answer: 'Ja, vor 9 Uhr.' }]
    },

    // ==================== KAFFEE ====================

    'coffee-subscription-service': {
        title: 'Kaffee-Abo',
        description: 'Abonnement für regelmäßige Kaffeelieferung.',
        shortDescription: 'Kaffee-Abo per WhatsApp',
        features: ['Sortenwahl', 'Lieferplan', 'Mahlgrad', 'Verwaltung'],
        benefits: ['Immer frischer Kaffee', 'Ersparnis', 'Vielfalt'],
        useCases: ['Röstereien', 'Cafés', 'Händler'],
        timeframe: '2 Monate',
        metrics: ['Abonnenten', 'Bindung'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Sorte wechseln?', answer: 'Ja, jederzeit.' }]
    },

    'coffee-shop-preorder': {
        title: 'Café-Vorbestellung',
        description: 'System für Vorbestellungen im Café.',
        shortDescription: 'Kaffee vorbestellen per WhatsApp',
        features: ['Menü', 'Vorbestellung', 'Abholzeit', 'Zahlung'],
        benefits: ['Kein Warten', 'Bestellung fertig', 'Zeitersparnis'],
        useCases: ['Cafés', 'Röstereien', 'Restaurants'],
        timeframe: '2 Monate',
        metrics: ['Vorbestellungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie früh?', answer: 'Ab 15 Minuten.' }]
    },

    // ==================== HAUSTIERSERVICES ====================

    'pet-grooming-booking': {
        title: 'Tierpflege',
        description: 'Buchungssystem für Tierpflege.',
        shortDescription: 'Tierpflege buchen per WhatsApp',
        features: ['Servicewahl', 'Terminbuchung', 'Vorher/Nachher-Fotos', 'Erinnerungen'],
        benefits: ['Professionelle Pflege', 'Einfache Buchung', 'Tolle Ergebnisse'],
        useCases: ['Tiersalons', 'Tierärzte', 'Tierhandlungen'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Tiere?', answer: 'Hunde, Katzen und mehr.' }]
    },

    'pet-boarding-booking': {
        title: 'Tierpension',
        description: 'Buchungssystem für Tierbetreuung.',
        shortDescription: 'Tierpension buchen per WhatsApp',
        features: ['Vorausbuchung', 'Sonderwünsche', 'Tägliche Updates', 'Fotos'],
        benefits: ['Beruhigung', 'Beste Betreuung', 'Verfolgung'],
        useCases: ['Tierpensionen', 'Tierärzte', 'Pflegestationen'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Tägliche Updates?', answer: 'Ja, mit Fotos und Videos.' }]
    },

    'pet-food-delivery': {
        title: 'Tierfutter-Lieferung',
        description: 'Bestell- und Liefersystem für Tierfutter.',
        shortDescription: 'Tierfutter bestellen per WhatsApp',
        features: ['Produktkatalog', 'Abo', 'Regelmäßige Lieferung', 'Erinnerungen'],
        benefits: ['Nie leer', 'Ersparnis', 'Bequem'],
        useCases: ['Tierhandlungen', 'Händler', 'Tierärzte'],
        timeframe: '2 Monate',
        metrics: ['Bestellungen', 'Abonnements'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Monatsabo?', answer: 'Ja, mit Rabatt.' }]
    },

    // ==================== MÖBEL ====================

    'furniture-custom-orders': {
        title: 'Möbel nach Maß',
        description: 'System für Möbelanfertigung.',
        shortDescription: 'Möbel anfertigen per WhatsApp',
        features: ['Design teilen', 'Preisschätzung', 'Produktionsverfolgung', 'Lieferung'],
        benefits: ['Einzigartige Möbel', 'Maßanfertigung', 'Qualität'],
        useCases: ['Schreinereien', 'Tischler', 'Designer'],
        timeframe: '3 Monate',
        metrics: ['Bestellungen', 'Zufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Produktionszeit?', answer: '2-6 Wochen je nach Stück.' }]
    },

    'furniture-delivery-assembly': {
        title: 'Möbellieferung & Montage',
        description: 'System für Möbellieferung und Aufbau.',
        shortDescription: 'Möbelmontage per WhatsApp',
        features: ['Terminbuchung', 'Lieferverfolgung', 'Montageservice', 'Bewertung'],
        benefits: ['Vollservice', 'Verfolgung', 'Bequem'],
        useCases: ['Möbelhäuser', 'Lieferunternehmen', 'Tischler'],
        timeframe: '2 Monate',
        metrics: ['Lieferungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Montagekosten?', answer: 'Je nach Stücken, vor Buchung angezeigt.' }]
    },

    // ==================== UMZUGSSERVICES ====================

    'moving-quote-request': {
        title: 'Umzugsangebot',
        description: 'System für Umzugsangebote.',
        shortDescription: 'Umzug anfragen per WhatsApp',
        features: ['Wohnungsdetails', 'Fotos', 'Preisangebot', 'Buchung'],
        benefits: ['Preisvergleich', 'Transparenz', 'Einfache Buchung'],
        useCases: ['Umzugsunternehmen', 'Speditionen', 'Logistik'],
        timeframe: '2 Monate',
        metrics: ['Anfragen', 'Konversionen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Sofortangebot?', answer: 'Innerhalb von Stunden.' }]
    },

    'moving-day-coordination': {
        title: 'Umzugskoordination',
        description: 'System zur Koordination am Umzugstag.',
        shortDescription: 'Umzug verfolgen per WhatsApp',
        features: ['Team-Tracking', 'Checkliste', 'Updates', 'Kommunikation'],
        benefits: ['Organisation', 'Kommunikation', 'Beruhigung'],
        useCases: ['Umzugsunternehmen', 'Kunden', 'Koordinatoren'],
        timeframe: '2 Monate',
        metrics: ['Zufriedenheit', 'Reibungsloser Ablauf'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Versicherung?', answer: 'Ja, Transportversicherung.' }]
    },

    // ==================== DRUCKEREI ====================

    'print-order-system': {
        title: 'Druckaufträge',
        description: 'System für Druckbestellungen.',
        shortDescription: 'Drucken per WhatsApp',
        features: ['Dateien hochladen', 'Spezifikationen', 'Vorschau', 'Lieferung/Abholung'],
        benefits: ['Einfach', 'Qualität', 'Schnell'],
        useCases: ['Druckereien', 'Copy-Shops', 'Druckdienstleister'],
        timeframe: '2 Monate',
        metrics: ['Bestellungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Formate?', answer: 'PDF, JPG, PNG und mehr.' }]
    },

    'print-business-cards': {
        title: 'Visitenkartendruc',
        description: 'System für Visitenkartengestaltung und -druck.',
        shortDescription: 'Visitenkarten per WhatsApp',
        features: ['Vorlagen', 'Individuelles Design', 'Vorschau', 'Lieferung'],
        benefits: ['Professionell', 'Schnell', 'Einfach'],
        useCases: ['Druckereien', 'Unternehmer', 'Unternehmen'],
        timeframe: '1 Monat',
        metrics: ['Bestellungen', 'Folgeaufträge'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Druckzeit?', answer: '24-48 Stunden.' }]
    },

    // ==================== COWORKING ====================

    'coworking-booking': {
        title: 'Coworking-Buchung',
        description: 'Buchungssystem für Coworking-Spaces.',
        shortDescription: 'Arbeitsplatz buchen per WhatsApp',
        features: ['Platzsuche', 'Stunden-/Tagesbuchung', 'Zusatzservices', 'Zahlung'],
        benefits: ['Flexibilität', 'Arbeitsumgebung', 'Services'],
        useCases: ['Coworking-Spaces', 'Büroservices', 'Hotels'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Auslastung'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Stundenweise?', answer: 'Ja, oder als Paket.' }]
    },

    'coworking-meeting-room': {
        title: 'Meetingraum-Buchung',
        description: 'Buchungssystem für Meetingräume.',
        shortDescription: 'Meetingraum buchen per WhatsApp',
        features: ['Raumsuche', 'Kapazität', 'Ausstattung', 'Zahlung'],
        benefits: ['Passender Raum', 'Schnelle Buchung', 'Vollausstattung'],
        useCases: ['Coworking-Spaces', 'Hotels', 'Business-Center'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Präsentationstechnik?', answer: 'Ja, verfügbar.' }]
    },

    // ==================== KINDERBETREUUNG ====================

    'childcare-booking': {
        title: 'Kinderbetreuung',
        description: 'Buchungssystem für Kinderbetreuung.',
        shortDescription: 'Betreuung buchen per WhatsApp',
        features: ['Verfügbarkeit', 'Buchung', 'Betreuerprofile', 'Bewertungen'],
        benefits: ['Vertrauenswürdig', 'Flexibel', 'Einfach'],
        useCases: ['Tagesmütter', 'Agenturen', 'Eltern'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Hintergrundcheck?', answer: 'Ja, alle Betreuer geprüft.' }]
    },

    'childcare-daycare-updates': {
        title: 'Kita-Updates',
        description: 'Kommunikationssystem für Kindertagesstätten.',
        shortDescription: 'Kita-News per WhatsApp',
        features: ['Tägliche Updates', 'Fotos', 'Termine', 'Krankmeldungen'],
        benefits: ['Informierte Eltern', 'Weniger Anrufe', 'Beruhigung'],
        useCases: ['Kindergärten', 'Kitas', 'Krippen'],
        timeframe: '2 Monate',
        metrics: ['Elternengagement', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Private Fotos?', answer: 'Ja, nur für Eltern sichtbar.' }]
    },

    // ==================== SENIORENBETREUUNG ====================

    'eldercare-service': {
        title: 'Seniorenbetreuung',
        description: 'Buchungssystem für Seniorenbetreuung.',
        shortDescription: 'Betreuung buchen per WhatsApp',
        features: ['Servicewahl', 'Zeitplan', 'Pflegekraftprofile', 'Updates'],
        benefits: ['Qualitätspflege', 'Beruhigung', 'Flexibel'],
        useCases: ['Pflegedienste', 'Familien', 'Pflegekräfte'],
        timeframe: '3 Monate',
        metrics: ['Dienststunden', 'Zufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Qualifiziert?', answer: 'Ja, alle Pflegekräfte zertifiziert.' }]
    },

    'eldercare-family-updates': {
        title: 'Familien-Updates',
        description: 'Update-System für Angehörige.',
        shortDescription: 'Pflege-Updates per WhatsApp',
        features: ['Tägliche Updates', 'Gesundheitsberichte', 'Aktivitäten', 'Termine'],
        benefits: ['Informiert bleiben', 'Beruhigung', 'Transparenz'],
        useCases: ['Pflegeheime', 'Pflegedienste', 'Familien'],
        timeframe: '2 Monate',
        metrics: ['Familienengagement', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Fotos?', answer: 'Ja, bei Aktivitäten.' }]
    },

    // ==================== NACHHILFE ====================

    'tutoring-booking': {
        title: 'Nachhilfe buchen',
        description: 'Buchungssystem für Nachhilfe.',
        shortDescription: 'Nachhilfe buchen per WhatsApp',
        features: ['Fächerwahl', 'Lehrerwahl', 'Terminbuchung', 'Fortschritt'],
        benefits: ['Passender Lehrer', 'Flexible Termine', 'Fortschrittsverfolgung'],
        useCases: ['Nachhilfeinstitute', 'Tutoren', 'Eltern'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Notensteigerung'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Fächer?', answer: 'Alle Schul- und Unifa cher.' }]
    },

    'tutoring-homework-help': {
        title: 'Hausaufgabenhilfe',
        description: 'System für schnelle Hausaufgabenhilfe.',
        shortDescription: 'Hausaufgaben-Hilfe per WhatsApp',
        features: ['Frage stellen', 'Foto senden', 'Schnelle Antwort', 'Erklärungen'],
        benefits: ['Sofortige Hilfe', 'Verständnis', 'Bessere Noten'],
        useCases: ['Tutoren', 'Lernplattformen', 'Schüler'],
        timeframe: '2 Monate',
        metrics: ['Anfragen', 'Lösungsrate'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Schnell?', answer: 'Antwort innerhalb von Minuten.' }]
    },

    // ==================== PARKPLATZ ====================

    'parking-booking': {
        title: 'Parkplatzbuchung',
        description: 'Buchungssystem für Parkplätze.',
        shortDescription: 'Parkplatz buchen per WhatsApp',
        features: ['Suche', 'Verfügbarkeit', 'Buchung', 'Navigation'],
        benefits: ['Garantierter Platz', 'Zeitersparnis', 'Oft günstiger'],
        useCases: ['Parkhausbetreiber', 'Events', 'Flughäfen'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Auslastung'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Stornierung?', answer: 'Ja, bis 1 Stunde vorher.' }]
    },

    'parking-monthly-permits': {
        title: 'Monats-Parkausweise',
        description: 'System für Parkdauerkarten.',
        shortDescription: 'Dauerparkplatz per WhatsApp',
        features: ['Antrag', 'Zahlung', 'Verlängerung', 'Digitaler Ausweis'],
        benefits: ['Planungssicherheit', 'Ersparnis', 'Bequem'],
        useCases: ['Parkhäuser', 'Arbeitgeber', 'Wohnanlagen'],
        timeframe: '2 Monate',
        metrics: ['Dauerkunden', 'Bindung'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kündigung?', answer: 'Monatlich kündbar.' }]
    },

    // ==================== SCHMUCK ====================

    'jewelry-custom-orders': {
        title: 'Schmuck nach Maß',
        description: 'System für individuellen Schmuck.',
        shortDescription: 'Schmuck anfertigen per WhatsApp',
        features: ['Design teilen', 'Beratung', 'Preisg', 'Fertigmeldung'],
        benefits: ['Einzigartiger Schmuck', 'Qualität', 'Beratung'],
        useCases: ['Juweliere', 'Goldschmiede', 'Designer'],
        timeframe: '3 Monate',
        metrics: ['Aufträge', 'Zufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Materialwahl?', answer: 'Gold, Silber, Platin und mehr.' }]
    },

    'jewelry-repair-service': {
        title: 'Schmuckreparatur',
        description: 'System für Schmuckreparaturen.',
        shortDescription: 'Schmuck reparieren per WhatsApp',
        features: ['Problembeschreibung', 'Fotos', 'Preisschätzung', 'Fertigmeldung'],
        benefits: ['Schnelle Reparatur', 'Transparente Preise', 'Qualität'],
        useCases: ['Juweliere', 'Uhrmacher', 'Goldschmiede'],
        timeframe: '2 Monate',
        metrics: ['Reparaturen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Dauer?', answer: '1-7 Tage je nach Arbeit.' }]
    },

    // ==================== KURIER & EXPRESS ====================

    'courier-same-day': {
        title: 'Taggleiche Zustellung',
        description: 'System für Express-Kurierdienste.',
        shortDescription: 'Express-Kurier per WhatsApp',
        features: ['Sofortbuchung', 'Live-Tracking', 'Zustellnachweis', 'Zahlung'],
        benefits: ['Schnell', 'Zuverlässig', 'Nachverfolgbar'],
        useCases: ['Kuriere', 'Unternehmen', 'E-Commerce'],
        timeframe: '2 Monate',
        metrics: ['Zustellungen', 'Zustellzeit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Wie schnell?', answer: 'Innerhalb von Stunden.' }]
    },

    'courier-scheduled-pickup': {
        title: 'Geplante Abholung',
        description: 'System für geplante Abholungen.',
        shortDescription: 'Abholung planen per WhatsApp',
        features: ['Terminplanung', 'Wiederkehrend', 'Etiketterstellung', 'Tracking'],
        benefits: ['Planungssicherheit', 'Regelmäßiger Service', 'Einfach'],
        useCases: ['Unternehmen', 'E-Commerce', 'Kuriere'],
        timeframe: '2 Monate',
        metrics: ['Abholungen', 'Zuverlässigkeit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Regelmäßig?', answer: 'Ja, täglich/wöchentlich/monatlich.' }]
    },

    // ==================== LAGERUNG ====================

    'storage-booking': {
        title: 'Self-Storage Buchung',
        description: 'Buchungssystem für Lagereinheiten.',
        shortDescription: 'Lagerraum buchen per WhatsApp',
        features: ['Größenwahl', 'Verfügbarkeit', 'Buchung', 'Zugangscodes'],
        benefits: ['Flexibel', 'Sicher', 'Einfach'],
        useCases: ['Lagerhäuser', 'Speditionen', 'Privatpersonen'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Auslastung'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: '24/7 Zugang?', answer: 'Ja, mit Code.' }]
    },

    'storage-inventory-management': {
        title: 'Lager-Inventar',
        description: 'System zur Lagerverwaltung.',
        shortDescription: 'Lager verwalten per WhatsApp',
        features: ['Inventarliste', 'Fotos', 'Suche', 'Erinnerungen'],
        benefits: ['Überblick', 'Schnelles Finden', 'Organisation'],
        useCases: ['Unternehmen', 'Privatpersonen', 'E-Commerce'],
        timeframe: '2 Monate',
        metrics: ['Artikel', 'Suchzeit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Fotos?', answer: 'Ja, für jedes Objekt.' }]
    },

    // ==================== RELIGIÖSE DIENSTE ====================

    'religious-event-registration': {
        title: 'Gemeindeveranstaltungen',
        description: 'Anmeldesystem für religiöse Veranstaltungen.',
        shortDescription: 'Anmelden per WhatsApp',
        features: ['Veranstaltungsliste', 'Anmeldung', 'Erinnerungen', 'Updates'],
        benefits: ['Einfache Anmeldung', 'Überblick', 'Gemeinschaft'],
        useCases: ['Kirchen', 'Moscheen', 'Synagogen'],
        timeframe: '2 Monate',
        metrics: ['Anmeldungen', 'Teilnahme'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kinderprogramm?', answer: 'Ja, separate Anmeldung.' }]
    },

    'religious-donation': {
        title: 'Gemeindespenden',
        description: 'Spendenystem für Gemeinden.',
        shortDescription: 'Spenden per WhatsApp',
        features: ['Spenden', 'Regelmäßig', 'Quittungen', 'Projekte'],
        benefits: ['Einfach', 'Regelmäßig', 'Transparent'],
        useCases: ['Kirchen', 'Gemeinden', 'Hilfswerke'],
        timeframe: '2 Monate',
        metrics: ['Spenden', 'Spender'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Steuerlich absetzbar?', answer: 'Ja, Quittung inklusive.' }]
    },

    // ==================== REPARATUREN ====================

    'phone-repair-service': {
        title: 'Handyreparatur',
        description: 'Buchungssystem für Handyreparaturen.',
        shortDescription: 'Handy reparieren per WhatsApp',
        features: ['Schadensbeschreibung', 'Preisschätzung', 'Terminbuchung', 'Fertigmeldung'],
        benefits: ['Schnelle Reparatur', 'Transparente Preise', 'Qualität'],
        useCases: ['Reparaturdienste', 'Shops', 'Hersteller'],
        timeframe: '2 Monate',
        metrics: ['Reparaturen', 'Zeit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Dauer?', answer: 'Meist 1 Stunde.' }]
    },

    'computer-repair-service': {
        title: 'Computerreparatur',
        description: 'Buchungssystem für Computerreparaturen.',
        shortDescription: 'Computer reparieren per WhatsApp',
        features: ['Problembeschreibung', 'Ferndiagnose', 'Vor-Ort/Abholung', 'Fertigmeldung'],
        benefits: ['Schnelle Lösung', 'Transparenz', 'Qualität'],
        useCases: ['IT-Services', 'Shops', 'Unternehmen'],
        timeframe: '2 Monate',
        metrics: ['Reparaturen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Fernwartung?', answer: 'Ja, für Software-Probleme.' }]
    },

    'watch-repair-service': {
        title: 'Uhrenreparatur',
        description: 'System für Uhrenreparaturen.',
        shortDescription: 'Uhr reparieren per WhatsApp',
        features: ['Fotos', 'Preisschätzung', 'Abholung/Lieferung', 'Fertigmeldung'],
        benefits: ['Fachkompetenz', 'Transparenz', 'Qualität'],
        useCases: ['Uhrmacher', 'Juweliere', 'Service-Center'],
        timeframe: '2 Monate',
        metrics: ['Reparaturen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Ersatzteile?', answer: 'Original oder kompatibel.' }]
    },

    'appliance-repair': {
        title: 'Haushaltsgeräte-Reparatur',
        description: 'System für Haushaltsgerätereparaturen.',
        shortDescription: 'Gerät reparieren per WhatsApp',
        features: ['Gerätewahl', 'Problembeschreibung', 'Terminbuchung', 'Kostenvoranschlag'],
        benefits: ['Schnelle Hilfe', 'Vorort-Service', 'Transparenz'],
        useCases: ['Reparaturdienste', 'Hersteller', 'Händler'],
        timeframe: '2 Monate',
        metrics: ['Reparaturen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Geräte?', answer: 'Alle Haushaltsgeräte.' }]
    },

    // ==================== SCHÄDLINGSBEKÄMPFUNG ====================

    'pest-control-booking': {
        title: 'Schädlingsbekämpfung',
        description: 'Buchungssystem für Schädlingsbekämpfung.',
        shortDescription: 'Schädlingsbekämpfung per WhatsApp',
        features: ['Problembeschreibung', 'Terminbuchung', 'Behandlung', 'Nachkontrolle'],
        benefits: ['Schnelle Hilfe', 'Sichere Methoden', 'Garantie'],
        useCases: ['Schädlingsbekämpfer', 'Hausverwaltungen', 'Unternehmen'],
        timeframe: '2 Monate',
        metrics: ['Einsätze', 'Erfolgsrate'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Sicher?', answer: 'Ja, umweltfreundliche Methoden.' }]
    },

    // ==================== GARTENBAU ====================

    'landscaping-booking': {
        title: 'Garten- und Landschaftsbau',
        description: 'Buchungssystem für Gartenarbeiten.',
        shortDescription: 'Gärtner buchen per WhatsApp',
        features: ['Servicewahl', 'Terminbuchung', 'Preisschätzung', 'Regelmäßig'],
        benefits: ['Schöner Garten', 'Professionell', 'Zuverlässig'],
        useCases: ['Gärtner', 'Landschaftsbauer', 'Hausverwaltungen'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Stammkunden'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Regelmäßig?', answer: 'Ja, wöchentlich/monatlich.' }]
    },

    'landscaping-plant-delivery': {
        title: 'Pflanzenlieferung',
        description: 'Bestell- und Liefersystem für Pflanzen.',
        shortDescription: 'Pflanzen bestellen per WhatsApp',
        features: ['Pflanzenkatalog', 'Pflegetipps', 'Lieferung', 'Pflanzung'],
        benefits: ['Große Auswahl', 'Pflegetipps', 'Geliefert'],
        useCases: ['Gärtnereien', 'Baumärkte', 'Online-Shops'],
        timeframe: '2 Monate',
        metrics: ['Bestellungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Pflanzung?', answer: 'Ja, auf Wunsch.' }]
    },

    // ==================== POOL-SERVICE ====================

    'pool-maintenance-booking': {
        title: 'Pool-Wartung',
        description: 'Buchungssystem für Pool-Service.',
        shortDescription: 'Pool-Service per WhatsApp',
        features: ['Regelmäßige Wartung', 'Reparaturen', 'Chemikalien', 'Berichte'],
        benefits: ['Sauberer Pool', 'Regelmäßig', 'Professionell'],
        useCases: ['Pool-Services', 'Hotels', 'Privathaushalte'],
        timeframe: '2 Monate',
        metrics: ['Wartungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie oft?', answer: 'Wöchentlich empfohlen.' }]
    },

    // ==================== DACH & FASSADE ====================

    'roofing-service': {
        title: 'Dachdecker-Service',
        description: 'Buchungssystem für Dacharbeiten.',
        shortDescription: 'Dachdecker per WhatsApp',
        features: ['Inspektion', 'Reparatur', 'Neueindeckung', 'Preisschätzung'],
        benefits: ['Dichtes Dach', 'Qualität', 'Garantie'],
        useCases: ['Dachdecker', 'Bauunternehmen', 'Hausverwaltungen'],
        timeframe: '3 Monate',
        metrics: ['Projekte', 'Zufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Garantie?', answer: 'Ja, bis 10 Jahre.' }]
    },

    // ==================== FENSTER & GLAS ====================

    'window-service': {
        title: 'Fenster-Service',
        description: 'Buchungssystem für Fensterarbeiten.',
        shortDescription: 'Fenster per WhatsApp',
        features: ['Reparatur', 'Austausch', 'Einbruchschutz', 'Preisschätzung'],
        benefits: ['Dicht', 'Energieeffizient', 'Sicher'],
        useCases: ['Glaser', 'Fensterbauer', 'Sicherheitsfirmen'],
        timeframe: '2 Monate',
        metrics: ['Aufträge', 'Zufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Notfall?', answer: 'Ja, 24/7 Notdienst.' }]
    },

    // ==================== TEPPICH & BODEN ====================

    'flooring-service': {
        title: 'Boden-Verlegung',
        description: 'Buchungssystem für Bodenarbeiten.',
        shortDescription: 'Boden verlegen per WhatsApp',
        features: ['Materialwahl', 'Aufmaß', 'Verlegung', 'Preisschätzung'],
        benefits: ['Schöner Boden', 'Professionell', 'Garantie'],
        useCases: ['Bodenleger', 'Raumausstatter', 'Baumärkte'],
        timeframe: '2 Monate',
        metrics: ['Aufträge', 'Zufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Welche Böden?', answer: 'Parkett, Laminat, Fliesen, Teppich.' }]
    },

    // ==================== VORHÄNGE & GARDINEN ====================

    'curtain-service': {
        title: 'Vorhang-Service',
        description: 'Buchungssystem für Vorhänge.',
        shortDescription: 'Vorhänge per WhatsApp',
        features: ['Auswahl', 'Ausmessen', 'Montage', 'Pflege'],
        benefits: ['Schönes Ambiente', 'Maßanfertigung', 'Montage'],
        useCases: ['Raumausstatter', 'Gardinenshops', 'Innenarchitekten'],
        timeframe: '2 Monate',
        metrics: ['Aufträge', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Ausmessen?', answer: 'Ja, kostenlos.' }]
    },

    // ==================== MATRATZEN ====================

    'mattress-delivery': {
        title: 'Matratzen-Lieferung',
        description: 'Bestell- und Liefersystem für Matratzen.',
        shortDescription: 'Matratze bestellen per WhatsApp',
        features: ['Beratung', 'Auswahl', 'Lieferung', 'Altentsorgung'],
        benefits: ['Besserer Schlaf', 'Lieferung', 'Testphase'],
        useCases: ['Matratzenhändler', 'Möbelhäuser', 'Online-Shops'],
        timeframe: '2 Monate',
        metrics: ['Bestellungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Testphase?', answer: 'Ja, 30-100 Tage.' }]
    },

    // ==================== WASSER-LIEFERUNG ====================

    'water-delivery': {
        title: 'Wasserlieferung',
        description: 'System für Trinkwasserlieferung.',
        shortDescription: 'Wasser bestellen per WhatsApp',
        features: ['Sofortbestellung', 'Abo', 'Regelmäßige Lieferung', 'Leergut'],
        benefits: ['Frisches Wasser', 'Regelmäßig', 'Bequem'],
        useCases: ['Wasserlieferdienste', 'Büros', 'Privathaushalte'],
        timeframe: '1 Monat',
        metrics: ['Lieferungen', 'Abonnenten'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Abo?', answer: 'Ja, mit Rabatt.' }]
    },

    // ==================== SOLAR ====================

    'solar-quote': {
        title: 'Solar-Angebot',
        description: 'System für Solaranlagen-Angebote.',
        shortDescription: 'Solar-Angebot per WhatsApp',
        features: ['Dachfotos', 'Verbrauchsanalyse', 'Preisangebot', 'Beratung'],
        benefits: ['Stromkosten senken', 'Umwelt', 'Förderung'],
        useCases: ['Solarfirmen', 'Elektriker', 'Energieberater'],
        timeframe: '3 Monate',
        metrics: ['Anfragen', 'Installationen'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Ersparnis?', answer: 'Bis 80% der Stromkosten.' }]
    },

    // ==================== AUFZUG ====================

    'elevator-service': {
        title: 'Aufzug-Service',
        description: 'Wartungs- und Störungssystem für Aufzüge.',
        shortDescription: 'Aufzug-Service per WhatsApp',
        features: ['Wartungsplan', 'Störungsmeldung', '24/7 Notdienst', 'Berichte'],
        benefits: ['Sicherheit', 'Verfügbarkeit', 'Dokumentation'],
        useCases: ['Aufzugsfirmen', 'Hausverwaltungen', 'Unternehmen'],
        timeframe: '3 Monate',
        metrics: ['Verfügbarkeit', 'Reaktionszeit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Notfall?', answer: 'Techniker in 30-60 Minuten.' }]
    },

    // ==================== GENERATOR ====================

    'generator-service': {
        title: 'Generator-Service',
        description: 'Wartungssystem für Notstromaggregate.',
        shortDescription: 'Generator-Service per WhatsApp',
        features: ['Wartungsplan', 'Testläufe', 'Reparatur', 'Kraftstoff'],
        benefits: ['Betriebssicherheit', 'Regelmäßig', 'Dokumentation'],
        useCases: ['Facility Manager', 'Krankenhäuser', 'Unternehmen'],
        timeframe: '2 Monate',
        metrics: ['Verfügbarkeit', 'Testläufe'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Wie oft?', answer: 'Monatlicher Testlauf empfohlen.' }]
    },

    // ==================== BRANDSCHUTZ ====================

    'fire-safety-service': {
        title: 'Brandschutz-Service',
        description: 'System für Brandschutzwartung.',
        shortDescription: 'Brandschutz per WhatsApp',
        features: ['Prüfungen', 'Feuerlöscher', 'Schulungen', 'Zertifikate'],
        benefits: ['Sicherheit', 'Compliance', 'Dokumentation'],
        useCases: ['Brandschutzfirmen', 'Unternehmen', 'Hausverwaltungen'],
        timeframe: '2 Monate',
        metrics: ['Prüfungen', 'Compliance'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Offizielle Prüfung?', answer: 'Ja, nach Vorschrift.' }]
    },

    // ==================== MEDIZINISCHE GERÄTE ====================

    'medical-equipment-rental': {
        title: 'Medizinische Geräte mieten',
        description: 'System für medizinische Geräte-Vermietung.',
        shortDescription: 'Medizingeräte mieten per WhatsApp',
        features: ['Gerätekatalog', 'Lieferung', 'Einweisung', 'Abholung'],
        benefits: ['Schnell verfügbar', 'Professionell', 'Flexibel'],
        useCases: ['Sanitätshäuser', 'Krankenhäuser', 'Pflegedienste'],
        timeframe: '2 Monate',
        metrics: ['Vermietungen', 'Zufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Einweisung?', answer: 'Ja, inklusive.' }]
    },

    // ==================== HÄUSLICHE PFLEGE ====================

    'home-nursing': {
        title: 'Häusliche Pflege',
        description: 'Buchungssystem für häusliche Pflege.',
        shortDescription: 'Pflege buchen per WhatsApp',
        features: ['Servicewahl', 'Terminbuchung', 'Pflegekraftwahl', 'Berichte'],
        benefits: ['Zuhause gepflegt', 'Qualität', 'Flexibel'],
        useCases: ['Pflegedienste', 'Krankenhäuser', 'Familien'],
        timeframe: '3 Monate',
        metrics: ['Pflegestunden', 'Zufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Krankenkasse?', answer: 'Ja, Abrechnung möglich.' }]
    },

    // ==================== LABOR ====================

    'lab-test-booking': {
        title: 'Labor-Hausbesuch',
        description: 'System für Laborproben zu Hause.',
        shortDescription: 'Blutabnahme buchen per WhatsApp',
        features: ['Terminbuchung', 'Testwahl', 'Hausbesuch', 'Ergebnisse'],
        benefits: ['Bequem', 'Schnelle Ergebnisse', 'Professionell'],
        useCases: ['Labore', 'Arztpraxen', 'Krankenhäuser'],
        timeframe: '2 Monate',
        metrics: ['Hausbesuche', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Ergebnisse?', answer: 'Digital per WhatsApp.' }]
    },

    // ==================== PHYSIOTHERAPIE ====================

    'physio-booking': {
        title: 'Physiotherapie',
        description: 'Buchungssystem für Physiotherapie.',
        shortDescription: 'Physio buchen per WhatsApp',
        features: ['Terminbuchung', 'Therapeutenwahl', 'Behandlungsart', 'Hausbesuche'],
        benefits: ['Schnelle Termine', 'Therapeutenwahl', 'Hausbesuche'],
        useCases: ['Physiotherapeuten', 'Praxen', 'Kliniken'],
        timeframe: '2 Monate',
        metrics: ['Termine', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Hausbesuch?', answer: 'Ja, verfügbar.' }]
    },

    // ==================== ERNÄHRUNGSBERATUNG ====================

    'nutrition-consultation': {
        title: 'Ernährungsberatung',
        description: 'Buchungssystem für Ernährungsberatung.',
        shortDescription: 'Ernährungsberatung per WhatsApp',
        features: ['Terminbuchung', 'Fragebogen', 'Ernährungsplan', 'Follow-up'],
        benefits: ['Individueller Plan', 'Professionell', 'Ergebnisse'],
        useCases: ['Ernährungsberater', 'Praxen', 'Fitnessstudios'],
        timeframe: '2 Monate',
        metrics: ['Beratungen', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Online möglich?', answer: 'Ja, per Video.' }]
    },

    // ==================== THERAPIE ====================

    'therapy-booking': {
        title: 'Psychotherapie',
        description: 'Buchungssystem für Psychotherapie.',
        shortDescription: 'Therapie buchen per WhatsApp',
        features: ['Erstgespräch', 'Terminbuchung', 'Therapeutenwahl', 'Online-Sitzungen'],
        benefits: ['Vertraulich', 'Flexibel', 'Professionell'],
        useCases: ['Therapeuten', 'Praxen', 'Kliniken'],
        timeframe: '3 Monate',
        metrics: ['Sitzungen', 'Zufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Vertraulich?', answer: 'Absolut, streng vertraulich.' }]
    },

    // ==================== LOGOPÄDIE ====================

    'speech-therapy': {
        title: 'Logopädie',
        description: 'Buchungssystem für Logopädie.',
        shortDescription: 'Logopädie buchen per WhatsApp',
        features: ['Erstbefund', 'Terminbuchung', 'Therapieplan', 'Fortschrittstracking'],
        benefits: ['Spezialisiert', 'Individuell', 'Fortschritt'],
        useCases: ['Logopäden', 'Praxen', 'Kliniken'],
        timeframe: '2 Monate',
        metrics: ['Sitzungen', 'Fortschritt'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kinder und Erwachsene?', answer: 'Ja, alle Altersgruppen.' }]
    },

    // ==================== ERGOTHERAPIE ====================

    'occupational-therapy': {
        title: 'Ergotherapie',
        description: 'Buchungssystem für Ergotherapie.',
        shortDescription: 'Ergotherapie buchen per WhatsApp',
        features: ['Erstgespräch', 'Terminbuchung', 'Therapieplan', 'Hausbesuche'],
        benefits: ['Alltagskompetenz', 'Individuell', 'Hausbesuche'],
        useCases: ['Ergotherapeuten', 'Praxen', 'Kliniken'],
        timeframe: '2 Monate',
        metrics: ['Sitzungen', 'Fortschritt'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Für wen?', answer: 'Kinder, Erwachsene, Senioren.' }]
    },

    // ==================== BLUTSPENDE ====================

    'blood-donation': {
        title: 'Blutspende',
        description: 'System für Blutspendeaktionen.',
        shortDescription: 'Blutspende per WhatsApp',
        features: ['Termine finden', 'Anmeldung', 'Erinnerungen', 'Spenderausweis'],
        benefits: ['Leben retten', 'Einfach', 'Erinnerungen'],
        useCases: ['Blutspendedienste', 'Krankenhäuser', 'Vereine'],
        timeframe: '2 Monate',
        metrics: ['Spenden', 'Spenderbindung'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie oft?', answer: 'Alle 8-12 Wochen.' }]
    },

    // ==================== NOTFALL-BROADCAST ====================

    'emergency-broadcast': {
        title: 'Notfall-Benachrichtigung',
        description: 'System für Notfallmeldungen.',
        shortDescription: 'Notfall-Alerts per WhatsApp',
        features: ['Massenversand', 'Geolokalisierung', 'Priorität', 'Bestätigung'],
        benefits: ['Schnell', 'Zuverlässig', 'Leben retten'],
        useCases: ['Behörden', 'Unternehmen', 'Schulen'],
        timeframe: '3 Monate',
        metrics: ['Reichweite', 'Reaktionszeit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Antwortmöglichkeit?', answer: 'Ja, Bestätigung möglich.' }]
    },

    // ==================== NACHBARSCHAFTSWACHE ====================

    'neighborhood-watch': {
        title: 'Nachbarschaftswache',
        description: 'Kommunikationssystem für Nachbarschaften.',
        shortDescription: 'Nachbarschaft per WhatsApp',
        features: ['Meldungen', 'Warnungen', 'Koordination', 'Updates'],
        benefits: ['Sichere Nachbarschaft', 'Gemeinschaft', 'Schnelle Info'],
        useCases: ['Nachbarschaften', 'Wohnanlagen', 'Gemeinden'],
        timeframe: '2 Monate',
        metrics: ['Meldungen', 'Engagement'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Anonym?', answer: 'Ja, optionale Anonymität.' }]
    },

    // ==================== GEMEINDEEVENTS ====================

    'community-events': {
        title: 'Gemeindeveranstaltungen',
        description: 'System für lokale Veranstaltungen.',
        shortDescription: 'Lokale Events per WhatsApp',
        features: ['Eventkalender', 'Anmeldung', 'Erinnerungen', 'Teilnehmerliste'],
        benefits: ['Gemeinschaft', 'Information', 'Teilnahme'],
        useCases: ['Gemeinden', 'Vereine', 'Wohnanlagen'],
        timeframe: '2 Monate',
        metrics: ['Events', 'Teilnehmer'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kostenlos?', answer: 'Ja, Grundfunktionen kostenlos.' }]
    },

    // ==================== FREIWILLIGE ====================

    'volunteer-coordination': {
        title: 'Freiwilligen-Koordination',
        description: 'System zur Koordination von Freiwilligen.',
        shortDescription: 'Freiwillige koordinieren per WhatsApp',
        features: ['Registrierung', 'Einsatzplanung', 'Stundenverfolgung', 'Zertifikate'],
        benefits: ['Organisation', 'Wertschätzung', 'Dokumentation'],
        useCases: ['NGOs', 'Events', 'Gemeinden'],
        timeframe: '2 Monate',
        metrics: ['Freiwillige', 'Stunden'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Zertifikate?', answer: 'Ja, für Nachweise.' }]
    },

    // ==================== LOST & FOUND ====================

    'lost-found-platform': {
        title: 'Fundbüro',
        description: 'System für verlorene und gefundene Gegenstände.',
        shortDescription: 'Fundbüro per WhatsApp',
        features: ['Verlustmeldung', 'Fundmeldung', 'Matching', 'Benachrichtigung'],
        benefits: ['Wiederfinden', 'Einfach', 'Community'],
        useCases: ['Städte', 'Unternehmen', 'Veranstaltungsorte'],
        timeframe: '2 Monate',
        metrics: ['Matches', 'Rückgaben'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kostenlos?', answer: 'Ja, gemeinnütziger Service.' }]
    },

    // ==================== CRYPTO & FOREX ====================

    'crypto-trading-signals': {
        title: 'Krypto-Signale',
        description: 'System für Kryptowährungssignale.',
        shortDescription: 'Krypto-Signale per WhatsApp',
        features: ['Handelssignale', 'Marktanalyse', 'Alarme', 'Lerninhalte'],
        benefits: ['Bessere Entscheidungen', 'Echtzeit', 'Expertenanalyse'],
        useCases: ['Trader', 'Plattformen', 'Ausbilder'],
        timeframe: '3 Monate',
        metrics: ['Signale', 'Erfolgsrate'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Risiko?', answer: 'Nur Bildungszwecke, keine Anlageberatung.' }]
    },

    'forex-alerts': {
        title: 'Forex-Alarme',
        description: 'System für Devisenmarkt-Alarme.',
        shortDescription: 'Forex-Alerts per WhatsApp',
        features: ['Kursbewegungen', 'Wirtschaftskalender', 'Analyse', 'Signale'],
        benefits: ['Schnelle Reaktion', 'Informiert', 'Bessere Trades'],
        useCases: ['Forex-Trader', 'Broker', 'Ausbilder'],
        timeframe: '3 Monate',
        metrics: ['Alarme', 'Genauigkeit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Welche Paare?', answer: 'Alle wichtigen Währungspaare.' }]
    },

    // ==================== ABENTEUERREISEN ====================

    'adventure-tour-booking': {
        title: 'Abenteuerreisen',
        description: 'Buchungssystem für Abenteuertouren.',
        shortDescription: 'Abenteuer buchen per WhatsApp',
        features: ['Tourarten', 'Schwierigkeitsgrade', 'Buchung', 'Ausrüstungsliste'],
        benefits: ['Einzigartige Erlebnisse', 'Sicherheit', 'Expertenguides'],
        useCases: ['Tourveranstalter', 'Reisebüros', 'Guides'],
        timeframe: '3 Monate',
        metrics: ['Buchungen', 'Zufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Erfahrung nötig?', answer: 'Für alle Level verfügbar.' }]
    },

    'hiking-tour-booking': {
        title: 'Wandertouren',
        description: 'Buchungssystem für Wanderungen.',
        shortDescription: 'Wanderung buchen per WhatsApp',
        features: ['Routenauswahl', 'Schwierigkeit', 'Gruppentour', 'Privattouren'],
        benefits: ['Naturerlebnis', 'Sichere Routen', 'Erfahrene Guides'],
        useCases: ['Wanderführer', 'Tourismusverbände', 'Hotels'],
        timeframe: '2 Monate',
        metrics: ['Touren', 'Teilnehmer'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Ausrüstung?', answer: 'Liste wird mitgesendet.' }]
    },

    // ==================== PILGERREISEN ====================

    'pilgrimage-booking': {
        title: 'Pilgerreisen',
        description: 'Buchungssystem für religiöse Reisen.',
        shortDescription: 'Pilgerreise buchen per WhatsApp',
        features: ['Reiseziele', 'Gruppenbuchung', 'Visa-Service', 'Reiseführer'],
        benefits: ['Spirituelles Erlebnis', 'Volle Betreuung', 'Gemeinschaft'],
        useCases: ['Reiseveranstalter', 'Gemeinden', 'Kirchen'],
        timeframe: '3 Monate',
        metrics: ['Buchungen', 'Zufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Visa?', answer: 'Volle Unterstützung inklusive.' }]
    },

    // ==================== AUTOHANDEL ====================

    'car-sales-lead': {
        title: 'Autoverkaufs-Leads',
        description: 'System für Autoverkaufsanfragen.',
        shortDescription: 'Auto kaufen per WhatsApp',
        features: ['Fahrzeugsuche', 'Probefahrt', 'Finanzierung', 'Inzahlungnahme'],
        benefits: ['Bequemer Autokauf', 'Alle Infos', 'Persönliche Beratung'],
        useCases: ['Autohäuser', 'Händler', 'Vermittler'],
        timeframe: '3 Monate',
        metrics: ['Leads', 'Verkäufe'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Finanzierung?', answer: 'Ja, über Partner möglich.' }]
    },

    'car-service-reminder': {
        title: 'Werkstatt-Erinnerungen',
        description: 'System für Kfz-Serviceerinnerungen.',
        shortDescription: 'Werkstatt-Erinnerungen per WhatsApp',
        features: ['Wartungserinnerungen', 'TÜV/HU', 'Verschleißteile', 'Buchung'],
        benefits: ['Auto in Form', 'Keine Termine verpassen', 'Einfache Buchung'],
        useCases: ['Werkstätten', 'Autohäuser', 'Flottenmanagement'],
        timeframe: '2 Monate',
        metrics: ['Erinnerungen', 'Buchungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Automatisch?', answer: 'Ja, basierend auf Laufleistung/Zeit.' }]
    },

    // ==================== AUTOWÄSCHE ====================

    'carwash-booking': {
        title: 'Autowäsche',
        description: 'Buchungssystem für Autowäsche.',
        shortDescription: 'Autowäsche buchen per WhatsApp',
        features: ['Servicewahl', 'Terminbuchung', 'Mobile Wäsche', 'Abo'],
        benefits: ['Sauberes Auto', 'Bequem', 'Flexible Termine'],
        useCases: ['Waschanlagen', 'Mobile Dienste', 'Tankstellen'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Stammkunden'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Mobil?', answer: 'Ja, wir kommen zu Ihnen.' }]
    },

    // ==================== TATTOO ====================

    'tattoo-booking': {
        title: 'Tattoo-Termine',
        description: 'Buchungssystem für Tattoo-Studios.',
        shortDescription: 'Tattoo buchen per WhatsApp',
        features: ['Künstlerwahl', 'Design-Upload', 'Beratung', 'Terminbuchung'],
        benefits: ['Traumtattoo', 'Professionelle Beratung', 'Einfache Buchung'],
        useCases: ['Tattoo-Studios', 'Künstler', 'Piercer'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Preisschätzung?', answer: 'Ja, nach Design-Besprechung.' }]
    },

    // ==================== LAST-MILE DELIVERY ====================

    'lastmile-delivery': {
        title: 'Letzte-Meile-Zustellung',
        description: 'System für urbane Lieferungen.',
        shortDescription: 'Stadtlieferung per WhatsApp',
        features: ['Sofortbuchung', 'Tracking', 'Zustellnachweis', 'Benachrichtigungen'],
        benefits: ['Schnell', 'Zuverlässig', 'Transparent'],
        useCases: ['E-Commerce', 'Lokale Geschäfte', 'Restaurants'],
        timeframe: '3 Monate',
        metrics: ['Zustellungen', 'Zeit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Wie schnell?', answer: 'Innerhalb von Stunden.' }]
    },

    // ==================== LAGERLOGISTIK ====================

    'warehouse-management': {
        title: 'Lagerverwaltung',
        description: 'System für Lagerabfragen.',
        shortDescription: 'Lager verwalten per WhatsApp',
        features: ['Bestandsabfrage', 'Eingang/Ausgang', 'Alarme', 'Berichte'],
        benefits: ['Überblick', 'Schnelle Reaktion', 'Weniger Fehler'],
        useCases: ['Lagerbetreiber', 'E-Commerce', 'Produktion'],
        timeframe: '3 Monate',
        metrics: ['Transaktionen', 'Genauigkeit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Integration?', answer: 'Mit gängigen ERP-Systemen.' }]
    },

    // ==================== KONZERTE & LIVE ====================

    'concert-ticket-sales': {
        title: 'Konzerttickets',
        description: 'Verkaufssystem für Eventtickets.',
        shortDescription: 'Tickets kaufen per WhatsApp',
        features: ['Veranstaltungen', 'Platzwahl', 'Kauf', 'E-Ticket'],
        benefits: ['Einfacher Kauf', 'Alle Events', 'Sofort-Tickets'],
        useCases: ['Veranstalter', 'Venues', 'Ticketanbieter'],
        timeframe: '3 Monate',
        metrics: ['Verkäufe', 'Konversion'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'E-Ticket?', answer: 'Ja, direkt per WhatsApp.' }]
    },

    'concert-fan-updates': {
        title: 'Fan-Updates',
        description: 'Kommunikationssystem für Künstler.',
        shortDescription: 'Künstler-News per WhatsApp',
        features: ['Tourtermine', 'Exklusive Inhalte', 'Vorverkauf', 'Meet & Greet'],
        benefits: ['Erste Infos', 'Exklusivzugang', 'Fangemeinschaft'],
        useCases: ['Künstler', 'Labels', 'Management'],
        timeframe: '2 Monate',
        metrics: ['Abonnenten', 'Engagement'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Exklusiv?', answer: 'Ja, nur für Abonnenten.' }]
    },

    // ==================== SCHWIMMEN ====================

    'swimming-class': {
        title: 'Schwimmkurse',
        description: 'Buchungssystem für Schwimmkurse.',
        shortDescription: 'Schwimmen lernen per WhatsApp',
        features: ['Kurswahl', 'Levelzuweisung', 'Buchung', 'Fortschritt'],
        benefits: ['Schwimmen lernen', 'Alle Level', 'Qualifizierte Lehrer'],
        useCases: ['Schwimmschulen', 'Bäder', 'Sportvereine'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Absolventen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Alter?', answer: 'Ab 3 Jahren bis Erwachsene.' }]
    },

    'pool-membership': {
        title: 'Schwimmbad-Mitgliedschaft',
        description: 'System für Schwimmbad-Mitgliedschaften.',
        shortDescription: 'Schwimmbad-Mitglied per WhatsApp',
        features: ['Mitgliedschaftarten', 'Anmeldung', 'Verlängerung', 'Digitaler Ausweis'],
        benefits: ['Regelmäßig schwimmen', 'Ersparnis', 'Bequem'],
        useCases: ['Schwimmbäder', 'Fitnessstudios', 'Sportvereine'],
        timeframe: '2 Monate',
        metrics: ['Mitglieder', 'Bindung'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kündigung?', answer: 'Monatlich möglich.' }]
    },

    // ==================== REGIERUNG ====================

    'gov-citizen-service': {
        title: 'Bürgerdienste',
        description: 'System für staatliche Dienstleistungen.',
        shortDescription: 'Behördenkontakt per WhatsApp',
        features: ['Informationen', 'Terminbuchung', 'Dokumentenstatus', 'FAQs'],
        benefits: ['Schneller Service', 'Weniger Wartezeit', 'Bequem'],
        useCases: ['Kommunen', 'Ämter', 'Behörden'],
        timeframe: '3 Monate',
        metrics: ['Anfragen', 'Zufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Sicher?', answer: 'Ja, Ende-zu-Ende verschlüsselt.' }]
    },

    'gov-document-status': {
        title: 'Dokumentenstatus',
        description: 'System für Dokumentenabfragen.',
        shortDescription: 'Dokumentenstatus per WhatsApp',
        features: ['Statusabfrage', 'Erinnerungen', 'Abholarme', 'Verlängerung'],
        benefits: ['Immer informiert', 'Keine Überraschungen', 'Zeitersparnis'],
        useCases: ['Bürgerbüros', 'Konsulate', 'Ämter'],
        timeframe: '2 Monate',
        metrics: ['Abfragen', 'Zufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Welche Dokumente?', answer: 'Ausweis, Reisepass, Führerschein, usw.' }]
    },

    // ==================== MEDIEN ====================

    'media-news-subscription': {
        title: 'Nachrichten-Abo',
        description: 'System für Nachrichtenabonnement.',
        shortDescription: 'News per WhatsApp',
        features: ['Themenauswahl', 'Breaking News', 'Zusammenfassungen', 'Volltext'],
        benefits: ['Informiert bleiben', 'Personalisiert', 'Schnelle Updates'],
        useCases: ['Verlage', 'Nachrichtenagenturen', 'Blogs'],
        timeframe: '2 Monate',
        metrics: ['Abonnenten', 'Öffnungsrate'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Häufigkeit?', answer: 'Täglich oder bei Breaking News.' }]
    },

    'media-podcast-updates': {
        title: 'Podcast-Updates',
        description: 'System für Podcast-Benachrichtigungen.',
        shortDescription: 'Podcast-News per WhatsApp',
        features: ['Neue Episoden', 'Vorschau', 'Direktlinks', 'Exklusivinhalte'],
        benefits: ['Keine Episode verpassen', 'Exklusiv', 'Direkte Links'],
        useCases: ['Podcaster', 'Netzwerke', 'Publisher'],
        timeframe: '1 Monat',
        metrics: ['Abonnenten', 'Klicks'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Plattformen?', answer: 'Links zu allen gängigen Plattformen.' }]
    },

    // ==================== PHARMA ====================

    'pharmacy-refill': {
        title: 'Rezeptnachbestellung',
        description: 'System für Medikamentennachbestellungen.',
        shortDescription: 'Rezept nachbestellen per WhatsApp',
        features: ['Medikamentenliste', 'Nachbestellung', 'Verfügbarkeit', 'Abholung'],
        benefits: ['Nie ohne Medikamente', 'Einfach', 'Schnell'],
        useCases: ['Apotheken', 'Versandapotheken', 'Pflegedienste'],
        timeframe: '2 Monate',
        metrics: ['Nachbestellungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Rezeptpflichtig?', answer: 'Rezept muss vorliegen.' }]
    },

    'pharmacy-medication-reminder': {
        title: 'Medikamentenerinnerung',
        description: 'System für Einnahmeerinnerungen.',
        shortDescription: 'Medikamentenerinnerung per WhatsApp',
        features: ['Einnahmezeiten', 'Erinnerungen', 'Nachbestellung', 'Wechselwirkungen'],
        benefits: ['Regelmäßige Einnahme', 'Gesundheit', 'Keine vergessenen Dosen'],
        useCases: ['Apotheken', 'Pflegedienste', 'Patienten'],
        timeframe: '2 Monate',
        metrics: ['Erinnerungen', 'Compliance'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Mehrere Medikamente?', answer: 'Ja, unbegrenzt.' }]
    },

    // ==================== ENERGIE ====================

    'energy-bill-inquiry': {
        title: 'Stromrechnung',
        description: 'System für Stromrechnungsabfragen.',
        shortDescription: 'Stromrechnung per WhatsApp',
        features: ['Rechnungsübersicht', 'Verbrauch', 'Zahlungslink', 'Tarifvergleich'],
        benefits: ['Übersicht', 'Einfache Zahlung', 'Sparoptionen'],
        useCases: ['Energieversorger', 'Stadtwerke', 'Vergleichsportale'],
        timeframe: '2 Monate',
        metrics: ['Anfragen', 'Self-Service'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Online-Zahlung?', answer: 'Ja, direkter Zahlungslink.' }]
    },

    'energy-outage-alerts': {
        title: 'Stromausfall-Alarme',
        description: 'System für Störungsmeldungen.',
        shortDescription: 'Stromausfälle per WhatsApp',
        features: ['Störungsmeldungen', 'Status-Updates', 'Behebungszeit', 'Betroffene Gebiete'],
        benefits: ['Informiert bleiben', 'Planen', 'Weniger Frust'],
        useCases: ['Energieversorger', 'Stadtwerke', 'Netzbetreiber'],
        timeframe: '2 Monate',
        metrics: ['Meldungen', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Automatisch?', answer: 'Ja, bei Störungen in Ihrem Gebiet.' }]
    },

    'smart-home-energy': {
        title: 'Smart-Home-Energie',
        description: 'System für Smart-Home-Steuerung.',
        shortDescription: 'Smart-Home per WhatsApp',
        features: ['Gerätestatus', 'Ein/Aus', 'Verbrauch', 'Szenen'],
        benefits: ['Energiesparen', 'Kontrolle', 'Bequem'],
        useCases: ['Smart-Home-Anbieter', 'Energieversorger', 'Nutzer'],
        timeframe: '3 Monate',
        metrics: ['Nutzer', 'Energieeinsparung'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Welche Geräte?', answer: 'Alle gängigen Smart-Home-Geräte.' }]
    },

    // ==================== VERSICHERUNG ERWEITERT ====================

    'insurance-claims-status': {
        title: 'Schadenstatus',
        description: 'System für Schadenstatusabfragen.',
        shortDescription: 'Schaden verfolgen per WhatsApp',
        features: ['Statusabfrage', 'Dokumenten-Upload', 'Updates', 'Chat'],
        benefits: ['Immer informiert', 'Einfache Kommunikation', 'Schnellere Bearbeitung'],
        useCases: ['Versicherungen', 'Makler', 'Kunden'],
        timeframe: '2 Monate',
        metrics: ['Abfragen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Dokumente?', answer: 'Ja, Fotos und PDFs hochladen.' }]
    },

    'insurance-policy-inquiry': {
        title: 'Policen-Anfrage',
        description: 'System für Policenauskünfte.',
        shortDescription: 'Police abfragen per WhatsApp',
        features: ['Deckung', 'Prämie', 'Ablaufdatum', 'Änderungen'],
        benefits: ['Überblick', 'Schnelle Antworten', 'Self-Service'],
        useCases: ['Versicherungen', 'Makler', 'Vergleichsportale'],
        timeframe: '2 Monate',
        metrics: ['Anfragen', 'Kundenzufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Änderungen?', answer: 'Ja, direkt per WhatsApp möglich.' }]
    },

    'insurance-quote-request': {
        title: 'Versicherungsangebot',
        description: 'System für Versicherungsangebote.',
        shortDescription: 'Angebot anfordern per WhatsApp',
        features: ['Fragebogen', 'Sofortangebot', 'Vergleich', 'Abschluss'],
        benefits: ['Schnelles Angebot', 'Vergleich', 'Einfacher Abschluss'],
        useCases: ['Versicherungen', 'Makler', 'Vergleichsportale'],
        timeframe: '3 Monate',
        metrics: ['Angebote', 'Abschlüsse'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Verbindlich?', answer: 'Nein, unverbindliches Angebot.' }]
    },

    // ==================== WEIN & SPIRITUOSEN ====================

    'wine-subscription': {
        title: 'Wein-Abo',
        description: 'Abonnement für Weinlieferung.',
        shortDescription: 'Wein-Abo per WhatsApp',
        features: ['Geschmacksprofil', 'Monatliche Lieferung', 'Bewertungen', 'Verwaltung'],
        benefits: ['Neue Weine entdecken', 'Ersparnis', 'Bequem'],
        useCases: ['Weinhändler', 'Winzer', 'Clubs'],
        timeframe: '2 Monate',
        metrics: ['Abonnenten', 'Bindung'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Pausieren?', answer: 'Ja, jederzeit möglich.' }]
    },

    'liquor-store-order': {
        title: 'Getränkebestellung',
        description: 'Bestellsystem für Getränke.',
        shortDescription: 'Getränke bestellen per WhatsApp',
        features: ['Sortiment', 'Bestellung', 'Lieferung', 'Party-Pakete'],
        benefits: ['Große Auswahl', 'Schnelle Lieferung', 'Bequem'],
        useCases: ['Getränkemärkte', 'Lieferdienste', 'Veranstalter'],
        timeframe: '2 Monate',
        metrics: ['Bestellungen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Altersprüfung?', answer: 'Ja, bei Lieferung.' }]
    },

    // ==================== AUTOMATEN ====================

    'vending-machine-service': {
        title: 'Automaten-Service',
        description: 'System für Automatenbenachrichtigungen.',
        shortDescription: 'Automaten-Alerts per WhatsApp',
        features: ['Füllstandsalarme', 'Störungsmeldungen', 'Umsatzberichte', 'Wartungsplan'],
        benefits: ['Weniger Ausfälle', 'Optimale Befüllung', 'Überblick'],
        useCases: ['Automatenaufsteller', 'Facility Manager', 'Vollservice'],
        timeframe: '2 Monate',
        metrics: ['Verfügbarkeit', 'Umsatz'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Echtzeit?', answer: 'Ja, sofortige Benachrichtigung.' }]
    },

    // ==================== SCHNEIDEREI ====================

    'tailor-service': {
        title: 'Schneider-Service',
        description: 'Buchungssystem für Schneiderei.',
        shortDescription: 'Änderungen per WhatsApp',
        features: ['Servicewahl', 'Fotos', 'Preisschätzung', 'Terminbuchung'],
        benefits: ['Perfekte Passform', 'Professionell', 'Bequem'],
        useCases: ['Schneider', 'Reinigungen', 'Modehäuser'],
        timeframe: '2 Monate',
        metrics: ['Aufträge', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Abholung?', answer: 'Ja, Abhol- und Lieferservice.' }]
    },

    // ==================== SCHUHREPARATUR ====================

    'shoe-repair-service': {
        title: 'Schuhreparatur',
        description: 'System für Schuhreparaturen.',
        shortDescription: 'Schuhe reparieren per WhatsApp',
        features: ['Schadensbeschreibung', 'Fotos', 'Preisschätzung', 'Fertigmeldung'],
        benefits: ['Lieblingsschuhe retten', 'Professionell', 'Günstig'],
        useCases: ['Schuhmacher', 'Reinigungen', 'Schuhgeschäfte'],
        timeframe: '1 Monat',
        metrics: ['Reparaturen', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Dauer?', answer: '1-7 Tage je nach Arbeit.' }]
    },

    // ==================== REGIERUNGSWARNUNGEN ====================

    'gov-emergency-alerts': {
        title: 'Regierungswarnungen',
        description: 'System für öffentliche Warnungen.',
        shortDescription: 'Öffentliche Warnungen per WhatsApp',
        features: ['Katastrophenwarnungen', 'Gesundheitswarnungen', 'Verkehr', 'Updates'],
        benefits: ['Lebensrettend', 'Schnell', 'Zuverlässig'],
        useCases: ['Behörden', 'Katastrophenschutz', 'Gemeinden'],
        timeframe: '3 Monate',
        metrics: ['Reichweite', 'Reaktionszeit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Pflichtwarnung?', answer: 'Nach Anmeldung, ja.' }]
    },

    // ==================== LOTTERIE ====================

    'lottery-results': {
        title: 'Lotterieresultate',
        description: 'System für Lotterieergebnisse.',
        shortDescription: 'Lotto-Ergebnisse per WhatsApp',
        features: ['Ziehungsergebnisse', 'Gewinnebenachrichtigung', 'Jackpot-Alarme', 'Spieltipps'],
        benefits: ['Sofort erfahren', 'Nie verpassen', 'Bequem'],
        useCases: ['Lottogesellschaften', 'Vermittler', 'Spieler'],
        timeframe: '2 Monate',
        metrics: ['Abonnenten', 'Engagement'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Alle Lotterien?', answer: 'Abhängig vom Anbieter.' }]
    },

    // ==================== RECYCLING ====================

    'recycling-pickup': {
        title: 'Recycling-Abholung',
        description: 'Buchungssystem für Recycling.',
        shortDescription: 'Recycling per WhatsApp',
        features: ['Abholtermin', 'Materialarten', 'Gutschrift', 'Berichte'],
        benefits: ['Umweltschutz', 'Einfach', 'Belohnung'],
        useCases: ['Recyclingfirmen', 'Kommunen', 'Unternehmen'],
        timeframe: '2 Monate',
        metrics: ['Abholungen', 'Material'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Vergütung?', answer: 'Ja, für bestimmte Materialien.' }]
    },

    // ==================== E-RECYCLING ====================

    'electronics-recycling': {
        title: 'Elektroschrott-Entsorgung',
        description: 'System für Elektronik-Recycling.',
        shortDescription: 'Elektroschrott per WhatsApp',
        features: ['Gerätewahl', 'Abholtermin', 'Datenlöschung', 'Zertifikat'],
        benefits: ['Umweltgerecht', 'Datensicher', 'Bequem'],
        useCases: ['Recyclingfirmen', 'IT-Dienstleister', 'Unternehmen'],
        timeframe: '2 Monate',
        metrics: ['Geräte', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Datenschutz?', answer: 'Zertifizierte Datenlöschung.' }]
    },

    // ==================== GAS-LIEFERUNG ====================

    'gas-delivery': {
        title: 'Gasflaschen-Lieferung',
        description: 'System für Gasflaschenlieferung.',
        shortDescription: 'Gas bestellen per WhatsApp',
        features: ['Bestellung', 'Lieferung', 'Leergut', 'Abo'],
        benefits: ['Nie ohne Gas', 'Schnelle Lieferung', 'Bequem'],
        useCases: ['Gashändler', 'Restaurants', 'Haushalte'],
        timeframe: '1 Monat',
        metrics: ['Lieferungen', 'Stammkunden'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Leergut?', answer: 'Ja, Austausch inklusive.' }]
    },

    // ==================== KRAFTSTOFF-LIEFERUNG ====================

    'fuel-delivery': {
        title: 'Kraftstoff-Lieferung',
        description: 'System für mobile Betankung.',
        shortDescription: 'Kraftstoff per WhatsApp',
        features: ['Standort', 'Kraftstoffart', 'Menge', 'Lieferung'],
        benefits: ['Nie zur Tankstelle', 'Zeitsparend', 'Bequem'],
        useCases: ['Lieferdienste', 'Flotten', 'Unternehmen'],
        timeframe: '3 Monate',
        metrics: ['Lieferungen', 'Liter'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Sicher?', answer: 'Ja, alle Sicherheitsstandards.' }]
    },

    // ==================== ARCHITEKTUR ====================

    'architecture-consultation': {
        title: 'Architekturberatung',
        description: 'Buchungssystem für Architekturberatung.',
        shortDescription: 'Architekt buchen per WhatsApp',
        features: ['Erstberatung', 'Projektbesprechung', 'Entwürfe', 'Updates'],
        benefits: ['Professionelle Planung', 'Kreativität', 'Transparenz'],
        useCases: ['Architekten', 'Bauherren', 'Innenarchitekten'],
        timeframe: '3 Monate',
        metrics: ['Beratungen', 'Projekte'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Erstberatung?', answer: 'Oft kostenlos oder günstig.' }]
    },

    // ==================== MUSIK ====================

    'music-lessons-booking': {
        title: 'Musikunterricht',
        description: 'Buchungssystem für Musikunterricht.',
        shortDescription: 'Musik lernen per WhatsApp',
        features: ['Instrumentwahl', 'Lehrerwahl', 'Terminbuchung', 'Fortschritt'],
        benefits: ['Instrument lernen', 'Flexible Termine', 'Qualifizierte Lehrer'],
        useCases: ['Musikschulen', 'Lehrer', 'Studios'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Fortschritt'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Instrumente?', answer: 'Alle gängigen Instrumente.' }]
    },

    'music-instrument-rental': {
        title: 'Instrumentenverleih',
        description: 'System für Instrumentenvermietung.',
        shortDescription: 'Instrument mieten per WhatsApp',
        features: ['Instrumentkatalog', 'Buchung', 'Lieferung', 'Kauf-Option'],
        benefits: ['Erst testen', 'Flexibel', 'Qualitätsinstrumente'],
        useCases: ['Musikgeschäfte', 'Schulen', 'Orchester'],
        timeframe: '2 Monate',
        metrics: ['Vermietungen', 'Konversion zu Kauf'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kaufoption?', answer: 'Ja, Mietkosten werden angerechnet.' }]
    },

    // ==================== SPRACHLERNEN ====================

    'language-lesson-booking': {
        title: 'Sprachunterricht',
        description: 'Buchungssystem für Sprachkurse.',
        shortDescription: 'Sprache lernen per WhatsApp',
        features: ['Sprachwahl', 'Lehrerwahl', 'Terminbuchung', 'Leveltest'],
        benefits: ['Neue Sprache lernen', 'Muttersprachler', 'Flexibel'],
        useCases: ['Sprachschulen', 'Lehrer', 'Plattformen'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Levelfortschritt'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Sprachen?', answer: 'Deutsch, Englisch, Spanisch, und mehr.' }]
    },

    // ==================== FIRMENTRAINING ====================

    'corporate-training': {
        title: 'Firmentrainings',
        description: 'Buchungssystem für Unternehmensschulungen.',
        shortDescription: 'Training buchen per WhatsApp',
        features: ['Themenkatalog', 'Termine', 'Teilnehmerverwaltung', 'Zertifikate'],
        benefits: ['Mitarbeiterentwicklung', 'Maßgeschneidert', 'Einfache Verwaltung'],
        useCases: ['Trainingsanbieter', 'HR-Abteilungen', 'Berater'],
        timeframe: '3 Monate',
        metrics: ['Trainings', 'Teilnehmer'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Vor Ort oder Online?', answer: 'Beides möglich.' }]
    },

    // ==================== FASHION E-COMMERCE ====================

    'fashion-personal-styling': {
        title: 'Persönlicher Styling-Service',
        description: 'System für Online-Stilberatung.',
        shortDescription: 'Stilberatung per WhatsApp',
        features: ['Stilprofil', 'Outfitvorschläge', 'Shopping-Links', 'Beratung'],
        benefits: ['Besserer Stil', 'Zeitersparnis', 'Passende Outfits'],
        useCases: ['Stylisten', 'Modehäuser', 'E-Commerce'],
        timeframe: '2 Monate',
        metrics: ['Kunden', 'Käufe'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Budget?', answer: 'Wir berücksichtigen Ihr Budget.' }]
    },

    'fashion-size-recommendation': {
        title: 'Größenberatung',
        description: 'System für Größenempfehlungen.',
        shortDescription: 'Größenhilfe per WhatsApp',
        features: ['Maße eingeben', 'Markenvergleich', 'Empfehlung', 'Feedback'],
        benefits: ['Weniger Retouren', 'Passende Größe', 'Kundenzufriedenheit'],
        useCases: ['Online-Shops', 'Modemarken', 'Boutiquen'],
        timeframe: '2 Monate',
        metrics: ['Empfehlungen', 'Retourenquote'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wie messen?', answer: 'Einfache Anleitung wird gesendet.' }]
    },

    // ==================== GROCERY E-COMMERCE ====================

    'grocery-weekly-order': {
        title: 'Wöchentliche Lebensmittel',
        description: 'System für regelmäßige Bestellungen.',
        shortDescription: 'Wocheneinkauf per WhatsApp',
        features: ['Einkaufsliste', 'Stammbestellung', 'Lieferslot', 'Sonderangebote'],
        benefits: ['Nie vergessen', 'Zeitersparnis', 'Frische Ware'],
        useCases: ['Supermärkte', 'Lieferdienste', 'Bio-Läden'],
        timeframe: '2 Monate',
        metrics: ['Bestellungen', 'Stammkunden'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Lieferzeit?', answer: 'Gleicher oder nächster Tag.' }]
    },

    'grocery-fresh-deals': {
        title: 'Frische Angebote',
        description: 'System für tägliche Angebote.',
        shortDescription: 'Tagesangebote per WhatsApp',
        features: ['Tägliche Deals', 'Reduzierte Ware', 'Sofortkauf', 'Benachrichtigungen'],
        benefits: ['Sparen', 'Weniger Verschwendung', 'Frische Produkte'],
        useCases: ['Supermärkte', 'Bäckereien', 'Metzger'],
        timeframe: '1 Monat',
        metrics: ['Verkäufe', 'Verschwendungsreduktion'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wann?', answer: 'Jeden Tag um 9 Uhr.' }]
    },

    // ==================== COMMERCIAL REAL ESTATE ====================

    'commercial-property-inquiry': {
        title: 'Gewerbeimmobilien-Anfrage',
        description: 'System für Gewerbeflächen-Anfragen.',
        shortDescription: 'Gewerbe-Immobilien per WhatsApp',
        features: ['Anforderungen', 'Objektvorschläge', 'Besichtigung', 'Verhandlung'],
        benefits: ['Passende Fläche', 'Professionelle Beratung', 'Zeitersparnis'],
        useCases: ['Gewerbe-Makler', 'Vermieter', 'Unternehmen'],
        timeframe: '3 Monate',
        metrics: ['Anfragen', 'Abschlüsse'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Provision?', answer: 'Abhängig von Objekt und Region.' }]
    },

    'commercial-lease-management': {
        title: 'Gewerbemiet-Verwaltung',
        description: 'System für Mietverwaltung.',
        shortDescription: 'Miete verwalten per WhatsApp',
        features: ['Mietzahlungen', 'Anfragen', 'Wartungsbedarf', 'Berichte'],
        benefits: ['Transparent', 'Schnelle Kommunikation', 'Dokumentation'],
        useCases: ['Hausverwaltungen', 'Vermieter', 'Mieter'],
        timeframe: '2 Monate',
        metrics: ['Anfragen', 'Zufriedenheit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Automatische Erinnerung?', answer: 'Ja, vor Fälligkeit.' }]
    },

    // ==================== FOOD TRUCKS ====================

    'foodtruck-location-alert': {
        title: 'Food-Truck-Standort',
        description: 'System für Standortbenachrichtigungen.',
        shortDescription: 'Food-Truck finden per WhatsApp',
        features: ['Tagesstandort', 'Menü', 'Wartezeit', 'Vorbestellung'],
        benefits: ['Lieblingstruck finden', 'Vorbestellen', 'Weniger warten'],
        useCases: ['Food-Trucks', 'Veranstalter', 'Fans'],
        timeframe: '1 Monat',
        metrics: ['Abonnenten', 'Vorbestellungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Reservierung?', answer: 'Ja, per Vorbestellung.' }]
    },

    'foodtruck-catering': {
        title: 'Food-Truck-Catering',
        description: 'System für Food-Truck-Buchungen.',
        shortDescription: 'Food-Truck buchen per WhatsApp',
        features: ['Eventdetails', 'Menüauswahl', 'Preisangebot', 'Buchung'],
        benefits: ['Einzigartiges Catering', 'Flexibel', 'Beliebt'],
        useCases: ['Food-Trucks', 'Eventplaner', 'Unternehmen'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Umsatz'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Mindestpersonen?', answer: 'Ab 50 Personen.' }]
    },

    // ==================== SPECIAL NEEDS ====================

    'special-needs-services': {
        title: 'Förderdienste',
        description: 'System für Angebote für Menschen mit Behinderung.',
        shortDescription: 'Förderdienste per WhatsApp',
        features: ['Dienstleistungen', 'Terminbuchung', 'Barrierefreiheit', 'Support'],
        benefits: ['Zugang zu Diensten', 'Barrierefreie Kommunikation', 'Unterstützung'],
        useCases: ['Sozialträger', 'Behörden', 'Therapeuten'],
        timeframe: '3 Monate',
        metrics: ['Anfragen', 'Zufriedenheit'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Barrierefrei?', answer: 'Ja, vollständig.' }]
    },

    // ==================== ORGAN DONATION ====================

    'organ-donation-awareness': {
        title: 'Organspende-Aufklärung',
        description: 'System für Organspende-Information.',
        shortDescription: 'Organspende-Info per WhatsApp',
        features: ['Informationen', 'Registrierung', 'Ausweis', 'FAQs'],
        benefits: ['Leben retten', 'Informierte Entscheidung', 'Einfache Registrierung'],
        useCases: ['Gesundheitsämter', 'NGOs', 'Krankenhäuser'],
        timeframe: '2 Monate',
        metrics: ['Registrierungen', 'Reichweite'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Verbindlich?', answer: 'Registrierung ist freiwillig.' }]
    },

    // ==================== HEATING OIL ====================

    'heating-oil-delivery': {
        title: 'Heizöl-Lieferung',
        description: 'Bestellsystem für Heizöl.',
        shortDescription: 'Heizöl bestellen per WhatsApp',
        features: ['Preisanfrage', 'Bestellung', 'Liefertermin', 'Tanküberwachung'],
        benefits: ['Beste Preise', 'Einfach', 'Nie kalt'],
        useCases: ['Heizölhändler', 'Haushalte', 'Hausverwaltungen'],
        timeframe: '2 Monate',
        metrics: ['Bestellungen', 'Liter'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Mindestmenge?', answer: 'Ab 500 Liter.' }]
    },

    // ==================== AC SERVICE ====================

    'ac-service-booking': {
        title: 'Klimaanlagen-Service',
        description: 'Buchungssystem für Klimaanlagen.',
        shortDescription: 'Klimaservice per WhatsApp',
        features: ['Wartung', 'Reparatur', 'Installation', 'Terminbuchung'],
        benefits: ['Kühler Sommer', 'Effizienz', 'Professionell'],
        useCases: ['HVAC-Firmen', 'Techniker', 'Haushalte'],
        timeframe: '2 Monate',
        metrics: ['Servicetermine', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Wartungsintervall?', answer: 'Jährlich empfohlen.' }]
    },

    // ==================== CHIMNEY SWEEP ====================

    'chimney-sweep-booking': {
        title: 'Schornsteinfeger',
        description: 'Buchungssystem für Schornsteinfeger.',
        shortDescription: 'Schornsteinfeger per WhatsApp',
        features: ['Terminbuchung', 'Feuerstättenschau', 'Reinigung', 'Messprotokoll'],
        benefits: ['Gesetzeskonform', 'Sicherheit', 'Einfache Buchung'],
        useCases: ['Schornsteinfeger', 'Hausverwaltungen', 'Hausbesitzer'],
        timeframe: '1 Monat',
        metrics: ['Termine', 'Compliance'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Pflicht?', answer: 'Ja, gesetzlich vorgeschrieben.' }]
    },

    // ==================== NOTARY ====================

    'notary-appointment': {
        title: 'Notartermine',
        description: 'Buchungssystem für Notare.',
        shortDescription: 'Notar buchen per WhatsApp',
        features: ['Terminbuchung', 'Dokumentenliste', 'Vorbereitung', 'Kosten'],
        benefits: ['Einfache Buchung', 'Vorbereitet', 'Transparente Kosten'],
        useCases: ['Notare', 'Rechtsanwälte', 'Immobilienmakler'],
        timeframe: '2 Monate',
        metrics: ['Termine', 'Zufriedenheit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Dokumente?', answer: 'Liste wird vor Termin gesendet.' }]
    },

    // ==================== TAX FILING ====================

    'tax-document-collection': {
        title: 'Steuerunterlagen',
        description: 'System für Steuerunterlagesammlung.',
        shortDescription: 'Steuerunterlagen per WhatsApp',
        features: ['Dokumentenliste', 'Upload', 'Statusverfolgung', 'Erinnerungen'],
        benefits: ['Geordnete Unterlagen', 'Keine Frist verpasst', 'Schneller Abschluss'],
        useCases: ['Steuerberater', 'Buchhalter', 'Mandanten'],
        timeframe: '2 Monate',
        metrics: ['Mandanten', 'Vollständigkeit'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Unterlagen?', answer: 'Individuelle Checkliste.' }]
    },

    // ==================== INTERIOR DESIGN ====================

    'interior-design-consultation': {
        title: 'Inneneinrichtung',
        description: 'System für Inneneinrichtungsberatung.',
        shortDescription: 'Einrichtungsberatung per WhatsApp',
        features: ['Stilberatung', 'Raumfotos', 'Moodboard', 'Shopping-Liste'],
        benefits: ['Traumzuhause', 'Professionell', 'Zeitersparnis'],
        useCases: ['Innenarchitekten', 'Möbelhäuser', 'Stylisten'],
        timeframe: '3 Monate',
        metrics: ['Beratungen', 'Projekte'],
        deliveryTime: '4-6 Wochen',
        faqs: [{ question: 'Remote?', answer: 'Ja, komplett online möglich.' }]
    },

    // ==================== VET PET ====================

    'vet-emergency-line': {
        title: 'Tierarzt-Notfall',
        description: 'System für tierärztliche Notfälle.',
        shortDescription: 'Tier-Notfall per WhatsApp',
        features: ['Symptomabfrage', 'Sofortberatung', 'Nächste Klinik', 'Termin'],
        benefits: ['Schnelle Hilfe', 'Beruhigung', 'Lebensrettend'],
        useCases: ['Tierkliniken', 'Tierärzte', 'Tierbesitzer'],
        timeframe: '2 Monate',
        metrics: ['Notfälle', 'Reaktionszeit'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: '24/7?', answer: 'Ja, rund um die Uhr.' }]
    },

    'vet-vaccination-reminder': {
        title: 'Impferinnerung',
        description: 'System für Tier-Impferinnerungen.',
        shortDescription: 'Tierimpfung per WhatsApp',
        features: ['Impfkalender', 'Erinnerungen', 'Terminbuchung', 'Impfpass'],
        benefits: ['Gesunde Tiere', 'Keine Impfung verpasst', 'Einfach'],
        useCases: ['Tierärzte', 'Tierkliniken', 'Tierbesitzer'],
        timeframe: '1 Monat',
        metrics: ['Erinnerungen', 'Impfungen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Welche Tiere?', answer: 'Alle Haustiere.' }]
    },

    // ==================== SKI & SNOW ====================

    'ski-pass-booking': {
        title: 'Skipass-Buchung',
        description: 'System für Skipass-Verkauf.',
        shortDescription: 'Skipass per WhatsApp',
        features: ['Passarten', 'Buchung', 'Digitaler Pass', 'Schnee-Updates'],
        benefits: ['Kein Anstehen', 'Digitaler Zugang', 'Schnee-Info'],
        useCases: ['Skigebiete', 'Reisebüros', 'Hotels'],
        timeframe: '2 Monate',
        metrics: ['Verkäufe', 'Digitale Nutzung'],
        deliveryTime: '3-4 Wochen',
        faqs: [{ question: 'Gültigkeit?', answer: 'Je nach Passart.' }]
    },

    'ski-lesson-booking': {
        title: 'Skikurs-Buchung',
        description: 'Buchungssystem für Skikurse.',
        shortDescription: 'Skikurs per WhatsApp',
        features: ['Kurswahl', 'Level', 'Terminbuchung', 'Ausrüstungsverleih'],
        benefits: ['Skifahren lernen', 'Alle Level', 'Qualifizierte Lehrer'],
        useCases: ['Skischulen', 'Skigebiete', 'Hotels'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Absolventen'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Ab welchem Alter?', answer: 'Ab 3 Jahren.' }]
    },

    // ==================== GOLF ====================

    'golf-tee-time': {
        title: 'Abschlagzeit-Buchung',
        description: 'System für Golfplatz-Buchungen.',
        shortDescription: 'Abschlagzeit per WhatsApp',
        features: ['Verfügbarkeit', 'Buchung', 'Flightpartner', 'Golfcart'],
        benefits: ['Garantierte Zeit', 'Bequem', 'Flexibel'],
        useCases: ['Golfclubs', 'Resorts', 'Reisebüros'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Auslastung'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Gastspiel?', answer: 'Ja, willkommen.' }]
    },

    'golf-lesson-booking': {
        title: 'Golfunterricht',
        description: 'Buchungssystem für Golfstunden.',
        shortDescription: 'Golfstunde per WhatsApp',
        features: ['Prolwahl', 'Buchung', 'Level', 'Videoanalyse'],
        benefits: ['Besseres Spiel', 'Professionell', 'Flexibel'],
        useCases: ['Golfpros', 'Golfclubs', 'Golfschulen'],
        timeframe: '2 Monate',
        metrics: ['Stunden', 'Handicap-Verbesserung'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Anfänger?', answer: 'Ja, alle Level.' }]
    },

    // ==================== TENNIS ====================

    'tennis-court-booking': {
        title: 'Tennisplatz-Buchung',
        description: 'System für Tennisplatz-Reservierungen.',
        shortDescription: 'Tennisplatz per WhatsApp',
        features: ['Verfügbarkeit', 'Platzwahl', 'Buchung', 'Partnerbörse'],
        benefits: ['Garantierter Platz', 'Flexibel', 'Partner finden'],
        useCases: ['Tennisvereine', 'Sportcenter', 'Hotels'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Auslastung'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Halle?', answer: 'Ja, Innen und Außen.' }]
    },

    // ==================== BOWLING ====================

    'bowling-lane-booking': {
        title: 'Bowling-Bahn-Buchung',
        description: 'System für Bowling-Reservierungen.',
        shortDescription: 'Bowling per WhatsApp',
        features: ['Verfügbarkeit', 'Bahnreservierung', 'Schuhe', 'Party-Pakete'],
        benefits: ['Garantierte Bahn', 'Schnell', 'Party-Spaß'],
        useCases: ['Bowlingcenter', 'Freizeitcenter', 'Eventagenturen'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Partyumsatz'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Kindergeburtstag?', answer: 'Ja, spezielle Pakete.' }]
    },

    // ==================== ESCAPE ROOM ====================

    'escape-room-booking': {
        title: 'Escape-Room-Buchung',
        description: 'Buchungssystem für Escape-Rooms.',
        shortDescription: 'Escape-Room per WhatsApp',
        features: ['Raum wählen', 'Schwierigkeit', 'Buchung', 'Teamgröße'],
        benefits: ['Nervenkitzel', 'Team-Erlebnis', 'Flexibel'],
        useCases: ['Escape-Rooms', 'Freizeitcenter', 'Teambuilding'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Escape-Rate'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Gruppengröße?', answer: '2-8 Personen je nach Raum.' }]
    },

    // ==================== LASER TAG ====================

    'lasertag-booking': {
        title: 'Lasertag-Buchung',
        description: 'Buchungssystem für Lasertag.',
        shortDescription: 'Lasertag per WhatsApp',
        features: ['Session wählen', 'Gruppengröße', 'Buchung', 'Party-Pakete'],
        benefits: ['Action', 'Gruppenspaß', 'Party'],
        useCases: ['Lasertag-Arenen', 'Freizeitcenter', 'Eventagenturen'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Gruppenumsatz'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Mindestalter?', answer: 'Ab 8 Jahren.' }]
    },

    // ==================== FINAL 4 SOLUTIONS ====================

    'trampoline-park-booking': {
        title: 'Trampolinpark-Buchung',
        description: 'Buchungssystem für Trampolinparks.',
        shortDescription: 'Trampolinpark per WhatsApp',
        features: ['Zeitslot', 'Gruppenbuchung', 'Socken', 'Party-Pakete'],
        benefits: ['Garantierter Platz', 'Spaß für alle', 'Party-Service'],
        useCases: ['Trampolinparks', 'Freizeitcenter', 'Eventagenturen'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Gruppenumsatz'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Socken?', answer: 'Spezielle Anti-Rutsch-Socken inklusive.' }]
    },

    'go-kart-booking': {
        title: 'Go-Kart-Buchung',
        description: 'Buchungssystem für Kartbahnen.',
        shortDescription: 'Go-Kart per WhatsApp',
        features: ['Session wählen', 'Buchung', 'Bestzeiten', 'Events'],
        benefits: ['Garantierte Bahn', 'Rennspaß', 'Teamevents'],
        useCases: ['Kartbahnen', 'Freizeitcenter', 'Teambuilding'],
        timeframe: '2 Monate',
        metrics: ['Buchungen', 'Eventumsatz'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Mindestalter?', answer: 'Je nach Kart-Kategorie.' }]
    },

    'axe-throwing-booking': {
        title: 'Axtwerfen-Buchung',
        description: 'Buchungssystem für Axtwurf-Erlebnisse.',
        shortDescription: 'Axtwerfen per WhatsApp',
        features: ['Session', 'Gruppengröße', 'Buchung', 'Coaching'],
        benefits: ['Einzigartiges Erlebnis', 'Teambuilding', 'Spaß'],
        useCases: ['Axtwerfen-Arenen', 'Eventagenturen', 'Bars'],
        timeframe: '1 Monat',
        metrics: ['Buchungen', 'Gruppenumsatz'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Sicher?', answer: 'Ja, mit Einweisung und Aufsicht.' }]
    },

    'minigolf-booking': {
        title: 'Minigolf-Buchung',
        description: 'Buchungssystem für Minigolf.',
        shortDescription: 'Minigolf per WhatsApp',
        features: ['Verfügbarkeit', 'Buchung', 'Gruppentarife', 'Events'],
        benefits: ['Garantierter Platz', 'Familienspaß', 'Party-Service'],
        useCases: ['Minigolf-Anlagen', 'Freizeitparks', 'Resorts'],
        timeframe: '1 Monat',
        metrics: ['Buchungen', 'Familienumsatz'],
        deliveryTime: '2-3 Wochen',
        faqs: [{ question: 'Reservierung nötig?', answer: 'Empfohlen am Wochenende.' }]
    }
}

export default germanTranslations
