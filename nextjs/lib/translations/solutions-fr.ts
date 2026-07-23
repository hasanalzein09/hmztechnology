/**
 * 🌍 SOLUTIONS TRANSLATIONS - FRENCH (fr)
 * Complete French translations for all 300 solutions
 */

import type { SolutionTranslation } from '../types'

export const frenchTranslations: Record<string, SolutionTranslation> = {
    // ==================== HEALTHCARE ====================

    'whatsapp-clinic-booking': {
        title: 'Système de Réservation de Clinique via WhatsApp',
        description: 'Système automatisé de planification de rendez-vous pour cliniques médicales permettant aux patients de réserver, reprogrammer et annuler directement via WhatsApp.',
        shortDescription: 'Réservez vos rendez-vous clinique via WhatsApp',
        features: [
            'Disponibilité en temps réel',
            'Planification multi-médecins',
            'Rappels automatiques 24h avant',
            'Reprogrammation et annulation',
            'Intégration dossier patient',
            'Gestion liste d\'attente',
            'Support multilingue',
            'Synchronisation calendrier'
        ],
        benefits: [
            'Réduire les absences de 40%',
            'Économiser 3h/jour sur les appels',
            'Réservation disponible 24/7',
            'Satisfaction patient +60%',
            'Charge administrative -50%',
            'Meilleure utilisation des créneaux'
        ],
        useCases: [
            'Cliniques médicales',
            'Cabinets dentaires',
            'Consultations spécialisées',
            'Centres de diagnostic',
            'Centres de vaccination'
        ],
        timeframe: '6 mois',
        metrics: ['Absences réduites', 'Temps économisé', 'Plus de réservations'],
        deliveryTime: '2-3 semaines',
        faqs: [
            {
                question: 'Comment fonctionne la réservation?',
                answer: 'Les patients envoient un message, le bot montre les créneaux disponibles, ils choisissent et reçoivent confirmation.'
            },
            {
                question: 'Peut-il gérer plusieurs médecins?',
                answer: 'Oui, nombre illimité de médecins avec leurs propres horaires et paramètres.'
            },
            {
                question: 'Envoie-t-il des rappels?',
                answer: 'Oui, rappels automatiques 24h et 2h avant le rendez-vous.'
            },
            {
                question: 'Est-ce conforme HIPAA?',
                answer: 'Oui, toutes les données sont cryptées selon les normes internationales.'
            }
        ]
    },

    'whatsapp-pharmacy-assistant': {
        title: 'Assistant Pharmacie Intelligent sur WhatsApp',
        description: 'Assistant pharmacie propulsé par l\'IA aidant les clients à vérifier la disponibilité des médicaments et commander via WhatsApp.',
        shortDescription: 'Vérifiez la disponibilité des médicaments via WhatsApp',
        features: [
            'Disponibilité médicaments temps réel',
            'Upload ordonnances et OCR',
            'Suggestions alternatives',
            'Comparaison prix entre succursales',
            'Planification livraison',
            'Rappels dosage',
            'Alertes interactions',
            'Aide réclamations assurance'
        ],
        benefits: [
            'Ventes +35%',
            'Service client 24/7 automatisé',
            'Appels téléphoniques -70%',
            'Traitement commandes plus rapide',
            'Meilleure observance',
            'Meilleure gestion stocks'
        ],
        useCases: [
            'Pharmacies de quartier',
            'Pharmacies hospitalières',
            'Pharmacies en ligne',
            'Chaînes de pharmacies',
            'Parapharmacies'
        ],
        timeframe: '4 mois',
        metrics: ['Ventes augmentées', 'Coûts support réduits', 'Fidélisation client'],
        deliveryTime: '3-4 semaines',
        faqs: [
            {
                question: 'Comment les clients uploadent-ils les ordonnances?',
                answer: 'Ils prennent une photo et l\'envoient via WhatsApp. Notre système OCR IA la valide instantanément.'
            },
            {
                question: 'Peut-il suggérer des alternatives?',
                answer: 'Oui, si un médicament est en rupture, il suggère des alternatives avec mêmes principes actifs.'
            },
            {
                question: 'Gère-t-il les assurances?',
                answer: 'Oui, vérification couverture et aide aux documents numériques.'
            }
        ]
    },

    // ==================== E-COMMERCE ====================

    'whatsapp-product-catalog': {
        title: 'Catalogue Produits Interactif sur WhatsApp',
        description: 'Présentez vos produits professionnellement sur WhatsApp avec images, prix et descriptions, permettant aux clients d\'acheter directement.',
        shortDescription: 'Catalogue produits professionnel sur WhatsApp',
        features: [
            'Présentation produits avec images',
            'Navigation par catégories',
            'Recherche produits',
            'Affichage prix et remises',
            'Ajouter au panier',
            'Commande directe',
            'Partage produits',
            'Alertes disponibilité'
        ],
        benefits: [
            'Ventes +50%',
            'Expérience shopping simple',
            'Pas d\'app séparée nécessaire',
            'Accès base clients WhatsApp',
            'Questions répétitives réduites',
            'Commandes plus rapides'
        ],
        useCases: [
            'Boutiques e-commerce',
            'Magasins de mode',
            'Électronique',
            'Bijouteries',
            'Magasins de meubles'
        ],
        timeframe: '3 mois',
        metrics: ['Ventes augmentées', 'Taux conversion', 'Satisfaction client'],
        deliveryTime: '2-3 semaines',
        faqs: [
            {
                question: 'Comment fonctionne le catalogue?',
                answer: 'Le client envoie un message, voit les catégories, choisit un produit, voit détails et images, et peut commander.'
            },
            {
                question: 'Les produits peuvent-ils être mis à jour?',
                answer: 'Oui, tableau de bord simple pour ajouter, modifier et supprimer instantanément.'
            },
            {
                question: 'Supporte-t-il les paiements?',
                answer: 'Oui, intégration passerelles de paiement et paiement à la livraison.'
            }
        ]
    },

    'whatsapp-flash-sale': {
        title: 'Campagnes Ventes Flash sur WhatsApp',
        description: 'Lancez des promotions exclusives pour clients WhatsApp avec comptes à rebours et offres limitées qui augmentent les achats.',
        shortDescription: 'Offres exclusives sur WhatsApp',
        features: [
            'Lancement campagnes programmé',
            'Comptes à rebours',
            'Offres exclusives WhatsApp',
            'Ciblage par segments',
            'Liens d\'achat directs',
            'Suivi performance campagne',
            'Arrêt auto si rupture',
            'Annonces gagnants'
        ],
        benefits: [
            'Taux ouverture 80%+',
            'Vitesse ventes augmentée',
            'Créer urgence FOMO',
            'Déstockage rapide',
            'Nouveaux clients',
            'Revenus additionnels'
        ],
        useCases: [
            'Soldes saisonnières',
            'Lancements produits',
            'Promos fêtes',
            'Éditions limitées',
            'Déstockage'
        ],
        timeframe: '2 mois',
        metrics: ['80%+ taux ouverture', '45% taux clic', '35K$+ revenus campagne'],
        deliveryTime: '1-2 semaines',
        faqs: [
            {
                question: 'Comment programmer les campagnes?',
                answer: 'Dashboard simple pour créer campagnes avec date/heure début-fin et cible.'
            },
            {
                question: 'Comment cibler les clients?',
                answer: 'Basé sur historique achats, localisation, intérêts et montant dépensé.'
            },
            {
                question: 'Si le produit est épuisé?',
                answer: 'Le système arrête automatiquement et informe les clients avec alternatives.'
            }
        ]
    },

    // ==================== RESTAURANTS ====================

    'whatsapp-food-ordering': {
        title: 'Système de Commande Repas via WhatsApp',
        description: 'Permettez aux clients de commander directement via WhatsApp avec menu interactif et paiement en ligne.',
        shortDescription: 'Commandez votre repas via WhatsApp',
        features: [
            'Menu interactif',
            'Personnalisation commande',
            'Paiement en ligne',
            'Confirmation instantanée',
            'Suivi livraison',
            'Historique commandes',
            'Offres et remises',
            'Évaluation service'
        ],
        benefits: [
            'Commandes +40%',
            'Pas de commissions apps',
            'Relation client directe',
            'Données clients',
            'Offres personnalisées',
            'Fidélité accrue'
        ],
        useCases: [
            'Restaurants',
            'Cafés',
            'Boulangeries',
            'Pâtisseries',
            'Cuisines virtuelles'
        ],
        timeframe: '2 mois',
        metrics: ['Plus de commandes', 'Pas de commissions', 'Satisfaction client'],
        deliveryTime: '1-2 semaines',
        faqs: [
            {
                question: 'Comment le client commande-t-il?',
                answer: 'Il envoie un message, parcourt le menu, choisit, personnalise, paie et reçoit confirmation.'
            },
            {
                question: 'Quels modes de paiement?',
                answer: 'Cartes, Apple Pay, paiement à la livraison et passerelles locales.'
            },
            {
                question: 'Livraison et retrait supportés?',
                answer: 'Oui, le client choisit livraison avec adresse ou retrait avec heure préférée.'
            }
        ]
    },

    'whatsapp-table-reservation': {
        title: 'Réservation de Table via WhatsApp',
        description: 'Système simple et efficace de réservation de tables via WhatsApp avec sélection horaire et confirmation instantanée.',
        shortDescription: 'Réservez votre table via WhatsApp',
        features: ['Afficher horaires disponibles', 'Sélectionner nombre personnes', 'Préférences table', 'Confirmation instantanée', 'Rappel avant réservation', 'Annulation/modification facile', 'Occasions spéciales', 'Liste attente'],
        benefits: ['Plus de réservations', 'Moins annulations', 'Meilleure répartition', 'Expérience excellente', 'Temps économisé', 'Données précieuses'],
        useCases: ['Restaurants gastronomiques', 'Cafés premium', 'Hôtels', 'Salles événements', 'Clubs'],
        timeframe: '2 mois',
        metrics: ['Plus réservations', 'Moins no-shows', 'Satisfaction client'],
        deliveryTime: '1-2 semaines',
        faqs: [{ question: 'Comment réserver?', answer: 'Choisir date, heure, nombre et recevoir confirmation instantanée.' }]
    },

    // ==================== ADDITIONAL HEALTHCARE ====================

    'whatsapp-lab-results': {
        title: 'Système Résultats Laboratoire via WhatsApp',
        description: 'Envoyez les résultats d\'analyses aux patients via WhatsApp de manière sécurisée avec interprétations.',
        shortDescription: 'Recevez vos résultats via WhatsApp',
        features: ['Résultats cryptés', 'Interprétation résultats', 'Alertes valeurs anormales', 'Prise RDV suivi', 'Historique tests', 'Comparaison tests précédents', 'Demande nouveau test', 'Envoi au médecin'],
        benefits: ['Livraison plus rapide', 'Moins appels', 'Satisfaction patients', 'Économie papier', 'Plus de confidentialité', 'Meilleur suivi'],
        useCases: ['Laboratoires médicaux', 'Centres diagnostic', 'Hôpitaux', 'Cliniques', 'Centres radiologie'],
        timeframe: '3 mois',
        metrics: ['Vitesse livraison', 'Satisfaction patients', 'Appels réduits'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Les résultats sont-ils sécurisés?', answer: 'Oui, entièrement cryptés et protégés par mot de passe.' }]
    },

    'whatsapp-dental-reminders': {
        title: 'Rappels Dentaires',
        description: 'Système de rappel intelligent pour rendez-vous dentaires, examens réguliers et suivi traitements.',
        shortDescription: 'Rappels intelligents pour rendez-vous dentaires',
        features: ['Rappels RDV', 'Planification examens réguliers', 'Suivi traitement', 'Conseils soins dentaires', 'Offres blanchiment/détartrage', 'Confirmation présence', 'Reprogrammation', 'Rappel radios'],
        benefits: ['45% moins absences', 'Plus examens réguliers', 'Meilleur suivi traitement', 'Clients fidèles', 'Revenus plus élevés', 'Moins temps appels'],
        useCases: ['Cabinets dentaires', 'Centres orthodontie', 'Cliniques pédiatriques', 'Centres implants', 'Cliniques esthétiques'],
        timeframe: '4 mois',
        metrics: ['Moins absences', 'Plus visites régulières', 'Satisfaction patients'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Fréquence des rappels?', answer: 'Rappel une semaine, un jour et deux heures avant.' }]
    },

    'whatsapp-veterinary-care': {
        title: 'Soins Animaux via WhatsApp',
        description: 'Système complet pour cliniques vétérinaires incluant réservations, rappels vaccination et suivi santé.',
        shortDescription: 'Prenez soin de votre animal via WhatsApp',
        features: ['Réservation RDV', 'Rappels vaccination', 'Dossier santé animal', 'Conseils soins', 'Commande médicaments', 'Consultations rapides', 'Urgences 24/7', 'Boutique accessoires'],
        benefits: ['Meilleurs soins animaux', 'Respect calendrier vaccinal', 'Clients fidèles', 'Ventes additionnelles', 'Moins urgences', 'Gain de temps'],
        useCases: ['Cliniques vétérinaires', 'Hôpitaux animaux', 'Animaleries', 'Hôtels animaux', 'Services adoption'],
        timeframe: '4 mois',
        metrics: ['Respect vaccinations', 'Satisfaction clients', 'Ventes additionnelles'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Rappelle-t-il les vaccinations?', answer: 'Oui, rappels automatiques pour toutes vaccinations et examens réguliers.' }]
    },

    // ==================== EDUCATION ====================

    'whatsapp-student-enrollment': {
        title: 'Système Inscription Étudiants via WhatsApp',
        description: 'Automatisation du processus d\'inscription et admissions via WhatsApp avec suivi documents.',
        shortDescription: 'Inscrivez-vous à l\'école via WhatsApp',
        features: ['Demandes admissions', 'Soumettre candidatures', 'Upload documents', 'Suivi statut', 'Paiement frais', 'Visites virtuelles', 'Emploi du temps', 'Contact conseiller'],
        benefits: ['Processus admission plus rapide', 'Moins charge administrative', 'Meilleure expérience parents', 'Suivi précis', 'Moins erreurs', 'Plus inscriptions'],
        useCases: ['Écoles privées', 'Universités', 'Écoles de langues', 'Centres formation', 'Crèches'],
        timeframe: '4 mois',
        metrics: ['Vitesse admission', 'Taux inscription', 'Satisfaction parents'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Peut-on uploader des documents?', answer: 'Oui, upload sécurisé des certificats et documents directement via WhatsApp.' }]
    },

    'whatsapp-parent-communication': {
        title: 'Communication Parents',
        description: 'Plateforme communication complète entre école et parents via WhatsApp pour annonces et bulletins.',
        shortDescription: 'Communication directe avec l\'école',
        features: ['Envoi annonces', 'Bulletins élèves', 'Calendrier examens', 'Notifications présence/absence', 'Demandes congés', 'Contact enseignants', 'Notes et évaluations', 'Activités et événements'],
        benefits: ['Meilleure communication', 'Suivi plus facile', 'Moins papier', 'Notifications instantanées', 'Satisfaction parents', 'Plus de transparence'],
        useCases: ['Écoles', 'Crèches', 'Centres périscolaires', 'Camps d\'été', 'Centres formation'],
        timeframe: '3 mois',
        metrics: ['Taux interaction', 'Satisfaction parents', 'Demandes réduites'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Peut-on contacter l\'enseignant?', answer: 'Oui, messages privés aux enseignants avec réponse rapide.' }]
    },

    'whatsapp-online-courses': {
        title: 'Cours en Ligne via WhatsApp',
        description: 'Plateforme de diffusion de cours et contenu pédagogique via WhatsApp avec tests et suivi progression.',
        shortDescription: 'Apprenez via WhatsApp',
        features: ['Contenu quotidien', 'Vidéos éducatives', 'Tests et évaluations', 'Certificats fin', 'Groupes discussion', 'Support formateur', 'Rappels cours', 'Rapports progression'],
        benefits: ['Accès plus facile apprenants', 'Engagement plus élevé', 'Meilleur taux complétion', 'Coûts réduits', 'Flexibilité apprentissage', 'Évolutivité'],
        useCases: ['Centres formation', 'Formateurs indépendants', 'Entreprises', 'Établissements éducatifs', 'Consultants'],
        timeframe: '4 mois',
        metrics: ['Taux complétion', 'Satisfaction participants', 'Ventes'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Comment sont faites les évaluations?', answer: 'Tests interactifs via WhatsApp avec résultats immédiats.' }]
    },

    // ==================== TRAVEL & TOURISM ====================

    'whatsapp-travel-booking': {
        title: 'Réservation Voyage et Tourisme via WhatsApp',
        description: 'Réservez vos voyages, hôtels et attractions facilement via WhatsApp avec support instantané.',
        shortDescription: 'Réservez votre voyage via WhatsApp',
        features: ['Réservation vols', 'Réservation hôtels', 'Circuits touristiques', 'Visas voyage', 'Location voitures', 'Assurance', 'Suivi réservations', 'Support 24/7'],
        benefits: ['Réservation rapide', 'Prix compétitifs', 'Support personnalisé', 'Modifications faciles', 'Tout en un seul endroit', 'Offres exclusives'],
        useCases: ['Agences voyage', 'Sociétés tourisme', 'Hôtels', 'Compagnies aériennes', 'Tour-opérateurs'],
        timeframe: '5 mois',
        metrics: ['Réservations', 'Satisfaction clients', 'Revenus'],
        deliveryTime: '4-5 semaines',
        faqs: [{ question: 'Peut-on modifier la réservation?', answer: 'Oui, modification ou annulation facile via WhatsApp.' }]
    },

    // ==================== FINANCE & BANKING ====================

    'whatsapp-banking-assistant': {
        title: 'Assistant Bancaire via WhatsApp',
        description: 'Services bancaires intelligents via WhatsApp incluant consultation solde, virements et paiement factures.',
        shortDescription: 'Vos services bancaires via WhatsApp',
        features: ['Consultation solde', 'Relevé compte', 'Virements', 'Paiement factures', 'Alertes transactions', 'Commande cartes', 'Blocage carte', 'Support client'],
        benefits: ['Service 24/7', 'Transactions rapides', 'Haute sécurité', 'Moins visites agence', 'Satisfaction clients', 'Réduction coûts'],
        useCases: ['Banques', 'Sociétés financement', 'Portefeuilles numériques', 'Prestataires paiement', 'Coopératives crédit'],
        timeframe: '6 mois',
        metrics: ['Transactions numériques', 'Satisfaction clients', 'Économies coûts'],
        deliveryTime: '5-6 semaines',
        faqs: [{ question: 'Est-ce sécurisé?', answer: 'Oui, cryptage bancaire et authentification multi-facteurs.' }]
    },

    // ==================== AUTOMOTIVE ====================

    'whatsapp-car-service': {
        title: 'Service Entretien Auto via WhatsApp',
        description: 'Réservez entretiens, recevez rappels service et suivez réparations via WhatsApp.',
        shortDescription: 'Entretenez votre voiture via WhatsApp',
        features: ['Réservation entretien', 'Rappels service régulier', 'Suivi réparation', 'Devis', 'Commande pièces', 'Historique entretien', 'Conseils soins', 'Service dépannage'],
        benefits: ['Entretien régulier', 'Moins pannes', 'Clients fidèles', 'Revenus continus', 'Gain temps', 'Satisfaction clients'],
        useCases: ['Garages auto', 'Concessionnaires', 'Centres pneus', 'Magasins pièces', 'Services dépannage'],
        timeframe: '4 mois',
        metrics: ['Entretiens réguliers', 'Satisfaction clients', 'Revenus'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Comment suivre l\'entretien de ma voiture?', answer: 'Historique complet avec rappels pour le prochain service.' }]
    },

    // ==================== LEGAL SERVICES ====================

    'whatsapp-legal-consultation': {
        title: 'Consultation Juridique via WhatsApp',
        description: 'Obtenez des conseils juridiques rapides et fiables via WhatsApp avec avocats agréés.',
        shortDescription: 'Consultez un avocat via WhatsApp',
        features: ['Consultations rapides', 'Prise RDV', 'Envoi documents', 'Suivi dossiers', 'Questions juridiques', 'Modèles contrats', 'Procurations', 'Paiement honoraires'],
        benefits: ['Accès facile à la justice', 'Gain de temps', 'Coûts réduits', 'Experts multiples domaines', 'Confidentialité totale', 'Suivi continu'],
        useCases: ['Cabinets avocats', 'Avocats indépendants', 'Entreprises', 'Institutions', 'Particuliers'],
        timeframe: '4 mois',
        metrics: ['Consultations', 'Satisfaction clients', 'Revenus'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'La consultation est-elle confidentielle?', answer: 'Oui, secret avocat-client complet avec cryptage.' }]
    },

    // ==================== FITNESS & GYM ====================

    'whatsapp-gym-membership': {
        title: 'Adhésion Salle de Sport via WhatsApp',
        description: 'Gérez adhésions, réservez cours et communiquez avec coachs via WhatsApp.',
        shortDescription: 'Votre salle de sport via WhatsApp',
        features: ['Renouvellement adhésion', 'Réservation cours', 'Programme entraînement', 'Contact coach', 'Suivi progression', 'Conseils nutrition', 'Offres spéciales', 'Suspension adhésion'],
        benefits: ['Clients fidèles', 'Meilleure présence', 'Communication continue', 'Plus renouvellements', 'Satisfaction membres', 'Revenus additionnels'],
        useCases: ['Salles de sport', 'Studios yoga', 'Centres fitness', 'Coachs personnels', 'Clubs sportifs'],
        timeframe: '3 mois',
        metrics: ['Taux renouvellement', 'Présence', 'Satisfaction membres'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Comment réserver un cours?', answer: 'Choisir type et heure et recevoir confirmation instantanée.' }]
    },

    // ==================== BEAUTY & SPA ====================

    'whatsapp-beauty-booking': {
        title: 'Réservation Salon Beauté via WhatsApp',
        description: 'Réservez RDV salon beauté et spa facilement avec choix service, employé et horaire.',
        shortDescription: 'Réservez votre RDV beauté via WhatsApp',
        features: ['Réservation services', 'Choix employé', 'Liste prix', 'Offres spéciales', 'Rappels RDV', 'Points fidélité', 'Galerie travaux', 'Commande produits'],
        benefits: ['Plus réservations', 'Moins annulations', 'Clients fidèles', 'Marketing facile', 'Gain temps', 'Données précieuses'],
        useCases: ['Salons beauté', 'Centres spa', 'Salons coiffure', 'Centres soins peau', 'Instituts ongles'],
        timeframe: '3 mois',
        metrics: ['Réservations', 'Annulations', 'Satisfaction clients'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Peut-on choisir l\'employé?', answer: 'Oui, choisissez votre employé préféré et voyez sa disponibilité.' }]
    },

    // ==================== LOGISTICS & DELIVERY ====================

    'whatsapp-delivery-management': {
        title: 'Gestion Livraison et Expédition via WhatsApp',
        description: 'Gérez opérations livraison complètes de la collecte à la remise avec tracking chauffeurs et colis.',
        shortDescription: 'Gérez vos livraisons via WhatsApp',
        features: ['Demande livraison', 'Suivi expéditions', 'Contact chauffeur', 'Preuve livraison', 'Planification collecte', 'Calcul coût', 'Relivraison', 'Rapports performance'],
        benefits: ['Transparence totale', 'Satisfaction clients', 'Efficacité accrue', 'Moins problèmes', 'Tracking précis', 'Économies coûts'],
        useCases: ['Sociétés livraison', 'E-commerce', 'Restaurants', 'Pharmacies', 'Transporteurs'],
        timeframe: '4 mois',
        metrics: ['Taux livraison', 'Satisfaction clients', 'Efficacité'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Peut-on suivre le chauffeur?', answer: 'Oui, position en direct avec heure arrivée estimée.' }]
    },

    // ==================== EVENTS & ENTERTAINMENT ====================

    'whatsapp-event-booking': {
        title: 'Réservation Événements et Billets via WhatsApp',
        description: 'Réservez billets concerts, événements et conférences facilement via WhatsApp avec billets numériques.',
        shortDescription: 'Réservez votre événement via WhatsApp',
        features: ['Parcourir événements', 'Réserver billets', 'Choix places', 'Paiement en ligne', 'Billets numériques QR', 'Rappels', 'Annulation et remboursement', 'Partage avec amis'],
        benefits: ['Ventes plus élevées', 'Expérience simple', 'Pas de files', 'Marketing direct', 'Données clients', 'Coûts réduits'],
        useCases: ['Organisateurs concerts', 'Théâtres', 'Conférences', 'Stades', 'Musées'],
        timeframe: '3 mois',
        metrics: ['Ventes billets', 'Satisfaction participants', 'Coûts'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Comment recevoir mon billet?', answer: 'Billet numérique QR envoyé instantanément sur WhatsApp.' }]
    },

    // ==================== INSURANCE ====================

    'whatsapp-insurance-claims': {
        title: 'Réclamations Assurance via WhatsApp',
        description: 'Soumettez réclamations assurance, suivez statut et recevez indemnités facilement via WhatsApp.',
        shortDescription: 'Soumettez votre réclamation via WhatsApp',
        features: ['Soumettre réclamations', 'Upload documents', 'Suivi statut', 'Contact gestionnaire', 'Renouvellement polices', 'Demandes', 'Demande attestations', 'Comparaison offres'],
        benefits: ['Réclamations plus rapides', 'Transparence statut', 'Satisfaction clients', 'Gain temps', 'Précision accrue', 'Coûts réduits'],
        useCases: ['Compagnies assurance', 'Courtiers assurance', 'Assurance santé', 'Assurance auto', 'Assurance vie'],
        timeframe: '5 mois',
        metrics: ['Vitesse réclamations', 'Satisfaction clients', 'Taux complétion'],
        deliveryTime: '4-5 semaines',
        faqs: [{ question: 'Peut-on uploader photos accident?', answer: 'Oui, uploadez tous documents et photos directement via WhatsApp.' }]
    },

    // ==================== B2B SERVICES ====================

    'whatsapp-b2b-orders': {
        title: 'Commandes B2B Gros via WhatsApp',
        description: 'Gérez commandes gros avec catalogue dédié, prix personnalisés et suivi commandes.',
        shortDescription: 'Commandez en gros via WhatsApp',
        features: ['Catalogue gros', 'Prix revendeurs', 'Limite crédit', 'Suivi commandes', 'Factures automatiques', 'Rappels paiement', 'Offres revendeurs', 'Rapports ventes'],
        benefits: ['Commandes plus rapides', 'Moins erreurs', 'Meilleures relations', 'Plus ventes', 'Gain temps', 'Données précises'],
        useCases: ['Distributeurs', 'Fabricants', 'Grossistes', 'Fournisseurs', 'Importateurs'],
        timeframe: '4 mois',
        metrics: ['Volume commandes', 'Vitesse cycle', 'Satisfaction revendeurs'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Peut-on voir solde compte?', answer: 'Oui, solde crédit et factures en cours toujours disponibles.' }]
    },

    // ==================== PET CARE ====================

    'whatsapp-pet-services': {
        title: 'Services Soins Animaux',
        description: 'Réservez services soins animaux comme toilettage, pension et dressage via WhatsApp.',
        shortDescription: 'Chouchoutez votre animal via WhatsApp',
        features: ['Réservation toilettage', 'Pension animaux', 'Sessions dressage', 'Promenades quotidiennes', 'Soins santé', 'Boutique accessoires', 'Vaccinations', 'Conseils soins'],
        benefits: ['Service pratique', 'Rappels réguliers', 'Clients fidèles', 'Ventes additionnelles', 'Meilleurs soins', 'Gain temps'],
        useCases: ['Salons animaux', 'Hôtels animaux', 'Centres dressage', 'Services promenade', 'Animaleries'],
        timeframe: '3 mois',
        metrics: ['Réservations', 'Satisfaction clients', 'Ventes'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Peut-on réserver pension?', answer: 'Oui, réservez avec durée et services additionnels.' }]
    },

    // ==================== RESTAURANT (Additional) ====================

    'whatsapp-restaurant-ordering': {
        title: 'Système Commandes Restaurant Intelligent',
        description: 'Système commandes complet pour restaurants incluant commandes sur place et livraison plus gestion cuisine.',
        shortDescription: 'Commandez au restaurant via WhatsApp',
        features: ['Menu intelligent', 'Commande table (QR)', 'Commande livraison', 'Commande à emporter', 'Multi-paiement', 'Partage addition', 'Programme fidélité', 'Évaluation plats'],
        benefits: ['Plus commandes', 'Service plus rapide', 'Moins erreurs', 'Satisfaction accrue', 'Données précieuses', 'Fidélité clients'],
        useCases: ['Restaurants', 'Chaînes restaurants', 'Cafétérias', 'Food courts', 'Traiteurs'],
        timeframe: '3 mois',
        metrics: ['Taux commandes', 'Valeur commande', 'Satisfaction clients'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Supporte-t-il commande table?', answer: 'Oui, QR sur chaque table pour commande directe.' }]
    },

    // ==================== E-COMMERCE (Additional) ====================

    'cart-abandonment-recovery-whatsapp': {
        title: 'Récupération Paniers Abandonnés',
        description: 'Système automatisé pour envoyer des rappels aux clients ayant abandonné leurs paniers.',
        shortDescription: 'Récupérez les ventes perdues via WhatsApp',
        features: ['Rappels automatiques', 'Réductions personnalisées', 'Multi-suivi', 'Analyses conversion'],
        benefits: ['Récupération 25% paniers', 'Plus de ventes', 'Meilleure conversion'],
        useCases: ['E-commerce', 'Mode', 'Électronique'],
        timeframe: '2 mois',
        metrics: ['Taux récupération', 'Chiffre affaires'],
        deliveryTime: '1-2 semaines',
        faqs: [{ question: 'Comment ça marche?', answer: 'Messages automatiques après abandon avec offres personnalisées.' }]
    },

    'loyalty-rewards-program-whatsapp': {
        title: 'Programme Fidélité et Récompenses',
        description: 'Système intégré de points et récompenses via WhatsApp.',
        shortDescription: 'Gagnez et échangez des points via WhatsApp',
        features: ['Suivi points', 'Récompenses automatiques', 'Offres exclusives', 'Niveaux membres'],
        benefits: ['40% plus fidélité', 'Achats répétés', 'Satisfaction client'],
        useCases: ['Commerce détail', 'Restaurants', 'Salons'],
        timeframe: '3 mois',
        metrics: ['Taux rétention', 'Taux réachat'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Comment gagner des points?', answer: 'Automatiquement à chaque achat.' }]
    },

    // ==================== REAL ESTATE (Additional) ====================

    'virtual-property-tours-whatsapp': {
        title: 'Visites Virtuelles Immobilières',
        description: 'Visites vidéo interactives des propriétés via WhatsApp.',
        shortDescription: 'Explorez les propriétés virtuellement',
        features: ['Vidéo 360', 'Visite en direct', 'Questions instantanées', 'Réserver visite'],
        benefits: ['Gain de temps', 'Meilleur filtrage', 'Décisions plus rapides'],
        useCases: ['Agences immobilières', 'Promoteurs', 'Agents immobiliers'],
        timeframe: '3 mois',
        metrics: ['Taux visites', 'Conversion'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Comment démarrer une visite?', answer: 'Envoyez le nom de la propriété pour la visite virtuelle.' }]
    },

    'mortgage-calculator-whatsapp': {
        title: 'Calculateur Hypothécaire',
        description: 'Calcul des mensualités et éligibilité de financement via WhatsApp.',
        shortDescription: 'Calculez votre prêt immobilier instantanément',
        features: ['Calcul instantané', 'Comparaison banques', 'Vérification éligibilité', 'Soumettre demande'],
        benefits: ['Transparence totale', 'Décisions éclairées', 'Gain de temps'],
        useCases: ['Banques', 'Sociétés financement', 'Courtiers immobiliers'],
        timeframe: '2 mois',
        metrics: ['Demandes financement', 'Conversion'],
        deliveryTime: '2 semaines',
        faqs: [{ question: 'Quelles infos nécessaires?', answer: 'Revenus, valeur propriété et apport.' }]
    },

    // ==================== INSTAGRAM SOLUTIONS ====================

    'ig-fashion-boutique': {
        title: 'Boutique Mode Instagram',
        description: 'Système de vente intégré pour la mode via Instagram avec catalogue et commandes.',
        shortDescription: 'Vendez la mode via Instagram',
        features: ['Catalogue interactif', 'Commande directe', 'Paiement en ligne', 'Suivi commandes'],
        benefits: ['Ventes via Instagram', 'Expérience fluide', 'Nouveaux clients'],
        useCases: ['Boutiques', 'Designers', 'Marques émergentes'],
        timeframe: '2 mois',
        metrics: ['Ventes', 'Engagement', 'Abonnés'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Comment ça marche?', answer: 'Les clients parcourent et commandent directement en DM.' }]
    },

    'ig-fitness-coaching': {
        title: 'Coaching Fitness via Instagram',
        description: 'Plateforme d\'entraînement personnel et suivi fitness via Instagram.',
        shortDescription: 'Coaching fitness personnel via Instagram',
        features: ['Programmes entraînement', 'Suivi progrès', 'Conseils nutrition', 'Sessions en direct'],
        benefits: ['Revenus réguliers', 'Clients mondiaux', 'Flexibilité totale'],
        useCases: ['Coachs personnels', 'Salles de sport', 'Nutritionnistes'],
        timeframe: '3 mois',
        metrics: ['Clients', 'Abonnements', 'Résultats'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Comment commencer?', answer: 'Choisissez le programme et nous vous contactons.' }]
    },

    // ==================== MESSENGER SOLUTIONS ====================

    'msg-b2b-leads': {
        title: 'Qualification Leads B2B via Messenger',
        description: 'Système automatisé de qualification et suivi pour clients professionnels.',
        shortDescription: 'Qualification automatique leads B2B',
        features: ['Qualification automatique', 'Planification réunions', 'Suivi intelligent', 'Intégration CRM'],
        benefits: ['Leads qualifiés', 'Gain temps ventes', 'Meilleure conversion'],
        useCases: ['Entreprises B2B', 'SaaS', 'Services professionnels'],
        timeframe: '3 mois',
        metrics: ['Qualité leads', 'Taux conversion'],
        deliveryTime: '3 semaines',
        faqs: [{ question: 'Comment se fait la qualification?', answer: 'Questions intelligentes identifient besoins et budget.' }]
    },

    'msg-customer-support': {
        title: 'Support Client Messenger',
        description: 'Support client automatisé 24/7 via Facebook Messenger.',
        shortDescription: 'Support automatisé via Messenger',
        features: ['Réponse instantanée 24/7', 'FAQ', 'Transfert employé', 'Suivi tickets'],
        benefits: ['Satisfaction client', 'Économie coûts', 'Service continu'],
        useCases: ['Commerce détail', 'Services', 'Technologie'],
        timeframe: '2 mois',
        metrics: ['Temps réponse', 'Satisfaction client'],
        deliveryTime: '2 semaines',
        faqs: [{ question: 'Remplace-t-il les humains?', answer: 'Non, gère les questions fréquentes et transfère les complexes.' }]
    },

    // ==================== NEXT.JS SOLUTIONS ====================

    'next-saas-platform': {
        title: 'Plateforme SaaS Next.js',
        description: 'Développement d\'une plateforme SaaS complète avec abonnements et tableau de bord.',
        shortDescription: 'Plateforme SaaS professionnelle',
        features: ['Abonnements', 'Tableau de bord', 'API intégrée', 'Analyses', 'Paiement en ligne'],
        benefits: ['Vitesse maximale', 'Excellent SEO', 'Scalabilité'],
        useCases: ['Startups', 'Produits numériques', 'Services cloud'],
        timeframe: '4-6 mois',
        metrics: ['Abonnements', 'Rétention', 'Revenus'],
        deliveryTime: '8-12 semaines',
        faqs: [{ question: 'Pourquoi Next.js?', answer: 'Haute performance, excellent SEO, expérience développeur fluide.' }]
    },

    'next-ecommerce': {
        title: 'Boutique E-Commerce Next.js',
        description: 'Boutique en ligne rapide et évolutive avec technologie Next.js.',
        shortDescription: 'Boutique en ligne ultra-rapide',
        features: ['Catalogue dynamique', 'Panier', 'Multi-paiement', 'Gestion stock'],
        benefits: ['Chargement <1 seconde', 'Excellent SEO', 'Meilleure conversion'],
        useCases: ['Commerce détail', 'Marques', 'Distributeurs'],
        timeframe: '3-4 mois',
        metrics: ['Ventes', 'Vitesse site', 'Conversion'],
        deliveryTime: '6-8 semaines',
        faqs: [{ question: 'Supporte-t-il des milliers de produits?', answer: 'Oui, conçu pour évoluer avec haute performance.' }]
    },

    // ==================== SEO SOLUTIONS ====================

    'seo-ecommerce': {
        title: 'Optimisation SEO E-Commerce',
        description: 'Stratégie SEO complète pour boutiques en ligne pour augmenter le trafic organique.',
        shortDescription: 'SEO spécialisé boutiques',
        features: ['Optimisation produits', 'Mots-clés', 'Backlinks', 'Vitesse site'],
        benefits: ['200% plus trafic', 'Ventes organiques', 'Coûts réduits'],
        useCases: ['Boutiques en ligne', 'Marketplaces', 'Commerce détail'],
        timeframe: '6-12 mois',
        metrics: ['Classement mots-clés', 'Trafic organique', 'Ventes'],
        deliveryTime: 'Continu',
        faqs: [{ question: 'Quand voir les résultats?', answer: 'Premiers résultats en 3 mois, significatifs en 6-12 mois.' }]
    },

    'seo-local': {
        title: 'SEO Local pour Entreprises',
        description: 'Optimisation de la visibilité dans la recherche locale et Google Maps.',
        shortDescription: 'Meilleure visibilité recherche locale',
        features: ['Google Business', 'Avis', 'Maps', 'Mots-clés locaux'],
        benefits: ['Visibilité Maps', 'Clients locaux', 'Plus de confiance'],
        useCases: ['Restaurants', 'Cliniques', 'Commerce détail'],
        timeframe: '3-6 mois',
        metrics: ['Classement local', 'Appels', 'Visites magasin'],
        deliveryTime: 'Continu',
        faqs: [{ question: 'Quelle différence avec SEO normal?', answer: 'Focus recherche locale, Maps et avis.' }]
    },

    // ==================== AI AUTOMATION ====================

    'auto-sales': {
        title: 'Automatisation Ventes IA',
        description: 'Automatisation des processus de vente de la qualification à la conclusion avec IA.',
        shortDescription: 'Ventes automatisées par IA',
        features: ['Qualification automatique', 'Suivi intelligent', 'Analyse opportunités', 'Prévisions ventes'],
        benefits: ['40% plus ventes', 'Gain temps équipe', 'Meilleures décisions'],
        useCases: ['Équipes ventes', 'Entreprises B2B', 'SaaS'],
        timeframe: '3 mois',
        metrics: ['Taux conversion', 'Valeur deals', 'Vitesse clôture'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Nécessite-t-il formation?', answer: 'L\'IA apprend automatiquement de vos données.' }]
    },

    'auto-customer-service': {
        title: 'Service Client IA',
        description: 'Chatbot intelligent pour service client 24/7.',
        shortDescription: 'Support intelligent 24/7',
        features: ['Réponse instantanée', 'Compréhension langage naturel', 'Apprentissage continu', 'Transfert humains'],
        benefits: ['Service 24/7', '60% économie coûts', 'Satisfaction accrue'],
        useCases: ['Toutes entreprises', 'E-commerce', 'Services'],
        timeframe: '2 mois',
        metrics: ['Temps réponse', 'Taux résolution', 'Satisfaction client'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Comprend-il le français?', answer: 'Oui, formé pour français et anglais.' }]
    },

    // ==================== EDUCATION (Additional) ====================

    'attendance-tracking-notifications-whatsapp': {
        title: 'Suivi de Présence et Notifications',
        description: 'Système automatique de suivi de présence des élèves avec notification instantanée des parents.',
        shortDescription: 'Suivi présence via WhatsApp',
        features: ['Enregistrement présence', 'Notification absence instantanée', 'Rapports hebdomadaires'],
        benefits: ['Meilleur suivi', 'Moins d\'absences', 'Communication instantanée'],
        useCases: ['Écoles', 'Universités', 'Centres de formation'],
        timeframe: '2 mois',
        metrics: ['Taux de présence', 'Satisfaction parents'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Comment est-ce enregistré?', answer: 'Automatiquement à l\'entrée ou par l\'enseignant.' }]
    },

    'class-schedule-timetable-whatsapp': {
        title: 'Emploi du Temps et Horaires',
        description: 'Gestion des emplois du temps et notifications de changements.',
        shortDescription: 'Emploi du temps intelligent via WhatsApp',
        features: ['Afficher emploi du temps', 'Notifications changements', 'Rappels de cours'],
        benefits: ['Meilleure organisation', 'Notifications instantanées'],
        useCases: ['Écoles', 'Universités', 'Centres de formation'],
        timeframe: '1 mois',
        metrics: ['Utilisation système', 'Satisfaction utilisateurs'],
        deliveryTime: '1-2 semaines',
        faqs: [{ question: 'Changements de dernière minute?', answer: 'Oui, notifications instantanées pour tout changement.' }]
    },

    'exam-result-notification-whatsapp': {
        title: 'Notifications Résultats d\'Examens',
        description: 'Système d\'envoi de résultats d\'examens aux élèves et parents.',
        shortDescription: 'Résultats d\'examens via WhatsApp',
        features: ['Envoi résultats', 'Analyse performance', 'Conseils amélioration'],
        benefits: ['Information instantanée', 'Confidentialité', 'Gain de temps'],
        useCases: ['Écoles', 'Universités', 'Centres d\'examen'],
        timeframe: '1 mois',
        metrics: ['Vitesse notification', 'Satisfaction parents'],
        deliveryTime: '1-2 semaines',
        faqs: [{ question: 'Les résultats sont-ils sécurisés?', answer: 'Oui, cryptés et protégés par mot de passe.' }]
    },

    'homework-assignment-reminders-whatsapp': {
        title: 'Rappels de Devoirs',
        description: 'Système de rappel pour devoirs et dates limites.',
        shortDescription: 'Rappels devoirs via WhatsApp',
        features: ['Liste devoirs', 'Rappel avant date limite', 'Soumission électronique'],
        benefits: ['Meilleur engagement', 'Moins d\'oublis'],
        useCases: ['Écoles', 'Professeurs particuliers', 'Centres éducatifs'],
        timeframe: '1 mois',
        metrics: ['Taux soumission', 'Respect délais'],
        deliveryTime: '1-2 semaines',
        faqs: [{ question: 'Quand les rappels?', answer: 'Deux jours, un jour et deux heures avant.' }]
    },

    'library-book-management-whatsapp': {
        title: 'Gestion Bibliothèque',
        description: 'Système d\'emprunt et retour avec rappels.',
        shortDescription: 'Gérer bibliothèque via WhatsApp',
        features: ['Recherche livres', 'Demande emprunt', 'Rappel retour', 'Réservation'],
        benefits: ['Gestion plus facile', 'Moins de retards'],
        useCases: ['Bibliothèques scolaires', 'Bibliothèques universitaires', 'Bibliothèques publiques'],
        timeframe: '2 mois',
        metrics: ['Taux emprunt', 'Retards retour'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Puis-je réserver un livre emprunté?', answer: 'Oui, vous serez notifié dès disponibilité.' }]
    },

    'online-class-meeting-links-whatsapp': {
        title: 'Liens Classes Virtuelles',
        description: 'Envoi automatique de liens de cours virtuels.',
        shortDescription: 'Liens de cours via WhatsApp',
        features: ['Envoi automatique', 'Rappel avant cours', 'Lien enregistrement'],
        benefits: ['Pas de liens perdus', 'Meilleure participation'],
        useCases: ['Écoles', 'Universités', 'Cours en ligne'],
        timeframe: '1 mois',
        metrics: ['Taux participation', 'Accessibilité'],
        deliveryTime: '1-2 semaines',
        faqs: [{ question: 'Quelles plateformes?', answer: 'Zoom, Google Meet et Microsoft Teams.' }]
    },

    'student-enrollment-automation-whatsapp': {
        title: 'Automatisation Inscription Élèves',
        description: 'Système automatique d\'inscription des nouveaux élèves.',
        shortDescription: 'Inscription élèves via WhatsApp',
        features: ['Formulaire inscription', 'Upload documents', 'Suivi statut', 'Paiement frais'],
        benefits: ['Inscription plus rapide', 'Moins d\'erreurs'],
        useCases: ['Écoles', 'Universités', 'Centres de formation'],
        timeframe: '3 mois',
        metrics: ['Vitesse inscription', 'Satisfaction parents'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Paiement en ligne?', answer: 'Oui, cartes et portefeuilles électroniques.' }]
    },

    // ==================== E-COMMERCE (Additional) ====================

    'ecommerce-store-automation': {
        title: 'Automatisation Boutique E-commerce',
        description: 'Système complet d\'automatisation des processus de boutique en ligne.',
        shortDescription: 'Automatiser boutique via WhatsApp',
        features: ['Catalogue interactif', 'Panier', 'Paiement en ligne', 'Suivi commandes'],
        benefits: ['Ventes 24/7', 'Expérience fluide', 'Plus de clients'],
        useCases: ['Boutiques en ligne', 'Marques', 'Distributeurs'],
        timeframe: '3 mois',
        metrics: ['Ventes', 'Conversion', 'Satisfaction client'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Site web nécessaire?', answer: 'Non, fonctionne de manière autonome via WhatsApp.' }]
    },

    'ecommerce-customer-support-whatsapp': {
        title: 'Support Client E-commerce',
        description: 'Système de support client intégré pour boutiques en ligne.',
        shortDescription: 'Support client boutique via WhatsApp',
        features: ['Réponse auto', 'Suivi commandes', 'FAQ', 'Transfert agent'],
        benefits: ['Support 24/7', 'Satisfaction accrue', 'Économies'],
        useCases: ['Boutiques en ligne', 'Marques', 'Distributeurs'],
        timeframe: '2 mois',
        metrics: ['Temps réponse', 'Satisfaction client'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Combien de questions automatiques?', answer: '80% des questions fréquentes.' }]
    },

    'order-tracking-notifications-whatsapp': {
        title: 'Notifications Suivi Commandes',
        description: 'Système de suivi expédition et notifications client.',
        shortDescription: 'Suivre commandes via WhatsApp',
        features: ['Suivi temps réel', 'Notifications statut', 'Date livraison'],
        benefits: ['Transparence totale', 'Satisfaction client', 'Moins de demandes'],
        useCases: ['Boutiques en ligne', 'Sociétés de livraison', 'Restaurants'],
        timeframe: '2 mois',
        metrics: ['Satisfaction client', 'Demandes'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Fréquence mises à jour?', answer: 'À chaque changement de statut.' }]
    },

    'flash-sale-campaigns-whatsapp': {
        title: 'Campagnes Ventes Flash',
        description: 'Gestion de campagnes promotionnelles et réductions.',
        shortDescription: 'Campagnes offres via WhatsApp',
        features: ['Notification offres', 'Compte à rebours', 'Lien achat direct'],
        benefits: ['Ventes rapides', 'Haute interaction', 'Fidélité client'],
        useCases: ['Boutiques en ligne', 'Marques', 'Plateformes offres'],
        timeframe: '1 mois',
        metrics: ['Ventes campagne', 'Taux ouverture'],
        deliveryTime: '1-2 semaines',
        faqs: [{ question: 'Combien de clients?', answer: 'Illimité avec segmentation intelligente.' }]
    },

    // ==================== REAL ESTATE (Additional) ====================

    'property-search-assistant-whatsapp': {
        title: 'Assistant Recherche Immobilière',
        description: 'Assistant intelligent pour recherche de biens selon critères.',
        shortDescription: 'Rechercher bien via WhatsApp',
        features: ['Recherche critères', 'Suggestions intelligentes', 'Comparaison biens'],
        benefits: ['Gain de temps', 'Résultats précis', 'Expérience facile'],
        useCases: ['Agences immobilières', 'Agents', 'Portails immobiliers'],
        timeframe: '3 mois',
        metrics: ['Demandes', 'Visites réservées'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Comment indiquer mes critères?', answer: 'Répondez à des questions simples sur lieu, budget et surface.' }]
    },

    'property-alerts-matching-whatsapp': {
        title: 'Alertes Biens Correspondants',
        description: 'Système de notification pour nouveaux biens correspondants.',
        shortDescription: 'Alertes nouveaux biens',
        features: ['Notification instantanée', 'Correspondance précise', 'Réservation rapide'],
        benefits: ['Premières opportunités', 'Rien manquer'],
        useCases: ['Agences immobilières', 'Portails immobiliers', 'Courtiers'],
        timeframe: '2 mois',
        metrics: ['Notifications ouvertes', 'Réservations'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Fréquence des alertes?', answer: 'Dès qu\'un bien correspondant est ajouté.' }]
    },

    'property-document-collection-whatsapp': {
        title: 'Collecte Documents Immobiliers',
        description: 'Système de collecte de documents achat/vente.',
        shortDescription: 'Documents immobiliers via WhatsApp',
        features: ['Liste documents', 'Upload sécurisé', 'Suivi statut'],
        benefits: ['Procédures plus rapides', 'Moins d\'erreurs'],
        useCases: ['Agences immobilières', 'Avocats', 'Banques'],
        timeframe: '2 mois',
        metrics: ['Vitesse finalisation', 'Documents complets'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Documents sécurisés?', answer: 'Oui, cryptés et protégés.' }]
    },

    'property-contract-esignature-whatsapp': {
        title: 'Signature Électronique Contrats',
        description: 'Système de signature électronique pour contrats immobiliers.',
        shortDescription: 'Signer contrat via WhatsApp',
        features: ['Contrat numérique', 'E-signature', 'Archivage sécurisé'],
        benefits: ['Gain de temps', 'Validité légale'],
        useCases: ['Agences immobilières', 'Avocats', 'Propriétaires'],
        timeframe: '3 mois',
        metrics: ['Contrats signés', 'Vitesse finalisation'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Légalement valide?', answer: 'Oui, reconnu et légalement valide.' }]
    },

    'property-investment-roi-calculator': {
        title: 'Calculateur ROI Investissement',
        description: 'Calcul du rendement attendu des investissements immobiliers.',
        shortDescription: 'Calculer ROI immobilier',
        features: ['Calcul ROI', 'Analyse marché', 'Comparaison opportunités'],
        benefits: ['Décisions éclairées', 'Investissements plus intelligents'],
        useCases: ['Investisseurs', 'Agences immobilières', 'Banques'],
        timeframe: '2 mois',
        metrics: ['Utilisation calculateur', 'Investissements réussis'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Quelle précision?', answer: '85-90% basé sur données du marché.' }]
    },

    // ==================== INSTAGRAM (Additional) ====================

    'ig-beauty-salon': {
        title: 'Salon Beauté Instagram',
        description: 'Système de réservation pour salons de beauté via Instagram.',
        shortDescription: 'RDV beauté via Instagram',
        features: ['Afficher services', 'Réservation directe', 'Portfolio travaux'],
        benefits: ['Plus de réservations', 'Marketing gratuit', 'Nouveaux clients'],
        useCases: ['Salons de beauté', 'Spas', 'Maquilleurs'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Abonnés'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Comment le client réserve?', answer: 'Via DM ou lien de réservation.' }]
    },

    'ig-ecommerce-store': {
        title: 'Boutique Instagram',
        description: 'Boutique en ligne intégrée via Instagram.',
        shortDescription: 'Vendre produits via Instagram',
        features: ['Catalogue produits', 'Commande DM', 'Paiement en ligne', 'Intégration livraison'],
        benefits: ['Ventes via Instagram', 'Audience prête', 'Coûts réduits'],
        useCases: ['Boutiques en ligne', 'Artisans', 'Petites marques'],
        timeframe: '2 mois',
        metrics: ['Ventes', 'Commandes'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Site web nécessaire?', answer: 'Non, fonctionne directement via Instagram.' }]
    },

    'ig-restaurant-orders': {
        title: 'Commandes Restaurant via Instagram',
        description: 'Système de prise de commandes restaurant via Instagram.',
        shortDescription: 'Commandes repas via Instagram',
        features: ['Menu digital', 'Commande DM', 'Suivi commande'],
        benefits: ['Nouveau canal', 'Clients plus jeunes', 'Marketing gratuit'],
        useCases: ['Restaurants', 'Cafés', 'Boulangeries'],
        timeframe: '2 mois',
        metrics: ['Commandes', 'Nouveaux abonnés'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Comment le client commande?', answer: 'Par DM ou menu interactif.' }]
    },

    // ==================== MESSENGER (Additional) ====================

    'msg-real-estate': {
        title: 'Immobilier via Messenger',
        description: 'Recherche et demandes immobilières via Messenger.',
        shortDescription: 'Chercher bien via Messenger',
        features: ['Recherche biens', 'Réserver visite', 'Demandes', 'Notifications'],
        benefits: ['Accès plus facile', 'Interaction rapide'],
        useCases: ['Agences immobilières', 'Agents', 'Portails immobiliers'],
        timeframe: '2 mois',
        metrics: ['Demandes', 'Réservations'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Lié à Facebook?', answer: 'Oui, intégration complète avec page Facebook.' }]
    },

    'msg-education': {
        title: 'Éducation via Messenger',
        description: 'Plateforme d\'apprentissage interactive via Messenger.',
        shortDescription: 'Apprendre via Messenger',
        features: ['Leçons interactives', 'Tests', 'Suivi progrès', 'Certificats'],
        benefits: ['Apprentissage facile', 'Large portée', 'Haute interaction'],
        useCases: ['Écoles', 'Formateurs', 'Plateformes éducatives'],
        timeframe: '3 mois',
        metrics: ['Apprenants', 'Taux complétion'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Quels contenus?', answer: 'Texte, vidéo et tests interactifs.' }]
    },

    'msg-travel-booking': {
        title: 'Réservation Voyage via Messenger',
        description: 'Système de réservation vols et hôtels via Messenger.',
        shortDescription: 'Réserver voyage via Messenger',
        features: ['Recherche vols', 'Réservation hôtels', 'Forfaits voyage', 'Support 24/7'],
        benefits: ['Réservation facile', 'Prix compétitifs'],
        useCases: ['Agences de voyage', 'Entreprises tourisme', 'Plateformes réservation'],
        timeframe: '3 mois',
        metrics: ['Réservations', 'Satisfaction client'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Paiement supporté?', answer: 'Oui, paiement sécurisé par carte et e-wallet.' }]
    },

    // ==================== NEXT.JS (Additional) ====================

    'next-marketplace': {
        title: 'Marketplace Next.js',
        description: 'Marketplace multi-vendeurs avec technologie Next.js.',
        shortDescription: 'Marketplace multi-vendeurs',
        features: ['Multi-vendeurs', 'Tableau de bord', 'Commissions', 'Évaluations'],
        benefits: ['Vitesse maximale', 'SEO excellent', 'Scalable'],
        useCases: ['Marketplaces en ligne', 'Plateformes artisans', 'Marchés locaux'],
        timeframe: '4-6 mois',
        metrics: ['Vendeurs', 'Ventes', 'Croissance'],
        deliveryTime: '8-12 semaines',
        faqs: [{ question: 'Combien de vendeurs?', answer: 'Illimité avec haute performance.' }]
    },

    'next-blog-cms': {
        title: 'Blog et CMS Next.js',
        description: 'Blog et système de gestion de contenu avec Next.js.',
        shortDescription: 'Blog professionnel rapide',
        features: ['Éditeur avancé', 'SEO intégré', 'Catégories', 'Commentaires'],
        benefits: ['Vitesse maximale', 'Meilleur classement'],
        useCases: ['Blogueurs', 'Entreprises', 'Sites d\'actualités'],
        timeframe: '2-3 mois',
        metrics: ['Visites', 'Classement recherche'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Support français?', answer: 'Oui, RTL complet et multilingue.' }]
    },

    'next-booking-platform': {
        title: 'Plateforme Réservation Next.js',
        description: 'Plateforme de réservation intégrée avec Next.js.',
        shortDescription: 'Plateforme réservation professionnelle',
        features: ['Réservation RDV', 'Paiement en ligne', 'Calendrier intelligent', 'Notifications'],
        benefits: ['Expérience fluide', 'Gestion facile'],
        useCases: ['Cliniques', 'Salons', 'Consultants', 'Services'],
        timeframe: '3-4 mois',
        metrics: ['Réservations', 'Satisfaction client'],
        deliveryTime: '6-8 semaines',
        faqs: [{ question: 'Plusieurs RDV?', answer: 'Oui, plusieurs employés et services.' }]
    },

    // ==================== SEO (Additional) ====================

    'seo-technical': {
        title: 'SEO Technique',
        description: 'Optimisation des aspects techniques du site pour les moteurs de recherche.',
        shortDescription: 'Optimisation technique SEO',
        features: ['Vitesse site', 'Structuration données', 'Core Web Vitals', 'Crawling et indexation'],
        benefits: ['Meilleur classement', 'Meilleure expérience', 'Excellente performance'],
        useCases: ['Grands sites', 'Boutiques', 'Sites d\'actualités'],
        timeframe: '3-6 mois',
        metrics: ['Vitesse site', 'Core Web Vitals'],
        deliveryTime: 'Continu',
        faqs: [{ question: 'Différence avec SEO normal?', answer: 'Focus sur aspects techniques et structure.' }]
    },

    'seo-content': {
        title: 'SEO Contenu',
        description: 'Stratégie de contenu optimisée pour les moteurs de recherche.',
        shortDescription: 'Contenu optimisé SEO',
        features: ['Recherche mots-clés', 'Création contenu', 'Optimisation articles', 'Liens internes'],
        benefits: ['Trafic organique', 'Plus de confiance', 'Plus de clients'],
        useCases: ['Blogs', 'Entreprises', 'Boutiques'],
        timeframe: '6-12 mois',
        metrics: ['Trafic organique', 'Classement mots-clés'],
        deliveryTime: 'Continu',
        faqs: [{ question: 'Combien d\'articles par mois?', answer: '4-8 articles selon le plan.' }]
    },

    'seo-enterprise': {
        title: 'SEO Entreprise',
        description: 'Stratégie SEO complète pour grandes entreprises.',
        shortDescription: 'SEO pour grandes entreprises',
        features: ['Stratégie complète', 'Équipe spécialisée', 'Rapports exécutifs', 'Intégration marketing'],
        benefits: ['Dominance marché', 'Croissance durable', 'ROI élevé'],
        useCases: ['Grandes entreprises', 'Banques', 'Multinationales'],
        timeframe: '12+ mois',
        metrics: ['Part de marché', 'Trafic organique', 'Revenus'],
        deliveryTime: 'Continu',
        faqs: [{ question: 'Quelle différence?', answer: 'Stratégie complète et personnalisée avec équipe spécialisée.' }]
    },

    // ==================== AI AUTOMATION (Additional) ====================

    'auto-marketing': {
        title: 'Automatisation Marketing IA',
        description: 'Automatisation des campagnes marketing et interaction client.',
        shortDescription: 'Marketing automatisé par IA',
        features: ['Campagnes automatiques', 'Segmentation intelligente', 'Contenu personnalisé', 'Analyses'],
        benefits: ['Plus d\'efficacité', 'Ciblage plus précis', 'Meilleurs résultats'],
        useCases: ['Agences marketing', 'Boutiques', 'SaaS'],
        timeframe: '3 mois',
        metrics: ['Conversion', 'ROI', 'Engagement'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Quels canaux?', answer: 'Email, WhatsApp, SMS et publicités.' }]
    },

    'auto-operations': {
        title: 'Automatisation Opérations IA',
        description: 'Automatisation des processus opérationnels routiniers.',
        shortDescription: 'Processus automatisés par IA',
        features: ['Automatisation tâches', 'Intégration systèmes', 'Rapports intelligents', 'Alertes'],
        benefits: ['Gain de temps', 'Moins d\'erreurs', 'Plus d\'efficacité'],
        useCases: ['Entreprises', 'Usines', 'Logistique'],
        timeframe: '4 mois',
        metrics: ['Temps économisé', 'Efficacité'],
        deliveryTime: '6-8 semaines',
        faqs: [{ question: 'Quels processus?', answer: 'Saisie données, rapports, approbations et notifications.' }]
    },

    'auto-data-analytics': {
        title: 'Analyse Données IA',
        description: 'Analyse de données et extraction d\'insights actionnables.',
        shortDescription: 'Analyses intelligentes par IA',
        features: ['Analyse automatique', 'Prévisions', 'Tableaux de bord', 'Alertes intelligentes'],
        benefits: ['Meilleures décisions', 'Prévisions précises', 'Insights profonds'],
        useCases: ['Entreprises', 'Commerce', 'Services financiers'],
        timeframe: '4 mois',
        metrics: ['Précision prévisions', 'Décisions améliorées'],
        deliveryTime: '6-8 semaines',
        faqs: [{ question: 'Quelles données?', answer: 'Ventes, clients, opérations et marketing.' }]
    },

    // ==================== OTHER WHATSAPP ====================

    'travel-booking-assistant-whatsapp': {
        title: 'Assistant Réservation Voyage',
        description: 'Assistant intelligent pour réservations vols et hôtels.',
        shortDescription: 'Réserver voyage via WhatsApp',
        features: ['Recherche vols', 'Réservation hôtels', 'Visas', 'Forfaits'],
        benefits: ['Réservation facile', 'Prix compétitifs', 'Support 24/7'],
        useCases: ['Agences de voyage', 'Entreprises tourisme', 'Compagnies aériennes'],
        timeframe: '4 mois',
        metrics: ['Réservations', 'Satisfaction client'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Paiement supporté?', answer: 'Oui, cartes et portefeuilles électroniques.' }]
    },

    'banking-account-assistant-whatsapp': {
        title: 'Assistant Compte Bancaire',
        description: 'Services bancaires intelligents via WhatsApp.',
        shortDescription: 'Services bancaires via WhatsApp',
        features: ['Solde', 'Relevé compte', 'Virements', 'Paiement factures'],
        benefits: ['Service 24/7', 'Transactions rapides', 'Haute sécurité'],
        useCases: ['Banques', 'Portefeuilles numériques', 'FinTech'],
        timeframe: '6 mois',
        metrics: ['Transactions', 'Satisfaction client'],
        deliveryTime: '8-12 semaines',
        faqs: [{ question: 'Est-ce sécurisé?', answer: 'Oui, cryptage bancaire et authentification à deux facteurs.' }]
    },

    'b2b-lead-qualification-whatsapp': {
        title: 'Qualification Leads B2B',
        description: 'Système de qualification et suivi des clients professionnels.',
        shortDescription: 'Qualifier leads B2B via WhatsApp',
        features: ['Qualification automatique', 'Planification réunions', 'Suivi', 'Intégration CRM'],
        benefits: ['Leads qualifiés', 'Gain de temps', 'Conversion plus élevée'],
        useCases: ['Entreprises B2B', 'SaaS', 'Services professionnels'],
        timeframe: '3 mois',
        metrics: ['Qualité leads', 'Conversion'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Comment la qualification?', answer: 'Questions intelligentes identifiant besoins et budget.' }]
    },

    'logistics-shipment-tracking-whatsapp': {
        title: 'Suivi Expéditions Logistique',
        description: 'Système de suivi expéditions et gestion logistique.',
        shortDescription: 'Suivre expéditions via WhatsApp',
        features: ['Suivi temps réel', 'Notifications', 'Date livraison', 'Évaluation'],
        benefits: ['Transparence', 'Satisfaction client', 'Plus d\'efficacité'],
        useCases: ['Sociétés transport', 'Logistique', 'Distribution'],
        timeframe: '3 mois',
        metrics: ['Satisfaction client', 'Précision suivi'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Fréquence mises à jour?', answer: 'À chaque changement de statut.' }]
    },

    'insurance-claim-filing-whatsapp': {
        title: 'Dépôt Réclamations Assurance',
        description: 'Système de dépôt et suivi des réclamations d\'assurance.',
        shortDescription: 'Déposer réclamation via WhatsApp',
        features: ['Dépôt réclamation', 'Upload documents', 'Suivi statut', 'Communication'],
        benefits: ['Procédures plus rapides', 'Transparence', 'Plus de satisfaction'],
        useCases: ['Compagnies assurance', 'Courtiers', 'Banques'],
        timeframe: '4 mois',
        metrics: ['Vitesse traitement', 'Satisfaction client'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Combien de temps?', answer: '50% plus rapide que la méthode traditionnelle.' }]
    },

    'automotive-service-booking-whatsapp': {
        title: 'Réservation Service Auto',
        description: 'Système de réservation pour entretien et services auto.',
        shortDescription: 'Réserver entretien auto via WhatsApp',
        features: ['Réservation entretien', 'Rappels', 'Suivi réparation', 'Devis'],
        benefits: ['Entretien régulier', 'Clients fidèles', 'Revenus continus'],
        useCases: ['Garages', 'Concessionnaires', 'Centres service'],
        timeframe: '3 mois',
        metrics: ['Réservations', 'Clients récurrents'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Rappels entretien?', answer: 'Oui, rappels automatiques.' }]
    },

    'event-ticketing-management-whatsapp': {
        title: 'Gestion Billetterie Événements',
        description: 'Système de vente et gestion de billets d\'événements.',
        shortDescription: 'Billets événements via WhatsApp',
        features: ['Vente billets', 'QR entrée', 'Rappels', 'Annulation/Remboursement'],
        benefits: ['Ventes plus faciles', 'Expérience fluide', 'Données'],
        useCases: ['Organisateurs événements', 'Théâtres', 'Conférences'],
        timeframe: '2 mois',
        metrics: ['Ventes billets', 'Présence'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Comment recevoir le billet?', answer: 'QR numérique via WhatsApp.' }]
    },

    'gym-membership-class-booking-whatsapp': {
        title: 'Adhésion Gym et Réservation Cours',
        description: 'Système de gestion adhésions gym et réservation cours.',
        shortDescription: 'Gym via WhatsApp',
        features: ['Renouvellement adhésion', 'Réservation cours', 'Programmes entraînement', 'Contact coach'],
        benefits: ['Membres fidèles', 'Meilleure présence', 'Communication continue'],
        useCases: ['Salles de sport', 'Studios', 'Coachs'],
        timeframe: '2 mois',
        metrics: ['Renouvellements', 'Présence'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Comment réserver un cours?', answer: 'Choisir jour et heure et recevoir confirmation.' }]
    },

    'legal-consultation-booking-whatsapp': {
        title: 'Réservation Consultation Juridique',
        description: 'Système de réservation pour consultations juridiques.',
        shortDescription: 'Consultation avocat via WhatsApp',
        features: ['Réservation RDV', 'Consultation initiale', 'Envoi documents', 'Suivi dossier'],
        benefits: ['Accès plus facile', 'Coûts réduits', 'Confidentialité'],
        useCases: ['Cabinets avocats', 'Avocats indépendants', 'Entreprises'],
        timeframe: '2 mois',
        metrics: ['Consultations', 'Satisfaction client'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Confidentiel?', answer: 'Oui, confidentialité avocat-client complète.' }]
    },

    'salon-beauty-appointment-whatsapp': {
        title: 'RDV Salon Beauté',
        description: 'Système de réservation pour salons de beauté et spas.',
        shortDescription: 'Réserver RDV via WhatsApp',
        features: ['Réservation services', 'Choix employé', 'Offres', 'Rappels'],
        benefits: ['Plus de réservations', 'Moins d\'annulations', 'Fidélité client'],
        useCases: ['Salons', 'Spas', 'Cliniques esthétiques'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Satisfaction client'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Choix de l\'employé?', answer: 'Oui, choisissez votre favori.' }]
    },

    'pet-care-vet-booking-whatsapp': {
        title: 'Réservation Vétérinaire et Soins Animaux',
        description: 'Système de réservation pour vétérinaires et services de soins animaux.',
        shortDescription: 'Soins animaux via WhatsApp',
        features: ['Réservation RDV', 'Rappels vaccins', 'Conseils', 'Commande produits'],
        benefits: ['Meilleurs soins', 'Clients fidèles', 'Ventes additionnelles'],
        useCases: ['Cliniques vétérinaires', 'Animaleries', 'Hôtels animaux'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Vaccinations régulières'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Rappels vaccins?', answer: 'Oui, rappels automatiques.' }]
    },

    'student-counseling-appointment-whatsapp': {
        title: 'RDV Orientation Étudiante',
        description: 'Système de réservation pour séances d\'orientation et soutien.',
        shortDescription: 'RDV orientation via WhatsApp',
        features: ['Réservation RDV', 'Confidentialité totale', 'Rappels', 'Ressources aide'],
        benefits: ['Accès plus facile au soutien', 'Confidentialité', 'Suivi continu'],
        useCases: ['Écoles', 'Universités', 'Centres d\'orientation'],
        timeframe: '2 mois',
        metrics: ['Nombre séances', 'Satisfaction étudiants'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Confidentiel?', answer: 'Oui, confidentialité totale et cryptage.' }]
    },

    'educational-content-distribution-whatsapp': {
        title: 'Distribution Contenu Éducatif',
        description: 'Système d\'envoi de matériel et fichiers pédagogiques.',
        shortDescription: 'Distribuer matériel éducatif via WhatsApp',
        features: ['Envoi fichiers', 'Vidéos', 'Quiz courts', 'Suivi lecture'],
        benefits: ['Accès facile', 'Interaction accrue', 'Apprentissage continu'],
        useCases: ['Écoles', 'Formateurs', 'Plateformes éducatives'],
        timeframe: '2 mois',
        metrics: ['Taux vue', 'Interaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Quels types de fichiers?', answer: 'PDF, Word, vidéo, images et liens.' }]
    },

    // ==================== AGRICULTURE ====================

    'farm-equipment-inquiry': {
        title: 'Demande Équipement Agricole',
        description: 'Système de demande d\'équipement agricole.',
        shortDescription: 'Équipement agricole via WhatsApp',
        features: ['Catalogue', 'Prix', 'Disponibilité', 'Commande'],
        benefits: ['Accès rapide', 'Comparaison', 'Commande facile'],
        useCases: ['Fournisseurs agricoles', 'Coopératives', 'Agriculteurs'],
        timeframe: '2 mois',
        metrics: ['Demandes', 'Ventes'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Livraison?', answer: 'Oui, dans toute la région.' }]
    },

    'crop-weather-alerts': {
        title: 'Alertes Météo Cultures',
        description: 'Système d\'alertes météorologiques pour agriculteurs.',
        shortDescription: 'Alertes météo via WhatsApp',
        features: ['Prévisions', 'Alertes gel', 'Pluie', 'Conseils'],
        benefits: ['Protection récoltes', 'Planification', 'Décisions éclairées'],
        useCases: ['Agriculteurs', 'Coopératives', 'Assurances agricoles'],
        timeframe: '2 mois',
        metrics: ['Alertes', 'Pertes évitées'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Fréquence?', answer: 'Quotidienne et alertes urgentes.' }]
    },

    'livestock-management': {
        title: 'Gestion du Bétail',
        description: 'Système de suivi du bétail.',
        shortDescription: 'Gérer bétail via WhatsApp',
        features: ['Inventaire', 'Santé', 'Vaccination', 'Reproduction'],
        benefits: ['Meilleur suivi', 'Santé animale', 'Production optimisée'],
        useCases: ['Éleveurs', 'Vétérinaires', 'Fermes'],
        timeframe: '3 mois',
        metrics: ['Animaux', 'Santé'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Quel bétail?', answer: 'Bovins, ovins, caprins, porcs.' }]
    },

    'harvest-coordination': {
        title: 'Coordination Récolte',
        description: 'Système de coordination des récoltes.',
        shortDescription: 'Coordonner récolte via WhatsApp',
        features: ['Planning', 'Équipes', 'Équipement', 'Stockage'],
        benefits: ['Efficacité', 'Moins de pertes', 'Coordination'],
        useCases: ['Exploitations', 'Coopératives', 'Ouvriers agricoles'],
        timeframe: '2 mois',
        metrics: ['Récoltes', 'Efficacité'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Équipes?', answer: 'Oui, coordination temps réel.' }]
    },

    // ==================== INDUSTRIE ====================

    'factory-maintenance-alerts': {
        title: 'Alertes Maintenance Usine',
        description: 'Système d\'alertes de maintenance industrielle.',
        shortDescription: 'Maintenance usine via WhatsApp',
        features: ['Alertes panne', 'Planning maintenance', 'Pièces', 'Rapports'],
        benefits: ['Moins d\'arrêts', 'Maintenance préventive', 'Documentation'],
        useCases: ['Usines', 'Ateliers', 'Maintenance'],
        timeframe: '3 mois',
        metrics: ['Temps d\'arrêt', 'Coûts'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Intégration?', answer: 'Avec systèmes existants.' }]
    },

    'quality-control-updates': {
        title: 'Mises à Jour Qualité',
        description: 'Système de contrôle qualité.',
        shortDescription: 'Contrôle qualité via WhatsApp',
        features: ['Rapports', 'Alertes défauts', 'Photos', 'Suivi'],
        benefits: ['Qualité améliorée', 'Réactivité', 'Traçabilité'],
        useCases: ['Usines', 'Qualité', 'Production'],
        timeframe: '2 mois',
        metrics: ['Défauts', 'Qualité'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Photos?', answer: 'Oui, documentation visuelle.' }]
    },

    'supply-chain-tracking': {
        title: 'Suivi Chaîne Approvisionnement',
        description: 'Système de suivi logistique.',
        shortDescription: 'Logistique via WhatsApp',
        features: ['Suivi commandes', 'Stocks', 'Alertes', 'Délais'],
        benefits: ['Visibilité', 'Moins de ruptures', 'Planification'],
        useCases: ['Logistique', 'Achats', 'Production'],
        timeframe: '3 mois',
        metrics: ['Délais', 'Ruptures'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Temps réel?', answer: 'Oui, mises à jour instantanées.' }]
    },

    // ==================== CONSTRUCTION ====================

    'construction-project-updates': {
        title: 'Mises à Jour Chantier',
        description: 'Système de communication pour chantiers.',
        shortDescription: 'Chantier via WhatsApp',
        features: ['Photos', 'Avancement', 'Problèmes', 'Planning'],
        benefits: ['Clients informés', 'Transparence', 'Documentation'],
        useCases: ['Entreprises BTP', 'Maîtres d\'ouvrage', 'Architectes'],
        timeframe: '2 mois',
        metrics: ['Satisfaction', 'Communication'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Fréquence?', answer: 'Quotidienne ou hebdomadaire.' }]
    },

    'contractor-coordination': {
        title: 'Coordination Sous-Traitants',
        description: 'Système de coordination des sous-traitants.',
        shortDescription: 'Coordonner équipes via WhatsApp',
        features: ['Planning', 'Tâches', 'Présence', 'Documents'],
        benefits: ['Coordination', 'Moins de retards', 'Documentation'],
        useCases: ['Entrepreneurs', 'Chefs de projet', 'Sous-traitants'],
        timeframe: '2 mois',
        metrics: ['Retards', 'Efficacité'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Nombre équipes?', answer: 'Illimité.' }]
    },

    'material-ordering': {
        title: 'Commande Matériaux',
        description: 'Système de commande de matériaux.',
        shortDescription: 'Commander matériaux via WhatsApp',
        features: ['Catalogue', 'Prix', 'Commande', 'Livraison'],
        benefits: ['Rapidité', 'Moins d\'erreurs', 'Suivi'],
        useCases: ['Entreprises BTP', 'Négoces', 'Artisans'],
        timeframe: '2 mois',
        metrics: ['Commandes', 'Délais'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Livraison chantier?', answer: 'Oui, directement.' }]
    },

    // ==================== SERVICES À DOMICILE ====================

    'plumbing-service-booking': {
        title: 'Réservation Plombier',
        description: 'Système de réservation de plomberie.',
        shortDescription: 'Plombier via WhatsApp',
        features: ['Description problème', 'Photos', 'Devis', 'Rendez-vous'],
        benefits: ['Intervention rapide', 'Devis transparent', 'Suivi'],
        useCases: ['Plombiers', 'Syndics', 'Particuliers'],
        timeframe: '2 mois',
        metrics: ['Interventions', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Urgence?', answer: 'Oui, intervention rapide.' }]
    },

    'electrical-service-booking': {
        title: 'Réservation Électricien',
        description: 'Système de réservation d\'électricien.',
        shortDescription: 'Électricien via WhatsApp',
        features: ['Description', 'Urgence', 'Devis', 'Rendez-vous'],
        benefits: ['Sécurité', 'Rapidité', 'Professionnalisme'],
        useCases: ['Électriciens', 'Syndics', 'Particuliers'],
        timeframe: '2 mois',
        metrics: ['Interventions', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Dépannage 24/7?', answer: 'Oui, service urgence.' }]
    },

    'hvac-service-booking': {
        title: 'Réservation Climatisation',
        description: 'Système de réservation climatisation/chauffage.',
        shortDescription: 'Clim/chauffage via WhatsApp',
        features: ['Type intervention', 'Marque', 'Rendez-vous', 'Contrat'],
        benefits: ['Confort', 'Entretien régulier', 'Efficacité'],
        useCases: ['Climaticiens', 'Chauffagistes', 'Syndics'],
        timeframe: '2 mois',
        metrics: ['Interventions', 'Contrats'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Contrat entretien?', answer: 'Oui, avec rappels.' }]
    },

    'locksmith-service': {
        title: 'Service Serrurier',
        description: 'Système de service de serrurerie.',
        shortDescription: 'Serrurier via WhatsApp',
        features: ['Type urgence', 'Localisation', 'Devis', 'Intervention'],
        benefits: ['Rapidité', 'Prix fixe', 'Sécurité'],
        useCases: ['Serruriers', 'Syndics', 'Particuliers'],
        timeframe: '2 mois',
        metrics: ['Interventions', 'Temps'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: '24/7?', answer: 'Oui, service urgence.' }]
    },

    'handyman-service': {
        title: 'Service Bricolage',
        description: 'Système de services de bricolage.',
        shortDescription: 'Bricoleur via WhatsApp',
        features: ['Type travaux', 'Photos', 'Devis', 'Rendez-vous'],
        benefits: ['Polyvalence', 'Économies', 'Qualité'],
        useCases: ['Bricoleurs', 'Syndics', 'Particuliers'],
        timeframe: '2 mois',
        metrics: ['Travaux', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Quels travaux?', answer: 'Montage, réparations, petits travaux.' }]
    },

    // ==================== NETTOYAGE ====================

    'home-cleaning-booking': {
        title: 'Réservation Ménage',
        description: 'Système de réservation de ménage.',
        shortDescription: 'Ménage via WhatsApp',
        features: ['Type logement', 'Fréquence', 'Services', 'Réservation'],
        benefits: ['Maison propre', 'Régularité', 'Confiance'],
        useCases: ['Entreprises nettoyage', 'Indépendants', 'Particuliers'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Fidélisation'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Produits?', answer: 'Inclus ou écologiques sur demande.' }]
    },

    'office-cleaning-booking': {
        title: 'Nettoyage Bureaux',
        description: 'Système de réservation nettoyage professionnel.',
        shortDescription: 'Nettoyage bureaux via WhatsApp',
        features: ['Surface', 'Fréquence', 'Services', 'Contrat'],
        benefits: ['Environnement sain', 'Image', 'Régularité'],
        useCases: ['Sociétés nettoyage', 'Entreprises', 'Syndics'],
        timeframe: '2 mois',
        metrics: ['Contrats', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Week-end?', answer: 'Oui, horaires flexibles.' }]
    },

    'carpet-upholstery-cleaning': {
        title: 'Nettoyage Tapis/Meubles',
        description: 'Système de nettoyage spécialisé.',
        shortDescription: 'Nettoyage tapis via WhatsApp',
        features: ['Type textile', 'Photos', 'Devis', 'Rendez-vous'],
        benefits: ['Propreté profonde', 'Durée de vie', 'Hygiène'],
        useCases: ['Nettoyeurs', 'Hôtels', 'Particuliers'],
        timeframe: '1 mois',
        metrics: ['Interventions', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Sur place?', answer: 'Oui, ou en atelier.' }]
    },

    // ==================== SÉCURITÉ ====================

    'security-guard-service': {
        title: 'Service Agents Sécurité',
        description: 'Système de demande d\'agents de sécurité.',
        shortDescription: 'Sécurité via WhatsApp',
        features: ['Type mission', 'Durée', 'Nombre agents', 'Devis'],
        benefits: ['Protection', 'Professionnalisme', 'Réactivité'],
        useCases: ['Sociétés sécurité', 'Entreprises', 'Événements'],
        timeframe: '2 mois',
        metrics: ['Missions', 'Satisfaction'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Armé?', answer: 'Selon besoins et réglementation.' }]
    },

    'alarm-monitoring': {
        title: 'Télésurveillance',
        description: 'Système de gestion de télésurveillance.',
        shortDescription: 'Alarme via WhatsApp',
        features: ['Alertes', 'État système', 'Intervention', 'Historique'],
        benefits: ['Tranquillité', 'Réactivité', 'Contrôle'],
        useCases: ['Télésurveillance', 'Assureurs', 'Particuliers'],
        timeframe: '3 mois',
        metrics: ['Alertes', 'Interventions'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Temps intervention?', answer: 'Selon formule.' }]
    },

    // ==================== TÉLÉCOMMUNICATIONS ====================

    'telecom-plan-inquiry': {
        title: 'Demande Forfait',
        description: 'Système de demande de forfait téléphonique.',
        shortDescription: 'Forfait via WhatsApp',
        features: ['Comparaison', 'Simulation', 'Souscription', 'Support'],
        benefits: ['Meilleur prix', 'Simplicité', 'Rapidité'],
        useCases: ['Opérateurs', 'Distributeurs', 'Clients'],
        timeframe: '2 mois',
        metrics: ['Souscriptions', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Portabilité?', answer: 'Oui, nous gérons tout.' }]
    },

    'telecom-bill-inquiry': {
        title: 'Consultation Facture',
        description: 'Système de consultation de factures.',
        shortDescription: 'Facture télécom via WhatsApp',
        features: ['Voir facture', 'Détails', 'Paiement', 'Historique'],
        benefits: ['Transparence', 'Paiement facile', 'Contrôle'],
        useCases: ['Opérateurs', 'Clients'],
        timeframe: '1 mois',
        metrics: ['Consultations', 'Paiements'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'PDF?', answer: 'Oui, téléchargeable.' }]
    },

    // ==================== RH & RECRUTEMENT ====================

    'job-application-tracking': {
        title: 'Suivi Candidature',
        description: 'Système de suivi des candidatures.',
        shortDescription: 'Candidature via WhatsApp',
        features: ['Statut', 'Entretiens', 'Documents', 'Notifications'],
        benefits: ['Transparence', 'Communication', 'Expérience candidat'],
        useCases: ['RH', 'Recruteurs', 'Candidats'],
        timeframe: '2 mois',
        metrics: ['Candidatures', 'Temps recrutement'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Notifications?', answer: 'Oui, à chaque étape.' }]
    },

    'employee-onboarding': {
        title: 'Intégration Employés',
        description: 'Système d\'onboarding des nouveaux employés.',
        shortDescription: 'Onboarding via WhatsApp',
        features: ['Checklist', 'Documents', 'Formations', 'Contacts'],
        benefits: ['Intégration réussie', 'Productivité rapide', 'Bien-être'],
        useCases: ['RH', 'Managers', 'Nouveaux employés'],
        timeframe: '2 mois',
        metrics: ['Intégrations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Durée?', answer: 'Program personnalisable.' }]
    },

    'leave-management': {
        title: 'Gestion Congés',
        description: 'Système de gestion des congés.',
        shortDescription: 'Congés via WhatsApp',
        features: ['Demande', 'Solde', 'Approbation', 'Calendrier'],
        benefits: ['Simplicité', 'Visibilité', 'Rapidité'],
        useCases: ['RH', 'Managers', 'Employés'],
        timeframe: '2 mois',
        metrics: ['Demandes', 'Temps traitement'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Types congés?', answer: 'Tous types configurables.' }]
    },

    // ==================== MARIAGE ====================

    'wedding-planning-service': {
        title: 'Organisation Mariage',
        description: 'Système de communication pour organisateurs.',
        shortDescription: 'Mariage via WhatsApp',
        features: ['Checklist', 'Prestataires', 'Planning', 'Budget'],
        benefits: ['Organisation', 'Moins de stress', 'Communication'],
        useCases: ['Wedding planners', 'Couples', 'Lieux'],
        timeframe: '3 mois',
        metrics: ['Mariages', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Pour couples?', answer: 'Oui, couples et planners.' }]
    },

    'wedding-guest-management': {
        title: 'Gestion Invités Mariage',
        description: 'Système de gestion des invités.',
        shortDescription: 'Invités mariage via WhatsApp',
        features: ['Invitations', 'RSVP', 'Plan table', 'Infos'],
        benefits: ['Gestion facile', 'Moins d\'appels', 'Organisation'],
        useCases: ['Couples', 'Planners', 'Lieux'],
        timeframe: '2 mois',
        metrics: ['Taux réponse', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Rappels?', answer: 'Oui, automatiques.' }]
    },

    // ==================== ASSOCIATIONS ====================

    'nonprofit-donation': {
        title: 'Dons Association',
        description: 'Système de collecte de dons.',
        shortDescription: 'Dons via WhatsApp',
        features: ['Formulaire don', 'Campagnes', 'Reçus', 'Updates'],
        benefits: ['Plus de dons', 'Simplicité', 'Transparence'],
        useCases: ['Associations', 'ONG', 'Fondations'],
        timeframe: '2 mois',
        metrics: ['Dons', 'Donateurs'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Reçu fiscal?', answer: 'Oui, automatique.' }]
    },

    'nonprofit-volunteer': {
        title: 'Gestion Bénévoles',
        description: 'Système de coordination des bénévoles.',
        shortDescription: 'Bénévoles via WhatsApp',
        features: ['Inscription', 'Planning', 'Missions', 'Heures'],
        benefits: ['Organisation', 'Engagement', 'Reconnaissance'],
        useCases: ['Associations', 'ONG', 'Événements'],
        timeframe: '2 mois',
        metrics: ['Bénévoles', 'Heures'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Attestations?', answer: 'Oui, pour les heures.' }]
    },

    // ==================== COMPTABILITÉ ====================

    'accounting-tax-filing': {
        title: 'Déclaration Fiscale',
        description: 'Système d\'aide à la déclaration fiscale.',
        shortDescription: 'Impôts via WhatsApp',
        features: ['Documents', 'Calcul', 'Rappels', 'Suivi'],
        benefits: ['Moins de stress', 'Pas de retard', 'Simplicité'],
        useCases: ['Comptables', 'Experts-comptables', 'Particuliers'],
        timeframe: '3 mois',
        metrics: ['Déclarations', 'Précision'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Particuliers et pros?', answer: 'Oui, les deux.' }]
    },

    'accounting-expense-tracking': {
        title: 'Suivi Dépenses',
        description: 'Système de suivi des dépenses.',
        shortDescription: 'Dépenses via WhatsApp',
        features: ['Photos reçus', 'Catégories', 'Rapports', 'Export'],
        benefits: ['Vision claire', 'Préparation fiscale', 'Simplicité'],
        useCases: ['Entreprises', 'Freelances', 'Comptables'],
        timeframe: '2 mois',
        metrics: ['Reçus', 'Précision'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'OCR?', answer: 'Oui, reconnaissance automatique.' }]
    },

    // ==================== DENTISTE ====================

    'dental-appointment-booking': {
        title: 'Rendez-vous Dentiste',
        description: 'Système de prise de rendez-vous dentaire.',
        shortDescription: 'Dentiste via WhatsApp',
        features: ['Prise RDV', 'Type soin', 'Rappels', 'Dossier'],
        benefits: ['Réservation facile', 'Moins d\'absence', 'Dossier complet'],
        useCases: ['Cabinets dentaires', 'Cliniques', 'Patients'],
        timeframe: '2 mois',
        metrics: ['RDV', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Urgences?', answer: 'Oui, créneaux prioritaires.' }]
    },

    'dental-treatment-reminders': {
        title: 'Rappels Soins Dentaires',
        description: 'Système de rappels pour soins dentaires.',
        shortDescription: 'Rappels dentaire via WhatsApp',
        features: ['Contrôles', 'Suivi', 'Conseils', 'Promotions'],
        benefits: ['Santé bucco-dentaire', 'Fidélisation', 'Plus de visites'],
        useCases: ['Cabinets', 'Hygiénistes', 'Cliniques'],
        timeframe: '1 mois',
        metrics: ['Visites récurrentes', 'Santé'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Fréquence?', answer: 'Tous les 6 mois ou sur plan.' }]
    },

    // ==================== OPTIQUE ====================

    'optometry-appointment': {
        title: 'Rendez-vous Opticien',
        description: 'Système de prise de rendez-vous optique.',
        shortDescription: 'Opticien via WhatsApp',
        features: ['Prise RDV', 'Type exam', 'Rappels', 'Résultats'],
        benefits: ['Réservation facile', 'Suivi santé', 'Rappels'],
        useCases: ['Opticiens', 'Ophtalmologues', 'Cliniques'],
        timeframe: '2 mois',
        metrics: ['RDV', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Résultats digitaux?', answer: 'Oui, via WhatsApp.' }]
    },

    'optometry-lens-orders': {
        title: 'Commande Lunettes/Lentilles',
        description: 'Système de commande d\'optique.',
        shortDescription: 'Lunettes via WhatsApp',
        features: ['Commande', 'Suivi', 'Prêt', 'Paiement'],
        benefits: ['Simplicité', 'Notification', 'Livraison'],
        useCases: ['Opticiens', 'E-commerce optique', 'Patients'],
        timeframe: '2 mois',
        metrics: ['Commandes', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Livraison?', answer: 'Oui, ou retrait.' }]
    },

    // ==================== YOGA & BIEN-ÊTRE ====================

    'yoga-class-booking': {
        title: 'Cours de Yoga',
        description: 'Système de réservation cours yoga.',
        shortDescription: 'Yoga via WhatsApp',
        features: ['Horaires', 'Réservation', 'Professeur', 'Rappels'],
        benefits: ['Réservation facile', 'Flexibilité', 'Rappels'],
        useCases: ['Studios yoga', 'Professeurs', 'Centres bien-être'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Participation'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Tous niveaux?', answer: 'Oui, débutants à avancés.' }]
    },

    'yoga-online-sessions': {
        title: 'Yoga en Ligne',
        description: 'Système cours yoga en ligne.',
        shortDescription: 'Yoga online via WhatsApp',
        features: ['Planning', 'Liens', 'Replays', 'Progression'],
        benefits: ['De chez soi', 'Flexibilité', 'Replays'],
        useCases: ['Professeurs', 'Plateformes', 'Studios'],
        timeframe: '2 mois',
        metrics: ['Sessions', 'Vues'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Replays?', answer: 'Oui, pour abonnés.' }]
    },

    // ==================== ARTS MARTIAUX ====================

    'martialarts-class-booking': {
        title: 'Cours Arts Martiaux',
        description: 'Système de réservation arts martiaux.',
        shortDescription: 'Arts martiaux via WhatsApp',
        features: ['Planning', 'Discipline', 'Réservation', 'Grades'],
        benefits: ['Réservation facile', 'Suivi progression', 'Organisation'],
        useCases: ['Dojos', 'Clubs', 'Instructeurs'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Passages grades'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Quelles disciplines?', answer: 'Karaté, Judo, Taekwondo, etc.' }]
    },

    // ==================== COIFFEUR & BARBIER ====================

    'barbershop-booking': {
        title: 'Réservation Coiffeur',
        description: 'Système de réservation coiffure.',
        shortDescription: 'Coiffeur via WhatsApp',
        features: ['Prise RDV', 'Choix coiffeur', 'Services', 'Rappels'],
        benefits: ['Pas d\'attente', 'Coiffeur préféré', 'Rappels'],
        useCases: ['Salons', 'Barbershops', 'Coiffeurs'],
        timeframe: '2 mois',
        metrics: ['RDV', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Choix coiffeur?', answer: 'Oui, votre préféré.' }]
    },

    'barbershop-style-gallery': {
        title: 'Galerie Coiffures',
        description: 'Système de galerie de styles.',
        shortDescription: 'Styles coiffure via WhatsApp',
        features: ['Galerie', 'Choix préalable', 'Favoris', 'Lien RDV'],
        benefits: ['Attentes claires', 'Meilleurs résultats', 'Pratique'],
        useCases: ['Salons', 'Coiffeurs', 'Stylistes'],
        timeframe: '1 mois',
        metrics: ['Engagement', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Nouveaux styles?', answer: 'Oui, mises à jour régulières.' }]
    },

    // ==================== TRAITEUR ====================

    'catering-quote-request': {
        title: 'Demande Devis Traiteur',
        description: 'Système de demande devis traiteur.',
        shortDescription: 'Traiteur via WhatsApp',
        features: ['Détails événement', 'Menu', 'Devis', 'Réservation'],
        benefits: ['Devis rapide', 'Comparaison', 'Réservation facile'],
        useCases: ['Traiteurs', 'Hôtels', 'Restaurants'],
        timeframe: '2 mois',
        metrics: ['Demandes', 'Conversions'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Nombre personnes?', answer: 'De 10 à 10 000.' }]
    },

    'catering-menu-customization': {
        title: 'Personnalisation Menu',
        description: 'Système de personnalisation menus.',
        shortDescription: 'Menu traiteur via WhatsApp',
        features: ['Menus prêts', 'Personnalisation', 'Régimes', 'Prix instant'],
        benefits: ['Menu parfait', 'Flexibilité', 'Prix transparent'],
        useCases: ['Traiteurs', 'Planners', 'Mariages'],
        timeframe: '2 mois',
        metrics: ['Personnalisations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Allergies?', answer: 'Oui, nous adaptons tout.' }]
    },

    // ==================== TAXI & VTC ====================

    'taxi-booking': {
        title: 'Réservation Taxi',
        description: 'Système de réservation taxi.',
        shortDescription: 'Taxi via WhatsApp',
        features: ['Réservation immédiate', 'Suivi', 'Estimation prix', 'Paiement'],
        benefits: ['Simple', 'Sûr', 'Transparent'],
        useCases: ['Taxis', 'Chauffeurs', 'Apps'],
        timeframe: '3 mois',
        metrics: ['Courses', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Réservation avance?', answer: 'Oui, jusqu\'à une semaine.' }]
    },

    'taxi-airport-transfer': {
        title: 'Transfert Aéroport',
        description: 'Système de transferts aéroport.',
        shortDescription: 'Transfert aéroport via WhatsApp',
        features: ['Réservation', 'Suivi vol', 'Panneau nom', 'Bagages'],
        benefits: ['Fiable', 'Pratique', 'Prix fixe'],
        useCases: ['Taxis', 'Hôtels', 'Agences voyage'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Satisfaction'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Vol retardé?', answer: 'Nous suivons votre vol.' }]
    },

    // ==================== BATEAUX ====================

    'boat-charter': {
        title: 'Location Bateau',
        description: 'Système de location bateaux/yachts.',
        shortDescription: 'Bateau via WhatsApp',
        features: ['Catalogue', 'Réservation', 'Services', 'Équipage'],
        benefits: ['Expérience luxe', 'Réservation facile', 'Choix'],
        useCases: ['Loueurs', 'Ports', 'Tourisme'],
        timeframe: '3 mois',
        metrics: ['Réservations', 'Revenus'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Avec équipage?', answer: 'Oui, ou sans.' }]
    },

    // ==================== FLEURISTE ====================

    'flower-order-delivery': {
        title: 'Commande Fleurs',
        description: 'Système commande et livraison fleurs.',
        shortDescription: 'Fleurs via WhatsApp',
        features: ['Catalogue', 'Personnalisation', 'Message', 'Livraison'],
        benefits: ['Simple', 'Livraison rapide', 'Beaux bouquets'],
        useCases: ['Fleuristes', 'Planners', 'Hôtels'],
        timeframe: '2 mois',
        metrics: ['Commandes', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Livraison jour même?', answer: 'Oui, en ville.' }]
    },

    'flower-subscription': {
        title: 'Abonnement Fleurs',
        description: 'Abonnement livraison fleurs.',
        shortDescription: 'Abo fleurs via WhatsApp',
        features: ['Hebdo/mensuel', 'Personnalisation', 'Livraison régulière', 'Gestion'],
        benefits: ['Fleurs fraîches toujours', 'Économies', 'Pratique'],
        useCases: ['Fleuristes', 'Entreprises', 'Particuliers'],
        timeframe: '2 mois',
        metrics: ['Abonnés', 'Rétention'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Pause?', answer: 'Oui, possible.' }]
    },

    // ==================== BOULANGERIE ====================

    'cake-custom-order': {
        title: 'Commande Gâteau',
        description: 'Système commande gâteaux personnalisés.',
        shortDescription: 'Gâteau via WhatsApp',
        features: ['Design', 'Personnalisation', 'Date', 'Livraison/Retrait'],
        benefits: ['Gâteau unique', 'Personnalisation totale', 'Simple'],
        useCases: ['Pâtisseries', 'Boulangers', 'Planners'],
        timeframe: '2 mois',
        metrics: ['Commandes', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Délai?', answer: '3-7 jours selon complexité.' }]
    },

    'bakery-daily-orders': {
        title: 'Commande Boulangerie',
        description: 'Système commande viennoiseries/pain.',
        shortDescription: 'Boulangerie via WhatsApp',
        features: ['Offre du jour', 'Précommande', 'Livraison/Retrait', 'Abo'],
        benefits: ['Produits frais', 'Pas d\'attente', 'Livraison'],
        useCases: ['Boulangeries', 'Cafés', 'Pâtisseries'],
        timeframe: '2 mois',
        metrics: ['Commandes quotidiennes', 'Clients réguliers'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Commande tôt?', answer: 'Oui, avant 9h.' }]
    },

    // ==================== CAFÉ ====================

    'coffee-subscription-service': {
        title: 'Abonnement Café',
        description: 'Abonnement livraison café.',
        shortDescription: 'Abo café via WhatsApp',
        features: ['Choix variétés', 'Planning', 'Mouture', 'Gestion'],
        benefits: ['Café frais toujours', 'Économies', 'Variété'],
        useCases: ['Torréfacteurs', 'Cafés', 'Distributeurs'],
        timeframe: '2 mois',
        metrics: ['Abonnés', 'Rétention'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Changer variété?', answer: 'Oui, quand vous voulez.' }]
    },

    'coffee-shop-preorder': {
        title: 'Précommande Café',
        description: 'Système précommande en café.',
        shortDescription: 'Café précommande via WhatsApp',
        features: ['Menu', 'Précommande', 'Heure retrait', 'Paiement'],
        benefits: ['Pas d\'attente', 'Commande prête', 'Gain de temps'],
        useCases: ['Cafés', 'Torréfacteurs', 'Restaurants'],
        timeframe: '2 mois',
        metrics: ['Précommandes', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Combien à l\'avance?', answer: 'À partir de 15 min.' }]
    },

    // ==================== ANIMAUX ====================

    'pet-grooming-booking': {
        title: 'Toilettage Animal',
        description: 'Système réservation toilettage.',
        shortDescription: 'Toilettage via WhatsApp',
        features: ['Services', 'RDV', 'Photos avant/après', 'Rappels'],
        benefits: ['Soin professionnel', 'Réservation facile', 'Beaux résultats'],
        useCases: ['Toiletteurs', 'Vétérinaires', 'Animaleries'],
        timeframe: '2 mois',
        metrics: ['RDV', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Quels animaux?', answer: 'Chiens, chats et plus.' }]
    },

    'pet-boarding-booking': {
        title: 'Pension Animal',
        description: 'Système réservation pension.',
        shortDescription: 'Pension via WhatsApp',
        features: ['Réservation', 'Besoins spéciaux', 'Updates quotidiens', 'Photos'],
        benefits: ['Tranquillité', 'Meilleurs soins', 'Suivi'],
        useCases: ['Pensions', 'Vétérinaires', 'Refuges'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Updates quotidiens?', answer: 'Oui, photos et vidéos.' }]
    },

    'pet-food-delivery': {
        title: 'Livraison Nourriture Animal',
        description: 'Système commande alimentation animale.',
        shortDescription: 'Croquettes via WhatsApp',
        features: ['Catalogue', 'Abo', 'Livraison régulière', 'Rappels'],
        benefits: ['Jamais en rupture', 'Économies', 'Pratique'],
        useCases: ['Animaleries', 'Distributeurs', 'Vétérinaires'],
        timeframe: '2 mois',
        metrics: ['Commandes', 'Abonnements'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Abo mensuel?', answer: 'Oui, avec réduction.' }]
    },

    // ==================== MEUBLES ====================

    'furniture-custom-orders': {
        title: 'Meubles Sur Mesure',
        description: 'Système commande meubles personnalisés.',
        shortDescription: 'Meubles sur mesure via WhatsApp',
        features: ['Design', 'Devis', 'Suivi production', 'Livraison'],
        benefits: ['Meubles uniques', 'Sur mesure', 'Qualité'],
        useCases: ['Ébénistes', 'Menuisiers', 'Designers'],
        timeframe: '3 mois',
        metrics: ['Commandes', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Délai?', answer: '2-6 semaines selon pièce.' }]
    },

    'furniture-delivery-assembly': {
        title: 'Livraison & Montage Meubles',
        description: 'Système livraison et montage.',
        shortDescription: 'Montage meubles via WhatsApp',
        features: ['RDV', 'Suivi livraison', 'Montage', 'Avis'],
        benefits: ['Service complet', 'Suivi', 'Pratique'],
        useCases: ['Magasins meubles', 'Livreurs', 'Menuisiers'],
        timeframe: '2 mois',
        metrics: ['Livraisons', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Coût montage?', answer: 'Selon pièces, affiché avant.' }]
    },

    // ==================== DÉMÉNAGEMENT ====================

    'moving-quote-request': {
        title: 'Devis Déménagement',
        description: 'Système demande devis déménagement.',
        shortDescription: 'Déménagement via WhatsApp',
        features: ['Détails logement', 'Photos', 'Devis', 'Réservation'],
        benefits: ['Comparaison prix', 'Transparence', 'Réservation facile'],
        useCases: ['Déménageurs', 'Transporteurs', 'Logistique'],
        timeframe: '2 mois',
        metrics: ['Demandes', 'Conversions'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Devis rapide?', answer: 'En quelques heures.' }]
    },

    'moving-day-coordination': {
        title: 'Coordination Jour J',
        description: 'Système coordination déménagement.',
        shortDescription: 'Suivi déménagement via WhatsApp',
        features: ['Suivi équipe', 'Checklist', 'Updates', 'Communication'],
        benefits: ['Organisation', 'Communication', 'Tranquillité'],
        useCases: ['Déménageurs', 'Clients', 'Coordinateurs'],
        timeframe: '2 mois',
        metrics: ['Satisfaction', 'Fluidité'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Assurance?', answer: 'Oui, transport assuré.' }]
    },

    // ==================== IMPRIMERIE ====================

    'print-order-system': {
        title: 'Commande Impression',
        description: 'Système commande impressions.',
        shortDescription: 'Imprimerie via WhatsApp',
        features: ['Upload fichiers', 'Specs', 'Aperçu', 'Livraison/Retrait'],
        benefits: ['Simple', 'Qualité', 'Rapide'],
        useCases: ['Imprimeries', 'Copy shops', 'Online'],
        timeframe: '2 mois',
        metrics: ['Commandes', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Formats?', answer: 'PDF, JPG, PNG et plus.' }]
    },

    // ==================== COWORKING ====================

    'coworking-booking': {
        title: 'Réservation Coworking',
        description: 'Système réservation espaces coworking.',
        shortDescription: 'Coworking via WhatsApp',
        features: ['Recherche', 'Réservation heure/jour', 'Services', 'Paiement'],
        benefits: ['Flexibilité', 'Environnement travail', 'Services'],
        useCases: ['Coworkings', 'Bureaux', 'Hôtels'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Occupation'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'À l\'heure?', answer: 'Oui, ou forfait.' }]
    },

    'coworking-meeting-room': {
        title: 'Salle de Réunion',
        description: 'Système réservation salles réunion.',
        shortDescription: 'Salle réunion via WhatsApp',
        features: ['Recherche', 'Capacité', 'Équipement', 'Paiement'],
        benefits: ['Salle adaptée', 'Réservation rapide', 'Équipée'],
        useCases: ['Coworkings', 'Hôtels', 'Business centers'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Équipement?', answer: 'Oui, vidéoprojecteur, etc.' }]
    },

    // ==================== GARDERIE ====================

    'childcare-booking': {
        title: 'Réservation Garde Enfant',
        description: 'Système réservation babysitting.',
        shortDescription: 'Babysitter via WhatsApp',
        features: ['Disponibilité', 'Réservation', 'Profils', 'Avis'],
        benefits: ['Confiance', 'Flexibilité', 'Simple'],
        useCases: ['Agences', 'Nounous', 'Parents'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Vérification?', answer: 'Oui, toutes gardes vérifiées.' }]
    },

    'childcare-daycare-updates': {
        title: 'Updates Crèche',
        description: 'Système communication crèches.',
        shortDescription: 'News crèche via WhatsApp',
        features: ['Updates quotidiens', 'Photos', 'Événements', 'Absences'],
        benefits: ['Parents informés', 'Moins d\'appels', 'Tranquillité'],
        useCases: ['Crèches', 'Garderies', 'Haltes'],
        timeframe: '2 mois',
        metrics: ['Engagement parents', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Photos privées?', answer: 'Oui, parents uniquement.' }]
    },

    // ==================== SENIORS ====================

    'eldercare-service': {
        title: 'Aide aux Personnes Âgées',
        description: 'Système réservation aide seniors.',
        shortDescription: 'Aide seniors via WhatsApp',
        features: ['Services', 'Planning', 'Profils aidants', 'Updates'],
        benefits: ['Soins qualité', 'Tranquillité', 'Flexibilité'],
        useCases: ['Agences', 'Familles', 'Aidants'],
        timeframe: '3 mois',
        metrics: ['Heures', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Qualifiés?', answer: 'Oui, tous aidants certifiés.' }]
    },

    // ==================== SOUTIEN SCOLAIRE ====================

    'tutoring-booking': {
        title: 'Cours Particuliers',
        description: 'Système réservation cours particuliers.',
        shortDescription: 'Soutien scolaire via WhatsApp',
        features: ['Matière', 'Professeur', 'RDV', 'Progression'],
        benefits: ['Prof adapté', 'Horaires flexibles', 'Suivi'],
        useCases: ['Organismes', 'Professeurs', 'Parents'],
        timeframe: '2 mois',
        metrics: ['Cours', 'Progression notes'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Quelles matières?', answer: 'Toutes matières scolaires.' }]
    },

    // ==================== PARKING ====================

    'parking-booking': {
        title: 'Réservation Parking',
        description: 'Système réservation places parking.',
        shortDescription: 'Parking via WhatsApp',
        features: ['Recherche', 'Disponibilité', 'Réservation', 'Navigation'],
        benefits: ['Place garantie', 'Gain temps', 'Souvent moins cher'],
        useCases: ['Parkings', 'Événements', 'Aéroports'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Occupation'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Annulation?', answer: 'Oui, jusqu\'à 1h avant.' }]
    },

    // ==================== BIJOUTERIE ====================

    'jewelry-custom-orders': {
        title: 'Bijoux Sur Mesure',
        description: 'Système commande bijoux personnalisés.',
        shortDescription: 'Bijou sur mesure via WhatsApp',
        features: ['Design', 'Conseil', 'Devis', 'Prêt'],
        benefits: ['Bijou unique', 'Qualité', 'Conseil'],
        useCases: ['Bijoutiers', 'Joailliers', 'Designers'],
        timeframe: '3 mois',
        metrics: ['Commandes', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Matériaux?', answer: 'Or, argent, platine et plus.' }]
    },

    'jewelry-repair-service': {
        title: 'Réparation Bijoux',
        description: 'Système réparation bijoux.',
        shortDescription: 'Réparer bijou via WhatsApp',
        features: ['Description', 'Photos', 'Devis', 'Prêt'],
        benefits: ['Réparation rapide', 'Prix transparent', 'Qualité'],
        useCases: ['Bijoutiers', 'Horlogers', 'Joailliers'],
        timeframe: '2 mois',
        metrics: ['Réparations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Délai?', answer: '1-7 jours selon travail.' }]
    },

    // ==================== COURSIER ====================

    'courier-same-day': {
        title: 'Livraison Express',
        description: 'Système livraison jour même.',
        shortDescription: 'Coursier via WhatsApp',
        features: ['Réservation immédiate', 'Suivi live', 'Preuve livraison', 'Paiement'],
        benefits: ['Rapide', 'Fiable', 'Traçable'],
        useCases: ['Coursiers', 'Entreprises', 'E-commerce'],
        timeframe: '2 mois',
        metrics: ['Livraisons', 'Délai'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Délai?', answer: 'En quelques heures.' }]
    },

    // ==================== STOCKAGE ====================

    'storage-booking': {
        title: 'Self-Storage',
        description: 'Système réservation box stockage.',
        shortDescription: 'Box stockage via WhatsApp',
        features: ['Taille', 'Disponibilité', 'Réservation', 'Codes accès'],
        benefits: ['Flexible', 'Sécurisé', 'Simple'],
        useCases: ['Self-storage', 'Garde-meubles', 'Particuliers'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Occupation'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Accès 24/7?', answer: 'Oui, avec code.' }]
    },

    // ==================== RÉPARATIONS ====================

    'phone-repair-service': {
        title: 'Réparation Téléphone',
        description: 'Système réservation réparation mobile.',
        shortDescription: 'Réparation tel via WhatsApp',
        features: ['Description panne', 'Devis', 'RDV', 'Prêt'],
        benefits: ['Réparation rapide', 'Prix transparent', 'Qualité'],
        useCases: ['Réparateurs', 'Boutiques', 'SAV'],
        timeframe: '2 mois',
        metrics: ['Réparations', 'Délai'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Délai?', answer: 'Souvent 1 heure.' }]
    },

    'computer-repair-service': {
        title: 'Réparation Ordinateur',
        description: 'Système réservation réparation PC.',
        shortDescription: 'Réparation PC via WhatsApp',
        features: ['Description', 'Diagnostic distant', 'Sur place/Atelier', 'Prêt'],
        benefits: ['Solution rapide', 'Transparence', 'Qualité'],
        useCases: ['IT', 'Boutiques', 'Entreprises'],
        timeframe: '2 mois',
        metrics: ['Réparations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Télémaintenance?', answer: 'Oui, pour logiciel.' }]
    },

    'appliance-repair': {
        title: 'Réparation Électroménager',
        description: 'Système réparation appareils ménagers.',
        shortDescription: 'Réparer appareil via WhatsApp',
        features: ['Appareil', 'Description', 'RDV', 'Devis'],
        benefits: ['Aide rapide', 'Service domicile', 'Transparence'],
        useCases: ['Réparateurs', 'SAV', 'Revendeurs'],
        timeframe: '2 mois',
        metrics: ['Réparations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Quels appareils?', answer: 'Tous électroménagers.' }]
    },

    // ==================== NUISIBLES ====================

    'pest-control-booking': {
        title: 'Désinsectisation',
        description: 'Système réservation traitement nuisibles.',
        shortDescription: 'Anti-nuisibles via WhatsApp',
        features: ['Description', 'RDV', 'Traitement', 'Suivi'],
        benefits: ['Aide rapide', 'Méthodes sûres', 'Garantie'],
        useCases: ['Désinsectiseurs', 'Syndics', 'Entreprises'],
        timeframe: '2 mois',
        metrics: ['Interventions', 'Taux succès'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Sûr?', answer: 'Oui, méthodes écologiques.' }]
    },

    // ==================== JARDIN ====================

    'landscaping-booking': {
        title: 'Jardinage/Paysagisme',
        description: 'Système réservation jardinage.',
        shortDescription: 'Jardinier via WhatsApp',
        features: ['Services', 'RDV', 'Devis', 'Régulier'],
        benefits: ['Beau jardin', 'Professionnel', 'Fiable'],
        useCases: ['Jardiniers', 'Paysagistes', 'Syndics'],
        timeframe: '2 mois',
        metrics: ['Interventions', 'Clients réguliers'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Régulier?', answer: 'Oui, hebdo/mensuel.' }]
    },

    // ==================== PISCINE ====================

    'pool-maintenance-booking': {
        title: 'Entretien Piscine',
        description: 'Système réservation entretien piscine.',
        shortDescription: 'Piscine via WhatsApp',
        features: ['Entretien régulier', 'Réparations', 'Produits', 'Rapports'],
        benefits: ['Piscine propre', 'Régulier', 'Professionnel'],
        useCases: ['Piscinistes', 'Hôtels', 'Particuliers'],
        timeframe: '2 mois',
        metrics: ['Entretiens', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Fréquence?', answer: 'Hebdomadaire recommandé.' }]
    },

    // ==================== TOITURE ====================

    'roofing-service': {
        title: 'Service Toiture',
        description: 'Système réservation couvreur.',
        shortDescription: 'Couvreur via WhatsApp',
        features: ['Inspection', 'Réparation', 'Réfection', 'Devis'],
        benefits: ['Toit étanche', 'Qualité', 'Garantie'],
        useCases: ['Couvreurs', 'BTP', 'Syndics'],
        timeframe: '3 mois',
        metrics: ['Projets', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Garantie?', answer: 'Oui, jusqu\'à 10 ans.' }]
    },

    // ==================== VITRES ====================

    'window-service': {
        title: 'Service Vitrier',
        description: 'Système réservation vitrier.',
        shortDescription: 'Vitrier via WhatsApp',
        features: ['Réparation', 'Remplacement', 'Sécurité', 'Devis'],
        benefits: ['Étanche', 'Économie énergie', 'Sécurité'],
        useCases: ['Vitriers', 'Menuisiers', 'Syndics'],
        timeframe: '2 mois',
        metrics: ['Interventions', 'Satisfaction'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Urgence?', answer: 'Oui, service 24/7.' }]
    },

    // ==================== SOLS ====================

    'flooring-service': {
        title: 'Pose de Sol',
        description: 'Système réservation pose sol.',
        shortDescription: 'Sol via WhatsApp',
        features: ['Matériau', 'Métrage', 'Pose', 'Devis'],
        benefits: ['Beau sol', 'Professionnel', 'Garantie'],
        useCases: ['Poseurs', 'Décorateurs', 'Négoces'],
        timeframe: '2 mois',
        metrics: ['Chantiers', 'Satisfaction'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Quels sols?', answer: 'Parquet, carrelage, moquette.' }]
    },

    // ==================== MATELAS ====================

    'mattress-delivery': {
        title: 'Livraison Matelas',
        description: 'Système commande et livraison matelas.',
        shortDescription: 'Matelas via WhatsApp',
        features: ['Conseil', 'Choix', 'Livraison', 'Reprise ancien'],
        benefits: ['Meilleur sommeil', 'Livraison', 'Essai'],
        useCases: ['Literies', 'Meubles', 'E-commerce'],
        timeframe: '2 mois',
        metrics: ['Commandes', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Essai?', answer: 'Oui, 30-100 jours.' }]
    },

    // ==================== EAU ====================

    'water-delivery': {
        title: 'Livraison Eau',
        description: 'Système livraison eau potable.',
        shortDescription: 'Eau via WhatsApp',
        features: ['Commande', 'Abo', 'Livraison régulière', 'Consignes'],
        benefits: ['Eau fraîche', 'Régulier', 'Pratique'],
        useCases: ['Livreurs eau', 'Bureaux', 'Particuliers'],
        timeframe: '1 mois',
        metrics: ['Livraisons', 'Abonnés'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Abo?', answer: 'Oui, avec réduction.' }]
    },

    // ==================== SOLAIRE ====================

    'solar-quote': {
        title: 'Devis Solaire',
        description: 'Système demande devis panneaux solaires.',
        shortDescription: 'Solaire via WhatsApp',
        features: ['Photos toit', 'Analyse conso', 'Devis', 'Conseil'],
        benefits: ['Économies électricité', 'Écologie', 'Aides'],
        useCases: ['Solaires', 'Électriciens', 'Conseillers énergie'],
        timeframe: '3 mois',
        metrics: ['Demandes', 'Installations'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Économies?', answer: 'Jusqu\'à 80% sur électricité.' }]
    },

    // ==================== ASCENSEUR ====================

    'elevator-service': {
        title: 'Service Ascenseur',
        description: 'Système maintenance ascenseurs.',
        shortDescription: 'Ascenseur via WhatsApp',
        features: ['Planning maintenance', 'Pannes', 'Urgence 24/7', 'Rapports'],
        benefits: ['Sécurité', 'Disponibilité', 'Documentation'],
        useCases: ['Ascensoristes', 'Syndics', 'Entreprises'],
        timeframe: '3 mois',
        metrics: ['Disponibilité', 'Temps réaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Urgence?', answer: 'Technicien en 30-60 min.' }]
    },

    // ==================== SÉCURITÉ INCENDIE ====================

    'fire-safety-service': {
        title: 'Sécurité Incendie',
        description: 'Système maintenance sécurité incendie.',
        shortDescription: 'Incendie via WhatsApp',
        features: ['Contrôles', 'Extincteurs', 'Formations', 'Certificats'],
        benefits: ['Sécurité', 'Conformité', 'Documentation'],
        useCases: ['Sécurité incendie', 'Entreprises', 'Syndics'],
        timeframe: '2 mois',
        metrics: ['Contrôles', 'Conformité'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Officiel?', answer: 'Oui, selon normes.' }]
    },

    // ==================== ÉQUIPEMENT MÉDICAL ====================

    'medical-equipment-rental': {
        title: 'Location Équipement Médical',
        description: 'Système location matériel médical.',
        shortDescription: 'Matériel médical via WhatsApp',
        features: ['Catalogue', 'Livraison', 'Formation', 'Récupération'],
        benefits: ['Dispo rapide', 'Professionnel', 'Flexible'],
        useCases: ['Matériel médical', 'Hôpitaux', 'Aide domicile'],
        timeframe: '2 mois',
        metrics: ['Locations', 'Satisfaction'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Formation?', answer: 'Oui, incluse.' }]
    },

    'home-nursing': {
        title: 'Soins Infirmiers Domicile',
        description: 'Système réservation soins domicile.',
        shortDescription: 'Infirmier via WhatsApp',
        features: ['Services', 'RDV', 'Choix soignant', 'Rapports'],
        benefits: ['Soins à domicile', 'Qualité', 'Flexibilité'],
        useCases: ['Infirmiers', 'Hôpitaux', 'Familles'],
        timeframe: '3 mois',
        metrics: ['Heures soins', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Mutuelle?', answer: 'Oui, prise en charge possible.' }]
    },

    'lab-test-booking': {
        title: 'Prélèvement Domicile',
        description: 'Système réservation analyses à domicile.',
        shortDescription: 'Analyse domicile via WhatsApp',
        features: ['RDV', 'Choix analyses', 'Passage domicile', 'Résultats'],
        benefits: ['Pratique', 'Résultats rapides', 'Professionnel'],
        useCases: ['Labos', 'Médecins', 'Hôpitaux'],
        timeframe: '2 mois',
        metrics: ['Prélèvements', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Résultats?', answer: 'En 24-48h par WhatsApp.' }]
    },

    'physio-booking': {
        title: 'Kinésithérapie',
        description: 'Système réservation kiné.',
        shortDescription: 'Kiné via WhatsApp',
        features: ['RDV', 'Choix praticien', 'Type soin', 'Domicile'],
        benefits: ['RDV facile', 'Choix praticien', 'À domicile'],
        useCases: ['Kinés', 'Cabinets', 'Cliniques'],
        timeframe: '2 mois',
        metrics: ['RDV', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'À domicile?', answer: 'Oui, disponible.' }]
    },

    'nutrition-consultation': {
        title: 'Consultation Nutrition',
        description: 'Système réservation nutritionniste.',
        shortDescription: 'Nutrition via WhatsApp',
        features: ['RDV', 'Questionnaire', 'Plan alimentaire', 'Suivi'],
        benefits: ['Plan personnalisé', 'Professionnel', 'Résultats'],
        useCases: ['Nutritionnistes', 'Cabinets', 'Gyms'],
        timeframe: '2 mois',
        metrics: ['Consultations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'En ligne?', answer: 'Oui, par vidéo.' }]
    },

    'therapy-booking': {
        title: 'Psychothérapie',
        description: 'Système réservation psychologue.',
        shortDescription: 'Psy via WhatsApp',
        features: ['Première séance', 'RDV', 'Choix thérapeute', 'Vidéo'],
        benefits: ['Confidentiel', 'Flexible', 'Professionnel'],
        useCases: ['Psychologues', 'Cabinets', 'Cliniques'],
        timeframe: '3 mois',
        metrics: ['Séances', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Confidentiel?', answer: 'Absolument, strictement confidentiel.' }]
    },

    'speech-therapy': {
        title: 'Orthophonie',
        description: 'Système réservation orthophoniste.',
        shortDescription: 'Orthophoniste via WhatsApp',
        features: ['Bilan', 'RDV', 'Plan traitement', 'Suivi'],
        benefits: ['Spécialisé', 'Personnalisé', 'Progression'],
        useCases: ['Orthophonistes', 'Cabinets', 'Cliniques'],
        timeframe: '2 mois',
        metrics: ['Séances', 'Progression'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Enfants et adultes?', answer: 'Oui, tous âges.' }]
    },

    'occupational-therapy': {
        title: 'Ergothérapie',
        description: 'Système réservation ergothérapeute.',
        shortDescription: 'Ergothérapie via WhatsApp',
        features: ['Premier RDV', 'Plan traitement', 'Domicile'],
        benefits: ['Autonomie', 'Personnalisé', 'À domicile'],
        useCases: ['Ergothérapeutes', 'Cabinets', 'Cliniques'],
        timeframe: '2 mois',
        metrics: ['Séances', 'Progression'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Pour qui?', answer: 'Enfants, adultes, seniors.' }]
    },

    'blood-donation': {
        title: 'Don du Sang',
        description: 'Système gestion dons du sang.',
        shortDescription: 'Don sang via WhatsApp',
        features: ['Trouver collecte', 'Inscription', 'Rappels', 'Carte donneur'],
        benefits: ['Sauver des vies', 'Simple', 'Rappels'],
        useCases: ['Centres transfusion', 'Hôpitaux', 'Associations'],
        timeframe: '2 mois',
        metrics: ['Dons', 'Fidélisation'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Fréquence?', answer: 'Tous les 8-12 semaines.' }]
    },

    'emergency-broadcast': {
        title: 'Alerte Urgence',
        description: 'Système d\'alertes urgentes.',
        shortDescription: 'Alertes urgence via WhatsApp',
        features: ['Envoi masse', 'Géolocalisation', 'Priorité', 'Confirmation'],
        benefits: ['Rapide', 'Fiable', 'Vies sauvées'],
        useCases: ['Autorités', 'Entreprises', 'Écoles'],
        timeframe: '3 mois',
        metrics: ['Portée', 'Temps réponse'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Confirmation?', answer: 'Oui, accusé réception.' }]
    },

    'neighborhood-watch': {
        title: 'Voisins Vigilants',
        description: 'Système communication quartier.',
        shortDescription: 'Quartier via WhatsApp',
        features: ['Signalements', 'Alertes', 'Coordination', 'Updates'],
        benefits: ['Quartier sûr', 'Communauté', 'Info rapide'],
        useCases: ['Quartiers', 'Résidences', 'Communes'],
        timeframe: '2 mois',
        metrics: ['Signalements', 'Engagement'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Anonyme?', answer: 'Oui, optionnel.' }]
    },

    'community-events': {
        title: 'Événements Locaux',
        description: 'Système événements locaux.',
        shortDescription: 'Events locaux via WhatsApp',
        features: ['Calendrier', 'Inscriptions', 'Rappels', 'Participants'],
        benefits: ['Communauté', 'Information', 'Participation'],
        useCases: ['Communes', 'Associations', 'Résidences'],
        timeframe: '2 mois',
        metrics: ['Événements', 'Participants'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Gratuit?', answer: 'Oui, base gratuite.' }]
    },

    'volunteer-coordination': {
        title: 'Coordination Bénévoles',
        description: 'Système coordination bénévolat.',
        shortDescription: 'Bénévoles via WhatsApp',
        features: ['Inscription', 'Planning', 'Suivi heures', 'Attestations'],
        benefits: ['Organisation', 'Reconnaissance', 'Documentation'],
        useCases: ['ONG', 'Événements', 'Communes'],
        timeframe: '2 mois',
        metrics: ['Bénévoles', 'Heures'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Attestations?', answer: 'Oui, pour justificatifs.' }]
    },

    'lost-found-platform': {
        title: 'Objets Trouvés',
        description: 'Système objets perdus/trouvés.',
        shortDescription: 'Objets trouvés via WhatsApp',
        features: ['Signalement perte', 'Signalement trouvé', 'Matching', 'Notification'],
        benefits: ['Retrouver objets', 'Simple', 'Communauté'],
        useCases: ['Villes', 'Entreprises', 'Lieux publics'],
        timeframe: '2 mois',
        metrics: ['Matches', 'Restitutions'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Gratuit?', answer: 'Oui, service citoyen.' }]
    },

    // ==================== CRYPTO & FINANCE ====================

    'crypto-trading-signals': {
        title: 'Signaux Crypto',
        description: 'Système signaux cryptomonnaies.',
        shortDescription: 'Signaux crypto via WhatsApp',
        features: ['Signaux', 'Analyse marché', 'Alertes', 'Formation'],
        benefits: ['Meilleures décisions', 'Temps réel', 'Analyse expert'],
        useCases: ['Traders', 'Plateformes', 'Formateurs'],
        timeframe: '3 mois',
        metrics: ['Signaux', 'Taux réussite'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Risques?', answer: 'Éducatif, pas conseil investissement.' }]
    },

    'forex-alerts': {
        title: 'Alertes Forex',
        description: 'Système alertes devises.',
        shortDescription: 'Forex via WhatsApp',
        features: ['Mouvements', 'Calendrier éco', 'Analyse', 'Signaux'],
        benefits: ['Réaction rapide', 'Informé', 'Meilleurs trades'],
        useCases: ['Traders forex', 'Courtiers', 'Formateurs'],
        timeframe: '3 mois',
        metrics: ['Alertes', 'Précision'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Quelles paires?', answer: 'Toutes majeures.' }]
    },

    // ==================== AVENTURE ====================

    'adventure-tour-booking': {
        title: 'Tourisme Aventure',
        description: 'Système réservation aventures.',
        shortDescription: 'Aventure via WhatsApp',
        features: ['Types tours', 'Niveaux', 'Réservation', 'Équipement'],
        benefits: ['Expériences uniques', 'Sécurité', 'Guides experts'],
        useCases: ['Tour opérateurs', 'Agences', 'Guides'],
        timeframe: '3 mois',
        metrics: ['Réservations', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Expérience requise?', answer: 'Tous niveaux disponibles.' }]
    },

    'hiking-tour-booking': {
        title: 'Randonnées',
        description: 'Système réservation randonnées.',
        shortDescription: 'Rando via WhatsApp',
        features: ['Itinéraires', 'Difficulté', 'Groupes', 'Privé'],
        benefits: ['Nature', 'Sécurité', 'Guides expérimentés'],
        useCases: ['Guides', 'Offices tourisme', 'Hôtels'],
        timeframe: '2 mois',
        metrics: ['Randos', 'Participants'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Équipement?', answer: 'Liste fournie.' }]
    },

    // ==================== PÈLERINAGE ====================

    'pilgrimage-booking': {
        title: 'Pèlerinage',
        description: 'Système réservation pèlerinages.',
        shortDescription: 'Pèlerinage via WhatsApp',
        features: ['Destinations', 'Groupe', 'Visa', 'Guide'],
        benefits: ['Expérience spirituelle', 'Accompagnement', 'Communauté'],
        useCases: ['Agences', 'Paroisses', 'Mosquées'],
        timeframe: '3 mois',
        metrics: ['Réservations', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Visa?', answer: 'Oui, assistance incluse.' }]
    },

    // ==================== AUTOMOBILE ====================

    'car-sales-lead': {
        title: 'Vente Auto',
        description: 'Système leads vente automobile.',
        shortDescription: 'Acheter auto via WhatsApp',
        features: ['Recherche véhicule', 'Essai', 'Financement', 'Reprise'],
        benefits: ['Achat facile', 'Toutes infos', 'Conseil perso'],
        useCases: ['Concessionnaires', 'Vendeurs', 'Courtiers'],
        timeframe: '3 mois',
        metrics: ['Leads', 'Ventes'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Financement?', answer: 'Oui, via partenaires.' }]
    },

    'car-service-reminder': {
        title: 'Rappels Entretien Auto',
        description: 'Système rappels service auto.',
        shortDescription: 'Rappels auto via WhatsApp',
        features: ['Rappels entretien', 'CT', 'Usure', 'RDV'],
        benefits: ['Auto en forme', 'Pas d\'oubli', 'Réservation facile'],
        useCases: ['Garages', 'Concessionnaires', 'Flottes'],
        timeframe: '2 mois',
        metrics: ['Rappels', 'RDV'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Automatique?', answer: 'Oui, selon km/temps.' }]
    },

    'carwash-booking': {
        title: 'Lavage Auto',
        description: 'Système réservation lavage.',
        shortDescription: 'Lavage via WhatsApp',
        features: ['Services', 'RDV', 'Mobile', 'Abo'],
        benefits: ['Auto propre', 'Pratique', 'Flexibilité'],
        useCases: ['Lavages', 'Mobiles', 'Stations'],
        timeframe: '2 mois',
        metrics: ['RDV', 'Clients réguliers'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Mobile?', answer: 'Oui, on vient à vous.' }]
    },

    // ==================== TATOUAGE ====================

    'tattoo-booking': {
        title: 'RDV Tatouage',
        description: 'Système réservation tatouage.',
        shortDescription: 'Tattoo via WhatsApp',
        features: ['Artiste', 'Design', 'Consultation', 'RDV'],
        benefits: ['Tattoo rêvé', 'Conseil pro', 'Réservation facile'],
        useCases: ['Studios tattoo', 'Artistes', 'Piercers'],
        timeframe: '2 mois',
        metrics: ['RDV', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Devis?', answer: 'Oui, après consultation design.' }]
    },

    // ==================== DERNIÈRE LIGNE ====================

    'lastmile-delivery': {
        title: 'Livraison Dernier Km',
        description: 'Système livraison urbaine.',
        shortDescription: 'Livraison ville via WhatsApp',
        features: ['Réservation', 'Suivi', 'Preuve livraison', 'Notifs'],
        benefits: ['Rapide', 'Fiable', 'Transparent'],
        useCases: ['E-commerce', 'Commerces locaux', 'Restaurants'],
        timeframe: '3 mois',
        metrics: ['Livraisons', 'Délai'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Délai?', answer: 'En quelques heures.' }]
    },

    'warehouse-management': {
        title: 'Gestion Entrepôt',
        description: 'Système gestion stocks.',
        shortDescription: 'Entrepôt via WhatsApp',
        features: ['État stocks', 'Entrées/Sorties', 'Alertes', 'Rapports'],
        benefits: ['Visibilité', 'Réaction rapide', 'Moins erreurs'],
        useCases: ['Entrepôts', 'E-commerce', 'Production'],
        timeframe: '3 mois',
        metrics: ['Transactions', 'Précision'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Intégration?', answer: 'Avec ERP courants.' }]
    },

    // ==================== CONCERTS ====================

    'concert-ticket-sales': {
        title: 'Billetterie Concerts',
        description: 'Système vente billets.',
        shortDescription: 'Billets concerts via WhatsApp',
        features: ['Événements', 'Places', 'Achat', 'E-billet'],
        benefits: ['Achat facile', 'Tous events', 'Billets immédiats'],
        useCases: ['Organisateurs', 'Salles', 'Billetteries'],
        timeframe: '3 mois',
        metrics: ['Ventes', 'Conversion'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'E-billet?', answer: 'Oui, via WhatsApp.' }]
    },

    'concert-fan-updates': {
        title: 'Updates Fans',
        description: 'Système communication artistes.',
        shortDescription: 'News artiste via WhatsApp',
        features: ['Dates tournée', 'Exclusivités', 'Préventes', 'Meet & Greet'],
        benefits: ['Premières infos', 'Accès exclusif', 'Communauté'],
        useCases: ['Artistes', 'Labels', 'Managements'],
        timeframe: '2 mois',
        metrics: ['Abonnés', 'Engagement'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Exclusif?', answer: 'Oui, abonnés seulement.' }]
    },

    // ==================== NATATION ====================

    'swimming-class': {
        title: 'Cours Natation',
        description: 'Système réservation cours natation.',
        shortDescription: 'Natation via WhatsApp',
        features: ['Cours', 'Niveau', 'Réservation', 'Progression'],
        benefits: ['Apprendre nager', 'Tous niveaux', 'Profs qualifiés'],
        useCases: ['Piscines', 'Écoles', 'Clubs'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Diplômés'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Âge?', answer: 'Dès 3 ans jusqu\'à adultes.' }]
    },

    'pool-membership': {
        title: 'Abonnement Piscine',
        description: 'Système abonnement piscine.',
        shortDescription: 'Abo piscine via WhatsApp',
        features: ['Types abos', 'Inscription', 'Renouvellement', 'Carte digitale'],
        benefits: ['Nager régulier', 'Économies', 'Pratique'],
        useCases: ['Piscines', 'Gyms', 'Clubs'],
        timeframe: '2 mois',
        metrics: ['Abonnés', 'Rétention'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Résiliation?', answer: 'Possible mensuellement.' }]
    },

    // ==================== GOUVERNEMENT ====================

    'gov-citizen-service': {
        title: 'Services Citoyens',
        description: 'Système services publics.',
        shortDescription: 'Mairie via WhatsApp',
        features: ['Infos', 'RDV', 'Statut documents', 'FAQ'],
        benefits: ['Service rapide', 'Moins attente', 'Pratique'],
        useCases: ['Mairies', 'Préfectures', 'Administrations'],
        timeframe: '3 mois',
        metrics: ['Demandes', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Sécurisé?', answer: 'Oui, crypté.' }]
    },

    'gov-document-status': {
        title: 'Statut Documents',
        description: 'Système suivi documents.',
        shortDescription: 'Documents via WhatsApp',
        features: ['Statut', 'Rappels', 'Prêt retrait', 'Renouvellement'],
        benefits: ['Toujours informé', 'Pas de surprise', 'Gain temps'],
        useCases: ['Préfectures', 'Consulats', 'Mairies'],
        timeframe: '2 mois',
        metrics: ['Consultations', 'Satisfaction'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Quels docs?', answer: 'Passeport, carte ID, permis, etc.' }]
    },

    // ==================== MÉDIAS ====================

    'media-news-subscription': {
        title: 'Abonnement Actualités',
        description: 'Système abonnement news.',
        shortDescription: 'News via WhatsApp',
        features: ['Thèmes', 'Breaking news', 'Résumés', 'Complet'],
        benefits: ['Rester informé', 'Personnalisé', 'Updates rapides'],
        useCases: ['Médias', 'Agences presse', 'Blogs'],
        timeframe: '2 mois',
        metrics: ['Abonnés', 'Taux ouv'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Fréquence?', answer: 'Quotidienne ou breaking.' }]
    },

    'media-podcast-updates': {
        title: 'Updates Podcast',
        description: 'Système notifications podcast.',
        shortDescription: 'Podcast via WhatsApp',
        features: ['Nouv épisodes', 'Aperçu', 'Liens', 'Exclusivités'],
        benefits: ['Ne rien rater', 'Exclusif', 'Liens directs'],
        useCases: ['Podcasteurs', 'Réseaux', 'Éditeurs'],
        timeframe: '1 mois',
        metrics: ['Abonnés', 'Clics'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Plateformes?', answer: 'Liens vers toutes.' }]
    },

    // ==================== PHARMACIE ====================

    'pharmacy-refill': {
        title: 'Renouvellement Ordonnance',
        description: 'Système renouvellement médicaments.',
        shortDescription: 'Pharmacie via WhatsApp',
        features: ['Liste médicaments', 'Renouvellement', 'Disponibilité', 'Retrait'],
        benefits: ['Jamais sans médicaments', 'Simple', 'Rapide'],
        useCases: ['Pharmacies', 'E-pharmacies', 'Aide domicile'],
        timeframe: '2 mois',
        metrics: ['Renouvellements', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Ordonnance?', answer: 'Doit être valide.' }]
    },

    'pharmacy-medication-reminder': {
        title: 'Rappels Médicaments',
        description: 'Système rappels prise médicaments.',
        shortDescription: 'Rappels médics via WhatsApp',
        features: ['Horaires', 'Rappels', 'Renouvellement', 'Interactions'],
        benefits: ['Prise régulière', 'Santé', 'Pas d\'oubli'],
        useCases: ['Pharmacies', 'Aide domicile', 'Patients'],
        timeframe: '2 mois',
        metrics: ['Rappels', 'Observance'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Plusieurs médicaments?', answer: 'Oui, illimité.' }]
    },

    // ==================== ÉNERGIE ====================

    'energy-bill-inquiry': {
        title: 'Facture Énergie',
        description: 'Système consultation factures.',
        shortDescription: 'Facture élec via WhatsApp',
        features: ['Voir facture', 'Conso', 'Paiement', 'Comparaison'],
        benefits: ['Vue d\'ensemble', 'Paiement facile', 'Économies'],
        useCases: ['Fournisseurs', 'Distributeurs', 'Comparateurs'],
        timeframe: '2 mois',
        metrics: ['Consultations', 'Self-service'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Paiement en ligne?', answer: 'Oui, lien direct.' }]
    },

    'energy-outage-alerts': {
        title: 'Alertes Coupure',
        description: 'Système alertes coupures.',
        shortDescription: 'Coupures via WhatsApp',
        features: ['Signalements', 'Mises à jour', 'Délai', 'Zones'],
        benefits: ['Rester informé', 'Planifier', 'Moins frustration'],
        useCases: ['Fournisseurs', 'Distributeurs', 'Réseaux'],
        timeframe: '2 mois',
        metrics: ['Alertes', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Automatique?', answer: 'Oui, si coupure zone.' }]
    },

    'smart-home-energy': {
        title: 'Maison Connectée Énergie',
        description: 'Système contrôle domotique.',
        shortDescription: 'Domotique via WhatsApp',
        features: ['État appareils', 'On/Off', 'Conso', 'Scénarios'],
        benefits: ['Économies', 'Contrôle', 'Pratique'],
        useCases: ['Domotique', 'Fournisseurs', 'Utilisateurs'],
        timeframe: '3 mois',
        metrics: ['Utilisateurs', 'Économies'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Appareils?', answer: 'Tous appareils connectés.' }]
    },

    // ==================== ASSURANCE ====================

    'insurance-claims-status': {
        title: 'Statut Sinistre',
        description: 'Système suivi sinistres.',
        shortDescription: 'Sinistre via WhatsApp',
        features: ['Statut', 'Upload docs', 'Mises à jour', 'Chat'],
        benefits: ['Toujours informé', 'Communication facile', 'Plus rapide'],
        useCases: ['Assurances', 'Courtiers', 'Clients'],
        timeframe: '2 mois',
        metrics: ['Consultations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Documents?', answer: 'Oui, photos et PDFs.' }]
    },

    'insurance-policy-inquiry': {
        title: 'Info Contrat',
        description: 'Système infos contrats.',
        shortDescription: 'Contrat via WhatsApp',
        features: ['Couverture', 'Prime', 'Échéance', 'Modifications'],
        benefits: ['Vue d\'ensemble', 'Réponses rapides', 'Self-service'],
        useCases: ['Assurances', 'Courtiers', 'Comparateurs'],
        timeframe: '2 mois',
        metrics: ['Consultations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Modifications?', answer: 'Oui, via WhatsApp.' }]
    },

    'insurance-quote-request': {
        title: 'Devis Assurance',
        description: 'Système demande devis.',
        shortDescription: 'Devis assurance via WhatsApp',
        features: ['Questionnaire', 'Devis instant', 'Comparaison', 'Souscription'],
        benefits: ['Devis rapide', 'Comparaison', 'Souscription facile'],
        useCases: ['Assurances', 'Courtiers', 'Comparateurs'],
        timeframe: '3 mois',
        metrics: ['Devis', 'Souscriptions'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Engageant?', answer: 'Non, devis sans engagement.' }]
    },

    // ==================== VIN ====================

    'wine-subscription': {
        title: 'Abonnement Vin',
        description: 'Abonnement livraison vins.',
        shortDescription: 'Abo vins via WhatsApp',
        features: ['Profil goût', 'Livraison mensuelle', 'Notes', 'Gestion'],
        benefits: ['Découvrir vins', 'Économies', 'Pratique'],
        useCases: ['Cavistes', 'Vignerons', 'Clubs'],
        timeframe: '2 mois',
        metrics: ['Abonnés', 'Rétention'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Pause?', answer: 'Oui, quand vous voulez.' }]
    },

    'liquor-store-order': {
        title: 'Commande Boissons',
        description: 'Système commande boissons.',
        shortDescription: 'Boissons via WhatsApp',
        features: ['Catalogue', 'Commande', 'Livraison', 'Packs fête'],
        benefits: ['Grand choix', 'Livraison rapide', 'Pratique'],
        useCases: ['Cavistes', 'Livreurs', 'Organisateurs'],
        timeframe: '2 mois',
        metrics: ['Commandes', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Vérification âge?', answer: 'Oui, à la livraison.' }]
    },

    // ==================== DISTRIBUTEURS AUTO ====================

    'vending-machine-service': {
        title: 'Service Distributeurs',
        description: 'Système gestion distributeurs.',
        shortDescription: 'Distrib via WhatsApp',
        features: ['Alertes niveau', 'Pannes', 'Rapports ventes', 'Maintenance'],
        benefits: ['Moins pannes', 'Remplissage optimal', 'Vue d\'ensemble'],
        useCases: ['Exploitants', 'Gestionnaires', 'Full-service'],
        timeframe: '2 mois',
        metrics: ['Disponibilité', 'Ventes'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Temps réel?', answer: 'Oui, notification immédiate.' }]
    },

    // ==================== RETOUCHES ====================

    'tailor-service': {
        title: 'Retouches Vêtements',
        description: 'Système réservation retouches.',
        shortDescription: 'Retouches via WhatsApp',
        features: ['Services', 'Photos', 'Devis', 'RDV'],
        benefits: ['Coupe parfaite', 'Professionnel', 'Pratique'],
        useCases: ['Tailleurs', 'Pressings', 'Boutiques'],
        timeframe: '2 mois',
        metrics: ['Retouches', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Retrait?', answer: 'Oui, service retrait/livraison.' }]
    },

    'shoe-repair-service': {
        title: 'Cordonnerie',
        description: 'Système réparation chaussures.',
        shortDescription: 'Cordonnier via WhatsApp',
        features: ['Description', 'Photos', 'Devis', 'Prêt'],
        benefits: ['Sauver chaussures', 'Professionnel', 'Économique'],
        useCases: ['Cordonniers', 'Pressings', 'Boutiques'],
        timeframe: '1 mois',
        metrics: ['Réparations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Délai?', answer: '1-7 jours selon travail.' }]
    },

    // ==================== ALERTES URGENCE ====================

    'gov-emergency-alerts': {
        title: 'Alertes Gouvernementales',
        description: 'Système alertes publiques.',
        shortDescription: 'Alertes publiques via WhatsApp',
        features: ['Catastrophes', 'Santé', 'Trafic', 'Updates'],
        benefits: ['Vitales', 'Rapides', 'Fiables'],
        useCases: ['Autorités', 'Protection civile', 'Communes'],
        timeframe: '3 mois',
        metrics: ['Portée', 'Temps réaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Obligatoire?', answer: 'Après inscription, oui.' }]
    },

    // ==================== LOTO ====================

    'lottery-results': {
        title: 'Résultats Loterie',
        description: 'Système résultats loterie.',
        shortDescription: 'Loto via WhatsApp',
        features: ['Tirages', 'Notif gains', 'Alertes jackpot', 'Conseils'],
        benefits: ['Savoir immédiatement', 'Ne rien rater', 'Pratique'],
        useCases: ['Loteries', 'Revendeurs', 'Joueurs'],
        timeframe: '2 mois',
        metrics: ['Abonnés', 'Engagement'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Toutes loteries?', answer: 'Selon opérateur.' }]
    },

    // ==================== RECYCLAGE ====================

    'recycling-pickup': {
        title: 'Collecte Recyclage',
        description: 'Système réservation collecte.',
        shortDescription: 'Recyclage via WhatsApp',
        features: ['RDV collecte', 'Types matériaux', 'Crédit', 'Rapports'],
        benefits: ['Écologie', 'Simple', 'Récompense'],
        useCases: ['Recycleurs', 'Communes', 'Entreprises'],
        timeframe: '2 mois',
        metrics: ['Collectes', 'Volumes'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Rémunération?', answer: 'Oui, certains matériaux.' }]
    },

    'electronics-recycling': {
        title: 'Recyclage Électronique',
        description: 'Système recyclage électronique.',
        shortDescription: 'E-recycling via WhatsApp',
        features: ['Type appareil', 'RDV', 'Effacement données', 'Certificat'],
        benefits: ['Écologique', 'Données sécurisées', 'Pratique'],
        useCases: ['Recycleurs', 'IT', 'Entreprises'],
        timeframe: '2 mois',
        metrics: ['Appareils', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Données?', answer: 'Effacement certifié.' }]
    },

    // ==================== GAZ ====================

    'gas-delivery': {
        title: 'Livraison Gaz',
        description: 'Système livraison bonbonnes gaz.',
        shortDescription: 'Gaz via WhatsApp',
        features: ['Commande', 'Livraison', 'Consigne', 'Abo'],
        benefits: ['Jamais sans gaz', 'Livraison rapide', 'Pratique'],
        useCases: ['Distributeurs', 'Restaurants', 'Particuliers'],
        timeframe: '1 mois',
        metrics: ['Livraisons', 'Clients réguliers'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Consigne?', answer: 'Oui, échange inclus.' }]
    },

    'fuel-delivery': {
        title: 'Livraison Carburant',
        description: 'Système livraison carburant.',
        shortDescription: 'Carburant via WhatsApp',
        features: ['Localisation', 'Type carbu', 'Quantité', 'Livraison'],
        benefits: ['Plus de station', 'Gain temps', 'Pratique'],
        useCases: ['Livreurs', 'Flottes', 'Entreprises'],
        timeframe: '3 mois',
        metrics: ['Livraisons', 'Litres'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Sécurisé?', answer: 'Oui, normes de sécurité.' }]
    },

    // ==================== ARCHITECTURE ====================

    'architecture-consultation': {
        title: 'Consultation Architecture',
        description: 'Système réservation architecte.',
        shortDescription: 'Architecte via WhatsApp',
        features: ['Premier RDV', 'Projet', 'Plans', 'Updates'],
        benefits: ['Planification pro', 'Créativité', 'Transparence'],
        useCases: ['Architectes', 'Maîtres ouvrage', 'Décorateurs'],
        timeframe: '3 mois',
        metrics: ['Consultations', 'Projets'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Premier RDV?', answer: 'Souvent gratuit ou réduit.' }]
    },

    // ==================== MUSIQUE ====================

    'music-lessons-booking': {
        title: 'Cours Musique',
        description: 'Système réservation cours musique.',
        shortDescription: 'Musique via WhatsApp',
        features: ['Instrument', 'Prof', 'RDV', 'Progression'],
        benefits: ['Apprendre instrument', 'Flexibilité', 'Profs qualifiés'],
        useCases: ['Écoles musique', 'Profs', 'Studios'],
        timeframe: '2 mois',
        metrics: ['Cours', 'Progression'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Instruments?', answer: 'Tous instruments courants.' }]
    },

    'music-instrument-rental': {
        title: 'Location Instruments',
        description: 'Système location instruments.',
        shortDescription: 'Louer instrument via WhatsApp',
        features: ['Catalogue', 'Réservation', 'Livraison', 'Achat possible'],
        benefits: ['Tester d\'abord', 'Flexible', 'Qualité'],
        useCases: ['Magasins musique', 'Écoles', 'Orchestres'],
        timeframe: '2 mois',
        metrics: ['Locations', 'Conversion achat'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Achat?', answer: 'Oui, location déduite.' }]
    },

    // ==================== LANGUES ====================

    'language-lesson-booking': {
        title: 'Cours de Langues',
        description: 'Système réservation cours langues.',
        shortDescription: 'Langues via WhatsApp',
        features: ['Langue', 'Prof natif', 'RDV', 'Test niveau'],
        benefits: ['Nouvelle langue', 'Natifs', 'Flexibilité'],
        useCases: ['Écoles langues', 'Profs', 'Plateformes'],
        timeframe: '2 mois',
        metrics: ['Cours', 'Progression niveau'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Quelles langues?', answer: 'Anglais, espagnol, allemand, etc.' }]
    },

    // ==================== FORMATION ENTREPRISE ====================

    'corporate-training': {
        title: 'Formation Entreprise',
        description: 'Système réservation formations.',
        shortDescription: 'Formation via WhatsApp',
        features: ['Catalogue thèmes', 'Dates', 'Participants', 'Certificats'],
        benefits: ['Développement équipes', 'Sur mesure', 'Gestion facile'],
        useCases: ['Formateurs', 'RH', 'Consultants'],
        timeframe: '3 mois',
        metrics: ['Formations', 'Participants'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Sur site ou en ligne?', answer: 'Les deux possibles.' }]
    },

    // ==================== FASHION ====================

    'fashion-personal-styling': {
        title: 'Conseil Style Personnel',
        description: 'Système conseil style en ligne.',
        shortDescription: 'Style via WhatsApp',
        features: ['Profil style', 'Suggestions tenues', 'Liens shopping', 'Conseil'],
        benefits: ['Meilleur style', 'Gain temps', 'Tenues adaptées'],
        useCases: ['Stylistes', 'Boutiques', 'E-commerce'],
        timeframe: '2 mois',
        metrics: ['Clients', 'Achats'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Budget?', answer: 'On respecte votre budget.' }]
    },

    'fashion-size-recommendation': {
        title: 'Conseil Taille',
        description: 'Système recommandation tailles.',
        shortDescription: 'Taille via WhatsApp',
        features: ['Mensurations', 'Comparaison marques', 'Recommandation', 'Feedback'],
        benefits: ['Moins retours', 'Bonne taille', 'Satisfaction client'],
        useCases: ['E-commerce', 'Marques', 'Boutiques'],
        timeframe: '2 mois',
        metrics: ['Recommandations', 'Taux retour'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Comment mesurer?', answer: 'Guide simple envoyé.' }]
    },

    // ==================== ALIMENTATION ====================

    'grocery-weekly-order': {
        title: 'Courses Hebdo',
        description: 'Système commandes régulières.',
        shortDescription: 'Courses via WhatsApp',
        features: ['Liste', 'Commande récurrente', 'Créneau', 'Promos'],
        benefits: ['Ne rien oublier', 'Gain temps', 'Frais'],
        useCases: ['Supermarchés', 'Livreurs', 'Bio'],
        timeframe: '2 mois',
        metrics: ['Commandes', 'Clients réguliers'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Livraison?', answer: 'Jour même ou lendemain.' }]
    },

    'grocery-fresh-deals': {
        title: 'Promos Fraîches',
        description: 'Système offres quotidiennes.',
        shortDescription: 'Promos via WhatsApp',
        features: ['Deals quotidiens', 'Anti-gaspi', 'Achat direct', 'Notifs'],
        benefits: ['Économies', 'Moins gaspillage', 'Produits frais'],
        useCases: ['Supermarchés', 'Boulangers', 'Bouchers'],
        timeframe: '1 mois',
        metrics: ['Ventes', 'Réduction gaspillage'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Quand?', answer: 'Chaque jour à 9h.' }]
    },

    // ==================== IMMOBILIER COMMERCIAL ====================

    'commercial-property-inquiry': {
        title: 'Locaux Commerciaux',
        description: 'Système demande locaux pros.',
        shortDescription: 'Local pro via WhatsApp',
        features: ['Besoins', 'Propositions', 'Visites', 'Négociation'],
        benefits: ['Local adapté', 'Conseil pro', 'Gain temps'],
        useCases: ['Agents commerciaux', 'Bailleurs', 'Entreprises'],
        timeframe: '3 mois',
        metrics: ['Demandes', 'Conclusions'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Commission?', answer: 'Selon bien et région.' }]
    },

    'commercial-lease-management': {
        title: 'Gestion Bail Commercial',
        description: 'Système gestion baux.',
        shortDescription: 'Bail via WhatsApp',
        features: ['Loyers', 'Demandes', 'Maintenance', 'Rapports'],
        benefits: ['Transparent', 'Comm rapide', 'Documentation'],
        useCases: ['Syndics', 'Bailleurs', 'Locataires'],
        timeframe: '2 mois',
        metrics: ['Demandes', 'Satisfaction'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Rappel auto?', answer: 'Oui, avant échéance.' }]
    },

    // ==================== FOOD TRUCKS ====================

    'foodtruck-location-alert': {
        title: 'Localisation Food Truck',
        description: 'Système notifications emplacement.',
        shortDescription: 'Food truck via WhatsApp',
        features: ['Emplacement jour', 'Menu', 'Attente', 'Précommande'],
        benefits: ['Trouver truck préféré', 'Précommander', 'Moins attente'],
        useCases: ['Food trucks', 'Organisateurs', 'Fans'],
        timeframe: '1 mois',
        metrics: ['Abonnés', 'Précommandes'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Réservation?', answer: 'Oui, par précommande.' }]
    },

    'foodtruck-catering': {
        title: 'Traiteur Food Truck',
        description: 'Système réservation food truck.',
        shortDescription: 'Food truck event via WhatsApp',
        features: ['Détails event', 'Menu', 'Devis', 'Réservation'],
        benefits: ['Traiteur original', 'Flexible', 'Populaire'],
        useCases: ['Food trucks', 'Planners', 'Entreprises'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'CA'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Minimum?', answer: 'À partir de 50 pers.' }]
    },

    // ==================== HANDICAP ====================

    'special-needs-services': {
        title: 'Services Handicap',
        description: 'Système services handicap.',
        shortDescription: 'Handicap via WhatsApp',
        features: ['Services', 'RDV', 'Accessibilité', 'Support'],
        benefits: ['Accès services', 'Comm accessible', 'Accompagnement'],
        useCases: ['Associations', 'Administrations', 'Thérapeutes'],
        timeframe: '3 mois',
        metrics: ['Demandes', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Accessible?', answer: 'Oui, totalement.' }]
    },

    // ==================== DON ORGANES ====================

    'organ-donation-awareness': {
        title: 'Sensibilisation Don Organes',
        description: 'Système info don organes.',
        shortDescription: 'Don organes via WhatsApp',
        features: ['Infos', 'Inscription', 'Carte', 'FAQ'],
        benefits: ['Sauver vies', 'Décision éclairée', 'Inscription facile'],
        useCases: ['Agences santé', 'ONG', 'Hôpitaux'],
        timeframe: '2 mois',
        metrics: ['Inscriptions', 'Portée'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Engageant?', answer: 'Inscription volontaire.' }]
    },

    // ==================== FIOUL ====================

    'heating-oil-delivery': {
        title: 'Livraison Fioul',
        description: 'Système commande fioul.',
        shortDescription: 'Fioul via WhatsApp',
        features: ['Demande prix', 'Commande', 'Livraison', 'Surveillance cuve'],
        benefits: ['Meilleurs prix', 'Simple', 'Jamais froid'],
        useCases: ['Distributeurs', 'Particuliers', 'Syndics'],
        timeframe: '2 mois',
        metrics: ['Commandes', 'Litres'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Minimum?', answer: 'À partir de 500L.' }]
    },

    // ==================== CLIMATISATION ====================

    'ac-service-booking': {
        title: 'Service Climatisation',
        description: 'Système réservation clim.',
        shortDescription: 'Clim via WhatsApp',
        features: ['Entretien', 'Réparation', 'Installation', 'RDV'],
        benefits: ['Été frais', 'Efficacité', 'Professionnel'],
        useCases: ['Climaticiens', 'Techniciens', 'Particuliers'],
        timeframe: '2 mois',
        metrics: ['Interventions', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Entretien?', answer: 'Annuel recommandé.' }]
    },

    // ==================== RAMONEUR ====================

    'chimney-sweep-booking': {
        title: 'Ramonage',
        description: 'Système réservation ramoneur.',
        shortDescription: 'Ramoneur via WhatsApp',
        features: ['RDV', 'Inspection', 'Nettoyage', 'Certificat'],
        benefits: ['Conformité', 'Sécurité', 'Réservation facile'],
        useCases: ['Ramoneurs', 'Syndics', 'Propriétaires'],
        timeframe: '1 mois',
        metrics: ['RDV', 'Conformité'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Obligatoire?', answer: 'Oui, légalement.' }]
    },

    // ==================== NOTAIRE ====================

    'notary-appointment': {
        title: 'RDV Notaire',
        description: 'Système réservation notaire.',
        shortDescription: 'Notaire via WhatsApp',
        features: ['RDV', 'Documents requis', 'Préparation', 'Frais'],
        benefits: ['Réservation facile', 'Préparé', 'Frais transparents'],
        useCases: ['Notaires', 'Avocats', 'Agents immobiliers'],
        timeframe: '2 mois',
        metrics: ['RDV', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Documents?', answer: 'Liste envoyée avant RDV.' }]
    },

    // ==================== IMPÔTS ====================

    'tax-document-collection': {
        title: 'Collecte Docs Fiscaux',
        description: 'Système collecte documents impôts.',
        shortDescription: 'Docs impôts via WhatsApp',
        features: ['Liste docs', 'Upload', 'Suivi', 'Rappels'],
        benefits: ['Docs organisés', 'Pas de retard', 'Clôture rapide'],
        useCases: ['Comptables', 'Experts', 'Clients'],
        timeframe: '2 mois',
        metrics: ['Clients', 'Complétude'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Quels docs?', answer: 'Checklist personnalisée.' }]
    },

    // ==================== DÉCORATION ====================

    'interior-design-consultation': {
        title: 'Consultation Décoration',
        description: 'Système conseil décoration.',
        shortDescription: 'Déco via WhatsApp',
        features: ['Conseil style', 'Photos pièces', 'Moodboard', 'Shopping list'],
        benefits: ['Maison rêvée', 'Professionnel', 'Gain temps'],
        useCases: ['Décorateurs', 'Meubles', 'Stylistes'],
        timeframe: '3 mois',
        metrics: ['Consultations', 'Projets'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'À distance?', answer: 'Oui, totalement en ligne.' }]
    },

    // ==================== VÉTÉRINAIRE ====================

    'vet-emergency-line': {
        title: 'Urgence Vétérinaire',
        description: 'Système urgences vétérinaires.',
        shortDescription: 'Urgence véto via WhatsApp',
        features: ['Symptômes', 'Conseil immédiat', 'Clinique proche', 'RDV'],
        benefits: ['Aide rapide', 'Tranquillité', 'Vital'],
        useCases: ['Cliniques véto', 'Vétérinaires', 'Propriétaires'],
        timeframe: '2 mois',
        metrics: ['Urgences', 'Temps réponse'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: '24/7?', answer: 'Oui, jour et nuit.' }]
    },

    'vet-vaccination-reminder': {
        title: 'Rappels Vaccins Animal',
        description: 'Système rappels vaccination.',
        shortDescription: 'Vaccins via WhatsApp',
        features: ['Calendrier', 'Rappels', 'RDV', 'Carnet'],
        benefits: ['Animaux en santé', 'Jamais oublié', 'Simple'],
        useCases: ['Vétérinaires', 'Cliniques', 'Propriétaires'],
        timeframe: '1 mois',
        metrics: ['Rappels', 'Vaccinations'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Quels animaux?', answer: 'Tous animaux de compagnie.' }]
    },

    // ==================== SKI & NEIGE ====================

    'ski-pass-booking': {
        title: 'Réservation Forfait Ski',
        description: 'Système réservation forfaits ski.',
        shortDescription: 'Forfait ski via WhatsApp',
        features: ['Types forfaits', 'Réservation', 'Forfait digital', 'Météo neige'],
        benefits: ['Pas de queue', 'Accès digital', 'Info neige'],
        useCases: ['Stations', 'Agences', 'Hôtels'],
        timeframe: '2 mois',
        metrics: ['Ventes', 'Utilisation digitale'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Validité?', answer: 'Selon type forfait.' }]
    },

    'ski-lesson-booking': {
        title: 'Réservation Cours Ski',
        description: 'Système réservation cours ski.',
        shortDescription: 'Cours ski via WhatsApp',
        features: ['Cours', 'Niveau', 'Réservation', 'Location matériel'],
        benefits: ['Apprendre skier', 'Tous niveaux', 'Moniteurs qualifiés'],
        useCases: ['Écoles ski', 'Stations', 'Hôtels'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Diplômés'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Âge minimum?', answer: 'Dès 3 ans.' }]
    },

    // ==================== GOLF ====================

    'golf-tee-time': {
        title: 'Réservation Départ Golf',
        description: 'Système réservation tee time.',
        shortDescription: 'Golf via WhatsApp',
        features: ['Disponibilité', 'Réservation', 'Partenaires', 'Voiturette'],
        benefits: ['Heure garantie', 'Pratique', 'Flexible'],
        useCases: ['Golfs', 'Resorts', 'Agences'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Occupation'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Visiteurs?', answer: 'Oui, bienvenus.' }]
    },

    'golf-lesson-booking': {
        title: 'Cours de Golf',
        description: 'Système réservation cours golf.',
        shortDescription: 'Cours golf via WhatsApp',
        features: ['Choix pro', 'Réservation', 'Niveau', 'Analyse vidéo'],
        benefits: ['Meilleur jeu', 'Pro', 'Flexible'],
        useCases: ['Pros golf', 'Clubs', 'Écoles'],
        timeframe: '2 mois',
        metrics: ['Cours', 'Amélioration handicap'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Débutants?', answer: 'Oui, tous niveaux.' }]
    },

    // ==================== TENNIS ====================

    'tennis-court-booking': {
        title: 'Réservation Court Tennis',
        description: 'Système réservation courts.',
        shortDescription: 'Tennis via WhatsApp',
        features: ['Disponibilité', 'Choix court', 'Réservation', 'Partenaires'],
        benefits: ['Court garanti', 'Flexibilité', 'Trouver partenaires'],
        useCases: ['Clubs tennis', 'Centres sportifs', 'Hôtels'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Occupation'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Couvert?', answer: 'Oui, intérieur et extérieur.' }]
    },

    // ==================== BOWLING ====================

    'bowling-lane-booking': {
        title: 'Réservation Piste Bowling',
        description: 'Système réservation bowling.',
        shortDescription: 'Bowling via WhatsApp',
        features: ['Disponibilité', 'Réservation piste', 'Chaussures', 'Packs fête'],
        benefits: ['Piste garantie', 'Rapide', 'Fun fête'],
        useCases: ['Bowlings', 'Centres loisirs', 'Événements'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'CA fêtes'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Anniversaires?', answer: 'Oui, packs spéciaux.' }]
    },

    // ==================== ESCAPE ROOM ====================

    'escape-room-booking': {
        title: 'Réservation Escape Game',
        description: 'Système réservation escape game.',
        shortDescription: 'Escape game via WhatsApp',
        features: ['Choix salle', 'Difficulté', 'Réservation', 'Équipe'],
        benefits: ['Adrénaline', 'Team building', 'Flexibilité'],
        useCases: ['Escape games', 'Loisirs', 'Team building'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Taux évasion'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Taille équipe?', answer: '2-8 selon salle.' }]
    },

    // ==================== LASER GAME ====================

    'lasertag-booking': {
        title: 'Réservation Laser Game',
        description: 'Système réservation laser game.',
        shortDescription: 'Laser via WhatsApp',
        features: ['Session', 'Taille groupe', 'Réservation', 'Packs fête'],
        benefits: ['Action', 'Fun groupe', 'Fêtes'],
        useCases: ['Laser games', 'Centres loisirs', 'Événements'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'CA groupes'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Âge minimum?', answer: 'Dès 8 ans.' }]
    },

    // ==================== TRAMPOLINE ====================

    'trampoline-park-booking': {
        title: 'Réservation Trampoline',
        description: 'Système réservation parc trampoline.',
        shortDescription: 'Trampoline via WhatsApp',
        features: ['Créneau', 'Groupe', 'Chaussettes', 'Packs fête'],
        benefits: ['Place garantie', 'Fun pour tous', 'Service fêtes'],
        useCases: ['Parcs trampoline', 'Loisirs', 'Événements'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'CA groupes'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Chaussettes?', answer: 'Spéciales antidérapantes incluses.' }]
    },

    // ==================== KARTING ====================

    'go-kart-booking': {
        title: 'Réservation Karting',
        description: 'Système réservation karting.',
        shortDescription: 'Karting via WhatsApp',
        features: ['Session', 'Réservation', 'Classements', 'Events'],
        benefits: ['Piste garantie', 'Adrénaline', 'Events équipe'],
        useCases: ['Kartings', 'Loisirs', 'Team building'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'CA events'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Âge minimum?', answer: 'Selon catégorie kart.' }]
    },

    // ==================== LANCER DE HACHE ====================

    'axe-throwing-booking': {
        title: 'Réservation Lancer Hache',
        description: 'Système réservation axe throwing.',
        shortDescription: 'Hache via WhatsApp',
        features: ['Session', 'Groupe', 'Réservation', 'Coaching'],
        benefits: ['Expérience unique', 'Team building', 'Fun'],
        useCases: ['Arènes hache', 'Événements', 'Bars'],
        timeframe: '1 mois',
        metrics: ['Réservations', 'CA groupes'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Sécurisé?', answer: 'Oui, formation et supervision.' }]
    },

    // ==================== MINIGOLF ====================

    'minigolf-booking': {
        title: 'Réservation Minigolf',
        description: 'Système réservation minigolf.',
        shortDescription: 'Minigolf via WhatsApp',
        features: ['Disponibilité', 'Réservation', 'Tarifs groupe', 'Events'],
        benefits: ['Place garantie', 'Fun famille', 'Service fêtes'],
        useCases: ['Minigolfs', 'Parcs loisirs', 'Resorts'],
        timeframe: '1 mois',
        metrics: ['Réservations', 'CA familles'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Réservation nécessaire?', answer: 'Conseillée le weekend.' }]
    },

    // ==================== CONSULTING ====================

    'consulting-booking': {
        title: 'Réservation Consultation',
        description: 'Système réservation conseil.',
        shortDescription: 'Consulting via WhatsApp',
        features: ['Domaine', 'Expert', 'RDV', 'Suivi'],
        benefits: ['Expertise', 'Flexibilité', 'Suivi projet'],
        useCases: ['Consultants', 'Cabinets', 'Freelances'],
        timeframe: '2 mois',
        metrics: ['RDV', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Première consultation?', answer: 'Souvent gratuite ou réduite.' }]
    },

    // ==================== PHOTO ====================

    'photography-booking': {
        title: 'Réservation Photographe',
        description: 'Système réservation photo.',
        shortDescription: 'Photo via WhatsApp',
        features: ['Type shooting', 'Devis', 'Réservation', 'Galerie'],
        benefits: ['Souvenirs qualité', 'Pro', 'Galerie privée'],
        useCases: ['Photographes', 'Studios', 'Événements'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Délai photos?', answer: '1-2 semaines selon shooting.' }]
    },

    'video-production-booking': {
        title: 'Réservation Vidéaste',
        description: 'Système réservation vidéo.',
        shortDescription: 'Vidéo via WhatsApp',
        features: ['Type projet', 'Devis', 'Planning', 'Livrables'],
        benefits: ['Qualité pro', 'Créativité', 'Documentation'],
        useCases: ['Vidéastes', 'Agences', 'Mariages'],
        timeframe: '3 mois',
        metrics: ['Projets', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Délai montage?', answer: '2-4 semaines selon projet.' }]
    },

    // ==================== SPORTS ====================

    'sports-league-management': {
        title: 'Gestion Ligue Sportive',
        description: 'Système gestion ligues.',
        shortDescription: 'Ligue via WhatsApp',
        features: ['Équipes', 'Calendrier', 'Scores', 'Classements'],
        benefits: ['Organisation', 'Info temps réel', 'Engagement'],
        useCases: ['Ligues', 'Clubs', 'Fédérations'],
        timeframe: '3 mois',
        metrics: ['Équipes', 'Engagement'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Multi-sports?', answer: 'Oui, tous sports.' }]
    },

    'sports-membership': {
        title: 'Gestion Adhésions Sport',
        description: 'Système adhésions club.',
        shortDescription: 'Adhésion via WhatsApp',
        features: ['Inscription', 'Paiement', 'Renouvellement', 'Carte digitale'],
        benefits: ['Simple', 'Rappels auto', 'Carte digitale'],
        useCases: ['Clubs', 'Associations', 'Fédérations'],
        timeframe: '2 mois',
        metrics: ['Membres', 'Rétention'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Paiement échelonné?', answer: 'Oui, mensuel possible.' }]
    },

    'sports-event-registration': {
        title: 'Inscription Événement Sport',
        description: 'Système inscription courses/tournois.',
        shortDescription: 'Event sportif via WhatsApp',
        features: ['Inscription', 'Paiement', 'Numéro dossard', 'Résultats'],
        benefits: ['Inscription facile', 'Confirmation instant', 'Résultats live'],
        useCases: ['Organisateurs', 'Fédérations', 'Clubs'],
        timeframe: '2 mois',
        metrics: ['Inscriptions', 'Participation'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Dossard?', answer: 'Envoyé par WhatsApp.' }]
    },

    // ==================== BIEN-ÊTRE ====================

    'massage-booking': {
        title: 'Réservation Massage',
        description: 'Système réservation massage.',
        shortDescription: 'Massage via WhatsApp',
        features: ['Type massage', 'Thérapeute', 'RDV', 'À domicile'],
        benefits: ['Détente', 'Choix thérapeute', 'À domicile possible'],
        useCases: ['Spas', 'Masseurs', 'Wellness'],
        timeframe: '2 mois',
        metrics: ['RDV', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'À domicile?', answer: 'Oui, disponible.' }]
    },

    'meditation-class': {
        title: 'Cours Méditation',
        description: 'Système réservation méditation.',
        shortDescription: 'Méditation via WhatsApp',
        features: ['Sessions', 'Professeur', 'Présentiel/Online', 'Progression'],
        benefits: ['Bien-être mental', 'Flexibilité', 'Suivi'],
        useCases: ['Centres', 'Professeurs', 'Apps'],
        timeframe: '2 mois',
        metrics: ['Sessions', 'Engagement'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Débutants?', answer: 'Oui, tous niveaux.' }]
    },

    // ==================== MOTO ====================

    'motorcycle-service': {
        title: 'Service Moto',
        description: 'Système réservation entretien moto.',
        shortDescription: 'Moto via WhatsApp',
        features: ['Type service', 'Marque', 'RDV', 'Devis'],
        benefits: ['Moto en forme', 'Spécialisé', 'Transparent'],
        useCases: ['Garages moto', 'Concessionnaires', 'Indépendants'],
        timeframe: '2 mois',
        metrics: ['RDV', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Toutes marques?', answer: 'Oui, ou spécialisé.' }]
    },

    'motorcycle-rental': {
        title: 'Location Moto',
        description: 'Système location motos.',
        shortDescription: 'Louer moto via WhatsApp',
        features: ['Catalogue', 'Réservation', 'Assurance', 'Livraison'],
        benefits: ['Liberté', 'Choix', 'Tout inclus'],
        useCases: ['Loueurs', 'Tourisme', 'Événements'],
        timeframe: '2 mois',
        metrics: ['Locations', 'Satisfaction'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Permis requis?', answer: 'Oui, permis valide obligatoire.' }]
    },

    // ==================== VÉLO ====================

    'bike-rental': {
        title: 'Location Vélo',
        description: 'Système location vélos.',
        shortDescription: 'Vélo via WhatsApp',
        features: ['Types vélos', 'Réservation', 'Durée', 'Livraison'],
        benefits: ['Mobilité', 'Écologique', 'Flexible'],
        useCases: ['Loueurs', 'Villes', 'Tourisme'],
        timeframe: '2 mois',
        metrics: ['Locations', 'Utilisation'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Électrique?', answer: 'Oui, classique et électrique.' }]
    },

    'bike-repair': {
        title: 'Réparation Vélo',
        description: 'Système réparation vélos.',
        shortDescription: 'Réparer vélo via WhatsApp',
        features: ['Description', 'Photos', 'Devis', 'À domicile'],
        benefits: ['Vélo en forme', 'Pratique', 'À domicile'],
        useCases: ['Réparateurs', 'Boutiques', 'Mobiles'],
        timeframe: '2 mois',
        metrics: ['Réparations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'À domicile?', answer: 'Oui, sur demande.' }]
    },

    // ==================== CINÉMA ====================

    'cinema-ticket-booking': {
        title: 'Réservation Cinéma',
        description: 'Système réservation places cinéma.',
        shortDescription: 'Cinéma via WhatsApp',
        features: ['Films', 'Séances', 'Places', 'E-ticket'],
        benefits: ['Places garanties', 'Pas de queue', 'E-ticket'],
        useCases: ['Cinémas', 'Multiplexes', 'Indies'],
        timeframe: '3 mois',
        metrics: ['Réservations', 'Occupation'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'E-ticket?', answer: 'Oui, QR code direct.' }]
    },

    // ==================== THÉÂTRE ====================

    'theater-ticket-booking': {
        title: 'Réservation Théâtre',
        description: 'Système réservation spectacles.',
        shortDescription: 'Théâtre via WhatsApp',
        features: ['Spectacles', 'Dates', 'Places', 'E-billet'],
        benefits: ['Place garantie', 'Choix place', 'E-billet'],
        useCases: ['Théâtres', 'Opéras', 'Salles'],
        timeframe: '3 mois',
        metrics: ['Ventes', 'Occupation'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Échanges?', answer: 'Selon conditions.' }]
    },

    // ==================== MUSÉE ====================

    'museum-ticket-booking': {
        title: 'Réservation Musée',
        description: 'Système réservation entrées musée.',
        shortDescription: 'Musée via WhatsApp',
        features: ['Expositions', 'Créneaux', 'Billets', 'Audio-guide'],
        benefits: ['Entrée garantie', 'Pas de queue', 'Audio-guide inclus'],
        useCases: ['Musées', 'Galeries', 'Monuments'],
        timeframe: '2 mois',
        metrics: ['Ventes', 'Visites'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Audio-guide?', answer: 'Oui, via appli ou sur place.' }]
    },

    // ==================== PARC D'ATTRACTIONS ====================

    'theme-park-booking': {
        title: 'Réservation Parc Attractions',
        description: 'Système réservation parcs.',
        shortDescription: 'Parc via WhatsApp',
        features: ['Billets', 'Dates', 'Pass VIP', 'E-billet'],
        benefits: ['Entrée garantie', 'Moins attente VIP', 'E-billet'],
        useCases: ['Parcs', 'Resorts', 'Voyagistes'],
        timeframe: '3 mois',
        metrics: ['Ventes', 'Visiteurs'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Pass VIP?', answer: 'Oui, coupe-file disponible.' }]
    },

    // ==================== ZOO & AQUARIUM ====================

    'zoo-aquarium-booking': {
        title: 'Réservation Zoo/Aquarium',
        description: 'Système réservation zoos.',
        shortDescription: 'Zoo via WhatsApp',
        features: ['Billets', 'Créneaux', 'Expériences', 'Familles'],
        benefits: ['Entrée garantie', 'Expériences uniques', 'Tarifs familles'],
        useCases: ['Zoos', 'Aquariums', 'Parcs animaliers'],
        timeframe: '2 mois',
        metrics: ['Ventes', 'Visiteurs'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Nourrissage animaux?', answer: 'Oui, expériences disponibles.' }]
    },

    // ==================== CAMPING ====================

    'camping-booking': {
        title: 'Réservation Camping',
        description: 'Système réservation emplacements.',
        shortDescription: 'Camping via WhatsApp',
        features: ['Emplacements', 'Hébergements', 'Dates', 'Services'],
        benefits: ['Emplacement garanti', 'Choix', 'Services inclus'],
        useCases: ['Campings', 'Resorts', 'Plateformes'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Occupation'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Animaux?', answer: 'Selon camping.' }]
    },

    // ==================== GÎTE & LOCATION VACANCES ====================

    'vacation-rental-inquiry': {
        title: 'Demande Location Vacances',
        description: 'Système demande locations saisonnières.',
        shortDescription: 'Location vacances via WhatsApp',
        features: ['Disponibilité', 'Détails', 'Réservation', 'Check-in'],
        benefits: ['Réponse rapide', 'Infos complètes', 'Réservation facile'],
        useCases: ['Propriétaires', 'Agences', 'Conciergeries'],
        timeframe: '2 mois',
        metrics: ['Demandes', 'Conversions'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Ménage?', answer: 'Inclus ou en option.' }]
    },

    // ==================== FERRY ====================

    'ferry-booking': {
        title: 'Réservation Ferry',
        description: 'Système réservation traversées.',
        shortDescription: 'Ferry via WhatsApp',
        features: ['Trajets', 'Horaires', 'Véhicules', 'Cabines'],
        benefits: ['Traversée garantie', 'Choix cabine', 'Véhicule inclus'],
        useCases: ['Compagnies', 'Agences', 'Voyagistes'],
        timeframe: '3 mois',
        metrics: ['Réservations', 'Passagers'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Véhicule requis?', answer: 'Non, passager seul possible.' }]
    },

    // ==================== BUS ====================

    'bus-booking': {
        title: 'Réservation Bus',
        description: 'Système réservation lignes bus.',
        shortDescription: 'Bus via WhatsApp',
        features: ['Lignes', 'Horaires', 'Réservation', 'E-billet'],
        benefits: ['Place garantie', 'Économique', 'E-billet'],
        useCases: ['Compagnies', 'Agences', 'Plateformes'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Passagers'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Bagages?', answer: 'Inclus, soute + cabine.' }]
    },

    // ==================== TRAIN ====================

    'train-booking': {
        title: 'Réservation Train',
        description: 'Système réservation billets train.',
        shortDescription: 'Train via WhatsApp',
        features: ['Trajets', 'Horaires', 'Classes', 'E-billet'],
        benefits: ['Billet garanti', 'Choix place', 'E-billet'],
        useCases: ['Gares', 'Agences', 'Apps'],
        timeframe: '3 mois',
        metrics: ['Réservations', 'Passagers'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Première classe?', answer: 'Oui, toutes classes.' }]
    },

    // ==================== NAVETTE ====================

    'shuttle-booking': {
        title: 'Réservation Navette',
        description: 'Système réservation navettes.',
        shortDescription: 'Navette via WhatsApp',
        features: ['Trajets', 'Horaires', 'Réservation', 'Suivi'],
        benefits: ['Place garantie', 'Régulier', 'Fiable'],
        useCases: ['Compagnies', 'Aéroports', 'Stations'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Ponctualité'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Bagages?', answer: 'Oui, inclus.' }]
    },

    // ==================== PLONGÉE ====================

    'diving-booking': {
        title: 'Réservation Plongée',
        description: 'Système réservation plongées.',
        shortDescription: 'Plongée via WhatsApp',
        features: ['Sites', 'Niveaux', 'Équipement', 'Certification'],
        benefits: ['Explorer fonds', 'Sécurité', 'Certifié'],
        useCases: ['Centres', 'Clubs', 'Resorts'],
        timeframe: '2 mois',
        metrics: ['Plongées', 'Certifications'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Débutants?', answer: 'Oui, baptêmes disponibles.' }]
    },

    // ==================== SURF ====================

    'surf-lesson-booking': {
        title: 'Cours de Surf',
        description: 'Système réservation cours surf.',
        shortDescription: 'Surf via WhatsApp',
        features: ['Cours', 'Niveau', 'Équipement', 'Photos'],
        benefits: ['Rider les vagues', 'Équipement inclus', 'Photos souvenirs'],
        useCases: ['Écoles surf', 'Camps', 'Resorts'],
        timeframe: '2 mois',
        metrics: ['Cours', 'Progression'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Équipement?', answer: 'Oui, planche et combi inclus.' }]
    },

    // ==================== ESCALADE ====================

    'climbing-booking': {
        title: 'Réservation Escalade',
        description: 'Système réservation murs escalade.',
        shortDescription: 'Escalade via WhatsApp',
        features: ['Créneaux', 'Équipement', 'Cours', 'Abos'],
        benefits: ['Mur garanti', 'Sécurité', 'Coaching'],
        useCases: ['Salles escalade', 'Clubs', 'Centres'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Grimpeurs'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Débutants?', answer: 'Oui, cours initiation dispo.' }]
    },

    // ==================== PARACHUTE ====================

    'skydiving-booking': {
        title: 'Réservation Parachute',
        description: 'Système réservation sauts.',
        shortDescription: 'Saut via WhatsApp',
        features: ['Types sauts', 'Dates', 'Vidéo', 'Certificat'],
        benefits: ['Adrénaline max', 'Vidéo souvenir', 'Certifié'],
        useCases: ['Centres parachute', 'Events', 'Cadeaux'],
        timeframe: '2 mois',
        metrics: ['Sauts', 'Satisfaction'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Poids max?', answer: 'Généralement 95-100kg.' }]
    },

    // ==================== ÉQUITATION ====================

    'horse-riding-booking': {
        title: 'Réservation Équitation',
        description: 'Système réservation cours équitation.',
        shortDescription: 'Équitation via WhatsApp',
        features: ['Cours', 'Balades', 'Niveau', 'Chevaux'],
        benefits: ['Connexion nature', 'Tous niveaux', 'Choix cheval'],
        useCases: ['Centres équestres', 'Fermes', 'Resorts'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Cavaliers'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Débutants?', answer: 'Oui, tous niveaux bienvenus.' }]
    },

    // ==================== PARAPENTE ====================

    'paragliding-booking': {
        title: 'Réservation Parapente',
        description: 'Système réservation vols parapente.',
        shortDescription: 'Parapente via WhatsApp',
        features: ['Vols tandem', 'Météo', 'Réservation', 'Vidéo'],
        benefits: ['Vol inoubliable', 'Sécurité', 'Vidéo souvenir'],
        useCases: ['Écoles parapente', 'Guides', 'Tourisme'],
        timeframe: '2 mois',
        metrics: ['Vols', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Météo?', answer: 'Vol sous réserve conditions.' }]
    },

    // ==================== CANOË KAYAK ====================

    'kayak-rental': {
        title: 'Location Kayak/Canoë',
        description: 'Système location kayaks.',
        shortDescription: 'Kayak via WhatsApp',
        features: ['Types', 'Durée', 'Parcours', 'Transport'],
        benefits: ['Aventure eau', 'Parcours variés', 'Équipement complet'],
        useCases: ['Loueurs', 'Bases loisirs', 'Tourisme'],
        timeframe: '2 mois',
        metrics: ['Locations', 'Participants'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Transport retour?', answer: 'Oui, navette incluse.' }]
    },

    // ==================== SPÉLÉO ====================

    'caving-tour-booking': {
        title: 'Visite Spéléo',
        description: 'Système réservation spéléologie.',
        shortDescription: 'Spéléo via WhatsApp',
        features: ['Parcours', 'Difficulté', 'Équipement', 'Guide'],
        benefits: ['Découverte sous terre', 'Sécurité', 'Guide expert'],
        useCases: ['Grottes', 'Guides', 'Tourisme'],
        timeframe: '2 mois',
        metrics: ['Visites', 'Participants'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Claustrophobes?', answer: 'Parcours adaptés disponibles.' }]
    },

    // ==================== VIA FERRATA ====================

    'via-ferrata-booking': {
        title: 'Réservation Via Ferrata',
        description: 'Système réservation via ferrata.',
        shortDescription: 'Via Ferrata via WhatsApp',
        features: ['Parcours', 'Difficulté', 'Équipement', 'Guide'],
        benefits: ['Escalade sécurisée', 'Vues incroyables', 'Guide pro'],
        useCases: ['Guides', 'Stations', 'Tourisme aventure'],
        timeframe: '2 mois',
        metrics: ['Réservations', 'Participants'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Vertige?', answer: 'Déconseillé si vertige sévère.' }]
    },

    // ==================== PÊCHE ====================

    'fishing-trip-booking': {
        title: 'Réservation Pêche',
        description: 'Système réservation sorties pêche.',
        shortDescription: 'Pêche via WhatsApp',
        features: ['Type pêche', 'Bateau/Rive', 'Équipement', 'Guide'],
        benefits: ['Top spots', 'Équipement', 'Guide local'],
        useCases: ['Guides pêche', 'Bateaux', 'Lodges'],
        timeframe: '2 mois',
        metrics: ['Sorties', 'Prises'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Permis?', answer: 'Aide pour obtention.' }]
    },

    // ==================== CHASSE ====================

    'hunting-trip-booking': {
        title: 'Réservation Chasse',
        description: 'Système réservation sorties chasse.',
        shortDescription: 'Chasse via WhatsApp',
        features: ['Type gibier', 'Territoire', 'Permis', 'Guide'],
        benefits: ['Terrains qualité', 'Guide expérimenté', 'Légal'],
        useCases: ['Domaines', 'Guides', 'Clubs'],
        timeframe: '3 mois',
        metrics: ['Sorties', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Permis requis?', answer: 'Oui, assistance dispo.' }]
    },

    // ==================== FINAL - GENERATEUR ====================

    'generator-service': {
        title: 'Service Générateurs',
        description: 'Système maintenance groupes électrogènes.',
        shortDescription: 'Générateur via WhatsApp',
        features: ['Maintenance', 'Dépannage', 'Location', 'Alertes'],
        benefits: ['Énergie garantie', 'Réactivité', 'Documentation'],
        useCases: ['Fournisseurs', 'Entreprises', 'Événements'],
        timeframe: '2 mois',
        metrics: ['Interventions', 'Disponibilité'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Urgence 24/7?', answer: 'Oui, service continu.' }]
    },

    // ==================== FINAL 12 SOLUTIONS ====================

    'curtains-blinds-service': {
        title: 'Service Rideaux/Stores',
        description: 'Système réservation pose stores.',
        shortDescription: 'Stores via WhatsApp',
        features: ['Mesures', 'Choix', 'Pose', 'Devis'],
        benefits: ['Pose pro', 'Choix large', 'Finitions parfaites'],
        useCases: ['Poseurs', 'Décorateurs', 'Magasins'],
        timeframe: '2 mois',
        metrics: ['Poses', 'Satisfaction'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Sur mesure?', answer: 'Oui, mesures incluses.' }]
    },

    'watch-repair-service': {
        title: 'Réparation Montres',
        description: 'Système réparation horlogerie.',
        shortDescription: 'Montres via WhatsApp',
        features: ['Description', 'Photos', 'Devis', 'Délai'],
        benefits: ['Montres sauvées', 'Artisanat', 'Qualité'],
        useCases: ['Horlogers', 'Bijoutiers', 'Collectionneurs'],
        timeframe: '2 mois',
        metrics: ['Réparations', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Marques luxe?', answer: 'Oui, certifiés.' }]
    },

    'religious-service-booking': {
        title: 'Services Religieux',
        description: 'Système réservation cérémonies.',
        shortDescription: 'Cérémonies via WhatsApp',
        features: ['Type cérémonie', 'Date', 'Réservation', 'Préparation'],
        benefits: ['Organisation', 'Accompagnement', 'Sérénité'],
        useCases: ['Paroisses', 'Mosquées', 'Temples'],
        timeframe: '2 mois',
        metrics: ['Cérémonies', 'Satisfaction'],
        deliveryTime: '3-4 semaines',
        faqs: [{ question: 'Quelles cérémonies?', answer: 'Baptême, mariage, funérailles...' }]
    },

    'donation-charity': {
        title: 'Collecte Caritative',
        description: 'Système collecte donations.',
        shortDescription: 'Don via WhatsApp',
        features: ['Formulaire', 'Campagnes', 'Reçu', 'Updates'],
        benefits: ['Dons faciles', 'Transparence', 'Impact visible'],
        useCases: ['ONG', 'Associations', 'Fondations'],
        timeframe: '2 mois',
        metrics: ['Montants', 'Donateurs'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Reçu fiscal?', answer: 'Oui, automatique.' }]
    },

    'safari-tour-booking': {
        title: 'Réservation Safari',
        description: 'Système réservation safaris.',
        shortDescription: 'Safari via WhatsApp',
        features: ['Types safaris', 'Durée', 'Hébergement', 'Guides'],
        benefits: ['Aventure unique', 'Guides experts', 'Souvenirs vie'],
        useCases: ['Opérateurs', 'Lodges', 'Agences'],
        timeframe: '3 mois',
        metrics: ['Réservations', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Meilleure saison?', answer: 'Selon destination.' }]
    },

    'religious-pilgrimage-support': {
        title: 'Support Pèlerinage',
        description: 'Système accompagnement pèlerins.',
        shortDescription: 'Support pèlerin via WhatsApp',
        features: ['Infos parcours', 'Support 24/7', 'Hébergement', 'Urgences'],
        benefits: ['Accompagnement', 'Sérénité', 'Aide continue'],
        useCases: ['Agences', 'Organisations', 'Guides'],
        timeframe: '3 mois',
        metrics: ['Pèlerins', 'Satisfaction'],
        deliveryTime: '4-6 semaines',
        faqs: [{ question: 'Multilingue?', answer: 'Oui, support en plusieurs langues.' }]
    },

    'food-delivery-restaurant': {
        title: 'Livraison Restaurant',
        description: 'Système livraison directe restaurant.',
        shortDescription: 'Livraison via WhatsApp',
        features: ['Menu', 'Commande', 'Suivi', 'Paiement'],
        benefits: ['Sans commission', 'Contact direct', 'Fidélisation'],
        useCases: ['Restaurants', 'Cafés', 'Boulangeries'],
        timeframe: '2 mois',
        metrics: ['Commandes', 'Économies'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Commission?', answer: 'Pas de commission plateforme.' }]
    },

    'mobile-mechanic': {
        title: 'Mécanicien Mobile',
        description: 'Système réparation auto sur place.',
        shortDescription: 'Mécano mobile via WhatsApp',
        features: ['Description panne', 'Localisation', 'Diagnostic', 'Réparation'],
        benefits: ['Chez vous', 'Gain temps', 'Prix transparent'],
        useCases: ['Mécaniciens', 'Flottes', 'Particuliers'],
        timeframe: '2 mois',
        metrics: ['Interventions', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Tout réparer?', answer: 'La plupart des pannes courantes.' }]
    },

    'dry-cleaning-service': {
        title: 'Pressing à Domicile',
        description: 'Système pressing avec retrait.',
        shortDescription: 'Pressing via WhatsApp',
        features: ['Retrait', 'Services', 'Livraison', 'Abo'],
        benefits: ['Pratique', 'Qualité pro', 'Gain temps'],
        useCases: ['Pressings', 'Particuliers', 'Entreprises'],
        timeframe: '2 mois',
        metrics: ['Commandes', 'Clients réguliers'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Délai?', answer: '24-48h standard.' }]
    },

    'laundry-service': {
        title: 'Laverie à Domicile',
        description: 'Système lavage linge à domicile.',
        shortDescription: 'Laverie via WhatsApp',
        features: ['Retrait', 'Lavage', 'Repassage', 'Livraison'],
        benefits: ['Temps libre', 'Qualité', 'Économique'],
        useCases: ['Laveries', 'Particuliers', 'Airbnb'],
        timeframe: '2 mois',
        metrics: ['Kg lavés', 'Satisfaction'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Au kilo?', answer: 'Oui, ou forfait.' }]
    },

    'food-allergy-alerts': {
        title: 'Alertes Allergènes',
        description: 'Système info allergènes restaurant.',
        shortDescription: 'Allergènes via WhatsApp',
        features: ['Menu filtré', 'Allergènes', 'Recommandations', 'Alerte chef'],
        benefits: ['Manger serein', 'Sécurité', 'Personnalisé'],
        useCases: ['Restaurants', 'Hôtels', 'Traiteurs'],
        timeframe: '2 mois',
        metrics: ['Demandes', 'Sécurité'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Quels allergènes?', answer: 'Tous les 14 majeurs et plus.' }]
    },

    'gift-card-service': {
        title: 'Cartes Cadeaux',
        description: 'Système vente cartes cadeaux.',
        shortDescription: 'Carte cadeau via WhatsApp',
        features: ['Montants', 'Personnalisation', 'Envoi digital', 'Utilisation'],
        benefits: ['Cadeau parfait', 'Instantané', 'Personnalisé'],
        useCases: ['Commerces', 'Restaurants', 'Services'],
        timeframe: '2 mois',
        metrics: ['Ventes', 'Utilisation'],
        deliveryTime: '2-3 semaines',
        faqs: [{ question: 'Validité?', answer: 'Généralement 1 an.' }]
    }
}

export default frenchTranslations
