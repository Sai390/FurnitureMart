package com.knf.dev.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity(name="product_table")
@Table
public class Product {

    @Id
    private long id;

    private String name;
    private int price;
    private String image;
}
