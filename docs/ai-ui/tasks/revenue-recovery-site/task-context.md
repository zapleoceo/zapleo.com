# Revenue recovery site, 2026-10-02

## Objective

Make zapleo.com a client-facing site for Dmitriy Zaporozhets's current AI integration work. Add a dedicated page for a fixed-scope inbound-funnel diagnostic and keep the existing portfolio reachable.

## Confirmed context

- Live site and this repository both present Dmitriy as the current Jakarta branch director, although that role ended in August 2026 (`src/i18n/dict.ts`, `src/app/layout.tsx`).
- Next.js 16 App Router exports static HTML to `out/`; GitHub Actions deploys pushes to `main` (`next.config.ts`, `.github/workflows/deploy.yml`).
- Existing design uses dark surfaces, amber accents, Bricolage display, Literata body, mono labels (`src/app/globals.css`).
- Four locales are part of the existing site: EN, UK, RU, ID (`src/i18n/config.ts`).
- The local AI Solutions Consultant CV supports the case facts, but private client data must not be published.

## Assumptions requiring review after release

- The $5,000 fixed fee is an offer to test with buyers, not a validated conversion rate.
- `dima@zapleo.com` has DNS MX but mailbox delivery has not been proven in this task.
- The service can be delivered remotely in 10 business days when the client supplies a usable export.

## Existing work

The pre-existing untracked `test-results/` directory belongs to the user and must be preserved.
