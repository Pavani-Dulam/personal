describe("youtube",()=>{

    it("sanfoundary visit",()=>{
        
        cy.visit('https://www.youtube.com/')
        cy.get(':nth-child(2) > #contents > :nth-child(1) > #content > .ytd-rich-item-renderer > #dismissible > :nth-child(1) > ytd-thumbnail.style-scope > #thumbnail > yt-image.style-scope > .yt-core-image--fill-parent-height').click( )
      
        // cy.get('.ytp-ad-skip-button').should('exist').then(($button) => {
        //     if ($button.length > 0) {
            //   cy.get('.ytp-ad-skip-button').click()
        //     } else {
        //       cy.log('bye')
        //     }})
        if(cy.contains('Skip Ad').should('exist')){
            cy.wait(5000)
            cy.get('.ytp-ad-skip-button').click()
         }
         else{

            cy.wait(5000)
            cy.get('.ytp-play-button').click()
            cy.wait(5000)
            cy.get('.ytp-play-button').click() 

         } 
           
        
    })


})