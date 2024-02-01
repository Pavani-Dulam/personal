describe("view change plan",()=>{
    it("spech_subscription_0034",()=>{
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
        cy.contains("Change Plan").click()
        cy.get('.form-select').select(1)
        cy.wait(2000)
        cy.get('#value').type("NSF2023")
        cy.get('.flex > .btn-icon').click()
        cy.get('.shopping-summary-body > .btn-icon > span').click()
        cy.get('.input').type("pavani")
        cy.get('.btn').click()
        cy.wait(1000)

        cy.get('[value="yes"]').click()
        cy.get('.next-sub-btn').click()
        cy.wait(2000)

        cy.get('[value="Neutral"]').click()
        cy.get('.next-sub-btn').click()
        cy.wait(2000)

        cy.get('[value="yes"]').click()
        cy.get('.next-sub-btn').click()
        cy.wait(2000)

        cy.get('[value="Comfortable"]').click()
        cy.get('.next-sub-btn').click()
        cy.wait(2000)

        cy.get('[value="Comfortable"]').click()
        cy.get('.next-sub-btn').click()
        cy.wait(2000)

       cy.get(':nth-child(3) > .checkbox-input').click()
       cy.get(':nth-child(2) > .checkbox-input').click()
       cy.get('.next-sub-btn').click()
       cy.wait(2000)


        cy.get('[value="Very comfortable"]').click()
        cy.get('.next-sub-btn').type("{enter}")
        cy.wait(2000)

        cy.get('.text-area').type("hello my name is pavani")
        cy.get('.next-sub-btn').click()
        cy.wait(2000)

        cy.get('.text-area').type("hiii")
        cy.get('.next-sub-btn').click()
        cy.wait(2000)

        cy.contains("Start particing").click()

        // cy.get('[href="/dashboards/practice"]').click()




})
})

