///<reference types='cypress'/>
describe('Test suite',()=>{

it('getting element text',()=>{

cy.visit('https://tutorialsninja.com/demo/index.php?route=product/search')

cy.get('#content > h2').then(($element)=>{
    let elementtext=$element.text();
    cy.log(elementtext);
})
cy.contains('Components').click()
cy.contains('Mice and Trackballs (0)').click()
cy.wait(2000)
cy.go('forward')
cy.wait(4000)
cy.go('back')

})


})