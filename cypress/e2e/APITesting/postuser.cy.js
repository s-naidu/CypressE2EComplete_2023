/// <reference types="cypress"/>
const datajson = require('../../fixtures/example.json')
describe('post api user tests', () => {
  let accessToken = "313b5809d441540154cc304a9231edbc71281de8b8ac2acda562fb12d8c7e213"
  let randomTest = ""
  let testEmail = ""
  it('create user test', function () {

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
        "name": randomTest,
        "email": testEmail,
        "gender": datajson.gender,
        "status": datajson.status
      }
    }).then((res) => {
     //cy.log(JSON.stringify(res))
      expect(res.status).to.eq(201)
      expect(res.body).has.property('name', randomTest)
      expect(res.body).has.property('email', testEmail)
      expect(res.body).has.property("status", datajson.status)
      expect(res.body).has.property("gender", datajson.gender)
    }).then((res) =>{
      const userId = res.body.id
      cy.log("user id is :" + userId)
      cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users/' + userId, failOnStatusCode: false,
        headers: {
          'authorization': "Bearer 313b5809d441540154cc304a9231edbc71281de8b8ac2acda562fb12d8c7e213",
        }
      }).then((res) => {
        //cy.log(JSON.stringify(res))
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('id', userId)
        expect(res.body).has.property('name', randomTest)
        expect(res.body).has.property('email', testEmail)
      })

    })

  })

})