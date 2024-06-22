const { defineConfig } = require('cypress')
const eyesPlugin = require('@applitools/eyes-cypress')

module.exports = eyesPlugin(
	defineConfig({
		watchForFileChanges: false,
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
		failOnStatusCode: false,
		projectId: 'b2imx7',
		env: {
			b2c: 'https://test-merchant.wgiftcard.com/responsive_auto/snapon_ca/virtual',
			eyesIsDisabled: false,
			eyesFailCypressOnDiff: true,
			eyesDisableBrowserFetching: false,
			eyesTestConcurrency: 5,
			eyesIsGlobalHooksSupported: false,
			eyesPort: 49833,
		},
		e2e: {
			setupNodeEvents(on, config) {
				return require('./cypress/plugins/index.js')(on, config)
			},
			specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
		},
	})
)
