# Consent-gated GA4

The site uses the existing GA4 web stream `G-DKW7C84LRB` (property 362136691, stream 4821096829). This replaces the previous deliberate no-tracker choice after the owner's explicit request. No GTM container, new account, advertising link, credential or paid service was added.

## Collection boundary

- The Google tag is not loaded before explicit analytics consent. Rejecting leaves the site working and sends no consent-mode ping.
- Choice is stored locally for 180 days. Malformed, future-dated, expired or unavailable storage fails closed. Revocation disables GA, clears accessible `_ga` cookies and reloads to unload the tag. Other-tab revocation or storage clearing is respected. An expiry timer and focus/visibility checks cover tabs left open.
- Manual events are `page_view` and `contact_email_click`, on the listed public commercial root routes only. Query strings, hashes, incoming referrers, mailto contents, form fields and document titles are excluded from event parameters. AI-Dima routes and unlisted routes disable the tag.
- Google still receives ordinary device/network information and maintains its standard session/engagement metadata; this is not anonymous or server-side analytics. Consent text discloses Google and analytics cookies. Advertising storage, personalization and signals are disabled.
- GA stream configuration is part of the release gate. On 2026-11-14 at approximately 21:54 UTC, the existing Chrome UI showed only Page views enabled, browser-history page changes **off**, and scroll/outbound/search/form/video/download events **off**. No setting was changed. `send_page_view:false` disables initial automatic pageviews; do not enable enhanced history events or additional automatic measurements without reviewing this data boundary.

## Verification

Playwright mocks the tag to check local dispatch contracts without sending synthetic data to Google: opt-in/reject/persistence/revoke/cookie cleanup, query exclusion, one manual event, mailto minimization, malformed consent, public -> excluded -> public SPA navigation, cross-tab clear, expired consent and blocked storage. These tests do not establish that Google ingested an event.

Before release: typecheck, static build, deploy-contract tests and the full browser suite. Inspect the live site separately; distinguish CI, deployment, network request and Analytics receipt. Do not treat a historical report or a mocked dataLayer assertion as live ingestion proof.

For rollback, revert the layout integration and component together. Keep the existing stream; no deletion of analytics history is required.
