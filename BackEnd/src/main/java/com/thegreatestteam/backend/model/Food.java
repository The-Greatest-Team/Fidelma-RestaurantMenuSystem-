package com.thegreatestteam.backend.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.awt.*;
import java.io.File;
import java.util.HashMap;
import java.util.Map;

@Document("Food")
public class Food extends Item {

    private Map<String, Integer> components;
    private String type;
    private Image imgae;
    private File image;
    private int kiloJoule;

    public Food(String name, double price , String type, int kiloJoule, Map<String, Integer> components) {
        super(name, price);
        this.type = type;
        this.kiloJoule = kiloJoule;
        this.components = components;
    }

    public int getKiloJoule() {
        return kiloJoule;
    }

    public void setKiloJoule(int kiloJoule) {
        this.kiloJoule = kiloJoule;
    }

    public Map<String, Integer> getComponents() {
        return components;
    }

    public void setComponents(Map<String, Integer> components) {
        this.components = components;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}

