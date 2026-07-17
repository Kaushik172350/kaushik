# Kaushik Lunagariya — Portfolio

A premium, animated portfolio site for a Senior Full Stack Developer, built with React + Vite,
Tailwind CSS, and Framer Motion.

## Tech Stack

- React 19 + Vite
- Tailwind CSS 3 (dark/light mode via class strategy)
- Framer Motion (scroll reveals, page-load sequence, micro-interactions)
- lucide-react + react-icons (icon set, brand icons)
- Fully responsive, accessible (visible focus states, `prefers-reduced-motion` respected)
- SEO: meta tags, Open Graph, Twitter cards, JSON-LD structured data

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  components/     All page sections (Hero, About, Skills, Experience, Projects, Services,
                   Stats, Testimonials, Contact, Footer, Navbar, BackToTop, Reveal)
  context/        ThemeContext (dark/light mode, persisted to localStorage)
  data/           portfolioData.js — all copy/content lives here, edit freely
  hooks/          useCountUp — animated stat counters
```

## Before you deploy — personalize these

1. **Resume file**: Drop your PDF resume at `public/Kaushik_Lunagariya_Resume.pdf` — the
   "Download Resume" button in the Hero already links to it.
2. **Profile photo**: The Hero currently uses a typed-code "signature" card instead of a
   photo placeholder. To add a headshot, drop an image in `public/` and reference it inside
   `src/components/Hero.jsx`.
3. **Project images**: Project cards currently use gradient placeholders with the project
   name. Swap in real screenshots by adding an `<img>` inside the gradient block in
   `src/components/Projects.jsx`.
4. **Live demo / GitHub links**: Update the `href`s in `src/components/Projects.jsx` and
   `src/data/portfolioData.js` (`personal.github`, `personal.linkedin`) with your real URLs.
5. **Contact form**: The form validates client-side and simulates a send. Wire it to a real
   email service (e.g. Formspree, EmailJS, or your own API route) inside
   `src/components/Contact.jsx` → `handleSubmit`.
6. **OG image**: Add `public/og-cover.png` (1200×630) for social share previews — referenced
   in `index.html`.
7. **Domain**: Replace `https://kaushiklunagariya.dev/` in `index.html` and `public/robots.txt`
   with your real domain once you have one.

## Deploying

Any static host works — build with `npm run build` and deploy the `dist/` folder to
Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
