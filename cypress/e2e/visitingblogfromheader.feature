Feature: Visiting Blog from header

Scenario: Header to blog
    Given I am on the LandingPage
    When I see the header
    Then I click on the Blog
    And I should go to the Blog page