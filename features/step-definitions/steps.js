const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');

const LoginPage = require('../pageobjects/login.page');

let loginPage;

Given(/^I am on the login page$/, async () => {
    loginPage = new LoginPage();
    await loginPage.open();
});

When(/^I enter invalid credentials (.*) and (.*)$/, async (username, password) => {
    await loginPage.login(username, password);
});


Then(/^I should see the login error message$/, async () => {
    await expect(await loginPage.isErrorMessageDisplayed()).to.be.true;
});

Then(/^I should be on the same page$/, async () => {
    await expect(await loginPage.getCurrentUrl()).to.equal('https://www.saucedemo.com/');
});