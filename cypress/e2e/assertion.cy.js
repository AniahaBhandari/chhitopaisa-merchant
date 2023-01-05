describe('login', ()=>{
    it('login', ()=>{

        cy.visit('http://uatmerchant.chhitopaisa.com.np/Home/Index')

        cy.get(`#user_name`).type('tyfgvvb')
        cy.get(`#user_password`).type('hjhhhjhjhj')
    
        cy.contains(`LOGIN`).click()
        //cy.wait(5000)
        //required validation 
    
        //cy.get('.field-validation-error').eq(0).should('have.text', 'Required')
        //Invalid credentials
        

        cy.get('#password-msg').should('have.text', 'Invalid Credentials')
        .wait(5000)
    })
})