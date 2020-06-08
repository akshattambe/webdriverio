import LoginPage from '../../page-object/pages/LoginPage';
import App from '../../page-object/App';

describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        App.openHomePage();
        App.maximizeBrowser();
        
        LoginPage.clickSignInButton();
        LoginPage.login('invalid','invalid');

        const error = LoginPage.errorMessage;
        expect(error).toHaveText('Login and/or password are wrong.')
    })
 
    it('Should login with valid credentials', () => {
        App.openHomePage();
        
        LoginPage.clickSignInButton();
        LoginPage.login('username','password');

        $('.nav-tabs').waitForExist()
    })
 
    it('Should logout from app', () => {
        LoginPage.logout();
    })

})