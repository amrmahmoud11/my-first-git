package seleniumProject;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class commonTests {

	public static boolean checkELementExists(WebDriver driver,String xpath ) {
		try {
		driver.findElement(By.xpath(xpath));}
		catch (NoSuchElementException e) {
			return false;
		}
		
		return true;
	}
	
	public static WebDriver createDriver() {
		System.setProperty("webdriver.chrome.driver", "/Users/amrmahmoud/Downloads/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.get("http://www.facebook.com");
		driver.manage().window().maximize();
		return driver;
	}
}
