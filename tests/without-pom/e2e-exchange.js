import { maximize } from "../../util/devices";
import {describe} from "mocha";

describe('E2E Tests - Currency Exchange', () => {
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
 
	it('Should make currency exchange', () => {
		$('#pay_bills_tab').waitForExist()
		$('#pay_bills_tab').click()
		//$('#tabs > ul > li:nth-child(3) > a').waitForExist()
		//$('#tabs > ul > li:nth-child(3) > a').click()
		$('//a[@href="#ui-tabs-3"]').waitForExist()
		$('//a[@href="#ui-tabs-3"]').click()
		
		const currencySelect = $('#pc_currency')
		currencySelect.waitForExist()
		currencySelect.selectByAttribute('value', 'GBP')
		$('#pc_amount').setValue('500')
		$('#pc_inDollars_true').click()
		$('#purchase_cash').click()
		const message = $('#alert_content')
		expect(message).toHaveText(
			'Foreign currency cash was successfully purchased.'
		)
	})
})