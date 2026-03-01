# Portfolio Emma Grave — Next.js

Portfolio professionnel développé avec Next.js 14, TypeScript et Tailwind CSS dans le cadre du cours de développement web.

## 🚀 Technologies utilisées

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **React Intersection Observer** (animations au scroll)

## 📁 Structure du projet

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal avec fonts
│   │   ├── page.tsx            # Page d'accueil
│   │   └── globals.css         # Styles globaux Tailwind
│   ├── components/
│   │   ├── Navigation.tsx      # Navigation responsive avec burger
│   │   ├── CVModal.tsx         # Modal téléchargement CV
│   │   └── sections/           # Composants sections
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Alternance.tsx
│   │       ├── Projects.tsx
│   │       └── Contact.tsx
│   ├── data/
│   │   └── portfolioData.ts    # Données (compétences, projets, etc.)
│   └── types/
│       └── index.ts            # Types TypeScript
├── public/                     # Assets statiques
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🛠️ Installation

### Prérequis
- Node.js 18+ et npm

### Étapes

1. **Installer les dépendances**
```bash
npm install
```

2. **Lancer en mode développement**
```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

3. **Build de production**
```bash
npm run build
npm start
```

## ✨ Fonctionnalités

### Navigation
- Menu responsive avec burger sur mobile
- Smooth scroll vers les sections
- Background transparent qui devient opaque au scroll

### Sections

#### Hero
- Animations d'apparition en cascade
- Blobs animés en arrière-plan (CSS animations)
- Sidebar sociale (desktop)

#### À propos
- Présentation personnelle
- Liens sociaux (LinkedIn, GitHub, Email)
- Image de profil

#### Compétences
- 5 catégories de compétences
- Barres de progression animées
- Effet shimmer sur les barres

#### Alternance
- Timeline des phases de l'alternance
- Point animé sur la phase actuelle
- Tags technologiques
- 4 cards "Ce que j'ai appris"

#### Projets
- Cards avec effet flip 3D au clic
- Face avant : titre + image
- Face arrière : description + technologies + lien
- Responsive (pas de flip sur mobile)

#### Contact
- Background gradient
- Email cliquable

### Animations
- Scroll reveal (Intersection Observer)
- Fade in + translateY sur les sections
- Barres de progression animées
- Blobs qui se morphent (keyframes CSS)
- Effet shimmer sur les skill bars
- Flip 3D sur les cartes projets

## 🎨 Personnalisation

### Modifier les données

Toutes les données du portfolio sont centralisées dans `src/data/portfolioData.ts` :

- **skillsData** : Compétences par catégorie
- **newsData** : Actualités par année
- **projectsData** : Projets personnels
- **alternancePhases** : Phases de l'alternance
- **alternanceCards** : Cards "Ce que j'ai appris"

### Modifier les couleurs

Les couleurs sont définies dans `tailwind.config.js` :

```js
colors: {
  primary: '#c9a0a8',
  accent: '#d4a5ae',
  dark: '#2d2d2d',
  light: '#f8f5f3',
  muted: '#999999',
  border: '#ece6e3',
}
```

### Ajouter une section

1. Créer un composant dans `src/components/sections/`
2. L'importer dans `src/app/page.tsx`
3. Ajouter le lien dans `Navigation.tsx`

## 📱 Responsive

- **Desktop** : > 768px (layout complet)
- **Tablet** : 768px - 1024px (grilles adaptées)
- **Mobile** : < 768px (burger menu, layout en colonne)

### Points d'attention mobile
- Menu burger animé (3 barres → X)
- Overlay full-screen
- Timeline alignée à gauche
- Projets : pas de flip, front + back empilés
- Social sidebar cachée (liens dans About)

## 🔧 Scripts

```bash
npm run dev      # Développement
npm run build    # Build production
npm start        # Lancer build
npm run lint     # Linter ESLint
```

## 📦 Dépendances principales

```json
{
  "next": "^14.1.0",
  "react": "^18.2.0",
  "framer-motion": "^11.0.5",
  "react-intersection-observer": "^9.0.0" 
}
```

## 📝 Notes pour le rendu

### Points forts du projet Next.js :

✅ **App Router Next.js 14** : Utilisation du nouveau système de routing avec Server/Client Components  
✅ **TypeScript** : Typage fort pour éviter les erreurs  
✅ **Component-based** : Architecture modulaire et réutilisable  
✅ **Data Layer séparée** : Données centralisées dans `portfolioData.ts`  
✅ **Responsive complet** : Mobile-first avec Tailwind  
✅ **Animations performantes** : CSS + Framer Motion  
✅ **SEO optimisé** : Métadonnées dans `layout.tsx`  
✅ **Google Fonts optimisés** : Chargement avec Next/Font  
✅ **Code propre** : ESLint + structure claire

### Concepts Next.js appliqués :
- App Router
- Layout et Metadata API
- Client Components ('use client')
- Font Optimization
- Image Optimization (structure prête)
- File-based routing

---

**Auteur** : Emma Grave  
**Date** : Février 2025  
**Cadre** : Projet Next.js
