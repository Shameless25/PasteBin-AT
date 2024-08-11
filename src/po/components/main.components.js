class MainComponents{

    constructor() {
       this.selectors = {
        textfield: `[name="PostForm[text]"]`,
        dropdown:`//div[@class="form-group field-postform-expiration"]`,
        options:'//li[contains(text(), "10 Minutes")]',
        titlefield:`#postform-name`,
        button:`.btn.-big`,
        infocheck:`div.de1`,
        timeleft:`div.expire`,
        titlecheck:`div.info-top`
       }
    }
    item(el){
        return $(this.selectors[el]);
    }
}

export default MainComponents;