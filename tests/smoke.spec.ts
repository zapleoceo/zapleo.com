import { expect, test } from '@playwright/test';

// ── Homepage (EN) ──────────────────────────────────────────────────────────────

test('homepage EN loads with hero', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/zapleo/i);
  await expect(page.locator('h1, [class*="display"]').first()).toBeVisible();
});

test('homepage EN has AI pitch section', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('ai-pitch')).toBeVisible();
  await expect(page.getByTestId('ai-pitch-cta')).toHaveAttribute('href', '/work/ai-sales-assistant/');
});

test('homepage EN nav has all 5 links', async ({ page }) => {
  await page.goto('/');
  const nav = page.locator('nav[aria-label="Main navigation"]');
  for (const label of ['Work', 'Journey', 'Now', 'Journal', 'Contact']) {
    await expect(nav.getByText(label)).toBeVisible();
  }
});

// ── Language homepages ────────────────────────────────────────────────────────

test('Ukrainian homepage loads', async ({ page }) => {
  await page.goto('/uk/');
  await expect(page).toHaveTitle(/zapleo/i);
  await expect(page.getByText('Спочатку оператор')).toBeVisible();
});

test('Russian homepage loads', async ({ page }) => {
  await page.goto('/ru/');
  await expect(page).toHaveTitle(/zapleo/i);
  await expect(page.getByText('Сначала оператор')).toBeVisible();
});

test('Indonesian homepage loads', async ({ page }) => {
  await page.goto('/id/');
  await expect(page).toHaveTitle(/zapleo/i);
  await expect(page.getByText('Operator dulu')).toBeVisible();
});

// ── Work page ─────────────────────────────────────────────────────────────────

test('work page shows AI era and all projects', async ({ page }) => {
  await page.goto('/work/');
  await expect(page.getByText('AI & Infrastructure')).toBeVisible();
  await expect(page.getByText('AI Sales Assistant')).toBeVisible();
  await expect(page.getByText('AIbroker')).toBeVisible();
  await expect(page.getByText('Pasijou')).toBeVisible();
  await expect(page.getByText('apcu.ua')).toBeVisible();
});

test('work page UK shows translated era labels', async ({ page }) => {
  await page.goto('/uk/work/');
  await expect(page.getByText('AI та Інфраструктура')).toBeVisible();
  await expect(page.getByText('Гостинність')).toBeVisible();
});

test('work page ID shows translated era labels', async ({ page }) => {
  await page.goto('/id/work/');
  await expect(page.getByText('AI & Infrastruktur')).toBeVisible();
  await expect(page.getByText('Hospitaliti')).toBeVisible();
});

// ── Case study pages ──────────────────────────────────────────────────────────

test('AI Sales Assistant case study loads', async ({ page }) => {
  await page.goto('/work/ai-sales-assistant/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('AI Sales Assistant');
  await expect(page.getByText('Talks to leads')).toBeVisible();
  await expect(page.getByRole('link', { name: /contact/i })).toBeVisible();
});

test('AIbroker case study has both links', async ({ page }) => {
  await page.goto('/work/aibroker/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('AIbroker');
  await expect(page.getByRole('link', { name: /dashboard/i })).toHaveAttribute('href', 'https://aib.zapleo.com');
  await expect(page.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/zapleoceo/AIbroker');
});

test('Pasijou case study has external links', async ({ page }) => {
  await page.goto('/work/pasijou/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Pasijou');
  await expect(page.getByRole('link', { name: /instagram/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /tripadvisor/i })).toBeVisible();
});

// ── Other pages ───────────────────────────────────────────────────────────────

test('contact page has all 5 channels', async ({ page }) => {
  await page.goto('/contact/');
  for (const channel of ['Email', 'Telegram', 'WhatsApp', 'LinkedIn', 'Instagram']) {
    await expect(page.getByText(channel)).toBeVisible();
  }
});

test('journey page loads', async ({ page }) => {
  await page.goto('/journey/');
  await expect(page).toHaveTitle(/journey/i);
  await expect(page.getByText('Twelve years')).toBeVisible();
});

test('now page loads', async ({ page }) => {
  await page.goto('/now/');
  await expect(page).toHaveTitle(/now/i);
  await expect(page.getByText('right now')).toBeVisible();
});

// ── Navigation flow ───────────────────────────────────────────────────────────

test('clicking Work in nav navigates to /work/', async ({ page }) => {
  await page.goto('/');
  await page.locator('nav[aria-label="Main navigation"]').getByText('Work').click();
  await expect(page).toHaveURL(/\/work\//);
  await expect(page.getByText('The defensible slice')).toBeVisible();
});

test('sitemap.xml is present', async ({ page }) => {
  const response = await page.request.get('/sitemap.xml');
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain('zapleo.com');
  expect(body).toContain('/work/ai-sales-assistant/');
  expect(body).toContain('/work/aibroker/');
});
