describe("impromptu",()=>{
    it("impromptu page",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);

        cy.contains("Login").click()

        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit();
        cy.wait(2000)

        cy.get('[href="/user"]').trigger("mouseover").click()
        cy.get('[href="/user/impromptu"]').click().trigger('mouseout')
        cy.wait(2000)
    
        cy.contains("Add New").click()
        cy.get('.accordion-button').contains("sports & events").click()
        cy.contains("Is sports better to watch on TV or in person? Tell us more.").siblings(".d-inline").find(".form-check-input").check().wait(4000)
        cy.get('.mt-3').click()


        
    })
})