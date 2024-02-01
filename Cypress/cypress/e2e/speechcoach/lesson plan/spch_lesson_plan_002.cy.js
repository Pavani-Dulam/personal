describe("create speech",()=>{

    it("spech_lessonplan_002",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(8000);

        cy.contains("Login").click()
        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit();
        cy.wait(2000)

        cy.get('[href="/user"]').trigger("mouseover").click()
        cy.get('[href="/user/lessonplan"]').click().trigger('mouseout')
        cy.wait(2000)
        cy.get('.lesson-plan-title-button > .btn-icon').click()
        cy.get('#validationStandard01').type("new1 speech").wait(2000)
        cy.contains("Yes").click()

        
       
    })
})