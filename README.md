# Ali Mokdad — Portfolio

Personal portfolio site: dark theme with red accents and a powerlifting twist (the scroll indicator loads a barbell from an empty 20kg bar to a 470kg total as you read).

Built with **Next.js 15**, **Tailwind CSS 4**, and **Framer Motion**. Fully static — no backend, no database.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Edit content

All copy and data live in one file: `src/data/content.ts` — contact links, skills, experience bullets, project cards, lift PRs, education. Edit it and the whole site updates.

Assets in `public/`: `profile.jpg` (headshot) and `Ali-Mokdad-CV.pdf` (the CV download).

## CV

The CV is a page on the site itself: `/cv` — white, print-optimized, and built from the same `src/data/content.ts` data as the rest of the site. After editing content, regenerate the downloadable PDF with the dev server running:

```powershell
& "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --headless --no-pdf-header-footer --print-to-pdf="public\Ali-Mokdad-CV.pdf" http://localhost:3000/cv
```

## Contact form

The contact form posts to formsubmit.co (no account needed). **The first submission triggers an activation email to ali.a.mk@hotmail.com — click the confirmation link in it once, and all future messages are delivered.**

## Deploy to Vercel (alimokdadportfolio.vercel.app)

1. Push this repo to GitHub (e.g. `github.com/alimkdd/ali-mokdad-portfolio`).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo — Next.js is auto-detected, no settings needed.
3. In the import screen set the **project name** to `alimokdadportfolio` — that makes the URL `alimokdadportfolio.vercel.app`.
4. Deploy. Every push to the default branch redeploys automatically.
