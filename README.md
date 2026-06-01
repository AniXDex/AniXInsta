<div align="center">
  <h1>AniXInsta</h1>
  <p><strong>Instagram video downloader — no account, no limits, no cost.</strong></p>
  <p>
    <a href="#features">Features</a> •
    <a href="#demo">Demo</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#build">Build</a> •
    <a href="#tech-stack">Tech Stack</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-15.2-black?logo=next.js" alt="Next.js 15" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19" />
    <img src="https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwindcss" alt="Tailwind v4" />
    <img src="https://img.shields.io/badge/License-MIT-yellow" alt="MIT" />
  </p>
  <br />
</div>

Paste any Instagram post or reel URL and download the video in its original quality — no sign-up, no watermarks, no rate limits.

> ⚠️ **Educational purpose only.** Only download content you have permission to access. Respect creators&rsquo; rights and Instagram&rsquo;s Terms of Service.

---

## Features

- Download Instagram posts &amp; reels in original HD quality
- No login or account required
- Dark / light theme with system auto-detection
- Fully responsive (mobile, tablet, desktop)
- Smooth glassmorphism UI
- Minimal &amp; fast

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router, Turbopack) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) + [tw-animate-css](https://github.com/) |
| Components | [shadcn/ui](https://ui.shadcn.com/) (Radix primitives) |
| Data Fetching | [TanStack Query](https://tanstack.com/query) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Toasts | [Sonner](https://sonner.emilkowal.ski/) |
| Icons | [Lucide](https://lucide.dev/) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/AniXDex/AniXInsta.git
cd AniXInsta

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── (home)/          # Homepage route group
│   │   ├── _components/ # Hero, Features, FAQ, Footer, etc.
│   │   ├── privacy/     # Privacy Policy page
│   │   └── terms/       # Terms of Service page
│   ├── api/             # API routes (Instagram proxy, download)
│   └── globals.css      # Global styles + animations
├── components/          # Shared UI components
│   ├── instagram-form   # Main download form
│   └── ui/              # shadcn primitives
├── features/            # Feature modules (API, theme, cookies)
├── hooks/               # Custom React hooks
└── lib/                 # Constants, utilities, site config
```

## License

[MIT](LICENSE) &copy; 2026 [AniXDex](https://github.com/AniXDex)
