const { defineConfig } = require('cypress')

module.exports = defineConfig({
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
  failOnStatusCode: false,
  projectId: 'b2imx7',
  env: {
    b2c: 'https://test-merchant.wgiftcard.com/responsive_auto/snapon_ca/virtual',
  },
  eyesIsDisabled: false,
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  appliConfFile: {
    apiKey: '',
    batch: {
      id: '205abc06-9d18-4d70-8074-9b5edef9d12f',
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 49833,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
