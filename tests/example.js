describe('This is my first test \nTest001', () =>{
    it('Step: 1', () => {
        browser.url('http://www.example.com/')
        browser.pause(2000)
        expect(browser).toHaveUrl('http://www.example.com/');
        expect(browser).toHaveTitle('Example Domain');
    })

    it('Step: 2', () => {
        const str = 'Example Domain';
        //get the element and getText to variable
        const h1 = $('//h1');
        const h1Txt = $('//h1').getText();

        //Explicite wait.
        h1.waitForExist();

        expect(h1).toBeVisible();
        //expect(h1).toHaveText(str);
        expect(h1).toHaveText(h1Txt);
    })
})
