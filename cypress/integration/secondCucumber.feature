Feature: Search

    I want to search on google

    Scenario: search on google
    Given open google search page
    And type "java" on search box
    When click the search on google
    Then got "java" search result