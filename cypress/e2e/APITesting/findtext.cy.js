let getText;
describe("find text of an element", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it("Alias First Test - Using Invoke Command ", function () {
        cy.visit("https://www.linkedin.com/", { failOnStatusCode: false })
        cy.get('[data-test-id="hero__headline"]').invoke('text').as('textFunction');

    });


    it("Print Value - ALias => Invoke - Command ", function () {
        cy.log("===== Print Value Using Invoke Command ==== ", this.textFunction)
    })


    it("Alias Second Test - Using Wrap Command", function() {
        cy.visit("https://www.linkedin.com/", { failOnStatusCode: false })
        cy.get('[data-test-id="hero__headline"]').then($value => {
            const textValue = $value.text()
            cy.wrap(textValue).as('wrapValue')
        })
    })


    it("Print Value - ALias => Wrap - Command ", function () {
        cy.log("===== Print Value Uisng Wrap Command ==== ", this.wrapValue)
    })


    it("Third Test - using variable ", function () {
        cy.visit("https://www.linkedin.com/",{ failOnStatusCode: false })
        cy.get('[data-test-id="hero__headline"]').then(($value) => {
            getText = $value.text()
        })
    })


    it("Print Value - Uisng Variables ", function () {
        cy.log("Print Value - Using Variables ====== ", getText)
    })




})