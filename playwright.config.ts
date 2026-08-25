import { defineConfig, devices } from "@playwright/test";

// This suite always targets a live deployment (a Vercel preview URL in CI).
// We deliberately refuse to fall back to localhost or a hardcoded URL.
const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
  throw new Error(
    "BASE_URL environment variable is required (e.g. a Vercel preview deployment URL). " +
      "Refusing to run against a hardcoded or localhost URL."
  );
}

// NOTE: Vercel Deployment Protection must stay disabled for this project's
// previews — this suite runs unauthenticated (no SSO bypass), so a
// protected preview would make every test time out looking for elements on
// what is actually a Vercel login page.

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",

  use: {
    baseURL: BASE_URL,
    headless: true,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
