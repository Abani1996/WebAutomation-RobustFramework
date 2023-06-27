import PageBase from "../pages/pageBase.ts";
import LoginPage from "../pages/login.page.ts";

class LoginPageAction extends PageBase {

    private async enterUserName(username: string){
        return await LoginPage.inputUserName.setValue(username);
    }

    private async enterPassword(password: string){
        return await LoginPage.inputPassword.setValue(password);
    }

    private async clickOnSubmitBtn(){
        return await LoginPage.submitBtn.click();
    }

    public async login (username: string, password: string) {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickOnSubmitBtn();
    }
}

export default new LoginPageAction();