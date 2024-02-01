describe("view analytics page",()=>{
    it("spech_analytics_001",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(6000)
        cy.get('[href="/login"]').click()
        cy.get('input[name="email"]').type("pavani.dulam+student29@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit()
        cy.get('[href="/analytics"]').click().trigger("mouseout")
        cy.scrollTo('bottom').wait(1000)
        cy.scrollTo('top')
        cy.wait(4000)
        cy.get('.user-container > .d-flex ').trigger("mouseover").click()
        cy.get('.profile').click().wait(4000)
        cy.contains("Logout").click()
    })
})
    
    

