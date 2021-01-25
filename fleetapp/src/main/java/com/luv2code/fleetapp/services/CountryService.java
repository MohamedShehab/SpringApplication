package com.luv2code.fleetapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.luv2code.fleetapp.models.Country;
import com.luv2code.fleetapp.repositories.CountryRepository;

@Service
public class CountryService {

	@Autowired
	private CountryRepository countryRepository;

	// Get All Countrys
	public List<Country> getAllCountries() {
		return countryRepository.findAll();
	}

	// Update Country
	public void save(Country country) {
		countryRepository.save(country);
	}

	// Get Country By Id
	public Optional<Country> findById(int id) {
		return countryRepository.findById(id);
	}
	
	
	// Delete Country
		public void delete(int id) {
			countryRepository.deleteById(id);
		}

}
