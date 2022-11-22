package com.knf.dev.controllers;

import com.knf.dev.models.Product;
import com.knf.dev.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class ProductController {

    @Autowired
    private ProductRepository repo;

    @CrossOrigin
    @GetMapping("/product_list")
    public List<Product> getProducts(){
        return repo.findAll();
    }
}
