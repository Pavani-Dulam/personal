describe("search student activity  API Test",()=>{
    it("Verifies that API returns history data",()=> {
  
      cy.visit("https://dev02.speechpundit.com");
      cy.wait(8000);
      cy.contains("Login").click()
      cy.get('input[name="email"]').as("emailbtn")
      cy.get('@emailbtn').type("pavani.dulam+student14@applines.com")
      cy.get('input[name="password"]').should('be.visible').type("root123")
      cy.get('form').submit();
      cy.wait(2000)

      cy.request({
        url: "https://dev02.speechpundit.com/api/class/student_activity/1/10/",
        method: "POST",
        body:{ 
            searchKeyword:null,
            videoType:""
        },
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
        var num_hist_entries = response.body.students.length;
        console.log(num_hist_entries)
  
  
        // Verify the presence of properties for each history entry
        expect(response.body.students[0]).to.have.property("id",1797);
        expect(response.body.students[0].student).to.have.property("email","pavani.dulam+student13@applines.com");
        expect(response.body.students[0].student).to.have.property("firstName","student1");
        expect(response.body.students[0].classGroup).to.have.property("name","coach1 pavani");
        expect(response.body.students[0].classGroup.coach).to.have.property("email","pavani.dulam+student14@applines.com");


        expect(response.body.students[1]).to.have.property("id",1798);
        expect(response.body.students[1].student).to.have.property("email","pavani.dulam+student15@applines.com");
        expect(response.body.students[1].student).to.have.property("firstName","student2");
        expect(response.body.students[1].classGroup).to.have.property("name","coach1 pavani");
        expect(response.body.students[1].classGroup.coach).to.have.property("email","pavani.dulam+student14@applines.com");



        expect(response.body.students[2]).to.have.property("id",1804);
        expect(response.body.students[2].student).to.have.property("email","pavani.dulam+student20@applines.com");
        expect(response.body.students[2].student).to.have.property("firstName","student3");
        expect(response.body.students[2].classGroup).to.have.property("name","coach1 pavani");
        expect(response.body.students[2].classGroup.coach).to.have.property("email","pavani.dulam+student14@applines.com");



        expect(response.body.students[3]).to.have.property("id",1805);
        expect(response.body.students[3].student).to.have.property("email","pavani.dulam+student25@applines.com");
        expect(response.body.students[3].student).to.have.property("firstName","student4");
        expect(response.body.students[3].classGroup).to.have.property("name","coach1 pavani");
        expect(response.body.students[3].classGroup.coach).to.have.property("email","pavani.dulam+student14@applines.com");



        expect(response.body.students[4]).to.have.property("id",1822);
        expect(response.body.students[4].student).to.have.property("email","pavani.dulam+student12@applines.com");
        expect(response.body.students[4].student).to.have.property("firstName","student5");
        expect(response.body.students[4].classGroup).to.have.property("name","coach2 pavani");
        expect(response.body.students[4].classGroup.coach).to.have.property("email","pavani.dulam+student14@applines.com");



        expect(response.body.students[5]).to.have.property("id",1824);
        expect(response.body.students[5].student).to.have.property("email","pavani.dulam+student11@applines.com");
        expect(response.body.students[5].student).to.have.property("firstName","student6");
        expect(response.body.students[5].classGroup).to.have.property("name","coach2 pavani");
        expect(response.body.students[5].classGroup.coach).to.have.property("email","pavani.dulam+student14@applines.com");

        
       
      });
    });
  });