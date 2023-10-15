/// <reference types="cypress"/>
const datajson = require('../../fixtures/example.json')
describe('Delete api user tests', () => {
    const userId = ""
    let accessToken = "313b5809d441540154cc304a9231edbc71281de8b8ac2acda562fb12d8c7e213"
    let randomTest = ""
    let testEmail = ""
    it('create user test', function () {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users', failOnStatusCode: false,
            headers: {
                'authorization': "Bearer 313b5809d441540154cc304a9231edbc71281de8b8ac2acda562fb12d8c7e213",
                'Content-type': 'application/json',
            },
            body: {
                "name": "Test cypress Sudarshan1111",
                "email": "sudarshancypress1111@gmail.com",
                "gender": "male",
                "status": "active"
              }
        }).then((res) => {
            //cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body).has.property('name', 'Test cypress Sudarshan1111')
            expect(res.body).has.property('email', 'sudarshancypress1111@gmail.com')
            expect(res.body).has.property("status", 'active')
            expect(res.body).has.property("gender", 'male')
        }).then((res) => {
           const userId = res.body.id
            cy.log("user id is :" + userId)
            cy.request({
                method: 'DELETE',
                url: 'https://gorest.co.in/public/v2/users/' + userId, failOnStatusCode: false,
                
                headers: {
                    'authorization': "Bearer 313b5809d441540154cc304a9231edbc71281de8b8ac2acda562fb12d8c7e213",
                }
            }).then((res) => {
                //cy.log(JSON.stringify(res))
                expect(res.status).to.eq(204)
             })

        }).then((res)=>{
            //cy.get(res.body.userId)
           //cy.log("user id is :" + userId)
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/' + userId, failOnStatusCode: false,
                headers: {
                    'authorization': "Bearer 313b5809d441540154cc304a9231edbc71281de8b8ac2acda562fb12d8c7e213",
                }
            }).then((res) => {
                //cy.log(JSON.stringify(res))
                //expect(res.status).to.eq(200)
                expect(res.body).to.not.have.property('firstname','sudarshan')
             })

        })

    })

})