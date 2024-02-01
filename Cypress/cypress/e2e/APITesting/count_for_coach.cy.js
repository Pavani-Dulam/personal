describe("GET coach count API Test",()=>{
    it("Verifies the no of coaches",()=> {
  
      cy.visit("https://dev02.speechpundit.com");
      cy.wait(8000);
      cy.contains("Login").click()
      cy.get('input[name="email"]').as("emailbtn")
      cy.get('@emailbtn').type("pavani.dulam+student14@applines.com")
      cy.get('input[name="password"]').should('be.visible').type("root123")
      cy.get('form').submit();
      cy.wait(2000)
      cy.request({
        url: "https://dev02.speechpundit.com/api/core/count_for_coach/",
        method: "GET",
        headers: {
          Authorization: "Token 97a5c293164de168a80a046ce333692ffad5c258",
        },
       
      }).then((response) => {
        // Verify body
        console.log(response);
        expect(response.body).to.have.property("groups",4);
       
  
      });
    });
  });