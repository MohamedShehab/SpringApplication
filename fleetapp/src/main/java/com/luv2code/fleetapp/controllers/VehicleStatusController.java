package com.luv2code.fleetapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class VehicleStatusController {

	@GetMapping("/vehicleStatus")
	public String getVehicleStatus() {
		
		return "VehicleStatus";
	}
}
