describe("visiting groups and add student",()=>{

    it("add student",()=>{
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
        cy.contains("coach1 pavani").click()
        cy.get('#controlled-tab-example-tabpane-studentInfo > .btn-icon').click()
        cy.get("#controlled-tab-example-tabpane-existingstudent").contains("First Name").next().type("student6")
        cy.get("#controlled-tab-example-tabpane-existingstudent").contains("Last Name").next().type("dulam")
        cy.get("#controlled-tab-example-tabpane-existingstudent").contains("Email").next().type("pavani.dulam+student11@applines.com")
        cy.get('.margin > .float-right').click().wait(3000)
        cy.get('.d-flex > :nth-child(3) > .btn').click().wait(2000)
        cy.go('back')

        cy.get('.user-container > .d-flex ').trigger("mouseover").click()
        cy.get('.profile').click().wait(4000)
        cy.wait(2000)
        cy.contains("Logout").click()
    })
})

