package com.a2m.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.a2m.sample.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	
}
