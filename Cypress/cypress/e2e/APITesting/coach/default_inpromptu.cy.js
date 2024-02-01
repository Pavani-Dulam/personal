describe(" default inpromptu GET",()=>{

    it("impromptu",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);

        cy.contains("Login").click()
        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit();
        cy.wait(2000)

        cy.get('[href="/user"]').trigger("mouseover").click()
        cy.get('[href="/user/impromptu"]').click().trigger('mouseout')
        cy.wait(2000)


        cy.request({
            url:"https://dev02.speechpundit.com/api/lessons/default_impromptu/",
            method:"GET",
            headers:{
                Authorization: "Token 97a5c293164de168a80a046ce333692ffad5c258",
            },

        }).then((response)=>{
            console.log(response)
            expect(response.status).to.eq(200);
        })
    })
})

        
     