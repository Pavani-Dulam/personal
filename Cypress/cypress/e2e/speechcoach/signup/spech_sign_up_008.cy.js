describe("user shall be directed to pricing page",()=>{
    it("select a plan",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);
        cy.get('[href="/login"]').click()
        cy.get("input[name='email']").type("pavani.dulam+student29@applines.com")
        cy.get("input[name='password']").type("root123")
        cy.get('form').submit()
        cy.contains("Buy Now").click()

    })
})