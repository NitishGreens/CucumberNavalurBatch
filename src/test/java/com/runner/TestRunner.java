package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.report.Reporting;
import com.utilities.Libglobal;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Features", glue = "com.stepdef", dryRun = false, snippets = SnippetType.CAMELCASE, monochrome = true, plugin = {
		"pretty", "junit:target\\Report\\sample.xml", "html:target\\Report", "json:target\\Report\\output.json",
		"rerun:src\\test\\resources\\FailedSteps\\failed.txt" })
public class TestRunner extends Libglobal {

	@AfterClass
	public static void afterClass() {
		Reporting.generateJVMReport(getProjectPath() + "\\target\\Report\\output.json");
	}

}
