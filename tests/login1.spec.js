const { test, expect } = require('@playwright/test');

test('OrangeHRM Login Test', async ({ page }) => {

  // Increase timeout for the demo site
  test.setTimeout(60000);

  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    { waitUntil: 'domcontentloaded' }
  );

  // Wait for login page
  await expect(page.getByPlaceholder('Username')).toBeVisible();

  // Enter credentials
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify Dashboard
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});
// Updated by Kanchana for GitHub pull demonstration
// Learning Git Push and Pull - Day 2