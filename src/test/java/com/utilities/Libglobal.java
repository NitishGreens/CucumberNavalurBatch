package com.utilities;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.time.Duration;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.Alert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriver.Navigation;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import io.cucumber.datatable.DataTable;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Libglobal {

	public static WebDriver driver;

	public static WebDriver launchBrowser(String browserName) {

		if (browserName.equals("chrome")) {
			ChromeOptions ops = new ChromeOptions();
			ops.addArguments("--remote-allow-origins=*");
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver(ops);
		} else if (browserName.equals("firefox")) {
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
		} else if (browserName.equals("edge")) {
			WebDriverManager.edgedriver().setup();
			driver = new EdgeDriver();
		} else {
			System.out.println("invalid browser");
		}
		return driver;
	}

	public String getValue2DWithHeader(DataTable dataTable, int index, String key) {

		List<Map<String, String>> list = dataTable.asMaps();
		Map<String, String> map = list.get(index);
		String x = map.get(key);
		return x;

	}

	public static String getProjectPath() {
		String property = System.getProperty("user.dir");
		return property;
	}

	public static void implicitWait(long seconds) {
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(seconds));
	}

	// WebDriver:I
	public static void maximizeWindow() {
		driver.manage().window().maximize();
	}

	public static void openAppUrl(String url) {
		driver.get(url);
	}

	public static void closeBrowser() {
		driver.quit();
	}

	public String getPageUrl() {

		String url = driver.getCurrentUrl();
		return url;

	}

	public Navigation navigate() {
		Navigation n = driver.navigate();
		return n;
	}

	// WebElement:I
	public void enterValue(WebElement e, String data) {
		e.sendKeys(data);
	}

	public void elementClick(WebElement element) {
		element.click();
	}

	public String getAttributeValue(WebElement e, String name) {
		String attribute = e.getAttribute(name);
		return attribute;
	}

	public String getElementText(WebElement e) {
		return e.getText();
	}

	public boolean displayed(WebElement element) {
		boolean d = element.isDisplayed();
		return d;
	}

	// Navigation:I

	public void refreshPage() {
		navigate().refresh();
	}

	// Alert:I
	public Alert switchToAlert() {
		Alert al = driver.switchTo().alert();
		return al;
	}

	public void acceptAlert() {
		switchToAlert().accept();
	}

	public void dismissAlert() {
		switchToAlert().dismiss();
	}

	// Actions:C
	public void dragAndDrop(WebElement source, WebElement target) {
		Actions actions = new Actions(driver);
		actions.dragAndDrop(source, target).perform();
	}

	// Select:C
	public void selectOptionByText(WebElement element, String text) {
		Select s = new Select(element);
		s.selectByVisibleText(text);
	}

	public String getDataFromDataTable(DataTable d, int index, String key) {
		List<Map<String, String>> list = d.asMaps();
		return list.get(index).get(key);
	}

	public void pressEnter() throws AWTException {
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
	}

	public byte[] takeScreenshot() {
		TakesScreenshot tk = (TakesScreenshot) driver;
		byte[] bs = tk.getScreenshotAs(OutputType.BYTES);
		return bs;
	}

	public void deleteCookies() {
		driver.manage().deleteAllCookies();
	}

}
