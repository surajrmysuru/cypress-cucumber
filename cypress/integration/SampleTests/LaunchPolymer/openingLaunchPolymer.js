import { Given, Then} from "cypress-cucumber-preprocessor/steps";

const url = "https://www.polymer-project.org/";

Given(`I open Polymer page`, () => {
  cy.visit(url, { timeout: 30000 });
});

Then(`I see {string} in the title of the page`, title => {
  cy.title().should("include", "Polymer Project");
});

Then(`I click on blog`, () => {
  cy.contains('Blog').click()
});