# Graph Report - D:/Projects/zapleo.com-2026  (2026-05-29)

## Corpus Check
- 79 files · ~210,710 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 456 nodes · 661 edges · 51 communities (34 shown, 17 thin omitted)
- Extraction: 91% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 55 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Core App Shell|Core App Shell]]
- [[_COMMUNITY_Legacy Blade Pages|Legacy Blade Pages]]
- [[_COMMUNITY_AI-Dima Section|AI-Dima Section]]
- [[_COMMUNITY_Dependencies & Packages|Dependencies & Packages]]
- [[_COMMUNITY_Page Content Components|Page Content Components]]
- [[_COMMUNITY_Biome Linter Config|Biome Linter Config]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Portfolio & Work History|Portfolio & Work History]]
- [[_COMMUNITY_Legacy Brand & Site|Legacy Brand & Site]]
- [[_COMMUNITY_CICD Pipeline|CI/CD Pipeline]]
- [[_COMMUNITY_Brand Strategy|Brand Strategy]]
- [[_COMMUNITY_Site Architecture & Routes|Site Architecture & Routes]]
- [[_COMMUNITY_Typography & Layout|Typography & Layout]]
- [[_COMMUNITY_Colophon & AI Disclosure|Colophon & AI Disclosure]]
- [[_COMMUNITY_Visual Assets|Visual Assets]]
- [[_COMMUNITY_Tech Stack|Tech Stack]]
- [[_COMMUNITY_Identity & Audience|Identity & Audience]]
- [[_COMMUNITY_AI-Dima Pages|AI-Dima Pages]]
- [[_COMMUNITY_Sitemap & Routing|Sitemap & Routing]]
- [[_COMMUNITY_Work Case Studies|Work Case Studies]]
- [[_COMMUNITY_i18n Layout|i18n Layout]]
- [[_COMMUNITY_Project Instructions|Project Instructions]]
- [[_COMMUNITY_now Page|/now Page]]
- [[_COMMUNITY_Blog Article Partials|Blog Article Partials]]
- [[_COMMUNITY_Dev Config|Dev Config]]
- [[_COMMUNITY_Claude Settings Hooks|Claude Settings Hooks]]
- [[_COMMUNITY_Work Teaser Component|Work Teaser Component]]
- [[_COMMUNITY_Performance & SEO|Performance & SEO]]
- [[_COMMUNITY_AI Roadmap Redirect|AI Roadmap Redirect]]
- [[_COMMUNITY_Work Page|Work Page]]
- [[_COMMUNITY_War Timeline Entry|War Timeline Entry]]
- [[_COMMUNITY_Archive Comments Partial|Archive Comments Partial]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_Platform Icons|Platform Icons]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Source Repository|Source Repository]]
- [[_COMMUNITY_PullQuote Component|PullQuote Component]]
- [[_COMMUNITY_Archive Testimonial Fragment|Archive Testimonial Fragment]]
- [[_COMMUNITY_Archive Team Grid|Archive Team Grid]]

## God Nodes (most connected - your core abstractions)
1. `getDict()` - 40 edges
2. `Locale` - 24 edges
3. `isLocale()` - 23 edges
4. `zapleo.com 2026 Rebuild — Full Specification` - 21 edges
5. `compilerOptions` - 16 edges
6. `zapleo.com 2026 Rebuild — Project Overview` - 11 edges
7. `GitHub Actions Deploy Workflow` - 10 edges
8. `LangSwitcher()` - 9 edges
9. `Schema.org Person: Dmitriy Zaporozhets — Branch Director IT STEP Academy Jakarta, founderOf Zapleo + Pasijou` - 9 edges
10. `PageShell()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Archive: contact.blade.php — contact form + Google Maps embed (Dnipro coords 48.473491, 35.024612)` --semantically_similar_to--> `ContactPageContent Component`  [INFERRED] [semantically similar]
  .archive/views/pages/contact.blade.php → src/components/pages/contact-content.tsx
- `Archive: blog.blade.php — article listing (large file, categories, tags, pagination)` --semantically_similar_to--> `JournalPageContent Component`  [INFERRED] [semantically similar]
  .archive/views/pages/blog.blade.php → src/components/pages/journal-content.tsx
- `Archive: about.blade.php — agency about page (team photo + about_text from DB)` --semantically_similar_to--> `JourneyPageContent Component`  [INFERRED] [semantically similar]
  .archive/views/pages/about.blade.php → src/components/pages/journey-content.tsx
- `Archive: portfolio.blade.php — filterable portfolio grid with category filter + lazy-load IntersectionObserver` --semantically_similar_to--> `WorkPageContent Component`  [INFERRED] [semantically similar]
  .archive/views/pages/portfolio.blade.php → src/components/pages/work-content.tsx
- `Archive: portfolio-site.blade.php — individual portfolio item (notebook+tablet+phone mockups, customer review, technologies)` --semantically_similar_to--> `Case Study Link Gate: only pasijou and apcu have /work/[slug]/ links`  [INFERRED] [semantically similar]
  .archive/views/pages/site.blade.php → src/components/pages/work-content.tsx

## Hyperedges (group relationships)
- **Full Tech Stack (Next.js + React + Tailwind + Motion + R3F + next-intl + Biome + pnpm)** —  [EXTRACTED 1.00]
- **Brand Identity System (Owner + Positioning + Voice + Visual + Honesty + Anti-goals)** —  [INFERRED 0.95]
- **CI/CD Pipeline (Trigger + Concurrency + Build + Lint + Rsync + CF Purge + Health Check + SSH Secrets)** —  [EXTRACTED 1.00]

## Communities (51 total, 17 thin omitted)

### Community 0 - "Core App Shell"
Cohesion: 0.08
Nodes (43): generateMetadata(), LocaleColophonPage(), CTABlock(), CursorDot(), Footer(), Hero(), LocaleHero(), LocaleHeroProps (+35 more)

### Community 1 - "Legacy Blade Pages"
Cohesion: 0.06
Nodes (44): Archive: about.blade.php — agency about page (team photo + about_text from DB), Archive: article.blade.php — blog post with prev/next nav, nested comments (reCAPTCHA), author aside, Archive: article-comments.blade.php — recursive partial for nested comment threads, Archive: blog.blade.php — article listing (large file, categories, tags, pagination), Archive: contact.blade.php — contact form + Google Maps embed (Dnipro coords 48.473491, 35.024612), DB about_translations EN: 'digital agency combining marketing, strategy, design and engineering; JS (Node.js, React.js, Angular.js) and CMS (WP, OpenCart) specialists', DB: Most recent article — digital-footprint-ai-outsourcing-zapleosoft (2025-07-22), author user_id=7, Archive: zapleo_db_backup.sql — MariaDB dump of old Laravel CMS (zapleo_com_db) (+36 more)

### Community 2 - "AI-Dima Section"
Cohesion: 0.06
Nodes (15): metadata, SECTIONS, LangSwitcher(), LOCALE_LABEL, LOCALES, metadata, metadata, PRINCIPLES (+7 more)

### Community 3 - "Dependencies & Packages"
Cohesion: 0.06
Nodes (35): dependencies, class-variance-authority, clsx, gsap, @hookform/resolvers, lenis, lucide-react, motion (+27 more)

### Community 4 - "Page Content Components"
Cohesion: 0.11
Nodes (28): ColophonPageContent Component, ContactPageContent Component, JournalPageContent Component, JourneyPageContent Component, LangPatcher Component, LocaleHero Component, NowPageContent Component, PageShell Component (+20 more)

### Community 5 - "Biome Linter Config"
Cohesion: 0.09
Nodes (22): source, assist, actions, enabled, files, ignoreUnknown, formatter, enabled (+14 more)

### Community 6 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 7 - "Portfolio & Work History"
Cohesion: 0.17
Nodes (15): Archive: portfolio.blade.php — filterable portfolio grid with category filter + lazy-load IntersectionObserver, Archive: portfolio-site.blade.php — individual portfolio item (notebook+tablet+phone mockups, customer review, technologies), Timeline: apcu.ua ships, 2018, Dnipro UA, Timeline: Veranda, 2023, Vietnam — second F&B project, Case Study Link Gate: only pasijou and apcu have /work/[slug]/ links, Work Data (WORK constant — hospitality + agency eras), WorkPageContent Component, Project: apcu.ua — Cosmetics & Perfumery Association of Ukraine, 2018–present, WordPress (+7 more)

### Community 8 - "Legacy Brand & Site"
Cohesion: 0.17
Nodes (12): Archive Brand: Primary accent colour #fcb117 (orange) — used in logo top_orange, hover states, CTA buttons, Archive: home.blade.php — old Zapleo agency homepage (Laravel, parallax day/evening/night hero, nav 8 items), Archive Nav: Home, About, Team, Blog, Portfolio, Services, Testimonials, Contact + EN/RU/UA locale switcher, Archive Hero: Parallax day/evening/night multi-layer SVG animation with CSS keyframes, Archive i18n: EN/RU/UA locale switcher via setlocale route (Laravel), Infra: nginx/Debian static via rsync, GitHub Actions CI, Cloudflare TLS+Analytics, Site Tech Stack: Next.js 16.2 / TS 5.9 / Tailwind 4 / Motion 12 / GSAP / react-three-fiber / next-intl / Biome / pnpm, Type Stack: Fraunces (display) / Newsreader (body) / JetBrains Mono (+4 more)

### Community 9 - "CI/CD Pipeline"
Cohesion: 0.18
Nodes (12): Lint Step: Biome (continue-on-error for young codebase), Cloudflare Cache Purge Step (optional, post-deploy), Deploy Concurrency Guard, Post-deploy Health Check (HTTP 200 on https://zapleo.com), Rsync Deploy: out/ → /var/www/zapleo.com (--delete, exclude .well-known), SSH Deploy Secrets: DEPLOY_SSH_KEY, DEPLOY_KNOWN_HOSTS, DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, Deploy Trigger: Push to main branch, GitHub Actions Deploy Workflow (+4 more)

### Community 10 - "Brand Strategy"
Cohesion: 0.18
Nodes (12): Anti-goals (Explicit Exclusions), Secondary Audience: Hiring manager / agency partner, Tertiary Audience: Press / fellow creators / Ukraine diaspora peers, Brand Voice: Monocle editorial + tech founder dry candor, Color Tokens (oklch-based design system), Content Storage: MDX in src/content/{work,journal,now}/<locale>/<slug>.mdx, Image Pipeline: sharp → avif+webp+jpg, 4 sizes, LQIP base64 blur-up, Layout Grammar: Asymmetric 12-col grid, diagonal clip-paths, sticky elements (+4 more)

### Community 11 - "Site Architecture & Routes"
Cohesion: 0.18
Nodes (11): react-three-fiber + drei + postprocessing (3D hero), Content Hard Blockers for Launch (headlines, timeline, portfolio, trusted-by footnotes, media), Portfolio Project Candidates (opentv.media, keddr.com, apcu.ua + 12 others), Single R3F Scene: Low-poly globe on /journey (Kyiv+Jakarta pins), Route /contact — Chapter 06 (no form by default, email + WhatsApp + LinkedIn), Route / — Home (Chapter 00 · Intro), Route /journal — Chapter 05 · Long-form essays, Route /journey — Chapter 03 · Timeline (replaces /about) (+3 more)

### Community 12 - "Typography & Layout"
Cohesion: 0.24
Nodes (6): fraunces, jbMono, metadata, newsreader, JsonLd(), ScrollReveal()

### Community 13 - "Colophon & AI Disclosure"
Cohesion: 0.22
Nodes (6): metadata, AI_ROWS, ColophonPageContent(), FONTS, INFRA, STACK

### Community 14 - "Visual Assets"
Cohesion: 0.36
Nodes (9): File / Document Icon, File / Document Icon, Globe / Web Icon, Globe / World Icon, Next.js Wordmark Logo, Open Graph Social Share Card — zapleo.com, OpenGraph Social Preview Image, Vercel Logo (+1 more)

### Community 15 - "Tech Stack"
Cohesion: 0.22
Nodes (9): Motion (Framer Motion 12) + GSAP + Lenis, next-intl (EN/UK/RU/ID i18n), pnpm@9 (package manager), zapleo.com 2026 Rebuild — Project Overview, React 19.2 + TypeScript 5.9 strict, Tailwind CSS 4, i18n Strategy: 4 locales (EN/UK/RU/ID), locale-differentiated content not translation, Motion Choreography (scroll-triggered, hover, cursor, Lenis, hero b-roll, R3F) (+1 more)

### Community 16 - "Identity & Audience"
Cohesion: 0.31
Nodes (9): Dmitriy Zaporozhets (zapleo), Primary Audience: Asian career-switcher / IT STEP prospective student, Honesty Layer: AI Creator Transparency (footer disclosure + colophon), IT STEP Academy Jakarta, Route /colophon (AI disclosure, stack, hosting indicator), Success Metrics (90 days post-launch), Trusted-by Clients: OLX, Dell, Intel, Microsoft (honesty pattern, footnoted), Vibe Coding (brand / AI mentor product for SEA) (+1 more)

### Community 17 - "AI-Dima Pages"
Cohesion: 0.68
Nodes (8): AI-Dima Hub Page, AI-Dima Kids Page, AI-Dima Playbook Page, AI-Dima Resources Page, AI-Dima Roadmap Page, AI-Roadmap Redirect Page, LangSwitcher Component, AI-Dima EN-only Sub-site

### Community 18 - "Sitemap & Routing"
Cohesion: 0.33
Nodes (4): AI_DIMA_ROUTES, EN_ROUTES, NON_EN_LOCALES, SUB_ROUTES

### Community 21 - "Project Instructions"
Cohesion: 0.40
Nodes (5): Next.js Agent Rules, Graphify Knowledge Graph Instructions, Build Step: pnpm build → out/ (Next.js static export), graphify-out/ Knowledge Graph Output Directory, Next.js 16.2 (App Router, Turbopack, static export)

### Community 22 - "/now Page"
Cohesion: 0.50
Nodes (4): External Reference: nownownow.com — /now page convention, NowPageContent Component, NowThen Component (sticky Now column + historical cards), NowThen Layout: sticky left (now + meta KV list) + scrollable right (historical era cards with year watermark)

### Community 27 - "Performance & SEO"
Cohesion: 0.67
Nodes (3): Audit Targets: Lighthouse 95+, securityheaders A+, mozilla observatory A+, WCAG 2.2 AA, Performance Budget: LCP ≤1.8s, INP ≤200ms, CLS ≤0.05, JS ≤180kb above-fold, SEO / Schema: Person, CreativeWork, BlogPosting, Organization schemas + hreflang

## Ambiguous Edges - Review These
- `Work Case Study Page [slug]` → `Content Delegation Pattern (EN + locale share *Content components)`  [AMBIGUOUS]
  src/app/work/[slug]/page.tsx · relation: conceptually_related_to
- `File / Document Icon` → `Open Graph Social Share Card — zapleo.com`  [AMBIGUOUS]
  public/file.svg · relation: conceptually_related_to

## Knowledge Gaps
- **156 isolated node(s):** `$schema`, `enabled`, `clientKind`, `useIgnoreFile`, `ignoreUnknown` (+151 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Work Case Study Page [slug]` and `Content Delegation Pattern (EN + locale share *Content components)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `File / Document Icon` and `Open Graph Social Share Card — zapleo.com`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `getDict()` connect `Core App Shell` to `Colophon & AI Disclosure`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `zapleo.com 2026 Rebuild — Full Specification` connect `Brand Strategy` to `CI/CD Pipeline`, `Site Architecture & Routes`, `Tech Stack`, `Identity & Audience`, `Performance & SEO`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `Locale` connect `Core App Shell` to `AI-Dima Section`, `i18n Layout`, `Colophon & AI Disclosure`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `$schema`, `enabled`, `clientKind` to the rest of the system?**
  _164 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Core App Shell` be split into smaller, more focused modules?**
  _Cohesion score 0.07578947368421053 - nodes in this community are weakly interconnected._