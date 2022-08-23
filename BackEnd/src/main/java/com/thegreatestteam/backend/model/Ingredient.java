package com.thegreatestteam.backend.model;

import org.springframework.data.annotation.Id;

public class Ingredient extends Item{
    //Quantity in grams
    private int quantity;
    public Ingredient(String name, double price, int quantity) {
        super(name, price);
        this.quantity = quantity;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
