describe(" student activity filter by names page",()=>{
    it("spech_studentactivity_008",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(6000)
        cy.get('[href="/login"]').click()
        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit()
        cy.get('[href="/studentActivity"]').click().trigger("mouseout")
        cy.get('input[placeholder="Search"]').wait(2000).type("student5")


    })
})