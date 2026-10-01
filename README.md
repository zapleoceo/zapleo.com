# zapleo.com — 2026 rebuild

Client-acquisition site and selected portfolio for **Dmitriy Zaporozhets** (Zapleo).
The primary offer is a fixed-scope revenue-recovery diagnosis at `/revenue-recovery/`.
The buyer path and launch checks are documented in [`docs/SITE_CLIENT_ACQUISITION_PLAN.md`](docs/SITE_CLIENT_ACQUISITION_PLAN.md).

## Stack

- **Next.js 16.2** (App Router, Turbopack, static export)
- **React 19.2** + TypeScript 5.9 strict
- **Tailwind CSS 4** (new engine)
- EN / UK / RU / ID static routes with typed site copy in `src/content/recovery.ts`
- No server-side lead form; service CTA opens a prefilled email
- **Biome** — линтер + форматтер в одном (заменяет ESLint+Prettier)
- **pnpm@9** — package manager

## Структура

```
zapleo.com-2026/
├── .archive/              # research dump (gitignored): legacy DB, views, media
├── .github/workflows/     # CI/CD (deploy.yml)
├── infra/                 # nginx config, deploy scripts
├── public/                # статика (favicon, robots, og-image)
├── src/
│   ├── app/
│   │   └── [locale]/      # i18n routing
│   ├── components/
│   ├── lib/
│   ├── content/           # typed service content in four languages
│   └── i18n/              # shared interface and older portfolio translations
├── biome.json
├── next.config.ts
└── package.json
```

## Команды

```bash
pnpm dev          # dev server + Turbopack
pnpm build        # production build → out/
pnpm test          # Playwright smoke and responsive checks
```

## Деплой

GitHub Actions on push to `main`:
1. `pnpm build` (генерирует `out/` со статикой)
2. `rsync` на сервер в `/var/www/zapleo.com/data/www/zapleo.com/` под юзером `zapleo.com`
3. nginx (FastPanel) сервит статику + Cloudflare CDN/SSL

The static export cannot enforce Next.js runtime `headers`; nginx/Cloudflare own those rules.

## Локально: первый запуск

```bash
pnpm install
pnpm dev
```

Откроется `http://localhost:3000`.
