// API логка (fakeResponse): проверка status, token, body, контракт ответа

const { test, expect } = require('@playwright/test');

test('API login example: validate response shape', async ({ request }) => {
    // Учебный пример ответа API
    const fakeResponse = {
        status: 200,
        body: {
            token: 'abc123',
            user: {
                id: 5,
                username: 'tomsmith',
            },
        },
    };

    // Проверка статуса
    expect(fakeResponse.status).toBe(200);

    // Проверка обязательных полей
    expect(fakeResponse.body.token).toBeDefined();
    expect(fakeResponse.body.user).toBeDefined();

    // Проверка типов данных
    expect(typeof fakeResponse.body.token).toBe('string');
    expect(typeof fakeResponse.body.user.id).toBe('number');
    expect(typeof fakeResponse.body.user.username).toBe('string');

    // Проверка значений
    expect(fakeResponse.body.token).not.toBe('');
    expect(fakeResponse.body.user.id).toBeGreaterThan(0);
    expect(fakeResponse.body.user.username).toBe('tomsmith');
});

test('API login example: invalid password response', async() => {
    // Учебный пример негативного ответа API
    const fakeResponse = {
        status: 401,
        body: {
            error: 'Invalid credentials'
            },
        };
    
    // Проверка статуса
    expect(fakeResponse.status).toBe(401);

    // Проверка обязательного поля ошибки
    expect(fakeResponse.body.error).toBeDefined();
    expect(typeof fakeResponse.body.error).toBe('string');
    expect(fakeResponse.body.error).not.toBe('');
   
    // Проверка, что token не пришел
    expect(fakeResponse.body.token).toBeUndefined();
 });