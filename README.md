# AniXInsta — Instagram Video Downloader

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clean, minimal Instagram video downloader built with Next.js. Paste any Instagram post or reel URL and download the video in its original quality — no account, no watermarks, no limits.

> This tool is intended for personal use only. Please respect copyright laws and only download content you have the right to use.

---

## Features

- Download Instagram posts and reels
- Original HD quality
- No login or account required
- Multi-language support (EN, DE, ES, FR, RU)
- Dark / light theme
- Mobile friendly

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [next-intl](https://next-intl-docs.vercel.app/) — i18n
- [next-themes](https://github.com/pacocoursey/next-themes) — theming
- [shadcn/ui](https://ui.shadcn.com/) — UI components
- [TanStack Query](https://tanstack.com/query) — server state
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — form validation
- [Sonner](https://sonner.emilkowal.ski/) — toasts

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/anixinsta.git
   cd anixinsta
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the development server:

   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
yarn build
yarn start
```

## License

MIT
