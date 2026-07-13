const { test, expect } = require('@playwright/test');

test('LoginTest', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await page.locator('input[name="username"]').fill('Admin');

    await page.locator('input[name="password"]').fill('admin123');

    await page.locator('button[type="submit"]').click();

    await expect(page).toHaveURL(/dashboard/);

    await expect(page).toHaveTitle(/OrangeHRM/);

});