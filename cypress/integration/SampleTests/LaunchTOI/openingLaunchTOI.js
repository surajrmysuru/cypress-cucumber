import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://timesofindia.indiatimes.com";

Given(`I open TOI page`, () => {
  cy.visit(url);
});
