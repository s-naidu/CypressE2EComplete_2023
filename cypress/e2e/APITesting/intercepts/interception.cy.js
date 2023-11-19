/// <reference types="Cypress"/>
describe("interception suite", () => {

    it("Test API with sample interception stubing", () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept({
            path:'/posts'
        }).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then(inter=>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
        })

    })
    it.only('mocking with intercept test',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','/posts',{totalpost:5,name:'Sudarhan'}).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')
    })
    it.only('mocking with intercept test with dynamic fixture',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','/posts',{fixture: 'example.json'}).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')
    })






})