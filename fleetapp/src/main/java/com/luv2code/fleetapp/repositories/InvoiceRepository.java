package com.luv2code.fleetapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.luv2code.fleetapp.models.Invoice;


@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Integer> {

}
