/// <reference types='cypress'/>

describe('handling tables',()=>{

it('selecting specific country',()=>{

cy.visit('https://cosmocode.io/automation-practice-webtable/')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
cy.get('tbody tr td:nth-child(2)').each(($el,index,$list)=>{
    const countrytext=$el.text()
    
    if(countrytext.includes('Central African Republic')){
        cy.get('tbody tr td:nth-child(2)').eq(index).prev().find('.hasVisited').click()
     
    }
})

})

})