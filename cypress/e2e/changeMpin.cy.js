describe('Chhitopaisa changempin', () => {
    it('positive changempin', () => {
      cy.login()
      cy.visit(`http://uatmerchant.chhitopaisa.com.np/Home/UserProfile`)
      cy.contains(`Change M-Pin`).click()
      cy.get(`#CurrentPassword`).type(`Test@555`)
      cy.get(`#NewMpin`).type(`1111`)
      cy.get(`#ConfirmMpin`).type(`1111`)
    cy.get('#CMpin button.btn').click()
    })
  })