package com.luv2code.fleetapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class InvoiceStatusController {

	@GetMapping("/invoiceStatus")
	public String getInvoiceStatus() {
		
		return "InvoiceStatus";
	}
}
