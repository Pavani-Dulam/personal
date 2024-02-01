describe("login page",()=>{

    it("login",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);
        cy.contains("Login").click()
        cy.get('input[name="email"]').as("emailbtn")
        cy.get('@emailbtn').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').should('be.visible').type("root123")
        cy.get('form').submit();
        cy.wait(2000)
        cy.document().its('contentType').should('eq', 'text/html')
        
        
       

})
})