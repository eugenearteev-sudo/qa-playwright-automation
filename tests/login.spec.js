const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { loginTestCases } = require('../data/loginTestCases');

const VALID_USERNAME = 'tomsmith';
const VALID_PASSWORD = 'SuperSecretPassword!';

const OUTCOME_SUCCESS = 'success';
const OUTCOME_ERROR ='error';

let loginPage; // чтобы убрать "const loginPage = new LoginPage(page);" 

// ДЕЙСТВИЯ (21.02.26 удалили, т.к. logout приводим в порядок)


// СЦЕНАРИИ (21.02.26 перенесли их loginTestCases)

// Чтобы убрать goto - добавляем это:


test.beforeEach(async({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});


// ТЕСТЫ
loginTestCases.forEach(({ name, username, password, expectedText, expectedOutcome }) => {
  test(`Login: ${name}`, async ({ page }) => {
    
    await test.step('Open login page and submit credentials', async () => {
       await loginPage.login(username, password);
    });

    await test.step('Verify system response', async () => {
      // 1) Сообщение - ВСЕГДА
      await loginPage.expectFlashMessage(expectedText);

      // 2) Доступ - только если УСПЕШНАЯ АВТОРИЗАЦИЯ
      if (expectedOutcome === OUTCOME_SUCCESS) {
      await loginPage.expectLoggedIn();
      }

      // 3) Запрет доступа - для НЕГАТИВНЫХ СЦЕНАРИЕВ
      else if (expectedOutcome === OUTCOME_ERROR) {
        await loginPage.expectStayedOnLogin();
      } 

      // 4) Защита от "ЛОЖНО-ЗЕЛЕНЫХ" тестов (для неизвестного expectedOutcome)
      else {
        throw new Error(`Unknown expectedOutcome: ${expectedOutcome}`);
      }
          

    });
  });
});




// Отдельный тест по сценарию "LOGOUT"
test.describe('Logout', () => {
test('User can logout after successful login', async ({ page }) => {
  

  await test.step('Login with valid credentials', async () => {
    await loginPage.login(VALID_USERNAME, VALID_PASSWORD);
    await loginPage.expectLoggedIn();
  });

  await test.step('Click Logout', async () => {
    await loginPage.logout();
  });

  await test.step('Verify user is logged out', async () => {
    await expect(page).toHaveURL(/login/);
    await loginPage.expectFlashMessage('You logged out of the secure area!');
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });
});
});

