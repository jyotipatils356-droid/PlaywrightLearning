const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const data = require('../testData/loginData');

test('Verify User Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.openWebsite();

    await loginPage.login(
        data.username,
        data.password
    );

});