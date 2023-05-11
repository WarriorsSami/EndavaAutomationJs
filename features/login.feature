Feature: Login

  Scenario Outline: Verify user was not logged in
    Given I am on the login page
    When I enter invalid credentials <username> and <password>
    Then I should see the login error message
    And I should be on the same page

    Examples:
      | username | password |
      | user1    | pass1    |
