describe("google",()=>{
    it("google visiting",()=>{
        cy.visit("https://www.google.com");
        cy.get('#APjFqb').type("Applines").click()
        // #APjFqb input#APjFqb input.APjFqb [name='APjFqb']
        // tag#id
        // tag.class
        // tag[attribute='value']
        // tag.class[attribute='value']

        // cy.get('#search_query_top").type("T-Shirts")
        // cy.get("[name='submit_search]").click()
        // cy.get('.lighter).contains("T-Shirts")
    })

})