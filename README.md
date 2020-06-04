# webdriverio
WebdriverIO for beginners

1. Setup package.json file.
2. Downlaod and setup webdriver packages and configuration
    * Install webdriverio cli package. And validate the dependency added in package json.
	    * $ npm install --save-dev @wdio/cli
	* Generate webdriverio config file. And validate the dependency added in package json.
	    * Create a folder named 'tests' under root directory. And run below command from root -
	    * $ npx wdio config
	* Install Mocha
	    * $ npm i mocha
	* Add a test file example.js
	* Add a test to open a url in browser
	* Run the test using following command from the 'tests' folder
	    * $ npm run test
