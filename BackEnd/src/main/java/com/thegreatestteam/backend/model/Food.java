package com.thegreatestteam.backend.model;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.annotation.Generated;
import java.awt.*;
import java.io.File;
import java.util.HashMap;
import java.util.Map;

@Document("Food")
public class Food extends Item {

    @Id
    private String id;
    private Map<String, Integer> components;

    private String type;
    private Binary image;

    private String description;
    private int kiloJoule;

    public Food(String name, double price , String type, int kiloJoule, Map<String, Integer> components,Binary image, String description){
        super(name, price);
        this.type = type;
        this.kiloJoule = kiloJoule;
        this.components = components;
        this.image = image;
        this.description = description;
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

    public Binary getImage() {
        return image;
    }

    public void setImage(Binary image) {
        this.image = image;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

//    public String getId() {
//        return id;
//    }
}

