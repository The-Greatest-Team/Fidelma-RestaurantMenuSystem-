package com.thegreatestteam.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Ingredient")
public class Ingredient {
    //Quantity in grams
    private Double quantity;
//    private String type;
    @Id
    private String id;
    private String name;
    private Double price;
    public Ingredient(String name, double price, Double quantity ) {
        this.quantity = quantity;
        this.price = price;
        this.name = name;
    }

//    public String getType() {
//        return type;
//    }
//
//    public void setType(String type) {
//        this.type = type;
//    }
//
    public Double getQuantity() {
        return quantity;
    }


    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }
}
