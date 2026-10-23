import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { ProductPage } from "../pages/ProductPage";
test('Verify Username contains value', async({page}) =>{
    const loginPage = new LoginPage(page);
    await loginPage.openPage();
    await loginPage.enterUsername('abcd');
    await expect(loginPage.username).toHaveValue('abcd');
} )
test('Verify valid Login', {tag:'@regression'}, async({page}) =>{
    const loginPage = new LoginPage(page);
    await loginPage.openPage();
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.cliclLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
} )
test('Verify invalid Login - invalid username', {tag: '@regression'},async({page}) =>{
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    await loginPage.openPage();
    await loginPage.enterUsername('abcd');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.cliclLogin();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match any user in this service');
} )
test('Verify invalid Login - invalid password', {tag: '@regression'}, async({page}) =>{
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    await loginPage.openPage();
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('passWhat');
    await loginPage.cliclLogin();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match any user in this service');
} )


