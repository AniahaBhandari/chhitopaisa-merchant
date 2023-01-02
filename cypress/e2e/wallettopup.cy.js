describe('merchanttomerchant' ,()=>{
    it ('transfer', ()=>{
        cy.login()
        cy.visit('http://uatmerchant.chhitopaisa.com.np/Balance/WalletTopup')
cy.get(`#MobileNumber`).type(`9847659504`)
cy.get(`#Amount`).type(`100`)
cy.get(`.select2-selection__rendered`).click()
cy.get(`.select2-results`).contains(`Gift`).click({
    force: true
})
cy.get(`#Remarks`).type(`test`)
cy.contains(`SUBMIT`).click()
cy.contains(`CONFIRM`).click()
cy.get(`[type="password"]`).eq(0).type(`1234`)
cy.get(`#btnConfirmmodal`).click()

    })
})