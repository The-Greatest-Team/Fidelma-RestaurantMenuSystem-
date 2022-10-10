package com.thegreatestteam.backend.controller;

import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.model.Order;
import com.thegreatestteam.backend.repository.FoodRepository;
import com.thegreatestteam.backend.repository.IngredientRepository;
import com.thegreatestteam.backend.repository.OrderRepository;
import com.thegreatestteam.backend.service.FoodService;
import com.thegreatestteam.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("${frontend.host}")
@RequestMapping("/customer")
public class UserController {
    @Autowired
    private OrderService orderService;
    private FoodService foodService;

    public UserController(OrderService orderService, FoodService foodService) {
        this.orderService = orderService;
        this.foodService = foodService;
    }

    // front end api listed here
    @PostMapping("/orderConfirm")
    public Integer addOrder(@RequestBody Order order){
        System.out.println(order.toString());
        if (orderService.checkQuantity(order) == 0 || orderService.checkQuantity(order) == 1) {
            return orderService.checkQuantity(order);
        }
        orderService.UpdateQuantityForIngredient(order);
        orderService.addOrder(order);
        return orderService.checkQuantity(order);
    }

    @GetMapping("/mainMenu")
    public List<Order> getAllOrders(){
        return orderService.getAllOrder();
    }


    @GetMapping("/foodDes/{id}")
    public Integer computeFoodQuan(@PathVariable String id){
        Food food = foodService.getFoodById(id);
        return foodService.computeFoodQuantity(food);
    }



}
