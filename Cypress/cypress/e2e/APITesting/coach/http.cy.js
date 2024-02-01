describe("Recorded videos API Test", function () {
    it("Verifies that API returns all the recorded videos.", function () {
      cy.request({
        url: "https://dev02.speechpundit.com/api/core/recorded_video",
        method: "GET",
        headers: {
          Authorization: "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c",
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
        var num_vdo_entries = response.body.length;
        var last_vdo_index = num_vdo_entries - 1;
        expect(cy.wrap(num_vdo_entries).should("be.gte", 0));
  
        // Verify the presence of properties for each video entry
        expect(response.body[last_vdo_index]).to.have.property("id");
        expect(response.body[last_vdo_index]).to.have.property("videoUrl");
        expect(response.body[last_vdo_index]).to.have.property("mp4VideoUrl");
        expect(response.body[last_vdo_index]).to.have.property("duration");
        expect(response.body[last_vdo_index]).to.have.property("thumbnailUrl");
        expect(response.body[last_vdo_index]).to.have.property("createdAt");
        expect(response.body[last_vdo_index]).to.have.property("title");
      });
    });
  });

 