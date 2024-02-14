import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the LandingPage", () => {
  cy.visit("/");
});

When("I see the header", () => {
  cy.get('#header').should('be.visible');
});

Then("I click on the Faq", () => {
  cy.contains("FAQ").click();
});

Then("I should go to the Faq page", () => {
    cy.url().should('include', '/faq');
  });