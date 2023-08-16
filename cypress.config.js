const { defineConfig } = require("cypress");
reporter: 'cypress-mochawesome-reporter',

module.exports = defineConfig({
  projectId: "yaewra",
  reporter: 'mochawesome',
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: true,
  },
  watchForFileChanges:false,
  chromeWebSecurity:false,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    //baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return
    },
  },
});
