import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the LandingPage", () => {
  cy.visit("/");
});

When("I see the header", () => {
  cy.get('#header').should('be.visible');
});

Then("I click on the Blog", () => {
  cy.contains("Blog").click();
});

Then("I should go to the Blog page", () => {
    cy.url().should('include', '/blog');
  });