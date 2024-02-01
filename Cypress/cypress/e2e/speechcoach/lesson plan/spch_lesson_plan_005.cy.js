describe("use text formatting options",()=>{

    it("spech_lessonplan_005",()=>{
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
        cy.get('textarea').type("hi this is new speech 1")
        cy.get('#validationStandard02').select("Advanced")
        cy.get('.ml-auto').click().wait(40000)
        cy.get('#validationStandard03').type("5").wait(6000)
        // cy.get(':nth-child(3) > .col > .editor-container > .quill > .ql-toolbar > :nth-child(3) > [value="bullet"]')
        cy.get('.mt-6 row').eq(1).find('.col > .editor-container > .quill > .ql-toolbar').children().eq(2).find('value="bullet"]').click()
        // cy.get('form > .btn').click()
        
       
    })
})