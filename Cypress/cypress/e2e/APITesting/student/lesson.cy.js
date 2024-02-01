describe("lessons/",()=>{
    it("lessons for students",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.get('[href="/login"]').click()
        cy.get('input[name="email"]').type("pavani.dulam+student12@applines.com")
        cy.get('input[name="password"]').type("Root@124")
        cy.get('form').submit()
        cy.request({
            url:"https://dev02.speechpundit.com/api/class/lessons/",
            method:"GET",
            headers:{
                Authorization:"Token 92f7bcc0599e1bc43e97ed2fec91ecd61c4502be"
            }
            }).then((response)=>{
                console.log(response)
                expect(response.status).to.equal(200)
                expect(response.body[0]).to.have.property("id",2028)
                expect(response.body[0]).to.have.property("coach",7588)
                expect(response.body[0].student).to.have.property("email","pavani.dulam+student12@applines.com")
                expect(response.body[0].student.profile).to.have.property("referrer","NSF2023")
                expect(response.body[0].student.groups[0]).to.have.property("name","Student")
                expect(response.body[0].lesson).to.have.property("title","speech7")
                expect(response.body[0].assignedDate).to.eq("2023-09-28")
                expect(response.body[0].group).to.have.property("name","coach2 pavani")
                expect(response.body[0].group.coach).to.have.property("email","pavani.dulam+student14@applines.com")




        })


    })
})