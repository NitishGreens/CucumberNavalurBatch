package com.stepdef;

import java.awt.AWTException;

import org.junit.Assert;

import com.pages.LoginPage;
import com.utilities.Libglobal;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps extends Libglobal {

	@Given("User is on adactin page")
	public void userIsOnAdactinPage() {

	}

	@When("User enters {string} and {string} and Click on Login Button")
	public void userEntersAndAndClickOnLoginButton(String userName, String password) {
		LoginPage loginPage = new LoginPage();
		enterValue(loginPage.getTxtUserName(), userName);
		enterValue(loginPage.getTxtPassword(), password);
		elementClick(loginPage.getBtnLogin());
	}

	@Then("User verify login sucess message {string}")
	public void userVerifyLoginSucessMessage(String expLoginSuccessMessage) {
		System.out.println(expLoginSuccessMessage);
	}

	@Then("User verify login error message {string}")
	public void userVerifyLoginErrorMessage(String expLoginErrorMessage) {
		System.out.println(expLoginErrorMessage);
		Assert.assertTrue(false);
	}

	@When("User enters userName and password and press enter key")
	public void userEntersUserNameAndPasswordAndPressEnterKey(io.cucumber.datatable.DataTable dataTable)
			throws AWTException {
		LoginPage loginPage = new LoginPage();
		enterValue(loginPage.getTxtUserName(), getDataFromDataTable(dataTable, 0, "userName"));
		enterValue(loginPage.getTxtPassword(), getDataFromDataTable(dataTable, 0, "password"));
		pressEnter();

	}
}
