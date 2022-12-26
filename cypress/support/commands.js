Cypress.on('uncaught:exception', (err, runnable) => {

    // returning false here prevents Cypress from failing the test

    return false

})
Cypress.Commands.add('login', () => {
cy.session('login', ()=>{


    cy.visit('http://uatmerchant.chhitopaisa.com.np/Home/Index')

    cy.get(`#user_name`).type(`magicalshop`)

    cy.get(`#user_password`).type(`Test@000`)

    cy.contains(`LOGIN`).click()
},{cacheAcrossSpecs: true}) //to cache session across test files
})
