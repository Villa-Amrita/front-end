/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/// <reference types = "cypress" />

import Chance from "chance";
const chance = new Chance();

context("Input Validation Tests with Random Data", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register"); // Replace with the actual path to your registration page
  });

  it("Should register a user with random valid data", () => {
    const randomFirstName: string = chance.first();
    const randomFamilyName: string = chance.last();
    const randomNicOrPassport: string =
      chance.natural({ min: 100000000, max: 999999999 }) + "v";
    const randomEmail: string = chance.email();
    const randomPassword: string = chance.string({
      length: 10,
      alpha: true,
      numeric: true,
      symbols: false,
    });
    const randomConfirmPassword: string = randomPassword;

    // Fill in form with random data
    cy.get("#firstName").type(randomFirstName);
    cy.get("#familyName").type(randomFamilyName);
    cy.get("#nicOrPassport").type(randomNicOrPassport);
    cy.get("#email").type(randomEmail);
    cy.get("#password").type(randomPassword);
    cy.get("#confirmPassword").type(randomConfirmPassword);

    cy.get("button[type='submit']").click();

    // Assert navigation to the dashboard or any success page
    cy.url().should("include", "/dashboard");
  });
});
