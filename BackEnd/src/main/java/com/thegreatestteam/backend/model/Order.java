package com.thegreatestteam.backend.model;

import com.mongodb.lang.NonNull;
import org.springframework.data.annotation.Id;

import java.util.HashMap;

public class Order {
    @Id
    private String id;

    @NonNull
    private Integer tableNumber;
    @NonNull
    private String phoneNumer;

    private HashMap<String,Integer> cart;


    public Order(String id, @NonNull Integer tableNumber, @NonNull String phoneNumer, HashMap<String, Integer> cart) {
        this.id = id;
        this.tableNumber = tableNumber;
        this.phoneNumer = phoneNumer;
        this.cart = cart;
    }
}
