import { short, waitForSec } from "../util/utilText";

describe('Browser Actions', () => {
    
    it('Browser Action: Test002 - setValue, addValue(), clearValue()', () => {
        const newUrl = 'https://devexpress.github.io/testcafe/example/';
        browser.url(newUrl);
        const input = $('#developer-name');
        input.waitForExist();
        input.setValue('Akshat');
        input.addValue(' Kumar')
        browser.pause(waitForSec);
        input.clearValue();
        browser.pause(waitForSec);
    });

    it('Select dropdown: ', () => {
        const dd = $('#preferred-interface')
        dd.waitForExist();
        dd.selectByVisibleText('JavaScript API');
        browser.pause(short);
    })
});