import { maximize } from "../util/devices";
import { short } from "../util/utilText";
const DateClass = require('../util/utilMethods');
const dateObj = new DateClass();


describe('E2E Tests - Pay', () => {
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
 
	it('Should make payment', () => {
		$('#pay_bills_tab').click()
		const selectPayee = $('#sp_payee')
		selectPayee.waitForExist()
		selectPayee.selectByAttribute('value', 'apple')
		const selectAccount = $('#sp_account')
		selectAccount.waitForExist()
		selectAccount.selectByVisibleText('Loan')
        $('#sp_amount').setValue('500')

        $('#sp_date').setValue(dateObj.getTodaysDateInFormat());
        browser.pause(short);

		$('#sp_description').setValue('Test')
		$('#pay_saved_payees').click()
		const message = $('#alert_content')
		expect(message).toHaveText('The payment was successfully submitted.')
	})
})