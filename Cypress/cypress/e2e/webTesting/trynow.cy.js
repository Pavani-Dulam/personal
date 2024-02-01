describe("try now",()=>{
    it("try now page",()=>{
        cy.visit("https://dev02.speechpundit.com");
        cy.wait(5000);
        cy.get('[href="trynow"]').click()
        cy.get('[style="margin-top: 5%;"] > .g-2 > :nth-child(3) > .dcard > :nth-child(5)').trigger("mouseover").wait(2000)
        cy.get('[label="Select"]').click().wait(5000)
        cy.get('[style="margin-right: 1%;"]').click().wait(5000)
        cy.go(-1)

    })
})

