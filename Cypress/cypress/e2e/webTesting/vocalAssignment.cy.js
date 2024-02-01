describe("add vocal assignment",()=>{

    it("add assignment",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);

        cy.contains("Login").click()

        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit();
        cy.wait(2000)

        cy.get('[href="/user"]').trigger("mouseover").click()
        cy.get('[href="/user/groups"]').click().trigger('mouseout')
        cy.wait(2000)
        cy.contains("coach1 pavani").click()
        cy.get('#controlled-tab-example-tab-classwork').click()
        cy.get('.col > .btn-icon > span').click({force:true})
        cy.get('#controlled-tab-example-tab-vocalassignment').click()
        cy.get(':nth-child(2) > .form-check-label > .radio-position').click()
        cy.get('#controlled-tab-example-tabpane-vocalassignment > form > .g-3 > :nth-child(2) > .col-sm-10 > #startdate').type("2023-09-28")
        cy.get("[placeholder='end date']").type("2023-09-29")
        cy.get('#controlled-tab-example-tabpane-vocalassignment > form > .g-3 > :nth-child(4) > .col-sm-10 > .p-multiselect').click().wait(4000)
        cy.get('.p-multiselect-items > :nth-child(1)').click()
        cy.get('.p-multiselect-items > :nth-child(2)').click()
        cy.contains("Save").click()


       
       
})
})