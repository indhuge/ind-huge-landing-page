import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on empty home page", () => {
  cy.visit("/");
});

When("I see the Title", () => {
  cy.get('#inicio').should('be.visible');
});

Then("I click on the pta", () => {
  cy.contains("SAIBA MAIS").click();
});
