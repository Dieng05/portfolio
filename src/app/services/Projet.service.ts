import { Injectable } from '@angular/core';
import { ProjetModel } from '../models/ProjetModel';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private projets: ProjetModel[] = [
    new ProjetModel(
      1,
      'Application Mobile Intelligence Artificielle',
      'pi pi-desktop',
      'Image Acceuil.jpg',
      'Dans le cadre de mon mémoire de Master 2 MIAGE, j\'ai développé une application mobile intelligente avec Flutter permettant d\'identifier les espèces de plantes et d\'évaluer leurs carences en nutriments à partir d\'images de feuilles. Basée sur le Deep Learning et les réseaux de neurones convolutifs (CNN), l\'application intègre des modèles tels que YoloV5s pour la détection d\'espèces et MobileNetV3 pour la classification des carences, ce dernier offrant le meilleur compromis entre précision et rapidité. Grâce à une interface simple et intuitive, l\'utilisateur peut capturer ou importer une photo de feuille pour obtenir instantanément l\'espèce correspondante et son niveau de carence nutritive, illustrant ainsi l\'application concrète de l\'Intelligence Artificielle dans l\'agriculture intelligente.',
      ['Python', 'FastAPI', 'TensorFlow', 'Keras', 'PyTorch', 'Redis'],
      ['Dart', 'Flutter'],
      [
        {
          url: 'Image Acceuil.jpg',
          titre: 'Page d\'Accueil',
          description: ''
        },
        {
          url: 'Image Menu.jpg',
          titre: 'Le menu de navigation',
          description: ''
        },
        {
          url: 'Image_choix_galerie_photo.jpg',
          titre: 'Page de choix de l\'image à partir la galerie ou par photo',
          description: ''
        },
        {
          url: 'Image choix type carence.jpg',
          titre: 'Page de choix du nutriment à diagnostiquer',
          description: ''
        },
        {
          url: 'Image resultats carence type.jpg',
          titre: 'Page d\'affichage Résultats sur le diagnostic en carence d\'un nutriment',
          description: ''
        },
        {
          url: 'Image ident riz.jpg',
          titre: 'Page affichage Résultats sur l\'identification des cultures',
          description: ''
        },
        {
          url: 'Image ident maiis.jpg',
          titre: '',
          description: ''
        },
        {
          url: 'Image ident carence total.jpg',
          titre: 'Page d\'affichage du diagnostic en tous les nutriments',
          description: ''
        },
        {
          url: 'Image recap macro nutriments.jpg',
          titre: 'Page d\'affichage Documentation des carences en macro-nutriments',
          description: ''
        },
        {
          url: 'Image recap micro nutriment.jpg',
          titre: 'Page d\'affichage Documentation des carences en micro-nutriments',
          description: ''
        }
      ],
      '',
      'https://github.com/Dieng05/D-tection-de-carence-en-nutriments'
    ),
    new ProjetModel(
      2,
      'Gestion Aéroport',
      'pi pi-mobile',
      'gestion aréroport.jpg',
      'Développement d\'un système d\'information complet pour la gestion d\'un aéroport, réalisé en architecture client-serveur moderne. Le backend est construit avec Spring Boot (Kotlin) et une base de données PostgreSQL, tandis que le frontend utilise Angular avec PrimeNG et PrimeFlex pour offrir une interface utilisateur réactive et professionnelle. Le système permet de gérer l\'ensemble des ressources physiques de l\'aéroport (avions, pistes, hangars) ainsi que la planification et le suivi des vols avec leurs différents statuts opérationnels. L\'application offre des fonctionnalités complètes de CRUD pour chaque entité, l\'assignation d\'avions aux hangars et aux vols, le suivi en temps réel des disponibilités des pistes, et un historique détaillé des modifications de statut des vols.',
      ['Spring Boot', 'Kotlin', 'PostgreSQL'],
      ['Angular', 'TypeScript', 'PrimeNG', 'PrimeFlex'],
      [
        {
          url: '1_affichage_liste_avions.jpg',
          titre: 'Affichage de la liste des Avions',
          description: ''
        },
        {
          url: '2_liste_des_avions_dispo.jpg',
          titre: 'Listes des Avions Disponible',
          description: ''
        },
        {
          url: '3_affichage_avions_byId.jpg',
          titre: 'L\'affichage de Avion Par ID',
          description: ''
        },
        {
          url: '4_ajoute_avions.jpg',
          titre: 'Formulaire Ajouter Avion',
          description: ''
        },
        {
          url: '5_modification_avions.jpg',
          titre: 'LanModification d\'un Avion',
          description: ''
        },
        {
          url: '6_suppression_avions.jpg',
          titre: 'La Suppression d\'un Avion',
          description: ''
        },
        {
          url: '7_affichage_de_la_liste_des_hangar.jpg',
          titre: 'Affichage de la liste des Hanguars',
          description: ''
        },
        {
          url: '8_liste_des_avions_par_hanguar.jpg',
          titre: 'Liste des Avions Par Hanguar',
          description: ''
        },
        {
          url: '9_assignation_avions_hanguar.jpg',
          titre: 'Assignation d\'un Avion a un Hanguar',
          description: ''
        },
        {
          url: '11_affichage_des_pistes.jpg',
          titre: 'Affichage de la liste des pistes',
          description: ''
        },
        {
          url: '12_affichage_des_pistes_libres.jpg',
          titre: 'Affichage de la liste pistes libres',
          description: ''
        },
        {
          url: '13_affichage_de_toutes_vols.jpg',
          titre: 'Affichage de la liste de toutes vols',
          description: ''
        },
        {
          url: '14_triage_des_vols_par_etat.jpg',
          titre: 'Triage des vols par etat',
          description: ''
        },
        {
          url: '15_modification_état_vol.jpg',
          titre: 'Modification de l\'état d\'un vol',
          description: ''
        },
        {
          url: '16_Historique_vols.jpg',
          titre: 'Affichage de l\'Historique des vols',
          description: ''
        }
      ],
      '',
      ''
    ),
    new ProjetModel(
      4,
      'Site E-commerce',
      'pi pi-code',
      'pexels-mart-production-7679456.jpg',
      'Développement d\'un site e-commerce moderne en utilisant uniquement les technologies web natives : HTML5, CSS3 et JavaScript. Le site propose une expérience utilisateur fluide pour la vente d\'articles de mode féminine (chaussures, sacs, voiles, abayas). Interface responsive avec système de navigation par catégories, carousel d\'images, fiches produits détaillées avec galerie photos, et panier d\'achat interactif. Design épuré et moderne mettant en valeur les produits avec des animations CSS et une navigation intuitive.',
      ['PHP Natif', 'MySQL'],
      ['HTML', 'CSS', 'JavaScript'],
      [
        {
          url: 'acceuil1.jpg',
          titre: 'Page d\'accueil - Hero Section',
          description: ''
        },
        {
          url: 'acceuil2.jpg',
          titre: 'Navigation et catégories',
          description: ''
        },
        {
          url: 'acceuil3.jpg',
          titre: 'Les nouveaux articles',
          description: ''
        },
        {
          url: 'sacoches.png',
          titre: 'Catalogue sacoches',
          description: ''
        },
        {
          url: 'chaussures.png',
          titre: 'Catalogue chaussures',
          description: ''
        },
        {
          url: 'voiles.png',
          titre: 'Catalogue voiles',
          description: ''
        },
        {
          url: 'details.png',
          titre: 'Détails d\'un article',
          description: ''
        },
        {
          url: 'formulaire.png',
          titre: 'Formulaire d\'inscription',
          description: ''
        }
      ],
      '',
      'https://github.com/Dieng05/site_html_css_javascript_php'
    ),
    new ProjetModel(
      5,
      'Application E-commerce',
      'pi pi-database',
      'https://github.com/Dieng05/projet_ecommerce.git',
      'Développement d\'une application e-commerce complète en architecture client-serveur avec Java Spring Boot pour le backend et PHP pour le frontend. L\'application propose une plateforme de vente en ligne moderne avec un backend robuste développé en Spring Boot assurant la gestion des produits, des utilisateurs, des commandes et une base de données MySQL. Le frontend, réalisé en PHP natif avec HTML5, CSS3 et JavaScript, offre une interface utilisateur intuitive et responsive. L\'application intègre les fonctionnalités essentielles d\'un site e-commerce : catalogue de produits avec système de filtrage, fiches détaillées des articles, panier d\'achat dynamique, gestion des comptes utilisateurs et processus de commande sécurisé. L\'architecture REST entre le backend Spring Boot et le frontend PHP garantit une communication efficace et une séparation claire des responsabilités.',
      ['Java Spring Boot', 'MySQL'],
      ['PHP', 'HTML', 'CSS', 'JavaScript'],
      [],
      '',
      'https://github.com/Dieng05/projet_ecommerce.git'
    ),
    new ProjetModel(
      3,
      'Gestion des inscriptions',
      'pi pi-code',
      'pexels-mart-production-7679456.jpg',
      'Développement d\'un système de gestion des inscriptions étudiantes avec Angular et Laravel - L\'application offre une interface complète pour l\'administration académique avec un système d\'authentification sécurisé. Lors de la connexion, le backend génère un jeton d\'accès qui est automatiquement ajouté à chaque requête via un intercepteur. Cette application web complète permet aux administrateurs de gérer efficacement les inscriptions académiques. Elle comprend un système de connexion sécurisé, une interface intuitive pour la gestion des étudiants (ajout, modification, consultation) et un module d\'inscription aux formations. ',
      ['Laravel PHP', 'MySQL'],
      ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      [
        {
          url: 'acceuil_connexion.png',
          titre: 'Page d\'accueil Page de connexion',
          description: ''
        },
        {
          url: 'create_user.png',
          titre: 'Page de creation de user',
          description: ''
        },
        {
          url: 'liste_etudiant.png',
          titre: 'Page Liste de toutes les étudiants',
          description: ''
        },
        {
          url: 'affichage_etudiant.png',
          titre: 'Overlay d\'affichage d\'un etudiant specifique',
          description: ''
        },
        {
          url: 'ajout_etudiant.png',
          titre: 'Overlay Ajout d\'ajout d\'un étudiant',
          description: ''
        },
        {
          url: 'suppression_etudiant.png',
          titre: 'Overlay de suppression d\'étudiant',
          description: ''
        },
        {
          url: 'modification_etudiant.png',
          titre: 'Overlay de Modification d\'un étudiant',
          description: ''
        },
        {
          url: 'inscription_etudiant.png',
          titre: 'Formulaire d\'inscription étudiant dans une formation',
          description: ''
        },
        {
          url: 'liste_etudiant_inscrit.png',
          titre: 'Page liste des étudiants inscrits',
          description: ''
        }
      ],
      '',
      'https://github.com/Dieng05/Dossier--Laravel-angular.git'
    ),
    new ProjetModel(
      6,
      'Portail web',
      'pi pi-server',
      'portail.jpg',
      '',
      [],
      [],
      [],
      '',
      'Reproduction du portail web des étudiants de l\'UGB'
    )
  ];

  constructor() {}

  getProjets(): ProjetModel[] {
    return this.projets;
  }

  getProjetById(id: number): ProjetModel | undefined {
    return this.projets.find(p => p.idProjet === id);
  }
}
