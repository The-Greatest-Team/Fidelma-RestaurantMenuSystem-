package com.thegreatestteam.backend.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.HashMap;

@Document("Food")
public class Food extends Item {

//    private HashMap<Ingredient, Integer> components = new HashMap<>();
    private String type;
    private int kiloJoule;

    public Food(String name, double price , String type, int kiloJoule) {
        super(name, price);
        this.type = type;
        this.kiloJoule = kiloJoule;
//        HashMap<Ingredient, Integer> components
//        this.components = components;
    }

    public int getKiloJoule() {
        return kiloJoule;
    }

    public void setKiloJoule(int kiloJoule) {
        this.kiloJoule = kiloJoule;
    }

//    public HashMap<Ingredient, Integer> getComponents() {
//        return components;
//    }

//    public void setComponents(HashMap<Ingredient, Integer> components) {
//        this.components = components;
//    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}

