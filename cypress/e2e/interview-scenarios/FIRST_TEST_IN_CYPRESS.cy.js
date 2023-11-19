describe('Search for Google Wiki page from Wikipedia website', () => {
    beforeEach(() => {
        cy.visit('https://wikipedia.org')
    })

    it('Validate Page Title', () => {
        cy.title().should('eq', 'Wikipedia')
    })

    it('Search for Google Wiki Page', () => {
        cy.get('#searchInput').type('google')
        cy.get('button[type="submit"]').click()
    })

    it('Validate Google Wiki Page has opened', () => {
        cy.get('#searchInput').type('google')
        cy.get('button[type="submit"]').click()
        cy.get('h1#firstHeading').contains('Google')
        cy.title().should('eq', 'Google - Wikipedia')
    })
})


 /*

Let’s try to understand the written code as above step by step:

1. describe and it comes from the mocha framework. Describe block can be understood as the collection of tests or a test suite, whereas it block represents a single test or a test case.

2. before() runs once before all the test cases hence we wrote cy.visit() inside it since all our test cases need the website to be opened before they could be run.

3. first it block (Validate Page Title) – Here we are using the cypress command cy.title() to get the title of the current webpage. And then we are using should(‘eq’, ‘Wikipedia’) which basically translates into title should be equal to Wikipedia.

4. second it block (Search For Google Wiki Page) – The cypress command cy.get(‘locator’) is used to access any element on the webpage. type(‘text’) is used for typing texts into the element. click() is used for clicking the element.

5. third it block (Validate Google Wiki Page has Opened) – cy.get(‘h1#firstHeading’).contains(‘Google’) checks that the first heading text of the current web page is Google. cy.title().should(‘eq’, ‘Google – Wikipedia’) checks that the title of the current web page is Google – Wikipedia.


  */