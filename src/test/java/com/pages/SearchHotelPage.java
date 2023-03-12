package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.utilities.Libglobal;

public class SearchHotelPage extends Libglobal {

	public SearchHotelPage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "username_show")
	private WebElement loginSuccessMsg;

	@FindBy(id = "Submit")
	private WebElement btnSearch;

	@FindBy(id = "location_span")
	private WebElement locationErrorMsg;

	public WebElement getBtnSearch() {
		return btnSearch;
	}

	public WebElement getLocationErrorMsg() {
		return locationErrorMsg;
	}

	public WebElement getLoginSuccessMsg() {
		return loginSuccessMsg;
	}

}
