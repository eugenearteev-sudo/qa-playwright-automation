const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => { // создай loginPage перед тестом
        const loginPage = new LoginPage(page);
        await use(loginPage); // передает в тест созданный loginPage
    }.
});

exports.expect = base.expect;
