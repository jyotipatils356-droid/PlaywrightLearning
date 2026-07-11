const { test, expect } = require('@playwright/test');

test('Employee Page Test', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/dashboard/);

    await page.getByRole('link', { name: 'PIM' }).click();

    await expect(page).toHaveURL(/pim/);

});