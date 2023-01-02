describe('login', ()=>{
    it('login', ()=>{

        cy.visit('http://uatmerchant.chhitopaisa.com.np/Home/Index')

        cy.get(`#user_name`).type('dsncsdjn')
    
        cy.get(`#user_password`).type('bbhhjhjbjhh')
    
        cy.contains(`LOGIN`).click()
    })
})