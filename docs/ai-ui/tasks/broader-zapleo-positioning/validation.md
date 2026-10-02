# Verification record

2026-10-02, Asia/Saigon. Reviewers: Codex and the actual Claude session `claude-myai-zapleo` through the shared coordinator. Additional GPT review produced concrete defects; it is not described as Claude review.

- Production build: 63 static pages, success. Next warns that configured development headers do not apply to static export; production headers are the hosting server's responsibility.
- Typecheck: `npx tsc --noEmit`, success.
- Targeted lint: Nav, homepage, case/work/colophon components, service component and route regression tests. Initial accessibility/unused-variable warnings corrected without suppression. Success after correction. Repository-wide legacy formatting was not rewritten.
- Full browser suite against static export: 44 passed, 2 workers, installed Chrome, 1.1 minutes. Includes all four locales at 375/1440px; eight core pages per variant, internal links, page errors, hidden keyboard targets and mobile archive menu/Escape behavior.
- Independent Claude repeat: 44 passed and HTML scan of 63 exported pages. Content and fact approval in coordinator message63; final lint-only rebuild recheck requested.
- Visual evidence: `screenshots/` in this task directory. Full-page and fold captures; reduced motion used for deterministic screenshots, not for production behavior. Screenshots are local evidence rather than committed deliverables.
- Independent-source correction: provider-key isolation is proxy-specific; lease access may expose keys temporarily. Broker spend is an estimate, with August 2026 period and 14 configured providers. The CRM call count comes from a review of an exported report, not a newly reproduced raw-call audit. Attribution is 45.2% to 93.6% of ad-sourced leads, not total sales conversion.
- Remaining caveat: buyer response and conversion are untested commercial hypotheses. No live-customer A/B test or guaranteed sales gain is claimed.

## Release evidence

- Content release: `ac13da665d2647cc20c97665d1ae66de7d7d4d93`; deployment safeguards: `50ce874faeb3334a751a275476c06b2adc442a53`.
- [GitHub Actions 36975341946](https://github.com/zapleoceo/zapleo.com/actions/runs/36975341946): Build & Test and Deploy to production both success. CI browser suite 44/44; three deployment-contract checks passed. Normal-URL homepage HTML exactly matched the uploaded build artifact.
- First live suite caught stale cached English root: 39/44, five failures. Details and safeguards in `release-cache-incident.md`; this failure was not ignored or weakened away.
- After the user cleared Cloudflare cache and enabled Development Mode: full normal-URL production suite **44/44**, 2.2 minutes, exit 0. Four locales, mobile 375px and desktop 1440px, real routes, no page errors or GA scripts, navigation and keyboard behavior verified.
- Codex inspected fresh live mobile and desktop fold screenshots: styling, fonts, hero, CTA and desktop process diagram load without clipping.
- Cloudflare cache-purge credentials remain unconfigured; nginx/origin configuration was not modified. Future releases preserve previous immutable assets and cannot pass with stale homepage HTML. The temporary Development Mode setting is not represented as a permanent fix.
- Final independent Claude production verdict: coordinator message85, APPROVE; 44/44 live browser tests plus four-language route and content checks. A browser that cached the former homepage may need a hard refresh; new normal-URL requests serve the current site.
