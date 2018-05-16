#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: I want to check that when i open the create page it is actually on it 
  
  
  Scenario: test facebook search
  Given I entered my "amr" and "mahmoud"
  When I click on Create a Page
  Then I should be redirected to the create page
#
  #@tag1
  #Scenario: Convert to Celsius from Fahrenheit
    #Given I want to convert 98.6 Fahrenheit to Celsuis
 
    #When I  input the value of Farhrenheit as 98.6 in text field
  #
    #Then It should be converted to Celsuis  as 37 degrees


  #@tag2
  #Scenario Outline: Title of your scenario outline
    #Given I want to write a step with <name>
    #When I check for the <value> in step
    #Then I verify the <status> in step
#
    #Examples: 
      #| name  | value | status  |
      #| name1 |     5 | success |
      #| name2 |     7 | Fail    |
