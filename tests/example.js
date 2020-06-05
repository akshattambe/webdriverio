describe('This is my first test \nTest001', () =>{
    it('Step: 1 - Open the browser and assert for URL and Title', () => {
        
        //Setting up window size.
        browser.setWindowSize(1920,1080);

        //Navigate to url.
        browser.url('http://www.example.com/');
        browser.pause(2000);

        //assertion using wdio expect.
        expect(browser).toHaveUrl('http://www.example.com/');
        expect(browser).toHaveTitle('Example Domain');
    });

    it('Step: 2 - Use Explicit test', () => {
        const str = 'Example Domain';
        //get the element and getText to variable
        const h1 = $('//h1');
        const h1Txt = $('//h1').getText();

        //Explicite wait example.
        h1.waitForExist();

        expect(h1).toBeVisible();
        //expect(h1).toHaveText(str);
        expect(h1).toHaveText(h1Txt);
    })

    it('Step: 3 - Assert for attribute values', () => {
        const newUrl = 'https://devexpress.github.io/testcafe/example/';
        browser.url(newUrl);
        browser.pause(3000);

        //find element by id example.
        const submitBtn = $('#submit-button');
        submitBtn.waitForExist();

        expect(submitBtn).toHaveAttrContaining('type','submit');


    })

    it('step: 4 - Take screenshots', () => {
        var timestamp = new Date().getTime();
        browser.saveScreenshot('./screenshots/'+ timestamp + '.png');
    });

})
