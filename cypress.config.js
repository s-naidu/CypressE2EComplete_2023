const { defineConfig } = require("cypress");
reporter: 'cypress-mochawesome-reporter',

  module.exports = defineConfig({
    projectId: "yaewra",
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "reporterEnabled": "mochawesome",
      "mochawesomeReporterOptions": {
        "reportDir": "cypress/reports/mocha",
        "quite": true,
        "overwrite": false,
        "html": false,
        "json": true
      }
    },
    watchForFileChanges: false,
    chromeWebSecurity: false,
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
