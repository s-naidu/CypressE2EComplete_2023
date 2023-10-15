/// <reference types="cypress"/>
const datajson = require('../../fixtures/example.json')
describe('put api user tests', () => {
  let accessToken = "313b5809d441540154cc304a9231edbc71281de8b8ac2acda562fb12d8c7e213"
  let randomTest = ""
  let testEmail = ""
  it.skip('Put user test', function () {

    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for (var i = 0; i < 10; i++)
      randomTest += pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail = randomTest + '@gmail.com'

    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users', failOnStatusCode: false,
      headers: {
        'authorization': "Bearer 313b5809d441540154cc304a9231edbc71281de8b8ac2acda562fb12d8c7e213",
        'Content-type': 'application/json',
      },
      body: {
        "name": "Test cypress Sudarshan",
        "email": "sudarshancypress@gmail.com",
        "gender": "male",
        "status": "active"
      }
    }).then((res) => {
      //cy.log(JSON.stringify(res))
      expect(res.status).to.eq(201)
      expect(res.body).has.property('name', 'Test cypress Sudarshan')
      expect(res.body).has.property('email', 'sudarshancypress@gmail.com')
      expect(res.body).has.property("status", 'active')
      expect(res.body).has.property("gender", 'male')
    }).then((res) => {
      const userId = res.body.id
      cy.log("user id is :" + userId)
      //update user using PUT
      cy.request({
        method: 'PUT',
        url: 'https://gorest.co.in/public/v2/users/' + userId, failOnStatusCode: false,
        headers: {
          'authorization': "Bearer 313b5809d441540154cc304a9231edbc71281de8b8ac2acda562fb12d8c7e213",
        },
        body: {
          "name": "Test cypress SudarshanUpdated",
          "email": "sudarshanupdatedcypress@gmail.com",
          "gender": "male",
          "status": "active"
        }
      }).then((res) => {
        //cy.log(JSON.stringify(res))
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('id', userId)
        expect(res.body).has.property('name', 'Test cypress SudarshanUpdated')
        expect(res.body).has.property('email', 'sudarshanupdatedcypress@gmail.com')
      })

    })

  })

})