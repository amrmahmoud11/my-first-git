package seleniumProject;

import org.openqa.selenium.WebDriver;

import junit.framework.Assert;

public class CreateaPage {
	WebDriver driver;
	String getstarted = "//div[contains(@class, '_43rm') and contains(text(), 'Get Started')]";
	
	public CreateaPage(WebDriver webDriver) {
		driver=webDriver;
	}
	 
	
	public void checkIfCreatePageIsOpen() {
		Assert.assertTrue("Expected to be on Create Page",commonTests.checkELementExists(driver,getstarted));
	}
}
