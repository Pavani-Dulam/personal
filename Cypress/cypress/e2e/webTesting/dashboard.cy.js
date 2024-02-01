describe("dashboard",()=>{

    it("login and dashboard visit",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);

        cy.contains("Login").click()

        cy.get('input[name="email"]').type("pavani.dulam+student12@applines.com")
        cy.get('input[name="password"]').type("Root@124")
        cy.get('form').submit();
        cy.wait(2000)
         
        // practice page
        cy.url().should('eq',"https://dev02.speechpundit.com/dashboards/practice")
        cy.wait(3000)

        // activity page
        cy.get('[href="/activity"]').click().trigger('mouseout')
        cy.url().should('eq',"https://dev02.speechpundit.com/activity")
        cy.wait(3000)

        // recording page
        cy.contains("Record").click()
        cy.url().should('eq',"https://dev02.speechpundit.com/recording")
        cy.wait(3000)

        // favorites page
        cy.get('[href="/favorites"]').click()
        cy.url().should('eq',"https://dev02.speechpundit.com/favorites")
        cy.wait(3000)

        // analtics page
        cy.get('[href="/analytics"]').trigger('mouseover').click().trigger('mouseout')
        cy.url().should('eq',"https://dev02.speechpundit.com/analytics")
        cy.wait(3000)
       
        // user group
        cy.get('[href="/user"]').trigger("mouseover").click()
        cy.get('[href="/user/groups"]').click().trigger('mouseout')
        cy.wait(2000)

        // // pricing page
        // cy.get('[href="/pricing"]').trigger("mouseover").click()
        // cy.get('[href="/pricing/all"]').click().trigger("mouseout").wait(2000)
        // cy.get('[href="/pricing/usersubscriptions"]').trigger("mouseover",{force:true}).click().trigger('mouseout')
        // cy.wait(1000)


        
       

})
})