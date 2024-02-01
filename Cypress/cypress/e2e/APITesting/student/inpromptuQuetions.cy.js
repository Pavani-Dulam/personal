describe("GET inpromptu quetions",()=>{
    it("All Assignments inpromptu quetions",()=> {
            cy.visit("https://dev02.speechpundit.com");
            cy.wait(5000);
    
            cy.get('[href="/login"]').click()
            cy.get('input[name="email"]').type("pavani.dulam+student12@applines.com")
            cy.get('input[name="password"]').type("Root@124")
            cy.get('form').submit();
            cy.wait(2000)
            cy.get('[href="/dashboards/assignments"]').click()
           
            cy.wait(2000)
  
            cy.request({
                url: "https://dev02.speechpundit.com/api/lessons/impromptu_questions/",
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
                expect(response.body[0]).to.have.property("id",1004)
                expect(response.body[0].id).to.equal(1004)
                expect(response.body[0].coach).to.equal(7123);
                expect(response.body[0]).to.have.property("category","thoughts & ideas")

                

        
      });
    });
  });