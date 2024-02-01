describe("student loin",()=>{
    it("sign in student",()=>{
       
     cy.request({
            url: "https://dev02.speechpundit.com/api/auth/signin/",
            method: "POST",
            body: {
                   email:"pavani.dulam+student12@applines.com",
                   password:"Root@124"
                  }
    }).then((response) => {
        // Verify response - status, header values
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property("content-type","application/json");
        console.log(response)

        expect(response.body).to.have.property("email","pavani.dulam+student12@applines.com")
        expect(response.body).to.have.property("firstName","student5")
        expect(response.body).to.have.property("lastName","dulam")
        expect(response.body).to.have.property("token","92f7bcc0599e1bc43e97ed2fec91ecd61c4502be")
        expect(response.body.group[0]).to.equal("Student")
        expect(response.body).to.have.property("coachRelation",true)
        expect(response.body).to.have.property("coachName","pavani")
    })
})
})