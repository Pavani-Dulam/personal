describe("pick a range from dropdown",()=>{
    it("spech_analytics_007",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(6000)
        cy.get('[href="/login"]').click()
        cy.get('input[name="email"]').type("pavani.dulam+student29@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit()
        cy.get('[href="/analytics"]').click().trigger("mouseout")
        
        cy.get('.select-container').select(1)
        cy.wait(5000)
        cy.scrollTo('bottom').wait(1000)
        cy.scrollTo('top')
    
        cy.get('.select-container').select(2)
        cy.scrollTo('bottom').wait(1000)
        cy.scrollTo('top')
        cy.wait(5000)

        cy.get('.select-container').select(3)
        cy.scrollTo('bottom').wait(1000)
        cy.scrollTo('top')
        cy.wait(5000)

        cy.get('.select-container').select(4)
        cy.scrollTo('bottom').wait(1000)
        cy.scrollTo('top')
        cy.wait(5000)
    
            
    

    })
})





