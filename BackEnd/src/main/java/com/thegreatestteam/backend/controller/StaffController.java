package com.thegreatestteam.backend.controller;


import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.model.Item;
import com.thegreatestteam.backend.model.Order;
import com.thegreatestteam.backend.model.Staff;
import com.thegreatestteam.backend.repository.IngredientRepository;
import com.thegreatestteam.backend.repository.StaffRepository;
import com.thegreatestteam.backend.service.IngredientService;
import com.thegreatestteam.backend.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("${frontend.host.heroku}")

@RequestMapping("/staff")
public class StaffController {
    private final StaffService staffService;

    private final IngredientService ingredientService;

    @Autowired
    public StaffController(StaffService staffService, IngredientService ingredientService){
        this.staffService = staffService;
        this.ingredientService = ingredientService;
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


    // edit menu


}
