## Framework Overview
This repository contains a robust UI automation framework built with **Playwright** and **TypeScript**. 
It is designed to test the core e-commerce workflows of [SauceDemo](https://www.saucedemo.com) with different account type scenarios.

The framework follows the POM design pattern to ensure high maintainability and reusability; Test logic is decoupled from UI locators, and test data is isolated into dedicated JSON files. It includes built-in capabilities for parallel execution, automatic retries on CI, failure screenshots, and comprehensive HTML reporting.

## Folder Structure
* `tests/`: Contains the actual test specifications (e.g., `saucedemo.spec.ts`). These files manage the test flow, utilize Page Objects, and execute assertions.
* `pages/`: Contains the Page Object classes (`LoginPage.ts`, `InventoryPage.ts`, etc.). Each class encapsulates the locators and user interactions specific to a single page.
* `data/`: Contains externalized test data (`testData.json`) to keep hardcoded values out of the test logic and support data-driven testing.
* `playwright.config.ts`: The global configuration file for Playwright, defining browser settings, timeouts, reporters, and CI-specific behaviors.
* `package.json`: Manages project dependencies (Playwright, TypeScript) and defines custom command-line scripts for execution.

## Prerequisites:
Run below in terminal to ensure presence of [Node.js](https://nodejs.org/) 
1. Clone the repository:
   ```bash
   git clone https://github.com/doraeron/saucedemo
2. Navigate to the project root directory:
   ```bash
   cd saucedemo
3. Install Node dependencies:
   ```bash
    npm install
4. Install Playwright browsers: This step downloads the required Chromium, Firefox, and WebKit binaries.
   ```bash
    npx playwright install

## Execution & Debugging Instructions
### Method 1 - Test Report (Standard Execution)
* This method runs the entire test suite in the background (headless mode).
* After the run completes, a static HTML report will be launched to review pass/fail statuses, error logs, and screenshots of any failures.
   ```bash
   npm run test
   npx playwright show-report
1. Terminal Output: <img width="948" height="173" alt="image" src="https://github.com/user-attachments/assets/d01b0f19-9423-4342-b878-3651b27535cd" />
2. Browser HTML Report:
<img width="1011" height="330" alt="image" src="https://github.com/user-attachments/assets/350adff5-c7e8-49d7-bfc7-12d6f752ab66" />
<img width="1680" height="607" alt="image" src="https://github.com/user-attachments/assets/d48c058d-87a5-497d-982f-90324f002bbc" />

3. A folder named [playwright-report] will be created and the HTML report (as in item 2) will be retrievable.
<img width="718" height="41" alt="image" src="https://github.com/user-attachments/assets/c8e0fda4-d50e-45bd-8961-9394dcc039f3" />

### Method 2 - Playback (Interactive UI Mode)
* This method launches Playwright's built-in interactive UI window.
* It allows you to visually debug, step through test steps one by one, and inspect the application's state at any point in time.
    ```bash
   npx playwright test --ui
<img width="1680" height="634" alt="image" src="https://github.com/user-attachments/assets/4a209961-dccf-4f2b-bc2f-dd073d3ffdcd" />

    
## Continuous Integration (CI/CD)
This repository includes a GitHub Actions workflow located at `.github/workflows/playwright.yml`. 
* **Automated Execution:** Every time code is pushed or a pull request is opened, GitHub automatically provisions a clean environment, installs Node.js dependencies and Playwright browsers, and runs the entire test suite.
* **Artifact Storage:** Test reports and execution artifacts are automatically packaged and stored on every run.
