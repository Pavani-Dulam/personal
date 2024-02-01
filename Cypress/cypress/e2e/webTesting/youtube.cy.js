describe('YouTube Video Ad Tests', () => {
    it('Test YouTube video ads', () => {
        
        cy.visit('https://www.youtube.com/')
        cy.get(':nth-child(2) > #contents > :nth-child(1) > #content > .ytd-rich-item-renderer > #dismissible > :nth-child(1) > ytd-thumbnail.style-scope > #thumbnail > yt-image.style-scope > .yt-core-image--fill-parent-height').click( )
        
      // Wait for some time for the ad to appear
      cy.wait(5000); // Adjust the time as needed
  
      // Check for ad elements or the "Skip Ad" button
      cy.get('.ytp-ad-module, .ytp-ad-skip-button', { timeout: 10000 })
        .then(($adElements) => {
          if ($adElements.length > 0) {
            // An ad is present; you can customize how you want to handle it here
            // For example, clicking the "Skip Ad" button if available
            cy.get('.ytp-ad-skip-button').click();
            cy.get('video').should('be.playing');
          } else {
            // No ad or ad detection failed
            // You can handle this case, e.g., log a message or proceed with the video
            cy.log('No ad detected');
            cy.get('video').should('be.playing');
          }
        });
    });
  });
  


