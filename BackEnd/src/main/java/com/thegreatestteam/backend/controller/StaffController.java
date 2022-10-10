package com.thegreatestteam.backend.controller;


import com.thegreatestteam.backend.model.*;
import com.thegreatestteam.backend.repository.IngredientRepository;
import com.thegreatestteam.backend.repository.StaffRepository;
import com.thegreatestteam.backend.service.FoodService;
import com.thegreatestteam.backend.service.IngredientService;
import com.thegreatestteam.backend.service.OrderService;
import com.thegreatestteam.backend.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"${frontend.host.heroku}", "${frontend.host.local}", "${frontend.host.heroku2}"})

@RequestMapping("/staff")
public class StaffController {
    private final StaffService staffService;

    private final IngredientService ingredientService;
    private final FoodService foodService;
    private final OrderService orderService;

    @Autowired
    public StaffController(StaffService staffService, IngredientService ingredientService, OrderService orderService, FoodService foodService){
        this.staffService = staffService;
        this.ingredientService = ingredientService;
        this.orderService = orderService;
        this.foodService =foodService;
    }

    // Staff dashboard
    @GetMapping("/dashboard")
    public String getDashboard(){
        return "Getting Dashboard page";
    }

    // Staff Profile
    @GetMapping("/{staffId}/profile")
    public String getProfile(@PathVariable String staffId){
        return "getting profile page";
    }
    // Add staff (one time operation)
    @PostMapping("/addStaff")
    public void addStaff(@RequestBody Staff staff){
        staffService.addStaff(staff);
    }


    // Staff login page




    // get raw material

    @GetMapping("/dashboard/ingredients")
    public List<Ingredient> displayAllIngredients(){
        return ingredientService.getAllIngredient();
    }
    // Edit profile



    // Order summary
    @GetMapping("/allOrders")
    public List<Order> displayAllOrder(){
        return orderService.getAllOrder();
    }


    @PostMapping("/completeOrder/{id}")
    public void completeOrder(@PathVariable String id){
        Order order = orderService.getOrderById(id);
        order.setOrderStatus(OrderStatus.COMPLETED);
        orderService.saveOrder(order);
    }

    @DeleteMapping("/deleteOrder/{id}")
    public void deleteOrder(@PathVariable String id){
        orderService.deleteById(id);
    }


    // edit menu


}
