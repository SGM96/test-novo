import { test, expect } from "@playwright/test";

test.describe("Home page functional checks", () => {
  test("loads successfully and shows the Novopayment logo in header and footer", async ({
    page,
  }) => {
    const response = await page.goto("/es");
    expect(response?.ok()).toBeTruthy();

    await expect(page).toHaveTitle(/Novopayment/i);

    const headerLogo = page.getByTestId("site-header").getByAltText("Novopayment");
    const footerLogo = page.getByTestId("site-footer").getByAltText("Novopayment");

    await expect(headerLogo).toBeVisible();
    await footerLogo.scrollIntoViewIfNeeded();
    await expect(footerLogo).toBeVisible();
  });

  test('the "trusted by" section shows at least one client logo', async ({ page }) => {
    await page.goto("/es");

    const trustSection = page.getByTestId("trust-section");
    await trustSection.scrollIntoViewIfNeeded();

    const clientLogos = trustSection.getByTestId("client-logo");
    expect(await clientLogos.count()).toBeGreaterThan(0);
    await expect(clientLogos.first()).toBeVisible();
  });

  test("the language switcher toggles the hero copy between Spanish and English", async ({
    page,
  }) => {
    await page.goto("/es");

    const heroHeading = page.getByTestId("hero-heading");
    await expect(heroHeading).toContainText("pagos");

    await page.getByTestId("language-switcher-trigger").click();
    await page.getByTestId("language-option-en").click();

    await expect(page).toHaveURL(/\/en(\/|$)/);
    await expect(heroHeading).toContainText("payments");

    await page.getByTestId("language-switcher-trigger").click();
    await page.getByTestId("language-option-es").click();

    await expect(page).toHaveURL(/\/es(\/|$)/);
    await expect(heroHeading).toContainText("pagos");
  });

  test("does not log errors to the browser console on load", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });
    page.on("pageerror", (err) => {
      consoleErrors.push(err.message);
    });

    await page.goto("/es", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    expect(consoleErrors, `Console errors found:\n${consoleErrors.join("\n")}`).toEqual([]);
  });

  test("animated stat counters count up above zero", async ({ page }) => {
    await page.goto("/es");

    const counters = page.getByTestId("animated-counter");
    expect(await counters.count()).toBeGreaterThan(0);

    const firstCounter = counters.first();
    await firstCounter.scrollIntoViewIfNeeded();

    // Some metrics animate to a negative display value (e.g. "-99%" for a
    // latency reduction), so we assert the counter moved in magnitude away
    // from its initial 0 state rather than asserting a positive number.
    await expect
      .poll(
        async () => {
          const text = (await firstCounter.textContent()) ?? "";
          return Math.abs(parseFloat(text.replace(/[^0-9.-]/g, "")));
        },
        { timeout: 5000, message: "counter never animated away from 0" }
      )
      .toBeGreaterThan(0);
  });
});
