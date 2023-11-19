/// <reference types="Cypress"/>

describe('Get api user tests', () => {
  const accessToken = '313b5809d441540154cc304a9231edbc71281de8b8ac2acda562fb12d8c7e213'
  const expectedbody = [{"id":5148063,"name":"Ekdant Patil II","email":"patil_ii_ekdant@block.test","gender":"male","status":"active"},{"id":5148062,"name":"Mr. Ankal Sethi","email":"ankal_mr_sethi@abbott-dicki.example","gender":"male","status":"active"},{"id":5148061,"name":"Mrs. Chandak Mishra","email":"mishra_chandak_mrs@parker-goldner.test","gender":"male","status":"inactive"},{"id":5148060,"name":"Chandramani Shukla","email":"chandramani_shukla@dibbert.test","gender":"male","status":"inactive"},{"id":5148059,"name":"Rev. Anang Jha","email":"jha_anang_rev@hirthe.example","gender":"male","status":"active"},{"id":5148058,"name":"Ms. Somnath Khanna","email":"khanna_somnath_ms@bednar-jacobson.example","gender":"male","status":"active"},{"id":5148057,"name":"Lila Banerjee PhD","email":"banerjee_phd_lila@macejkovic-murray.example","gender":"female","status":"active"},{"id":5148056,"name":"Chandramohan Kaur","email":"chandramohan_kaur@johnson.example","gender":"male","status":"inactive"},{"id":5148054,"name":"Gorakhnath Bhattacharya","email":"bhattacharya_gorakhnath@goyette.example","gender":"female","status":"inactive"},{"id":5148053,"name":"Ekaling Malik","email":"ekaling_malik@schiller.test","gender":"female","status":"inactive"}]
  const expectedbodydata =[{"id":1,"firstname":"sudarshan","lastname":"naidu","pohne":1234},{"id":2,"firstname":"sudarshan1","lastname":"naidu1","pohne":12345},{"id":3,"firstname":"sudarshan2","lastname":"naidu2","pohne":123456}]

  it('get users', () => {
    cy.request({

      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        'authorization': "Bearer" + accessToken
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
        expect(res.body[0]).to.have.property('email','joshi_satish_i@hahn.example')
        expect(res.body[0]).to.have.property('id', 5359968)
      //expect(res.body).to.deep.eq(expectedbody)
    })
  })
  it('get specific user', () => {
    cy.request({

      method: 'GET',
        url: 'https://gorest.co.in/public/v2/users/5359944',failOnStatusCode: false,
      headers: {
        'authorization': "Bearer" + accessToken
      }
    }).then((res) => {
      //expect(res.status).to.eq(200)
        expect(res.body).to.have.property('email','ritesh_sethi@yost-oconnell.test')
        expect(res.body).to.have.property('id', 5359944)
      //expect(res.body).to.deep.eq(expectedbody)
    })
  })




})