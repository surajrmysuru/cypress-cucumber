import { Given, Then} from "cypress-cucumber-preprocessor/steps";

const url = "https://timesofindia.indiatimes.com";

Given(`I open TOI page`, () => {
  cy.visit(url);
});

Then(`I see {string} in the title of the page`, title => {
  cy.title().should("include", "times");
});