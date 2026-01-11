/**
 * 🌍 SOLUTIONS TRANSLATIONS - ITALIAN (it)
 * Complete Italian translations for all 300 solutions
 */

import type { SolutionTranslation } from '../types'

export const italianTranslations: Record<string, SolutionTranslation> = {
    // ==================== HEALTHCARE ====================

    'whatsapp-clinic-booking': {
        title: 'Sistema di Prenotazione Clinica tramite WhatsApp',
        description: 'Sistema automatizzato di pianificazione appuntamenti per cliniche mediche che consente ai pazienti di prenotare, riprogrammare e annullare direttamente tramite WhatsApp.',
        shortDescription: 'Prenota appuntamenti clinica tramite WhatsApp',
        features: [
            'Disponibilità in tempo reale',
            'Pianificazione multi-medico',
            'Promemoria automatici 24h prima',
            'Riprogrammazione e cancellazione',
            'Integrazione cartella paziente',
            'Gestione lista d\'attesa',
            'Supporto multilingue',
            'Sincronizzazione calendario'
        ],
        benefits: [
            'Riduzione no-show del 40%',
            'Risparmio 3 ore/giorno sulle chiamate',
            'Prenotazioni 24/7',
            'Soddisfazione pazienti +60%',
            'Carico amministrativo -50%',
            'Migliore utilizzo appuntamenti'
        ],
        useCases: [
            'Cliniche mediche',
            'Studi dentistici',
            'Consulenze specialistiche',
            'Centri diagnostici',
            'Centri vaccinali'
        ],
        timeframe: '6 mesi',
        metrics: ['No-show ridotti', 'Tempo risparmiato', 'Più prenotazioni'],
        deliveryTime: '2-3 settimane',
        faqs: [
            {
                question: 'Come funziona la prenotazione?',
                answer: 'I pazienti inviano un messaggio, il bot mostra gli slot disponibili, scelgono e ricevono conferma istantanea.'
            },
            {
                question: 'Può gestire più medici?',
                answer: 'Sì, supporta medici illimitati con orari e impostazioni individuali.'
            },
            {
                question: 'Invia promemoria?',
                answer: 'Sì, promemoria automatici 24h e 2h prima dell\'appuntamento.'
            },
            {
                question: 'È conforme HIPAA?',
                answer: 'Sì, tutti i dati sono crittografati secondo standard internazionali.'
            }
        ]
    },

    'whatsapp-pharmacy-assistant': {
        title: 'Assistente Farmacia Intelligente su WhatsApp',
        description: 'Assistente farmacia basato su AI che aiuta i clienti a verificare disponibilità farmaci e ordinare tramite WhatsApp.',
        shortDescription: 'Verifica disponibilità farmaci tramite WhatsApp',
        features: [
            'Disponibilità farmaci in tempo reale',
            'Upload ricette e validazione OCR',
            'Suggerimenti farmaci alternativi',
            'Confronto prezzi tra filiali',
            'Pianificazione e tracking consegna',
            'Promemoria dosaggio',
            'Avvisi interazioni farmaci',
            'Assistenza richieste assicurazione'
        ],
        benefits: [
            'Vendite +35%',
            'Servizio clienti 24/7 automatizzato',
            'Chiamate telefoniche -70%',
            'Elaborazione ordini più veloce',
            'Migliore aderenza terapia',
            'Migliore gestione inventario'
        ],
        useCases: [
            'Farmacie di quartiere',
            'Farmacie ospedaliere',
            'Farmacie online',
            'Catene di farmacie',
            'Parafarmacie'
        ],
        timeframe: '4 mesi',
        metrics: ['Vendite aumentate', 'Costi supporto ridotti', 'Fidelizzazione clienti'],
        deliveryTime: '3-4 settimane',
        faqs: [
            {
                question: 'Come caricano le ricette i clienti?',
                answer: 'Fotografano la ricetta e la inviano via WhatsApp. Il nostro sistema OCR AI la valida istantaneamente.'
            },
            {
                question: 'Può suggerire alternative?',
                answer: 'Sì, se un farmaco non è disponibile, suggerisce alternative con stessi principi attivi.'
            },
            {
                question: 'Gestisce le assicurazioni?',
                answer: 'Sì, verifica copertura e aiuta con documentazione digitale.'
            }
        ]
    },

    // ==================== E-COMMERCE ====================

    'whatsapp-product-catalog': {
        title: 'Catalogo Prodotti Interattivo su WhatsApp',
        description: 'Presenta i tuoi prodotti professionalmente su WhatsApp con immagini, prezzi e descrizioni, permettendo ai clienti di acquistare direttamente.',
        shortDescription: 'Catalogo prodotti professionale su WhatsApp',
        features: [
            'Presentazione prodotti con immagini',
            'Navigazione per categorie',
            'Ricerca prodotti',
            'Visualizzazione prezzi e sconti',
            'Aggiungi al carrello',
            'Ordine diretto',
            'Condivisione prodotti',
            'Avvisi disponibilità'
        ],
        benefits: [
            'Vendite +50%',
            'Esperienza shopping semplice',
            'Nessuna app separata necessaria',
            'Accesso base clienti WhatsApp',
            'Domande ripetute ridotte',
            'Ordini più veloci'
        ],
        useCases: [
            'Negozi e-commerce',
            'Boutique moda',
            'Elettronica',
            'Gioiellerie',
            'Negozi arredamento'
        ],
        timeframe: '3 mesi',
        metrics: ['Vendite aumentate', 'Tasso conversione', 'Soddisfazione clienti'],
        deliveryTime: '2-3 settimane',
        faqs: [
            {
                question: 'Come funziona il catalogo?',
                answer: 'Il cliente invia un messaggio, vede categorie, sceglie prodotto, vede dettagli e immagini, e può ordinare.'
            },
            {
                question: 'I prodotti possono essere aggiornati?',
                answer: 'Sì, dashboard semplice per aggiungere, modificare ed eliminare istantaneamente.'
            },
            {
                question: 'Supporta i pagamenti?',
                answer: 'Sì, integrazione gateway pagamento e contrassegno.'
            }
        ]
    },

    'whatsapp-flash-sale': {
        title: 'Campagne Vendite Flash su WhatsApp',
        description: 'Lancia promozioni esclusive per clienti WhatsApp con countdown e offerte limitate che aumentano le vendite.',
        shortDescription: 'Offerte esclusive su WhatsApp',
        features: [
            'Lancio campagne programmato',
            'Timer countdown',
            'Offerte esclusive WhatsApp',
            'Targeting per segmenti',
            'Link acquisto diretti',
            'Tracking performance campagna',
            'Stop automatico se esaurito',
            'Annunci vincitori'
        ],
        benefits: [
            'Tasso apertura 80%+',
            'Velocità vendite aumentata',
            'Creare urgenza FOMO',
            'Svuotare inventario velocemente',
            'Nuovi clienti',
            'Ricavi aggiuntivi'
        ],
        useCases: [
            'Saldi stagionali',
            'Lanci prodotti',
            'Promo festività',
            'Edizioni limitate',
            'Liquidazione'
        ],
        timeframe: '2 mesi',
        metrics: ['80%+ tasso apertura', '45% tasso click', '35K$+ ricavi campagna'],
        deliveryTime: '1-2 settimane',
        faqs: [
            {
                question: 'Come programmo le campagne?',
                answer: 'Dashboard semplice per creare campagne con data/ora inizio-fine e target.'
            },
            {
                question: 'Come posso targetizzare i clienti?',
                answer: 'In base a storico acquisti, posizione, interessi e importo speso.'
            },
            {
                question: 'Se il prodotto è esaurito?',
                answer: 'Il sistema arresta automaticamente e informa i clienti con alternative.'
            }
        ]
    },

    // ==================== RESTAURANTS ====================

    'whatsapp-food-ordering': {
        title: 'Sistema Ordinazione Cibo tramite WhatsApp',
        description: 'Consenti ai clienti di ordinare direttamente tramite WhatsApp con menu interattivo e pagamento online.',
        shortDescription: 'Ordina il tuo pasto tramite WhatsApp',
        features: [
            'Menu interattivo',
            'Personalizzazione ordine',
            'Pagamento online',
            'Conferma istantanea',
            'Tracking consegna',
            'Storico ordini',
            'Offerte e sconti',
            'Valutazione servizio'
        ],
        benefits: [
            'Ordini +40%',
            'Nessuna commissione app',
            'Relazione cliente diretta',
            'Dati clienti',
            'Offerte personalizzate',
            'Maggiore fedeltà'
        ],
        useCases: [
            'Ristoranti',
            'Caffetterie',
            'Panetterie',
            'Pasticcerie',
            'Cloud kitchen'
        ],
        timeframe: '2 mesi',
        metrics: ['Più ordini', 'Nessuna commissione', 'Soddisfazione clienti'],
        deliveryTime: '1-2 settimane',
        faqs: [
            {
                question: 'Come ordina il cliente?',
                answer: 'Invia messaggio, sfoglia menu, sceglie, personalizza, paga e riceve conferma.'
            },
            {
                question: 'Quali metodi di pagamento?',
                answer: 'Carte, Apple Pay, contrassegno e gateway locali.'
            },
            {
                question: 'Consegna e ritiro supportati?',
                answer: 'Sì, il cliente sceglie consegna con indirizzo o ritiro con orario preferito.'
            }
        ]
    },

    'whatsapp-table-reservation': {
        title: 'Prenotazione Tavoli tramite WhatsApp',
        description: 'Sistema semplice ed efficace di prenotazione tavoli tramite WhatsApp con selezione orario e conferma istantanea.',
        shortDescription: 'Prenota il tuo tavolo tramite WhatsApp',
        features: ['Mostra orari disponibili', 'Seleziona numero persone', 'Preferenze tavolo', 'Conferma istantanea', 'Promemoria prima', 'Cancellazione/modifica facile', 'Occasioni speciali', 'Lista attesa'],
        benefits: ['Più prenotazioni', 'Meno cancellazioni', 'Migliore distribuzione', 'Esperienza eccellente', 'Tempo staff risparmiato', 'Dati preziosi'],
        useCases: ['Ristoranti gourmet', 'Caffè premium', 'Hotel', 'Sale eventi', 'Club'],
        timeframe: '2 mesi',
        metrics: ['Più prenotazioni', 'Meno no-show', 'Soddisfazione clienti'],
        deliveryTime: '1-2 settimane',
        faqs: [{ question: 'Come si prenota?', answer: 'Scegli data, ora, numero e ricevi conferma istantanea.' }]
    },

    // ==================== ADDITIONAL HEALTHCARE ====================

    'whatsapp-lab-results': {
        title: 'Sistema Risultati Laboratorio via WhatsApp',
        description: 'Invia i risultati delle analisi ai pazienti via WhatsApp in modo sicuro con interpretazioni.',
        shortDescription: 'Ricevi i tuoi risultati via WhatsApp',
        features: ['Risultati criptati', 'Interpretazione risultati', 'Avvisi valori anormali', 'Appuntamento follow-up', 'Storico test', 'Confronto test precedenti', 'Richiesta nuovo test', 'Invio al medico'],
        benefits: ['Consegna più veloce', 'Meno chiamate', 'Soddisfazione pazienti', 'Risparmio carta', 'Più privacy', 'Migliore follow-up'],
        useCases: ['Laboratori medici', 'Centri diagnostici', 'Ospedali', 'Cliniche', 'Centri radiologia'],
        timeframe: '3 mesi',
        metrics: ['Velocità consegna', 'Soddisfazione pazienti', 'Chiamate ridotte'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'I risultati sono sicuri?', answer: 'Sì, completamente criptati e protetti da password.' }]
    },

    'whatsapp-dental-reminders': {
        title: 'Promemoria Dentista',
        description: 'Sistema di promemoria intelligente per appuntamenti dentistici, controlli regolari e follow-up trattamenti.',
        shortDescription: 'Promemoria intelligenti per appuntamenti dentistici',
        features: ['Promemoria appuntamenti', 'Pianificazione controlli regolari', 'Follow-up trattamento', 'Consigli igiene dentale', 'Offerte sbiancamento/pulizia', 'Conferma presenza', 'Riprogrammazione', 'Promemoria radiografie'],
        benefits: ['45% meno no-show', 'Più controlli regolari', 'Migliore follow-up trattamento', 'Clienti fedeli', 'Ricavi più alti', 'Meno tempo telefono'],
        useCases: ['Studi dentistici', 'Centri ortodonzia', 'Cliniche pediatriche', 'Centri implanti', 'Cliniche estetiche'],
        timeframe: '4 mesi',
        metrics: ['Meno no-show', 'Più visite regolari', 'Soddisfazione pazienti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Frequenza promemoria?', answer: 'Promemoria una settimana, un giorno e due ore prima.' }]
    },

    'whatsapp-veterinary-care': {
        title: 'Cure Animali via WhatsApp',
        description: 'Sistema completo per cliniche veterinarie con prenotazioni, promemoria vaccini e monitoraggio salute.',
        shortDescription: 'Prenditi cura del tuo animale via WhatsApp',
        features: ['Prenotazione appuntamenti', 'Promemoria vaccini', 'Cartella clinica animale', 'Consigli cura', 'Ordine farmaci', 'Consulenze rapide', 'Emergenze 24/7', 'Shop accessori'],
        benefits: ['Migliore cura animali', 'Rispetto calendario vaccinale', 'Clienti fedeli', 'Vendite aggiuntive', 'Meno emergenze', 'Risparmio tempo'],
        useCases: ['Cliniche veterinarie', 'Ospedali animali', 'Negozi animali', 'Hotel animali', 'Servizi adozione'],
        timeframe: '4 mesi',
        metrics: ['Rispetto vaccini', 'Soddisfazione clienti', 'Vendite aggiuntive'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Ricorda i vaccini?', answer: 'Sì, promemoria automatici per tutti i vaccini e controlli regolari.' }]
    },

    // ==================== EDUCATION ====================

    'whatsapp-student-enrollment': {
        title: 'Sistema Iscrizione Studenti via WhatsApp',
        description: 'Automatizzazione del processo di iscrizione e ammissione via WhatsApp con tracciamento documenti.',
        shortDescription: 'Iscriviti a scuola via WhatsApp',
        features: ['Richieste ammissione', 'Invio domande', 'Upload documenti', 'Tracciamento stato', 'Pagamento tasse', 'Tour virtuali', 'Orario lezioni', 'Contatto consulente'],
        benefits: ['Processo ammissione più veloce', 'Meno carico amministrativo', 'Migliore esperienza genitori', 'Tracciamento preciso', 'Meno errori', 'Più iscrizioni'],
        useCases: ['Scuole private', 'Università', 'Scuole di lingue', 'Centri formazione', 'Asili'],
        timeframe: '4 mesi',
        metrics: ['Velocità ammissione', 'Tasso iscrizione', 'Soddisfazione genitori'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Si possono caricare documenti?', answer: 'Sì, upload sicuro di certificati e documenti direttamente via WhatsApp.' }]
    },

    'whatsapp-parent-communication': {
        title: 'Comunicazione Genitori',
        description: 'Piattaforma comunicazione completa tra scuola e genitori via WhatsApp per annunci e pagelle.',
        shortDescription: 'Comunicazione diretta con la scuola',
        features: ['Invio annunci', 'Pagelle studenti', 'Calendario esami', 'Notifiche presenza/assenza', 'Richieste permessi', 'Contatto insegnanti', 'Voti e valutazioni', 'Attività ed eventi'],
        benefits: ['Migliore comunicazione', 'Follow-up più facile', 'Meno carta', 'Notifiche istantanee', 'Soddisfazione genitori', 'Più trasparenza'],
        useCases: ['Scuole', 'Asili', 'Centri doposcuola', 'Campi estivi', 'Centri formazione'],
        timeframe: '3 mesi',
        metrics: ['Tasso interazione', 'Soddisfazione genitori', 'Richieste ridotte'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Si può contattare l\'insegnante?', answer: 'Sì, messaggi privati agli insegnanti con risposta rapida.' }]
    },

    'whatsapp-online-courses': {
        title: 'Corsi Online via WhatsApp',
        description: 'Piattaforma per erogazione corsi e contenuti didattici via WhatsApp con test e monitoraggio progressi.',
        shortDescription: 'Impara via WhatsApp',
        features: ['Contenuti giornalieri', 'Video didattici', 'Test e valutazioni', 'Certificati completamento', 'Gruppi discussione', 'Supporto formatore', 'Promemoria corsi', 'Report progressi'],
        benefits: ['Accesso più facile', 'Maggiore engagement', 'Migliore completamento corsi', 'Costi ridotti', 'Flessibilità apprendimento', 'Scalabilità'],
        useCases: ['Centri formazione', 'Formatori indipendenti', 'Aziende', 'Istituzioni educative', 'Consulenti'],
        timeframe: '4 mesi',
        metrics: ['Tasso completamento', 'Soddisfazione partecipanti', 'Vendite'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Come sono le valutazioni?', answer: 'Test interattivi via WhatsApp con risultati immediati.' }]
    },

    // ==================== TRAVEL & TOURISM ====================

    'whatsapp-travel-booking': {
        title: 'Prenotazione Viaggi e Turismo via WhatsApp',
        description: 'Prenota viaggi, hotel e attrazioni facilmente via WhatsApp con supporto istantaneo.',
        shortDescription: 'Prenota il tuo viaggio via WhatsApp',
        features: ['Prenotazione voli', 'Prenotazione hotel', 'Tour turistici', 'Visti viaggio', 'Noleggio auto', 'Assicurazione', 'Tracciamento prenotazioni', 'Supporto 24/7'],
        benefits: ['Prenotazione rapida', 'Prezzi competitivi', 'Supporto personalizzato', 'Modifiche facili', 'Tutto in un posto', 'Offerte esclusive'],
        useCases: ['Agenzie viaggio', 'Società turismo', 'Hotel', 'Compagnie aeree', 'Tour operator'],
        timeframe: '5 mesi',
        metrics: ['Prenotazioni', 'Soddisfazione clienti', 'Ricavi'],
        deliveryTime: '4-5 settimane',
        faqs: [{ question: 'Si può modificare la prenotazione?', answer: 'Sì, modifica o cancellazione facile via WhatsApp.' }]
    },

    // ==================== FINANCE & BANKING ====================

    'whatsapp-banking-assistant': {
        title: 'Assistente Bancario via WhatsApp',
        description: 'Servizi bancari intelligenti via WhatsApp con saldo, bonifici e pagamento bollette.',
        shortDescription: 'I tuoi servizi bancari via WhatsApp',
        features: ['Saldo conto', 'Estratto conto', 'Bonifici', 'Pagamento bollette', 'Avvisi transazioni', 'Richiesta carte', 'Blocco carta', 'Supporto clienti'],
        benefits: ['Servizio 24/7', 'Transazioni veloci', 'Alta sicurezza', 'Meno visite filiale', 'Soddisfazione clienti', 'Riduzione costi'],
        useCases: ['Banche', 'Società finanziarie', 'Wallet digitali', 'Provider pagamenti', 'Cooperative credito'],
        timeframe: '6 mesi',
        metrics: ['Transazioni digitali', 'Soddisfazione clienti', 'Risparmi costi'],
        deliveryTime: '5-6 settimane',
        faqs: [{ question: 'È sicuro?', answer: 'Sì, crittografia bancaria e autenticazione multi-fattore.' }]
    },

    // ==================== AUTOMOTIVE ====================

    'whatsapp-car-service': {
        title: 'Servizio Manutenzione Auto via WhatsApp',
        description: 'Prenota manutenzioni, ricevi promemoria service e traccia riparazioni via WhatsApp.',
        shortDescription: 'Cura la tua auto via WhatsApp',
        features: ['Prenotazione manutenzione', 'Promemoria service regolare', 'Tracciamento riparazione', 'Preventivi', 'Ordine ricambi', 'Storico manutenzione', 'Consigli cura', 'Servizio emergenza'],
        benefits: ['Manutenzione regolare', 'Meno guasti', 'Clienti fedeli', 'Ricavi continui', 'Risparmio tempo', 'Soddisfazione clienti'],
        useCases: ['Officine auto', 'Concessionarie', 'Centri pneumatici', 'Ricambisti', 'Soccorso stradale'],
        timeframe: '4 mesi',
        metrics: ['Manutenzioni regolari', 'Soddisfazione clienti', 'Ricavi'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Come tracciare manutenzione auto?', answer: 'Storico completo con promemoria per prossimo service.' }]
    },

    // ==================== LEGAL SERVICES ====================

    'whatsapp-legal-consultation': {
        title: 'Consulenza Legale via WhatsApp',
        description: 'Ottieni consulenza legale rapida e affidabile via WhatsApp con avvocati abilitati.',
        shortDescription: 'Consulta un avvocato via WhatsApp',
        features: ['Consulenze rapide', 'Appuntamenti', 'Invio documenti', 'Tracciamento casi', 'Domande legali', 'Modelli contratti', 'Procure', 'Pagamento parcelle'],
        benefits: ['Accesso facile giustizia', 'Risparmio tempo', 'Costi ridotti', 'Esperti multidisciplinari', 'Riservatezza totale', 'Follow-up continuo'],
        useCases: ['Studi legali', 'Avvocati indipendenti', 'Aziende', 'Istituzioni', 'Privati'],
        timeframe: '4 mesi',
        metrics: ['Consulenze', 'Soddisfazione clienti', 'Ricavi'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'La consulenza è riservata?', answer: 'Sì, segreto professionale completo con crittografia.' }]
    },

    // ==================== FITNESS & GYM ====================

    'whatsapp-gym-membership': {
        title: 'Abbonamento Palestra via WhatsApp',
        description: 'Gestisci abbonamenti, prenota corsi e comunica con trainer via WhatsApp.',
        shortDescription: 'La tua palestra via WhatsApp',
        features: ['Rinnovo abbonamento', 'Prenotazione corsi', 'Programma allenamento', 'Contatto trainer', 'Tracciamento progressi', 'Consigli nutrizione', 'Offerte speciali', 'Sospensione abbonamento'],
        benefits: ['Clienti fedeli', 'Migliore presenza', 'Comunicazione continua', 'Più rinnovi', 'Soddisfazione membri', 'Ricavi aggiuntivi'],
        useCases: ['Palestre', 'Studi yoga', 'Centri fitness', 'Personal trainer', 'Club sportivi'],
        timeframe: '3 mesi',
        metrics: ['Tasso rinnovo', 'Presenza', 'Soddisfazione membri'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Come prenoto un corso?', answer: 'Scegli tipo e orario e ricevi conferma istantanea.' }]
    },

    // ==================== BEAUTY & SPA ====================

    'whatsapp-beauty-booking': {
        title: 'Prenotazione Salone Bellezza via WhatsApp',
        description: 'Prenota appuntamenti salone bellezza e spa facilmente scegliendo servizio, operatore e orario.',
        shortDescription: 'Prenota il tuo appuntamento bellezza via WhatsApp',
        features: ['Prenotazione servizi', 'Scelta operatore', 'Listino prezzi', 'Offerte speciali', 'Promemoria appuntamenti', 'Punti fedeltà', 'Galleria lavori', 'Ordine prodotti'],
        benefits: ['Più prenotazioni', 'Meno cancellazioni', 'Clienti fedeli', 'Marketing facile', 'Risparmio tempo', 'Dati preziosi'],
        useCases: ['Saloni bellezza', 'Centri spa', 'Parrucchieri', 'Centri cura pelle', 'Saloni unghie'],
        timeframe: '3 mesi',
        metrics: ['Prenotazioni', 'Cancellazioni', 'Soddisfazione clienti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Si può scegliere l\'operatore?', answer: 'Sì, scegli il tuo operatore preferito e vedi disponibilità.' }]
    },

    // ==================== LOGISTICS & DELIVERY ====================

    'whatsapp-delivery-management': {
        title: 'Gestione Consegne e Spedizioni via WhatsApp',
        description: 'Gestisci operazioni di consegna complete dal ritiro alla consegna con tracking autisti e pacchi.',
        shortDescription: 'Gestisci le tue consegne via WhatsApp',
        features: ['Richiesta consegna', 'Tracciamento spedizioni', 'Contatto autista', 'Prova consegna', 'Pianificazione ritiro', 'Calcolo costo', 'Riconsegna', 'Report performance'],
        benefits: ['Trasparenza totale', 'Soddisfazione clienti', 'Maggiore efficienza', 'Meno problemi', 'Tracking preciso', 'Risparmio costi'],
        useCases: ['Aziende consegna', 'E-commerce', 'Ristoranti', 'Farmacie', 'Spedizionieri'],
        timeframe: '4 mesi',
        metrics: ['Tasso consegna', 'Soddisfazione clienti', 'Efficienza'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Si può tracciare l\'autista?', answer: 'Sì, posizione live con orario arrivo stimato.' }]
    },

    // ==================== EVENTS & ENTERTAINMENT ====================

    'whatsapp-event-booking': {
        title: 'Prenotazione Eventi e Biglietti via WhatsApp',
        description: 'Prenota biglietti concerti, eventi e conferenze facilmente via WhatsApp con biglietti digitali.',
        shortDescription: 'Prenota il tuo evento via WhatsApp',
        features: ['Sfoglia eventi', 'Prenota biglietti', 'Scelta posti', 'Pagamento online', 'Biglietti digitali QR', 'Promemoria', 'Cancellazione e rimborso', 'Condividi con amici'],
        benefits: ['Vendite più alte', 'Esperienza semplice', 'Niente code', 'Marketing diretto', 'Dati clienti', 'Costi ridotti'],
        useCases: ['Organizzatori concerti', 'Teatri', 'Conferenze', 'Stadi', 'Musei'],
        timeframe: '3 mesi',
        metrics: ['Vendite biglietti', 'Soddisfazione partecipanti', 'Costi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Come ricevo il biglietto?', answer: 'Biglietto digitale QR inviato istantaneamente su WhatsApp.' }]
    },

    // ==================== INSURANCE ====================

    'whatsapp-insurance-claims': {
        title: 'Richieste Assicurazione via WhatsApp',
        description: 'Invia richieste assicurazione, traccia stato e ricevi rimborsi facilmente via WhatsApp.',
        shortDescription: 'Invia la tua richiesta via WhatsApp',
        features: ['Invio richieste', 'Upload documenti', 'Tracciamento stato', 'Contatto gestore', 'Rinnovo polizze', 'Richieste info', 'Richiesta attestati', 'Confronto offerte'],
        benefits: ['Richieste più veloci', 'Trasparenza stato', 'Soddisfazione clienti', 'Risparmio tempo', 'Maggiore precisione', 'Costi ridotti'],
        useCases: ['Compagnie assicurazioni', 'Broker assicurativi', 'Assicurazione salute', 'Assicurazione auto', 'Assicurazione vita'],
        timeframe: '5 mesi',
        metrics: ['Velocità richieste', 'Soddisfazione clienti', 'Tasso completamento'],
        deliveryTime: '4-5 settimane',
        faqs: [{ question: 'Si possono caricare foto incidente?', answer: 'Sì, carica tutti i documenti e foto direttamente via WhatsApp.' }]
    },

    // ==================== B2B SERVICES ====================

    'whatsapp-b2b-orders': {
        title: 'Ordini B2B Ingrosso via WhatsApp',
        description: 'Gestisci ordini ingrosso con catalogo dedicato, prezzi personalizzati e tracciamento ordini.',
        shortDescription: 'Ordina all\'ingrosso via WhatsApp',
        features: ['Catalogo ingrosso', 'Prezzi rivenditori', 'Limite credito', 'Tracciamento ordini', 'Fatture automatiche', 'Promemoria pagamenti', 'Offerte rivenditori', 'Report vendite'],
        benefits: ['Ordini più veloci', 'Meno errori', 'Migliori relazioni', 'Più vendite', 'Risparmio tempo', 'Dati precisi'],
        useCases: ['Distributori', 'Produttori', 'Grossisti', 'Fornitori', 'Importatori'],
        timeframe: '4 mesi',
        metrics: ['Volume ordini', 'Velocità ciclo', 'Soddisfazione rivenditori'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Si può vedere saldo conto?', answer: 'Sì, credito e fatture in sospeso sempre disponibili.' }]
    },

    // ==================== PET CARE ====================

    'whatsapp-pet-services': {
        title: 'Servizi Cura Animali',
        description: 'Prenota servizi cura animali come toelettatura, pensione e addestramento via WhatsApp.',
        shortDescription: 'Coccola il tuo animale via WhatsApp',
        features: ['Prenotazione toelettatura', 'Pensione animali', 'Sessioni addestramento', 'Passeggiate quotidiane', 'Cure salute', 'Shop accessori', 'Vaccinazioni', 'Consigli cura'],
        benefits: ['Servizio comodo', 'Promemoria regolari', 'Clienti fedeli', 'Vendite aggiuntive', 'Migliore cura', 'Risparmio tempo'],
        useCases: ['Saloni animali', 'Hotel animali', 'Centri addestramento', 'Servizi passeggiate', 'Negozi animali'],
        timeframe: '3 mesi',
        metrics: ['Prenotazioni', 'Soddisfazione clienti', 'Vendite'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Si può prenotare pensione?', answer: 'Sì, prenota con durata e servizi aggiuntivi.' }]
    },

    // ==================== RESTAURANT (Additional) ====================

    'whatsapp-restaurant-ordering': {
        title: 'Sistema Ordinazione Ristorante Intelligente',
        description: 'Sistema ordinazione completo per ristoranti con ordini in sede e consegna più gestione cucina.',
        shortDescription: 'Ordina al ristorante via WhatsApp',
        features: ['Menu intelligente', 'Ordine tavolo (QR)', 'Ordine consegna', 'Ordine asporto', 'Multi-pagamento', 'Divisione conto', 'Programma fedeltà', 'Valutazione piatti'],
        benefits: ['Più ordini', 'Servizio più veloce', 'Meno errori', 'Maggiore soddisfazione', 'Dati preziosi', 'Fidelizzazione clienti'],
        useCases: ['Ristoranti', 'Catene ristoranti', 'Mense', 'Food court', 'Catering'],
        timeframe: '3 mesi',
        metrics: ['Tasso ordini', 'Valore ordine', 'Soddisfazione clienti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Supporta ordine da tavolo?', answer: 'Sì, QR su ogni tavolo per ordine diretto.' }]
    },

    // ==================== E-COMMERCE (Additional) ====================

    'cart-abandonment-recovery-whatsapp': {
        title: 'Recupero Carrelli Abbandonati',
        description: 'Sistema automatizzato per inviare promemoria ai clienti che hanno abbandonato i carrelli.',
        shortDescription: 'Recupera vendite perse via WhatsApp',
        features: ['Promemoria automatici', 'Sconti personalizzati', 'Multi-follow-up', 'Analisi conversione'],
        benefits: ['Recupero 25% carrelli', 'Più vendite', 'Migliore conversione'],
        useCases: ['E-commerce', 'Moda', 'Elettronica'],
        timeframe: '2 mesi',
        metrics: ['Tasso recupero', 'Fatturato'],
        deliveryTime: '1-2 settimane',
        faqs: [{ question: 'Come funziona?', answer: 'Messaggi automatici dopo abbandono con offerte personalizzate.' }]
    },

    'loyalty-rewards-program-whatsapp': {
        title: 'Programma Fedeltà e Premi',
        description: 'Sistema integrato di punti e premi via WhatsApp.',
        shortDescription: 'Guadagna e riscatta punti via WhatsApp',
        features: ['Tracciamento punti', 'Premi automatici', 'Offerte esclusive', 'Livelli membri'],
        benefits: ['40% più fedeltà', 'Acquisti ripetuti', 'Soddisfazione cliente'],
        useCases: ['Retail', 'Ristoranti', 'Saloni'],
        timeframe: '3 mesi',
        metrics: ['Tasso retention', 'Tasso riacquisto'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Come si guadagnano punti?', answer: 'Automaticamente ad ogni acquisto.' }]
    },

    // ==================== REAL ESTATE (Additional) ====================

    'virtual-property-tours-whatsapp': {
        title: 'Tour Virtuali Immobiliari',
        description: 'Tour video interattivi delle proprietà via WhatsApp.',
        shortDescription: 'Esplora proprietà virtualmente',
        features: ['Video 360', 'Tour dal vivo', 'Domande istantanee', 'Prenota visita'],
        benefits: ['Risparmio tempo', 'Miglior filtraggio', 'Decisioni più rapide'],
        useCases: ['Agenzie immobiliari', 'Sviluppatori', 'Agenti immobiliari'],
        timeframe: '3 mesi',
        metrics: ['Tasso visite', 'Conversione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Come avvio un tour?', answer: 'Invia il nome della proprietà per il tour virtuale.' }]
    },

    'mortgage-calculator-whatsapp': {
        title: 'Calcolatore Mutuo',
        description: 'Calcolo rate e idoneità finanziamento via WhatsApp.',
        shortDescription: 'Calcola il tuo mutuo istantaneamente',
        features: ['Calcolo istantaneo', 'Confronto banche', 'Verifica idoneità', 'Invia richiesta'],
        benefits: ['Trasparenza totale', 'Decisioni informate', 'Risparmio tempo'],
        useCases: ['Banche', 'Società finanziamento', 'Mediatori immobiliari'],
        timeframe: '2 mesi',
        metrics: ['Richieste finanziamento', 'Conversione'],
        deliveryTime: '2 settimane',
        faqs: [{ question: 'Quali info servono?', answer: 'Reddito, valore proprietà e anticipo.' }]
    },

    // ==================== INSTAGRAM SOLUTIONS ====================

    'ig-fashion-boutique': {
        title: 'Boutique Moda Instagram',
        description: 'Sistema vendita integrato per moda via Instagram con catalogo e ordini.',
        shortDescription: 'Vendi moda via Instagram',
        features: ['Catalogo interattivo', 'Ordine diretto', 'Pagamento online', 'Tracciamento ordini'],
        benefits: ['Vendite via Instagram', 'Esperienza fluida', 'Nuovi clienti'],
        useCases: ['Boutique', 'Designer', 'Marchi emergenti'],
        timeframe: '2 mesi',
        metrics: ['Vendite', 'Engagement', 'Follower'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Come funziona?', answer: 'I clienti sfogliano e ordinano direttamente via DM.' }]
    },

    'ig-fitness-coaching': {
        title: 'Coaching Fitness via Instagram',
        description: 'Piattaforma allenamento personale e tracking fitness via Instagram.',
        shortDescription: 'Coaching fitness personale via Instagram',
        features: ['Programmi allenamento', 'Tracciamento progressi', 'Consigli nutrizione', 'Sessioni live'],
        benefits: ['Entrate regolari', 'Clienti globali', 'Flessibilità totale'],
        useCases: ['Personal trainer', 'Palestre', 'Nutrizionisti'],
        timeframe: '3 mesi',
        metrics: ['Clienti', 'Abbonamenti', 'Risultati'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Come inizio?', answer: 'Scegli il programma e ti contattiamo.' }]
    },

    // ==================== MESSENGER SOLUTIONS ====================

    'msg-b2b-leads': {
        title: 'Qualificazione Lead B2B via Messenger',
        description: 'Sistema automatizzato qualificazione e follow-up per clienti aziendali.',
        shortDescription: 'Qualificazione automatica lead B2B',
        features: ['Qualificazione automatica', 'Pianificazione meeting', 'Follow-up intelligente', 'Integrazione CRM'],
        benefits: ['Lead qualificati', 'Risparmio tempo vendite', 'Conversione migliore'],
        useCases: ['Aziende B2B', 'SaaS', 'Servizi professionali'],
        timeframe: '3 mesi',
        metrics: ['Qualità lead', 'Tasso conversione'],
        deliveryTime: '3 settimane',
        faqs: [{ question: 'Come avviene la qualificazione?', answer: 'Domande intelligenti identificano esigenze e budget.' }]
    },

    'msg-customer-support': {
        title: 'Supporto Clienti Messenger',
        description: 'Supporto clienti automatizzato 24/7 via Facebook Messenger.',
        shortDescription: 'Supporto automatizzato via Messenger',
        features: ['Risposta istantanea 24/7', 'FAQ', 'Trasferimento operatore', 'Tracciamento ticket'],
        benefits: ['Soddisfazione cliente', 'Risparmio costi', 'Servizio continuo'],
        useCases: ['Retail', 'Servizi', 'Tecnologia'],
        timeframe: '2 mesi',
        metrics: ['Tempo risposta', 'Soddisfazione cliente'],
        deliveryTime: '2 settimane',
        faqs: [{ question: 'Sostituisce gli umani?', answer: 'No, gestisce domande frequenti e trasferisce le complesse.' }]
    },

    // ==================== NEXT.JS SOLUTIONS ====================

    'next-saas-platform': {
        title: 'Piattaforma SaaS Next.js',
        description: 'Sviluppo piattaforma SaaS completa con abbonamenti e dashboard.',
        shortDescription: 'Piattaforma SaaS professionale',
        features: ['Abbonamenti', 'Dashboard', 'API integrata', 'Analytics', 'Pagamento online'],
        benefits: ['Velocità massima', 'SEO eccellente', 'Scalabilità'],
        useCases: ['Startup', 'Prodotti digitali', 'Servizi cloud'],
        timeframe: '4-6 mesi',
        metrics: ['Abbonamenti', 'Retention', 'Ricavi'],
        deliveryTime: '8-12 settimane',
        faqs: [{ question: 'Perché Next.js?', answer: 'Alte prestazioni, SEO eccellente, esperienza sviluppatore fluida.' }]
    },

    'next-ecommerce': {
        title: 'E-Commerce Next.js',
        description: 'Negozio online veloce e scalabile con tecnologia Next.js.',
        shortDescription: 'Negozio online ultra-veloce',
        features: ['Catalogo dinamico', 'Carrello', 'Multi-pagamento', 'Gestione inventario'],
        benefits: ['Caricamento <1 secondo', 'SEO eccellente', 'Conversione migliore'],
        useCases: ['Retail', 'Brand', 'Distributori'],
        timeframe: '3-4 mesi',
        metrics: ['Vendite', 'Velocità sito', 'Conversione'],
        deliveryTime: '6-8 settimane',
        faqs: [{ question: 'Supporta migliaia di prodotti?', answer: 'Sì, progettato per scalare con alte prestazioni.' }]
    },

    // ==================== SEO SOLUTIONS ====================

    'seo-ecommerce': {
        title: 'Ottimizzazione SEO E-Commerce',
        description: 'Strategia SEO completa per negozi online per aumentare traffico organico.',
        shortDescription: 'SEO specializzato per negozi',
        features: ['Ottimizzazione prodotti', 'Parole chiave', 'Backlink', 'Velocità sito'],
        benefits: ['200% più traffico', 'Vendite organiche', 'Costi ridotti'],
        useCases: ['Negozi online', 'Marketplace', 'Retail'],
        timeframe: '6-12 mesi',
        metrics: ['Ranking parole chiave', 'Traffico organico', 'Vendite'],
        deliveryTime: 'Continuo',
        faqs: [{ question: 'Quando vedo risultati?', answer: 'Primi risultati in 3 mesi, significativi in 6-12 mesi.' }]
    },

    'seo-local': {
        title: 'SEO Locale per Aziende',
        description: 'Ottimizzazione visibilità nella ricerca locale e Google Maps.',
        shortDescription: 'Migliore visibilità ricerca locale',
        features: ['Google Business', 'Recensioni', 'Maps', 'Parole chiave locali'],
        benefits: ['Visibilità Maps', 'Clienti locali', 'Più fiducia'],
        useCases: ['Ristoranti', 'Cliniche', 'Retail'],
        timeframe: '3-6 mesi',
        metrics: ['Ranking locale', 'Chiamate', 'Visite negozio'],
        deliveryTime: 'Continuo',
        faqs: [{ question: 'Differenza da SEO normale?', answer: 'Focus su ricerca locale, Maps e recensioni.' }]
    },

    // ==================== AI AUTOMATION ====================

    'auto-sales': {
        title: 'Automazione Vendite IA',
        description: 'Automazione processi vendita dalla qualificazione alla chiusura con IA.',
        shortDescription: 'Vendite automatizzate con IA',
        features: ['Qualificazione automatica', 'Follow-up intelligente', 'Analisi opportunità', 'Previsioni vendite'],
        benefits: ['40% più vendite', 'Risparmio tempo team', 'Decisioni migliori'],
        useCases: ['Team vendite', 'Aziende B2B', 'SaaS'],
        timeframe: '3 mesi',
        metrics: ['Tasso conversione', 'Valore deal', 'Velocità chiusura'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Richiede formazione?', answer: 'L\'IA impara automaticamente dai tuoi dati.' }]
    },

    'auto-customer-service': {
        title: 'Servizio Clienti IA',
        description: 'Chatbot intelligente per servizio clienti 24/7.',
        shortDescription: 'Supporto intelligente 24/7',
        features: ['Risposta istantanea', 'Comprensione linguaggio naturale', 'Apprendimento continuo', 'Trasferimento umani'],
        benefits: ['Servizio 24/7', '60% risparmio costi', 'Soddisfazione maggiore'],
        useCases: ['Tutte le aziende', 'E-commerce', 'Servizi'],
        timeframe: '2 mesi',
        metrics: ['Tempo risposta', 'Tasso risoluzione', 'Soddisfazione cliente'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Capisce l\'italiano?', answer: 'Sì, addestrato per italiano e inglese.' }]
    },

    // ==================== EDUCATION (Additional) ====================

    'attendance-tracking-notifications-whatsapp': {
        title: 'Tracciamento Presenze e Notifiche',
        description: 'Sistema automatico di tracciamento presenze studenti con notifica istantanea ai genitori.',
        shortDescription: 'Traccia presenze via WhatsApp',
        features: ['Registrazione presenze', 'Notifica assenza istantanea', 'Report settimanali'],
        benefits: ['Migliore monitoraggio', 'Meno assenze', 'Comunicazione istantanea'],
        useCases: ['Scuole', 'Università', 'Centri formazione'],
        timeframe: '2 mesi',
        metrics: ['Tasso presenze', 'Soddisfazione genitori'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Come viene registrato?', answer: 'Automaticamente all\'ingresso o dall\'insegnante.' }]
    },

    'class-schedule-timetable-whatsapp': {
        title: 'Orario Lezioni e Appuntamenti',
        description: 'Gestione orari lezioni e notifiche cambiamenti.',
        shortDescription: 'Orario intelligente via WhatsApp',
        features: ['Mostra orario', 'Notifiche cambiamenti', 'Promemoria lezioni'],
        benefits: ['Migliore organizzazione', 'Notifiche istantanee'],
        useCases: ['Scuole', 'Università', 'Centri formazione'],
        timeframe: '1 mese',
        metrics: ['Utilizzo sistema', 'Soddisfazione utenti'],
        deliveryTime: '1-2 settimane',
        faqs: [{ question: 'Cambiamenti last minute?', answer: 'Sì, notifiche istantanee per ogni cambiamento.' }]
    },

    'exam-result-notification-whatsapp': {
        title: 'Notifiche Risultati Esami',
        description: 'Sistema invio risultati esami a studenti e genitori.',
        shortDescription: 'Risultati esami via WhatsApp',
        features: ['Invio risultati', 'Analisi performance', 'Consigli miglioramento'],
        benefits: ['Informazione istantanea', 'Privacy', 'Risparmio tempo'],
        useCases: ['Scuole', 'Università', 'Centri esame'],
        timeframe: '1 mese',
        metrics: ['Velocità notifica', 'Soddisfazione genitori'],
        deliveryTime: '1-2 settimane',
        faqs: [{ question: 'I risultati sono sicuri?', answer: 'Sì, crittografati e protetti da password.' }]
    },

    'homework-assignment-reminders-whatsapp': {
        title: 'Promemoria Compiti',
        description: 'Sistema promemoria per compiti e scadenze.',
        shortDescription: 'Promemoria compiti via WhatsApp',
        features: ['Lista compiti', 'Promemoria prima scadenza', 'Consegna elettronica'],
        benefits: ['Migliore impegno', 'Meno dimenticanze'],
        useCases: ['Scuole', 'Insegnanti privati', 'Centri educativi'],
        timeframe: '1 mese',
        metrics: ['Tasso consegna', 'Rispetto scadenze'],
        deliveryTime: '1-2 settimane',
        faqs: [{ question: 'Quando i promemoria?', answer: 'Due giorni, un giorno e due ore prima.' }]
    },

    'library-book-management-whatsapp': {
        title: 'Gestione Biblioteca',
        description: 'Sistema prestito e restituzione con promemoria.',
        shortDescription: 'Gestisci biblioteca via WhatsApp',
        features: ['Ricerca libri', 'Richiesta prestito', 'Promemoria restituzione', 'Prenotazione'],
        benefits: ['Gestione più facile', 'Meno ritardi'],
        useCases: ['Biblioteche scolastiche', 'Biblioteche universitarie', 'Biblioteche pubbliche'],
        timeframe: '2 mesi',
        metrics: ['Tasso prestito', 'Ritardi restituzione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Posso prenotare un libro in prestito?', answer: 'Sì, verrai notificato appena disponibile.' }]
    },

    'online-class-meeting-links-whatsapp': {
        title: 'Link Lezioni Virtuali',
        description: 'Invio automatico link lezioni virtuali.',
        shortDescription: 'Link lezioni via WhatsApp',
        features: ['Invio automatico', 'Promemoria prima lezione', 'Link registrazione'],
        benefits: ['Nessun link perso', 'Migliore partecipazione'],
        useCases: ['Scuole', 'Università', 'Corsi online'],
        timeframe: '1 mese',
        metrics: ['Tasso partecipazione', 'Accessibilità'],
        deliveryTime: '1-2 settimane',
        faqs: [{ question: 'Quali piattaforme?', answer: 'Zoom, Google Meet e Microsoft Teams.' }]
    },

    'student-enrollment-automation-whatsapp': {
        title: 'Automazione Iscrizione Studenti',
        description: 'Sistema automatico iscrizione nuovi studenti.',
        shortDescription: 'Iscrizione studenti via WhatsApp',
        features: ['Modulo iscrizione', 'Upload documenti', 'Tracciamento stato', 'Pagamento quote'],
        benefits: ['Iscrizione più veloce', 'Meno errori'],
        useCases: ['Scuole', 'Università', 'Centri formazione'],
        timeframe: '3 mesi',
        metrics: ['Velocità iscrizione', 'Soddisfazione genitori'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Pagamento online?', answer: 'Sì, carte e portafogli elettronici.' }]
    },

    // ==================== E-COMMERCE (Additional) ====================

    'ecommerce-store-automation': {
        title: 'Automazione Negozio E-commerce',
        description: 'Sistema completo automazione processi negozio online.',
        shortDescription: 'Automatizza negozio via WhatsApp',
        features: ['Catalogo interattivo', 'Carrello', 'Pagamento online', 'Tracciamento ordini'],
        benefits: ['Vendite 24/7', 'Esperienza fluida', 'Più clienti'],
        useCases: ['Negozi online', 'Brand', 'Distributori'],
        timeframe: '3 mesi',
        metrics: ['Vendite', 'Conversione', 'Soddisfazione cliente'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Serve sito web?', answer: 'No, funziona autonomamente via WhatsApp.' }]
    },

    'ecommerce-customer-support-whatsapp': {
        title: 'Supporto Clienti E-commerce',
        description: 'Sistema supporto clienti integrato per negozi online.',
        shortDescription: 'Supporto clienti negozio via WhatsApp',
        features: ['Risposta auto', 'Tracciamento ordini', 'FAQ', 'Trasferimento agente'],
        benefits: ['Supporto 24/7', 'Soddisfazione maggiore', 'Risparmio costi'],
        useCases: ['Negozi online', 'Brand', 'Distributori'],
        timeframe: '2 mesi',
        metrics: ['Tempo risposta', 'Soddisfazione cliente'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Quante domande automatiche?', answer: '80% delle domande frequenti.' }]
    },

    'order-tracking-notifications-whatsapp': {
        title: 'Notifiche Tracciamento Ordini',
        description: 'Sistema tracciamento spedizioni e notifiche cliente.',
        shortDescription: 'Traccia ordini via WhatsApp',
        features: ['Tracciamento tempo reale', 'Notifiche stato', 'Data consegna'],
        benefits: ['Trasparenza totale', 'Soddisfazione cliente', 'Meno richieste'],
        useCases: ['Negozi online', 'Società spedizione', 'Ristoranti'],
        timeframe: '2 mesi',
        metrics: ['Soddisfazione cliente', 'Richieste'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Frequenza aggiornamenti?', answer: 'Ad ogni cambio di stato.' }]
    },

    'flash-sale-campaigns-whatsapp': {
        title: 'Campagne Vendite Flash',
        description: 'Gestione campagne promozionali e sconti.',
        shortDescription: 'Campagne offerte via WhatsApp',
        features: ['Notifica offerte', 'Conto alla rovescia', 'Link acquisto diretto'],
        benefits: ['Vendite veloci', 'Alta interazione', 'Fedeltà cliente'],
        useCases: ['Negozi online', 'Brand', 'Piattaforme offerte'],
        timeframe: '1 mese',
        metrics: ['Vendite campagna', 'Tasso apertura'],
        deliveryTime: '1-2 settimane',
        faqs: [{ question: 'Quanti clienti?', answer: 'Illimitati con segmentazione intelligente.' }]
    },

    // ==================== REAL ESTATE (Additional) ====================

    'property-search-assistant-whatsapp': {
        title: 'Assistente Ricerca Immobiliare',
        description: 'Assistente intelligente per ricerca immobili secondo criteri.',
        shortDescription: 'Cerca immobile via WhatsApp',
        features: ['Ricerca criteri', 'Suggerimenti intelligenti', 'Confronto immobili'],
        benefits: ['Risparmio tempo', 'Risultati precisi', 'Esperienza facile'],
        useCases: ['Agenzie immobiliari', 'Agenti', 'Portali immobiliari'],
        timeframe: '3 mesi',
        metrics: ['Richieste', 'Visite prenotate'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Come indico i criteri?', answer: 'Rispondi a semplici domande su zona, budget e superficie.' }]
    },

    'property-alerts-matching-whatsapp': {
        title: 'Avvisi Immobili Corrispondenti',
        description: 'Sistema notifica per nuovi immobili corrispondenti.',
        shortDescription: 'Avvisi nuovi immobili',
        features: ['Notifica istantanea', 'Corrispondenza precisa', 'Prenotazione rapida'],
        benefits: ['Prime opportunità', 'Nulla da perdere'],
        useCases: ['Agenzie immobiliari', 'Portali immobiliari', 'Mediatori'],
        timeframe: '2 mesi',
        metrics: ['Notifiche aperte', 'Prenotazioni'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Frequenza avvisi?', answer: 'Appena viene aggiunto un immobile corrispondente.' }]
    },

    'property-document-collection-whatsapp': {
        title: 'Raccolta Documenti Immobiliari',
        description: 'Sistema raccolta documenti compravendita.',
        shortDescription: 'Documenti immobiliari via WhatsApp',
        features: ['Lista documenti', 'Upload sicuro', 'Tracciamento stato'],
        benefits: ['Procedure più veloci', 'Meno errori'],
        useCases: ['Agenzie immobiliari', 'Avvocati', 'Banche'],
        timeframe: '2 mesi',
        metrics: ['Velocità completamento', 'Documenti completi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Documenti sicuri?', answer: 'Sì, crittografati e protetti.' }]
    },

    'property-contract-esignature-whatsapp': {
        title: 'Firma Elettronica Contratti',
        description: 'Sistema firma elettronica per contratti immobiliari.',
        shortDescription: 'Firma contratto via WhatsApp',
        features: ['Contratto digitale', 'E-firma', 'Archiviazione sicura'],
        benefits: ['Risparmio tempo', 'Validità legale'],
        useCases: ['Agenzie immobiliari', 'Avvocati', 'Proprietari'],
        timeframe: '3 mesi',
        metrics: ['Contratti firmati', 'Velocità completamento'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Legalmente valido?', answer: 'Sì, riconosciuto e legalmente valido.' }]
    },

    'property-investment-roi-calculator': {
        title: 'Calcolatore ROI Investimento',
        description: 'Calcolo rendimento atteso investimenti immobiliari.',
        shortDescription: 'Calcola ROI immobiliare',
        features: ['Calcolo ROI', 'Analisi mercato', 'Confronto opportunità'],
        benefits: ['Decisioni informate', 'Investimenti più intelligenti'],
        useCases: ['Investitori', 'Agenzie immobiliari', 'Banche'],
        timeframe: '2 mesi',
        metrics: ['Utilizzo calcolatore', 'Investimenti riusciti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Quale precisione?', answer: '85-90% basato su dati di mercato.' }]
    },

    // ==================== INSTAGRAM (Additional) ====================

    'ig-beauty-salon': {
        title: 'Salone Bellezza Instagram',
        description: 'Sistema prenotazione per saloni di bellezza via Instagram.',
        shortDescription: 'Appuntamenti bellezza via Instagram',
        features: ['Mostra servizi', 'Prenotazione diretta', 'Portfolio lavori'],
        benefits: ['Più prenotazioni', 'Marketing gratuito', 'Nuovi clienti'],
        useCases: ['Saloni bellezza', 'Spa', 'Makeup artist'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Follower'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Come prenota il cliente?', answer: 'Via DM o link prenotazione.' }]
    },

    'ig-ecommerce-store': {
        title: 'Negozio Instagram',
        description: 'Negozio online integrato via Instagram.',
        shortDescription: 'Vendi prodotti via Instagram',
        features: ['Catalogo prodotti', 'Ordine DM', 'Pagamento online', 'Integrazione spedizione'],
        benefits: ['Vendite via Instagram', 'Pubblico pronto', 'Costi ridotti'],
        useCases: ['Negozi online', 'Artigiani', 'Piccoli brand'],
        timeframe: '2 mesi',
        metrics: ['Vendite', 'Ordini'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Serve sito web?', answer: 'No, funziona direttamente via Instagram.' }]
    },

    'ig-restaurant-orders': {
        title: 'Ordini Ristorante via Instagram',
        description: 'Sistema presa ordini ristorante via Instagram.',
        shortDescription: 'Ordini cibo via Instagram',
        features: ['Menu digitale', 'Ordine DM', 'Tracciamento ordine'],
        benefits: ['Nuovo canale', 'Clienti più giovani', 'Marketing gratuito'],
        useCases: ['Ristoranti', 'Caffetterie', 'Pasticcerie'],
        timeframe: '2 mesi',
        metrics: ['Ordini', 'Nuovi follower'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Come ordina il cliente?', answer: 'Via DM o menu interattivo.' }]
    },

    // ==================== MESSENGER (Additional) ====================

    'msg-real-estate': {
        title: 'Immobiliare via Messenger',
        description: 'Ricerca e richieste immobiliari via Messenger.',
        shortDescription: 'Cerca immobile via Messenger',
        features: ['Ricerca immobili', 'Prenota visita', 'Richieste', 'Notifiche'],
        benefits: ['Accesso più facile', 'Interazione veloce'],
        useCases: ['Agenzie immobiliari', 'Agenti', 'Portali immobiliari'],
        timeframe: '2 mesi',
        metrics: ['Richieste', 'Prenotazioni'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Collegato a Facebook?', answer: 'Sì, integrazione completa con pagina Facebook.' }]
    },

    'msg-education': {
        title: 'Istruzione via Messenger',
        description: 'Piattaforma apprendimento interattiva via Messenger.',
        shortDescription: 'Impara via Messenger',
        features: ['Lezioni interattive', 'Test', 'Tracciamento progressi', 'Certificati'],
        benefits: ['Apprendimento facile', 'Ampia portata', 'Alta interazione'],
        useCases: ['Scuole', 'Formatori', 'Piattaforme educative'],
        timeframe: '3 mesi',
        metrics: ['Studenti', 'Tasso completamento'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Quali contenuti?', answer: 'Testo, video e test interattivi.' }]
    },

    'msg-travel-booking': {
        title: 'Prenotazione Viaggi via Messenger',
        description: 'Sistema prenotazione voli e hotel via Messenger.',
        shortDescription: 'Prenota viaggio via Messenger',
        features: ['Ricerca voli', 'Prenotazione hotel', 'Pacchetti viaggio', 'Supporto 24/7'],
        benefits: ['Prenotazione facile', 'Prezzi competitivi'],
        useCases: ['Agenzie viaggio', 'Aziende turismo', 'Piattaforme prenotazione'],
        timeframe: '3 mesi',
        metrics: ['Prenotazioni', 'Soddisfazione cliente'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Pagamento supportato?', answer: 'Sì, pagamento sicuro con carta e e-wallet.' }]
    },

    // ==================== NEXT.JS (Additional) ====================

    'next-marketplace': {
        title: 'Marketplace Next.js',
        description: 'Marketplace multi-venditore con tecnologia Next.js.',
        shortDescription: 'Marketplace multi-venditore',
        features: ['Multi-venditore', 'Dashboard', 'Commissioni', 'Valutazioni'],
        benefits: ['Velocità massima', 'SEO eccellente', 'Scalabile'],
        useCases: ['Marketplace online', 'Piattaforme artigiani', 'Mercati locali'],
        timeframe: '4-6 mesi',
        metrics: ['Venditori', 'Vendite', 'Crescita'],
        deliveryTime: '8-12 settimane',
        faqs: [{ question: 'Quanti venditori?', answer: 'Illimitati con alte prestazioni.' }]
    },

    'next-blog-cms': {
        title: 'Blog e CMS Next.js',
        description: 'Blog e sistema gestione contenuti con Next.js.',
        shortDescription: 'Blog professionale veloce',
        features: ['Editor avanzato', 'SEO integrato', 'Categorie', 'Commenti'],
        benefits: ['Velocità massima', 'Ranking migliore'],
        useCases: ['Blogger', 'Aziende', 'Siti notizie'],
        timeframe: '2-3 mesi',
        metrics: ['Visite', 'Ranking ricerca'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Supporta italiano?', answer: 'Sì, RTL completo e multilingue.' }]
    },

    'next-booking-platform': {
        title: 'Piattaforma Prenotazioni Next.js',
        description: 'Piattaforma prenotazioni integrata con Next.js.',
        shortDescription: 'Piattaforma prenotazioni professionale',
        features: ['Prenotazione appuntamenti', 'Pagamento online', 'Calendario intelligente', 'Notifiche'],
        benefits: ['Esperienza fluida', 'Gestione facile'],
        useCases: ['Cliniche', 'Saloni', 'Consulenti', 'Servizi'],
        timeframe: '3-4 mesi',
        metrics: ['Prenotazioni', 'Soddisfazione cliente'],
        deliveryTime: '6-8 settimane',
        faqs: [{ question: 'Più appuntamenti?', answer: 'Sì, più dipendenti e servizi.' }]
    },

    // ==================== SEO (Additional) ====================

    'seo-technical': {
        title: 'SEO Tecnico',
        description: 'Ottimizzazione aspetti tecnici del sito per motori di ricerca.',
        shortDescription: 'Ottimizzazione tecnica SEO',
        features: ['Velocità sito', 'Strutturazione dati', 'Core Web Vitals', 'Crawling e indicizzazione'],
        benefits: ['Ranking migliore', 'Esperienza migliore', 'Prestazioni eccellenti'],
        useCases: ['Grandi siti', 'Negozi', 'Siti notizie'],
        timeframe: '3-6 mesi',
        metrics: ['Velocità sito', 'Core Web Vitals'],
        deliveryTime: 'Continuo',
        faqs: [{ question: 'Differenza da SEO normale?', answer: 'Focus su aspetti tecnici e struttura.' }]
    },

    'seo-content': {
        title: 'SEO Contenuti',
        description: 'Strategia contenuti ottimizzata per motori di ricerca.',
        shortDescription: 'Contenuti ottimizzati SEO',
        features: ['Ricerca parole chiave', 'Creazione contenuti', 'Ottimizzazione articoli', 'Link interni'],
        benefits: ['Traffico organico', 'Più fiducia', 'Più clienti'],
        useCases: ['Blog', 'Aziende', 'Negozi'],
        timeframe: '6-12 mesi',
        metrics: ['Traffico organico', 'Ranking parole chiave'],
        deliveryTime: 'Continuo',
        faqs: [{ question: 'Quanti articoli al mese?', answer: '4-8 articoli secondo il piano.' }]
    },

    'seo-enterprise': {
        title: 'SEO Enterprise',
        description: 'Strategia SEO completa per grandi aziende.',
        shortDescription: 'SEO per grandi aziende',
        features: ['Strategia completa', 'Team specializzato', 'Report esecutivi', 'Integrazione marketing'],
        benefits: ['Dominio mercato', 'Crescita sostenibile', 'ROI alto'],
        useCases: ['Grandi aziende', 'Banche', 'Multinazionali'],
        timeframe: '12+ mesi',
        metrics: ['Quota mercato', 'Traffico organico', 'Ricavi'],
        deliveryTime: 'Continuo',
        faqs: [{ question: 'Quale differenza?', answer: 'Strategia completa e personalizzata con team specializzato.' }]
    },

    // ==================== AI AUTOMATION (Additional) ====================

    'auto-marketing': {
        title: 'Automazione Marketing IA',
        description: 'Automazione campagne marketing e interazione clienti.',
        shortDescription: 'Marketing automatizzato con IA',
        features: ['Campagne automatiche', 'Segmentazione intelligente', 'Contenuti personalizzati', 'Analytics'],
        benefits: ['Più efficienza', 'Targeting più preciso', 'Risultati migliori'],
        useCases: ['Agenzie marketing', 'Negozi', 'SaaS'],
        timeframe: '3 mesi',
        metrics: ['Conversione', 'ROI', 'Engagement'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Quali canali?', answer: 'Email, WhatsApp, SMS e pubblicità.' }]
    },

    'auto-operations': {
        title: 'Automazione Operazioni IA',
        description: 'Automazione processi operativi di routine.',
        shortDescription: 'Processi automatizzati con IA',
        features: ['Automazione attività', 'Integrazione sistemi', 'Report intelligenti', 'Avvisi'],
        benefits: ['Risparmio tempo', 'Meno errori', 'Più efficienza'],
        useCases: ['Aziende', 'Fabbriche', 'Logistica'],
        timeframe: '4 mesi',
        metrics: ['Tempo risparmiato', 'Efficienza'],
        deliveryTime: '6-8 settimane',
        faqs: [{ question: 'Quali processi?', answer: 'Inserimento dati, report, approvazioni e notifiche.' }]
    },

    'auto-data-analytics': {
        title: 'Analisi Dati IA',
        description: 'Analisi dati ed estrazione insight azionabili.',
        shortDescription: 'Analytics intelligenti con IA',
        features: ['Analisi automatica', 'Previsioni', 'Dashboard', 'Avvisi intelligenti'],
        benefits: ['Decisioni migliori', 'Previsioni precise', 'Insight profondi'],
        useCases: ['Aziende', 'Commercio', 'Servizi finanziari'],
        timeframe: '4 mesi',
        metrics: ['Precisione previsioni', 'Decisioni migliorate'],
        deliveryTime: '6-8 settimane',
        faqs: [{ question: 'Quali dati?', answer: 'Vendite, clienti, operazioni e marketing.' }]
    },

    // ==================== OTHER WHATSAPP ====================

    'travel-booking-assistant-whatsapp': {
        title: 'Assistente Prenotazione Viaggi',
        description: 'Assistente intelligente per prenotazioni voli e hotel.',
        shortDescription: 'Prenota viaggio via WhatsApp',
        features: ['Ricerca voli', 'Prenotazione hotel', 'Visti', 'Pacchetti'],
        benefits: ['Prenotazione facile', 'Prezzi competitivi', 'Supporto 24/7'],
        useCases: ['Agenzie viaggio', 'Aziende turismo', 'Compagnie aeree'],
        timeframe: '4 mesi',
        metrics: ['Prenotazioni', 'Soddisfazione cliente'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Pagamento supportato?', answer: 'Sì, carte e portafogli elettronici.' }]
    },

    'banking-account-assistant-whatsapp': {
        title: 'Assistente Conto Bancario',
        description: 'Servizi bancari intelligenti via WhatsApp.',
        shortDescription: 'Servizi bancari via WhatsApp',
        features: ['Saldo', 'Estratto conto', 'Bonifici', 'Pagamento bollette'],
        benefits: ['Servizio 24/7', 'Transazioni veloci', 'Alta sicurezza'],
        useCases: ['Banche', 'Portafogli digitali', 'FinTech'],
        timeframe: '6 mesi',
        metrics: ['Transazioni', 'Soddisfazione cliente'],
        deliveryTime: '8-12 settimane',
        faqs: [{ question: 'È sicuro?', answer: 'Sì, crittografia bancaria e autenticazione a due fattori.' }]
    },

    'b2b-lead-qualification-whatsapp': {
        title: 'Qualificazione Lead B2B',
        description: 'Sistema qualificazione e follow-up clienti business.',
        shortDescription: 'Qualifica lead B2B via WhatsApp',
        features: ['Qualificazione automatica', 'Pianificazione meeting', 'Follow-up', 'Integrazione CRM'],
        benefits: ['Lead qualificati', 'Risparmio tempo', 'Conversione più alta'],
        useCases: ['Aziende B2B', 'SaaS', 'Servizi professionali'],
        timeframe: '3 mesi',
        metrics: ['Qualità lead', 'Conversione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Come la qualificazione?', answer: 'Domande intelligenti identificano esigenze e budget.' }]
    },

    'logistics-shipment-tracking-whatsapp': {
        title: 'Tracciamento Spedizioni Logistica',
        description: 'Sistema tracciamento spedizioni e gestione logistica.',
        shortDescription: 'Traccia spedizioni via WhatsApp',
        features: ['Tracciamento tempo reale', 'Notifiche', 'Data consegna', 'Valutazione'],
        benefits: ['Trasparenza', 'Soddisfazione cliente', 'Più efficienza'],
        useCases: ['Società spedizione', 'Logistica', 'Distribuzione'],
        timeframe: '3 mesi',
        metrics: ['Soddisfazione cliente', 'Precisione tracciamento'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Frequenza aggiornamenti?', answer: 'Ad ogni cambio di stato.' }]
    },

    'insurance-claim-filing-whatsapp': {
        title: 'Presentazione Reclami Assicurazione',
        description: 'Sistema presentazione e tracciamento reclami assicurativi.',
        shortDescription: 'Presenta reclamo via WhatsApp',
        features: ['Presenta reclamo', 'Upload documenti', 'Tracciamento stato', 'Comunicazione'],
        benefits: ['Procedure più veloci', 'Trasparenza', 'Più soddisfazione'],
        useCases: ['Compagnie assicurazione', 'Broker', 'Banche'],
        timeframe: '4 mesi',
        metrics: ['Velocità elaborazione', 'Soddisfazione cliente'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Quanto tempo?', answer: '50% più veloce del metodo tradizionale.' }]
    },

    'automotive-service-booking-whatsapp': {
        title: 'Prenotazione Servizi Auto',
        description: 'Sistema prenotazione per manutenzione e servizi auto.',
        shortDescription: 'Prenota manutenzione auto via WhatsApp',
        features: ['Prenotazione manutenzione', 'Promemoria', 'Tracciamento riparazione', 'Preventivi'],
        benefits: ['Manutenzione regolare', 'Clienti fedeli', 'Ricavi continui'],
        useCases: ['Officine', 'Concessionari', 'Centri servizio'],
        timeframe: '3 mesi',
        metrics: ['Prenotazioni', 'Clienti ricorrenti'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Promemoria manutenzione?', answer: 'Sì, promemoria automatici.' }]
    },

    'event-ticketing-management-whatsapp': {
        title: 'Gestione Biglietti Eventi',
        description: 'Sistema vendita e gestione biglietti eventi.',
        shortDescription: 'Biglietti eventi via WhatsApp',
        features: ['Vendita biglietti', 'QR ingresso', 'Promemoria', 'Cancellazione/Rimborso'],
        benefits: ['Vendite più facili', 'Esperienza fluida', 'Dati'],
        useCases: ['Organizzatori eventi', 'Teatri', 'Conferenze'],
        timeframe: '2 mesi',
        metrics: ['Vendite biglietti', 'Presenza'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Come ricevo il biglietto?', answer: 'QR digitale via WhatsApp.' }]
    },

    'gym-membership-class-booking-whatsapp': {
        title: 'Abbonamento Palestra e Prenotazione Corsi',
        description: 'Sistema gestione abbonamenti palestra e prenotazione corsi.',
        shortDescription: 'Palestra via WhatsApp',
        features: ['Rinnovo abbonamento', 'Prenotazione corsi', 'Programmi allenamento', 'Contatto trainer'],
        benefits: ['Membri fedeli', 'Migliore presenza', 'Comunicazione continua'],
        useCases: ['Palestre', 'Studi', 'Trainer'],
        timeframe: '2 mesi',
        metrics: ['Rinnovi', 'Presenza'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Come prenoto un corso?', answer: 'Scegli giorno e ora e ricevi conferma.' }]
    },

    'legal-consultation-booking-whatsapp': {
        title: 'Prenotazione Consulenza Legale',
        description: 'Sistema prenotazione per consulenze legali.',
        shortDescription: 'Consulenza avvocato via WhatsApp',
        features: ['Prenotazione appuntamento', 'Consulenza iniziale', 'Invio documenti', 'Tracciamento caso'],
        benefits: ['Accesso più facile', 'Costi ridotti', 'Riservatezza'],
        useCases: ['Studi legali', 'Avvocati indipendenti', 'Aziende'],
        timeframe: '2 mesi',
        metrics: ['Consulenze', 'Soddisfazione cliente'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Riservato?', answer: 'Sì, riservatezza avvocato-cliente completa.' }]
    },

    'salon-beauty-appointment-whatsapp': {
        title: 'Appuntamenti Salone Bellezza',
        description: 'Sistema prenotazione per saloni di bellezza e spa.',
        shortDescription: 'Prenota appuntamento via WhatsApp',
        features: ['Prenotazione servizi', 'Scelta dipendente', 'Offerte', 'Promemoria'],
        benefits: ['Più prenotazioni', 'Meno cancellazioni', 'Fedeltà cliente'],
        useCases: ['Saloni', 'Spa', 'Cliniche estetiche'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Soddisfazione cliente'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Scelta dipendente?', answer: 'Sì, scegli il tuo preferito.' }]
    },

    'pet-care-vet-booking-whatsapp': {
        title: 'Prenotazione Veterinario e Cura Animali',
        description: 'Sistema prenotazione per veterinari e servizi cura animali.',
        shortDescription: 'Cura animali via WhatsApp',
        features: ['Prenotazione appuntamento', 'Promemoria vaccini', 'Consigli', 'Ordine prodotti'],
        benefits: ['Cure migliori', 'Clienti fedeli', 'Vendite aggiuntive'],
        useCases: ['Cliniche veterinarie', 'Negozi animali', 'Hotel animali'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Vaccinazioni regolari'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Promemoria vaccini?', answer: 'Sì, promemoria automatici.' }]
    },

    'student-counseling-appointment-whatsapp': {
        title: 'Appuntamenti Orientamento Studenti',
        description: 'Sistema prenotazione per sessioni orientamento e supporto.',
        shortDescription: 'Appuntamenti orientamento via WhatsApp',
        features: ['Prenotazione appuntamento', 'Riservatezza totale', 'Promemoria', 'Risorse aiuto'],
        benefits: ['Accesso più facile al supporto', 'Privacy', 'Assistenza continua'],
        useCases: ['Scuole', 'Università', 'Centri orientamento'],
        timeframe: '2 mesi',
        metrics: ['Numero sessioni', 'Soddisfazione studenti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Riservato?', answer: 'Sì, privacy totale e crittografia.' }]
    },

    'educational-content-distribution-whatsapp': {
        title: 'Distribuzione Contenuti Educativi',
        description: 'Sistema invio materiali e file didattici.',
        shortDescription: 'Distribuisci materiale educativo via WhatsApp',
        features: ['Invio file', 'Video', 'Quiz brevi', 'Tracciamento lettura'],
        benefits: ['Accesso facile', 'Interazione maggiore', 'Apprendimento continuo'],
        useCases: ['Scuole', 'Formatori', 'Piattaforme educative'],
        timeframe: '2 mesi',
        metrics: ['Tasso visualizzazione', 'Interazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Quali tipi di file?', answer: 'PDF, Word, video, immagini e link.' }]
    },

    // ==================== AGRICOLTURA ====================

    'farm-equipment-inquiry': {
        title: 'Richiesta Attrezzature Agricole',
        description: 'Sistema richiesta attrezzature agricole.',
        shortDescription: 'Attrezzature agricole via WhatsApp',
        features: ['Catalogo', 'Prezzi', 'Disponibilità', 'Ordini'],
        benefits: ['Accesso rapido', 'Confronto', 'Ordine facile'],
        useCases: ['Fornitori agricoli', 'Cooperative', 'Agricoltori'],
        timeframe: '2 mesi',
        metrics: ['Richieste', 'Vendite'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Consegna?', answer: 'Sì, in tutta la regione.' }]
    },

    'crop-weather-alerts': {
        title: 'Allerte Meteo Colture',
        description: 'Sistema allerte meteo per agricoltori.',
        shortDescription: 'Allerte meteo via WhatsApp',
        features: ['Previsioni', 'Allerte gelo', 'Pioggia', 'Consigli'],
        benefits: ['Protezione raccolti', 'Pianificazione', 'Decisioni informate'],
        useCases: ['Agricoltori', 'Cooperative', 'Assicurazioni agricole'],
        timeframe: '2 mesi',
        metrics: ['Allerte', 'Perdite evitate'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Frequenza?', answer: 'Giornaliera e allerte urgenti.' }]
    },

    'livestock-management': {
        title: 'Gestione Bestiame',
        description: 'Sistema monitoraggio bestiame.',
        shortDescription: 'Gestione bestiame via WhatsApp',
        features: ['Inventario', 'Salute', 'Vaccinazioni', 'Riproduzione'],
        benefits: ['Miglior monitoraggio', 'Salute animali', 'Produzione ottimale'],
        useCases: ['Allevatori', 'Veterinari', 'Fattorie'],
        timeframe: '3 mesi',
        metrics: ['Animali', 'Salute'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Quale bestiame?', answer: 'Bovini, ovini, caprini, suini.' }]
    },

    'harvest-coordination': {
        title: 'Coordinamento Raccolto',
        description: 'Sistema coordinamento raccolti.',
        shortDescription: 'Coordina raccolto via WhatsApp',
        features: ['Pianificazione', 'Squadre', 'Attrezzature', 'Stoccaggio'],
        benefits: ['Efficienza', 'Meno perdite', 'Coordinamento'],
        useCases: ['Aziende agricole', 'Cooperative', 'Lavoratori'],
        timeframe: '2 mesi',
        metrics: ['Raccolti', 'Efficienza'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Squadre?', answer: 'Sì, coordinamento in tempo reale.' }]
    },

    // ==================== MANIFATTURA ====================

    'factory-maintenance-alerts': {
        title: 'Allerte Manutenzione Fabbrica',
        description: 'Sistema allerte manutenzione industriale.',
        shortDescription: 'Manutenzione fabbrica via WhatsApp',
        features: ['Allerte guasti', 'Pianificazione', 'Ricambi', 'Report'],
        benefits: ['Meno fermi', 'Manutenzione preventiva', 'Documentazione'],
        useCases: ['Fabbriche', 'Officine', 'Manutenzione'],
        timeframe: '3 mesi',
        metrics: ['Tempo fermo', 'Costi'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Integrazione?', answer: 'Con sistemi esistenti.' }]
    },

    'quality-control-updates': {
        title: 'Aggiornamenti Qualità',
        description: 'Sistema controllo qualità.',
        shortDescription: 'Controllo qualità via WhatsApp',
        features: ['Report', 'Allerte difetti', 'Foto', 'Tracciamento'],
        benefits: ['Qualità migliorata', 'Reattività', 'Tracciabilità'],
        useCases: ['Fabbriche', 'Qualità', 'Produzione'],
        timeframe: '2 mesi',
        metrics: ['Difetti', 'Qualità'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Foto?', answer: 'Sì, documentazione visiva.' }]
    },

    'supply-chain-tracking': {
        title: 'Tracciamento Supply Chain',
        description: 'Sistema tracciamento logistica.',
        shortDescription: 'Logistica via WhatsApp',
        features: ['Tracciamento ordini', 'Scorte', 'Allerte', 'Tempi'],
        benefits: ['Visibilità', 'Meno rotture stock', 'Pianificazione'],
        useCases: ['Logistica', 'Acquisti', 'Produzione'],
        timeframe: '3 mesi',
        metrics: ['Tempi', 'Rotture stock'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Real time?', answer: 'Sì, aggiornamenti istantanei.' }]
    },

    // ==================== COSTRUZIONI ====================

    'construction-project-updates': {
        title: 'Aggiornamenti Cantiere',
        description: 'Sistema comunicazione cantieri.',
        shortDescription: 'Cantiere via WhatsApp',
        features: ['Foto', 'Avanzamento', 'Problemi', 'Pianificazione'],
        benefits: ['Clienti informati', 'Trasparenza', 'Documentazione'],
        useCases: ['Imprese edili', 'Committenti', 'Architetti'],
        timeframe: '2 mesi',
        metrics: ['Soddisfazione', 'Comunicazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Frequenza?', answer: 'Giornaliera o settimanale.' }]
    },

    'contractor-coordination': {
        title: 'Coordinamento Subappaltatori',
        description: 'Sistema coordinamento subappaltatori.',
        shortDescription: 'Coordina squadre via WhatsApp',
        features: ['Pianificazione', 'Compiti', 'Presenze', 'Documenti'],
        benefits: ['Coordinamento', 'Meno ritardi', 'Documentazione'],
        useCases: ['Impresari', 'Capi progetto', 'Subappaltatori'],
        timeframe: '2 mesi',
        metrics: ['Ritardi', 'Efficienza'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Numero squadre?', answer: 'Illimitato.' }]
    },

    'material-ordering': {
        title: 'Ordini Materiali',
        description: 'Sistema ordini materiali edili.',
        shortDescription: 'Ordina materiali via WhatsApp',
        features: ['Catalogo', 'Prezzi', 'Ordini', 'Consegna'],
        benefits: ['Rapidità', 'Meno errori', 'Tracciamento'],
        useCases: ['Imprese edili', 'Rivendite', 'Artigiani'],
        timeframe: '2 mesi',
        metrics: ['Ordini', 'Tempi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Consegna cantiere?', answer: 'Sì, direttamente.' }]
    },

    // ==================== SERVIZI DOMESTICI ====================

    'plumbing-service-booking': {
        title: 'Prenotazione Idraulico',
        description: 'Sistema prenotazione idraulico.',
        shortDescription: 'Idraulico via WhatsApp',
        features: ['Descrizione problema', 'Foto', 'Preventivo', 'Appuntamento'],
        benefits: ['Intervento rapido', 'Preventivo trasparente', 'Tracciamento'],
        useCases: ['Idraulici', 'Amministratori', 'Privati'],
        timeframe: '2 mesi',
        metrics: ['Interventi', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Urgenza?', answer: 'Sì, intervento rapido.' }]
    },

    'electrical-service-booking': {
        title: 'Prenotazione Elettricista',
        description: 'Sistema prenotazione elettricista.',
        shortDescription: 'Elettricista via WhatsApp',
        features: ['Descrizione', 'Urgenza', 'Preventivo', 'Appuntamento'],
        benefits: ['Sicurezza', 'Rapidità', 'Professionalità'],
        useCases: ['Elettricisti', 'Amministratori', 'Privati'],
        timeframe: '2 mesi',
        metrics: ['Interventi', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Pronto intervento 24/7?', answer: 'Sì, servizio emergenza.' }]
    },

    'hvac-service-booking': {
        title: 'Prenotazione Climatizzazione',
        description: 'Sistema prenotazione climatizzazione/riscaldamento.',
        shortDescription: 'Clima/riscaldamento via WhatsApp',
        features: ['Tipo intervento', 'Marca', 'Appuntamento', 'Contratto'],
        benefits: ['Comfort', 'Manutenzione regolare', 'Efficienza'],
        useCases: ['Tecnici clima', 'Idraulici', 'Amministratori'],
        timeframe: '2 mesi',
        metrics: ['Interventi', 'Contratti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Contratto manutenzione?', answer: 'Sì, con promemoria.' }]
    },

    'locksmith-service': {
        title: 'Servizio Fabbro',
        description: 'Sistema servizio fabbro.',
        shortDescription: 'Fabbro via WhatsApp',
        features: ['Tipo urgenza', 'Posizione', 'Preventivo', 'Intervento'],
        benefits: ['Rapidità', 'Prezzo fisso', 'Sicurezza'],
        useCases: ['Fabbri', 'Amministratori', 'Privati'],
        timeframe: '2 mesi',
        metrics: ['Interventi', 'Tempi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: '24/7?', answer: 'Sì, servizio emergenza.' }]
    },

    'handyman-service': {
        title: 'Servizio Tuttofare',
        description: 'Sistema servizi tuttofare.',
        shortDescription: 'Tuttofare via WhatsApp',
        features: ['Tipo lavori', 'Foto', 'Preventivo', 'Appuntamento'],
        benefits: ['Versatilità', 'Risparmio', 'Qualità'],
        useCases: ['Tuttofare', 'Amministratori', 'Privati'],
        timeframe: '2 mesi',
        metrics: ['Lavori', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Quali lavori?', answer: 'Montaggio, riparazioni, piccoli lavori.' }]
    },

    // ==================== PULIZIE ====================

    'home-cleaning-booking': {
        title: 'Prenotazione Pulizie Casa',
        description: 'Sistema prenotazione pulizie.',
        shortDescription: 'Pulizie via WhatsApp',
        features: ['Tipo alloggio', 'Frequenza', 'Servizi', 'Prenotazione'],
        benefits: ['Casa pulita', 'Regolarità', 'Fiducia'],
        useCases: ['Imprese pulizie', 'Indipendenti', 'Privati'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Fidelizzazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Prodotti?', answer: 'Inclusi o ecologici su richiesta.' }]
    },

    'office-cleaning-booking': {
        title: 'Pulizie Uffici',
        description: 'Sistema prenotazione pulizie professionali.',
        shortDescription: 'Pulizie uffici via WhatsApp',
        features: ['Superficie', 'Frequenza', 'Servizi', 'Contratto'],
        benefits: ['Ambiente sano', 'Immagine', 'Regolarità'],
        useCases: ['Imprese pulizie', 'Aziende', 'Amministratori'],
        timeframe: '2 mesi',
        metrics: ['Contratti', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Weekend?', answer: 'Sì, orari flessibili.' }]
    },

    // ==================== SICUREZZA ====================

    'security-guard-service': {
        title: 'Servizio Vigilanza',
        description: 'Sistema richiesta guardie.',
        shortDescription: 'Vigilanza via WhatsApp',
        features: ['Tipo missione', 'Durata', 'Numero guardie', 'Preventivo'],
        benefits: ['Protezione', 'Professionalità', 'Reattività'],
        useCases: ['Agenzie sicurezza', 'Aziende', 'Eventi'],
        timeframe: '2 mesi',
        metrics: ['Missioni', 'Soddisfazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Armato?', answer: 'Secondo necessità e normativa.' }]
    },

    'alarm-monitoring': {
        title: 'Telesorveglianza',
        description: 'Sistema gestione telesorveglianza.',
        shortDescription: 'Allarme via WhatsApp',
        features: ['Allerte', 'Stato sistema', 'Intervento', 'Storico'],
        benefits: ['Tranquillità', 'Reattività', 'Controllo'],
        useCases: ['Telesorveglianza', 'Assicuratori', 'Privati'],
        timeframe: '3 mesi',
        metrics: ['Allerte', 'Interventi'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Tempo intervento?', answer: 'Secondo formula.' }]
    },

    // ==================== TELECOMUNICAZIONI ====================

    'telecom-plan-inquiry': {
        title: 'Richiesta Piano',
        description: 'Sistema richiesta piani telefonici.',
        shortDescription: 'Piano via WhatsApp',
        features: ['Confronto', 'Simulazione', 'Sottoscrizione', 'Supporto'],
        benefits: ['Miglior prezzo', 'Semplicità', 'Rapidità'],
        useCases: ['Operatori', 'Distributori', 'Clienti'],
        timeframe: '2 mesi',
        metrics: ['Sottoscrizioni', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Portabilità?', answer: 'Sì, gestiamo tutto.' }]
    },

    'telecom-bill-inquiry': {
        title: 'Consultazione Bolletta',
        description: 'Sistema consultazione bollette.',
        shortDescription: 'Bolletta telecom via WhatsApp',
        features: ['Vedi bolletta', 'Dettagli', 'Pagamento', 'Storico'],
        benefits: ['Trasparenza', 'Pagamento facile', 'Controllo'],
        useCases: ['Operatori', 'Clienti'],
        timeframe: '1 mese',
        metrics: ['Consultazioni', 'Pagamenti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'PDF?', answer: 'Sì, scaricabile.' }]
    },

    // ==================== HR & RECLUTAMENTO ====================

    'job-application-tracking': {
        title: 'Tracciamento Candidatura',
        description: 'Sistema tracciamento candidature.',
        shortDescription: 'Candidatura via WhatsApp',
        features: ['Stato', 'Colloqui', 'Documenti', 'Notifiche'],
        benefits: ['Trasparenza', 'Comunicazione', 'Esperienza candidato'],
        useCases: ['HR', 'Recruiter', 'Candidati'],
        timeframe: '2 mesi',
        metrics: ['Candidature', 'Tempo assunzione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Notifiche?', answer: 'Sì, ad ogni fase.' }]
    },

    'employee-onboarding': {
        title: 'Onboarding Dipendenti',
        description: 'Sistema onboarding nuovi dipendenti.',
        shortDescription: 'Onboarding via WhatsApp',
        features: ['Checklist', 'Documenti', 'Formazione', 'Contatti'],
        benefits: ['Integrazione riuscita', 'Produttività rapida', 'Benessere'],
        useCases: ['HR', 'Manager', 'Nuovi dipendenti'],
        timeframe: '2 mesi',
        metrics: ['Integrazioni', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Durata?', answer: 'Programma personalizzabile.' }]
    },

    'leave-management': {
        title: 'Gestione Ferie',
        description: 'Sistema gestione ferie.',
        shortDescription: 'Ferie via WhatsApp',
        features: ['Richiesta', 'Saldo', 'Approvazione', 'Calendario'],
        benefits: ['Semplicità', 'Visibilità', 'Rapidità'],
        useCases: ['HR', 'Manager', 'Dipendenti'],
        timeframe: '2 mesi',
        metrics: ['Richieste', 'Tempo elaborazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Tipi ferie?', answer: 'Tutti tipi configurabili.' }]
    },

    // ==================== MATRIMONIO ====================

    'wedding-planning-service': {
        title: 'Organizzazione Matrimonio',
        description: 'Sistema comunicazione organizzatori.',
        shortDescription: 'Matrimonio via WhatsApp',
        features: ['Checklist', 'Fornitori', 'Pianificazione', 'Budget'],
        benefits: ['Organizzazione', 'Meno stress', 'Comunicazione'],
        useCases: ['Wedding planner', 'Coppie', 'Location'],
        timeframe: '3 mesi',
        metrics: ['Matrimoni', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Per coppie?', answer: 'Sì, coppie e planner.' }]
    },

    'wedding-guest-management': {
        title: 'Gestione Invitati Matrimonio',
        description: 'Sistema gestione invitati.',
        shortDescription: 'Invitati matrimonio via WhatsApp',
        features: ['Inviti', 'RSVP', 'Piano tavoli', 'Info'],
        benefits: ['Gestione facile', 'Meno telefonate', 'Organizzazione'],
        useCases: ['Coppie', 'Planner', 'Location'],
        timeframe: '2 mesi',
        metrics: ['Tasso risposta', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Promemoria?', answer: 'Sì, automatici.' }]
    },

    // ==================== NO-PROFIT ====================

    'nonprofit-donation': {
        title: 'Donazioni Associazione',
        description: 'Sistema raccolta donazioni.',
        shortDescription: 'Donazioni via WhatsApp',
        features: ['Modulo donazione', 'Campagne', 'Ricevute', 'Aggiornamenti'],
        benefits: ['Più donazioni', 'Semplicità', 'Trasparenza'],
        useCases: ['Associazioni', 'ONG', 'Fondazioni'],
        timeframe: '2 mesi',
        metrics: ['Donazioni', 'Donatori'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Ricevuta fiscale?', answer: 'Sì, automatica.' }]
    },

    'nonprofit-volunteer': {
        title: 'Gestione Volontari',
        description: 'Sistema coordinamento volontari.',
        shortDescription: 'Volontari via WhatsApp',
        features: ['Iscrizione', 'Pianificazione', 'Missioni', 'Ore'],
        benefits: ['Organizzazione', 'Coinvolgimento', 'Riconoscimento'],
        useCases: ['Associazioni', 'ONG', 'Eventi'],
        timeframe: '2 mesi',
        metrics: ['Volontari', 'Ore'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Attestati?', answer: 'Sì, per le ore.' }]
    },

    // ==================== CONTABILITÀ ====================

    'accounting-tax-filing': {
        title: 'Dichiarazione Fiscale',
        description: 'Sistema assistenza dichiarazione fiscale.',
        shortDescription: 'Tasse via WhatsApp',
        features: ['Documenti', 'Calcolo', 'Promemoria', 'Monitoraggio'],
        benefits: ['Meno stress', 'Niente ritardi', 'Semplicità'],
        useCases: ['Commercialisti', 'Consulenti', 'Privati'],
        timeframe: '3 mesi',
        metrics: ['Dichiarazioni', 'Precisione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Privati e aziende?', answer: 'Sì, entrambi.' }]
    },

    'accounting-expense-tracking': {
        title: 'Tracciamento Spese',
        description: 'Sistema tracciamento spese.',
        shortDescription: 'Spese via WhatsApp',
        features: ['Foto scontrini', 'Categorie', 'Report', 'Export'],
        benefits: ['Visione chiara', 'Preparazione fiscale', 'Semplicità'],
        useCases: ['Aziende', 'Freelance', 'Commercialisti'],
        timeframe: '2 mesi',
        metrics: ['Scontrini', 'Precisione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'OCR?', answer: 'Sì, riconoscimento automatico.' }]
    },

    // ==================== DENTISTA ====================

    'dental-appointment-booking': {
        title: 'Appuntamento Dentista',
        description: 'Sistema prenotazione appuntamenti dentali.',
        shortDescription: 'Dentista via WhatsApp',
        features: ['Prenotazione', 'Tipo cura', 'Promemoria', 'Cartella'],
        benefits: ['Prenotazione facile', 'Meno assenze', 'Cartella completa'],
        useCases: ['Studi dentistici', 'Cliniche', 'Pazienti'],
        timeframe: '2 mesi',
        metrics: ['Appuntamenti', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Urgenze?', answer: 'Sì, slot prioritari.' }]
    },

    'dental-treatment-reminders': {
        title: 'Promemoria Cure Dentali',
        description: 'Sistema promemoria cure dentali.',
        shortDescription: 'Promemoria denti via WhatsApp',
        features: ['Controlli', 'Follow-up', 'Consigli', 'Promozioni'],
        benefits: ['Salute orale', 'Fidelizzazione', 'Più visite'],
        useCases: ['Studi', 'Igienisti', 'Cliniche'],
        timeframe: '1 mese',
        metrics: ['Visite ricorrenti', 'Salute'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Frequenza?', answer: 'Ogni 6 mesi o secondo piano.' }]
    },

    // ==================== OTTICA ====================

    'optometry-appointment': {
        title: 'Appuntamento Ottico',
        description: 'Sistema prenotazione appuntamenti ottica.',
        shortDescription: 'Ottico via WhatsApp',
        features: ['Prenotazione', 'Tipo esame', 'Promemoria', 'Risultati'],
        benefits: ['Prenotazione facile', 'Monitoraggio salute', 'Promemoria'],
        useCases: ['Ottici', 'Oftalmologi', 'Cliniche'],
        timeframe: '2 mesi',
        metrics: ['Appuntamenti', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Risultati digitali?', answer: 'Sì, via WhatsApp.' }]
    },

    'optometry-lens-orders': {
        title: 'Ordine Occhiali/Lenti',
        description: 'Sistema ordini ottica.',
        shortDescription: 'Occhiali via WhatsApp',
        features: ['Ordine', 'Tracciamento', 'Pronto', 'Pagamento'],
        benefits: ['Semplicità', 'Notifica', 'Consegna'],
        useCases: ['Ottici', 'E-commerce ottica', 'Pazienti'],
        timeframe: '2 mesi',
        metrics: ['Ordini', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Consegna?', answer: 'Sì, o ritiro.' }]
    },

    // ==================== YOGA & BENESSERE ====================

    'yoga-class-booking': {
        title: 'Corsi di Yoga',
        description: 'Sistema prenotazione corsi yoga.',
        shortDescription: 'Yoga via WhatsApp',
        features: ['Orari', 'Prenotazione', 'Insegnante', 'Promemoria'],
        benefits: ['Prenotazione facile', 'Flessibilità', 'Promemoria'],
        useCases: ['Studi yoga', 'Insegnanti', 'Centri benessere'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Partecipazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Tutti livelli?', answer: 'Sì, principianti ad avanzati.' }]
    },

    'yoga-online-sessions': {
        title: 'Yoga Online',
        description: 'Sistema corsi yoga online.',
        shortDescription: 'Yoga online via WhatsApp',
        features: ['Pianificazione', 'Link', 'Replay', 'Progressione'],
        benefits: ['Da casa', 'Flessibilità', 'Replay'],
        useCases: ['Insegnanti', 'Piattaforme', 'Studi'],
        timeframe: '2 mesi',
        metrics: ['Sessioni', 'Visualizzazioni'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Replay?', answer: 'Sì, per abbonati.' }]
    },

    // ==================== ARTI MARZIALI ====================

    'martialarts-class-booking': {
        title: 'Corsi Arti Marziali',
        description: 'Sistema prenotazione arti marziali.',
        shortDescription: 'Arti marziali via WhatsApp',
        features: ['Pianificazione', 'Disciplina', 'Prenotazione', 'Gradi'],
        benefits: ['Prenotazione facile', 'Monitoraggio progressione', 'Organizzazione'],
        useCases: ['Dojo', 'Club', 'Istruttori'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Passaggi grado'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Quali discipline?', answer: 'Karate, Judo, Taekwondo, ecc.' }]
    },

    // ==================== BARBIERE ====================

    'barbershop-booking': {
        title: 'Prenotazione Barbiere',
        description: 'Sistema prenotazione barbiere.',
        shortDescription: 'Barbiere via WhatsApp',
        features: ['Prenotazione', 'Scelta barbiere', 'Servizi', 'Promemoria'],
        benefits: ['Niente attesa', 'Barbiere preferito', 'Promemoria'],
        useCases: ['Saloni', 'Barbershop', 'Barbieri'],
        timeframe: '2 mesi',
        metrics: ['Appuntamenti', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Scelta barbiere?', answer: 'Sì, il tuo preferito.' }]
    },

    // ==================== CATERING ====================

    'catering-quote-request': {
        title: 'Richiesta Preventivo Catering',
        description: 'Sistema richiesta preventivo catering.',
        shortDescription: 'Catering via WhatsApp',
        features: ['Dettagli evento', 'Menu', 'Preventivo', 'Prenotazione'],
        benefits: ['Preventivo rapido', 'Confronto', 'Prenotazione facile'],
        useCases: ['Catering', 'Hotel', 'Ristoranti'],
        timeframe: '2 mesi',
        metrics: ['Richieste', 'Conversioni'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Numero persone?', answer: 'Da 10 a 10.000.' }]
    },

    // ==================== TAXI ====================

    'taxi-booking': {
        title: 'Prenotazione Taxi',
        description: 'Sistema prenotazione taxi.',
        shortDescription: 'Taxi via WhatsApp',
        features: ['Prenotazione immediata', 'Tracciamento', 'Stima prezzo', 'Pagamento'],
        benefits: ['Semplice', 'Sicuro', 'Trasparente'],
        useCases: ['Taxi', 'Autisti', 'App'],
        timeframe: '3 mesi',
        metrics: ['Corse', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Prenotazione anticipo?', answer: 'Sì, fino a una settimana.' }]
    },

    'taxi-airport-transfer': {
        title: 'Transfer Aeroporto',
        description: 'Sistema transfer aeroporto.',
        shortDescription: 'Transfer aeroporto via WhatsApp',
        features: ['Prenotazione', 'Monitoraggio volo', 'Cartello nome', 'Bagagli'],
        benefits: ['Affidabile', 'Pratico', 'Prezzo fisso'],
        useCases: ['Taxi', 'Hotel', 'Agenzie viaggio'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Soddisfazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Volo in ritardo?', answer: 'Monitoriamo il tuo volo.' }]
    },

    // ==================== BARCHE ====================

    'boat-charter': {
        title: 'Noleggio Barca',
        description: 'Sistema noleggio barche/yacht.',
        shortDescription: 'Barca via WhatsApp',
        features: ['Catalogo', 'Prenotazione', 'Servizi', 'Equipaggio'],
        benefits: ['Esperienza lusso', 'Prenotazione facile', 'Scelta'],
        useCases: ['Noleggiatori', 'Porti', 'Turismo'],
        timeframe: '3 mesi',
        metrics: ['Prenotazioni', 'Ricavi'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Con equipaggio?', answer: 'Sì, o senza.' }]
    },

    // ==================== FIORISTA ====================

    'flower-order-delivery': {
        title: 'Ordine Fiori',
        description: 'Sistema ordine e consegna fiori.',
        shortDescription: 'Fiori via WhatsApp',
        features: ['Catalogo', 'Personalizzazione', 'Messaggio', 'Consegna'],
        benefits: ['Semplice', 'Consegna rapida', 'Bei bouquet'],
        useCases: ['Fioristi', 'Planner', 'Hotel'],
        timeframe: '2 mesi',
        metrics: ['Ordini', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Consegna stesso giorno?', answer: 'Sì, in città.' }]
    },

    // ==================== PANETTERIA ====================

    'cake-custom-order': {
        title: 'Ordine Torta',
        description: 'Sistema ordine torte personalizzate.',
        shortDescription: 'Torta via WhatsApp',
        features: ['Design', 'Personalizzazione', 'Data', 'Consegna/Ritiro'],
        benefits: ['Torta unica', 'Personalizzazione totale', 'Semplice'],
        useCases: ['Pasticcerie', 'Panifici', 'Planner'],
        timeframe: '2 mesi',
        metrics: ['Ordini', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Preavviso?', answer: '3-7 giorni secondo complessità.' }]
    },

    'bakery-daily-orders': {
        title: 'Ordini Panetteria',
        description: 'Sistema ordini cornetti/pane.',
        shortDescription: 'Panetteria via WhatsApp',
        features: ['Offerta del giorno', 'Preordine', 'Consegna/Ritiro', 'Abbonamento'],
        benefits: ['Prodotti freschi', 'Niente attesa', 'Consegna'],
        useCases: ['Panifici', 'Caffè', 'Pasticcerie'],
        timeframe: '2 mesi',
        metrics: ['Ordini giornalieri', 'Clienti abituali'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Ordine presto?', answer: 'Sì, prima delle 9.' }]
    },

    // ==================== CAFFÈ ====================

    'coffee-subscription-service': {
        title: 'Abbonamento Caffè',
        description: 'Abbonamento consegna caffè.',
        shortDescription: 'Abbonamento caffè via WhatsApp',
        features: ['Scelta varietà', 'Pianificazione', 'Macinatura', 'Gestione'],
        benefits: ['Caffè fresco sempre', 'Risparmio', 'Varietà'],
        useCases: ['Torrefazioni', 'Caffè', 'Distributori'],
        timeframe: '2 mesi',
        metrics: ['Abbonati', 'Retention'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Cambiare varietà?', answer: 'Sì, quando vuoi.' }]
    },

    // ==================== ANIMALI ====================

    'pet-grooming-booking': {
        title: 'Toelettatura Animali',
        description: 'Sistema prenotazione toelettatura.',
        shortDescription: 'Toelettatura via WhatsApp',
        features: ['Servizi', 'Appuntamento', 'Foto prima/dopo', 'Promemoria'],
        benefits: ['Cura professionale', 'Prenotazione facile', 'Bei risultati'],
        useCases: ['Toelettatori', 'Veterinari', 'Negozi animali'],
        timeframe: '2 mesi',
        metrics: ['Appuntamenti', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Quali animali?', answer: 'Cani, gatti e altro.' }]
    },

    'pet-boarding-booking': {
        title: 'Pensione Animali',
        description: 'Sistema prenotazione pensione.',
        shortDescription: 'Pensione via WhatsApp',
        features: ['Prenotazione', 'Esigenze speciali', 'Aggiornamenti giornalieri', 'Foto'],
        benefits: ['Tranquillità', 'Cure migliori', 'Monitoraggio'],
        useCases: ['Pensioni', 'Veterinari', 'Rifugi'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Aggiornamenti giornalieri?', answer: 'Sì, foto e video.' }]
    },

    // ==================== MOBILI ====================

    'furniture-custom-orders': {
        title: 'Mobili Su Misura',
        description: 'Sistema ordini mobili personalizzati.',
        shortDescription: 'Mobili su misura via WhatsApp',
        features: ['Design', 'Preventivo', 'Monitoraggio produzione', 'Consegna'],
        benefits: ['Mobili unici', 'Su misura', 'Qualità'],
        useCases: ['Falegnami', 'Artigiani', 'Designer'],
        timeframe: '3 mesi',
        metrics: ['Ordini', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Tempi?', answer: '2-6 settimane secondo pezzo.' }]
    },

    // ==================== TRASLOCHI ====================

    'moving-quote-request': {
        title: 'Preventivo Trasloco',
        description: 'Sistema richiesta preventivo trasloco.',
        shortDescription: 'Trasloco via WhatsApp',
        features: ['Dettagli alloggio', 'Foto', 'Preventivo', 'Prenotazione'],
        benefits: ['Confronto prezzi', 'Trasparenza', 'Prenotazione facile'],
        useCases: ['Traslocatori', 'Trasportatori', 'Logistica'],
        timeframe: '2 mesi',
        metrics: ['Richieste', 'Conversioni'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Preventivo rapido?', answer: 'In poche ore.' }]
    },

    // ==================== STAMPA ====================

    'print-order-system': {
        title: 'Ordine Stampe',
        description: 'Sistema ordini stampe.',
        shortDescription: 'Tipografia via WhatsApp',
        features: ['Upload file', 'Specifiche', 'Anteprima', 'Consegna/Ritiro'],
        benefits: ['Semplice', 'Qualità', 'Veloce'],
        useCases: ['Tipografie', 'Copisterie', 'Online'],
        timeframe: '2 mesi',
        metrics: ['Ordini', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Formati?', answer: 'PDF, JPG, PNG e altro.' }]
    },

    // ==================== COWORKING ====================

    'coworking-booking': {
        title: 'Prenotazione Coworking',
        description: 'Sistema prenotazione spazi coworking.',
        shortDescription: 'Coworking via WhatsApp',
        features: ['Ricerca', 'Prenotazione ora/giorno', 'Servizi', 'Pagamento'],
        benefits: ['Flessibilità', 'Ambiente lavoro', 'Servizi'],
        useCases: ['Coworking', 'Uffici', 'Hotel'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Occupazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'A ore?', answer: 'Sì, o abbonamento.' }]
    },

    // ==================== ASILO ====================

    'childcare-booking': {
        title: 'Prenotazione Babysitter',
        description: 'Sistema prenotazione babysitting.',
        shortDescription: 'Babysitter via WhatsApp',
        features: ['Disponibilità', 'Prenotazione', 'Profili', 'Recensioni'],
        benefits: ['Fiducia', 'Flessibilità', 'Semplice'],
        useCases: ['Agenzie', 'Tate', 'Genitori'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Verifiche?', answer: 'Sì, tutte tate verificate.' }]
    },

    // ==================== ANZIANI ====================

    'eldercare-service': {
        title: 'Assistenza Anziani',
        description: 'Sistema prenotazione assistenza anziani.',
        shortDescription: 'Assistenza anziani via WhatsApp',
        features: ['Servizi', 'Pianificazione', 'Profili assistenti', 'Aggiornamenti'],
        benefits: ['Cure qualità', 'Tranquillità', 'Flessibilità'],
        useCases: ['Agenzie', 'Famiglie', 'Assistenti'],
        timeframe: '3 mesi',
        metrics: ['Ore', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Qualificati?', answer: 'Sì, tutti assistenti certificati.' }]
    },

    // ==================== RIPETIZIONI ====================

    'tutoring-booking': {
        title: 'Ripetizioni Private',
        description: 'Sistema prenotazione ripetizioni.',
        shortDescription: 'Ripetizioni via WhatsApp',
        features: ['Materia', 'Insegnante', 'Appuntamento', 'Progressione'],
        benefits: ['Prof adatto', 'Orari flessibili', 'Monitoraggio'],
        useCases: ['Istituti', 'Professori', 'Genitori'],
        timeframe: '2 mesi',
        metrics: ['Lezioni', 'Progressione voti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Quali materie?', answer: 'Tutte materie scolastiche.' }]
    },

    // ==================== PARCHEGGIO ====================

    'parking-booking': {
        title: 'Prenotazione Parcheggio',
        description: 'Sistema prenotazione posti parking.',
        shortDescription: 'Parcheggio via WhatsApp',
        features: ['Ricerca', 'Disponibilità', 'Prenotazione', 'Navigazione'],
        benefits: ['Posto garantito', 'Risparmio tempo', 'Spesso più economico'],
        useCases: ['Parcheggi', 'Eventi', 'Aeroporti'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Occupazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Cancellazione?', answer: 'Sì, fino a 1 ora prima.' }]
    },

    // ==================== GIOIELLERIA ====================

    'jewelry-custom-orders': {
        title: 'Gioielli Su Misura',
        description: 'Sistema ordini gioielli personalizzati.',
        shortDescription: 'Gioiello su misura via WhatsApp',
        features: ['Design', 'Consulenza', 'Preventivo', 'Pronto'],
        benefits: ['Gioiello unico', 'Qualità', 'Consulenza'],
        useCases: ['Gioiellieri', 'Orafi', 'Designer'],
        timeframe: '3 mesi',
        metrics: ['Ordini', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Materiali?', answer: 'Oro, argento, platino e altro.' }]
    },

    // ==================== CORRIERE ====================

    'courier-same-day': {
        title: 'Consegna Express',
        description: 'Sistema consegna stesso giorno.',
        shortDescription: 'Corriere via WhatsApp',
        features: ['Prenotazione immediata', 'Tracciamento live', 'Prova consegna', 'Pagamento'],
        benefits: ['Veloce', 'Affidabile', 'Tracciabile'],
        useCases: ['Corrieri', 'Aziende', 'E-commerce'],
        timeframe: '2 mesi',
        metrics: ['Consegne', 'Tempi'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Tempi?', answer: 'In poche ore.' }]
    },

    // ==================== MAGAZZINO ====================

    'storage-booking': {
        title: 'Self-Storage',
        description: 'Sistema prenotazione box.',
        shortDescription: 'Box storage via WhatsApp',
        features: ['Dimensione', 'Disponibilità', 'Prenotazione', 'Codici accesso'],
        benefits: ['Flessibile', 'Sicuro', 'Semplice'],
        useCases: ['Self-storage', 'Depositi', 'Privati'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Occupazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Accesso 24/7?', answer: 'Sì, con codice.' }]
    },

    // ==================== RIPARAZIONI ====================

    'phone-repair-service': {
        title: 'Riparazione Telefono',
        description: 'Sistema prenotazione riparazione mobile.',
        shortDescription: 'Riparazione tel via WhatsApp',
        features: ['Descrizione guasto', 'Preventivo', 'Appuntamento', 'Pronto'],
        benefits: ['Riparazione rapida', 'Prezzo trasparente', 'Qualità'],
        useCases: ['Riparatori', 'Negozi', 'Assistenza'],
        timeframe: '2 mesi',
        metrics: ['Riparazioni', 'Tempi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Tempi?', answer: 'Spesso 1 ora.' }]
    },

    'computer-repair-service': {
        title: 'Riparazione Computer',
        description: 'Sistema prenotazione riparazione PC.',
        shortDescription: 'Riparazione PC via WhatsApp',
        features: ['Descrizione', 'Diagnosi remota', 'A domicilio/Laboratorio', 'Pronto'],
        benefits: ['Soluzione rapida', 'Trasparenza', 'Qualità'],
        useCases: ['IT', 'Negozi', 'Aziende'],
        timeframe: '2 mesi',
        metrics: ['Riparazioni', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Assistenza remota?', answer: 'Sì, per software.' }]
    },

    'appliance-repair': {
        title: 'Riparazione Elettrodomestici',
        description: 'Sistema riparazione elettrodomestici.',
        shortDescription: 'Ripara elettrodomestici via WhatsApp',
        features: ['Elettrodomestico', 'Descrizione', 'Appuntamento', 'Preventivo'],
        benefits: ['Aiuto rapido', 'Servizio a domicilio', 'Trasparenza'],
        useCases: ['Riparatori', 'Assistenza', 'Rivenditori'],
        timeframe: '2 mesi',
        metrics: ['Riparazioni', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Quali elettrodomestici?', answer: 'Tutti.' }]
    },

    // ==================== DISINFESTAZIONE ====================

    'pest-control-booking': {
        title: 'Disinfestazione',
        description: 'Sistema prenotazione trattamento infestanti.',
        shortDescription: 'Disinfestazione via WhatsApp',
        features: ['Descrizione', 'Appuntamento', 'Trattamento', 'Follow-up'],
        benefits: ['Aiuto rapido', 'Metodi sicuri', 'Garanzia'],
        useCases: ['Disinfestatori', 'Amministratori', 'Aziende'],
        timeframe: '2 mesi',
        metrics: ['Interventi', 'Tasso successo'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Sicuro?', answer: 'Sì, metodi ecologici.' }]
    },

    // ==================== GIARDINAGGIO ====================

    'landscaping-booking': {
        title: 'Giardinaggio/Paesaggistica',
        description: 'Sistema prenotazione giardinaggio.',
        shortDescription: 'Giardiniere via WhatsApp',
        features: ['Servizi', 'Appuntamento', 'Preventivo', 'Regolare'],
        benefits: ['Bel giardino', 'Professionale', 'Affidabile'],
        useCases: ['Giardinieri', 'Paesaggisti', 'Amministratori'],
        timeframe: '2 mesi',
        metrics: ['Interventi', 'Clienti abituali'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Regolare?', answer: 'Sì, settimanale/mensile.' }]
    },

    // ==================== PISCINA ====================

    'pool-maintenance-booking': {
        title: 'Manutenzione Piscina',
        description: 'Sistema prenotazione manutenzione piscina.',
        shortDescription: 'Piscina via WhatsApp',
        features: ['Manutenzione regolare', 'Riparazioni', 'Prodotti', 'Report'],
        benefits: ['Piscina pulita', 'Regolare', 'Professionale'],
        useCases: ['Piscinisti', 'Hotel', 'Privati'],
        timeframe: '2 mesi',
        metrics: ['Manutenzioni', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Frequenza?', answer: 'Settimanale consigliato.' }]
    },

    // ==================== TETTI ====================

    'roofing-service': {
        title: 'Servizio Tetti',
        description: 'Sistema prenotazione riparazione tetti.',
        shortDescription: 'Tetti via WhatsApp',
        features: ['Ispezione', 'Preventivo', 'Riparazione', 'Manutenzione'],
        benefits: ['Tetto protetto', 'Professionali', 'Garanzia'],
        useCases: ['Costruttori', 'Artigiani', 'Amministratori'],
        timeframe: '2 mesi',
        metrics: ['Interventi', 'Soddisfazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Ispezione gratuita?', answer: 'Sì, preventivo incluso.' }]
    },

    // ==================== FINESTRE ====================

    'window-service': {
        title: 'Servizio Vetri/Finestre',
        description: 'Sistema riparazione vetri.',
        shortDescription: 'Vetri via WhatsApp',
        features: ['Tipo intervento', 'Foto', 'Preventivo', 'Appuntamento'],
        benefits: ['Riparazione rapida', 'Sicurezza', 'Qualità'],
        useCases: ['Vetrai', 'Serramentisti', 'Amministratori'],
        timeframe: '2 mesi',
        metrics: ['Interventi', 'Tempi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Urgenza?', answer: 'Sì, servizio rapido.' }]
    },

    // ==================== PAVIMENTI ====================

    'flooring-service': {
        title: 'Pavimentazioni',
        description: 'Sistema posa pavimenti.',
        shortDescription: 'Pavimenti via WhatsApp',
        features: ['Tipo pavimento', 'Misure', 'Preventivo', 'Posa'],
        benefits: ['Bel pavimento', 'Installazione professionale', 'Qualità'],
        useCases: ['Posatori', 'Rivenditori', 'Costruttori'],
        timeframe: '2 mesi',
        metrics: ['Mq posati', 'Soddisfazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Quali materiali?', answer: 'Parquet, piastrelle, laminato, ecc.' }]
    },

    // ==================== MATERASSI ====================

    'mattress-delivery': {
        title: 'Consegna Materassi',
        description: 'Sistema ordini materassi.',
        shortDescription: 'Materasso via WhatsApp',
        features: ['Catalogo', 'Consulenza', 'Consegna', 'Ritiro vecchio'],
        benefits: ['Sonno migliore', 'Consiglio esperto', 'Consegna comoda'],
        useCases: ['Negozi materassi', 'E-commerce', 'Distributori'],
        timeframe: '2 mesi',
        metrics: ['Ordini', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Ritiro vecchio?', answer: 'Sì, incluso.' }]
    },

    // ==================== ACQUA ====================

    'water-delivery': {
        title: 'Consegna Acqua',
        description: 'Sistema consegna acqua.',
        shortDescription: 'Acqua via WhatsApp',
        features: ['Ordine', 'Pianificazione', 'Abbonamento', 'Consegna'],
        benefits: ['Acqua sempre', 'Comodità', 'Risparmio'],
        useCases: ['Distributori', 'Uffici', 'Famiglie'],
        timeframe: '1 mese',
        metrics: ['Consegne', 'Clienti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Frequenza?', answer: 'Settimanale o su richiesta.' }]
    },

    // ==================== SOLARE ====================

    'solar-quote': {
        title: 'Preventivo Solare',
        description: 'Sistema richiesta preventivo fotovoltaico.',
        shortDescription: 'Solare via WhatsApp',
        features: ['Analisi tetto', 'Calcolo risparmio', 'Preventivo', 'Installazione'],
        benefits: ['Risparmio energia', 'Investimento verde', 'Trasparenza'],
        useCases: ['Installatori', 'Distributori', 'Privati'],
        timeframe: '3 mesi',
        metrics: ['Preventivi', 'Installazioni'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Incentivi?', answer: 'Sì, assistenza completa.' }]
    },

    // ==================== ASCENSORI ====================

    'elevator-service': {
        title: 'Manutenzione Ascensori',
        description: 'Sistema manutenzione ascensori.',
        shortDescription: 'Ascensori via WhatsApp',
        features: ['Manutenzione', 'Emergenze', 'Report', 'Certificazioni'],
        benefits: ['Sicurezza', 'Conformità', 'Reattività'],
        useCases: ['Manutentori', 'Amministratori', 'Edifici'],
        timeframe: '3 mesi',
        metrics: ['Interventi', 'Conformità'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Emergenze 24/7?', answer: 'Sì, servizio continuo.' }]
    },

    // ==================== ANTINCENDIO ====================

    'fire-safety-service': {
        title: 'Sicurezza Antincendio',
        description: 'Sistema ispezioni antincendio.',
        shortDescription: 'Antincendio via WhatsApp',
        features: ['Ispezione', 'Manutenzione estintori', 'Certificazioni', 'Promemoria'],
        benefits: ['Conformità', 'Sicurezza', 'Documentazione'],
        useCases: ['Aziende antincendio', 'Edifici', 'Aziende'],
        timeframe: '2 mesi',
        metrics: ['Ispezioni', 'Conformità'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Certificato?', answer: 'Sì, secondo normativa.' }]
    },

    // ==================== ATTREZZATURE MEDICHE ====================

    'medical-equipment-rental': {
        title: 'Noleggio Attrezzature Mediche',
        description: 'Sistema noleggio dispositivi medici.',
        shortDescription: 'Dispositivi medici via WhatsApp',
        features: ['Catalogo', 'Consegna', 'Formazione', 'Ritiro'],
        benefits: ['Disponibilità rapida', 'Professionale', 'Flessibile'],
        useCases: ['Forniture mediche', 'Ospedali', 'Assistenza domiciliare'],
        timeframe: '2 mesi',
        metrics: ['Noleggi', 'Soddisfazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Formazione?', answer: 'Sì, inclusa.' }]
    },

    // ==================== INFERMIERI ====================

    'home-nursing': {
        title: 'Assistenza Infermieristica',
        description: 'Sistema prenotazione infermieri a domicilio.',
        shortDescription: 'Infermiere via WhatsApp',
        features: ['Servizi', 'Appuntamento', 'Profili', 'Report'],
        benefits: ['Cure a casa', 'Qualità', 'Flessibilità'],
        useCases: ['Infermieri', 'Agenzie', 'Famiglie'],
        timeframe: '3 mesi',
        metrics: ['Ore assistenza', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Mutua?', answer: 'Sì, possibile rimborso.' }]
    },

    // ==================== LABORATORIO ====================

    'lab-test-booking': {
        title: 'Prelievo Domicilio',
        description: 'Sistema prenotazione prelievi a domicilio.',
        shortDescription: 'Prelievo via WhatsApp',
        features: ['Appuntamento', 'Esami', 'Domicilio', 'Risultati'],
        benefits: ['Comodità', 'Risultati rapidi', 'Professionale'],
        useCases: ['Laboratori', 'Medici', 'Ospedali'],
        timeframe: '2 mesi',
        metrics: ['Prelievi', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Risultati?', answer: 'In 24-48h via WhatsApp.' }]
    },

    // ==================== FISIOTERAPIA ====================

    'physio-booking': {
        title: 'Fisioterapia',
        description: 'Sistema prenotazione fisioterapista.',
        shortDescription: 'Fisio via WhatsApp',
        features: ['Appuntamento', 'Professionista', 'Tipo trattamento', 'Domicilio'],
        benefits: ['Prenotazione facile', 'Scelta professionista', 'A casa'],
        useCases: ['Fisioterapisti', 'Studi', 'Cliniche'],
        timeframe: '2 mesi',
        metrics: ['Appuntamenti', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'A domicilio?', answer: 'Sì, disponibile.' }]
    },

    // ==================== NUTRIZIONE ====================

    'nutrition-consultation': {
        title: 'Consulenza Nutrizionale',
        description: 'Sistema prenotazione nutrizionista.',
        shortDescription: 'Nutrizionista via WhatsApp',
        features: ['Appuntamento', 'Questionario', 'Piano alimentare', 'Follow-up'],
        benefits: ['Piano personalizzato', 'Professionale', 'Risultati'],
        useCases: ['Nutrizionisti', 'Studi', 'Palestre'],
        timeframe: '2 mesi',
        metrics: ['Consulenze', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Online?', answer: 'Sì, in videochiamata.' }]
    },

    // ==================== PSICOLOGIA ====================

    'therapy-booking': {
        title: 'Psicoterapia',
        description: 'Sistema prenotazione psicologo.',
        shortDescription: 'Psicologo via WhatsApp',
        features: ['Prima seduta', 'Appuntamento', 'Scelta terapeuta', 'Online'],
        benefits: ['Riservato', 'Flessibile', 'Professionale'],
        useCases: ['Psicologi', 'Studi', 'Cliniche'],
        timeframe: '3 mesi',
        metrics: ['Sedute', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Riservato?', answer: 'Assolutamente, strettamente confidenziale.' }]
    },

    // ==================== LOGOPEDIA ====================

    'speech-therapy': {
        title: 'Logopedia',
        description: 'Sistema prenotazione logopedista.',
        shortDescription: 'Logopedista via WhatsApp',
        features: ['Valutazione', 'Appuntamento', 'Piano trattamento', 'Follow-up'],
        benefits: ['Specializzato', 'Personalizzato', 'Progressi'],
        useCases: ['Logopedisti', 'Studi', 'Cliniche'],
        timeframe: '2 mesi',
        metrics: ['Sedute', 'Progressi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Bambini e adulti?', answer: 'Sì, tutte le età.' }]
    },

    // ==================== TERAPIA OCCUPAZIONALE ====================

    'occupational-therapy': {
        title: 'Terapia Occupazionale',
        description: 'Sistema prenotazione terapista occupazionale.',
        shortDescription: 'Terapia occupazionale via WhatsApp',
        features: ['Prima visita', 'Piano trattamento', 'Domicilio'],
        benefits: ['Autonomia', 'Personalizzato', 'A casa'],
        useCases: ['Terapisti', 'Studi', 'Cliniche'],
        timeframe: '2 mesi',
        metrics: ['Sedute', 'Progressi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Per chi?', answer: 'Bambini, adulti, anziani.' }]
    },

    // ==================== DONAZIONE SANGUE ====================

    'blood-donation': {
        title: 'Donazione Sangue',
        description: 'Sistema gestione donazioni sangue.',
        shortDescription: 'Dona sangue via WhatsApp',
        features: ['Trova centro', 'Iscrizione', 'Promemoria', 'Tessera donatore'],
        benefits: ['Salva vite', 'Semplice', 'Promemoria'],
        useCases: ['Centri trasfusione', 'Ospedali', 'Associazioni'],
        timeframe: '2 mesi',
        metrics: ['Donazioni', 'Fidelizzazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Frequenza?', answer: 'Ogni 8-12 settimane.' }]
    },

    // ==================== ALLERTE EMERGENZA ====================

    'emergency-broadcast': {
        title: 'Allerte Emergenza',
        description: 'Sistema allerte urgenti.',
        shortDescription: 'Allerte emergenza via WhatsApp',
        features: ['Invio massivo', 'Geolocalizzazione', 'Priorità', 'Conferma'],
        benefits: ['Rapido', 'Affidabile', 'Vite salvate'],
        useCases: ['Autorità', 'Aziende', 'Scuole'],
        timeframe: '3 mesi',
        metrics: ['Portata', 'Tempi risposta'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Conferma?', answer: 'Sì, ricevuta di lettura.' }]
    },

    // ==================== VICINATO ====================

    'neighborhood-watch': {
        title: 'Controllo Vicinato',
        description: 'Sistema comunicazione quartiere.',
        shortDescription: 'Vicinato via WhatsApp',
        features: ['Segnalazioni', 'Allerte', 'Coordinamento', 'Updates'],
        benefits: ['Quartiere sicuro', 'Comunità', 'Info rapide'],
        useCases: ['Quartieri', 'Condomini', 'Comuni'],
        timeframe: '2 mesi',
        metrics: ['Segnalazioni', 'Coinvolgimento'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Anonimo?', answer: 'Sì, opzionale.' }]
    },

    // ==================== EVENTI COMUNITÀ ====================

    'community-events': {
        title: 'Eventi Locali',
        description: 'Sistema eventi locali.',
        shortDescription: 'Eventi locali via WhatsApp',
        features: ['Calendario', 'Iscrizioni', 'Promemoria', 'Partecipanti'],
        benefits: ['Comunità', 'Informazione', 'Partecipazione'],
        useCases: ['Comuni', 'Associazioni', 'Condomini'],
        timeframe: '2 mesi',
        metrics: ['Eventi', 'Partecipanti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Gratuito?', answer: 'Sì, base gratuita.' }]
    },

    // ==================== VOLONTARI ====================

    'volunteer-coordination': {
        title: 'Coordinamento Volontari',
        description: 'Sistema coordinamento volontariato.',
        shortDescription: 'Volontari via WhatsApp',
        features: ['Iscrizione', 'Pianificazione', 'Ore', 'Attestati'],
        benefits: ['Organizzazione', 'Riconoscimento', 'Documentazione'],
        useCases: ['ONG', 'Eventi', 'Comuni'],
        timeframe: '2 mesi',
        metrics: ['Volontari', 'Ore'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Attestati?', answer: 'Sì, per documentazione.' }]
    },

    // ==================== OGGETTI SMARRITI ====================

    'lost-found-platform': {
        title: 'Oggetti Smarriti',
        description: 'Sistema oggetti persi/trovati.',
        shortDescription: 'Oggetti smarriti via WhatsApp',
        features: ['Segnala smarrimento', 'Segnala ritrovamento', 'Matching', 'Notifica'],
        benefits: ['Ritrova oggetti', 'Semplice', 'Comunità'],
        useCases: ['Città', 'Aziende', 'Luoghi pubblici'],
        timeframe: '2 mesi',
        metrics: ['Match', 'Restituzioni'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Gratuito?', answer: 'Sì, servizio civico.' }]
    },

    // ==================== CRYPTO ====================

    'crypto-trading-signals': {
        title: 'Segnali Crypto',
        description: 'Sistema segnali criptovalute.',
        shortDescription: 'Segnali crypto via WhatsApp',
        features: ['Segnali', 'Analisi mercato', 'Allerte', 'Formazione'],
        benefits: ['Decisioni migliori', 'Tempo reale', 'Analisi esperta'],
        useCases: ['Trader', 'Piattaforme', 'Formatori'],
        timeframe: '3 mesi',
        metrics: ['Segnali', 'Tasso successo'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Rischi?', answer: 'Educativo, non consulenza.' }]
    },

    // ==================== FOREX ====================

    'forex-alerts': {
        title: 'Allerte Forex',
        description: 'Sistema allerte valute.',
        shortDescription: 'Forex via WhatsApp',
        features: ['Movimenti', 'Calendario eco', 'Analisi', 'Segnali'],
        benefits: ['Reazione rapida', 'Informato', 'Trade migliori'],
        useCases: ['Trader forex', 'Broker', 'Formatori'],
        timeframe: '3 mesi',
        metrics: ['Allerte', 'Precisione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Quali coppie?', answer: 'Tutte le principali.' }]
    },

    // ==================== AVVENTURA ====================

    'adventure-tour-booking': {
        title: 'Turismo Avventura',
        description: 'Sistema prenotazione avventure.',
        shortDescription: 'Avventura via WhatsApp',
        features: ['Tipi tour', 'Livelli', 'Prenotazione', 'Attrezzatura'],
        benefits: ['Esperienze uniche', 'Sicurezza', 'Guide esperte'],
        useCases: ['Tour operator', 'Agenzie', 'Guide'],
        timeframe: '3 mesi',
        metrics: ['Prenotazioni', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Esperienza richiesta?', answer: 'Tutti i livelli disponibili.' }]
    },

    // ==================== TREKKING ====================

    'hiking-tour-booking': {
        title: 'Escursioni',
        description: 'Sistema prenotazione trekking.',
        shortDescription: 'Trekking via WhatsApp',
        features: ['Itinerari', 'Difficoltà', 'Gruppi', 'Privato'],
        benefits: ['Natura', 'Sicurezza', 'Guide esperte'],
        useCases: ['Guide', 'Pro loco', 'Hotel'],
        timeframe: '2 mesi',
        metrics: ['Escursioni', 'Partecipanti'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Attrezzatura?', answer: 'Lista fornita.' }]
    },

    // ==================== PELLEGRINAGGIO ====================

    'pilgrimage-booking': {
        title: 'Pellegrinaggio',
        description: 'Sistema prenotazione pellegrinaggi.',
        shortDescription: 'Pellegrinaggio via WhatsApp',
        features: ['Destinazioni', 'Gruppo', 'Visto', 'Guida'],
        benefits: ['Esperienza spirituale', 'Accompagnamento', 'Comunità'],
        useCases: ['Agenzie', 'Parrocchie', 'Moschee'],
        timeframe: '3 mesi',
        metrics: ['Prenotazioni', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Visto?', answer: 'Sì, assistenza inclusa.' }]
    },

    // ==================== AUTO VENDITA ====================

    'car-sales-lead': {
        title: 'Vendita Auto',
        description: 'Sistema lead vendita auto.',
        shortDescription: 'Compra auto via WhatsApp',
        features: ['Ricerca veicolo', 'Prova', 'Finanziamento', 'Permuta'],
        benefits: ['Acquisto facile', 'Tutte le info', 'Consiglio personale'],
        useCases: ['Concessionari', 'Venditori', 'Broker'],
        timeframe: '3 mesi',
        metrics: ['Lead', 'Vendite'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Finanziamento?', answer: 'Sì, tramite partner.' }]
    },

    // ==================== AUTO SERVIZIO ====================

    'car-service-reminder': {
        title: 'Promemoria Tagliando',
        description: 'Sistema promemoria manutenzione auto.',
        shortDescription: 'Promemoria auto via WhatsApp',
        features: ['Promemoria', 'Revisione', 'Usura', 'Appuntamento'],
        benefits: ['Auto in forma', 'Mai dimenticare', 'Prenotazione facile'],
        useCases: ['Officine', 'Concessionari', 'Flotte'],
        timeframe: '2 mesi',
        metrics: ['Promemoria', 'Appuntamenti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Automatico?', answer: 'Sì, secondo km/tempo.' }]
    },

    // ==================== AUTOLAVAGGIO ====================

    'carwash-booking': {
        title: 'Prenotazione Autolavaggio',
        description: 'Sistema prenotazione lavaggio auto.',
        shortDescription: 'Lavaggio via WhatsApp',
        features: ['Servizi', 'Appuntamento', 'Mobile', 'Abbonamento'],
        benefits: ['Auto pulita', 'Pratico', 'Flessibilità'],
        useCases: ['Autolavaggi', 'Mobile', 'Stazioni'],
        timeframe: '2 mesi',
        metrics: ['Appuntamenti', 'Clienti abituali'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Mobile?', answer: 'Sì, veniamo da te.' }]
    },

    // ==================== TATUAGGI ====================

    'tattoo-booking': {
        title: 'Appuntamento Tatuaggio',
        description: 'Sistema prenotazione tatuaggi.',
        shortDescription: 'Tattoo via WhatsApp',
        features: ['Artista', 'Design', 'Consulenza', 'Appuntamento'],
        benefits: ['Tattoo dei sogni', 'Consiglio pro', 'Prenotazione facile'],
        useCases: ['Studi tattoo', 'Artisti', 'Piercer'],
        timeframe: '2 mesi',
        metrics: ['Appuntamenti', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Preventivo?', answer: 'Sì, dopo consulenza design.' }]
    },

    // ==================== ULTIMO MIGLIO ====================

    'lastmile-delivery': {
        title: 'Consegna Ultimo Miglio',
        description: 'Sistema consegna urbana.',
        shortDescription: 'Consegna città via WhatsApp',
        features: ['Prenotazione', 'Tracciamento', 'Prova consegna', 'Notifiche'],
        benefits: ['Veloce', 'Affidabile', 'Trasparente'],
        useCases: ['E-commerce', 'Negozi locali', 'Ristoranti'],
        timeframe: '3 mesi',
        metrics: ['Consegne', 'Tempi'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Tempi?', answer: 'In poche ore.' }]
    },

    // ==================== MAGAZZINO ====================

    'warehouse-management': {
        title: 'Gestione Magazzino',
        description: 'Sistema gestione scorte.',
        shortDescription: 'Magazzino via WhatsApp',
        features: ['Stato scorte', 'Entrate/Uscite', 'Allerte', 'Report'],
        benefits: ['Visibilità', 'Reazione rapida', 'Meno errori'],
        useCases: ['Magazzini', 'E-commerce', 'Produzione'],
        timeframe: '3 mesi',
        metrics: ['Transazioni', 'Precisione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Integrazione?', answer: 'Con ERP comuni.' }]
    },

    // ==================== CONCERTI ====================

    'concert-ticket-sales': {
        title: 'Biglietteria Concerti',
        description: 'Sistema vendita biglietti.',
        shortDescription: 'Biglietti concerti via WhatsApp',
        features: ['Eventi', 'Posti', 'Acquisto', 'E-ticket'],
        benefits: ['Acquisto facile', 'Tutti eventi', 'Biglietti immediati'],
        useCases: ['Organizzatori', 'Venue', 'Biglietterie'],
        timeframe: '3 mesi',
        metrics: ['Vendite', 'Conversione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'E-ticket?', answer: 'Sì, via WhatsApp.' }]
    },

    // ==================== NUOTO ====================

    'swimming-class': {
        title: 'Corsi Nuoto',
        description: 'Sistema prenotazione corsi nuoto.',
        shortDescription: 'Nuoto via WhatsApp',
        features: ['Corsi', 'Livello', 'Prenotazione', 'Progressione'],
        benefits: ['Impara a nuotare', 'Tutti livelli', 'Istruttori qualificati'],
        useCases: ['Piscine', 'Scuole', 'Club'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Brevetti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Età?', answer: 'Da 3 anni ad adulti.' }]
    },

    // ==================== GOVERNO ====================

    'gov-citizen-service': {
        title: 'Servizi Cittadino',
        description: 'Sistema servizi pubblici.',
        shortDescription: 'Comune via WhatsApp',
        features: ['Info', 'Appuntamento', 'Stato documenti', 'FAQ'],
        benefits: ['Servizio rapido', 'Meno attesa', 'Pratico'],
        useCases: ['Comuni', 'Prefetture', 'Amministrazioni'],
        timeframe: '3 mesi',
        metrics: ['Richieste', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Sicuro?', answer: 'Sì, crittografato.' }]
    },

    // ==================== MEDIA ====================

    'media-news-subscription': {
        title: 'Abbonamento News',
        description: 'Sistema abbonamento notizie.',
        shortDescription: 'News via WhatsApp',
        features: ['Temi', 'Breaking news', 'Riassunti', 'Completo'],
        benefits: ['Resta informato', 'Personalizzato', 'Updates rapidi'],
        useCases: ['Media', 'Agenzie stampa', 'Blog'],
        timeframe: '2 mesi',
        metrics: ['Abbonati', 'Tasso apertura'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Frequenza?', answer: 'Quotidiana o breaking.' }]
    },

    // ==================== FARMACIA ====================

    'pharmacy-refill': {
        title: 'Rinnovo Ricetta',
        description: 'Sistema rinnovo farmaci.',
        shortDescription: 'Farmacia via WhatsApp',
        features: ['Lista farmaci', 'Rinnovo', 'Disponibilità', 'Ritiro'],
        benefits: ['Mai senza farmaci', 'Semplice', 'Rapido'],
        useCases: ['Farmacie', 'E-farmacie', 'Assistenza domiciliare'],
        timeframe: '2 mesi',
        metrics: ['Rinnovi', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Ricetta?', answer: 'Deve essere valida.' }]
    },

    // ==================== ENERGIA ====================

    'energy-bill-inquiry': {
        title: 'Bolletta Energia',
        description: 'Sistema consultazione bollette.',
        shortDescription: 'Bolletta via WhatsApp',
        features: ['Vedi bolletta', 'Consumi', 'Pagamento', 'Confronto'],
        benefits: ['Visione completa', 'Pagamento facile', 'Risparmio'],
        useCases: ['Fornitori', 'Distributori', 'Comparatori'],
        timeframe: '2 mesi',
        metrics: ['Consultazioni', 'Self-service'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Pagamento online?', answer: 'Sì, link diretto.' }]
    },

    // ==================== ASSICURAZIONE ====================

    'insurance-claims-status': {
        title: 'Stato Sinistro',
        description: 'Sistema monitoraggio sinistri.',
        shortDescription: 'Sinistro via WhatsApp',
        features: ['Stato', 'Upload documenti', 'Aggiornamenti', 'Chat'],
        benefits: ['Sempre informato', 'Comunicazione facile', 'Più rapido'],
        useCases: ['Assicurazioni', 'Broker', 'Clienti'],
        timeframe: '2 mesi',
        metrics: ['Consultazioni', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Documenti?', answer: 'Sì, foto e PDF.' }]
    },

    // ==================== VINO ====================

    'wine-subscription': {
        title: 'Abbonamento Vino',
        description: 'Abbonamento consegna vini.',
        shortDescription: 'Abbonamento vini via WhatsApp',
        features: ['Profilo gusto', 'Consegna mensile', 'Note', 'Gestione'],
        benefits: ['Scopri vini', 'Risparmio', 'Pratico'],
        useCases: ['Enoteche', 'Cantine', 'Club'],
        timeframe: '2 mesi',
        metrics: ['Abbonati', 'Retention'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Pausa?', answer: 'Sì, quando vuoi.' }]
    },

    // ==================== DISTRIBUTORI ====================

    'vending-machine-service': {
        title: 'Servizio Distributori',
        description: 'Sistema gestione distributori automatici.',
        shortDescription: 'Distributori via WhatsApp',
        features: ['Allerte livello', 'Guasti', 'Report vendite', 'Manutenzione'],
        benefits: ['Meno guasti', 'Rifornimento ottimale', 'Visione completa'],
        useCases: ['Operatori', 'Gestori', 'Full-service'],
        timeframe: '2 mesi',
        metrics: ['Disponibilità', 'Vendite'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Tempo reale?', answer: 'Sì, notifica immediata.' }]
    },

    // ==================== SARTORIA ====================

    'tailor-service': {
        title: 'Sartoria/Riparazioni',
        description: 'Sistema prenotazione sartoria.',
        shortDescription: 'Sarto via WhatsApp',
        features: ['Servizi', 'Foto', 'Preventivo', 'Appuntamento'],
        benefits: ['Vestibilità perfetta', 'Professionale', 'Pratico'],
        useCases: ['Sarti', 'Lavanderie', 'Boutique'],
        timeframe: '2 mesi',
        metrics: ['Riparazioni', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Ritiro?', answer: 'Sì, servizio ritiro/consegna.' }]
    },

    // ==================== CALZOLAIO ====================

    'shoe-repair-service': {
        title: 'Calzoleria',
        description: 'Sistema riparazione scarpe.',
        shortDescription: 'Calzolaio via WhatsApp',
        features: ['Descrizione', 'Foto', 'Preventivo', 'Pronto'],
        benefits: ['Salva scarpe', 'Professionale', 'Economico'],
        useCases: ['Calzolai', 'Lavanderie', 'Boutique'],
        timeframe: '1 mese',
        metrics: ['Riparazioni', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Tempi?', answer: '1-7 giorni secondo lavoro.' }]
    },

    // ==================== RICICLAGGIO ====================

    'recycling-pickup': {
        title: 'Ritiro Riciclaggio',
        description: 'Sistema prenotazione ritiro.',
        shortDescription: 'Riciclo via WhatsApp',
        features: ['Appuntamento', 'Tipi materiali', 'Credito', 'Report'],
        benefits: ['Ecologia', 'Semplice', 'Ricompensa'],
        useCases: ['Riciclatori', 'Comuni', 'Aziende'],
        timeframe: '2 mesi',
        metrics: ['Ritiri', 'Volumi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Compenso?', answer: 'Sì, alcuni materiali.' }]
    },

    // ==================== GAS ====================

    'gas-delivery': {
        title: 'Consegna Gas',
        description: 'Sistema consegna bombole gas.',
        shortDescription: 'Gas via WhatsApp',
        features: ['Ordine', 'Consegna', 'Cauzione', 'Abbonamento'],
        benefits: ['Mai senza gas', 'Consegna rapida', 'Pratico'],
        useCases: ['Distributori', 'Ristoranti', 'Privati'],
        timeframe: '1 mese',
        metrics: ['Consegne', 'Clienti abituali'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Cauzione?', answer: 'Sì, scambio incluso.' }]
    },

    // ==================== CARBURANTE ====================

    'fuel-delivery': {
        title: 'Consegna Carburante',
        description: 'Sistema consegna carburante.',
        shortDescription: 'Carburante via WhatsApp',
        features: ['Posizione', 'Tipo', 'Quantità', 'Consegna'],
        benefits: ['Niente stazione', 'Risparmio tempo', 'Pratico'],
        useCases: ['Consegnatori', 'Flotte', 'Aziende'],
        timeframe: '3 mesi',
        metrics: ['Consegne', 'Litri'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Sicuro?', answer: 'Sì, norme di sicurezza.' }]
    },

    // ==================== ARCHITETTURA ====================

    'architecture-consultation': {
        title: 'Consulenza Architettura',
        description: 'Sistema prenotazione architetto.',
        shortDescription: 'Architetto via WhatsApp',
        features: ['Prima visita', 'Progetto', 'Planimetrie', 'Updates'],
        benefits: ['Pianificazione pro', 'Creatività', 'Trasparenza'],
        useCases: ['Architetti', 'Committenti', 'Decoratori'],
        timeframe: '3 mesi',
        metrics: ['Consulenze', 'Progetti'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Prima visita?', answer: 'Spesso gratuita o ridotta.' }]
    },

    // ==================== MUSICA ====================

    'music-lessons-booking': {
        title: 'Lezioni Musica',
        description: 'Sistema prenotazione lezioni musica.',
        shortDescription: 'Musica via WhatsApp',
        features: ['Strumento', 'Insegnante', 'Appuntamento', 'Progressione'],
        benefits: ['Impara strumento', 'Flessibilità', 'Insegnanti qualificati'],
        useCases: ['Scuole musica', 'Insegnanti', 'Studi'],
        timeframe: '2 mesi',
        metrics: ['Lezioni', 'Progressione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Strumenti?', answer: 'Tutti gli strumenti comuni.' }]
    },

    // ==================== LINGUE ====================

    'language-lesson-booking': {
        title: 'Corsi di Lingue',
        description: 'Sistema prenotazione corsi lingue.',
        shortDescription: 'Lingue via WhatsApp',
        features: ['Lingua', 'Madrelingua', 'Appuntamento', 'Test livello'],
        benefits: ['Nuova lingua', 'Madrelingua', 'Flessibilità'],
        useCases: ['Scuole lingue', 'Insegnanti', 'Piattaforme'],
        timeframe: '2 mesi',
        metrics: ['Lezioni', 'Progressione livello'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Quali lingue?', answer: 'Inglese, spagnolo, tedesco, ecc.' }]
    },

    // ==================== FORMAZIONE AZIENDALE ====================

    'corporate-training': {
        title: 'Formazione Aziendale',
        description: 'Sistema prenotazione formazione.',
        shortDescription: 'Formazione via WhatsApp',
        features: ['Catalogo temi', 'Date', 'Partecipanti', 'Certificati'],
        benefits: ['Sviluppo team', 'Su misura', 'Gestione facile'],
        useCases: ['Formatori', 'HR', 'Consulenti'],
        timeframe: '3 mesi',
        metrics: ['Formazioni', 'Partecipanti'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'In sede o online?', answer: 'Entrambi possibili.' }]
    },

    // ==================== MODA ====================

    'fashion-personal-styling': {
        title: 'Consulenza Stile',
        description: 'Sistema consulenza stile online.',
        shortDescription: 'Stile via WhatsApp',
        features: ['Profilo stile', 'Suggerimenti outfit', 'Link shopping', 'Consigli'],
        benefits: ['Stile migliore', 'Risparmio tempo', 'Outfit adatti'],
        useCases: ['Stylist', 'Boutique', 'E-commerce'],
        timeframe: '2 mesi',
        metrics: ['Clienti', 'Acquisti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Budget?', answer: 'Rispettiamo il tuo budget.' }]
    },

    // ==================== ALIMENTARI ====================

    'grocery-weekly-order': {
        title: 'Spesa Settimanale',
        description: 'Sistema ordini regolari.',
        shortDescription: 'Spesa via WhatsApp',
        features: ['Lista', 'Ordine ricorrente', 'Fascia', 'Promozioni'],
        benefits: ['Non dimenticare nulla', 'Risparmio tempo', 'Fresco'],
        useCases: ['Supermercati', 'Consegne', 'Bio'],
        timeframe: '2 mesi',
        metrics: ['Ordini', 'Clienti abituali'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Consegna?', answer: 'Stesso giorno o domani.' }]
    },

    // ==================== IMMOBILIARE COMMERCIALE ====================

    'commercial-property-inquiry': {
        title: 'Immobili Commerciali',
        description: 'Sistema richiesta locali commerciali.',
        shortDescription: 'Locale via WhatsApp',
        features: ['Esigenze', 'Proposte', 'Visite', 'Trattativa'],
        benefits: ['Locale adatto', 'Consiglio pro', 'Risparmio tempo'],
        useCases: ['Agenti commerciali', 'Proprietari', 'Aziende'],
        timeframe: '3 mesi',
        metrics: ['Richieste', 'Conclusioni'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Commissione?', answer: 'Secondo immobile e zona.' }]
    },

    // ==================== FOOD TRUCK ====================

    'foodtruck-location-alert': {
        title: 'Posizione Food Truck',
        description: 'Sistema notifiche posizione.',
        shortDescription: 'Food truck via WhatsApp',
        features: ['Posizione del giorno', 'Menu', 'Attesa', 'Preordine'],
        benefits: ['Trova truck preferito', 'Preordina', 'Meno attesa'],
        useCases: ['Food truck', 'Organizzatori', 'Fan'],
        timeframe: '1 mese',
        metrics: ['Abbonati', 'Preordini'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Prenotazione?', answer: 'Sì, con preordine.' }]
    },

    // ==================== DISABILITÀ ====================

    'special-needs-services': {
        title: 'Servizi Disabilità',
        description: 'Sistema servizi disabilità.',
        shortDescription: 'Disabilità via WhatsApp',
        features: ['Servizi', 'Appuntamento', 'Accessibilità', 'Supporto'],
        benefits: ['Accesso servizi', 'Comunicazione accessibile', 'Accompagnamento'],
        useCases: ['Associazioni', 'Amministrazioni', 'Terapisti'],
        timeframe: '3 mesi',
        metrics: ['Richieste', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Accessibile?', answer: 'Sì, totalmente.' }]
    },

    // ==================== DONAZIONE ORGANI ====================

    'organ-donation-awareness': {
        title: 'Sensibilizzazione Donazione Organi',
        description: 'Sistema info donazione organi.',
        shortDescription: 'Donazione organi via WhatsApp',
        features: ['Info', 'Iscrizione', 'Tessera', 'FAQ'],
        benefits: ['Salva vite', 'Decisione informata', 'Iscrizione facile'],
        useCases: ['Agenzie sanitarie', 'ONG', 'Ospedali'],
        timeframe: '2 mesi',
        metrics: ['Iscrizioni', 'Portata'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Vincolante?', answer: 'Iscrizione volontaria.' }]
    },

    // ==================== SCI ====================

    'ski-pass-booking': {
        title: 'Skipass',
        description: 'Sistema prenotazione skipass.',
        shortDescription: 'Skipass via WhatsApp',
        features: ['Tipi skipass', 'Prenotazione', 'Skipass digitale', 'Meteo neve'],
        benefits: ['Niente coda', 'Accesso digitale', 'Info neve'],
        useCases: ['Stazioni', 'Agenzie', 'Hotel'],
        timeframe: '2 mesi',
        metrics: ['Vendite', 'Utilizzo digitale'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Validità?', answer: 'Secondo tipo skipass.' }]
    },

    'ski-lesson-booking': {
        title: 'Lezioni Sci',
        description: 'Sistema prenotazione lezioni sci.',
        shortDescription: 'Lezioni sci via WhatsApp',
        features: ['Corsi', 'Livello', 'Prenotazione', 'Noleggio'],
        benefits: ['Impara sciare', 'Tutti livelli', 'Maestri qualificati'],
        useCases: ['Scuole sci', 'Stazioni', 'Hotel'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Diplomi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Età minima?', answer: 'Da 3 anni.' }]
    },

    // ==================== GOLF ====================

    'golf-tee-time': {
        title: 'Prenotazione Tee Time',
        description: 'Sistema prenotazione tee time.',
        shortDescription: 'Golf via WhatsApp',
        features: ['Disponibilità', 'Prenotazione', 'Partner', 'Golf cart'],
        benefits: ['Orario garantito', 'Pratico', 'Flessibile'],
        useCases: ['Golf club', 'Resort', 'Agenzie'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Occupazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Visitatori?', answer: 'Sì, benvenuti.' }]
    },

    'golf-lesson-booking': {
        title: 'Lezioni Golf',
        description: 'Sistema prenotazione lezioni golf.',
        shortDescription: 'Lezioni golf via WhatsApp',
        features: ['Scelta pro', 'Prenotazione', 'Livello', 'Video analisi'],
        benefits: ['Gioco migliore', 'Pro', 'Flessibile'],
        useCases: ['Pro golf', 'Club', 'Scuole'],
        timeframe: '2 mesi',
        metrics: ['Lezioni', 'Miglioramento handicap'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Principianti?', answer: 'Sì, tutti livelli.' }]
    },

    // ==================== TENNIS ====================

    'tennis-court-booking': {
        title: 'Prenotazione Campo Tennis',
        description: 'Sistema prenotazione campi.',
        shortDescription: 'Tennis via WhatsApp',
        features: ['Disponibilità', 'Scelta campo', 'Prenotazione', 'Partner'],
        benefits: ['Campo garantito', 'Flessibilità', 'Trova partner'],
        useCases: ['Club tennis', 'Centri sportivi', 'Hotel'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Occupazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Coperto?', answer: 'Sì, indoor e outdoor.' }]
    },

    // ==================== BOWLING ====================

    'bowling-lane-booking': {
        title: 'Prenotazione Pista Bowling',
        description: 'Sistema prenotazione bowling.',
        shortDescription: 'Bowling via WhatsApp',
        features: ['Disponibilità', 'Prenotazione', 'Scarpe', 'Pacchetti festa'],
        benefits: ['Pista garantita', 'Veloce', 'Feste'],
        useCases: ['Bowling', 'Centri divertimento', 'Eventi'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Fatturato feste'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Compleanni?', answer: 'Sì, pacchetti speciali.' }]
    },

    // ==================== ESCAPE ROOM ====================

    'escape-room-booking': {
        title: 'Prenotazione Escape Room',
        description: 'Sistema prenotazione escape room.',
        shortDescription: 'Escape room via WhatsApp',
        features: ['Scelta stanza', 'Difficoltà', 'Prenotazione', 'Squadra'],
        benefits: ['Adrenalina', 'Team building', 'Flessibilità'],
        useCases: ['Escape room', 'Divertimento', 'Team building'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Tasso evasione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Dimensione squadra?', answer: '2-8 secondo stanza.' }]
    },

    // ==================== LASER TAG ====================

    'lasertag-booking': {
        title: 'Prenotazione Laser Tag',
        description: 'Sistema prenotazione laser tag.',
        shortDescription: 'Laser tag via WhatsApp',
        features: ['Sessione', 'Dimensione gruppo', 'Prenotazione', 'Pacchetti festa'],
        benefits: ['Azione', 'Divertimento gruppo', 'Feste'],
        useCases: ['Laser tag', 'Centri divertimento', 'Eventi'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Fatturato gruppi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Età minima?', answer: 'Da 8 anni.' }]
    },

    // ==================== TRAMPOLINE ====================

    'trampoline-park-booking': {
        title: 'Prenotazione Parco Trampolini',
        description: 'Sistema prenotazione parco trampolini.',
        shortDescription: 'Trampolini via WhatsApp',
        features: ['Fascia', 'Gruppo', 'Calzini', 'Pacchetti festa'],
        benefits: ['Posto garantito', 'Divertimento tutti', 'Servizio feste'],
        useCases: ['Parchi trampolini', 'Divertimento', 'Eventi'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Fatturato gruppi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Calzini?', answer: 'Speciali antiscivolo inclusi.' }]
    },

    // ==================== KARTING ====================

    'go-kart-booking': {
        title: 'Prenotazione Karting',
        description: 'Sistema prenotazione karting.',
        shortDescription: 'Karting via WhatsApp',
        features: ['Sessione', 'Prenotazione', 'Classifiche', 'Eventi'],
        benefits: ['Pista garantita', 'Adrenalina', 'Eventi team'],
        useCases: ['Karting', 'Divertimento', 'Team building'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Fatturato eventi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Età minima?', answer: 'Secondo categoria kart.' }]
    },

    // ==================== LANCIO ASCIA ====================

    'axe-throwing-booking': {
        title: 'Prenotazione Lancio Ascia',
        description: 'Sistema prenotazione lancio ascia.',
        shortDescription: 'Lancio ascia via WhatsApp',
        features: ['Sessione', 'Gruppo', 'Prenotazione', 'Coaching'],
        benefits: ['Esperienza unica', 'Team building', 'Divertimento'],
        useCases: ['Arene ascia', 'Eventi', 'Bar'],
        timeframe: '1 mese',
        metrics: ['Prenotazioni', 'Fatturato gruppi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Sicuro?', answer: 'Sì, formazione e supervisione.' }]
    },

    // ==================== MINIGOLF ====================

    'minigolf-booking': {
        title: 'Prenotazione Minigolf',
        description: 'Sistema prenotazione minigolf.',
        shortDescription: 'Minigolf via WhatsApp',
        features: ['Disponibilità', 'Prenotazione', 'Tariffe gruppo', 'Eventi'],
        benefits: ['Posto garantito', 'Divertimento famiglia', 'Servizio feste'],
        useCases: ['Minigolf', 'Parchi divertimento', 'Resort'],
        timeframe: '1 mese',
        metrics: ['Prenotazioni', 'Fatturato famiglie'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Prenotazione necessaria?', answer: 'Consigliata nel weekend.' }]
    },

    // ==================== CONSULENZA ====================

    'consulting-booking': {
        title: 'Prenotazione Consulenza',
        description: 'Sistema prenotazione consulenze.',
        shortDescription: 'Consulenza via WhatsApp',
        features: ['Ambito', 'Esperto', 'Appuntamento', 'Follow-up'],
        benefits: ['Esperienza', 'Flessibilità', 'Follow-up progetto'],
        useCases: ['Consulenti', 'Studi', 'Freelance'],
        timeframe: '2 mesi',
        metrics: ['Appuntamenti', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Prima consulenza?', answer: 'Spesso gratuita o ridotta.' }]
    },

    // ==================== FOTOGRAFIA ====================

    'photography-booking': {
        title: 'Prenotazione Fotografo',
        description: 'Sistema prenotazione servizi foto.',
        shortDescription: 'Fotografo via WhatsApp',
        features: ['Tipo shooting', 'Preventivo', 'Prenotazione', 'Galleria'],
        benefits: ['Ricordi qualità', 'Professionale', 'Galleria privata'],
        useCases: ['Fotografi', 'Studi', 'Eventi'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Tempi consegna?', answer: '1-2 settimane secondo shooting.' }]
    },

    'video-production-booking': {
        title: 'Prenotazione Videomaker',
        description: 'Sistema prenotazione servizi video.',
        shortDescription: 'Videomaker via WhatsApp',
        features: ['Tipo progetto', 'Preventivo', 'Pianificazione', 'Consegna'],
        benefits: ['Qualità pro', 'Creatività', 'Documentazione'],
        useCases: ['Videomaker', 'Agenzie', 'Matrimoni'],
        timeframe: '3 mesi',
        metrics: ['Progetti', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Tempi montaggio?', answer: '2-4 settimane secondo progetto.' }]
    },

    // ==================== SPORT ====================

    'sports-league-management': {
        title: 'Gestione Lega Sportiva',
        description: 'Sistema gestione leghe.',
        shortDescription: 'Lega via WhatsApp',
        features: ['Squadre', 'Calendario', 'Punteggi', 'Classifiche'],
        benefits: ['Organizzazione', 'Info tempo reale', 'Coinvolgimento'],
        useCases: ['Leghe', 'Club', 'Federazioni'],
        timeframe: '3 mesi',
        metrics: ['Squadre', 'Coinvolgimento'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Multi-sport?', answer: 'Sì, tutti sport.' }]
    },

    'sports-membership': {
        title: 'Gestione Tesseramenti',
        description: 'Sistema tesseramenti club.',
        shortDescription: 'Tesseramento via WhatsApp',
        features: ['Iscrizione', 'Pagamento', 'Rinnovo', 'Tessera digitale'],
        benefits: ['Semplice', 'Promemoria auto', 'Tessera digitale'],
        useCases: ['Club', 'Associazioni', 'Federazioni'],
        timeframe: '2 mesi',
        metrics: ['Membri', 'Retention'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Pagamento rateale?', answer: 'Sì, mensile possibile.' }]
    },

    'sports-event-registration': {
        title: 'Iscrizione Evento Sportivo',
        description: 'Sistema iscrizione gare/tornei.',
        shortDescription: 'Evento sportivo via WhatsApp',
        features: ['Iscrizione', 'Pagamento', 'Pettorale', 'Risultati'],
        benefits: ['Iscrizione facile', 'Conferma immediata', 'Risultati live'],
        useCases: ['Organizzatori', 'Federazioni', 'Club'],
        timeframe: '2 mesi',
        metrics: ['Iscrizioni', 'Partecipazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Pettorale?', answer: 'Inviato via WhatsApp.' }]
    },

    // ==================== BENESSERE ====================

    'massage-booking': {
        title: 'Prenotazione Massaggio',
        description: 'Sistema prenotazione massaggi.',
        shortDescription: 'Massaggio via WhatsApp',
        features: ['Tipo massaggio', 'Terapista', 'Appuntamento', 'A domicilio'],
        benefits: ['Relax', 'Scelta terapista', 'A domicilio possibile'],
        useCases: ['Spa', 'Massaggiatori', 'Wellness'],
        timeframe: '2 mesi',
        metrics: ['Appuntamenti', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'A domicilio?', answer: 'Sì, disponibile.' }]
    },

    'meditation-class': {
        title: 'Corsi Meditazione',
        description: 'Sistema prenotazione meditazione.',
        shortDescription: 'Meditazione via WhatsApp',
        features: ['Sessioni', 'Insegnante', 'Presenza/Online', 'Progressione'],
        benefits: ['Benessere mentale', 'Flessibilità', 'Monitoraggio'],
        useCases: ['Centri', 'Insegnanti', 'App'],
        timeframe: '2 mesi',
        metrics: ['Sessioni', 'Coinvolgimento'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Principianti?', answer: 'Sì, tutti livelli.' }]
    },

    // ==================== MOTO ====================

    'motorcycle-service': {
        title: 'Servizio Moto',
        description: 'Sistema prenotazione manutenzione moto.',
        shortDescription: 'Moto via WhatsApp',
        features: ['Tipo servizio', 'Marca', 'Appuntamento', 'Preventivo'],
        benefits: ['Moto in forma', 'Specializzato', 'Trasparente'],
        useCases: ['Officine moto', 'Concessionari', 'Indipendenti'],
        timeframe: '2 mesi',
        metrics: ['Appuntamenti', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Tutte marche?', answer: 'Sì, o specializzato.' }]
    },

    'motorcycle-rental': {
        title: 'Noleggio Moto',
        description: 'Sistema noleggio moto.',
        shortDescription: 'Noleggio moto via WhatsApp',
        features: ['Catalogo', 'Prenotazione', 'Assicurazione', 'Consegna'],
        benefits: ['Libertà', 'Scelta', 'Tutto incluso'],
        useCases: ['Noleggiatori', 'Turismo', 'Eventi'],
        timeframe: '2 mesi',
        metrics: ['Noleggi', 'Soddisfazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Patente richiesta?', answer: 'Sì, patente valida obbligatoria.' }]
    },

    // ==================== BICI ====================

    'bike-rental': {
        title: 'Noleggio Bici',
        description: 'Sistema noleggio bici.',
        shortDescription: 'Bici via WhatsApp',
        features: ['Tipi bici', 'Prenotazione', 'Durata', 'Consegna'],
        benefits: ['Mobilità', 'Ecologico', 'Flessibile'],
        useCases: ['Noleggiatori', 'Città', 'Turismo'],
        timeframe: '2 mesi',
        metrics: ['Noleggi', 'Utilizzo'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Elettrica?', answer: 'Sì, classica e elettrica.' }]
    },

    'bike-repair': {
        title: 'Riparazione Bici',
        description: 'Sistema riparazione bici.',
        shortDescription: 'Ripara bici via WhatsApp',
        features: ['Descrizione', 'Foto', 'Preventivo', 'A domicilio'],
        benefits: ['Bici in forma', 'Pratico', 'A domicilio'],
        useCases: ['Riparatori', 'Negozi', 'Mobile'],
        timeframe: '2 mesi',
        metrics: ['Riparazioni', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'A domicilio?', answer: 'Sì, su richiesta.' }]
    },

    // ==================== CINEMA ====================

    'cinema-ticket-booking': {
        title: 'Prenotazione Cinema',
        description: 'Sistema prenotazione posti cinema.',
        shortDescription: 'Cinema via WhatsApp',
        features: ['Film', 'Proiezioni', 'Posti', 'E-ticket'],
        benefits: ['Posti garantiti', 'Niente coda', 'E-ticket'],
        useCases: ['Cinema', 'Multisala', 'Indie'],
        timeframe: '3 mesi',
        metrics: ['Prenotazioni', 'Occupazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'E-ticket?', answer: 'Sì, QR code diretto.' }]
    },

    // ==================== TEATRO ====================

    'theater-ticket-booking': {
        title: 'Prenotazione Teatro',
        description: 'Sistema prenotazione spettacoli.',
        shortDescription: 'Teatro via WhatsApp',
        features: ['Spettacoli', 'Date', 'Posti', 'E-biglietto'],
        benefits: ['Posto garantito', 'Scelta posto', 'E-biglietto'],
        useCases: ['Teatri', 'Opere', 'Sale'],
        timeframe: '3 mesi',
        metrics: ['Vendite', 'Occupazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Cambio?', answer: 'Secondo condizioni.' }]
    },

    // ==================== MUSEO ====================

    'museum-ticket-booking': {
        title: 'Prenotazione Museo',
        description: 'Sistema prenotazione ingressi museo.',
        shortDescription: 'Museo via WhatsApp',
        features: ['Mostre', 'Fasce', 'Biglietti', 'Audioguida'],
        benefits: ['Ingresso garantito', 'Niente coda', 'Audioguida inclusa'],
        useCases: ['Musei', 'Gallerie', 'Monumenti'],
        timeframe: '2 mesi',
        metrics: ['Vendite', 'Visite'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Audioguida?', answer: 'Sì, via app o in loco.' }]
    },

    // ==================== PARCO DIVERTIMENTI ====================

    'theme-park-booking': {
        title: 'Prenotazione Parco Divertimenti',
        description: 'Sistema prenotazione parchi.',
        shortDescription: 'Parco via WhatsApp',
        features: ['Biglietti', 'Date', 'Pass VIP', 'E-biglietto'],
        benefits: ['Ingresso garantito', 'Meno attesa VIP', 'E-biglietto'],
        useCases: ['Parchi', 'Resort', 'Agenzie'],
        timeframe: '3 mesi',
        metrics: ['Vendite', 'Visitatori'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Pass VIP?', answer: 'Sì, salta-coda disponibile.' }]
    },

    // ==================== ZOO & ACQUARIO ====================

    'zoo-aquarium-booking': {
        title: 'Prenotazione Zoo/Acquario',
        description: 'Sistema prenotazione zoo.',
        shortDescription: 'Zoo via WhatsApp',
        features: ['Biglietti', 'Fasce', 'Esperienze', 'Famiglie'],
        benefits: ['Ingresso garantito', 'Esperienze uniche', 'Tariffe famiglie'],
        useCases: ['Zoo', 'Acquari', 'Parchi animali'],
        timeframe: '2 mesi',
        metrics: ['Vendite', 'Visitatori'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Nutrire animali?', answer: 'Sì, esperienze disponibili.' }]
    },

    // ==================== CAMPEGGIO ====================

    'camping-booking': {
        title: 'Prenotazione Campeggio',
        description: 'Sistema prenotazione piazzole.',
        shortDescription: 'Campeggio via WhatsApp',
        features: ['Piazzole', 'Alloggi', 'Date', 'Servizi'],
        benefits: ['Piazzola garantita', 'Scelta', 'Servizi inclusi'],
        useCases: ['Camping', 'Resort', 'Piattaforme'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Occupazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Animali?', answer: 'Secondo campeggio.' }]
    },

    // ==================== CASE VACANZA ====================

    'vacation-rental-inquiry': {
        title: 'Richiesta Case Vacanza',
        description: 'Sistema richiesta affitti stagionali.',
        shortDescription: 'Casa vacanza via WhatsApp',
        features: ['Disponibilità', 'Dettagli', 'Prenotazione', 'Check-in'],
        benefits: ['Risposta rapida', 'Info complete', 'Prenotazione facile'],
        useCases: ['Proprietari', 'Agenzie', 'Conciergerie'],
        timeframe: '2 mesi',
        metrics: ['Richieste', 'Conversioni'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Pulizie?', answer: 'Incluse o opzionali.' }]
    },

    // ==================== TRAGHETTO ====================

    'ferry-booking': {
        title: 'Prenotazione Traghetto',
        description: 'Sistema prenotazione traversate.',
        shortDescription: 'Traghetto via WhatsApp',
        features: ['Tratte', 'Orari', 'Veicoli', 'Cabine'],
        benefits: ['Traversata garantita', 'Scelta cabina', 'Veicolo incluso'],
        useCases: ['Compagnie', 'Agenzie', 'Tour operator'],
        timeframe: '3 mesi',
        metrics: ['Prenotazioni', 'Passeggeri'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Veicolo richiesto?', answer: 'No, solo passeggero possibile.' }]
    },

    // ==================== BUS ====================

    'bus-booking': {
        title: 'Prenotazione Bus',
        description: 'Sistema prenotazione linee bus.',
        shortDescription: 'Bus via WhatsApp',
        features: ['Linee', 'Orari', 'Prenotazione', 'E-biglietto'],
        benefits: ['Posto garantito', 'Economico', 'E-biglietto'],
        useCases: ['Compagnie', 'Agenzie', 'Piattaforme'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Passeggeri'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Bagagli?', answer: 'Inclusi, stiva + cabina.' }]
    },

    // ==================== TRENO ====================

    'train-booking': {
        title: 'Prenotazione Treno',
        description: 'Sistema prenotazione biglietti treno.',
        shortDescription: 'Treno via WhatsApp',
        features: ['Tratte', 'Orari', 'Classi', 'E-biglietto'],
        benefits: ['Biglietto garantito', 'Scelta posto', 'E-biglietto'],
        useCases: ['Stazioni', 'Agenzie', 'App'],
        timeframe: '3 mesi',
        metrics: ['Prenotazioni', 'Passeggeri'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Prima classe?', answer: 'Sì, tutte classi.' }]
    },

    // ==================== NAVETTA ====================

    'shuttle-booking': {
        title: 'Prenotazione Navetta',
        description: 'Sistema prenotazione navette.',
        shortDescription: 'Navetta via WhatsApp',
        features: ['Tratte', 'Orari', 'Prenotazione', 'Tracciamento'],
        benefits: ['Posto garantito', 'Regolare', 'Affidabile'],
        useCases: ['Compagnie', 'Aeroporti', 'Stazioni'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Puntualità'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Bagagli?', answer: 'Sì, inclusi.' }]
    },

    // ==================== IMMERSIONI ====================

    'diving-booking': {
        title: 'Prenotazione Immersioni',
        description: 'Sistema prenotazione immersioni.',
        shortDescription: 'Immersioni via WhatsApp',
        features: ['Siti', 'Livelli', 'Attrezzatura', 'Certificazione'],
        benefits: ['Esplora fondali', 'Sicurezza', 'Certificato'],
        useCases: ['Centri diving', 'Club', 'Resort'],
        timeframe: '2 mesi',
        metrics: ['Immersioni', 'Certificazioni'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Principianti?', answer: 'Sì, battesimi disponibili.' }]
    },

    // ==================== SURF ====================

    'surf-lesson-booking': {
        title: 'Lezioni Surf',
        description: 'Sistema prenotazione lezioni surf.',
        shortDescription: 'Surf via WhatsApp',
        features: ['Lezioni', 'Livello', 'Attrezzatura', 'Foto'],
        benefits: ['Cavalca onde', 'Attrezzatura inclusa', 'Foto ricordo'],
        useCases: ['Scuole surf', 'Camp', 'Resort'],
        timeframe: '2 mesi',
        metrics: ['Lezioni', 'Progressione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Attrezzatura?', answer: 'Sì, tavola e muta inclusi.' }]
    },

    // ==================== ARRAMPICATA ====================

    'climbing-booking': {
        title: 'Prenotazione Arrampicata',
        description: 'Sistema prenotazione pareti arrampicata.',
        shortDescription: 'Arrampicata via WhatsApp',
        features: ['Fasce', 'Attrezzatura', 'Corsi', 'Abbonamenti'],
        benefits: ['Parete garantita', 'Sicurezza', 'Coaching'],
        useCases: ['Palestre arrampicata', 'Club', 'Centri'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Climbers'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Principianti?', answer: 'Sì, corsi base disponibili.' }]
    },

    // ==================== PARACADUTISMO ====================

    'skydiving-booking': {
        title: 'Prenotazione Paracadutismo',
        description: 'Sistema prenotazione lanci.',
        shortDescription: 'Lancio via WhatsApp',
        features: ['Tipi lancio', 'Date', 'Video', 'Certificato'],
        benefits: ['Adrenalina max', 'Video ricordo', 'Certificato'],
        useCases: ['Centri paracadutismo', 'Eventi', 'Regali'],
        timeframe: '2 mesi',
        metrics: ['Lanci', 'Soddisfazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Peso max?', answer: 'Generalmente 95-100kg.' }]
    },

    // ==================== EQUITAZIONE ====================

    'horse-riding-booking': {
        title: 'Prenotazione Equitazione',
        description: 'Sistema prenotazione lezioni equitazione.',
        shortDescription: 'Equitazione via WhatsApp',
        features: ['Lezioni', 'Passeggiate', 'Livello', 'Cavalli'],
        benefits: ['Connessione natura', 'Tutti livelli', 'Scelta cavallo'],
        useCases: ['Centri ippici', 'Fattorie', 'Resort'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Cavalieri'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Principianti?', answer: 'Sì, tutti livelli benvenuti.' }]
    },

    // ==================== PARAPENDIO ====================

    'paragliding-booking': {
        title: 'Prenotazione Parapendio',
        description: 'Sistema prenotazione voli parapendio.',
        shortDescription: 'Parapendio via WhatsApp',
        features: ['Voli tandem', 'Meteo', 'Prenotazione', 'Video'],
        benefits: ['Volo indimenticabile', 'Sicurezza', 'Video ricordo'],
        useCases: ['Scuole parapendio', 'Guide', 'Turismo'],
        timeframe: '2 mesi',
        metrics: ['Voli', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Meteo?', answer: 'Volo sotto riserva condizioni.' }]
    },

    // ==================== CANOA KAYAK ====================

    'kayak-rental': {
        title: 'Noleggio Kayak/Canoa',
        description: 'Sistema noleggio kayak.',
        shortDescription: 'Kayak via WhatsApp',
        features: ['Tipi', 'Durata', 'Percorsi', 'Trasporto'],
        benefits: ['Avventura acquatica', 'Percorsi vari', 'Attrezzatura completa'],
        useCases: ['Noleggiatori', 'Basi divertimento', 'Turismo'],
        timeframe: '2 mesi',
        metrics: ['Noleggi', 'Partecipanti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Trasporto ritorno?', answer: 'Sì, navetta inclusa.' }]
    },

    // ==================== SPELEOLOGIA ====================

    'caving-tour-booking': {
        title: 'Visite Speleologiche',
        description: 'Sistema prenotazione speleologia.',
        shortDescription: 'Speleologia via WhatsApp',
        features: ['Percorsi', 'Difficoltà', 'Attrezzatura', 'Guida'],
        benefits: ['Scoperta sotterranea', 'Sicurezza', 'Guida esperta'],
        useCases: ['Grotte', 'Guide', 'Turismo'],
        timeframe: '2 mesi',
        metrics: ['Visite', 'Partecipanti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Claustrofobi?', answer: 'Percorsi adatti disponibili.' }]
    },

    // ==================== VIA FERRATA ====================

    'via-ferrata-booking': {
        title: 'Prenotazione Via Ferrata',
        description: 'Sistema prenotazione via ferrata.',
        shortDescription: 'Via Ferrata via WhatsApp',
        features: ['Percorsi', 'Difficoltà', 'Attrezzatura', 'Guida'],
        benefits: ['Arrampicata sicura', 'Viste incredibili', 'Guida pro'],
        useCases: ['Guide', 'Stazioni', 'Turismo avventura'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Partecipanti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Vertigini?', answer: 'Sconsigliato se vertigini severe.' }]
    },

    // ==================== PESCA ====================

    'fishing-trip-booking': {
        title: 'Prenotazione Pesca',
        description: 'Sistema prenotazione uscite pesca.',
        shortDescription: 'Pesca via WhatsApp',
        features: ['Tipo pesca', 'Barca/Riva', 'Attrezzatura', 'Guida'],
        benefits: ['Migliori spot', 'Attrezzatura', 'Guida locale'],
        useCases: ['Guide pesca', 'Barche', 'Lodge'],
        timeframe: '2 mesi',
        metrics: ['Uscite', 'Catture'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Licenza?', answer: 'Assistenza per ottenerla.' }]
    },

    // ==================== CACCIA ====================

    'hunting-trip-booking': {
        title: 'Prenotazione Caccia',
        description: 'Sistema prenotazione uscite caccia.',
        shortDescription: 'Caccia via WhatsApp',
        features: ['Tipo selvaggina', 'Territorio', 'Licenza', 'Guida'],
        benefits: ['Terreni qualità', 'Guida esperta', 'Legale'],
        useCases: ['Riserve', 'Guide', 'Club'],
        timeframe: '3 mesi',
        metrics: ['Uscite', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Licenza richiesta?', answer: 'Sì, assistenza disponibile.' }]
    },

    // ==================== GENERATORE ====================

    'generator-service': {
        title: 'Servizio Generatori',
        description: 'Sistema manutenzione gruppi elettrogeni.',
        shortDescription: 'Generatori via WhatsApp',
        features: ['Manutenzione', 'Emergenze', 'Noleggio', 'Allerte'],
        benefits: ['Energia garantita', 'Reattività', 'Documentazione'],
        useCases: ['Fornitori', 'Aziende', 'Eventi'],
        timeframe: '2 mesi',
        metrics: ['Interventi', 'Disponibilità'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Emergenze 24/7?', answer: 'Sì, servizio continuo.' }]
    },

    // ==================== TENDE ====================

    'curtains-blinds-service': {
        title: 'Servizio Tende/Tapparelle',
        description: 'Sistema posa tende.',
        shortDescription: 'Tende via WhatsApp',
        features: ['Misure', 'Scelta', 'Posa', 'Preventivo'],
        benefits: ['Posa pro', 'Scelta ampia', 'Finiture perfette'],
        useCases: ['Posatori', 'Decoratori', 'Negozi'],
        timeframe: '2 mesi',
        metrics: ['Pose', 'Soddisfazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Su misura?', answer: 'Sì, misure incluse.' }]
    },

    // ==================== OROLOGIAIO ====================

    'watch-repair-service': {
        title: 'Riparazione Orologi',
        description: 'Sistema riparazione orologeria.',
        shortDescription: 'Orologi via WhatsApp',
        features: ['Descrizione', 'Foto', 'Preventivo', 'Tempi'],
        benefits: ['Orologi salvati', 'Artigianato', 'Qualità'],
        useCases: ['Orologiai', 'Gioiellieri', 'Collezionisti'],
        timeframe: '2 mesi',
        metrics: ['Riparazioni', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Marchi lusso?', answer: 'Sì, certificati.' }]
    },

    // ==================== SERVIZI RELIGIOSI ====================

    'religious-service-booking': {
        title: 'Servizi Religiosi',
        description: 'Sistema prenotazione cerimonie.',
        shortDescription: 'Cerimonie via WhatsApp',
        features: ['Tipo cerimonia', 'Data', 'Prenotazione', 'Preparazione'],
        benefits: ['Organizzazione', 'Accompagnamento', 'Serenità'],
        useCases: ['Parrocchie', 'Moschee', 'Templi'],
        timeframe: '2 mesi',
        metrics: ['Cerimonie', 'Soddisfazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Quali cerimonie?', answer: 'Battesimo, matrimonio, funerale...' }]
    },

    // ==================== BENEFICENZA ====================

    'donation-charity': {
        title: 'Raccolta Beneficenza',
        description: 'Sistema raccolta donazioni.',
        shortDescription: 'Donazione via WhatsApp',
        features: ['Modulo', 'Campagne', 'Ricevuta', 'Updates'],
        benefits: ['Donazioni facili', 'Trasparenza', 'Impatto visibile'],
        useCases: ['ONG', 'Associazioni', 'Fondazioni'],
        timeframe: '2 mesi',
        metrics: ['Importi', 'Donatori'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Ricevuta fiscale?', answer: 'Sì, automatica.' }]
    },

    // ==================== SAFARI ====================

    'safari-tour-booking': {
        title: 'Prenotazione Safari',
        description: 'Sistema prenotazione safari.',
        shortDescription: 'Safari via WhatsApp',
        features: ['Tipi safari', 'Durata', 'Alloggio', 'Guide'],
        benefits: ['Avventura unica', 'Guide esperte', 'Ricordi vita'],
        useCases: ['Operatori', 'Lodge', 'Agenzie'],
        timeframe: '3 mesi',
        metrics: ['Prenotazioni', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Stagione migliore?', answer: 'Secondo destinazione.' }]
    },

    // ==================== SUPPORTO PELLEGRINAGGIO ====================

    'religious-pilgrimage-support': {
        title: 'Supporto Pellegrinaggio',
        description: 'Sistema accompagnamento pellegrini.',
        shortDescription: 'Supporto pellegrino via WhatsApp',
        features: ['Info percorso', 'Supporto 24/7', 'Alloggio', 'Emergenze'],
        benefits: ['Accompagnamento', 'Serenità', 'Aiuto continuo'],
        useCases: ['Agenzie', 'Organizzazioni', 'Guide'],
        timeframe: '3 mesi',
        metrics: ['Pellegrini', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Multilingue?', answer: 'Sì, supporto in più lingue.' }]
    },

    // ==================== CONSEGNA RISTORANTE ====================

    'food-delivery-restaurant': {
        title: 'Consegna Ristorante',
        description: 'Sistema consegna diretta ristorante.',
        shortDescription: 'Consegna via WhatsApp',
        features: ['Menu', 'Ordine', 'Tracciamento', 'Pagamento'],
        benefits: ['Senza commissione', 'Contatto diretto', 'Fidelizzazione'],
        useCases: ['Ristoranti', 'Caffè', 'Panetterie'],
        timeframe: '2 mesi',
        metrics: ['Ordini', 'Risparmi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Commissione?', answer: 'Nessuna commissione piattaforma.' }]
    },

    // ==================== MECCANICO MOBILE ====================

    'mobile-mechanic': {
        title: 'Meccanico Mobile',
        description: 'Sistema riparazione auto sul posto.',
        shortDescription: 'Meccanico mobile via WhatsApp',
        features: ['Descrizione guasto', 'Posizione', 'Diagnosi', 'Riparazione'],
        benefits: ['A casa tua', 'Risparmio tempo', 'Prezzo trasparente'],
        useCases: ['Meccanici', 'Flotte', 'Privati'],
        timeframe: '2 mesi',
        metrics: ['Interventi', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Tutto riparabile?', answer: 'Maggior parte guasti comuni.' }]
    },

    // ==================== LAVANDERIA ====================

    'dry-cleaning-service': {
        title: 'Lavanderia a Domicilio',
        description: 'Sistema lavanderia con ritiro.',
        shortDescription: 'Lavanderia via WhatsApp',
        features: ['Ritiro', 'Servizi', 'Consegna', 'Abbonamento'],
        benefits: ['Pratico', 'Qualità pro', 'Risparmio tempo'],
        useCases: ['Lavanderie', 'Privati', 'Aziende'],
        timeframe: '2 mesi',
        metrics: ['Ordini', 'Clienti abituali'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Tempi?', answer: '24-48h standard.' }]
    },

    'laundry-service': {
        title: 'Lavaggio a Domicilio',
        description: 'Sistema lavaggio biancheria a domicilio.',
        shortDescription: 'Lavaggio via WhatsApp',
        features: ['Ritiro', 'Lavaggio', 'Stiratura', 'Consegna'],
        benefits: ['Tempo libero', 'Qualità', 'Economico'],
        useCases: ['Lavanderie', 'Privati', 'Airbnb'],
        timeframe: '2 mesi',
        metrics: ['Kg lavati', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Al kg?', answer: 'Sì, o forfait.' }]
    },

    // ==================== ALLERGENI ====================

    'food-allergy-alerts': {
        title: 'Allerte Allergeni',
        description: 'Sistema info allergeni ristorante.',
        shortDescription: 'Allergeni via WhatsApp',
        features: ['Menu filtrato', 'Allergeni', 'Raccomandazioni', 'Avviso chef'],
        benefits: ['Mangiare sereno', 'Sicurezza', 'Personalizzato'],
        useCases: ['Ristoranti', 'Hotel', 'Catering'],
        timeframe: '2 mesi',
        metrics: ['Richieste', 'Sicurezza'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Quali allergeni?', answer: 'Tutti i 14 maggiori e oltre.' }]
    },

    // ==================== CARTE REGALO ====================

    'gift-card-service': {
        title: 'Carte Regalo',
        description: 'Sistema vendita carte regalo.',
        shortDescription: 'Carta regalo via WhatsApp',
        features: ['Importi', 'Personalizzazione', 'Invio digitale', 'Utilizzo'],
        benefits: ['Regalo perfetto', 'Istantaneo', 'Personalizzato'],
        useCases: ['Negozi', 'Ristoranti', 'Servizi'],
        timeframe: '2 mesi',
        metrics: ['Vendite', 'Utilizzo'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Validità?', answer: 'Generalmente 1 anno.' }]
    },

    // ==================== FINAL 37 SOLUTIONS ====================

    'heating-oil-delivery': {
        title: 'Consegna Gasolio Riscaldamento',
        description: 'Sistema ordini gasolio riscaldamento.',
        shortDescription: 'Gasolio via WhatsApp',
        features: ['Livello serbatoio', 'Ordine', 'Consegna', 'Storico'],
        benefits: ['Mai vuoti', 'Prezzo migliore', 'Consegna programmata'],
        useCases: ['Distributori', 'Condomini', 'Case'],
        timeframe: '1 mese',
        metrics: ['Ordini', 'Litri'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Minimo?', answer: 'Secondo zona e fornitore.' }]
    },

    'ac-service': {
        title: 'Servizio Condizionatori',
        description: 'Sistema manutenzione condizionatori.',
        shortDescription: 'AC via WhatsApp',
        features: ['Manutenzione', 'Riparazione', 'Installazione', 'Promemoria'],
        benefits: ['Comfort garantito', 'Efficienza', 'Promemoria stagionale'],
        useCases: ['Tecnici', 'Idraulici', 'Amministratori'],
        timeframe: '2 mesi',
        metrics: ['Interventi', 'Contratti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Contratto?', answer: 'Sì, vantaggioso.' }]
    },

    'chimney-sweep-booking': {
        title: 'Spazzacamino',
        description: 'Sistema prenotazione spazzacamino.',
        shortDescription: 'Spazzacamino via WhatsApp',
        features: ['Appuntamento', 'Tipo camino', 'Certificato', 'Promemoria'],
        benefits: ['Sicurezza', 'Certificato', 'Promemoria annuale'],
        useCases: ['Spazzacamini', 'Manutentori', 'Case'],
        timeframe: '1 mese',
        metrics: ['Interventi', 'Certificati'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Frequenza?', answer: 'Annuale consigliato.' }]
    },

    'notary-appointment': {
        title: 'Appuntamento Notaio',
        description: 'Sistema prenotazione notaio.',
        shortDescription: 'Notaio via WhatsApp',
        features: ['Tipo atto', 'Appuntamento', 'Documenti', 'Preventivo'],
        benefits: ['Prenotazione facile', 'Preparazione guidata', 'Trasparenza'],
        useCases: ['Notai', 'Studi', 'Clienti'],
        timeframe: '2 mesi',
        metrics: ['Appuntamenti', 'Atti'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Documenti?', answer: 'Lista fornita in anticipo.' }]
    },

    'tax-document-collection': {
        title: 'Raccolta Documenti Fiscali',
        description: 'Sistema raccolta documenti per dichiarazioni.',
        shortDescription: 'Documenti fisco via WhatsApp',
        features: ['Upload', 'Checklist', 'Stato', 'Promemoria'],
        benefits: ['Niente dimenticati', 'Organizzazione', 'Scadenze rispettate'],
        useCases: ['Commercialisti', 'CAF', 'Clienti'],
        timeframe: '2 mesi',
        metrics: ['Documenti', 'Dichiarazioni'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Scan?', answer: 'Sì, foto o scan accettati.' }]
    },

    'interior-design-consultation': {
        title: 'Consulenza Arredamento',
        description: 'Sistema prenotazione designer interni.',
        shortDescription: 'Arredamento via WhatsApp',
        features: ['Appuntamento', 'Moodboard', 'Preventivo', 'Shopping list'],
        benefits: ['Casa bella', 'Consiglio esperto', 'Lista acquisti'],
        useCases: ['Interior designer', 'Showroom', 'Clienti'],
        timeframe: '2 mesi',
        metrics: ['Consulenze', 'Progetti'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Prima consulenza?', answer: 'Spesso gratuita o ridotta.' }]
    },

    'vet-emergency-line': {
        title: 'Pronto Soccorso Veterinario',
        description: 'Sistema emergenze veterinarie.',
        shortDescription: 'Emergenza vet via WhatsApp',
        features: ['Descrizione urgenza', 'Contatto', 'Indicazioni', 'Clinica vicina'],
        benefits: ['Aiuto immediato', 'Guida pronto intervento', 'Clinica vicina'],
        useCases: ['Cliniche vet', 'Pronto soccorso', 'Proprietari'],
        timeframe: '2 mesi',
        metrics: ['Emergenze', 'Tempi risposta'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: '24/7?', answer: 'Sì, reperibilità continua.' }]
    },

    'vet-vaccination-reminder': {
        title: 'Promemoria Vaccinazioni Animali',
        description: 'Sistema promemoria vaccini animali.',
        shortDescription: 'Vaccinazioni via WhatsApp',
        features: ['Calendario', 'Promemoria', 'Prenotazione', 'Libretto digitale'],
        benefits: ['Animale protetto', 'Mai dimenticare', 'Libretto digitale'],
        useCases: ['Veterinari', 'Cliniche', 'Proprietari'],
        timeframe: '1 mese',
        metrics: ['Promemoria', 'Vaccinazioni'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Tutti animali?', answer: 'Sì, cani, gatti e altro.' }]
    },

    'pool-membership': {
        title: 'Abbonamento Piscina',
        description: 'Sistema abbonamenti piscina.',
        shortDescription: 'Abbonamento piscina via WhatsApp',
        features: ['Tipi abbonamento', 'Iscrizione', 'Pagamento', 'Tessera digitale'],
        benefits: ['Nuoto illimitato', 'Risparmio', 'Tessera digitale'],
        useCases: ['Piscine', 'Centri sportivi', 'Club'],
        timeframe: '2 mesi',
        metrics: ['Abbonati', 'Retention'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Sospensione?', answer: 'Possibile per malattia.' }]
    },

    'gov-document-status': {
        title: 'Stato Documento Pubblico',
        description: 'Sistema stato documenti pubblici.',
        shortDescription: 'Stato documento via WhatsApp',
        features: ['Consultazione', 'Notifiche', 'Ritiro', 'Promemoria'],
        benefits: ['Sempre informato', 'Niente code inutili', 'Ritiro quando pronto'],
        useCases: ['Comuni', 'Prefetture', 'Cittadini'],
        timeframe: '2 mesi',
        metrics: ['Consultazioni', 'Soddisfazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Sicuro?', answer: 'Sì, crittografato e verificato.' }]
    },

    'media-podcast-updates': {
        title: 'Notifiche Podcast',
        description: 'Sistema notifiche nuovi episodi.',
        shortDescription: 'Podcast via WhatsApp',
        features: ['Nuovi episodi', 'Anteprime', 'Link', 'Interazione'],
        benefits: ['Mai perdere episodio', 'Contenuti esclusivi', 'Comunità'],
        useCases: ['Podcaster', 'Media', 'Creator'],
        timeframe: '1 mese',
        metrics: ['Iscritti', 'Tasso apertura'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Frequenza?', answer: 'A ogni episodio.' }]
    },

    'pharmacy-medication-reminder': {
        title: 'Promemoria Farmaci',
        description: 'Sistema promemoria assunzione farmaci.',
        shortDescription: 'Promemoria farmaci via WhatsApp',
        features: ['Orari', 'Promemoria', 'Rinnovo', 'Interazioni'],
        benefits: ['Aderenza terapia', 'Mai dimenticare', 'Rinnovo facile'],
        useCases: ['Farmacie', 'Medici', 'Pazienti'],
        timeframe: '2 mesi',
        metrics: ['Promemoria', 'Aderenza'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Personalizzabile?', answer: 'Sì, orari personalizzati.' }]
    },

    'energy-outage-alerts': {
        title: 'Allerte Blackout',
        description: 'Sistema allerte interruzioni energia.',
        shortDescription: 'Blackout via WhatsApp',
        features: ['Allerte', 'Zona', 'Durata stimata', 'Ripristino'],
        benefits: ['Sempre informato', 'Pianificazione', 'Aggiornamenti'],
        useCases: ['Fornitori', 'Distributori', 'Business'],
        timeframe: '2 mesi',
        metrics: ['Allerte', 'Copertura'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Tempo reale?', answer: 'Sì, notifica immediata.' }]
    },

    'smart-home-energy': {
        title: 'Energia Casa Smart',
        description: 'Sistema monitoraggio energia smart.',
        shortDescription: 'Energia smart via WhatsApp',
        features: ['Consumi', 'Suggerimenti', 'Allerte', 'Report'],
        benefits: ['Risparmio', 'Consapevolezza', 'Ottimizzazione'],
        useCases: ['Fornitori', 'Installatori', 'Proprietari'],
        timeframe: '3 mesi',
        metrics: ['Risparmio', 'Coinvolgimento'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Dispositivi?', answer: 'Compatibile con principali sistemi.' }]
    },

    'insurance-policy-inquiry': {
        title: 'Consultazione Polizza',
        description: 'Sistema consultazione polizze.',
        shortDescription: 'Polizza via WhatsApp',
        features: ['Dettagli polizza', 'Coperture', 'Scadenze', 'Documenti'],
        benefits: ['Sempre informato', 'Documenti a portata', 'Scadenze'],
        useCases: ['Assicurazioni', 'Broker', 'Clienti'],
        timeframe: '2 mesi',
        metrics: ['Consultazioni', 'Self-service'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Modifiche?', answer: 'Richiesta e conferma.' }]
    },

    'insurance-quote-request': {
        title: 'Richiesta Preventivo Assicurazione',
        description: 'Sistema richiesta preventivi assicurativi.',
        shortDescription: 'Preventivo assicurazione via WhatsApp',
        features: ['Tipo polizza', 'Dati', 'Preventivo', 'Sottoscrizione'],
        benefits: ['Confronto facile', 'Prezzo migliore', 'Sottoscrizione rapida'],
        useCases: ['Compagnie', 'Broker', 'Comparatori'],
        timeframe: '2 mesi',
        metrics: ['Preventivi', 'Conversioni'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Tempi?', answer: 'Preventivo in minuti.' }]
    },

    'liquor-store-order': {
        title: 'Ordine Enoteca/Liquori',
        description: 'Sistema ordini bevande alcoliche.',
        shortDescription: 'Enoteca via WhatsApp',
        features: ['Catalogo', 'Ordine', 'Consigli', 'Consegna'],
        benefits: ['Scelta ampia', 'Consiglio esperto', 'Consegna a casa'],
        useCases: ['Enoteche', 'Distributori', 'Ristoranti'],
        timeframe: '2 mesi',
        metrics: ['Ordini', 'Valore medio'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Età minima?', answer: 'Solo maggiorenni.' }]
    },

    'gov-emergency-alerts': {
        title: 'Allerte Protezione Civile',
        description: 'Sistema allerte protezione civile.',
        shortDescription: 'Protezione civile via WhatsApp',
        features: ['Allerte', 'Tipo emergenza', 'Istruzioni', 'Status'],
        benefits: ['Sicurezza', 'Istruzioni chiare', 'Aggiornamenti'],
        useCases: ['Comuni', 'Prefetture', 'Cittadini'],
        timeframe: '3 mesi',
        metrics: ['Portata', 'Tempo diffusione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Zona?', answer: 'Sì, geolocalizzato.' }]
    },

    'lottery-results': {
        title: 'Risultati Lotteria',
        description: 'Sistema notifiche estrazioni.',
        shortDescription: 'Lotteria via WhatsApp',
        features: ['Numeri estratti', 'Verifica schedina', 'Jackpot', 'Statistiche'],
        benefits: ['Mai perdere risultati', 'Verifica immediata', 'Statistiche'],
        useCases: ['Ricevitorie', 'Giocatori', 'App'],
        timeframe: '1 mese',
        metrics: ['Iscritti', 'Verifiche'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Quali lotterie?', answer: 'Tutte le principali.' }]
    },

    'electronics-recycling': {
        title: 'Riciclo Elettronici',
        description: 'Sistema raccolta RAEE.',
        shortDescription: 'RAEE via WhatsApp',
        features: ['Tipo dispositivo', 'Ritiro', 'Certificato', 'Punti raccolta'],
        benefits: ['Smaltimento corretto', 'Certificato', 'Ecologico'],
        useCases: ['Riciclatori', 'Aziende', 'Privati'],
        timeframe: '2 mesi',
        metrics: ['Ritiri', 'Kg raccolti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Gratuito?', answer: 'Spesso sì per privati.' }]
    },

    'music-instrument-rental': {
        title: 'Noleggio Strumenti Musicali',
        description: 'Sistema noleggio strumenti.',
        shortDescription: 'Noleggio strumenti via WhatsApp',
        features: ['Catalogo', 'Noleggio', 'Durata', 'Manutenzione'],
        benefits: ['Prova prima acquisto', 'Flessibile', 'Manutenzione inclusa'],
        useCases: ['Negozi musica', 'Scuole', 'Musicisti'],
        timeframe: '2 mesi',
        metrics: ['Noleggi', 'Conversioni acquisto'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Acquisto?', answer: 'Sì, riscatto possibile.' }]
    },

    'restaurant-menu-customize': {
        title: 'Menu Personalizzato Ristorante',
        description: 'Sistema personalizzazione menu.',
        shortDescription: 'Menu custom via WhatsApp',
        features: ['Preferenze', 'Allergeni', 'Diete', 'Suggerimenti'],
        benefits: ['Esperienza personalizzata', 'Sicurezza alimentare', 'Soddisfazione'],
        useCases: ['Ristoranti', 'Hotel', 'Catering'],
        timeframe: '2 mesi',
        metrics: ['Utilizzo', 'Soddisfazione'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Vegano?', answer: 'Sì, tutti tipi dieta.' }]
    },

    'catering-event-management': {
        title: 'Gestione Evento Catering',
        description: 'Sistema gestione eventi catering.',
        shortDescription: 'Evento catering via WhatsApp',
        features: ['Dettagli evento', 'Menu', 'Timeline', 'Coordinate'],
        benefits: ['Evento perfetto', 'Comunicazione chiara', 'Coordinamento'],
        useCases: ['Catering', 'Event planner', 'Clienti'],
        timeframe: '3 mesi',
        metrics: ['Eventi', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Modifiche?', answer: 'Fino a 48h prima.' }]
    },

    'concert-fan-updates': {
        title: 'Aggiornamenti Fan Concerti',
        description: 'Sistema notifiche fan artisti.',
        shortDescription: 'Fan updates via WhatsApp',
        features: ['Tour', 'Prevendite', 'Contenuti esclusivi', 'Meet&greet'],
        benefits: ['Mai perdere biglietti', 'Contenuti esclusivi', 'Comunità'],
        useCases: ['Artisti', 'Etichette', 'Promoter'],
        timeframe: '2 mesi',
        metrics: ['Fan iscritti', 'Vendite'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Prevendite?', answer: 'Sì, accesso prioritario.' }]
    },

    'veterinary-telemedicine': {
        title: 'Telemedicina Veterinaria',
        description: 'Sistema consulenze veterinarie online.',
        shortDescription: 'Vet online via WhatsApp',
        features: ['Video consulto', 'Foto/Video', 'Diagnosi', 'Prescrizione'],
        benefits: ['Consulto rapido', 'Da casa', 'Primo parere'],
        useCases: ['Veterinari', 'Cliniche', 'Proprietari'],
        timeframe: '3 mesi',
        metrics: ['Consulti', 'Soddisfazione'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Emergenze?', answer: 'Per non urgenti, altrimenti clinica.' }]
    },

    'plant-care-service': {
        title: 'Servizio Cura Piante',
        description: 'Sistema manutenzione piante.',
        shortDescription: 'Piante via WhatsApp',
        features: ['Manutenzione', 'Annaffiatura', 'Potatura', 'Consulenza'],
        benefits: ['Piante sane', 'Nessun pensiero', 'Consigli'],
        useCases: ['Vivaisti', 'Florist', 'Uffici'],
        timeframe: '2 mesi',
        metrics: ['Clienti', 'Abbonamenti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Vacanze?', answer: 'Sì, servizio vacanze disponibile.' }]
    },

    'wedding-vendor-booking': {
        title: 'Prenotazione Fornitori Matrimonio',
        description: 'Sistema prenotazione fornitori matrimoni.',
        shortDescription: 'Fornitori matrimonio via WhatsApp',
        features: ['Ricerca', 'Disponibilità', 'Preventivo', 'Prenotazione'],
        benefits: ['Tutto in un posto', 'Confronto facile', 'Prenotazione sicura'],
        useCases: ['Fornitori', 'Wedding planner', 'Coppie'],
        timeframe: '3 mesi',
        metrics: ['Prenotazioni', 'Conversioni'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Quali fornitori?', answer: 'Tutti servizi matrimonio.' }]
    },

    'personal-chef-service': {
        title: 'Chef a Domicilio',
        description: 'Sistema prenotazione chef privato.',
        shortDescription: 'Chef a casa via WhatsApp',
        features: ['Menu', 'Appuntamento', 'Ingredienti', 'Pulizia'],
        benefits: ['Esperienza unica', 'Tutto organizzato', 'Personalizzato'],
        useCases: ['Chef', 'Catering', 'Privati'],
        timeframe: '2 mesi',
        metrics: ['Eventi', 'Soddisfazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Ingredienti?', answer: 'Portati dallo chef.' }]
    },

    'home-staging-service': {
        title: 'Home Staging',
        description: 'Sistema prenotazione home staging.',
        shortDescription: 'Home staging via WhatsApp',
        features: ['Valutazione', 'Preventivo', 'Allestimento', 'Servizio foto'],
        benefits: ['Casa venduta prima', 'Prezzo migliore', 'Foto pro'],
        useCases: ['Stager', 'Immobiliari', 'Proprietari'],
        timeframe: '2 mesi',
        metrics: ['Progetti', 'Vendite'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Tempi vendita?', answer: 'Fino al 50% meno.' }]
    },

    'escape-game-team-building': {
        title: 'Team Building Escape Room',
        description: 'Sistema prenotazione team building.',
        shortDescription: 'Team building via WhatsApp',
        features: ['Gruppi', 'Date', 'Preventivo', 'Personalizzazione'],
        benefits: ['Team più unito', 'Esperienza unica', 'Su misura'],
        useCases: ['Escape room', 'HR', 'Aziende'],
        timeframe: '2 mesi',
        metrics: ['Eventi', 'Soddisfazione'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Numero persone?', answer: 'Da 4 a 100+.' }]
    },

    'wine-tasting-booking': {
        title: 'Prenotazione Degustazione Vino',
        description: 'Sistema prenotazione degustazioni.',
        shortDescription: 'Degustazione via WhatsApp',
        features: ['Cantine', 'Tour', 'Prenotazione', 'Trasporto'],
        benefits: ['Scoperta vini', 'Esperienza completa', 'Nessun pensiero'],
        useCases: ['Cantine', 'Tour operator', 'Enoteche'],
        timeframe: '2 mesi',
        metrics: ['Prenotazioni', 'Vendite'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Trasporto?', answer: 'Disponibile su richiesta.' }]
    },

    'artisan-craft-order': {
        title: 'Ordini Artigianato',
        description: 'Sistema ordini prodotti artigianali.',
        shortDescription: 'Artigianato via WhatsApp',
        features: ['Catalogo', 'Personalizzazione', 'Ordine', 'Tracciamento'],
        benefits: ['Pezzi unici', 'Personalizzato', 'Supporto artigiani'],
        useCases: ['Artigiani', 'Botteghe', 'Mercati'],
        timeframe: '2 mesi',
        metrics: ['Ordini', 'Artigiani'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Su misura?', answer: 'Sì, sempre possibile.' }]
    },

    'subscription-box-service': {
        title: 'Box Abbonamento',
        description: 'Sistema gestione box abbonamento.',
        shortDescription: 'Box abbonamento via WhatsApp',
        features: ['Iscrizione', 'Personalizzazione', 'Gestione', 'Tracciamento'],
        benefits: ['Sorpresa mensile', 'Personalizzato', 'Flessibile'],
        useCases: ['Brand', 'Curatori', 'Distributori'],
        timeframe: '2 mesi',
        metrics: ['Abbonati', 'Retention'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Pausa?', answer: 'Sì, quando vuoi.' }]
    },

    'lost-pet-alert': {
        title: 'Allerta Animale Smarrito',
        description: 'Sistema segnalazione animali smarriti.',
        shortDescription: 'Animale smarrito via WhatsApp',
        features: ['Segnalazione', 'Foto', 'Zona', 'Condivisione'],
        benefits: ['Diffusione rapida', 'Comunità', 'Ritrovamento'],
        useCases: ['Rifugi', 'Veterinari', 'Proprietari'],
        timeframe: '1 mese',
        metrics: ['Segnalazioni', 'Ritrovamenti'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Gratuito?', answer: 'Sì, servizio comunità.' }]
    },

    'personal-trainer-online': {
        title: 'Personal Trainer Online',
        description: 'Sistema coaching fitness online.',
        shortDescription: 'PT online via WhatsApp',
        features: ['Programmi', 'Video', 'Check-in', 'Nutrizione'],
        benefits: ['Allenamento ovunque', 'Personalizzato', 'Supporto continuo'],
        useCases: ['Personal trainer', 'Palestre', 'App'],
        timeframe: '3 mesi',
        metrics: ['Clienti', 'Risultati'],
        deliveryTime: '4-6 settimane',
        faqs: [{ question: 'Video call?', answer: 'Sì, incluse.' }]
    },

    'art-gallery-booking': {
        title: 'Prenotazione Galleria Arte',
        description: 'Sistema prenotazione visite galleria.',
        shortDescription: 'Galleria via WhatsApp',
        features: ['Mostre', 'Visite guidate', 'Vernissage', 'Acquisti'],
        benefits: ['Esperienza esclusiva', 'Guida esperta', 'Accesso vernissage'],
        useCases: ['Gallerie', 'Artisti', 'Collezionisti'],
        timeframe: '2 mesi',
        metrics: ['Visite', 'Vendite'],
        deliveryTime: '3-4 settimane',
        faqs: [{ question: 'Acquisto opere?', answer: 'Sì, assistenza completa.' }]
    },

    // ==================== FINAL SOLUTION #300 ====================

    'local-market-delivery': {
        title: 'Consegna Mercato Locale',
        description: 'Sistema ordini mercato contadino.',
        shortDescription: 'Mercato locale via WhatsApp',
        features: ['Produttori', 'Prodotti', 'Ordine', 'Consegna/Ritiro'],
        benefits: ['Freschezza', 'Supporto locale', 'Km zero'],
        useCases: ['Mercati', 'Produttori', 'GAS'],
        timeframe: '2 mesi',
        metrics: ['Ordini', 'Produttori attivi'],
        deliveryTime: '2-3 settimane',
        faqs: [{ question: 'Biologico?', answer: 'Molti produttori certificati.' }]
    }
}

export default italianTranslations
