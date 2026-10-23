import{Locator, Page} from '@playwright/test'
export class ProductPage
{
    page: Page;
    constructor (page: Page)
    {
        this.page = page;
    }
    async openPage()
    {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }
}