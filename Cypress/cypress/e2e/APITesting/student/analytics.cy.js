describe("analytics",()=>{
    it("analytics/",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.get('[href="/login"]').click()
        cy.get('input[name="email"]').type("pavani.dulam+student12@applines.com")
        cy.get('input[name="password"]').type("Root@124")
        cy.get('form').submit().wait(5000)
        cy.request({
            url:"https://dev02.speechpundit.com/api/core/analytics/",
            method:"POST",
            body:{
                period:"This Week"
            },
            headers:{
                Authentication:"Token 92f7bcc0599e1bc43e97ed2fec91ecd61c4502be"
            }
        }).then((response)=>{
            console.log(response)
            expect(response.status).to.eq(200)
        })

    })
})
