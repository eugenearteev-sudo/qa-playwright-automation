![Playwright Tests](https://github.com/eugenearteev-sudo/qa-playwright-automation/actions/workflows/playwright.yml/badge.svg)
# UI Automation Project — Login (Playwright)

## Description
A small automation project for testing a login page using **Playwright (JavaScript)**.

The project demonstrates core **QA Automation skills**:

```
- writing UI automated tests 
- test parametrization 
- assertions and validations 
- improving report readability with `test.step` 
- failure diagnostics (trace, screenshots, video) 
- cross-browser testing 
- CI integration with GitHub Actions 
```
Test application: 

https://the-internet.herokuapp.com/login

---

## Covered Test Scenarios 

### Login
```
- Successful login (valid credentials) + URL verification 
- Invalid password 
- Invalid username 
- Empty username and password 
- Empty password 
- Empty username 
```
### Logout
```
- Successful logout after login 
- Verification of redirect and logout message 
```
---

## Test Architecture

The project follows **Page Object Model (POM)**. 

Structure:
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

Contains:
```
— locators 
— page actions
— reusable assertions
```
  ### Test files

  Test files describe **business scenarios**, not UI implementation details.
  

---

# Cross-Browser Testing

Test run in:
```
— Chromium
— Firefox
— WebKit (Safari engine)
```
Example run:
```
36 test passed
(12 scenarios × 3 browsers)
```
---

# Reporting

PLaywright HTML reporter is used.

On failure the framework automatically saves:
```
— screenshots
— video
— trace
```
Trace allows debugging with full timeline of actions.

Open report:

```bash
npm run test:report
```

## Technologies

- Node.js
- Playwright
- JavaScript
- GitHub Actions (CI)

---
## Running the Project


Install dependencies:
```bash
npm install
```

Run all tests:
```bash
npm run test
```

Run only UI tests:
```bash
npm run test:ui
```

Run only API tests:
```bash
npm run test:api
```

Open HTML report:
```bash
npm run test:report
```

List all tests:
```bash
npx playwright test --list
```

---


## Continuos Integration

The project uses GitHub Actions. 

CI pipeline:
```
1) Install dependencies 
2) Install Playwright browsers 
3) Run tests 
4) Upload Playwright HTML report as artifact 
```
Each push automatically runs the test suite.


## Project Structure

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

## QA Documentation

The project also includes manual QA artifacts:

- `docs/bug-reports.md` — sample bug reports
- `docs/test-cases.md` — sample test cases

## Author

Eugene Arteev

QA Automation Engineer (in training)

GitHub: https://github.com/eugenearteev-sudo

Automation practice project using Playwright.

---
