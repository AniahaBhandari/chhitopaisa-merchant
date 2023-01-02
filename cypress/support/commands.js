Cypress.on('uncaught:exception', (err, runnable) => {

    // returning false here prevents Cypress from failing the test

    return false

})

Cypress.Commands.add('login', () => {
//cy.session('login', ()=>{


    cy.visit('http://uatmerchant.chhitopaisa.com.np/Home/Index')

    cy.get(`#user_name`).type('magicalshop')

    cy.get(`#user_password`).type('Test@123')

    cy.contains(`LOGIN`).click()
    //cy.wait(2000)
    //cy.get('#field-validation-error').should('have.text', 'Required')


//},{cacheAcrossSpecs: true}) //to cache session across test files

})
