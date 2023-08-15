///<reference types='cypress'/>
describe('handling Multiple tabs and new windows', () => {
    it('Handling Multiple tabs', () => {
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('iphone{enter}')
        cy.wait(2000)
       cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-wide-grid-style-t3.s-opposite-dir.s-wide-grid-style.sg-row > div.sg-col-20-of-24.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(8) > div > div > div > div > div > div > div > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20.sg-col-12-of-24.s-list-col-right > div > div > div.a-section.a-spacing-none.puis-padding-right-small.s-title-instructions-style > h2 > a').invoke('removeAttr', 'target').click()
    })
    it('Handling new Browser Window', function() {
        cy.visit('https://alapanme.github.io/testing-cypress.html')
        cy.window().then((win) => {
          cy.stub(win, 'open', url => {
            win.location.href = 'https://the-internet.herokuapp.com/';
          }).as("popup")
        })
        cy.get('button').click()
        cy.get('@popup')
          .should("be.called")
        cy.get('h1')
          .should('have.text', 'Welcome to the-internet')
      })
})