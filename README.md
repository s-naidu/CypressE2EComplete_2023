# CypressE2EComplete_2023

## 1. Installation of  Node in Windows System
    1. Download the Node.js MSI Installer for your system and install with default options
    https://nodejs.org/en/download/
    2. Create the Cypress Project directory
    3. Open CMD
    4. Run the command 'npm init' to create a package
    5. Type  “npm install cypress –save-dev”
    6. Type “npx cypress open” and select the required options like config, browser ,spec files etc.. 


## 2. Folder Strcture 
    1. cypress
         -- E2E
              --example spec files
    2. fixture          
    3. support
    4. node_modules
    5. cypress.config.json
    6. package.json

## 3. For Intelligent Code Completion
    /// <reference types="Cypress" /> in few page of sripts

## 4. For Cucumber Plugin
  ```sh  npm install --save-dev cypress-cucumber-preprocessor```


## 5. For report generation
        https://www.youtube.com/watch?v=3Gl7YKX6P3I

        Add the code to package.json
          "cucumberJson": {
                  "generate": true,
              }

	npm run cy:report
## 6. File Upload:
       npm install --save-dev cypress-file-upload

	If you are using TypeScript, ensure your tsconfig.json contains commands' types:
      	"compilerOptions": {
        "types": ["cypress", "cypress-file-upload"]
      }
      To be able to use any custom command you need to add it to cypress/support/commands.js like this:
      import 'cypress-file-upload';
      Then, make sure this commands.js is imported in cypress/support/index.js (it might be commented):
      // Import commands.js using ES2015 syntax:
      import './commands';

## 7. Run All Test Features in headless browser
    npx cypress run

## 8. Run Test Features one by one
    npx cypress open

## 9. Comman Step definition
        Given('I open login page', function () {
            lp.visit1()
        });

        When('I submit {string} and {string}', function (username, password) {
            lp.setusername(username)
            cy.wait(1000)
            lp.setpassword(password)
        });

        When('Click on login button', function () {
            lp.loginbutton()
        });

        Then('Login Sucess Dashboard window should displayed.', function () {
            cy.get("#menu_dashboard_index > b").should('have.text', 'Dashboard')
        });

## 10. Comman Page Object
        login() {
            cy.visit(logindata.url).then(() => {
                cy.get(username).type(logindata.username)
                })
                .then(() => {
                    cy.get(password).type(logindata.password)
                    })
                    .then(() => {
                        cy.get(loginbutton).click()
                    })
                cy.log("Login Successful")
            }
        }

## 11. GitIgnore file
    This will ingore the unwanted files which are listed inide the .gitignore file while uploading the project files to git repository.
    node_modules
    cypress/report
    cypress/screenshots
    cypress/videos
    cypress/cucumber-json
    cypress/downloads

## 12. For Dynamic Web Elemnets
        cy.get('.dropdown').children().first().click().then(() => {
            cy.get("li").contains("Edit").click({ force: true })
        })

## 13. For retry the failed test cases
     "retries": {
     "runMode": 2,
  }

# Folder Structure:-

## 1. Fixtures:

     Add user related fixtures to cypress/fixtures/data.json folder

## 2. Page Objects:
     All page objects files should be added under cypress/pageobjects/ pagename folder

## 3. e2e:
      All the files are stored in cypress/e2e folder.

## 4. Step definitions:
      All feature files with scenarios should be added under cypress/steps/ folder

## 5. Cucumber Feature Files:
         All feature files with scenarios should be added under cypress/integration/feature_name .feature folder

## 6. Package.json:
       After adding your command to Makefile you should add the relevant script in package.json on root folder

## 7. ScreensShots:
        All the screenshots are stored into cypress/screenshots folder

## 8. Reports:
        Need to install following plug-ins for cypress-mochawesome-reporter
        step :1
        npm i --save-dev cypress-mochawesome-reporter
       
        Step :2
        import following under cypress/support/e2e.js file:
        import 'cypress-mochawesome-reporter/register';
        
        Step :3
        Edit config file (cypress.config.js by default) as follows
                  const { defineConfig } = require('cypress');

                  module.exports = defineConfig({
                  reporter: 'cypress-mochawesome-reporter',
                         e2e: {
                    setupNodeEvents(on, config) {
                       require('cypress-mochawesome-reporter/plugin')(on);
                   },
                 },
              })
        Step :4 run the spec files
        Step :5 Open the reports and verify the results under path \cypress\reports 
        



# Links for support
    1. JavaScript [here] (https://www.w3schools.com/js/default.asp)
    2. Cypress [here] (https://www.cypress.io/)
    3. Cucumber [here] (https://cucumber.io/docs/cucumber/)
