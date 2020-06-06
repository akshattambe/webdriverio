import { maximize } from "../util/devices";

describe('E2E - Feedback', () => {
	it('Should load feedback form', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        browser.setWindowSize(maximize[0], maximize[1]);
		$('#feedback').waitForExist()
		$('#feedback').click()
		$('form').waitForExist()
	})
 
	it('Should submit feedback form', () => {
		$('#name').setValue('Name')
		$('#email').setValue('test@test.com')
		$('#subject').setValue('Subjects')
		$('#comment').setValue('Just a message!')
		$('input[type="submit"]').click()
		expect(browser).toHaveUrl(
			'http://zero.webappsecurity.com/sendFeedback.html'
		)
	})
})