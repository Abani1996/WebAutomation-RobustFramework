import HomePage from "../pages/home.page.ts";

class HomePageAction {

    public async checkFlashAlert(){
        return await HomePage.flashAlert;
    }
}

export default new HomePageAction();