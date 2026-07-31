import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import testData from '../data/testData.json';

// To generate random strings for invalid credentials testing
const generateRandomString = (length: number = 8) => {
  return Math.random().toString(36).substring(2, 2 + length);
};

test.describe('Login & Core Flow Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    await loginPage.goto();
  });

  test('Test 1: Standard User Login', async () => {
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await inventoryPage.verifyIsDisplayed();

    // add random and store name for verification in cart
    const addedProductName = await inventoryPage.addRandomProductToCart();
    await inventoryPage.goToCart();
    
    // verification
    const cartItems = await cartPage.getCartItemNames();
    expect(cartItems).toContain(addedProductName);

    // Check out
    await cartPage.proceedToCheckout();
    await checkoutPage.fillInformation(
      testData.checkout.firstName,
      testData.checkout.lastName,
      testData.checkout.zipCode
    );
    await checkoutPage.finishCheckout();
    
    await checkoutPage.verifyOrderComplete(testData.messages.checkoutComplete);
  });

  test('Test 2: Locked Out User Login', async () => {
    await loginPage.login(testData.lockedOutUser.username, testData.lockedOutUser.password);

    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toBe(testData.messages.lockedOutError);
  });


  test('Test 3: Login with generated invalid credentials', async () => {
    const randomUsername = generateRandomString();
    const randomPassword = generateRandomString();
    
    await loginPage.login(randomUsername, randomPassword);
    
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toBe(testData.messages.invalidCredentialsError);
  });

  
});