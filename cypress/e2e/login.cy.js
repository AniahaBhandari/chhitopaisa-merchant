describe('Chhitopaisa login', () => {

  it('positive login', () => {

    cy.login()
    
//session store
  //     cy.session('login', () => { 
      
    
  //   cy.visit('http://uatmerchant.chhitopaisa.com.np/Home/Index')

  //   cy.get(`#user_name`).type(`magicalshop`)

  //   cy.get(`#user_password`).type(`Test@000`)

  //   cy.contains(`LOGIN`).click()
  // })
 
  cy.visit('http://uatmerchant.chhitopaisa.com.np/Home/Index')
    
  })
})