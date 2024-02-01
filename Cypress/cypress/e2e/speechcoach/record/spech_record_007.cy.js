describe("toast msg",()=>{

    it("spch_record_007",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.get('[href="/login"]').click()
        cy.get("input[name='email']").type("pavani.dulam+student29@applines.com")
        cy.get("input[name='password']").type("root123")
        cy.get('form').submit()
        cy.wait(3000)
        cy.contains("Record").click()
        cy.contains("Start").click().wait(2000)
        cy.contains("Done").click()
        cy.get(".Toastify__toast-body").should("contain","Minimum duration of the video must be 30 Seconds")
        

    })
})