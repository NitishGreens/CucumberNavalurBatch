$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/TC1_Login.feature");
formatter.feature({
  "name": "Verify Adactin Login Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "name": "User enters \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\" and Click on Login Button",
  "keyword": "When "
});
formatter.step({
  "name": "User verify login sucess message \"Hello Nitish123!\"",
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
        "nitish123",
        "Q8PTF9"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.userIsOnAdactinPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Login with valid credentials",
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
      "name": "@Smoke"
    },
    {
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "name": "User enters \"nitish123\" and \"Q8PTF9\" and Click on Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.userEntersAndAndClickOnLoginButton(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify login sucess message \"Hello Nitish123!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userVerifyLoginSucessMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    },
    {
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "name": "User enters \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\" and Click on Login Button",
  "keyword": "When "
});
formatter.step({
  "name": "User verify login error message \"Invalid Login details or Your Password might have expired. \"",
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
        "nitish123",
        "hello@123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.userIsOnAdactinPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    },
    {
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "name": "User enters \"nitish123\" and \"hello@123\" and Click on Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.userEntersAndAndClickOnLoginButton(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify login error message \"Invalid Login details or Your Password might have expired. \"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userVerifyLoginErrorMessage(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.stepdef.LoginSteps.userVerifyLoginErrorMessage(LoginSteps.java:37)\r\n\tat ✽.User verify login error message \"Invalid Login details or Your Password might have expired. \"(src/test/resources/Features/TC1_Login.feature:19)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.userIsOnAdactinPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify login page using Enter key with valid credentials",
  "description": "",
  "keyword": "Scenario",
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
      "name": "@TC3"
    }
  ]
});
formatter.step({
  "name": "User enters userName and password and press enter key",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "nitish123",
        "Q8PTF9"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.userEntersUserNameAndPasswordAndPressEnterKey(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify login sucess message \"Hello nitish123!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userVerifyLoginSucessMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});