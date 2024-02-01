describe("coach feedback on student activity page",()=>{
    it("spech_feedbackcoach_002",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(6000)
        cy.get('[href="/login"]').click()
        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit()
        cy.get('[href="/studentActivity"]').click().trigger("mouseout").wait(5000)
        cy.get(".p-datatable-tbody").children().eq(1).children().eq(5).find(".text-center > div > .btn-icon").click().wait(4000)
        cy.get('.m-2 > .play').click().wait(10000)
        // cy.get('.m-2 > .pause').click()
        
        
    

    })
})