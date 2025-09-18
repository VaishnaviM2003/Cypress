//Default cypress.config.js

/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio:true,
      defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // Disable proxy usage
      
      config.proxyServer = false;

      // You can still add other node event listeners here if needed
      return config;
    },
  },
}); */

//Screenshot and Video settings added
/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    defaultCommandTimeout: 10000,
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    setupNodeEvents(on, config) {
      // Disable proxy usage
      config.proxyServer = false;

      // You can still add other node event listeners here if needed
      return config;
    },
  },

  // ✅ Screenshot and Video settings
  screenshotOnRunFailure: true,        // Auto-screenshot on test failure
  screenshotsFolder: 'cypress/screenshots',
  video: true,                         // Record videos
  videoUploadOnPasses: false,          // Skip uploading videos for passing runs
  videosFolder: 'cypress/videos',
  viewportWidth: 1280,                 // Consistent video size
  viewportHeight: 720,
}); 

//Error handling settings added
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    experimentalStudio: true,
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      // Disable proxy usage
      config.proxyServer = false;

      // Reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
  }, 

  // ✅ Screenshot and Video settings
  *screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  videoUploadOnPasses: false,
  videosFolder: 'cypress/videos',
  viewportWidth: 1280,
  viewportHeight: 720,*/

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    // SCREENSHOT SETTINGS
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    saveJson: true,
    charts: true,
    reportPageTitle: 'OrangeHRM Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: false
  },
});
