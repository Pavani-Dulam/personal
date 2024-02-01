describe("lesson plan PUT",()=>{

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

//   edit lesson plan for first one
        
      cy.request({
        url: "https://dev02.speechpundit.com/api/lessons/lesson_plan/1061/",
        method: "PUT",
        headers: {
          Authorization: "Token 97a5c293164de168a80a046ce333692ffad5c258",
        },
        body:{
            id: 1061, 
            title: "speech7", 
            level: "Intermediate",
            speechtime:"83",
            intro:"",
            closing:"",
            id:1061,
            keypoints: [{description: "<p> very afternoon Thank you for giving me the opportunity to speak here today. I would like to take this time to discuss an important topic that affects us all - the significance of communication. Communication is a fundamental aspect of human interaction. It allows us to express ourselves, exchange ideas, build relationships, and understand one another. Without effective communication, misunderstandings can arise, conflicts can escalate, and progress can be hindered.</p>",
            id:1122, isDeleted: false}],
            level: "Intermediate",
            speechTime:"83",
            title: "speech7"

        }
       
      }).then((response) => {
        // Verify response - status, header values
        expect(response.status).to.eq(201);
       
  
        // Verify body
        console.log(response);
      })
      
    })
})