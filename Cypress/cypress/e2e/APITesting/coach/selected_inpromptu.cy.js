describe(" selected inpromptu GET",()=>{

    it("selected impromptu",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);

        cy.get('[href="/login"]').click()
        cy.get('input[name="email"]').type("pavani.dulam+student14@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit();
        cy.wait(2000)

        cy.get('[href="/user"]').trigger("mouseover").click()
        cy.get('[href="/user/impromptu"]').click().trigger('mouseout')
        cy.wait(2000)


        cy.request({
            url:"https://dev02.speechpundit.com/api/lessons/selected_impromptu_questions_list/",
            method:"GET",
            headers:{
                Authorization: "Token 97a5c293164de168a80a046ce333692ffad5c258",
            },

        }).then((response)=>{
            console.log(response)
            expect(response.status).to.eq(200);
            expect(response.body[0]).to.have.property("id")
            expect(response.body[0]).to.have.property("category")
            expect(response.body[0]).to.have.property("topic","Would you consider living in a less urbanized environment? What are your thoughts?")
            expect(response.body[0]).to.have.property("createdAt")
            expect(response.body[0]).to.have.property("coach")
            expect(response.body[0]).to.have.property("topicMedia")
        })
    })
})

        
     