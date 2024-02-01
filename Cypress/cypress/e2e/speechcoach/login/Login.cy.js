describe("Login",()=>{

  

    it("spch_login_002",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.get('[href="/login"]').click()
        cy.get("input[name='email']").type("pavanidulam+student14@applines.com")
        cy.get("input[name='password']").type("root123")
        cy.get('form').submit()
        cy.wait(9000)

    }) 
    

    it("spch_login_003",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.get('[href="/login"]').click()
        cy.get("input[name='email']").type("pavani.dulam+student14@applines.com")
        cy.get("input[name='password']").type("root12")
        cy.get('form').submit()
        cy.wait(9000)

    })

    it("spch_login_004",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.get('[href="/login"]').click()
        cy.get("input[name='email']").type("pavanidulam+student14@applines.com")
        cy.get("input[name='password']").type("root123")
        cy.get('form').submit()
        cy.get(".Toastify__toast-body").should("contain","Invalid Credentials")
        cy.wait(9000)

    })

    it("spch_login_005",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.get('[href="/login"]').click()
        cy.get("input[name='email']").type("pavani.dulam+student14@applines.com")
        cy.get("input[name='password']").type("root12")
        cy.get('form').submit()
        cy.get(".Toastify__toast-body").should("contain","Invalid Credentials")
        cy.wait(9000)

    })

    it("spch_login_001",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.get('[href="/login"]').click()
        cy.get("input[name='email']").type("pavani.dulam+student14@applines.com")
        cy.get("input[name='password']").type("root123")
        cy.get('form').submit()
        cy.wait(9000)

    })
 
   
   
})

    
