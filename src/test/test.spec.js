import MainPage from './../po/pages/main.page.js';

const mainPage = new MainPage();

describe("Pastebin Test", () =>{
    beforeEach(async () => {
        await mainPage.open();
    });
    it("Creating New PasteBin with set value", async()=>{
        const originalUrl = await browser.getUrl();
        await mainPage.mainSelectors.item('textfield').setValue('Hello from WebDriver');
        await mainPage.mainSelectors.item('dropdown').click();
        await mainPage.mainSelectors.item('options').waitForDisplayed({ timeout: 5000 });
        await mainPage.mainSelectors.item('options').click();
        await mainPage.mainSelectors.item('titlefield').setValue('helloweb');
    });
});