package com.thegreatestteam.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Ingredient")
public class Ingredient extends Item{
    //Quantity in grams
    private Double quantity;
//    private String type;

    public Ingredient(String name, double price, Double quantity ) {
        super(name, price);
        this.quantity = quantity;
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

}
