describe("lesson plan individual plan GET",()=>{

    it("lessonplan",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);

        cy.contains("Login").click()
        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit();
        cy.wait(2000)

        cy.get('[href="/user"]').trigger("mouseover").click()
        cy.get('[href="/user/lessonplan"]').click().trigger('mouseout')
        cy.wait(2000)

        
      cy.request({
        url: "https://dev02.speechpundit.com/api/lessons/lesson_plan/keypoints/1034/",
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
    
      })
    })
})