![Playwright Tests](https://github.com/eugenearteev-sudo/qa-playwright-automation/actions/workflows/playwright.yml/badge.svg)
# UI Automation Project — Login (Playwright)

## 📌 Описание
Небольшой проект по автоматизации UI-тестирования страницы логина с использованием Playwright (JavaScript).

Проект демонстрирует базовые навыки automation QA:
- написание автотестов
- параметризация сценариев
- работа с assertions
- улучшение читаемости отчётов через test.step
- диагностика падений (trace, screenshot)

Тестовый стенд:
https://the-internet.herokuapp.com/login

---

## ✅ Покрытые сценарии

- Успешный логин (валидные креды) + проверки URL и Logout
- Неверный password
- Неверный username
- Пустые поля (username/password)
- Сквозной сценарий Logout (login → logout → проверки)
---

## Архитектура
В проекте используется Page Object Model (POM):
- `pages/LoginPage.js` — инкапсулирует локаторы, действия и типовые проверки страницы логина
- тесты в `tests/login.spec.js` описывают сценарии и бизнес-поведение, не зависят от деталей верстки
---

## ⚙️ Технологии

- Node.js
- Playwright
- JavaScript

---
## 🚀 Запуск проекта


Установить зависимости:
```bash
npm install
```

Запуск всех тестов (Chromium):
```bash
npx playwright test --project=chromium
```


Запуск конкретного файла:
```bash
npx playwright test "tests/login.spec.js" --project=chromium
```

Посмотреть список тестов:
```bash
npx playwright test --list
```

Открыть HTML-отчет:
```bash
npx playwright show-report
```

---
## 📂 Структура проекта

- `tests/login.spec.js` — автотесты логина (параметризация + logout)
- `playwright.config.js` — конфигурация Playwright

