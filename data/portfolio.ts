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
      "Application desktop dédiée aux artisans : gestion des clients, création de devis et factures, suivi des paiements et organisation des données. L’objectif est de gagner du temps au quotidien avec une interface claire et un flux de travail simple.",
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
      "Jeu de stratégie : gestion d’un village et de son territoire, décisions économiques et militaires, fiscalité et équilibre des ressources. Prototype orienté gameplay et architecture propre.",
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
    longDescription:
      "Jeu stratégique de robots : unités autonomes, tactiques, pose de mines, et mode multijoueur via réseau. Accent mis sur la logique de jeu et la structure du code.",
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
    longDescription:
      "Simulation C++ d’un bateau : intégration d’un moteur physique, gestion d’obstacles, construction avec CMake et rendu/interaction via SFML. Projet axé performance et fiabilité.",
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
    longDescription:
      "Calcul de chemin optimal en environnement polygonal : import JSON de bâtiments, enveloppe convexe, subdivision trapézoïdale, construction de graphe et recherche de plus court chemin. Projet algorithmique et géométrie computationnelle.",
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
    longDescription:
      "Suite modulaire de mini-applications rassemblées dans une interface unique : outils de calcul, convertisseurs, jeux, QR code, gestion simple de mots de passe, etc. L’objectif : architecture propre et extensible.",
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
    longDescription:
      "Moteur de raytracing : calcul récursif, intersections, ombres, modèle de Phong, matériaux et surfaces réfléchissantes. Projet orienté maths/3D et conception orientée objet.",
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
    longDescription:
      "Prototype d’interface pour En Garde! : hot-seat, implémentation des règles officielles, et UI soignée. Objectif : expérience utilisateur claire et cohérence visuelle.",
    tech: ["Python", "Tkinter", "Pillow"],
    githubUrl: "https://github.com/dilo22/En-Garde",
    imagePath: "/projects/en-garde.png",
    tags: ["UI", "OOP", "Tkinter", "Game"]
  },
  {
    title: "Compilateur ALGO → RAM",
    category: "Technique",
    shortDescription: "Analyse lex/syntax/sem, ASA, génération de code RAM.",
    longDescription:
      "Chaîne de compilation : analyse lexicale/syntaxique/sémantique, construction d’ASA, puis génération de code cible RAM. Projet axé langages/compilation et rigueur.",
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
    longDescription:
      "Exploration d’une base de données JO 2024 : filtres par pays, médailles et statistiques, avec un mini-outil d’aide à la consultation. Projet orienté manipulation de données et UX.",
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
  qrShowcase: "/qr/qr1.jpg"
};