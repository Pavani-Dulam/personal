describe("view subscription details",()=>{
    it("spech_subscription_002",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(6000)
        cy.get('[href="/login"]').click()
        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit()
        cy.wait(4000)
        cy.get('[href="/pricing"]').trigger("mouseover").click()
        cy.get('[href="/pricing/usersubscriptions"]').trigger("mouseover",{force:true}).click().trigger('mouseout')
        cy.wait(1000)


    })
})