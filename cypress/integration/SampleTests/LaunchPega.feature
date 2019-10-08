@Pega
Feature: Pega Project

  I want to open a Pega, login and logoff

  @Pega-Login
  Scenario: Open Pega
  Given I Open Pega login page
  when I login using userid and password
  Then I logout from pega
   
