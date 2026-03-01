import { SkillCategory, NewsItem, Project, Phase, AlternanceCard } from '@/types'

export const skillsData: SkillCategory[] = [
  {
    title: 'Développement web',
    skills: [
      { name: 'PHP', level: 70 },
      { name: 'HTML', level: 80 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'LESS', level: 70 },
      { name: 'AlpineJS', level: 60 },
      { name: 'JavaScript', level: 40 },
    ],
  },
  {
    title: 'Base de données',
    skills: [
      { name: 'PostgreSQL', level: 60 },
      { name: 'MySQL', level: 50 },
    ],
  },
  {
    title: 'Développement',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 70 },
    ],
  },
  {
    title: 'Outils',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'Suite JetBrains', level: 80 },
      { name: 'Eclipse', level: 50 },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Magento 2', level: 70 },
      { name: 'Laravel', level: 55 },
      { name: 'Hyvä Theme', level: 65 },
    ],
  },
]

export const newsData: { year: string; items: NewsItem[] }[] = [
  {
    year: 'Deuxième année de BUT informatique',
    items: [
      {
        year: 'Deuxième année de BUT informatique',
        title: "Numériqu'elles",
        date: '20/12/2024',
        description:
          "Lors de ma deuxième année, j'ai participé à Numériqu'elles aux côtés des étudiantes de BUT 1 et BUT 2. Nous avons échangé avec des collégiennes pour leur présenter notre parcours et les encourager à envisager des carrières dans le numérique.",
      },
    ],
  },
  {
    year: 'Première année de BUT informatique',
    items: [
      {
        year: 'Première année de BUT informatique',
        title: 'Journée Portes Ouvertes',
        date: '10/02/2024',
        description:
          "J'ai guidé les visiteurs intéressés par le BUT informatique lors des JPO de l'IUT de Lens, en répondant à leurs questions sur les cours et la vie étudiante.",
      },
      {
        year: 'Première année de BUT informatique',
        title: "Numériqu'elles",
        date: '07/12/2023',
        description:
          "Numériqu'elles initie les jeunes femmes aux métiers du numérique. J'ai partagé mon expérience accompagnée de mes camarades du BUT informatique.",
      },
      {
        year: 'Première année de BUT informatique',
        title: 'Forum des formations',
        date: '23/11/2023',
        description:
          "J'ai participé au forum des formations du lycée André Malraux pour rencontrer les lycéens intéressés par le BUT informatique et partager mon expérience.",
      },
    ],
  },
]

export const projectsData: Project[] = [
  {
    title: 'DriveBy',
    status: 'Projet scolaire - Semestre 4',
    description:
      "Site de location de voiture effectué lors de mon année de BUT2",
    technologies: ['PHP', 'TypeScript', 'HTML', 'SCSS'],
    link: 'https://github.com/emmagrave/driveby',
    imagePlaceholder: 'driveBy1.webp',
  },
  {
    title: 'Bot Vinted',
    status: 'En cours…',
    description:
      "Bot Python qui gère mon compte Vinted (likes, annonces, suivi en base de données).",
    technologies: ['Python', 'SQLite'],
    link: 'https://github.com/emmagrave/botVinted/',
    imagePlaceholder: 'vinted.webp',
  },
  {
    title: '2048',
    description:
      "Ce jeu de puzzle est basé sur le jeu populaire où l'objectif est de combiner des tuiles jusqu'à atteindre le nombre 2048.",
    technologies: ['Java'],
    link: 'https://github.com/emmagrave/2048',
    imagePlaceholder: '2048.webp',
  },
]

export const alternancePhases: Phase[] = [
  {
    period: 'Février → Juillet 2025',
    title: 'Formation Magento 2',
    description:
      'Immersion complète dans l\'écosystème Magento 2 : architecture du framework, système de thèmes, modules, gestion du catalogue produit. Une base solide pour travailler sur des sites e-commerce en production.',
    tags: ['Magento 2', 'PHP', 'LESS', 'XML', 'Hyvä'],
    status: 'done',
  },
  {
    period: 'Juillet 2025 → Janvier 2026',
    title: 'Projet Avril — Refonte graphique',
    description:
      'Refonte complète du front-end d\'un site e-commerce sur le thème Hyvä. Responsable d\'une grande partie de l\'intégration front : nouveau design, composants UI, responsive et cohérence visuelle sur l\'ensemble des pages.',
    tags: ['Hyvä Theme', 'TailwindCSS', 'AlpineJS', 'HTML', 'LESS'],
    highlight: 'Intégration front-end quasi-complète du nouveau thème',
    status: 'done',
  },
  {
    period: 'Décembre 2025 - Février 2026',
    title: 'Projet Allo Solar — Page produit',
    description:
      'Refonte de la page produit du site Allo Solar en binôme. Développement de la quasi-intégralité de la page : structure, mise en page, composants interactifs, affichage des données produit.',
    tags: ['Magento 2', 'Hyvä Theme', 'TailwindCSS', 'AlpineJS', 'PHP'],
    highlight: 'Page produit développée en binôme, en quasi-autonomie',
    status: 'current',
  },
  {
    period: 'Prochains objectifs',
    title: 'Monter en back-end',
    description:
      'Après avoir consolidé mes compétences front, l\'objectif est d\'intégrer davantage de logique back-end : modules Magento, manipulation de données, API et logique métier côté serveur.',
    tags: ['Modules Magento', 'PHP avancé', 'API REST'],
    status: 'next',
  },
]

export const alternanceCards: AlternanceCard[] = [
  {
    title: 'Maîtrise de Magento 2',
    description:
      'Architecture, thèmes, composants — une connaissance solide du framework e-commerce de référence.',
    icon: 'monitor',
  },
  {
    title: 'Stack Hyvä',
    description:
      'TailwindCSS + AlpineJS dans un contexte Magento moderne — front performant et léger.',
    icon: 'layers',
  },
  {
    title: 'Contexte professionnel réel',
    description:
      'Délais clients, collaboration en équipe, code en production dès la première mission.',
    icon: 'clock',
  },
  {
    title: 'Autonomie progressive',
    description:
      'Du travail encadré à la prise en charge de pages entières — montée en responsabilités rapide.',
    icon: 'users',
  },
]
