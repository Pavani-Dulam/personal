describe("add group page",()=>{

    it("add group",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);

        // cy.get('.d-none > .btn').click()
        // cy.get('.log').click()
        cy.contains("Login").click()

        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit();
        cy.wait(2000)

        cy.get('[href="/user"]').trigger("mouseover").click()
        cy.get('[href="/user/groups"]').click().trigger('mouseout')
        cy.wait(2000)
        // new grp btn
        cy.get('.new-group-btn > .btn-icon').click()

        cy.get('#formHorizontalName').type("coach3 pavani")
        cy.get('#formHorizontalLevel').select("Advanced")
        cy.contains('Start Time').siblings('.col-sm-10').find('.react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
        cy.get(':nth-child(48)').click()
        cy.contains("End Time").siblings('.col-sm-10').find('.react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
        cy.get(':nth-child(68)').click()
        cy.get('#Mon').click()
        cy.get('#Tue').click()
        cy.get('#Fri').click()
        cy.get('#Sat').click()
        cy.get('#Wed').click() 
        cy.get('#Thu').click()
        cy.get('#startDate').type("2023-09-28")
        cy.get('#enddate').type("2023-10-05")
        cy.get('[type="submit"]').click()
        cy.get('.user-container > .d-flex ').trigger("mouseover").click()
        cy.get('.profile').click().wait(4000)
        cy.wait(2000)
        cy.contains("Logout").click()


        
        
       

})
})

