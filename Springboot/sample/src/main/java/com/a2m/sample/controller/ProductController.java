package com.a2m.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.a2m.sample.model.Product;
import com.a2m.sample.service.ProductService;

@CrossOrigin
@RestController
@RequestMapping(value="api/product")
public class ProductController {
	@Autowired
	ProductService productService;
	
	@GetMapping(value="/get-list-product")
	List<Product> getListProduct() {
		return productService.getListProduct();
	}
	
	@PostMapping(value="/add-product")
	Product addProduct(@RequestBody Product product ) {
		return productService.addProduct(product);
	}
	
	@PutMapping(value="/update-product")
	Product saveProduct(@RequestBody Product product ) {
		return productService.addProduct(product);
	}
	
	@DeleteMapping(value="/delete")
	void deleteProduct(@RequestParam Integer id) {
		productService.deleteProduct(id);
	}
}
