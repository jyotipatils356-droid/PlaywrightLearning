export class LoginPage {

    constructor(page) {
        this.page = page;

        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.forgotPasswordLink = page.getByText('Forgot your password?');

        this.userDropdown = page.locator('.oxd-userdropdown-tab');
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
    }

    async openApplication() {
        await this.page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            { waitUntil: 'domcontentloaded' }
        );

        await this.usernameInput.waitFor({ state: 'visible' });
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async clickForgotPassword() {
        await this.forgotPasswordLink.waitFor({ state: 'visible' });
        await this.forgotPasswordLink.click();

        await this.page.waitForURL(/requestPasswordResetCode/);
    }

    async logout() {
        await this.userDropdown.click();
        await this.logoutButton.click();

        await this.page.waitForURL(/login/);
    }
}