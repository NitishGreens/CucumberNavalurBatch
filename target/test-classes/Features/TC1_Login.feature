@Login
Feature: Verify Adactin Login Page

  Background: 
    Given User is on adactin page

  @Sanity @Smoke @TC1
  Scenario Outline: Verify Login with valid credentials
    When User enters "<userName>" and "<password>" and Click on Login Button
    Then User verify login sucess message "Hello Nitish123!"

    Examples: 
      | userName  | password |
      | nitish123 | Q8PTF9   |

  @Smoke @Reg @TC2
  Scenario Outline: Verify Login with invalid credentials
    When User enters "<userName>" and "<password>" and Click on Login Button
    Then User verify login error message "Invalid Login details or Your Password might have expired. "

    Examples: 
      | userName  | password  |
      | nitish123 | hello@123 |

  @Sanity @Reg @TC3
  Scenario: Verify login page using Enter key with valid credentials
    When User enters userName and password and press enter key
      | userName  | password |
      | nitish123 | Q8PTF9   |
    Then User verify login sucess message "Hello nitish123!"
