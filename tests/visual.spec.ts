import { test, expect } from "@playwright/test";

const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 375, height: 812 },
} as const;

const LOCALES = ["es", "en"] as const;

for (const locale of LOCALES) {
  for (const [viewportName, viewportSize] of Object.entries(VIEWPORTS)) {
    test(`home page visual regression - ${locale} - ${viewportName}`, async ({ page }) => {
      await page.setViewportSize(viewportSize);
      await page.goto(`/${locale}`);
      await page.waitForLoadState("networkidle");

      await expect(page).toHaveScreenshot(`home-${locale}-${viewportName}.png`, {
        fullPage: true,
        animations: "disabled",
      });
    });
  }
}
