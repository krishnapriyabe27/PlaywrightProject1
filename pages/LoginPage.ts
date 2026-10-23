import{Locator, Page} from '@playwright/test'
export class LoginPage
{
    page: Page;
    username: Locator;
    password: Locator;
    loginButton: Locator;
    errorMessage: Locator;
    constructor (page: Page)
    {
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3');
    }
    async openPage()
    {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async enterUsername(userName: string)
    {
        await this.username.fill(userName);
    }
    async enterPassword(passWord: string)
    {
        await this.password.fill(passWord);
    }
    async cliclLogin()
    {
        await this.loginButton.click();
    }
}
