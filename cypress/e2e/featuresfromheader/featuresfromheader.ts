import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the LandingPage", () => {
  cy.visit("/");
});

When("I see the header", () => {
  cy.get('#header').should('be.visible');
});

Then("I click on the Funcionalidades", () => {
  cy.contains("Funcionalidades").click();
});

Then("I should go to the Features", () => {
    cy.url().should('include', '/?spos=funcionalidades');
  });