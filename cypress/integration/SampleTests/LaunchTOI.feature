@feature-tag
Feature: The TOI

  I want to open a TOI page

  @TOI
  Scenario: Opening TOI page
    Given I open TOI page
    Then I see "Times of India" in the title of the page

  @another-tag-to-include @some-other-tag
  Scenario: Different kind of opening
    Given I kinda open TOI page
    Then I am very happy
