describe("question and answers",()=>{

    it("login",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);

        cy.contains("Login").click()
3

        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit();
        cy.wait(2000)
        
        cy.get('.btn').click()
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

        cy.get('[href="/dashboards/practice"]').click()




})
})