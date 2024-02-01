describe("profile student add parent",()=>{
    it("spech_profile_010",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(6000)
        cy.get('[href="/login"]').click()
        cy.get('input[name="email"]').type("pavani.dulam+student10@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit()
        cy.wait(4000)
        cy.get('.user-container > .d-flex ').trigger("mouseover").click()
        cy.get('.profile').click().wait(4000)
        cy.get('[href="/user-profile"]').click().wait(5000)
      
        cy.contains("Add Parent").click().wait(2000)
        cy.get('input[placeholder="First Name"]').type("parent for 10").wait(1000)
        cy.get('input[placeholder="Last Name"]').type("dulam").wait(1000)
        cy.get('.col-lg-6 > input[placeholder="Email"]').type("parent10@gmail.com").wait(1000)
        cy.get('[value="Female"]').click().wait(1000)
        cy.get('#registerForm > .btn').click().wait(1000)
        cy.get('.nav-content').trigger("mouseover").click()
        cy.get('#colorButton').click()
        


    })
})