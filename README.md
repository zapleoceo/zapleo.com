# zapleo.com — 2026 rebuild

Personal portfolio + agency showcase for **Dmitriy Zaporozhets** (zapleo).
Premium creator-style site with cinematic motion, multilang, and clean security audit.

## Stack

- **Next.js 16.2** (App Router, Turbopack, static export)
- **React 19.2** + TypeScript 5.9 strict
- **Tailwind CSS 4** (new engine)
- **Motion (Framer Motion 12)** + GSAP + Lenis — для wow-эффектов и smooth scroll
- **react-three-fiber + drei + postprocessing** — 3D hero
- **next-intl** — EN / UK / RU / ID, client-side switch без перезагрузки
- **react-hook-form + zod** — формы и валидация
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
│   ├── content/           # MDX для проектов и блога
│   └── messages/          # переводы (en.json, uk.json, ru.json, id.json)
├── biome.json
├── next.config.ts
└── package.json
```

## Команды

```bash
pnpm dev          # dev server + Turbopack
pnpm build        # production build → out/
pnpm lint         # Biome check
pnpm format       # Biome format
```

## Деплой

GitHub Actions on push to `main`:
1. `pnpm build` (генерирует `out/` со статикой)
2. `rsync` на сервер в `/var/www/zapleo.com/data/www/zapleo.com/` под юзером `zapleo.com`
3. nginx (FastPanel) сервит статику + Cloudflare CDN/SSL

## Локально: первый запуск

```bash
pnpm install
pnpm dev
```

Откроется `http://localhost:3000`.
