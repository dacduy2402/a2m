package com.a2m.sample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.a2m.sample.model.Product;
import com.a2m.sample.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository productRepository;
	
	public Product addProduct(Product product) {
		return productRepository.save(product);
	}
	
	public List<Product> getListProduct() {
		return productRepository.findAll();
	}
	
	public void deleteProduct(Integer id) {
		productRepository.deleteById(id);
	}
}
