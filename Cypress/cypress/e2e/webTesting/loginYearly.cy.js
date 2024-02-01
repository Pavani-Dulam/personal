describe("yearly",()=>{

            it("login",()=>{
                cy.visit("https://dev02.speechpundit.com");
                cy.wait(5000);
        
                cy.contains("Login").click()
        
                cy.get('input[name="email"]').type("pavani.dulam+student13@applines.com")
                cy.get('input[name="password"]').type("root123")
                cy.get('form').submit();
                cy.wait(2000)
                
                cy.get(':nth-child(2) > .price-section-body > .price-description > :nth-child(8) > .btn').click()
                cy.get('.form-select').select(2)
                cy.wait(2000)
                cy.get('.btn-icon').click()

                cy.get('input[name="cardNumber"]').type("4242 4242 4242 4242")
                cy.get('input[name="cardExpiry"]').type("29/08")
                cy.get('input[name="cardCvc"]').type("123")
                cy.get('input[name="billingName"]').type("pavani dulam")
                cy.get('.IconContainer').click()





                

    })
})