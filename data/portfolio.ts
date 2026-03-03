export type ProjectCategory = "Technique" | "Web";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  longDescription: string;
  tech: string[];
  githubUrl: string;
  imagePath: string;
  tags: string[];
};

export const portfolio = {
  name: "HIBA Hedil",
  subtitle: "Porfolio",
  email: "hibahedil8@gmail.com",
  phone: "+33 7 67 83 61 87"
} as const;

function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

const baseProjects: Omit<Project, "slug">[] = [
  // Technique
  {
    title: "Application de Facturation – Outil de gestion",
    category: "Technique",
    shortDescription:
      "Application de facturation pour artisans (clients, devis, factures, suivi paiements).",
    longDescription:
      `Développement d’une application de facturation destinée aux artisans afin de faciliter la gestion des clients, la création de devis et l’édition de factures.
      L’application permet d’enregistrer les informations clients, de générer des devis personnalisés, de les convertir en factures et de suivre les paiements.
      Réalisée en Python avec PyQt, cette application intègre une interface graphique intuitive, une organisation structurée du code et une gestion des données adaptée aux besoins professionnels.
      Ce projet met en avant mes compétences en conception d’interfaces, structuration d’une application complète et développement d’outils concrets orientés utilisateur.`,
    tech: ["Python", "PyQt"],
    githubUrl: "https://github.com/dilo22/Facturation",
    imagePath: "/projects/facturation.png",
    tags: ["Python", "PyQt", "GUI", "Outil pro"]
  },
  {
    title: "LA Cata – Jeu de stratégie médiéval",
    category: "Technique",
    shortDescription:
      "Gestion de village, territoire, économie/militaire, impôts.",
    longDescription:
     `Développement d’un jeu de stratégie médiéval permettant au joueur de gérer un village, d’étendre son territoire et d’administrer ses ressources.
Le jeu intègre des mécaniques de gestion économique et militaire : recrutement de soldats, déclaration de guerre, relations entre seigneurs et vassaux, ainsi que contrôle et personnalisation du taux d’imposition selon le statut des paysans.

Réalisé en Python avec Tkinter, ce projet met en avant la gestion de la logique de jeu, la structuration orientée objet, la gestion d’états dynamiques et la conception d’interfaces interactives.
Il démontre ma capacité à concevoir un système cohérent combinant stratégie, simulation et interaction utilisateur.`,
    tech: ["Python", "Tkinter"],
    githubUrl: "https://github.com/dilo22/La-Cata",
    imagePath: "/projects/la-cata.png",
    tags: ["Python", "Tkinter", "OOP", "Game"]
  },
  {
    title: "Robowars – Jeu de stratégie et combat de robots",
    category: "Technique",
    shortDescription:
      "Robots autonomes, tactiques, mines, multijoueur réseau.",
    longDescription:`Développement d’un jeu de guerre stratégique mettant en scène des robots autonomes capables d’adopter différentes tactiques de combat.
Le joueur peut configurer le comportement des robots : détection d’ennemis à proximité, poursuite, attaque à distance ou pose de mines stratégiques.

Le jeu intègre également une fonctionnalité réseau permettant le jeu en ligne, ajoutant une dimension multijoueur et compétitive.

Réalisé en Python avec Tkinter, ce projet met en avant la gestion de logique comportementale (IA simple), la détection d’environnement, la coordination d’actions en temps réel et l’implémentation d’une communication réseau.
Il démontre ma capacité à développer des systèmes interactifs combinant stratégie, programmation orientée objet et gestion d’événements.`,
    tech: ["Python", "Tkinter", "Réseau"],
    githubUrl: "https://github.com/dilo22/robowars",
    imagePath: "/projects/robowars.png",
    tags: ["Python", "Tkinter", "IA simple", "Network"]
  },
  {
    title: "Bateau – Simulation physique en C++",
    category: "Technique",
    shortDescription:
      "Simulation de bateau avec moteur physique, obstacles, CMake, SFML.",
    longDescription:`Développement d’un projet en C++ visant à simuler le mouvement réaliste d’un bateau en mer à l’aide d’un moteur physique.
L’objectif est d’atteindre un point final tout en évitant les obstacles, en tenant compte des contraintes de déplacement et des interactions physiques.

Le projet utilise libPhysics pour la gestion des calculs physiques et SFML pour l’affichage graphique et la gestion des interactions.
Il a également été conçu dans une optique pédagogique afin de maîtriser l’outil CMake, la gestion de dépendances et la structuration d’un projet C++ multi-fichiers.

Ce travail met en avant mes compétences en programmation orientée objet en C++, en simulation physique, en intégration de bibliothèques externes et en organisation d’un projet logiciel professionnel.`,
    tech: ["C++", "libPhysics", "SFML", "CMake"],
    githubUrl: "https://github.com/dilo22/Bateau",
    imagePath: "/projects/bateau.png",
    tags: ["C++", "SFML", "Physics", "CMake"]
  },
  {
    title: "Plus Court Chemin – Géométrie algorithmique",
    category: "Technique",
    shortDescription:
      "JSON bâtiments, enveloppe convexe, subdivision trapézoïdale, graphe, chemin optimal.",
    longDescription:`Développement d’une application en Python avec Tkinter permettant de calculer un plus court chemin entre deux points en évitant des obstacles.

Le programme charge un fichier JSON contenant les bâtiments, calcule leur enveloppe convexe, génère une subdivision trapézoïdale de l’espace libre, puis construit un graphe reliant les zones accessibles.
L’utilisateur sélectionne un point de départ et un point d’arrivée sur la carte, et l’algorithme détermine et affiche le chemin optimal évitant les bâtiments.

Ce projet met en avant mes compétences en algorithmique, en géométrie computationnelle et en structuration d’applications interactives.`,
    tech: ["Python", "Tkinter", "Algo", "Géométrie"],
    githubUrl: "https://github.com/dilo22/Plus-court-chemin",
    imagePath: "/projects/plus-court-chemin.png",
    tags: ["Algorithmique", "Géométrie", "Python", "Tkinter"]
  },
  {
    title: "Dilo (mon AKA)",
    category: "Technique",
    shortDescription:
      "Suite de mini-applications dans une interface unique (calculatrice, convertisseurs, jeux, QR, mdp…).",
    longDescription:`Dilo (mon AKA) est un logiciel développé en Python avec Tkinter, regroupant un ensemble de mini-applications au sein d’une interface unique organisée autour d’un menu principal.

L’application propose plusieurs outils et modules interactifs : calculatrice, convertisseur de devises, jeux, horloge, compteur de pièces, module DJ, espace de dessin, convertisseur MP3, générateur de QR code, générateur de mots de passe, classeur de couleurs, et bien d’autres.

Ce projet met en avant la conception d’une architecture modulaire, la gestion d’interfaces multiples, l’organisation orientée objet ainsi que l’intégration de fonctionnalités variées au sein d’un même environnement logiciel cohérent.`,
    tech: ["Python", "Tkinter"],
    githubUrl: "https://github.com/dilo22/Dilo",
    imagePath: "/projects/dilo.png",
    tags: ["Python", "Tkinter", "Modulaire", "App suite"]
  },
  {
    title: "Raytracing – Moteur de rendu 3D en Python",
    category: "Technique",
    shortDescription:
      "Raytracing récursif, intersections, ombres, Phong, surfaces réfléchissantes.",
    longDescription:`Développement d’un moteur de rendu 3D basé sur le principe du raytracing récursif, réalisé en Python avec les bibliothèques NumPy et PIL.

Le projet consiste à modéliser l’interaction de la lumière avec des objets (sphères, plans…) en simulant la propagation des rayons lumineux : calcul des intersections, gestion des ombres portées, application du modèle d’illumination de Phong (réflexions diffuses et spéculaires), surfaces réfléchissantes et rendu récursif.

L’architecture repose sur une conception orientée objet structurée (vecteurs, couleurs, objets, lumières, caméra, scène), permettant une implémentation modulaire et évolutive du moteur graphique.

Ce projet met en avant mes compétences en mathématiques appliquées (géométrie vectorielle), algorithmique avancée, programmation orientée objet et conception d’un système graphique complet à partir de principes physiques simplifiés.`,
    tech: ["Python", "NumPy", "PIL"],
    githubUrl: "https://github.com/dilo22/Raytracing",
    imagePath: "/projects/raytracing.png",
    tags: ["Raytracing", "Maths", "NumPy", "OOP"]
  },
  {
    title: "En Garde",
    category: "Technique",
    shortDescription:
      "Prototype IHM du jeu En Garde! hot-seat, règles officielles, UI soignée.",
    longDescription:`Développement d’un prototype d’interface pour le jeu En Garde ! (Reiner Knizia) permettant à deux joueurs de s’affronter en “hot seat” selon les règles officielles : déplacements par cartes, attaques/parades, attaques renforcées, charge et gestion du score jusqu’à 5 touches.

Réalisé en Python avec Tkinter et Pillow, le projet met l’accent sur une IHM claire et conviviale : représentation du plateau, des cartes et des pions, gestion des erreurs, suivi des manches, et personnalisation de l’interface (mise en page/visuels) avec conservation des préférences entre deux sessions.

Ce projet valorise mes compétences en conception d’interfaces, programmation orientée objet, modularité et ergonomie (feedback utilisateur, cohérence et robustesse).`,
    tech: ["Python", "Tkinter", "Pillow"],
    githubUrl: "https://github.com/dilo22/En-Garde",
    imagePath: "/projects/en-garde.png",
    tags: ["UI", "OOP", "Tkinter", "Game"]
  },
  {
    title: "Compilateur ALGO → RAM",
    category: "Technique",
    shortDescription: "Analyse lex/syntax/sem, ASA, génération de code RAM.",
    longDescription:`Développement d’un compilateur en C permettant la traduction d’un langage algorithmique (ALGO) vers un langage machine simplifié (RAM), dans le cadre du module de théorie des langages.

Le projet comprend la conception complète du langage : analyse lexicale, analyse syntaxique, analyse sémantique, construction d’un ASA (Arbre Syntaxique Abstrait), génération de code cible en langage RAM.
Ce travail met en avant mes compétences en compilation, grammaires formelles, gestion des structures syntaxiques, analyse sémantique et programmation bas niveau en C.`,
    tech: ["C", "Compilation"],
    githubUrl: "https://github.com/dilo22/Compilateur-ALGO-RAM",
    imagePath: "/projects/compil.png",
    tags: ["C", "Compilation", "Langages", "Parser"]
  },
  {
    title: "Jeux Olympiques 2024",
    category: "Technique",
    shortDescription:
      "Exploite une base JO 2024, filtres pays/médailles/stats + mini-outil aide.",
    longDescription:`Développement d’une application permettant d’exploiter une base de données complète des Jeux Olympiques 2024, incluant les pays participants, les médailles obtenues et l’historique des participations.

L’application propose des tableaux interactifs avec filtrage par pays, consultation des médailles et statistiques associées.
Un mini-logiciel complémentaire, accessible depuis l’interface d’aide, a été conçu pour faciliter la gestion et la manipulation du volume important de données.

Réalisé en Python, ce projet met en avant mes compétences en gestion de bases de données, structuration de données volumineuses, filtrage dynamique et conception d’outils d’analyse.`,
    tech: ["Python", "Data", "DB"],
    githubUrl: "https://github.com/dilo22/Jeux-olympiques",
    imagePath: "/projects/jo.png",
    tags: ["Python", "Data", "Filtrage", "BDD"]
  },

  // Web
  {
    title: "AirFind – Gestion des objets trouvés",
    category: "Web",
    shortDescription:
      "Site pour objets trouvés en aéroport: enregistrer, rechercher, suivre.",
    longDescription:
      "Application web pour objets trouvés en environnement aéroportuaire : enregistrement, recherche, suivi, et gestion des statuts. Approche full-stack classique avec base de données.",
    tech: ["Node.js", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/dilo22/AirFind",
    imagePath: "/projects/airfind.png",
    tags: ["Node.js", "PostgreSQL", "Full-stack", "CRUD"]
  },
  {
    title: "MiouMarket – Site e-commerce spécialisé",
    category: "Web",
    shortDescription:
      "E-commerce accessoires chats + blog, catégories, contenu éditorial.",
    longDescription:
      "Site e-commerce spécialisé : catégories, mise en avant produit, et blog associé. Travail orienté UI et structure des pages pour une navigation claire.",
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/dilo22/MiaouMarket",
    imagePath: "/projects/miaoumarket.png",
    tags: ["E-commerce", "Front-end", "Blog", "UI"]
  }
];

export const projects: Project[] = baseProjects.map((p) => ({
  ...p,
  slug: slugify(p.title)
}));

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export const gallery = {
  logos: [
  "/logos/logo-01.jpg",
  "/logos/logo-02.jpg",
  "/logos/logo-03.jpg",
  "/logos/logo-04.png",
  "/logos/logo-05.jpg",
  "/logos/logo-06.jpg"],
  posters: [
  "/posters/poster-01.jpg",
  "/posters/poster-02.jpg",
  "/posters/poster-03.jpg",
  "/posters/poster-04.jpg",
  "/posters/poster-05.jpg",
  "/posters/poster-06.jpg",
  "/posters/poster-07.jpg",
  "/posters/poster-08.jpg",
  "/posters/poster-09.jpg",
  "/posters/poster-10.jpg",
  "/posters/poster-11.jpg",
  "/posters/poster-12.jpg"
],
  businessCards: [
    "/cards/carte 00.jpg",
    "/cards/carte 01.jpg",
    "/cards/carte 02.jpg",
    "/cards/carte 03.jpg",
    "/cards/carte 04.jpg",
    "/cards/carte 05.jpg",
    "/cards/carte 06.jpg",
    "/cards/carte 07.jpg",
    "/cards/carte 08.jpg",
    "/cards/carte 09.jpg",
    "/cards/carte 10.jpg",
    "/cards/carte 11.jpg",
    "/cards/carte 12.jpg",
    "/cards/carte 13.jpg",
    "/cards/carte 14.jpg",
    "/cards/carte 15.jpg",
    "/cards/carte 16.jpg",
    "/cards/carte 17.jpg",
    "/cards/carte 18.jpg",
    "/cards/carte 19.jpg",

  ],
  carnet: {
  title: "Carnet de voyage — Nice",
  cover: "/carnet/cover.webp",
  pages: [
    "/carnet/1.webp",
    "/carnet/2.webp",
    "/carnet/3.webp",
    "/carnet/4.webp",
    "/carnet/5.webp",
    "/carnet/6.webp",
    "/carnet/7.webp",
    "/carnet/8.webp",
    "/carnet/9.webp",
    "/carnet/10.webp"
  ],
  back: "/carnet/back.webp" 
  },
  qrShowcase: "/qr/qr1.jpg"
};