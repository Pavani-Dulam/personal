describe("GET User history API Test",()=>{
  it("Verifies that API returns history data",()=> {

    cy.visit("https://dev02.speechpundit.com");
    cy.wait(8000);
    cy.contains("Login").click()
    cy.get('input[name="email"]').as("emailbtn")
    cy.get('@emailbtn').type("pavani.dulam+student14@applines.com")
    cy.get('input[name="password"]').should('be.visible').type("root123")
    cy.get('form').submit();
    cy.wait(2000)
    cy.request({
      url: "https://dev02.speechpundit.com/api/core/history/1/10/",
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
      var num_hist_entries = response.body.history.length;
      console.log(num_hist_entries)

      var last_hist_index = num_hist_entries - 2;
      expect(cy.wrap(num_hist_entries).should("be.gte", 0));

      // Verify the presence of properties for each history entry
      expect(response.body.history[last_hist_index]).to.have.property("createdAt");
      expect(response.body.history[last_hist_index]).to.have.property("duration");
      expect(response.body.history[last_hist_index]).to.have.property("favourite");
      expect(response.body.history[last_hist_index]).to.have.property("feedback");
      expect(response.body.history[last_hist_index]).to.have.property("historyId");
      expect(response.body.history[last_hist_index]).to.have.property("id");
      expect(response.body.history[last_hist_index]).to.have.property("mp4VideoUrl");
      expect(response.body.history[last_hist_index]).to.have.property("plottedVideoUrl" );
      expect(response.body.history[last_hist_index]).to.have.property("thumbnailUrl");
      expect(response.body.history[last_hist_index]).to.have.property("title");
      expect(response.body.history[last_hist_index]).to.have.property("verbalScore");
      expect(response.body.history[last_hist_index]).to.have.property("videoUrl");
      expect(response.body.history[last_hist_index]).to.have.property("visualScore");
      expect(response.body.history[last_hist_index]).to.have.property("voiceScore");
      expect(response.body.history[last_hist_index]).to.have.property("userId",7588);
      expect(response.body.history[last_hist_index]).to.have.property("id",4772);
    });
  });
});