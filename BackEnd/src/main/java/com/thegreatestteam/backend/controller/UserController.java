package com.thegreatestteam.backend.controller;

import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.repository.FoodRepository;
import com.thegreatestteam.backend.repository.IngredientRepository;
import com.thegreatestteam.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("${frontend.host}")
@RequestMapping("/user")
public class UserController {
    @Autowired
    private FoodRepository foodRepository;

    @Autowired
    private IngredientRepository ingredientRepository;

    @Autowired
    private OrderRepository orderRepository;

    public UserController(FoodRepository foodRepository, IngredientRepository ingredientRepository, OrderRepository orderRepository) {
        this.foodRepository = foodRepository;
        this.ingredientRepository = ingredientRepository;
        this.orderRepository = orderRepository;
    }

    // front end api listed here
}
