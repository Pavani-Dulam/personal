describe(" coach registration",()=>{

    it("register",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);
        cy.get('.d-none > .btn').click()
        cy.wait(5000);
        cy.url().should('eq','https://dev02.speechpundit.com/register')
        cy.get('input[name="firstName"]').type("pavani")
        cy.get('input[name="lastName"]').type("dulam")
        cy.get('input[name="email"]').type("pavani.dulam+student29@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('[type=radio]').check("Coach")
        cy.get('[type=checkbox]').check()
        cy.get('[style="text-align: center;"] > .btn').click()
        cy.wait(2000)
    })
    

})