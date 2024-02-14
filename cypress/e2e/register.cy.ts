/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/// <reference types = "cypress" />

import Chance from "chance";
const chance = new Chance();

describe("Register Form Input validation and Account creation", () => {
  //This test does not check for missing values on any of the fields as they will be automatically handled by browser prompts on submit (and it is difficult to test these using cypress). However, they can very easily checked manually if needed.

  beforeEach(() => {
    cy.visit("http://localhost:3000/register"); // Adjust the URL accordingly
  });

  it("Doesn't allow first name larger than 50 characters", () => {
    //Invalid input for first name
    cy.get("#firstName").type("T".repeat(51));

    //Fill in other fields
    cy.get("#familyName").type("foo");
    cy.get("#nicOrPassport").type("foo");
    cy.get("#email").type("bar@gmail.com");
    cy.get("#password").type("foo");
    cy.get("#confirmPassword").type("foo");

    cy.get("button[type='submit']").click();

    // Check for error messages
    cy.on("window:alert", (text) => {
      expect(text).to.equal("First name is too long");
    });
  });

  it("Doesn't allow family name larger than 100 characters", () => {
    // Invalid input for family name
    cy.get("#familyName").type("T".repeat(101));

    // Fill in other fields
    cy.get("#firstName").type("foo");
    cy.get("#nicOrPassport").type("foo");
    cy.get("#email").type("bar@gmail.com");
    cy.get("#password").type("foo");
    cy.get("#confirmPassword").type("foo");

    cy.get("button[type='submit']").click();

    // Check for error messages
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Family name is too long");
    });
  });

  it("Doesn't allow invalid format for NIC with 10 characters - type 1", () => {
    // Invalid input for nic or passport
    cy.get("#nicOrPassport").type("1234567890"); // Invalid format for NIC with 9 numbers and a trailing v

    //Fill in other fields
    cy.get("#firstName").type("foo");
    cy.get("#familyName").type("foo");
    cy.get("#email").type("bar@gmail.com");
    cy.get("#password").type("foo");
    cy.get("#confirmPassword").type("foo");

    cy.get('button[type="submit"]').click();

    // Check for error messages
    cy.on("window:alert", (text) => {
      expect(text).to.equal("NIC or Passport is in an invalid format");
    });
  });

  it("Doesn't allow invalid format for NIC with 10 characters - type 2", () => {
    // Invalid input for nic or passport
    cy.get("#nicOrPassport").type("E23456789V"); // Invalid format for NIC with 9 numbers and a trailing v

    //Fill in other fields
    cy.get("#firstName").type("foo");
    cy.get("#familyName").type("foo");
    cy.get("#email").type("bar@gmail.com");
    cy.get("#password").type("foo");
    cy.get("#confirmPassword").type("foo");

    cy.get('button[type="submit"]').click();

    // Check for error messages
    cy.on("window:alert", (text) => {
      expect(text).to.equal("NIC or Passport is in an invalid format");
    });
  });

  it("Doesn't allow invalid format for NIC with 12 characters", () => {
    // Invalid input for nic or passport
    cy.get("#nicOrPassport").type("12345678901E"); // Invalid format for NIC with 12 numbers

    //Fill in other fields
    cy.get("#firstName").type("foo");
    cy.get("#familyName").type("foo");
    cy.get("#email").type("bar@gmail.com");
    cy.get("#password").type("foo");
    cy.get("#confirmPassword").type("foo");

    cy.get('button[type="submit"]').click();

    // Check for error messages
    cy.on("window:alert", (text) => {
      expect(text).to.equal("NIC or Passport is in an invalid format");
    });
  });

  it("Doesn't allow invalid format with undefined number of characters", () => {
    // Invalid input for nic or passport
    cy.get("#nicOrPassport").type("1234"); // Invalid format for NIC with 12 numbers

    //Fill in other fields
    cy.get("#firstName").type("foo");
    cy.get("#familyName").type("foo");
    cy.get("#email").type("bar@gmail.com");
    cy.get("#password").type("foo");
    cy.get("#confirmPassword").type("foo");

    cy.get('button[type="submit"]').click();

    // Check for error messages
    cy.on("window:alert", (text) => {
      expect(text).to.equal("NIC or Passport is in an invalid format");
    });
  });

  it("Should display error for password too short", () => {
    cy.get("#password").type("Short"); // Password less than 8 characters

    // Fill in other fields with valid data
    cy.get("#firstName").type("foo");
    cy.get("#familyName").type("foo");
    cy.get("#nicOrPassport").type("123456789v");
    cy.get("#email").type("bar@gmail.com");
    cy.get("#confirmPassword").type("Short");

    cy.get('button[type="submit"]').click();

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Password must be at least 8 characters long");
    });
  });

  it("Should display error for password too long", () => {
    cy.get("#password").type("VeryLongPassword12345678901234567890123456789"); // Password more than 32 characters

    // Fill in other fields with valid data
    cy.get("#firstName").type("foo");
    cy.get("#familyName").type("foo");
    cy.get("#nicOrPassport").type("123456789v");
    cy.get("#email").type("bar@gmail.com");
    cy.get("#confirmPassword").type(
      "VeryLongPassword12345678901234567890123456789",
    );

    cy.get('button[type="submit"]').click();

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Password must be at most 32 characters long");
    });
  });

  it("Should display error for missing lowercase letter", () => {
    cy.get("#password").type("UPPERCASE123"); // Password missing lowercase letter

    // Fill in other fields with valid data
    cy.get("#firstName").type("foo");
    cy.get("#familyName").type("foo");
    cy.get("#nicOrPassport").type("123456789v");
    cy.get("#email").type("bar@gmail.com");
    cy.get("#confirmPassword").type("UPPERCASE123");

    cy.get('button[type="submit"]').click();

    cy.on("window:alert", (text) => {
      expect(text).to.equal(
        "Password must contain at least one lowercase letter",
      );
    });
  });

  it("Should display error for missing uppercase letter", () => {
    cy.get("#password").type("lowercase123"); // Password missing uppercase letter

    // Fill in other fields with valid data
    cy.get("#firstName").type("foo");
    cy.get("#familyName").type("foo");
    cy.get("#nicOrPassport").type("123456789v");
    cy.get("#email").type("bar@gmail.com");
    cy.get("#confirmPassword").type("lowercase123");

    cy.get('button[type="submit"]').click();

    cy.on("window:alert", (text) => {
      expect(text).to.equal(
        "Password must contain at least one uppercase letter",
      );
    });
  });

  it("Should display error for missing number", () => {
    cy.get("#password").type("NoNumberHere"); // Password missing a number

    // Fill in other fields with valid data
    cy.get("#firstName").type("foo");
    cy.get("#familyName").type("foo");
    cy.get("#nicOrPassport").type("123456789v");
    cy.get("#email").type("bar@gmail.com");
    cy.get("#confirmPassword").type("NoNumberHere");

    cy.get('button[type="submit"]').click();

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Password must contain at least one number");
    });
  });

  it("Should display error for unmatching passwords", () => {
    // Password and confirm password do not match
    cy.get("#password").type("StrongPassword123");
    cy.get("#confirmPassword").type("MismatchedPassword123");

    // Fill in other fields with valid data
    cy.get("#firstName").type("John");
    cy.get("#familyName").type("Doe");
    cy.get("#nicOrPassport").type("123456789v");
    cy.get("#email").type("john.doe@example.com");

    cy.get('button[type="submit"]').click();

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Passwords do not match");
    });
  });

  it("Should display error for unmatching passwords even with spaces", () => {
    // Password and confirm password do not match, with extra spaces
    cy.get("#password").type(" StrongPassword123  ");
    cy.get("#confirmPassword").type("  StrongPassword123 ");

    // Fill in other fields with valid data
    cy.get("#firstName").type("John");
    cy.get("#familyName").type("Doe");
    cy.get("#nicOrPassport").type("123456789v");
    cy.get("#email").type("john.doe@example.com");

    cy.get('button[type="submit"]').click();

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Passwords do not match");
    });
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
