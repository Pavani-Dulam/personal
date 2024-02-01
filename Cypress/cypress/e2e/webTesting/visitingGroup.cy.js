describe("visiting group",()=>{

    it("group visit",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);

        cy.contains("Login").click()

        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit();
        cy.wait(2000)

        cy.get('[href="/user"]').trigger("mouseover").click()
        cy.get('[href="/user/groups"]').click().trigger('mouseout')
        cy.wait(4000)
        cy.scrollTo('bottom').wait(1000)
        cy.scrollTo('top').wait(2000)
        cy.go('back')
        cy.get(':nth-child(1) > .eachItem > :nth-child(6) > .btn').click().wait(5000)
        cy.get(':nth-child(2) > .eachItem > :nth-child(6) > .btn').click().wait(5000)
        cy.scrollTo('bottom').wait(1000)
        cy.scrollTo('top').wait(2000)


        // cy.get('.user-container > .d-flex ').trigger("mouseover").click()
        // cy.get('.profile').click().wait(4000)
        // cy.wait(2000)
        // cy.contains("Logout").click()
    })
})