import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000/pai-documentation';

test.describe('PAI Documentation Smoke Tests', () => {
  test('homepage loads with correct title', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/PAI Documentation/);
    await expect(page.locator('h1')).toContainText('PAI Documentation');
  });

  test('navigation sidebar is present', async ({ page }) => {
    await page.goto(BASE_URL);
    const sidebar = page.locator('nav.menu');
    await expect(sidebar).toBeVisible();

    // Check main sections exist
    await expect(sidebar.getByText('Users')).toBeVisible();
    await expect(sidebar.getByText('Developers')).toBeVisible();
    await expect(sidebar.getByText('Contributors')).toBeVisible();
  });

  test('Users section loads', async ({ page }) => {
    await page.goto(`${BASE_URL}/users/tutorials/getting-started`);
    await expect(page.locator('h1')).toBeVisible();
    // No crash, no error page
    await expect(page.locator('text=Page Not Found')).not.toBeVisible();
  });

  test('Developers section loads', async ({ page }) => {
    await page.goto(`${BASE_URL}/developers/how-to/create-a-skill`);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Page Not Found')).not.toBeVisible();
  });

  test('Skills reference loads', async ({ page }) => {
    await page.goto(`${BASE_URL}/users/reference/skills`);
    await expect(page.locator('h1')).toContainText('Skills');
    await expect(page.locator('text=Page Not Found')).not.toBeVisible();
  });

  test('Changelog page loads with version', async ({ page }) => {
    await page.goto(`${BASE_URL}/changelog`);
    await expect(page.locator('h1')).toContainText('Site Changelog');
    // Verify version entry exists (h2 heading)
    await expect(page.locator('h2:has-text("[1.0.0]")')).toBeVisible();
    await expect(page.locator('text=Page Not Found')).not.toBeVisible();
  });

  test('no console errors on homepage', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Filter out known non-critical errors (like favicon)
    const criticalErrors = errors.filter(
      (e) => !e.includes('favicon') && !e.includes('404')
    );
    expect(criticalErrors).toHaveLength(0);
  });
});
