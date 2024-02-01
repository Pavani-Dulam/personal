describe("visiting groups and add student",()=>{

    it("add new student",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);

        cy.contains("Login").click()

        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit();
        cy.wait(2000)

        cy.get('[href="/user"]').trigger("mouseover").click()
        cy.get('[href="/user/groups"]').click().trigger('mouseout')
        cy.wait(4000)
        cy.contains("coach2 pavani").click()
        cy.get('#controlled-tab-example-tabpane-studentInfo > .btn-icon').click()
        cy.get('#controlled-tab-example-tab-newstudent').click()
        cy.get('#controlled-tab-example-tabpane-newstudent').contains("First Name").next().type("apple")
        cy.get('#controlled-tab-example-tabpane-newstudent').contains("Last Name").next().type("dulam")
        cy.get('#controlled-tab-example-tabpane-newstudent').contains("Email").next().type("pavani.dulam+student25@applines.com")
        cy.get('#controlled-tab-example-tabpane-newstudent').contains("Age").next().type("20").wait(2000)
        cy.get('[style="display: flex; justify-content: flex-end; margin-top: 15px;"] > .btn').click().wait(3000)
        // cy.go('back')

        cy.get('.user-container > .d-flex ').trigger("mouseover").click()
        cy.get('.profile').click().wait(4000)
        cy.wait(2000)
        cy.contains("Logout").click()
    })
})