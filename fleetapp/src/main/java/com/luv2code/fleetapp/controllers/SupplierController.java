package com.luv2code.fleetapp.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.luv2code.fleetapp.models.Supplier;
import com.luv2code.fleetapp.services.CountryService;
import com.luv2code.fleetapp.services.StateService;
import com.luv2code.fleetapp.services.SupplierService;

@Controller
public class SupplierController {

	@Autowired private StateService stateService;
	@Autowired private CountryService countryService;	
	@Autowired private SupplierService supplierService;
	
	//Get All Suppliers
	@GetMapping("suppliers")
	public String findAll(Model model){		
		model.addAttribute("countries", countryService.getAllCountries());
		model.addAttribute("states", stateService.findAll());
		model.addAttribute("suppliers", supplierService.findAll());
		return "Suppliers";
	}	
	
	@RequestMapping("suppliers/findById") 
	@ResponseBody
	public Optional<Supplier> findById(Integer id)
	{
		return supplierService.findById(id);
	}
	
	//Add Supplier
	@PostMapping(value="suppliers/addNew")
	public String addNew(Supplier supplier) {
		supplierService.save(supplier);
		return "redirect:/suppliers";
	}	
	
	@RequestMapping(value="suppliers/update", method = {RequestMethod.PUT, RequestMethod.GET})
	public String update(Supplier supplier) {
		supplierService.save(supplier);
		return "redirect:/suppliers";
	}
	
	@RequestMapping(value="suppliers/delete", method = {RequestMethod.DELETE, RequestMethod.GET})	
	public String delete(Integer id) {
		supplierService.delete(id);
		return "redirect:/suppliers";
	}


}
