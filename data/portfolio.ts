export type ProjectCategory = "Technique" | "Web";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  longDescription: string;
  extendedDescription? : string;
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
  longDescription: `Développement d’un jeu de guerre stratégique mettant en scène des robots autonomes capables d’adopter différentes tactiques de combat.
Le joueur peut configurer le comportement des robots : détection d’ennemis à proximité, poursuite, attaque à distance ou pose de mines stratégiques.

Le jeu intègre également une fonctionnalité réseau permettant le jeu en ligne, ajoutant une dimension multijoueur et compétitive.

Réalisé en Python avec Tkinter, ce projet met en avant la gestion de logique comportementale (IA simple), la détection d’environnement, la coordination d’actions en temps réel et l’implémentation d’une communication réseau.
Il démontre ma capacité à développer des systèmes interactifs combinant stratégie, programmation orientée objet et gestion d’événements.`,

  extendedDescription: `Objectif : programmer des robots de combat et les faire s’affronter dans une arène sous forme de grille (30 × 20) comportant des obstacles. Chaque joueur charge un programme décrivant le comportement de son robot, puis la partie se déroule automatiquement : tous les robots exécutent leurs instructions de manière synchrone, pas à pas. Le vainqueur est le dernier robot encore fonctionnel (des ex æquo sont possibles).

Programmation et stratégie
Chaque robot est piloté par un fichier texte (.rbt) composé d’une ligne d’information, d’une instruction de “circuit de secours”, puis d’une séquence de 5 à 20 pas. Une fois la fin du programme atteinte, l’exécution boucle au début. Les actions disponibles couvrent déplacement, combat et tactiques :
- DD / AL : déplacements (déterministe ou aléatoire) en tenant compte des cases libres,
- PS / FT : poursuite ou fuite par rapport à l’adversaire le plus proche (PS/FT peuvent se déplacer en diagonale),
- MI : pose de mines (très impactantes sur l’énergie),
- TH / TV : tirs horizontaux/verticaux stoppés par la première cible rencontrée,
- IN : invisibilité, contre-mesure coûteuse mais perturbante,
- TT : test de proximité conditionnant l’action suivante (comportement “si… alors… sinon…” en fonction d’une distance de repérage configurable).

Gestion de l’énergie et rapport coût/efficacité
Chaque instruction consomme une quantité d’énergie différente, ce qui crée un vrai dilemme de conception : un robot agressif peut éliminer vite, mais risque de s’épuiser ; un robot économe peut survivre longtemps, mais manquer d’impact. Les mines infligent de lourds dégâts et introduisent une mécanique supplémentaire : lorsqu’un robot marche sur une mine, il perd de l’énergie et un pas de son programme est remplacé par l’instruction du circuit de secours, ce qui modifie dynamiquement son comportement au cours de la partie.

Fonctionnalités de l’application
L’application permet de sélectionner une configuration de terrain (obstacles via fichier de configuration), de placer les robots, d’associer à chacun un programme et une énergie initiale, de régler une distance de repérage, puis de suivre visuellement l’évolution de la partie. L’interface inclut des informations de suivi (état/énergie, actions en cours), une aide générale et contextuelle accessible à tout moment, et la possibilité de mettre la partie en pause puis de la reprendre.

Ce projet met en avant la modélisation orientée objet (robots, arène, obstacles, mines, exécution des programmes), la gestion d’événements et de l’affichage avec Tkinter, ainsi que la conception d’une simulation synchronisée “pas à pas” avec des règles de gameplay précises et testables.`,

  tech: ["Python", "Tkinter", "Réseau"],
  githubUrl: "https://github.com/dilo22/robowars",
  imagePath: "/projects/robowars.png",
  tags: ["Python", "Tkinter", "IA simple", "Network"]
},
  {
  title: "Simulation de bateau – Moteur physique 2D",
  category: "Technique",
  shortDescription:
    "Simulation physique d’un bateau en C++ avec SFML et LibPhysics.",

  longDescription: `Projet de simulation physique réalisé en C++ visant à modéliser le déplacement d’un bateau dans un environnement 2D interactif.

L’application utilise la bibliothèque graphique SFML pour l’affichage et la gestion des interactions utilisateur, ainsi que le moteur LibPhysics pour calculer l’évolution dynamique du bateau. Le programme applique les principes fondamentaux de la dynamique afin de simuler les forces exercées sur le bateau, notamment la propulsion des hélices et les effets d’amortissement hydrodynamique.

L’utilisateur peut piloter le bateau dans une scène graphique, observer son comportement physique et tenter d’atteindre un objectif de course défini dans l’environnement.`,

  extendedDescription: `Ce projet a pour objectif de concevoir une simulation interactive de bateau en mer en appliquant les principes de la dynamique physique et de la programmation graphique en C++. L’application combine un moteur physique dédié (LibPhysics) et la bibliothèque SFML afin de simuler et visualiser le comportement d’un bateau dans un environnement 2D.

Le moteur LibPhysics fournit un modèle dynamique du bateau à travers plusieurs composants essentiels. Le bateau est représenté par un "RigidBody", dont l’état cinématique comprend la position, la vitesse linéaire, la vitesse angulaire et l’orientation. À chaque étape de simulation, le moteur physique applique les forces agissant sur le bateau et met à jour son état dans le temps.

Le comportement du bateau repose sur les principes fondamentaux de la dynamique : la somme des forces appliquées détermine l’accélération linéaire, tandis que les couples appliqués influencent la rotation autour de l’axe vertical (yaw). Les forces simulées incluent notamment la propulsion des hélices ainsi que l’amortissement hydrodynamique généré par l’eau.

Les objets de la scène sont définis dans un repère physique (repère monde), tandis que leur affichage à l’écran nécessite une conversion vers un repère pixel correspondant à la résolution de la fenêtre graphique. La bibliothèque SFML est utilisée pour gérer la création de la fenêtre, les événements clavier/souris, la boucle de rendu et l’affichage du bateau en temps réel.

Le projet inclut également la structuration du code autour de classes dédiées (gestion de la simulation, entités du jeu, interaction utilisateur) ainsi que la mise en place d’un objectif de course avec ligne de départ et ligne d’arrivée.

Ce travail met en avant plusieurs compétences techniques : programmation orientée objet en C++, intégration de bibliothèques externes, simulation physique temps réel, gestion d’un moteur graphique 2D et organisation d’un projet logiciel avec CMake.`,

  tech: ["C++", "SFML", "LibPhysics", "CMake"],
  githubUrl: "https://github.com/dilo22/bateau",
  imagePath: "/projects/bateau.png",
  tags: ["C++", "Simulation", "Physique", "SFML"]
},
  {
  title: "Plus Court Chemin – Géométrie algorithmique",
  category: "Technique",
  shortDescription:
    "JSON bâtiments, enveloppe convexe, carte trapézoïdale, graphe, chemin optimal.",
  longDescription: `Application de géométrie algorithmique en Python (Tkinter) permettant de planifier un plus court chemin dans un plan contenant des obstacles polygonaux, à partir d’un partitionnement du domaine.

Le programme charge un plan cadastral (données JSON de bâtiments), sélectionne une zone d’intérêt, approxime les obstacles par des enveloppes convexes, puis construit une carte trapézoïdale de l’espace libre par balayage (scanline).

À partir de cette subdivision, un graphe planaire est généré afin de relier les zones navigables. L’utilisateur choisit un point de départ et un point d’arrivée, puis l’application calcule et affiche un chemin optimal (Dijkstra, ou A* selon la stratégie) en évitant les bâtiments.`,

  extendedDescription: `Ce projet de géométrie algorithmique consiste à construire une application capable de planifier un (plus court) chemin dans un plan contenant des obstacles polygonaux, à partir d’un partitionnement du domaine.

L’approche repose sur la notion d’espace de configuration C : les positions qui provoquent une intersection entre le mobile et un obstacle sont exclues (espace interdit), et on travaille uniquement dans l’espace libre Cf. Plutôt que de représenter directement un chemin, l’objectif est de construire une représentation structurée de l’espace libre, ce qui est particulièrement efficace lorsque la scène reste fixe et que plusieurs requêtes de chemin doivent être calculées.

Les obstacles proviennent d’un plan cadastral réel (fichier JSON compressé) représentant les bâtiments de la ville de La Garde. Le programme charge et affiche ce plan, puis se concentre sur une zone sélectionnée (notamment les bâtiments du campus, dans une plage d’identifiants définie dans le code). Afin de simplifier les calculs, chaque bâtiment est ensuite approximé par une enveloppe convexe (plus précise qu’un simple rectangle englobant), ce qui facilite les traitements géométriques ultérieurs.

Le cœur de la méthode est la construction d’une carte trapézoïdale de l’espace : le domaine est balayé par des “scanlines” passant par les sommets des polygones. Chaque ligne se prolonge (par exemple verticalement) jusqu’à rencontrer une arête ou la limite de la boîte englobante du domaine ; les portions situées à l’intérieur des obstacles sont éliminées, ce qui aboutit à une subdivision du plan en trapèzes représentant l’espace navigable.

À partir de cette carte trapézoïdale, un graphe sous-jacent est construit pour supporter la recherche de chemin : chaque trapèze fournit des nœuds (milieux de bases, barycentre) et des arêtes reliant les zones adjacentes. Une fois ce graphe établi, l’utilisateur choisit un point de départ et un point d’arrivée, puis l’application calcule un chemin dans le graphe et l’affiche sur la carte. La recherche peut être réalisée avec Dijkstra (ou améliorée par A* selon la stratégie), afin d’obtenir un chemin optimal dans la structure discrétisée.

Ce projet met en avant une implémentation modulaire en Python, la manipulation de données réelles (JSON cadastral), la géométrie computationnelle (convexité, intersections, subdivision) et la transformation d’un problème continu en problème de graphe pour résoudre efficacement la planification de trajectoire.`,

  tech: ["Python", "Tkinter", "Algo", "Géométrie"],
  githubUrl: "https://github.com/dilo22/Plus-court-chemin",
  imagePath: "/projects/plus-court-chemin.png",
  tags: ["Algorithmique", "Géométrie", "Python", "Tkinter"]
},
  {
  title: "Dilo (mon AKA)",
  category: "Technique",
  shortDescription:
    "Suite de mini-applications dans une interface unique (outils, jeux, utilitaires).",

  longDescription: `Dilo est une application développée en Python avec Tkinter regroupant plusieurs mini-applications et outils interactifs au sein d’une interface unique organisée autour d’un menu principal.

  Le logiciel propose différents utilitaires du quotidien tels que des outils de calcul, de conversion, de création ou encore de divertissement. L’objectif est de centraliser plusieurs fonctionnalités pratiques dans un seul environnement simple et accessible.

  Ce projet met en avant la conception d’une architecture modulaire, la gestion de multiples interfaces graphiques et l’organisation du code en programmation orientée objet.`,

  extendedDescription: `Dilo est une suite d’outils interactifs développée en Python avec Tkinter, conçue comme une plateforme regroupant plusieurs mini-applications dans une seule interface. L’application fonctionne autour d’un menu principal permettant d’accéder rapidement à différents modules utilitaires, créatifs et ludiques.

  Parmi les fonctionnalités disponibles :

  • Calculatrice : outil de calcul classique permettant d’effectuer des opérations arithmétiques rapidement.

  • Convertisseur de devises : permet de convertir différentes monnaies pour obtenir leur équivalent instantanément.

  • Jeu du serpent : mini-jeu inspiré du célèbre Snake où le joueur doit faire grandir son serpent sans entrer en collision.

  • Caisse rapide : outil permettant de compter rapidement une somme d’argent en pièces et billets, utile pour vérifier une caisse ou calculer une monnaie.

  • Liste de couleurs : catalogue de couleurs ; un double-clic sur une couleur permet de l’appliquer immédiatement en arrière-plan.

  • Matrice de couleurs : affiche le code RGB et HEX d’une couleur ainsi qu’un aperçu visuel.

  • Créateur de couleur : interface avec tirettes permettant de composer une couleur personnalisée à partir des valeurs Rouge, Vert et Bleu.

  • Horloge multifonction : affiche l’heure et propose également un minuteur et un compte à rebours.

  • Générateur de mots de passe : création de mots de passe sécurisés selon différents critères.

  • Générateur de QR code : génération instantanée de QR codes à partir d’un lien ou d’un texte.

  • Convertisseur YouTube : permet de convertir et récupérer du contenu audio depuis une vidéo.

  • Lecteur audio : module permettant de lire des fichiers audio directement dans l’application.

  • Dessin : espace de dessin inspiré d’un mini-Paint permettant de dessiner librement.

  • Audio to Text : conversion d’un enregistrement audio en texte.

  • Convertisseur WebP : conversion d’images WebP vers d’autres formats.

  • Météo : affichage des conditions météorologiques pour une ville donnée.

  Ce projet met en avant la conception d’une architecture logicielle modulaire capable d’intégrer de nombreux modules indépendants dans une même application. Il démontre également mes compétences en développement d’interfaces graphiques avec Tkinter, en organisation orientée objet et en intégration de fonctionnalités variées dans un environnement logiciel cohérent.`,

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
  longDescription: `Développement d’un moteur de rendu 3D basé sur le principe du raytracing récursif, réalisé en Python avec les bibliothèques NumPy et PIL.

Le projet consiste à modéliser l’interaction de la lumière avec des objets (sphères, plans…) en simulant la propagation des rayons lumineux : calcul des intersections, gestion des ombres portées, application du modèle d’illumination de Phong (réflexions diffuses et spéculaires), surfaces réfléchissantes et rendu récursif.

L’architecture repose sur une conception orientée objet structurée (vecteurs, couleurs, objets, lumières, caméra, scène), permettant une implémentation modulaire et évolutive du moteur graphique.

Ce projet met en avant mes compétences en mathématiques appliquées (géométrie vectorielle), algorithmique avancée, programmation orientée objet et conception d’un système graphique complet à partir de principes physiques simplifiés.`,

  extendedDescription: `Ce projet s’inscrit dans le cadre d’une étude en infographie 3D visant à illustrer les principes fondamentaux du lancer de rayons (raytracing). L’objectif est de générer une image 2D réaliste à partir d’une scène 3D en simulant le comportement simplifié de la lumière : des rayons sont émis depuis la caméra, rencontrent des objets, puis peuvent être réfléchis ou absorbés selon les propriétés des surfaces.

Le modèle repose sur des hypothèses classiques de l’optique simplifiée : propagation rectiligne de la lumière dans des milieux homogènes, interaction uniquement avec les surfaces des objets et approximation de certains phénomènes physiques complexes comme la diffraction ou la polarisation.

La scène 3D est composée de plusieurs éléments principaux : des objets géométriques (sphères, plans), des matériaux définissant les propriétés visuelles des surfaces, une caméra permettant de projeter la scène sur un plan de vue, et des sources lumineuses responsables de l’éclairage.

Le moteur de rendu a été conçu selon une architecture orientée objet structurée autour de plusieurs classes fondamentales : vecteurs (opérations mathématiques), couleurs, objets géométriques, lumières, caméra et scène. Cette organisation permet une implémentation modulaire, claire et évolutive du moteur.

Le développement a été réalisé de manière incrémentale : mise en place du lancer de rayons de base, ajout du modèle d’éclairage de Phong pour les réflexions diffuses et spéculaires, gestion des ombres portées, puis implémentation du raytracing récursif afin de gérer les surfaces réfléchissantes.

Ce projet met en avant mes compétences en géométrie vectorielle, en algorithmique et en conception de systèmes graphiques, tout en démontrant ma capacité à structurer un moteur de rendu 3D complet à partir de principes physiques simplifiés.`,

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
  longDescription: `Développement d’un prototype d’interface pour le jeu En Garde ! (Reiner Knizia) permettant à deux joueurs de s’affronter en “hot seat” selon les règles officielles : déplacements par cartes, attaques/parades, attaques renforcées, charge et gestion du score jusqu’à 5 touches.

  Réalisé en Python avec Tkinter et Pillow, le projet met l’accent sur une IHM claire et conviviale : représentation du plateau, des cartes et des pions, gestion des erreurs, suivi des manches, et personnalisation de l’interface (mise en page/visuels) avec conservation des préférences entre deux sessions.

  Ce projet valorise mes compétences en conception d’interfaces, programmation orientée objet, modularité et ergonomie (feedback utilisateur, cohérence et robustesse).`,

  extendedDescription: `Ce projet consiste en la conception et le développement d’un prototype d’interface graphique pour le jeu de société En Garde ! de Reiner Knizia, permettant à deux joueurs de s’affronter sur un même poste en mode “hot seat”, conformément aux règles officielles du jeu.

  L’objectif principal est de proposer une interface simple, intuitive et conviviale permettant de simuler un duel d’escrime entre deux joueurs. Chaque joueur dispose d’une main de cartes numérotées de 1 à 5, utilisées pour se déplacer sur le plateau ou pour attaquer et se défendre.

  Les déplacements des pions, les attaques, les parades, les attaques renforcées et les charges sont implémentés conformément aux règles du jeu. Lorsqu’une attaque n’est pas correctement parée, une touche est marquée et la manche prend immédiatement fin. La partie se poursuit jusqu’à ce qu’un joueur atteigne cinq touches.

  L’interface représente visuellement le plateau, les pions et les cartes des joueurs. Les actions possibles sont guidées afin de limiter les erreurs. Un système de validation et de messages permet d’accompagner l’utilisateur en cas d’action invalide.

  L’application inclut également des options de personnalisation de l’interface (visuels, disposition) dont les préférences sont sauvegardées entre deux sessions.

  Le projet est développé en Python avec Tkinter pour l’interface graphique et Pillow pour la gestion des images. La conception repose sur la programmation orientée objet et une architecture modulaire afin de garantir lisibilité, robustesse et réutilisabilité du code.`,

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
  "/logos/logo-06.jpg",
  "/logos/logo-07.jpg"],
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
    "/cards/carte00.jpg",
    "/cards/carte01.jpg",
    "/cards/carte02.jpg",
    "/cards/carte03.jpg",
    "/cards/carte04.jpg",
    "/cards/carte05.jpg",
    "/cards/carte06.jpg",
    "/cards/carte07.jpg",
    "/cards/carte08.jpg",
    "/cards/carte09.jpg",
    "/cards/carte10.jpg",
    "/cards/carte11.jpg",
    "/cards/carte12.jpg",
    "/cards/carte13.jpg",
    "/cards/carte14.jpg",
    "/cards/carte15.jpg",
    "/cards/carte16.jpg",
    "/cards/carte17.jpg",
    "/cards/carte18.jpg",
    "/cards/carte19.jpg",
    "/cards/carte20.jpg",
    "/cards/carte21.jpg"

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