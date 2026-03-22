![Playwright Tests](https://github.com/eugenearteev-sudo/qa-playwright-automation/actions/workflows/playwright.yml/badge.svg)
# UI Automation Project — Login (Playwright)

## 📌 Description (Описание)
A small automation project for testing a login page using **Playwright (JavaScript)**.

(Небольшой проект по автоматизации UI-тестирования страницы логина с использованием Playwright (JavaScript)).

The project demonstrates core **QA Automation skills**:

(Проект демонстрирует базовые навыки automation QA)
```
- writing UI automated tests 
  (написание автотестов)
- test parametrization 
  (параметризация сценариев)
- assertions and validations 
  (ассерты и валидации)
- improving report readability with `test.step` 
  (улучшение читаемости отчётов через test.step)
- failure diagnostics (trace, screenshots, video) 
  (диагностика падений (trace, screenshot, video))
- cross-browser testing 
  (кросс-браузерное тестирование)
- CI integration with GitHub Actions 
  (CI интеграция с GitHub Actions)
```
Test application: 

(Тестовый стенд)

https://the-internet.herokuapp.com/login

---

## ✅ Covered Test Scenarios (Покрытые сценарии)

### Login
```
- Successful login (valid credentials) + URL verification 
  (Успешный логин (валидные креды) + проверки URL)
- Invalid password 
  (Неверный password)
- Invalid username 
  (Неверный username)
- Empty username and password 
  (Пустые поля username и password)
- Empty password 
  (Пустое поле password)
- Empty username 
  (Пустое поле username)
```
### Logout
```
- Successful logout after login 
  (Успешный выход из системы после авторизации)
- Verification of redirect and logout message 
  (Проверка перенаправления и сообщения о выходе)
```
---

## 🧱 Test Architecture (Архитектура тестов)

The project follows **Page Object Model (POM)**. 

(В проекте используется Page Object Model (POM))

Structure:

(Структура)
```
pages/
      LoginPage.js

tests/
      ui/
         login.spec.js
      api/
          api-login.spec.js
          api-httpbin.spec.js
```
### Page Objects

`pages/LoginPage.js` 

Contains (содержит):
```
— locators 
  (локаторы)
— page actions
  (действия)
— reusable assertions
  (многоразовые утверждения)
```
  ### Test files

  Test files describe **business scenarios**, not UI implementation details.
  
  (Тестовые файлы описывают бизнес сценарии, а не детали реализации пользовательского интерфейса).

---

# 🌐 Cross-Browser Testing (Кросс-браузерное тестирование)

Test run in:

(Тест запускается в следующих браузерах)
```
— Chromium
— Firefox
— WebKit (Safari engine)
```
Example run:

(Пример запуска)
```
36 test passed
(12 scenarios × 3 browsers)
```
---

# 📊 Reporting (Отчетность)

PLaywright HTML reporter is used.

(Используется Playwright HTML reporter)

On failure the framework automatically saves:

(В случае ошибок во время выполнения тестов фреймворки автоматически сохраняют)
```
— screenshots
— video
— trace
```
Trace allows debugging with full timeline of actions.

(Фунцкция трассировки позволяет осуществлять отладку с отображением полной хролнологии действий)

Open report:

(Открыть отчет)

```bash
npm run test:report
```

## ⚙️ Technologies (Технологии)

- Node.js
- Playwright
- JavaScript
- GitHub Actions (CI)

---
## 🚀 Running the Project (Запуск проекта)


Install dependencies (Установить зависимости):
```bash
npm install
```

Run all tests (Запуск всех тестов):
```bash
npm run test
```

Run only UI tests (Запуск только UI тестов):
```bash
npm run test:ui
```

Run only API tests (Запуск только API тестов):
```bash
npm run test:api
```

Open HTML report (Открыть HTML-отчет):
```bash
npm run test:report
```

List all tests (Посмотреть список тестов):
```bash
npx playwright test --list
```

---


## 🔄 Continuos Integration (Непрерывная интеграция CI)

The project uses GitHub Actions. 

(Проект использует GitHub Actions)

CI pipeline:

(Конвейер непрерывной интеграции)
```
1️⃣ Install dependencies 
   (Установка необходимых библиотек)
2️⃣ Install Playwright browsers 
   (Загрузка бинарных файлов браузеров, необходимых для выполнения тестов )
3️⃣ Run tests 
   (Запуск тестов)
4️⃣ Upload Playwright HTML report as artifact 
   (Сохранение отчета о тестировании (HTML report) в артефакты CI)
```
Each push automatically runs the test suite.

(Каждый пуш автоматически запускает набор тестов)


## 📂 Project Structure (Структура проекта)

```

qa-playwright-automation
│
├── pages
│   └── LoginPage.js
│
├── tests
│   ├── ui
│   │   └── login.spec.js
│   │
│   └── api
│       ├── api-login.spec.js
│       └── api-httpbin.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

## 📘 QA Documentation (Документация QA)
```
The project also includes manual QA artifacts:

- `docs/bug-reports.md` — sample bug reports
- `docs/test-cases.md` — sample test cases

Проект также содержит manual QA артефакты:

- `docs/bug-reports.md` — примеры bug reports
- `docs/test-cases.md` — примеры test cases

```

## 👨‍💻 Author (Автор)

Evgenii Arteev

(Евгений Артеев)

QA Automation Engineer (in training)

(QA Automation Engineer (в процессе обучения))


GitHub: https://github.com/eugenearteev-sudo

Automation practice project using Playwright.

(Демонстрационный проект по автоматизации тестирования с использованием Playwright)

---
