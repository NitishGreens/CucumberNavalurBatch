$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/TC_01FacebookLogin.feature");
formatter.feature({
  "name": "Verify facebook Login Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate facebook login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Reg"
    },
    {
      "name": "@TC001"
    }
  ]
});
formatter.step({
  "name": "User is on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click on login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User get error message \"The password that you\u0027ve entered is incorrect\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "abu@gmail.com",
        "abu@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate facebook login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Reg"
    },
    {
      "name": "@TC001"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_on_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"abu@gmail.com\" and \"abu@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_on_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get error message \"The password that you\u0027ve entered is incorrect\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_get_error_message(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Verify Login Error Message expected:\u003c...entered is incorrect[]\u003e but was:\u003c...entered is incorrect[. Forgotten password?]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.stepdef.StepDefinition.user_get_error_message(StepDefinition.java:36)\r\n\tat ✽.User get error message \"The password that you\u0027ve entered is incorrect\"(src/test/resources/Features/TC_01FacebookLogin.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/TC_02FacebookSignUp.feature");
formatter.feature({
  "name": "Verify Facebook Signup Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SignUp"
    }
  ]
});
formatter.scenario({
  "name": "Validate facebook singup page with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SignUp"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    },
    {
      "name": "@TC002"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_on_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on createNew Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_click_on_createNew_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters firstName and lastName",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enters_firstName_and_lastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on signup Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Click_on_signup_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});