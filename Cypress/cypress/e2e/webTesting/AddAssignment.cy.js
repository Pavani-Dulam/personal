describe("add assignment",()=>{

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
        cy.contains('coach1 pavani').click()
        cy.get('#controlled-tab-example-tab-classwork').click()
        cy.get('.col > .btn-icon > span').click({force:true})
        cy.get('#formHorizontalLevel').select("speech7")
        cy.get('#controlled-tab-example-tabpane-addassignment > form > .g-3 > :nth-child(2) > .col-sm-10 > #startdate').type("2023-09-28")
        cy.get('#enddate').type("2023-09-30")
        cy.get('#selectstudent > .p-multiselect-label-container > .p-multiselect-label').click()
        cy.get('.p-multiselect-item').contains("student1 dulam").click()
        cy.get('.p-multiselect-close-icon').click()
        cy.get('#controlled-tab-example-tabpane-addassignment > form > .float-right').click()


       
})
})