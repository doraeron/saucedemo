import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartIcon: Locator;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartIcon = page.locator('.shopping_cart_link');
    
    // grep item list
    this.inventoryItems = page.locator('.inventory_item');
  }

  async verifyIsDisplayed() {
    await expect(this.title).toHaveText('Products');
  }

  async addRandomProductToCart() {
    const count = await this.inventoryItems.count();
    const randomIndex = Math.floor(Math.random() * count);
    const randomItem = this.inventoryItems.nth(randomIndex);
    
    //get name to verify in cart
    const productName = await randomItem.locator('.inventory_item_name').textContent();
    await randomItem.locator('button').click();
    return productName?.trim();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}