import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Verify OrangeHRM Login', async ({ page }) => {

    // Create LoginPage object
    const loginPage = new LoginPage(page);

    // Open OrangeHRM application
    await loginPage.openApplication();

    // Login with valid credentials
    await loginPage.login('Admin', 'admin123');

    // Verify user is on Dashboard page
   await expect(page).toHaveURL(/dashboard/, { timeout: 60000 });
   

});

test('Verify Forgot Password Link', async ({ page }) => {

    // Create LoginPage object
    const loginPage = new LoginPage(page);

    // Open OrangeHRM application
    await loginPage.openApplication();

    // Click Forgot Password
    await loginPage.clickForgotPassword();

    // Verify Forgot Password page
    await expect(page).toHaveURL(/requestPasswordResetCode/);

});

test('Verify Invalid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.openApplication();

    await loginPage.login('Admin', 'WrongPassword');

await expect(page.getByRole('alert')).toContainText('Invalid credentials');
});

test('Verify Logout', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.openApplication();

    await loginPage.login('Admin', 'admin123');

    await expect(page).toHaveURL(/dashboard/, { timeout: 60000 });

    await loginPage.logout();

    await expect(page).toHaveURL(/login/, { timeout: 60000 });

});