describe("student can able to see the assigned speech",()=>{

    it("spech_lessonplan_010",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(8000);

        cy.contains("Login").click()
        cy.get('input[name="email"]').type("pavani.dulam+student10@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit();
        cy.wait(2000)
        cy.contains("All Assignments").click()

        
        
       
        
    })
})


