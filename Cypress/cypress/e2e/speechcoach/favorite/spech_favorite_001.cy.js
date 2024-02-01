describe("view favorite videos",()=>{
    it("spech_favorite_001",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(6000)
        cy.get('[href="/login"]').click()
        cy.get('input[name="email"]').type("pavani.dulam+student29@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit()
        cy.wait(3000)
        cy.get('#menu').children('li').eq(4).find('a').click().trigger("mouseout")
        
        
        
        


    })
})