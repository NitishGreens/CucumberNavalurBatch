package com.report;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import com.utilities.Libglobal;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class Reporting extends Libglobal {

	public static void generateJVMReport(String jsonFile) {

		// Mention the report location
		File reportDirectory = new File(getProjectPath() + "\\target\\Report");

		// set Configurations
		Configuration configuration = new Configuration(reportDirectory, "AdactinHotelWebAutomation");

		configuration.addClassifications("platformName", "Windows");
		configuration.addClassifications("platformVersion", "11");
		configuration.addClassifications("buildNo", "AH084");

		List<String> jsonFiles = new ArrayList<String>();
		jsonFiles.add(jsonFile);
		//
		ReportBuilder builder = new ReportBuilder(jsonFiles, configuration);
		builder.generateReports();

	}

}
