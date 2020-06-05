import { short, waitForSec } from "../util/utilText";

describe('Browser Actions', () => {
    
    it('Inputs', () => {
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
});