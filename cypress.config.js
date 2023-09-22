const { defineConfig } = require('cypress')
const generateOTP = require('cypress-otp')
const eyesPlugin = require('@applitools/eyes-cypress')

module.exports = eyesPlugin(
	defineConfig({
		watchForFilesChanges: false,
		chromeWebSecurity: false,
		viewportWidth: 1000,
		viewportHeight: 600,
		waitForAnimation: true,
		animationDistanceThreshold: 20,
		defaultCommandTimeout: 6000,
		execTimeout: 60000,
		pageLoadTimeout: 60000,
		requestTimeout: 15000,
		responseTimeout: 15000,
		video: false,
		screenshotOnRunFailure: false,
		failOnStatusCode: false,
		reporter: 'cypress-mochawesome-reporter',
		reporterOptions: {
			charts: true,
			reportPageTitle: 'test-report',
			embeddedScreenshots: true,
			inlineAssets: true,
			saveAllAttempts: false,
		},
		projectId: 'b2imx7',
		env: {
			b2c: 'https://test-merchant.wgiftcard.com/responsive_auto/snapon_ca/virtual',
		},
		e2e: {
			testIsolation: false,
			// We've imported your old cypress plugins here.
			// You may want to clean this up later by importing these.
			setupNodeEvents(on, config) {
				require('cypress-mochawesome-reporter/plugin')(on),
					require('./cypress/plugins/index.js')(on, config),
					on('task', {
						generateOTP: generateOTP,
					})
			},
			specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
		},
	})
)