# Abnaa Alhadarat Website

Modern bilingual website for **Abnaa Alhadarat / أبناء الحضارات**, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

## Features

- English and Arabic pages
- RTL Arabic layout
- 3D WebGL hero scene
- Responsive corporate layout
- Glassmorphism and turquoise/cyan/deep-blue brand styling
- Reusable content and UI components
- SEO metadata for localized pages
- Contact form layout and WhatsApp floating button

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:3000/en
http://127.0.0.1:3000/ar
```

## Build

```bash
npm run lint
npm run build
```

## Main Files

- `src/data/site.ts` - bilingual company content, sectors, nav, and contact details
- `src/components/HeroScene.tsx` - Three.js industrial city hero
- `src/app/[locale]/page.tsx` - localized homepage
- `src/app/[locale]/[slug]/page.tsx` - localized pages and sector detail pages
