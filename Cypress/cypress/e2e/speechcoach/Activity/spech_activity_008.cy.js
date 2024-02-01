describe("activity page edit title",()=>{
    it("spech_activity_008",()=>{
        cy.visit("https://dev02.speechpundit.com")
        cy.wait(6000)
        cy.get('[href="/login"]').click()
        cy.get('input[name="email"]').type("pavani.dulam+student29@applines.com")
        cy.get('input[name="password"]').type("root123")
        cy.get('form').submit()
        cy.get('[href="/activity"]').click().trigger("mouseout")
        cy.get(".activity-body").children(".stu-items-container").eq(0).find(".stu-item > .g-0 > .col-lg > .card-body > .gx-2 > .col").children('button').eq(0).click().wait(2000)
        cy.get('input[value="Video-3"]').clear().type("Video-2")
        cy.get('input[value="Video-3"]').type("{enter}")
        
        


    })
})