import { expect, test } from '@playwright/test';

// ── Homepage (EN) ──────────────────────────────────────────────────────────────

test('homepage EN loads with hero', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/zapleo/i);
  await expect(page.locator('h1, [class*="display"]').first()).toBeVisible();
});

test('homepage EN leads to the recovery sprint', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('service-preview')).toBeVisible();
  await expect(page.getByTestId('selected-proof')).toBeVisible();
  await expect(page.locator('a[href="/revenue-recovery/"]').first()).toBeVisible();
});

test('homepage EN nav prioritizes the service', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, 200));
  // Desktop nav only (mobile drawer is hidden at desktop viewport)
  const desktopNav = page.locator('.nav-desktop');
  for (const label of ['Revenue recovery', 'Work', 'Journey', 'Contact']) {
    await expect(desktopNav.getByRole('link', { name: label })).toBeVisible();
  }
});

// ── Language homepages ────────────────────────────────────────────────────────

test('Ukrainian homepage loads', async ({ page }) => {
  await page.goto('/uk/');
  await expect(page).toHaveTitle(/zapleo/i);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('ліда');
});

test('Russian homepage loads', async ({ page }) => {
  await page.goto('/ru/');
  await expect(page).toHaveTitle(/zapleo/i);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('лид');
});

test('Indonesian homepage loads', async ({ page }) => {
  await page.goto('/id/');
  await expect(page).toHaveTitle(/zapleo/i);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('prospek');
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

test('work page UK shows translated era labels and project descriptions', async ({ page }) => {
  await page.goto('/uk/work/');
  await expect(page.getByText('AI та Інфраструктура')).toBeVisible();
  await expect(page.getByText('Гостинність')).toBeVisible();
  // Translated project tagline (not EN)
  await expect(page.getByText('AI-розмови з лідами, підключені до CRM.')).toBeVisible();
});

test('work page RU shows translated era labels and project descriptions', async ({ page }) => {
  await page.goto('/ru/work/');
  await expect(page.getByText('AI и Инфраструктура')).toBeVisible();
  await expect(page.getByText('ИИ-разговоры с лидами, подключённые к CRM.')).toBeVisible();
});

test('work page ID shows translated era labels and project descriptions', async ({ page }) => {
  await page.goto('/id/work/');
  await expect(page.getByText('AI & Infrastruktur')).toBeVisible();
  await expect(page.getByText('Hospitaliti')).toBeVisible();
  await expect(page.getByText('Percakapan penjualan AI yang terhubung ke CRM.')).toBeVisible();
});

test('locale homepage UK has translated offer', async ({ page }) => {
  await page.goto('/uk/');
  await expect(page.getByTestId('service-preview')).toBeVisible();
  await expect(page.locator('a[href="/uk/revenue-recovery/"]').first()).toBeVisible();
});

// ── Case study pages ──────────────────────────────────────────────────────────

test('AI Sales Assistant redirect page returns 200', async ({ page }) => {
  const response = await page.request.get('/work/ai-sales-assistant/');
  expect(response.status()).toBe(200);
});

test('AIbroker case study has both links', async ({ page }) => {
  await page.goto('/work/aibroker/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('AIbroker');
  await expect(page.getByRole('link', { name: /dashboard/i })).toHaveAttribute('href', 'https://aib.zapleo.com');
  await expect(page.locator('a[href="https://github.com/zapleoceo/AIbroker"]')).toBeVisible();
});

test('Pasijou case study has external links', async ({ page }) => {
  await page.goto('/work/pasijou/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Pasijou');
  await expect(page.locator('a[href*="instagram.com/pasijou"]')).toBeVisible();
  await expect(page.locator('a[href*="tripadvisor.com"]')).toBeVisible();
});

// ── Other pages ───────────────────────────────────────────────────────────────

test('contact page has all 5 channels', async ({ page }) => {
  await page.goto('/contact/');
  // Scope to main to avoid footer/nav collisions
  const main = page.locator('main');
  for (const channel of ['Email', 'Telegram', 'WhatsApp', 'LinkedIn', 'Instagram']) {
    await expect(main.getByText(channel, { exact: true }).first()).toBeVisible();
  }
});

test('journey page loads', async ({ page }) => {
  await page.goto('/journey/');
  await expect(page).toHaveTitle(/journey/i);
  await expect(page.getByText('AI systems and revenue operations')).toBeVisible();
});

test('recovery service makes scope and payment explicit', async ({ page }) => {
  await page.goto('/revenue-recovery/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByText('$5,000 fixed project fee')).toBeVisible();
  await expect(page.getByText(/Production integration, ongoing operation and guaranteed revenue/)).toBeVisible();
  await expect(page.getByTestId('service-cta')).toHaveAttribute('href', /^mailto:dima@zapleo.com/);
});

test('archived AI-Dima guide is clearly marked and noindexed', async ({ page }) => {
  await page.goto('/ai-dima/');
  await expect(page.locator('.archive-notice')).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
});

test('now page loads', async ({ page }) => {
  await page.goto('/now/');
  await expect(page).toHaveTitle(/now/i);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

// ── Navigation flow ───────────────────────────────────────────────────────────

test('nav desktop has Work link with correct href', async ({ page }) => {
  await page.goto('/work/'); // nav is always visible on inner pages
  const workLink = page.locator('.nav-desktop').getByRole('link', { name: 'Work' });
  await expect(workLink).toHaveAttribute('href', '/work/');
});

// ── Locale case study pages ───────────────────────────────────────────────────

const LOCALE_CASES: [string, string, string][] = [
  ['/uk/work/aibroker/', 'AIbroker', '/uk/work/'],
  ['/uk/work/pasijou/', 'Pasijou', '/uk/work/'],
  ['/id/work/apcu/', 'apcu.ua', '/id/work/'],
];

for (const [url, name, backHref] of LOCALE_CASES) {
  test(`locale case study ${url} loads`, async ({ page }) => {
    await page.goto(url);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(name);
    const backLink = page.getByRole('link', { name: /back|назад|kembali|до всіх|ко всем/i });
    await expect(backLink).toHaveAttribute('href', backHref);
  });
}

test('work page UK AI Sales Assistant card links to Stepan 2', async ({ page }) => {
  await page.goto('/uk/work/');
  const card = page.locator('a[href="https://stepan2.zapleo.com"]').first();
  await expect(card).toBeVisible();
});

test('RU AI Sales Assistant redirect page returns 200', async ({ page }) => {
  const response = await page.request.get('/ru/work/ai-sales-assistant/');
  expect(response.status()).toBe(200);
});

test('UK case study pasijou is in Ukrainian', async ({ page }) => {
  await page.goto('/uk/work/pasijou/');
  await expect(page.getByText('Чому клубхаус')).toBeVisible();
});

test('ID case study aibroker is in Indonesian', async ({ page }) => {
  await page.goto('/id/work/aibroker/');
  await expect(page.getByText('Insiden biaya')).toBeVisible();
});

test('sitemap.xml is present', async ({ page }) => {
  const response = await page.request.get('/sitemap.xml');
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain('zapleo.com');
  expect(body).toContain('/work/aibroker/');
  expect(body).toContain('/revenue-recovery/');
  expect(body).not.toContain('/ai-dima/');
});
