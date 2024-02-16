/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/// <reference types = "cypress" />

const correctEmail = "eyasa1979@gmail.com";
const correctPassword = "Sasvidu2007#";

const falseEmail = "foo@bar";
const falsePassword = "foo";

const errorMessage = "Error signing in:";
const genericErrorMessage = "An unknown error occurred";

describe("Sign-in Form Sign-in functionality", () => {
  //This test does not check for input validation (missing values) as they will be automatically handled by browser prompts on submit (and it is difficult to test these using cypress). However, they can very easily checked manually if needed.

  beforeEach(() => {
    cy.visit("http://localhost:3000/sign-in");
  });

  it("Doesn't allow invalid email and invalid password to signin", () => {
    //Enter data
    cy.get("#email").type(falseEmail);
    cy.get("#password").type(falsePassword);

    //Submit
    cy.get("button[type='submit']").click();

    //Check for UI Change, Navigation and Error Message
    cy.get("button[type='submit']").contains("Signing in...");
    cy.wait(5000);
    cy.url().should("equal", "http://localhost:3000/sign-in");

    cy.on("window:alert", (text) => {
      expect(text).to.include(errorMessage ?? genericErrorMessage);
    });
  });

  it("Doesn't allow invalid email and valid password to signin", () => {
    //Enter data
    cy.get("#email").type(falseEmail);
    cy.get("#password").type(correctPassword);

    //Submit
    cy.get("button[type='submit']").click();

    //Check for UI Change, Navigation and Error Message
    cy.get("button[type='submit']").contains("Signing in...");
    cy.wait(5000);
    cy.url().should("equal", "http://localhost:3000/sign-in");

    cy.on("window:alert", (text) => {
      expect(text).to.include(errorMessage ?? genericErrorMessage);
    });
  });

  it("Doesn't allow valid email and invalid password to signin", () => {
    //Enter data
    cy.get("#email").type(correctEmail);
    cy.get("#password").type(falseEmail);

    //Submit
    cy.get("button[type='submit']").click();

    //Check for UI Change, Navigation and Error Message
    cy.get("button[type='submit']").contains("Signing in...");
    cy.wait(5000);
    cy.url().should("equal", "http://localhost:3000/sign-in");

    cy.on("window:alert", (text) => {
      expect(text).to.include(errorMessage ?? genericErrorMessage);
    });
  });

  it("Allows valid email and valid password to signin", () => {
    //Enter data
    cy.get("#email").type(correctEmail);
    cy.get("#password").type(correctPassword);

    //Submit
    cy.get("button[type='submit']").click();

    //Check for UI Change and Navigation
    cy.get("button[type='submit']").contains("Signing in...");
    cy.url().should("contain", "dashboard");
    //See the user doesn't get redirected elsewhere after sign in
    cy.wait(5000);
    cy.url().should("contain", "dashboard");
  });
});
