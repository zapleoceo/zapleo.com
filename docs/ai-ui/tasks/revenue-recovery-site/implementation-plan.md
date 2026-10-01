# Implementation plan

1. **Positioning:** replace the homepage's current-director and educator message with a clear AI integration value proposition. Lead visitors to a fixed-scope diagnostic; preserve selected proof and direct contact.
2. **Service page:** add `/revenue-recovery/` plus UK, RU and ID variants. Explain buyer fit, exact inputs, deliverables, ten-day sequence, price, exclusions and an email CTA with a short brief.
3. **Site consistency:** update navigation, footer, contact and current-status copy; remove stale role claims from metadata and structured data. Keep the old work and journey pages reachable as history, and label AI-Dima as an archive rather than a current offer.
4. **Verification:** run TypeScript, build, browser smoke checks for routes, CTAs, locale links, sitemap and mobile overflow. Compare rendered desktop/mobile pages. Review live deploy only after local checks pass.

## Evidence and design rules

- Preserve the existing dark/amber type system and reusable nav/footer/PageShell primitives; a new visual system would add risk without improving the sales path.
- Proof uses first-person past-work facts already present in Dmitriy's local CV. No revenue uplift or conversion gain is claimed without evidence.
- A static export cannot process server-side forms; use a prefilled email CTA and existing direct contact channels.
- Existing `test-results/` remains untouched.
