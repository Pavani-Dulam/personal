describe("signup",()=>{
    // invalid email
    it("spech_signup_002",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.contains('Register').click();
        var date = new Date();
        var fname = "autouser";
        var yyyymmdd = date.getUTCFullYear().toString().concat(date.getMonth()).concat(date.getUTCDay());
        var hhmmss = date.getHours().toString().concat(date.getMinutes()).concat(date.getSeconds());
        var email = fname.concat(".").concat(yyyymmdd).concat(hhmmss).concat("applines.com");
        //Redirecting to signup page
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="firstName"]').type(fname);
        cy.get('input[name="lastName"]').type('lname');
        cy.get('input[name="password"]').type('root123');
        cy.get('[Value="Coach"]').check({force: true});//sign up as Coach.
        cy.get('[type=checkbox]').check()
        cy.get('form').submit();
        cy.get(".invalid-tooltip").should("contain","email must be a valid email")
        cy.wait(5000)

    })

    // not accepting terms and conditions
    it("spech_signup_003",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.contains('Register').click();
        var date = new Date();
        var fname = "autouser";
        var yyyymmdd = date.getUTCFullYear().toString().concat(date.getMonth()).concat(date.getUTCDay());
        var hhmmss = date.getHours().toString().concat(date.getMinutes()).concat(date.getSeconds());
        var email = fname.concat(".").concat(yyyymmdd).concat(hhmmss).concat("@applines.com");
        //Redirecting to signup page
         cy.get('input[name="email"]').type(email);
            cy.get('input[name="firstName"]').type(fname);
            cy.get('input[name="lastName"]').type('lname');
            cy.get('input[name="password"]').type('root123');
            cy.get('[Value="Coach"]').check({force: true});//sign up as Coach.
            cy.get('form').submit();
            cy.get(".invalid-tooltip").should("contain","Terms must be accepted")
            cy.wait(5000)
            
    })
    //    not selecting any role
    it("spech_signup_004",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.contains('Register').click();
        var date = new Date();
        var fname = "autouser";
        var yyyymmdd = date.getUTCFullYear().toString().concat(date.getMonth()).concat(date.getUTCDay());
        var hhmmss = date.getHours().toString().concat(date.getMinutes()).concat(date.getSeconds());
        var email = fname.concat(".").concat(yyyymmdd).concat(hhmmss).concat("@applines.com");
        //Redirecting to signup page
         cy.get('input[name="email"]').type(email);
            cy.get('input[name="firstName"]').type(fname);
            cy.get('input[name="lastName"]').type('lname');
            cy.get('input[name="password"]').type('root123');
            cy.get('[type=checkbox]').check()
            cy.get('form').submit();
            cy.wait(5000)
            
            
    })

    it("spech_signup_001",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.contains('Register').click();
        var date = new Date();
        var fname = "autouser";
        var yyyymmdd = date.getUTCFullYear().toString().concat(date.getMonth()).concat(date.getUTCDay());
        var hhmmss = date.getHours().toString().concat(date.getMinutes()).concat(date.getSeconds());
        var email = fname.concat(".").concat(yyyymmdd).concat(hhmmss).concat("@applines.com");
        //Redirecting to signup page
         cy.get('input[name="email"]').type(email);
            cy.get('input[name="firstName"]').type(fname);
            cy.get('input[name="lastName"]').type('lname');
            cy.get('input[name="password"]').type('root123');
            cy.get('[type=checkbox]').check()
            cy.get('[Value="Coach"]').check({force: true});
            cy.get('form').submit();
            cy.wait(5000)
            
            
    })

    it("spech_signup_006",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.contains('Register').click();
        var date = new Date();
        var fname = "autouser";
        var yyyymmdd = date.getUTCFullYear().toString().concat(date.getMonth()).concat(date.getUTCDay());
        var hhmmss = date.getHours().toString().concat(date.getMinutes()).concat(date.getSeconds());
        var email = fname.concat(".").concat(yyyymmdd).concat(hhmmss).concat("@applines.com");
        //Redirecting to signup page
         cy.get('input[name="email"]').type(email);
            cy.get('input[name="firstName"]').type(fname);
            cy.get('input[name="lastName"]').type('lname');
            cy.get('input[name="password"]').type('root123');
            cy.get('[type=checkbox]').check()
            cy.get('[Value="Coach"]').check({force: true});
            cy.get('form').submit();
            cy.wait(5000)
            cy.contains("Resend Verification Email").click()
            
            
    })

})

   