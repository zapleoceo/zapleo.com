import { expect, test } from '@playwright/test';

// ── Homepage (EN) ──────────────────────────────────────────────────────────────

test('homepage EN loads with hero', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/zapleo/i);
  await expect(page.locator('h1, [class*="display"]').first()).toBeVisible();
});

test('homepage EN explains broad work and keeps the sprint as one entry', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#useful .z-home-door')).toHaveCount(3);
  await expect(page.locator('.z-home-case').first()).toBeVisible();
  await expect(page.locator('a[href="/revenue-recovery/"]').first()).toBeVisible();
});

test('homepage EN nav leads with work and about', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, 200));
  // Desktop nav only (mobile drawer is hidden at desktop viewport)
  const desktopNav = page.locator('.nav-desktop');
  for (const label of ['Work', 'About', 'Revenue sprint', 'Contact']) {
    await expect(desktopNav.getByRole('link', { name: label })).toBeVisible();
  }
});

// ── Language homepages ────────────────────────────────────────────────────────

test('Ukrainian homepage loads', async ({ page }) => {
  await page.goto('/uk/');
  await expect(page).toHaveTitle(/zapleo/i);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).not.toContainText('AI that works');
});

test('Russian homepage loads', async ({ page }) => {
  await page.goto('/ru/');
  await expect(page).toHaveTitle(/zapleo/i);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).not.toContainText('AI that works');
});

test('Indonesian homepage loads', async ({ page }) => {
  await page.goto('/id/');
  await expect(page).toHaveTitle(/zapleo/i);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).not.toContainText('AI that works');
});

// ── Work page ─────────────────────────────────────────────────────────────────

test('work page shows AI era and all projects', async ({ page }) => {
  await page.goto('/work/');
  await expect(page.getByText('AI systems · 2026')).toBeVisible();
  await expect(page.getByText('Stepan — AI sales agent')).toBeVisible();
  await expect(page.getByText('AIbroker')).toBeVisible();
  await expect(page.getByText('Pasijou')).toBeVisible();
  await expect(page.getByText('apcu.ua')).toBeVisible();
});

test('work page UK shows translated era labels and project descriptions', async ({ page }) => {
  await page.goto('/uk/work/');
  await expect(page.getByText('ШІ-системи · 2026')).toBeVisible();
  await expect(page.getByText('Гостинність')).toBeVisible();
  // Translated project tagline (not EN)
  await expect(page.getByText('ШІ-розмови з продажу, підключені до CRM.')).toBeVisible();
});

test('work page RU shows translated era labels and project descriptions', async ({ page }) => {
  await page.goto('/ru/work/');
  await expect(page.getByText('ИИ-системы · 2026')).toBeVisible();
  await expect(page.getByText('ИИ-продажи в переписке, связанные с CRM.')).toBeVisible();
});

test('work page ID shows translated era labels and project descriptions', async ({ page }) => {
  await page.goto('/id/work/');
  await expect(page.getByText('Sistem AI · 2026')).toBeVisible();
  await expect(page.getByText('Hospitality · 2023 →')).toBeVisible();
  await expect(page.getByText('Percakapan penjualan AI yang terhubung ke CRM.')).toBeVisible();
});

test('locale homepage UK has a localized sprint link', async ({ page }) => {
  await page.goto('/uk/');
  await expect(page.locator('a[href="/uk/revenue-recovery/"]').first()).toBeVisible();
});

// ── Case study pages ──────────────────────────────────────────────────────────

test('AI Sales Assistant redirect page returns 200', async ({ page }) => {
  const response = await page.request.get('/work/ai-sales-assistant/');
  expect(response.status()).toBe(200);
});

test('AIbroker case study links to its source', async ({ page }) => {
  await page.goto('/work/aibroker/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('AIbroker');
  await expect(page.locator('a[href="https://github.com/zapleoceo/AIbroker"]')).toBeVisible();
});

test('Pasijou case study has external links', async ({ page }) => {
  await page.goto('/work/pasijou/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Pasijou');
  await expect(page.locator('a[href*="instagram.com/pasijou"]')).toBeVisible();
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

test('legacy journey URL serves the current about page', async ({ page }) => {
  await page.goto('/journey/');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://zapleo.com/about/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('about page is the canonical current profile', async ({ page }) => {
  await page.goto('/about/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('link', { name: 'LinkedIn' }).first()).toBeVisible();
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

test('legacy now URL serves the current about page', async ({ page }) => {
  await page.goto('/now/');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://zapleo.com/about/');
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
  await expect(page.locator('main')).toContainText('2026');
  await expect(page.locator('main')).not.toContainText('What I was responsible for');
});

test('ID case study aibroker is in Indonesian', async ({ page }) => {
  await page.goto('/id/work/aibroker/');
  await expect(page.getByText('Mengapa biaya harus dicek, bukan dipercaya')).toBeVisible();
});

test('sitemap.xml is present', async ({ page }) => {
  const response = await page.request.get('/sitemap.xml');
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain('zapleo.com');
  expect(body).toContain('/work/aibroker/');
  expect(body).toContain('/revenue-recovery/');
  expect(body).toContain('/about/');
  expect(body).not.toContain('/ai-dima/');
  expect(body).not.toContain('/journal/');
});

test('no unpublished essays or tracking claims leak into public pages', async ({ page }) => {
  await page.goto('/journal/');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  await expect(page.locator('main')).not.toContainText('12-year agency');
  await page.goto('/colophon/');
  await expect(page.locator('main')).toContainText('Bricolage Grotesque');
  await expect(page.locator('main')).not.toContainText('nightly snapshots');
  await expect(page.locator('script[src*="googletagmanager"]')).toHaveCount(0);
});

test('homepage keyboard navigation skips hidden controls', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('navigation', { name: 'Main navigation', includeHidden: true })).toHaveAttribute('inert', '');
  await page.keyboard.press('Tab');
  await expect(page.locator('.z-home-topbar > a')).toBeFocused();
});

for (const locale of ['uk', 'ru', 'id']) {
  test(`${locale} mobile menu links to the real archive and supports Escape`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(`/${locale}/about/`);
    const burger = page.locator('.nav-burger');
    await burger.click();
    await expect(page.locator('#mobile-navigation')).not.toHaveAttribute('inert', '');
    const archive = page.locator('#mobile-navigation a[href="/ai-dima/"]');
    await expect(archive).toBeVisible();
    expect((await page.request.get('/ai-dima/')).status()).toBe(200);
    await page.keyboard.press('Escape');
    await expect(burger).toBeFocused();
    await expect(page.locator('#mobile-navigation')).toHaveAttribute('inert', '');
  });
}
