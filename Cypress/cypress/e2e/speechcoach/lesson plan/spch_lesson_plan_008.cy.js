describe("coach shall able to delete the speech",()=>{

    it("spech_lessonplan_008",()=>{
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
        cy.scrollTo('bottom').wait(3000)
        cy.get(".lesson-plan-details").children().eq(5).find('.lesson-plan-buttons').children().eq(2).click()
     
       
    })
})