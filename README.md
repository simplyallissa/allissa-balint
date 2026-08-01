# allissa-balint.com

Personal portfolio site for Allissa Balint. Single-page static site with a hero, work history, skills, education, and personal section.

Built with Next.js (App Router, static export), Tailwind, and Fraunces + Inter fonts.

## Local dev

```
npm install
npm run dev
```

Opens on http://localhost:3000. If the coach app is already running on 3000, this will pick 3001.

## Build

```
npm run build
```

Produces a static `out/` directory. Deployed to Vercel automatically on push to `main`.

## Content

All content lives in `app/page.tsx`. Selected work, other experience, skills, and education are plain arrays at the top of the file. Edit and redeploy.

Resume PDF lives at `public/pdfs/Resume.pdf` and is regenerated from the HTML source at `../Resume website/allissa-balint/images/Resume.html` (not in this repo).
