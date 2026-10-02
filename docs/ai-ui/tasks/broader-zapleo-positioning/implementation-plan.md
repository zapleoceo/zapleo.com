# Implementation plan

1. **Fact gate.** Compare existing site, CV/project evidence, and Claude's independent ledger. Mark every public claim verified, qualified or excluded. Keep unverified figures out of the copy.
2. **Architecture.** Homepage: one clear operator-led promise, three concrete problem doors, selected proof, a depth example (Vera), working method, engagement formats, direct email CTA. Revenue Recovery Sprint remains a dedicated page, not the global identity.
3. **Copy.** Claude writes `src/content/home.ts` in four locales and reviews existing case/service data. Codex challenges clarity, attribution and implied guarantees.
4. **Design.** Build an editorial “control room” system using the current dark/amber visual language: large type, a single process/decision visual motif, clear case hierarchy, no fake UI metrics. Preserve accessibility and reduced-motion behavior. No heavy decorative runtime dependency.
5. **Consistency.** Replace narrow/stale navigation and metadata, align Work/About/Contact, preserve existing URLs and keep AI-Dima archive accessible without presenting it as a current service.
6. **Verification.** Typecheck, production build, route/link tests, all four locales, 375px and desktop visual review, overflow/console checks, factual reciprocal review. Compare live state after deployment. Push only after both reviewers agree and local gates pass.

## Hypotheses to test

- A cold buyer can name who Dmitriy is and what problem to bring within five seconds of viewing the first screen.
- Each selected case makes sense without inside knowledge and separates observed results from the work's limits.
- A more distinctive design does not harm mobile comprehension or speed.

## KB context

Repository design and Next.js documentation inspected. No dedicated project KB connector surfaced for this site; project files and live site are the working sources.
