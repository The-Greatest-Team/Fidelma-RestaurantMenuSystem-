package com.thegreatestteam.backend.controller;


import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.model.Order;
import com.thegreatestteam.backend.repository.IngradientRepository;
import com.thegreatestteam.backend.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StaffController {

    private final StaffRepository staffRepository;
    private final IngradientRepository ingradientRepository;

    @Autowired
    public StaffController(StaffRepository staffRepository, IngradientRepository ingradientRepository){
        this.staffRepository = staffRepository;
        this.ingradientRepository = ingradientRepository;
    }


    // Staff dashboard
    @GetMapping("/staff")
    public void getDashboard(){
        System.out.println("Display Staff Dashboard");
        List<Ingredient> ingredients= ingradientRepository.findAll();
        System.out.println("Display all ingredient: "+ ingredients);

    }

    // Create ingredients
    @PostMapping("/staff")
    public void addIngredients(@RequestBody Ingredient ingredient){
        ingradientRepository.save(ingredient);
        System.out.println("Add ingredient with id" + ingredient.getName());
    }


    // Manage ingredients



    // Staff Profile



    // Edit profile




    // Order summary


    // edit menu
}
