import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

const domain="https://domain.name/";
const url = "prweb/PRWebLDAP1/";

Given(`I open Pega page`, () => {
  cy.visit(domain+url, { timeout: 30000 });
});

Then(`I see {string} in the title of the page`, title => {
  cy.title().should("include", "PageTitle");
});

Then(`I click on Login`, () => {
  cy.contains('Log in').click()
});

Given(`I Open Pega login page`, () => {
   
     cy.visit( domain , url ,'mFW9vHBT7hxOijRsFawQ3gjY0WwvMBOc*/!STANDARD')
  
     cy.viewport(1920, 969)
  
     cy.visit( domain , url ,'mFW9vHBT7hxOijRsFawQ3gjY0WwvMBOc*/!STANDARD')
  
     
 })

 When(`I login using userid and password`, () => {
   
  cy.get('.content-container > #login > #credentials > .field > #txtUserID').click()

  cy.get('.content-container > #login > #credentials > .field > #txtUserID').type('test')

  cy.get('.content-container > #login > #credentials > .field > #txtPassword').type('test')

  cy.get('.content-container > #login > #credentials > #submit_row > #sub').click()

  
})

Then(`I logout from pega`, () => {   

  cy.get('.screen-layout-body > .menu-panel-wrapper > #pyNavigation1567519252010 > .menu-item-active > .menu-item-anchor').click()

  cy.visit(domain,url,'Faa7dEFYH--JuafmONsDTBg9cDLP7OIl*/!STANDARD?pyActivity=LogOff&pzPrimaryPageName=pyDisplayHarness')

})
 