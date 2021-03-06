package com.luv2code.fleetapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.luv2code.fleetapp.models.VehicleMake;


@Repository
public interface VehicleMakeRepository extends JpaRepository<VehicleMake, Integer> {

}
