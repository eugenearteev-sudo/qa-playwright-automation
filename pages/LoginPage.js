const { expect } = require('@playwright/test');


class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = '#username';
        this.passwordInput = '#password';
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.flashMessage = '#flash'; 
    }

    async goto() {
        await this.page.goto(`${process.env.BASE_URL}/login`);
    }


    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.loginButton.click();
    }


    async getFlashText() {
        return await this.page.locator(this.flashMessage).innerText();
    }


    async expectFlashMessage(expectedText) {
        const flash = this.page.locator(this.flashMessage);
        await expect(flash).toBeVisible();   // Дождались появления
        await expect(flash).toContainText(expectedText);   // Проверили текст (для устойчивости можно добавить new RegExp, в нашем случае необязательно)
    }


    async expectLoggedIn() {
        await expect(this.page).toHaveURL(/secure/);
        await expect(this.page.getByRole('link', { name: 'Logout' })).toBeVisible();

    }

    async expectStayedOnLogin() {
        await expect(this.page).toHaveURL(/login/);
    }

    async logout() {
        await this.page.getByRole('link', { name: 'Logout' }).click();
    }

}

module.exports = { LoginPage };