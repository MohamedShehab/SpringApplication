package com.luv2code.fleetapp.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.luv2code.fleetapp.models.Location;



@Repository
public interface LocationRepository extends CrudRepository<Location, Integer> {

}
