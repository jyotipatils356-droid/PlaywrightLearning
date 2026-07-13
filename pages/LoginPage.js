class LoginPage {

    constructor(page){
        this.page = page;

        this.usernameTextbox = page.locator('input[name="username"]');
        this.passwordTextbox = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async openWebsite() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username, password) {

        await this.usernameTextbox.fill(username);

        await this.passwordTextbox.fill(password);

        await this.loginButton.click();
    }
}

module.exports = LoginPage;