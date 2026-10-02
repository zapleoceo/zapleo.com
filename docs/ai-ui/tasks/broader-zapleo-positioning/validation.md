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

Pending GitHub Actions deployment and actual production browser verification. Build/test success alone is not deployment proof.
