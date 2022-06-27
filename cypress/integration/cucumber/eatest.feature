Feature: EATestFeature
    Feature Test EA features
    Background: Enter site
    Given I visit EA Site

    Scenario: Test the login features
    Given I click login link
    And I login as user with "admin" and "password"

    

    Scenario Outline: Test the login features
    Given I click login link
    And I login as user with '<username>' and '<password>'
    Examples:
        | username | password | 
        | admin    | password | 