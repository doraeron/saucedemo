# Framework Overview
This repository contains a robust UI automation framework built with **Playwright** and **TypeScript**. 
It is designed to test the core e-commerce workflows of [SauceDemo](https://www.saucedemo.com). 

The framework follows the POM design pattern to ensure high maintainability and reusability. 
Test logic is decoupled from UI locators, and test data is isolated into dedicated JSON files. It includes built-in capabilities for parallel execution, automatic retries on CI, failure screenshots, and comprehensive HTML reporting.

# Folder Structure
* `tests/`: Contains the actual test specifications (e.g., `saucedemo.spec.ts`). These files manage the test flow, utilize Page Objects, and execute assertions.
* `pages/`: Contains the Page Object classes (`LoginPage.ts`, `InventoryPage.ts`, etc.). Each class encapsulates the locators and user interactions specific to a single page.
* `data/`: Contains externalized test data (`testData.json`) to keep hardcoded values out of the test logic and support data-driven testing.
* `playwright.config.ts`: The global configuration file for Playwright, defining browser settings, timeouts, reporters, and CI-specific behaviors.
* `package.json`: Manages project dependencies (Playwright, TypeScript) and defines custom command-line scripts for execution.

# Prerequisites:
Run below in terminal to ensure presence of [Node.js](https://nodejs.org/) 
1. Clone the repository:
    git clone **URL** - later replace after push
2. Navigate to the project root directory:
    cd **SAUCEDEMO**
3. Install Node dependencies:
    npm install
4. Install Playwright browsers: This step downloads the required Chromium, Firefox, and WebKit binaries.
    npx playwright install  


# Execution & Debugging Instructions
## Method 1 - Test Report (Standard Execution -- as provided sample)
* This method runs the entire test suite in the background (headless mode).
* After the run completes, you launch a static HTML report to review pass/fail statuses, error logs, and screenshots of any failures.
    Terminal Commands:
    1. npm run test
      Terminal Output: <img width="948" height="173" alt="image" src="https://github.com/user-attachments/assets/d01b0f19-9423-4342-b878-3651b27535cd" />

    2. npx playwright show-report
       A report html page will be opened on browser
      <img width="1011" height="330" alt="image" src="https://github.com/user-attachments/assets/350adff5-c7e8-49d7-bfc7-12d6f752ab66" />
      r<img width="1011" height="558" alt="image" src="https://github.com/user-attachments/assets/7fae9778-2147-462b-b825-da3a83fe449d" />




## Method 2 - Playback (Interactive UI Mode)
* This method launches Playwright's built-in interactive UI window.
* It allows you to visually debug, step through test steps one by one, and inspect the application's state at any point in time.
    Terminal Command:
    -  npx playwright test --ui
