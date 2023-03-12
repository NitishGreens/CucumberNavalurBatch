package com.stepdef;

import org.junit.After;

import com.utilities.Libglobal;

import cucumber.api.Scenario;
import cucumber.api.java.Before;

public class Hooks extends Libglobal {

	@Before
	public void beforeScenario() {
		System.out.println("@Before.....");
		launchBrowser("edge");
		maximizeWindow();
		openAppUrl("https://adactinhotelapp.com/");
		implicitWait(20);
	}

	@After
	public void afterScenario(Scenario s) {

		deleteCookies();
		closeBrowser();

	}

}
