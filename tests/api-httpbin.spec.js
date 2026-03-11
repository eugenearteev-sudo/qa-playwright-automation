// Реальный API запрос: используем request.post, response.status, response.json, assertions

const { test, expect } = require('@playwright/test');

test('API: POST login simulation', async ({ request }) => {

    const response = await request.post('https://httpbin.org/post', {
        data: {
            username: 'tomsmith',
            password: 'SuperSecretPassword!'
        }
    });

    // Проверяемя статус
    expect(response.status()).toBe(200);

    // Проверка заголовка
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();

    // httpbin возвращает то, что мы отправили
    expect(body.json).toBeDefined();

    expect(body.json.username).toBe('tomsmith');
    expect(body.json.password).toBe('SuperSecretPassword!');

});