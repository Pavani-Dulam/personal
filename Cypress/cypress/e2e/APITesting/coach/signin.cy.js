describe("POST User h API Test",()=>{
    it("sign in user",()=> {

      cy.request({
        url: "https://dev02.speechpundit.com/api/auth/signin/",
        method: "POST",
        body:{
        email:"pavani.dulam+student14@applines.com",
        password:"root123"
        }
       
      }).then((response) => {
        // Verify response - status, header values
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property( "content-type","application/json");
        expect(response.body).to.have.property("email","pavani.dulam+student14@applines.com");
        expect(response.body).to.have.property("firstName","pavani");
        expect(response.body).to.have.property("lastName","dulam");
        expect(response.body).to.have.property("isActive",true);
        expect(response.body).to.have.property("token","97a5c293164de168a80a046ce333692ffad5c258");
        expect(response.body.profile).to.have.property("id",7123);
        expect(response.body.profile).to.have.property("referrer","NSF2023");
        expect(response.body.profile).to.have.property("userId",7588);
    

      });
    });
  });