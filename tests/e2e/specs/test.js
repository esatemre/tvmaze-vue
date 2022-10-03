describe("E2E Test", () => {
  it("Visits the app root and click first tv show and validate route", () => {
    // visit app root
    cy.visit("/");
    // click first poster
    cy.get("img").eq(0).click();
    // validate route is changed
    cy.url().should((loc) => {
      loc.includes("/shows/");
    });
  });
});
