// Реальный API запрос: используем request.post, response.status, response.json, assertions

const { test, expect } = require('@playwright/test');

test.describe('API Tests', () => {
test.describe('HTTPBin API tests', () => {


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

// 
test('API: response has required headers and body structure', async ({ request }) => {
    const response = await request.post('https://httpbin.org/post', {
        data: {
            username: 'alex',
            password: '123456',
        }
    });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();

    expect(body.json).toBeDefined();
    expect(typeof body.json.username).toBe('string');
    expect(typeof body.json.password).toBe('string');

    expect(body.json.username).not.toBe('');
    expect(body.json.password).not.toBe('');
});

// Проверка negative input: проверяем, что сервер не падает, API отвечает корректно, структура ответа не ломается

test('API: negative request with empty body', async ({ request }) => {
    const response = await request.post('https://httpbin.org/post', {
        data: {}
    });

    // Статус ответа
    expect(response.status()).toBe(200);

    // headers
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();

    // Структура ответа
    expect(body.json).toBeDefined();

    // Тело запроса пустое
    expect(body.json).toEqual({});
});

});
});