import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutBtn: Locator;
  readonly inventoryItemName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    this.inventoryItemName = page.locator('.inventory_item_name');
  }

  async getCartItemNames() {
    return await this.inventoryItemName.allTextContents();
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }
}