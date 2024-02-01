describe("GET student groups",()=>{
    it("Verifies that API returns history data",()=> {
            cy.visit("https://dev02.speechpundit.com");
            cy.wait(5000);
    
            cy.get('[href="/login"]').click()
            cy.get('input[name="email"]').type("pavani.dulam+student12@applines.com")
            cy.get('input[name="password"]').type("Root@124")
            cy.get('form').submit();
            cy.wait(2000)
    
            cy.get('[href="/user"]').trigger("mouseover").click()
            cy.get('[href="/user/groups"]').click().trigger('mouseout')
            cy.wait(2000)
  
            cy.request({
                url: "https://dev02.speechpundit.com/api/class/student_groups/",
                method: "GET",
                headers:{
                Authorization: "Token 92f7bcc0599e1bc43e97ed2fec91ecd61c4502be",
                }
            
            }).then((response) => {

                // Verify response - status, header values
                expect(response.status).to.eq(200);
                expect(response.headers).to.have.property(
                "content-type",
                "application/json"
                );
  
                // Verify body
                console.log(response);
                expect(response.body[0].id).to.equal(2033);
                expect(response.body[0].name).to.equal("coach2 pavani");
                expect(response.body[0].level).to.equal("Intermediate");
                expect(response.body[0].coach).to.have.property("email","pavani.dulam+student14@applines.com")
                expect(response.body[0].coach.profile).to.have.property("referrer","NSF2023")
        

        
      });
    });
  });