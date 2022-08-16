package com.thegreatestteam.backend.model;

import java.awt.*;
import java.util.HashMap;

public class Food extends Item {

    private HashMap<Ingradient, Integer> components;


    public Food(String name, double price ) {
        super(name, price);
    }
}
