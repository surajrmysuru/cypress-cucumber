@Polymer
Feature: The Polymer Project

  I want to open a Polymer Project page

  @Polymer
  Scenario: Opening Polymer Project page
    Given I open Polymer page
    Then I see "Polymer Project" in the title of the page
    Then I click on blog

  @another-tag-to-include @some-other-tag
  Scenario: Different kind of opening - Polymer Project
    Given I kinda open Polymer page
    Then I am very happy
