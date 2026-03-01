# 🚀 Installation du Portfolio Next.js — Emma Grave

## Méthode 1 : Installation depuis l'archive

### 1. Extraire l'archive
```bash
tar -xzf portfolio-nextjs.tar.gz
cd portfolio-nextjs
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Ajouter la dépendance manquante (importante !)
```bash
npm install react-intersection-observer
```

### 4. Lancer en mode développement
```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## Méthode 2 : Installation from scratch

### 1. Créer un nouveau projet Next.js
```bash
npx create-next-app@latest portfolio-nextjs --typescript --tailwind --app
```

Répondre aux questions :
- Use TypeScript? **Yes**
- Use ESLint? **Yes**
- Use Tailwind CSS? **Yes**
- Use `src/` directory? **Yes**
- Use App Router? **Yes**
- Customize default import alias? **No**

### 2. Installer les dépendances supplémentaires
```bash
cd portfolio-nextjs
npm install framer-motion react-intersection-observer
```

### 3. Copier les fichiers du projet
Copier tous les fichiers de l'archive dans le dossier créé.

---

## 📦 Dépendances

### Core
- **next** : ^14.1.0
- **react** : ^18.2.0
- **react-dom** : ^18.2.0

### Animations & Utils
- **framer-motion** : ^11.0.5
- **react-intersection-observer** : ^9.0.0

### Dev Dependencies
- **typescript** : ^5.3.3
- **tailwindcss** : ^3.4.1
- **@types/react** : ^18.2.48
- **eslint** : ^8.56.0
- **eslint-config-next** : ^14.1.0

---

## ⚙️ Configuration requise

- **Node.js** : 18.x ou supérieur
- **npm** : 9.x ou supérieur

Vérifier avec :
```bash
node --version
npm --version
```

---

## 🎯 Commandes disponibles

```bash
# Développement (hot reload)
npm run dev

# Build de production
npm run build

# Lancer la version de production
npm start

# Linter
npm run lint
```

---

## 🐛 Résolution de problèmes

### Erreur : Module not found 'react-intersection-observer'
```bash
npm install react-intersection-observer
```

### Erreur : Module not found 'framer-motion'
```bash
npm install framer-motion
```

### Port 3000 déjà utilisé
```bash
# Utiliser un autre port
PORT=3001 npm run dev
```

### Cache Next.js corrompu
```bash
# Supprimer le cache
rm -rf .next
npm run dev
```

### Problèmes de dépendances
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
```

---

## 📁 Structure après installation

```
portfolio-nextjs/
├── node_modules/          # Dépendances (après npm install)
├── public/                # Assets statiques
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── CVModal.tsx
│   │   └── sections/
│   ├── data/
│   │   └── portfolioData.ts
│   └── types/
│       └── index.ts
├── .next/                 # Build Next.js (après npm run dev)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

---

## 🌐 Déploiement

### Vercel (recommandé pour Next.js)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Installer Vercel CLI :
```bash
npm i -g vercel
```
3. Déployer :
```bash
vercel
```

### Netlify

1. Build le projet :
```bash
npm run build
```
2. Créer un fichier `netlify.toml` :
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```
3. Déployer via l'interface Netlify ou CLI

---

## ✅ Checklist avant rendu

- [ ] `npm install` exécuté sans erreur
- [ ] `npm run dev` lance le serveur
- [ ] Le site s'affiche sur http://localhost:3000
- [ ] Toutes les sections sont visibles
- [ ] Les animations fonctionnent au scroll
- [ ] Le menu burger fonctionne sur mobile
- [ ] Les projets flip en 3D au clic
- [ ] Le modal CV s'ouvre
- [ ] Build de production réussit (`npm run build`)

---

## 📚 Documentation Next.js

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

## 💡 Notes importantes pour le cours

### Concepts Next.js couverts :
✅ App Router (nouveau système Next.js 14)
✅ Server & Client Components
✅ Layout et Metadata API
✅ Font Optimization (next/font)
✅ TypeScript intégration
✅ CSS Modules alternative (Tailwind)
✅ Component-based architecture

### Bonnes pratiques appliquées :
✅ Séparation des données (data layer)
✅ Types TypeScript stricts
✅ Composants réutilisables
✅ Responsive mobile-first
✅ Animations performantes
✅ Code clean et commenté

---

**🎓 Projet réalisé dans le cadre du cours Next.js**  
**Auteur** : Emma Grave  
**Date** : Février 2025
