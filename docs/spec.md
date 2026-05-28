# zapleo.com — Specification (2026 rebuild)

> Personal brand of **Dmitriy Zaporozhets** — Ukrainian-born tech operator, ex-agency owner (Dnipro, 2010-2022), current Branch Director @ IT STEP Academy Jakarta, AI-augmented creator launching Vibe Coding in Indonesia.
>
> One line: **«Editorial Monocle × A24 in warm espresso dark — Kyiv archive on the left, Jakarta present on the right, AI mentor in the middle.»**

---

## 1. Positioning

### Hook (3 seconds)
> «I shipped 200+ products from a Kyiv agency. Now I run an IT academy in Jakarta and teach Asia how to build with AI.»

### Three positioning truths
1. **Bridge** — between Ukrainian engineering depth and Asian career velocity
2. **Operator + craftsman** — not "consultant", not "influencer", not "guru"
3. **AI-augmented, human-directed** — same line as Vibe Coding brand strategy

### Brand voice
- **Not used:** "passionate", "transforming", "synergy", "AI-powered", "thought leader"
- **Used:** specific years, named products, named clients, concrete numbers, dry humor
- **Tone:** Monocle Magazine editorial + tech founder dry candor (Pieter Levels meets Tyler Brûlé)

---

## 2. Audience

### Primary (60% of traffic intent)
**Asian career-switcher / IT STEP prospective student.** 22-35, Jakarta/Manila/KL/Bangkok, English OK, considering bootcamp or self-study. Comes from Vibe Coding IG / TikTok funnel. Wants: proof Dmitriy is real, credible, accessible.

### Secondary (25%)
**Hiring manager / agency partner.** Looking for fractional engineering lead, project rescuer, AI-pipeline architect. Comes from LinkedIn / referrals. Wants: case studies, current availability, contact.

### Tertiary (15%)
**Press / fellow creators / peers from Ukraine diaspora.** Wants: story, opinion, what Dmitriy is building now.

---

## 3. Information Architecture

### Sitemap (chapter-based, not menu-based)

```
/                       Hero + chapter overview (default EN)
/work                   Chapter 02 · Work
  /work/[slug]          One project = one long-scroll cinematic page
/journey                Chapter 03 · Now → Then timeline (replaces /about)
/now                    Chapter 04 · What I'm doing this month (nownownow.com style)
/journal                Chapter 05 · Long-form essays (MDX)
  /journal/[slug]       Single essay
/contact                Chapter 06 · Direct line
/colophon               Colophon (replaces classic /tech-stack)
                        Honest disclosure: which tools, which AI, what's automated.
                        AI Creator transparency, same as Vibe Coding strategy.
```

### Locales
- `/` → English (default)
- `/uk/` → Ukrainian (heritage / Kyiv diaspora)
- `/ru/` → Russian (legacy CIS market)
- `/id/` → Bahasa Indonesia (IT STEP audience)

**Per-section override allowed.** RU/UA/ID variants are NOT line-by-line translations — they reorder content to lead with what matters to that audience (see §9).

### What is NOT on the site
- Blog comments
- Newsletter modal popup
- "Hire me / Available now" badge (subtle weather indicator in colophon instead)
- "Buy me a coffee", Gumroad embeds, Sponsor buttons
- Lottie mascots, isometric illustrations, generic AI-orb hero
- Bento grid hero (2024 cliché)
- Hubspot/Calendly embed (link only)
- "As featured in" press strip (only Trusted by, with footnotes)

---

## 4. Page-by-page wireframe spec

### 4.1 `/` — Home (Chapter 00 · Intro)

**Above the fold (full viewport hero):**
- **Silent b-roll loop, full-bleed**, grain overlay 8% opacity
   - 3 cuts cycling: Jakarta street at dusk → typing hand close-up at warm desk → Carpathian mountain wide shot. Each ~6s, crossfade 800ms.
   - Optional audio toggle (16px monospace text "🔊 sound" lower-right, off by default)
- **Editorial type stack center-left:**
   - `Eyebrow:` `EST. 2010 · DNIPRO → JAKARTA` (mono, 11px, warm cream at 60%)
   - `Headline:` variable serif, fluid clamp(48px, 9vw, 140px), weight 280 → 720 tied to scroll velocity. Two lines max.
   - `Sub:` 18px display, one line: «Software operator. Indie products. AI-augmented mentor.»
- **Scroll affordance** lower-center: thin vertical line + mono caption `CH 01 / 05` (no arrow icon)
- **Quiet switcher** lower-right corner: `EN · UK · RU · ID` (mono, no flags, hover underline)

**Below fold (single scroll, no nav jumps):**

1. **Now / Then split** (asymmetric 7/5 columns, sticky left)
   - Left (sticky, larger): "Now — Jakarta · Dec 2026 · Building IT academy branch, shipping AI tutor for SEA learners."
   - Right (scrolling): Then-archive — 3 cards passing by (Kyiv office 2014, EdTech client 2018, Bali 2024), each with year stamp + 1 line.

2. **Trusted-by strip** (honesty pattern, §see-pattern)
   - Monochrome logos at 35% opacity: OLX · Dell · Intel · Microsoft + 4 more
   - Caption (mono 10px, justified): `Contributed to projects via independent studio · 2010–2022`
   - **Hover-reveal footnote per logo**: e.g. "OLX — frontend dev sprints via [client agency], 2014-2016"

3. **Selected work (3 tiles only)** — full-bleed cinematic crops, hover = morph to project's color palette
   - opentv.media / keddr.com / apcu.ua — three best to lead with
   - Bottom link: `See all 12 projects → /work` (single underline, no button)

4. **Voice/quote zone** — pull quote in oversized variable serif, mix-blend-mode: difference over a warm gradient mesh

5. **CTA section** (the only "section" with explicit CTA):
   - Single line: «Working on something interesting? Skip the form.» + email link with click-to-copy
   - WhatsApp link as secondary (text only, no green button — matches Indonesia/SEA usage)

6. **Footer** (sparse): colophon link, sitemap, year mark, "Built with AI assistance — humanly directed" honesty line.

---

### 4.2 `/work` — Chapter 02 · Work

- **List view**, not grid. Vertical stack of project teasers.
- Each teaser = full-width row, 60vh, with:
   - Year (mono 12px top-left)
   - Project name (variable serif huge, 80-120px)
   - One-line role description (display 18px)
   - Tags (mono 11px row: `EDTECH · UA · 2015-2018`)
   - On hover: row expands to 70vh, color palette of project floods background as oklch gradient
- Click → `/work/[slug]`
- Filters: by year decade, by industry, by role — implemented as keyboard-accessible toggle row, no checkboxes (mono toggle pills with click-to-add active state)

#### `/work/[slug]` — Single project (long-scroll cinematic)

Template:

1. **Cover** — full-bleed image or video, project name overlaid bottom-left with year-stamp
2. **Stats bar** — 4 numbers in mono 14px (year range / role / team size / tech stack)
3. **The brief** — 2 short paragraphs, editorial serif body
4. **Challenge / Approach / Outcome** — 3 sections with marginalia footnotes (small mono text in left margin desktop, inline mobile)
5. **Gallery** — full-bleed cinematic crops, NOT slideshow. Pinned title while images scroll past.
6. **Pull-quote from client** if available, mix-blend-mode display
7. **Tech ledger** — table-like list of stack with one-line justification each
8. **Honest credits** — "I did X, the team did Y, the AI did Z" — same transparency line
9. **Next project link** — full-bleed, click anywhere

---

### 4.3 `/journey` — Chapter 03 · Timeline

Replaces traditional `/about`. Year-stamped scroll-controlled timeline:

```
2010 ─ Kyiv. Started Zapleo, web agency, two laptops.
2012 ─ First big client: Intel (subcontract, brand microsite).
2014 ─ OLX product sprints. Team of 8.
2016 ─ Built keddr.com — Ukrainian tech media. Sold 2019.
2018 ─ Apcu.ua, opentv.media. Politics getting heavy.
2020 ─ Pandemic. Remote-first agency. Lost half the team.
2022 ─ February 24. Moved family to Bali. Shut Zapleo agency.
2023 ─ Three failed product attempts in Bali.
2024 ─ Joined IT STEP as consultant. Met the SEA market.
2025 ─ Moved to Jakarta. Branch Director track.
2026 ─ Vibe Coding launch. AI-augmented mentor positioning.
```

- Each year: photo (small, cinematic crop) + 1-2 line text + optional pull-out quote
- Left rail: sticky decade scrubber (2010s / 2020s / Now)
- Right rail: marginalia (where I was that year, what I was reading)
- End of timeline: dynamic "Currently:" pulled from `/now` content

---

### 4.4 `/now` — Chapter 04

Standalone monthly-updated page (nownownow.com / derek-sivers pattern).

- Header: "What I'm doing right now · Updated {date}"
- 6 sections, each ≤ 5 lines:
   - Living — Jakarta, Menteng
   - Working on — IT STEP Branch ops, Vibe Coding course launch
   - Building — zapleo.com (yes, this), Vibe Coding LMS, AI tutor prototype
   - Reading — current 2 books
   - Learning — current new skill
   - Open for — 1 line about what kind of conversations I want

- Update cadence: 1st of every month, via MDX commit. Last-updated date prominently shown.
- This page IS the credibility — proves the site is alive.

---

### 4.5 `/journal` — Chapter 05 · Long-form

Essay archive. Topics: tech career in SEA, AI workflow honesty, Ukraine reflection, indie founder math.

- List view (NOT cards): full-width rows with year, title, 2-line teaser, est. reading time, language flag (some essays only in one lang — that's OK).
- Single post: editorial typography master class. Drop caps. Pull quotes. Marginalia footnotes. Hand-tuned line lengths. Reading progress as thin top bar.

---

### 4.6 `/contact` — Chapter 06

- **No form by default.** Honest, brutal contact page:
   - Email (click-to-copy)
   - WhatsApp (link, prefilled message)
   - LinkedIn (link)
   - "What you'll get: a reply within 48h on weekdays, in your timezone if you tell me where you are."
- **Form is optional fallback** — toggleable "show form" link if user prefers. Form = 3 fields max (name, contact, message), submit via Web3Forms.
- A small "Why no form?" footnote — design choice = transparency signal.

---

### 4.7 `/colophon`

- Stack list (Next.js, R3F, etc) — same as README but human-narrated
- AI disclosure: «This site was designed and partly authored with Claude. Code reviewed by me. Photos & b-roll: mine. Voice & decisions: 100% mine.»
- Hosting/uptime indicator (small green/amber dot, fetched from status JSON)
- Source code link to github.com/zapleoceo/zapleo.com
- Last deploy timestamp (auto-injected at build time)
- WCAG 2.2 compliance note + link to a11y statement

---

## 5. Visual direction

### Aesthetic ID
**Warm espresso dark + Monocle editorial + A24 cinematic restraint + tiny touches of indie web brutalism (marginalia, year stamps, mono captions).**

### Color tokens (`oklch()`)

```css
/* base */
--bg-base:       oklch(14% 0.020 60);    /* near-black warm, #0e0a05-ish */
--bg-elevated:   oklch(18% 0.030 65);    /* card surfaces */
--bg-deep:       oklch(10% 0.015 55);    /* hero void */

/* text */
--text-primary:  oklch(95% 0.030 80);    /* warm cream, ~#f5ecd9 */
--text-muted:    oklch(70% 0.030 70);
--text-faint:    oklch(50% 0.025 65);

/* accents */
--accent-amber:  oklch(82% 0.180 70);    /* warm amber primary */
--accent-rust:   oklch(55% 0.180 35);    /* rust for emphasis */
--accent-mint:   oklch(78% 0.140 165);   /* one mint moment per page max */

/* glass overlays */
--glass-thin:    color-mix(in oklch, var(--bg-elevated) 60%, transparent);
--glass-thick:   color-mix(in oklch, var(--bg-elevated) 85%, transparent);

/* grain & light */
--grain-opacity: 0.06;
--bloom-warm:    radial-gradient(ellipse at 70% 30%, oklch(60% 0.18 50 / 0.18), transparent 60%);
```

### NO list (locked)
- ❌ White or gray backgrounds
- ❌ Inter, Geist, generic SaaS sans
- ❌ Purple anywhere
- ❌ Symmetric grids
- ❌ Plain cards (border + radius + padding cards)
- ❌ Bento hero
- ❌ Generic AI gradient orbs
- ❌ Tailwind defaults straight-up

---

## 6. Typography

```
Display (headlines, hero, project titles):
  PP Editorial New (Pangram Pangram) — variable, Cyrillic-aware
  Fallback: GT Sectra Display, Migra

Body (essays, long-form):
  PP Editorial New Italic for callouts
  Söhne Buch (Klim) for body, OR Tiempos Text — 17-19px line-height 1.6
  Fallback: Newsreader (variable, free Google font with Cyrillic)

Mono (eyebrows, year stamps, marginalia, switcher):
  PP Neue Montreal Mono / JetBrains Mono / Berkeley Mono
  10-13px, letter-spacing +2%, uppercase for eyebrows

Cyrillic-tuned variants:
  RU/UA: Migra Cyrillic, или Söhne Cyrillic, или Druk Cyrillic for display
  Avoid Cyrillic-fallback systems that fall to Arial/Times

Indonesian:
  Standard Latin variants of display + body, all fonts above support full Latin extended
```

### Type scale (fluid)

```
hero    : clamp(64px, 11vw, 180px) / 0.92 / -0.02em
h1      : clamp(40px,  6vw, 88px) / 1.0 / -0.015em
h2      : clamp(28px,  4vw, 56px)
h3      : clamp(20px,  2.5vw, 32px)
body    : clamp(16px, 1.1vw, 19px) / 1.6
small   : 14px / 1.4
mono-xs : 10px uppercase tracking +0.12em
mono-sm : 12px / 1.4
```

### Variable font motion
- Display font weight bound to scroll velocity (clamped 280 → 720). Subtle — should feel like the page "breathes" while you scroll. Disabled when `prefers-reduced-motion`.

---

## 7. Motion choreography

### Scroll-triggered (IntersectionObserver-based, NOT framework scroll plugins for above-fold)

- **Fade + 12px Y-rise**, stagger 60-90ms between siblings, ease `cubic-bezier(0.2, 0.8, 0.2, 1)`, duration 380-520ms
- **Variable weight** on display headings tied to scroll velocity (see typography)
- **Section transitions** = diagonal clip-path reveal (not fade) between major chapter blocks. Use `clip-path: polygon(...)` with `transition` 700ms.

### Hover

- Project tiles: `transform: scale(1.015) translate(-4px, -4px)`, shadow grows: `box-shadow: 0 32px 60px -20px oklch(var(--accent-amber) / 0.25)`. 320ms.
- Links: thin underline expands from 0 → 100% width, 240ms.
- Logos in trusted-by: opacity 35% → 100% + caption footnote fade in 200ms.

### Cursor
- Subtle cursor: 6px filled circle, mix-blend-mode: difference, lags pointer by ~30ms (Lenis-style ease). Disabled on touch.

### Lenis (smooth scroll)
- Enabled globally, ease 0.1, lerp 0.08. Disabled on `prefers-reduced-motion`.

### Hero b-roll
- 3 silent loops with 800ms crossfade. Pauses when tab not visible (`document.visibilityState`). Lazy-loaded after first paint.

### One 3D moment
- **Single R3F scene** on `/journey` — a slowly orbiting low-poly globe with Kyiv + Jakarta + (current location) pins. Renders only on viewport intersection. Static screenshot fallback for low-end devices and `prefers-reduced-motion`.

---

## 8. Layout grammar

- **Asymmetric** 12-col grid with 7/5, 8/4, 5/7 splits. Never 6/6.
- **Diagonal clip-paths** between major section transitions (subtle ~3° angle, not aggressive).
- **Sticky elements**: chapter title sticks while content scrolls past underneath (left rail, desktop only).
- **Overlapping sections**: hero overlaps below-fold by 8vh, creates depth.
- **Full-bleed images** with editorial body text in 5/7 right column.
- **Mobile**: collapses to single column, marginalia inlines below paragraph, sticky left rail becomes top-pinned chapter pill.

---

## 9. i18n strategy

### Routing (next-intl)
- Default route prefix-less: `/` = `/en/` rewritten
- Other: `/uk/`, `/ru/`, `/id/`
- Client-side switch (next-intl Link), no full reload, route segments preserve current page

### Content strategy per locale

**Critical: each locale has different lead content, not translation.**

| Section | EN (default) | UK | RU | ID |
|---|---|---|---|---|
| Hero headline | Bridge-positioning | Kyiv-archive emphasis | CIS-market emphasis | Jakarta/IT STEP emphasis |
| Trusted-by | OLX/Dell/Intel/MS | Same + Ukrainian mentions | Same + RU/CIS clients | Local SEA mentions if any |
| Journey | Full timeline | Heavy on 2014-2022 | Same as UK | Heavy on 2024-now |
| Now | EN ops | EN | EN | Bahasa intro + EN body |
| Journal | Mixed lang articles | UK-only essays subset | RU-only subset | ID essays (when ready) |

This means each locale = ~70% shared content + ~30% locale-specific. Stored as separate MDX files per locale, not auto-translated.

### Switcher UX
- Footer-anchored, monospace `EN · UK · RU · ID`, no flags
- Hover shows native name: `English · Українська · Русский · Bahasa Indonesia`
- Switching preserves scroll position when possible
- localStorage remembers preference, URL is source of truth

---

## 10. SEO / schema / metadata

### Per-page metadata
- Distinct OG image per route (auto-generated via Satori in build, branded warm dark template)
- `Person` schema on `/` and `/journey` (full structured: name, jobTitle, alumniOf, knowsAbout, sameAs[Linkedin/GitHub/X/etc])
- `CreativeWork` schema on each `/work/[slug]`
- `BlogPosting` schema on each `/journal/[slug]`
- `Organization` schema (Zapleo legacy entity) linked from `Person`

### Sitemap & robots
- Auto-generated by Next.js (`sitemap.ts`, `robots.ts`)
- Per-locale hreflang tags on all canonical pages
- One sitemap.xml with all locales properly linked

### Performance budget (Core Web Vitals)
- LCP ≤ 1.8s
- INP ≤ 200ms
- CLS ≤ 0.05
- Hero b-roll: lazy after LCP, total JS ≤ 180kb gzipped above-fold
- All fonts variable + self-hosted, `font-display: swap`, max 2 weights subset

### Audits target
- Lighthouse: 95+ all four categories
- securityheaders.com: A+ (via nginx, see infra)
- mozilla observatory: A+
- WCAG 2.2 AA across all locales (incl. Cyrillic fonts proper letter-spacing for legibility)

---

## 11. Tech / build approach

### Stack (already scaffolded — see README)
- Next.js 16.2 (App Router) + React 19 + TS strict
- Tailwind CSS 4 (oklch-native)
- Motion 12 + GSAP + Lenis
- React Three Fiber + drei (one scene only)
- next-intl (4 locales)
- Biome (lint+format)

### Content storage
- MDX in `src/content/{work,journal,now}/<locale>/<slug>.mdx`
- Frontmatter: title, year, tags, role, cover, gallery[], language
- Build-time TypeScript types via contentlayer-like custom loader (no contentlayer — abandoned 2024)

### Image pipeline
- Source: `.archive/media/` (from legacy) + user-provided new shots
- Build-time: sharp transforms to `avif` + `webp` + jpg fallback, 4 sizes each
- LQIP base64 inlined for blur-up

### Deploy
- GitHub Actions → static export → rsync → nginx static (already working — see `.github/workflows/deploy.yml`)
- CDN: Cloudflare in front (already active)
- After Phase 5: add CF cache purge step to workflow (CF API token as secret)

---

## 12. Content I need from you

### Hard blockers (can't write copy without these)

1. **3 headline candidates** — your own words for the hero line. Or approve mine: «I shipped 200+ products from a Kyiv agency. Now I run an IT academy in Jakarta and teach Asia how to build with AI.»
2. **The journey timeline** — your own words for the 12 years. I drafted §4.3 above; you mark what's wrong.
3. **5-7 portfolio projects to actually feature** — out of the full list (KD, Loccalls, Solefit, Implan, PapaGREEN, prodecorclub, holidaydecor, Tracksoundsgood, Nichebox + hairdooz, mobilshina, filler.bar, keddr, kyiinfo-archive, opentv.media, apcu.ua). Pick the most defensible & visually richest.
4. **Trusted-by footnotes** — for each big-client logo: one factual line. "OLX: frontend dev sprints via X agency, 2014-2016." Etc. **Without this we can't put logos up honestly.**
5. **Photo / b-roll material** — 3 cinematic still photos (Kyiv era, Bali era, Jakarta now), or signal to use what's in `.archive/media/`. Plus 3 short silent video loops for hero (workspace / street / nature). If none — I'll source stock that fits brief, but identity loss.
6. **WhatsApp + Email + LinkedIn** — final contact details, formatted exactly as you want them displayed.

### Soft blockers (can write draft without, refine after)
- About / journey copy in your own voice
- 1-2 sample essays for Journal launch
- Now page content for current month
- Press / speaking history if any

### Optional bonus
- Voice clip 15-30s for the hero audio-toggle (you reading hero line in EN)
- Personal logo / signature SVG (otherwise typed wordmark)

---

## 13. Phased delivery (estimated effort)

| Phase | Scope | Effort | Status |
|---|---|---|---|
| **0** | Server + access setup | ~30m | ✅ done |
| **1** | Content audit + research | ~2h | ✅ done |
| **2** | Project scaffold + Git | ~1h | ✅ done |
| **3** | CI/CD pipeline | ~1h | ✅ done |
| **4** | Design system (tokens, typography, motion primitives, component library) | ~6h | next |
| **5** | Home + hero with b-roll + chapter scroll skeleton | ~8h | |
| **6** | `/work` index + 1 reference case study template | ~10h | |
| **7** | `/journey` (timeline + R3F globe) | ~6h | |
| **8** | `/journal` + `/now` + `/contact` + `/colophon` | ~6h | |
| **9** | i18n routing + locale-specific content shells (4 locales) | ~5h | |
| **10** | SEO, schema, OG image generator, sitemap, hreflang | ~3h | |
| **11** | Performance pass, Lighthouse 95+, a11y audit, header hardening | ~4h | |
| **12** | Content fill (all real copy/media in 4 locales) | depends | needs §12 inputs |
| **13** | Launch checklist + DNS cutover + monitoring | ~2h | |

**Soft target**: technical site running with placeholder copy in 4-5 working days. Real content + 4 locales — driven by your input timing.

---

## 14. Success metrics (90 days post-launch)

- 🎯 **Direct goal-conversion** = inbound «good» messages (recruiting / client / interesting collab) — 4+ per month
- 🎯 **IT STEP Jakarta funnel attribution** — measurable visits from Vibe Coding IG → /now or /contact — 30+ per month
- 🎯 **SEO**: rank top 3 for «Dmitriy Zaporozhets» / «zapleo» — within 30 days
- 🎯 **CWV stays in green** for 95% of crawls (monitored via CF Web Analytics)
- 🎯 **No public complaint** about overclaiming clients or AI-washing — qualitative

---

## 15. Anti-goals (explicit)

- Не превращаемся в очередной agency landing с тремя «Services» карточками
- Не делаем generic AI-creator template
- Не показываем фейк-метрики типа «happy clients 50+»
- Не используем стоковые лица «команды»
- Не вешаем «available for hire» badge — нанимающие должны спросить
- Не делаем cookie consent на cookie consent — privacy-first без трекеров от старта

---

## 16. Honesty layer (AI Creator transparency)

Sitewide:
- Footer line: «This site was designed and partly authored with Claude. Code reviewed by me.»
- `/colophon` full disclosure of which tools made which parts
- Photo / b-roll origin disclosed per-asset in image metadata + visible footnotes on `/work/[slug]`
- If voice clone used (hero audio teaser) → disclosed inline

Matches Vibe Coding brand strategy AI Creator label approach (см. strategy markdown).

---

> **Next decision needed from you (before Phase 4 starts):**
> 1. Approve / amend the **one-line direction** (§1 hook)
> 2. Approve / amend the **reference aesthetic** (§5 — warm espresso dark)
> 3. Pick **5-7 portfolio projects** to feature
> 4. Sign-off on **trusted-by honesty wording**
> 5. Provide / point me to **photo + b-roll source material**
