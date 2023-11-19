///<reference types='cypress'/>
describe('Searching product and selecting 3 product on amazon', () => {

    it('Finding a product from searchResults', () => {

        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('iphone{Enter}')
        
       //cy.get('span.a-size-medium.a-color-base.a-text-normal').click()
       cy.contains('Apple iPhone 13 (128GB) - Blue').invoke('removeAttr', 'target').click()


    })




})