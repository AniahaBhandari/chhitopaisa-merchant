describe('changepassword',()=>{
    it("passwordchange",()=>{
        cy.login()
        cy.visit('http://uatmerchant.chhitopaisa.com.np/Home/UserProfile')
        cy.contains(`Change Password`).click()
      cy.get(`#OldPassword`).type(`Test@000`)
      cy.get(`#NewPassword`).type(`Test@555`)
      cy.get(`#ConfirmPassword`).type(`Test@555`)
      cy.contains(`SUBMIT`).click()
    })
})