describe("update name phone number",()=>{
    it("spech_profile_005",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(6000)
        cy.get('[href="/login"]').click()
        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit()
        cy.wait(4000)
        cy.get('.user-container > .d-flex ').trigger("mouseover").click()
        cy.get('.profile').click().wait(4000)
        cy.get('[href="/user-profile"]').click()
        cy.get('input[name="firstName"]').clear().type("Pavani")
        cy.get('input[name="lastName"]').clear().type("Dulam")
        cy.get('input[name="phone"]').clear().type(1234567898)
        cy.contains("Update").click()


    })
})