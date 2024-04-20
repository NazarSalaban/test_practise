// @ts-check
const { test, expect } = require('@playwright/test');

test('Google opening', async ({ page }) => {
  await page.goto('https://www.google.com/');

  await page.getByRole( 'link', {name: "Gmail"}).click();

  await page.getByRole ('link', {name: 'Sign In' }).click();

  await expect(page.getByRole('link', {name: 'Terms'})).toBeVisible();
});