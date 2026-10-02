# Zapleo positioning refresh

## Goal

Make zapleo.com a credible, distinctive front door for Dmitriy's broader AI integration work, not a homepage for one diagnostic offer. The buyer should understand within five seconds who can help, with what class of problem, and why the work is credible. Keep the Revenue Recovery Sprint as a separate, scoped entry point.

## Confirmed constraints

- Zapleo was founded in 2010; Dmitriy confirmed this directly.
- `dima@zapleo.com` receives inquiries; Dmitriy confirmed this directly.
- Four locales (en, uk, ru, id) and static export are already in production.
- The $5,000 ten-day sprint is an unvalidated offer. It is not the price of broader implementation or ongoing partnership.
- Dmitriy wants high-quality, well-paid creative projects. He has 10–15 hours weekly available for this particular 30-day revenue experiment; this does not define all future capacity.
- Dmitriy is not a traditional programmer; the site must describe AI-assisted delivery honestly, without making a defensive non-programmer statement the headline.
- Existing untracked `test-results/` is user data and must be preserved.

## Evidence still required

- Every case figure and outcome needs a source, date, denominator and honest limit.
- No invented client results, response-time promises, free calls, permanent data ownership terms or personal messaging contacts.
- Distinguish systems built by Dmitriy from his employer's products and team work.
- Check site-wide stale copy, metadata and all four translations before release.

## Collaboration

- Codex: architecture, components, styling, navigation, SEO and implementation verification.
- Claude (`claude-myai-zapleo`): independent fact ledger, four-language copy, case-data review and browser cross-check.
- Use coordinator file reservations. Neither agent pushes to `main` before reciprocal review.

## Стан

- Current: completed and independently approved on the live domain by Codex and Claude.
- Evidence: TypeScript and production build pass (63 pages); 44/44 browser tests pass at 375/1440px across four locales, internal routes, keyboard and mobile menu regressions. Claude independently repeated 44/44 and scanned static HTML; content/fact approval in coordinator message63. Codex independently checked the attribution measurement transcript and guard/monitor code. Selected-component lint passes. Screenshots inspected; private Vera example no longer links to absent proof. Analytics/privacy contradiction and stale archive text corrected.
- Release evidence: deployed source/safeguards `50ce874faeb3334a751a275476c06b2adc442a53`; Actions run36975341946 successful. Codex normal-URL production suite 44/44, exit0; Claude independently repeated 44/44 and approved in coordinator message85. Fresh desktop/mobile fold screenshots inspected. Three deployment-contract checks pass.
- Next: hand off the live site. Optional infrastructure follow-up is permanent Cloudflare purge credentials or an HTML cache-bypass rule; neither was falsely marked configured.
- Blockers: none for the delivered site. Initial stale English-root failure was resolved after the user purged cache and enabled Development Mode. Old visitor browser caches may require a hard refresh. Original test-results/ remains untouched by staging.
- Updated: 2026-10-02 13:55 ICT.
