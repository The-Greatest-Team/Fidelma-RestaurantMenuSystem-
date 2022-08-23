package com.thegreatestteam.backend.model;

import org.springframework.data.annotation.Id;

import java.awt.*;

public abstract class Item {
    private String name;
    private double price;

    @Id
    private String id;

    public Item(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }
}
