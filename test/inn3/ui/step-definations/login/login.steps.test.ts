import { Given, Then, When } from "@wdio/cucumber-framework";
import LoginPageAction from "../../../../../fixtures/inn3/app/ui/pageActions/login.page.action.ts"
import HomePageAction from "../../../../../fixtures/inn3/app/ui/pageActions/home.page.action.ts"
import { PageName } from "../../../../../fixtures/testData/ui/pageTitles.ts";
import users from "../../../../../fixtures/testData/common/accountCredentials.json" assert { type: "json" };

Given('I am on the login page', async ()=>{
    await LoginPageAction.open(PageName.LOGIN_PAGE);
});

When('I login with valid username and password',async () => {
    await LoginPageAction.login(
        users.account.roles.endUser.userName, users.account.roles.endUser.password);
});

Then('I should see a successful message', async ()=>{
    await expect(HomePageAction.checkFlashAlert()).toBeExisting();
});