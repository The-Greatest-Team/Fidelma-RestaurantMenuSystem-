package com.thegreatestteam.backend.model;

import java.util.HashMap;

public class Food extends Item {

    private HashMap<Ingredient, Integer> components;


    public Food(String name, double price ) {
        super(name, price);
    }
}
