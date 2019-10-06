import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://timesofindia.indiatimes.com";

Given(`I kinda open TOI page`, () => {
  cy.visit(url);
});

// This is the same step that we have in news/Google/different.js, but you don't have to worry about collisions!
Then(`I am very happy`, () => {
  cy.title().should("include", "Times");
});
