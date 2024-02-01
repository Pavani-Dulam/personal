describe("my first test",()=>{

    it(" visiting navbar ",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(6000);
        cy.get('[href="/landing-page"]').contains("Home").click().wait(2000)
        cy.scrollTo('bottom').wait(1000)
        cy.scrollTo('top').wait(2000)
        cy.get('[href="/plans"]').contains("Plans").click().wait(2000)
        cy.scrollTo('bottom').wait(1000)
        cy.scrollTo('top').wait(2000)
        cy.get('[href="/about"]').contains("About").click().wait(2000)
        cy.scrollTo('bottom').wait(1000)
        cy.scrollTo('top').wait(2000)
        cy.get('[href="/contact"]').contains("Contact").click().wait(2000)
        cy.scrollTo('bottom').wait(1000)
        cy.scrollTo('top').wait(2000)
        cy.get('[href="/login"]').contains("Login").click().wait(2000)
         
    })
    
})