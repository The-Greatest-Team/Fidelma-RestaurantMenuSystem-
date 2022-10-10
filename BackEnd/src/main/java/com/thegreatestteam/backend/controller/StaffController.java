package com.thegreatestteam.backend.controller;


import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.model.Item;
import com.thegreatestteam.backend.model.Order;
import com.thegreatestteam.backend.model.Staff;
import com.thegreatestteam.backend.repository.IngredientRepository;
import com.thegreatestteam.backend.repository.StaffRepository;
import com.thegreatestteam.backend.service.IngredientService;
import com.thegreatestteam.backend.service.OrderService;
import com.thegreatestteam.backend.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("${frontend.host}")

@RequestMapping("/staff")
public class StaffController {
    private final StaffService staffService;

    private final IngredientService ingredientService;
    private final OrderService orderService;

    @Autowired
    public StaffController(StaffService staffService, IngredientService ingredientService, OrderService orderService){
        this.staffService = staffService;
        this.ingredientService = ingredientService;
        this.orderService = orderService;
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


    // edit menu


}
