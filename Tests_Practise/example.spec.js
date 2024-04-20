// @ts-check
const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('Google opening', async ({ page }) => {
  await page.goto('https://www.google.com/');

  await page.getByRole( 'link', {name: "Gmail"}).click();

  await page.getByRole ('link', {name: 'Sign In' }).click();

  await expect(page.getByRole('link', {name: 'Learn more'})).toBeVisible();
});