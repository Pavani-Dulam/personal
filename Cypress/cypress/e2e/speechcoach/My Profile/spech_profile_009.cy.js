describe("profile page change password",()=>{
    it("spech_profile_009",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(6000)
        cy.get('[href="/login"]').click()
        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit()
        cy.wait(4000)
        cy.get('.user-container > .d-flex ').trigger("mouseover").click()
        cy.get('.profile').click().wait(4000)
        cy.get('[href="/user-profile"]').click().wait(5000)
        cy.contains("Change Password").click().wait(2000)
        cy.get('input[name="oldPassword"]').type("root123")
        cy.get('input[name="newPassword"]').type("root123")
        cy.get('input[name="confirmPassword"]').type("root")
        cy.get('#changePasswordForm > .btn').click()
        cy.get('input[name="confirmPassword"]').siblings().should('contain',"Passwords must match")
        // cy.contains("Passwords must match").should('be.visible')
        


    })
})

