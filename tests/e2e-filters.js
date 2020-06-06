import { describe } from "mocha/lib/mocha";

describe('E2E Test - Transaction Filters', () => {
    it('Should log into application', () => {
		browser.url('http://zero.webappsecurity.com/index.html')
		browser.setWindowSize(maximize[0], maximize[1]);
		$('#signin_button').waitForExist()
		$('#signin_button').click()
		$('#login_form').waitForExist()
		$('#user_login').setValue('username')
		$('#user_password').setValue('password')
		$('input[type="submit"]').click()
		$('.nav-tabs').waitForExist()
    })
    
    it('Should log into application', () => {
		//do for practice.
    });
});