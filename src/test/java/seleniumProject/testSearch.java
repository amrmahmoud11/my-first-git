package seleniumProject;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import junit.framework.Assert;

public class testSearch {
	public static void main(String[]args) {
		
		WebDriver driver = commonTests.createDriver();
		
		
		LoginPage loginPage = new LoginPage(driver);
		
		loginPage.enterFirstname("amr");
		loginPage.enterLastname("Mahmoud");
		loginPage.enterBirthday(4, 1, "1994");
		loginPage.enterMaleGender();
		
		loginPage.openCreateaPage();
		
		CreateaPage createaPage = new CreateaPage(driver);
		
		createaPage.checkIfCreatePageIsOpen();
		
		driver.quit();
	
	
		

}


	
	
}
