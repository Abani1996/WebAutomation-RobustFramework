class HomePage {
    private locatorflashAlert = '#flash';

    public get flashAlert() {
        return $(this.locatorflashAlert);
    }
}

export default new HomePage();
