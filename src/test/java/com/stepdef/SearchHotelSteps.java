package com.stepdef;

import org.junit.Assert;

import com.pages.SearchHotelPage;
import com.utilities.Libglobal;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchHotelSteps extends Libglobal {

	@When("User click on Search Button Without Selecting any fields")
	public void userClickOnSearchButtonWithoutSelectingAnyFields() {
		SearchHotelPage page = new SearchHotelPage();
		elementClick(page.getBtnSearch());

	}

	@Then("User verify location error message {string}")
	public void userVerifyLocationErrorMessage(String expectedLocationErrorMessage) {
		SearchHotelPage page = new SearchHotelPage();
		Assert.assertEquals("verify location error message", expectedLocationErrorMessage,
				getElementText(page.getLocationErrorMsg()));
	}

}
