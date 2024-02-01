describe("GET groups",()=>{
    it("Verifies that API returns history data",()=> {
  
      cy.request({
        url: "https://dev02.speechpundit.com/api/class/",
        method: "GET",
        headers: {
          Authorization: "Token 97a5c293164de168a80a046ce333692ffad5c258",
        },
       
      }).then((response) => {
        // Verify response - status, header values
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property(
          "content-type",
          "application/json"
        );
  
        // Verify body
        console.log(response);
        // var num_hist_entries = response.body.length;
        // console.log(num_hist_entries)
  
        // var last_hist_index = num_hist_entries - 1;
        // expect(cy.wrap(num_hist_entries).should("be.gte", 0));
  
        // Verify the presence of properties for each history entry
        expect(response.body[0]).to.have.property("archived");
        expect(response.body[0].coach).to.have.property("email","pavani.dulam+student14@applines.com");
        expect(response.body[0]).to.have.property("name","coach1 pavani");
        expect(response.body[0]).to.have.property("level","Intermediate");

        expect(response.body[1]).to.have.property("archived");
        expect(response.body[1].coach).to.have.property("email","pavani.dulam+student14@applines.com");
        expect(response.body[1]).to.have.property("name","coach2 pavani");
        expect(response.body[1]).to.have.property("level","Intermediate");

        expect(response.body[2]).to.have.property("archived");
        expect(response.body[2].coach).to.have.property("email","pavani.dulam+student14@applines.com");
        expect(response.body[2]).to.have.property("name","coach4 pavani");
        expect(response.body[2]).to.have.property("level","Beginner");

        expect(response.body[3]).to.have.property("archived");
        expect(response.body[3].coach).to.have.property("email","pavani.dulam+student14@applines.com");
        expect(response.body[3]).to.have.property("name","coach3 pavani");
        expect(response.body[3]).to.have.property("level","Advanced");
        

        
      });
    });
  });