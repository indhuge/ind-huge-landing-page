import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the LandingPage", () => {
  cy.visit("/");
});

When("I see the header", () => {
  cy.get('#header').should('be.visible');
});

Then("I click on the CTA", () => {
  cy.contains("Entre em Contato").click();
});

Then("I should go to the contact form", () => {
  cy.url().should('include', '/?spos=contactForm');
});
