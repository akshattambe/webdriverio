import { maximize } from "../util/devices";

class App {
    
    openHomePage(){
        var homePageUrl = 'http://zero.webappsecurity.com/index.html';
        browser.url(homePageUrl);
    }

    maximizeBrowser(){
        browser.setWindowSize(maximize[0], maximize[1]);
    }
}

export default new App();