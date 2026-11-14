import { expect, test } from "@playwright/test";

test("analytics is opt-in, minimal, revocable and persistent", async ({
	page,
}) => {
	const requests: string[] = [];
	await page.route("https://www.googletagmanager.com/**", async (route) => {
		requests.push(route.request().url());
		await route.fulfill({
			contentType: "application/javascript",
			body: "/* isolated analytics test: no Google traffic */",
		});
	});
	await page.goto("/?email=private@example.com#private");
	await expect(
		page.getByRole("button", { name: "Allow analytics", exact: true }),
	).toBeVisible();
	expect(requests).toHaveLength(0);
	await expect(page.locator("#zapleo-ga4")).toHaveCount(0);
	await page
		.getByRole("button", { name: "Reject analytics", exact: true })
		.click();
	await page.reload();
	await expect(
		page.getByRole("button", { name: "Analytics settings", exact: true }),
	).toBeVisible();
	expect(requests).toHaveLength(0);
	await page
		.getByRole("button", { name: "Analytics settings", exact: true })
		.click();
	await page
		.getByRole("button", { name: "Allow analytics", exact: true })
		.click();
	await expect(page.locator("#zapleo-ga4")).toHaveCount(1);
	const commands = await page.evaluate(() =>
		(
			window as unknown as Window & { dataLayer: ArrayLike<unknown>[] }
		).dataLayer.map((x) => Array.from(x)),
	);
	expect(
		commands.filter((x) => x[0] === "event" && x[1] === "page_view"),
	).toHaveLength(1);
	expect(JSON.stringify(commands)).not.toContain("private@example.com");
	expect(commands.find((x) => x[0] === "config")?.[2]).toMatchObject({
		send_page_view: false,
		allow_google_signals: false,
		allow_ad_personalization_signals: false,
		page_referrer: "",
	});
	await page
		.locator('a[href^="mailto:"]')
		.first()
		.evaluate((a) => {
			a.addEventListener("click", (e) => e.preventDefault());
			(a as HTMLElement).click();
		});
	const clicks = await page.evaluate(() =>
		(
			window as unknown as Window & { dataLayer: ArrayLike<unknown>[] }
		).dataLayer
			.map((x) => Array.from(x))
			.filter((x) => x[1] === "contact_email_click"),
	);
	expect(clicks).toHaveLength(1);
	expect(JSON.stringify(clicks)).not.toContain("mailto:");
	await page
		.context()
		.addCookies([
			{ name: "_ga", value: "test", url: new URL(page.url()).origin },
		]);
	await page
		.getByRole("button", { name: "Analytics settings", exact: true })
		.click();
	await page
		.getByRole("button", { name: "Reject analytics", exact: true })
		.click();
	await expect(
		page.getByRole("button", { name: "Analytics settings", exact: true }),
	).toBeVisible();
	await expect(page.locator("#zapleo-ga4")).toHaveCount(0);
	expect(
		(await page.context().cookies()).filter((c) => c.name === "_ga"),
	).toHaveLength(0);
	expect(requests).toHaveLength(1);
});
test("malformed consent fails closed", async ({ page }) => {
	await page.addInitScript(() =>
		localStorage.setItem(
			"zapleo-analytics-consent-v1",
			'{"choice":"granted","at":999999999999999}',
		),
	);
	await page.goto("/");
	await expect(
		page.getByRole("button", { name: "Allow analytics", exact: true }),
	).toBeVisible();
	await expect(page.locator("#zapleo-ga4")).toHaveCount(0);
});

test("SPA routes disable collection outside the allowlist", async ({
	page,
}) => {
	await page.route("https://www.googletagmanager.com/**", (route) =>
		route.fulfill({
			contentType: "application/javascript",
			body: "/* no traffic */",
		}),
	);
	await page.goto("/");
	await page
		.getByRole("button", { name: "Allow analytics", exact: true })
		.click();
	await page.evaluate(() => {
		history.pushState({}, "", "/ai-dima/?private=secret");
	});
	await expect
		.poll(() =>
			page.evaluate(
				() =>
					(window as unknown as Record<string, unknown>)[
						"ga-disable-G-DKW7C84LRB"
					],
			),
		)
		.toBe(true);
	await page.evaluate(() => {
		history.pushState({}, "", "/about/?private=secret");
	});
	await expect
		.poll(() =>
			page.evaluate(
				() =>
					(window as unknown as Record<string, unknown>)[
						"ga-disable-G-DKW7C84LRB"
					],
			),
		)
		.toBe(false);
	const events = await page.evaluate(() =>
		(window as unknown as { dataLayer: ArrayLike<unknown>[] }).dataLayer
			.map((x) => Array.from(x))
			.filter((x) => x[0] === "event"),
	);
	expect(events.filter((x) => x[1] === "page_view")).toHaveLength(2);
	expect(JSON.stringify(events)).not.toMatch(/secret|ai-dima/);
});

for (const mode of ["clear", "expired"] as const) {
	test(`consent ${mode} stops a loaded tag`, async ({ page, context }) => {
		await page.route("https://www.googletagmanager.com/**", (route) =>
			route.fulfill({
				contentType: "application/javascript",
				body: "/* no traffic */",
			}),
		);
		await page.goto("/");
		await page
			.getByRole("button", { name: "Allow analytics", exact: true })
			.click();
		await expect(page.locator("#zapleo-ga4")).toHaveCount(1);
		if (mode === "clear") {
			const other = await context.newPage();
			await other.route("https://www.googletagmanager.com/**", (route) =>
				route.abort(),
			);
			await other.goto("/ai-dima/");
			await other.evaluate(() => localStorage.clear());
			await other.close();
		} else {
			await page.evaluate(() => {
				localStorage.setItem(
					"zapleo-analytics-consent-v1",
					JSON.stringify({
						choice: "granted",
						at: Date.now() - 181 * 24 * 60 * 60 * 1000,
					}),
				);
				window.dispatchEvent(new Event("focus"));
			});
		}
		await expect(
			page.getByRole("button", { name: "Allow analytics", exact: true }),
		).toBeVisible();
		await expect(page.locator("#zapleo-ga4")).toHaveCount(0);
	});
}

test("blocked storage never enables analytics", async ({ page }) => {
	await page.addInitScript(() => {
		Storage.prototype.setItem = () => {
			throw new Error("storage blocked");
		};
	});
	await page.goto("/");
	await page
		.getByRole("button", { name: "Allow analytics", exact: true })
		.click();
	await expect(
		page.getByRole("button", { name: "Analytics settings", exact: true }),
	).toBeVisible();
	await expect(page.locator("#zapleo-ga4")).toHaveCount(0);
});
