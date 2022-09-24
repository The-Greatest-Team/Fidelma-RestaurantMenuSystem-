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
    private String phoneNumber;

    private Map<String,Integer> cart;

    public Order(@NonNull Integer tableNumber, @NonNull String phoneNumber, Map<String,Integer> cart) {
        this.tableNumber = tableNumber;
        this.phoneNumber= phoneNumber;
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
    public String getPhoneNumber() {
        return phoneNumber;
    }


    public Map<String, Integer> getCart() {
        return cart;
    }

    public void setCart(Map<String, Integer> cart) {
        this.cart = cart;
    }
}
