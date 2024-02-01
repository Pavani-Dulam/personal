describe("dashboard components",()=>{

    it("login and dashboard com visit",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);

        cy.contains("Login").click()

        cy.get('input[name="email"]').type("pavani.dulam+student12@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit();
        cy.wait(2000)

        // practice page 

        cy.url().should('eq',"https://dev02.speechpundit.com/dashboards/practice")
        cy.wait(2000)
        cy.get('.dashboard-head > h2 > a').click()
        cy.url().should('eq',"https://dev02.speechpundit.com/dashboards/assignments")
        cy.wait(2000)
        cy.go('back') 

        cy.get(':nth-child(1) > .col-lg-12 > .hover-img-scale-up > .g-0 > .col-lg > .card-img').click()
        cy.wait(2000)

        cy.get('a > .card-img').click()
        cy.url().should('eq',"https://dev02.speechpundit.com/parallaxcards")
        cy.wait(5000)

        cy.get(':nth-child(2) > .g-2 > :nth-child(1) > .dcard > :nth-child(5)').click()
        cy.wait(3000)
        cy.go('back')
        cy.wait(1000)

        cy.get(':nth-child(2) > .g-2 > :nth-child(2) > .dcard > :nth-child(5)').click()
        cy.wait(3000)
        cy.go('back')
        cy.wait(1000)

        cy.get(':nth-child(2) > .g-2 > :nth-child(3) > .dcard > :nth-child(5)').click()
        cy.wait(3000)
        cy.go('back')
        cy.wait(1000)

        cy.get(':nth-child(2) > .g-2 > :nth-child(4) > .dcard > :nth-child(5)').click()
        cy.wait(3000)
        cy.go('back')
        cy.wait(1000)

        cy.get(':nth-child(3) > .g-2 > :nth-child(1) > .dcard > :nth-child(5)').click()
        cy.wait(3000)
        cy.go('back')
        cy.wait(1000)

        cy.get(':nth-child(3) > .g-2 > :nth-child(2) > .dcard > :nth-child(5)').click()
        cy.wait(3000)
        cy.go('back')
        cy.wait(1000)

        cy.get(':nth-child(3) > .g-2 > :nth-child(3) > .dcard > :nth-child(5)').click()
        cy.wait(3000)
        cy.go('back')
        cy.wait(1000)

        cy.get(':nth-child(3) > .g-2 > :nth-child(4) > .dcard > :nth-child(5)').click()
        cy.wait(3000)
        cy.go('back')
        cy.wait(3000)
        cy.go('back')

        cy.get('.mb-0 > .col-lg-12 > .hover-img-scale-up > .g-0 > .col-lg > .card-img').click()
        cy.wait(2000)
         
        // activity page
        cy.get('#menu > :nth-child(2) > a').click().trigger('mouseout')
        cy.url().should('eq',"https://dev02.speechpundit.com/activity")
        cy.wait(3000)

        // recording page
        cy.get('#menu > :nth-child(3) > a').trigger('mouseover').click().trigger('mouseout')
        cy.url().should('eq',"https://dev02.speechpundit.com/recording")
        cy.wait(3000)

        // favorites page
        cy.get(':nth-child(4) > a').click()
        cy.url().should('eq',"https://dev02.speechpundit.com/favorites")
        cy.wait(3000)

        // analytics page
        cy.get(':nth-child(5) > a').trigger('mouseover').click().trigger('mouseout')
        cy.url().should('eq',"https://dev02.speechpundit.com/analytics")
        cy.wait(3000)
        cy.get('.select-container').select(1)
        cy.wait(2000)
        cy.get('.select-container').select(2)
        cy.wait(2000)
        cy.get('.select-container').select(3)
        cy.wait(2000)
        cy.get('.select-container').select(4)
        cy.wait(2000)

        // user group
        cy.get('[href="/user"]').trigger("mouseover").click()
        cy.get('[href="/user/groups"]').click().trigger('mouseout')
        cy.wait(2000)

        // pricing page
        cy.get('[href="/pricing"]').trigger("mouseover").click()
        cy.get('[href="/pricing/all"]').click().trigger("mouseout").wait(2000)
        cy.get('[href="/pricing/usersubscriptions"]').trigger("mouseover",{force:true}).click().trigger('mouseout')
        cy.wait(1000)
       

})
})