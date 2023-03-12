@Search
Feature: Verify The SearchHotel Page

  Scenario Outline: Verify SearchHotel Without Entering any filed values
    Given User is on adactin page
    When User enters "<userName>" and "<password>" and Click on Login Button
    Then User verify login sucess message "Hello Nitish123!"
    When User click on Search Button Without Selecting any fields
    Then User verify location error message "Please Select a Location"

    Examples: 
      | userName  | password |
      | nitish123 | Q8PTF9   |
