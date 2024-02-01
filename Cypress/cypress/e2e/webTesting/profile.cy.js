describe("profile page",()=>{

    it("profile",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);
        // login 
        cy.contains("Login").click()

        cy.get('input[name="email"]').type("pavani.dulam+student15@applines.com")
        cy.get('input[name="password"]').type("Root@124")
        cy.get('form').submit();
        cy.wait(2000)
        // profile
        cy.get('.user-container > .d-flex ').trigger("mouseover").click()
        cy.get('.profile').click().wait(4000)
        cy.wait(2000)
        // my Account
        cy.get('[href="/user-profile"]').trigger("mouseover").click().wait(2000)
        // change password
        cy.contains("Change Password").click()
        cy.get('input[name="oldPassword"]').type("Root@124")
        cy.get('input[name="newPassword"]').type("Root@124")
        cy.get('input[name="confirmPassword"]').type("Root@124")
        cy.get('#changePasswordForm > .btn').click()
        // add parent parent can add only once
        
        cy.contains("Add Parent").click().wait(2000)
        cy.get('input[placeholder="First Name"]').type("parent for 15").wait(1000)
        cy.get('input[placeholder="Last Name"]').type("dulam").wait(1000)
        cy.get('.col-lg-6 > input[placeholder="Email"]').type("xyz15@gmail.com").wait(1000)
        cy.get('[value="Female"]').click().wait(1000)
        cy.get('#registerForm > .btn').click().wait(1000)
        cy.get('.nav-content').trigger("mouseover").click()
        cy.get('#colorButton').click()
        
})
})