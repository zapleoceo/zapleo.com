import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const workflow = readFileSync(new URL('../.github/workflows/deploy.yml', import.meta.url), 'utf8');

test('cached HTML can still load older immutable assets after deployment', () => {
  assert.match(workflow, /--filter='protect \/_next\/static\/\*\*\*'/);
});

test('deployment acceptance verifies normal-URL release content, not cache bypass', () => {
  const health = workflow.split('- name: Health check')[1].split('- name: Cleanup SSH key')[0];
  assert.match(health, /https:\/\/zapleo\.com\/ --output/);
  assert.match(health, /cmp -s out\/index\.html/);
  assert.doesNotMatch(health, /\?ci=|\?v=|\?release=/);
});

test('configured cache purge runs and requires API-level success', () => {
  const deploy = workflow.split('  deploy:')[1];
  const beforeEnvironment = deploy.split('    environment:')[0];
  assert.match(beforeEnvironment, /CF_API_TOKEN: \$\{\{ secrets\.CF_API_TOKEN \}\}/);
  assert.match(beforeEnvironment, /CF_ZONE_ID: \$\{\{ secrets\.CF_ZONE_ID \}\}/);
  const purge = deploy.split('- name: Purge Cloudflare cache')[1].split('- name: Explain missing cache credentials')[0];
  assert.match(purge, /jq -e '\.success == true'/);
  assert.doesNotMatch(purge, /non-fatal|\|\| echo/);
});
