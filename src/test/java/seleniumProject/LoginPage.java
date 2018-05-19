package seleniumProject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class LoginPage {
	WebDriver driver;
	
	String firstname = "//input[contains(@class, '_2ph-') and contains(@name, 'firstname')]";
	String lastname =  "//input[contains(@class, '_2ph-') and contains(@name, 'lastname')]";
	String birthday = "//select[contains(@name, 'birthday_day')]";
	String birthmonth = "//select[contains(@name, 'birthday_month')]";
	String birthyear = "//select[contains(@name, 'birthday_year')]";
	String malegender = "//span[contains(@class, '_5k_2')][2]/input";
	String opencreateapage = "//a[contains(text(), 'Create a Page')]";
	String openPeoplePage = "//a[contains(text(), 'People')]";
	
	public LoginPage(WebDriver webDriver) {
		driver=webDriver;
	}
	
	
	public void enterFirstname(String firstName) {
		driver.findElement(By.xpath(firstname)).sendKeys(firstName);
	}
	
	public void enterLastname(String lastName) {
		driver.findElement(By.xpath(lastname)).sendKeys(lastName);
	}
	
	public void enterBirthday(int day, int month, String year) {
		Select birthDay=new Select(driver.findElement(By.xpath(birthday)));
		birthDay.selectByIndex(day);
		Select birthMonth=new Select(driver.findElement(By.xpath(birthmonth)));
		birthMonth.selectByIndex(month);
		Select birthYear=new Select(driver.findElement(By.xpath(birthyear)));
		birthYear.selectByValue(year);
	}
		
	public void enterMaleGender() {
		driver.findElement(By.xpath(malegender)).click();
	}
	
	public void openCreateaPage() {
		driver.findElement(By.xpath(opencreateapage)).click();
	}
	
	public void openPeoplePage() {
		driver.findElement(By.xpath(openPeoplePage)).click();
	}
		
	}


