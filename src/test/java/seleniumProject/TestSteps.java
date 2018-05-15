package seleniumProject;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class TestSteps {

//tests
WebDriver driver = commonTests.createDriver();
LoginPage loginPage = new LoginPage(driver);
CreateaPage createaPage = new CreateaPage(driver);
//Testing
	@Given("^I entered the signup data$")
	public void i_entered_the_signup_data() throws Throwable {
		loginPage.enterFirstname("amr");
		loginPage.enterLastname("Mahmoud");
		loginPage.enterBirthday(4, 1, "1994");
		loginPage.enterMaleGender();
	}

	@When("^I click on create page$")
	public void i_click_on_create_page() throws Throwable {
		loginPage.openCreateaPage();
	}

	@Then("^I should be redirected to the create page$")
	public void i_should_be_redirected_to_the_create_page() throws Throwable {
	createaPage.checkIfCreatePageIsOpen();
		
		driver.quit();
	}


}
