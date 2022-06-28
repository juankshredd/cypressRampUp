Feature: EATestFeature
    Feature Test EA features
    Background: Enter site and click login button
    Given I visit EA Site
    When I click login link

    Scenario: Test the login features 1
    And I login as user with "admin" and "password"

    

    Scenario Outline: Test the login features 2
    And I login as user with '<username>' and '<password>'
    Then I check error message '<message>'
    Examples:
        | username | password | message |
        | admin    | password ||
        | perrete  | cachucha |  Invalid login attempt.  |

    Scenario: Test login features 3
    And I login as following
        | username | password |
        | perrete | cachucha |     
    Then I check error message 'Invalid login attempt.'
          
 