const { test, expect } = require('@playwright/test');

const REGISTER_URL = 'https://example.com/register'; // Заменить на реальный URL, когда будет
const SUCCESS_URL_PART = /welcome|profile|account/; // Пример, зависит от продукта


async function register(page, username, password, confirmPassword) {
    await page.goto(REGISTER_URL);
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.fill('#confirmPassword', confirmPassword);
    await page.getByRole('button', { name: /register/i }).click();
}

const testCases = [
    {
        name: 'Valid registration',
        username: 'newUser123',
        password: 'StrongPass123!',
        confirmPassword: 'StrongPass123!',
        expectedTest: 'Registration successful',
        isSuccess: true,
    },
    {
        name: 'Empty username',
        username: '',
        password: 'StrongPass123!',
        confirmPassword: 'StrongPass123!',
        expectedTest: 'Username is required',
        isSuccess: false,
    },
    {
        name: 'Password mismatch',
        username: 'newUser123',
        password: 'StrongPass123!',
        confirmPassword: 'OtherPass123!',
        expectedTest: 'Password do not match',
        isSuccess: false,
    },
];

testCases.forEach(({ name, username, password, confirmPassword, expectedTest, isSuccess}) => {
    test(`Register: ${name}`, async ({ page }) => {
        await test.step('Submit registration form', async () => {
            await register(page, username, password, confirmPassword);
        });


        await test.step('Verify system response', async () => {
            // 1) сообщение (всегда)
            await expect(page.locator('#flash')).toContainText(expectedText);

            // 2) успех
            if (isSuccess) {
                await expect(page).toHaveURL(SUCCESS_URL_PART);
                //пример: await expect(page.getByRole('link', { name: /logout/i })).toBeVisible ();
            }

            // 3) провал
            if (!isSuccess) {
                await expect(page).toHaveURL(/register/);
            }
        });
    });
});