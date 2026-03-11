// Черновик: внешний сервис вернул с пометкой 403

const { test, expect } = require('@playwright/test');

test.skip('API: get user list', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2', {
        headers: {
            'Accept': 'application/json',
            'USer-Agent': 'Playwright'
        }
    });

    console.log('STATUS:', response.status());

    
    const body = await response.json();


    // Проверяем статус
    expect(response.status()).toBe(200);

    // Проверяем структуру ответа
    expect(body.page).toBeDefined();
    expect(body.data).toBeDefined();

    // Проверяем, что users есть
    expect(Array.isArray(body.data)).toBeTruthy();

    // Проверяем первого пользователя
    const user = body.data[0];

    expect(user.id).toBeDefined();
    expect(user.email).toContain('@');
});