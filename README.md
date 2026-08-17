# Prathamesh Patekar — Portfolio

Lightweight Software Engineer portfolio built with React, TypeScript, and Vite.

## Stack

- React 18 + TypeScript
- Vite
- React Router
- CSS Modules + global CSS variables
- Lucide React (icons)
- Content in TypeScript data files (no backend)

## Project Structure

```
portfolio/
├── public/
│   ├── images/profile/       # Profile photo (add your image)
│   ├── images/projects/      # Project screenshots (add your images)
│   ├── resume/               # Resume PDF
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/           # Reusable UI components
│   ├── sections/             # Home page sections
│   ├── pages/                # Home + ProjectDetails routes
│   ├── data/                 # Portfolio content (edit here)
│   ├── hooks/                # useScrollReveal, useActiveSection
│   ├── styles/               # Global CSS + variables
│   └── types/                # TypeScript interfaces
└── index.html
```

## Commands

```bash
cd portfolio
npm install
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

## Adding Images

Place your assets in:

- `public/images/profile/photo.webp`
- `public/images/projects/swasthaone.webp`
- `public/images/projects/bharat-emart.webp`
- `public/images/projects/d2c-insider.webp`
- `public/images/projects/techsevin.webp`
- `public/images/projects/rose-watch-bar.webp`
- `public/images/projects/harvey-nichols-riyadh.webp`
- `public/images/projects/peacoy.webp`
- `public/images/projects/avias-world.webp`
- `public/images/projects/rks-aroma.webp`

Missing images show a styled placeholder automatically.

## Updating Content

Edit files in `src/data/`:

- `profile.ts` — name, headline, about, stats
- `contact.ts` — email, phone, LinkedIn, GitHub
- `skills.ts` — technical expertise groups
- `experience.ts` — work history
- `projects.ts` — project case studies
- `education.ts` — education, certifications

## Deploy

Build output is static (`dist/`). Deploy to Vercel, Netlify, or GitHub Pages.

```bash
npm run build
```
