$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("seleniumProject/test.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "I want to check that when i open the create page it is actually on it",
  "description": "",
  "id": "i-want-to-check-that-when-i-open-the-create-page-it-is-actually-on-it",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 22,
  "name": "test facebook search",
  "description": "",
  "id": "i-want-to-check-that-when-i-open-the-create-page-it-is-actually-on-it;test-facebook-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I entered my \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Create a Page",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should be redirected to the create page",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "i-want-to-check-that-when-i-open-the-create-page-it-is-actually-on-it;test-facebook-search;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname"
      ],
      "line": 28,
      "id": "i-want-to-check-that-when-i-open-the-create-page-it-is-actually-on-it;test-facebook-search;;1"
    },
    {
      "cells": [
        "amr",
        "mahmoud"
      ],
      "line": 29,
      "id": "i-want-to-check-that-when-i-open-the-create-page-it-is-actually-on-it;test-facebook-search;;2"
    },
    {
      "cells": [
        "man",
        "tired"
      ],
      "line": 30,
      "id": "i-want-to-check-that-when-i-open-the-create-page-it-is-actually-on-it;test-facebook-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "test facebook search",
  "description": "",
  "id": "i-want-to-check-that-when-i-open-the-create-page-it-is-actually-on-it;test-facebook-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I entered my \"amr\" and \"mahmoud\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Create a Page",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should be redirected to the create page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "amr",
      "offset": 14
    },
    {
      "val": "mahmoud",
      "offset": 24
    }
  ],
  "location": "TestSteps.i_entered_my_and(String,String)"
});
formatter.result({
  "duration": 21270509625,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.i_click_on_Create_a_Page()"
});
formatter.result({
  "duration": 9522118825,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.i_should_be_redirected_to_the_create_page()"
});
formatter.result({
  "duration": 25945864,
  "status": "passed"
});
formatter.after({
  "duration": 83039306,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "test facebook search",
  "description": "",
  "id": "i-want-to-check-that-when-i-open-the-create-page-it-is-actually-on-it;test-facebook-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I entered my \"man\" and \"tired\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Create a Page",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should be redirected to the create page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "man",
      "offset": 14
    },
    {
      "val": "tired",
      "offset": 24
    }
  ],
  "location": "TestSteps.i_entered_my_and(String,String)"
});
formatter.result({
  "duration": 7590100110,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.i_click_on_Create_a_Page()"
});
formatter.result({
  "duration": 8782406587,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.i_should_be_redirected_to_the_create_page()"
});
formatter.result({
  "duration": 15187253,
  "status": "passed"
});
formatter.after({
  "duration": 82944129,
  "status": "passed"
});
});