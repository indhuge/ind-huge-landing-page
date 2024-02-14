Feature: Visiting Faq from header

Scenario: Header to faq
    Given I am on the LandingPage
    When I see the header
    Then I click on the Faq
    And I should go to the Faq page