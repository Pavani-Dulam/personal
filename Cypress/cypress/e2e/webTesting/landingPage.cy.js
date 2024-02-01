describe("my first test",()=>{
    it("visiting website",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);
        cy.url().should('eq','https://dev02.speechpundit.com/landing-page')
        cy.wait(4000)
        cy.title().should('eq','SpeechPundit');
        cy.scrollTo('bottom').wait(1000)
        cy.scrollTo('top')


       
    })

    
})