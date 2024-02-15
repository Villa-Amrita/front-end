/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/// <reference types = "cypress" />

describe("User Authentication and Authorization", () => {
  it("Doesn't allow non-authenticated users to access the main content", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.wait(1000);
    cy.url().should("equal", "http://localhost:3000/");
  });
});
