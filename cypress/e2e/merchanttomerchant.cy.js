describe('merchanttomerchant', () => {
    it('transfer', () => {
        cy.login()
        cy.visit('http://uatmerchant.chhitopaisa.com.np/CashOut/CashOut')
        //select from dropdown
        cy.get('#select2-Merchantid-container').click()

            .get('.select2-results').contains('Corona Lab').click()
        cy.get("#Amount").type(20)
        cy.get("#select2-Purpose-container").click()
            .get('.select2-results').contains('Gift').click()
        cy.get('#Remarks').type('test')
        cy.get('#btnpopmodel').click()
        cy.wait(2000)
        cy.contains('CONFIRM').click()
        .wait(2000)
       cy.get('[type="password"]').eq(0).type('1234')
       cy.get('#btnConfirmmodal').click()

    })
})