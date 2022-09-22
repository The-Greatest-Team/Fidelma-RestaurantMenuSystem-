package com.thegreatestteam.backend.model;

import com.mongodb.lang.NonNull;
import org.springframework.data.annotation.Id;

import java.util.HashMap;
import java.util.Map;

public class Order {
    @Id
    private String id;

    private String name;
    @NonNull
    private Integer tableNumber;
    @NonNull
    private String phoneNumer;

    private Map<String,Integer> cart;

    public Order(@NonNull Integer tableNumber, @NonNull String phoneNumer, Map<String,Integer> cart) {
        this.tableNumber = tableNumber;
        this.phoneNumer = phoneNumer;
        this.cart = cart;

    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @NonNull
    public Integer getTableNumber() {
        return tableNumber;
    }

    @NonNull
    public String getPhoneNumer() {
        return phoneNumer;
    }


    public Map<String, Integer> getCart() {
        return cart;
    }

    public void setCart(Map<String, Integer> cart) {
        this.cart = cart;
    }
}
