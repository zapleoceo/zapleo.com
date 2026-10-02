# Release cache incident

2026-10-02. Source release `ac13da6`; deployment safeguards `50ce874`.

## Observed failure

The first production browser run used normal URLs, not cache-busting query strings: 39/44 passed. Five failures all originated from the English `/` homepage. Cloudflare served previous-day HTML with `Age` approximately 1,000 seconds and `Cache-Control: max-age=1800`. That HTML still referenced obsolete JavaScript/CSS chunks deleted by deployment. The other three locale roots and internal pages served the new release.

Claude independently identified the stale root and missing assets. Initial local tests and successful GitHub Actions were insufficient evidence of live correctness.

## Causes

- The optional purge condition inspected job environment variables, but those variables were declared only inside the step. No Cloudflare secrets were configured in the repository either.
- Purge errors were explicitly ignored; even HTTP success did not validate the API `success` field.
- The former health check used `?ci=<sha>` and checked HTTP 200 only, bypassing the actual stale homepage.
- Deployment deleted previous immutable chunks while cached HTML could still refer to them.

## Safeguards

- Preserve older `/_next/static/` files during rsync. No automatic pruning was added in this task.
- Move optional Cloudflare credentials to job scope; validate HTTP and API-level purge success when configured.
- Explicitly warn when purge credentials are unavailable, without exposing any secret.
- Compare the normal homepage HTML with the uploaded build artifact. Allow up to 31 minutes for an existing 30-minute cache to expire; fail rather than call stale content a successful deployment.
- Three automated deployment-contract checks enforce these safeguards in CI.

Cloudflare purge API contract was checked against [official documentation](https://developers.cloudflare.com/api/resources/cache/methods/purge/).

## Closure

The user reported purging the cache and enabling Cloudflare Development Mode. Normal root headers subsequently showed `cf-cache-status: DYNAMIC`, Last-Modified 2026-10-02 06:49:57 UTC. Safeguard release `50ce874` passed the exact normal-URL HTML comparison in [run 36975341946](https://github.com/zapleoceo/zapleo.com/actions/runs/36975341946).

Permanent Cloudflare purge credentials and origin web-server access were not available. No nginx change was made or claimed. Development Mode is not the durable fix: immutable-asset preservation and normal-URL verification remain enabled, and a future release may wait for cache expiry. Optional follow-up: configure zone-scoped cache-purge credentials or a proper HTML cache-bypass rule. Final closure gates passed: Codex normal-URL live suite 44/44, Claude independent live suite 44/44 and coordinator message85 APPROVE. Previously cached visitor browsers may still require a hard refresh.
