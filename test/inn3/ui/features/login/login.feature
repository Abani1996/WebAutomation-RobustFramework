@feature=login
Feature: A demo web app testing
  @testCaseID=INN3-4345
  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with valid username and password
    Then I should see a successful message
