package seleniumProject;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

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
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--headless");
		options.addArguments("--lang=en");
		options.addArguments("--window-size=1920,1080");
		WebDriver driver = new ChromeDriver(options);
		driver.get("http://www.facebook.com");
		//driver.manage().window().maximize();
		return driver;
	}
}
