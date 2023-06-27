class LoginPage {
    private locatorUserNameInputField = '#username';
    private locatorPasswordInputField = '#password';
    private locatorSubmitBtn = 'button[type="submit"]';

    public get inputUserName() {
        return $(this.locatorUserNameInputField);
    }

    public get inputPassword() {
        return $(this.locatorPasswordInputField);
    }

    public get submitBtn() {
        return $(this.locatorSubmitBtn);
    }
}

export default new LoginPage();
