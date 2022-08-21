package com.thegreatestteam.backend.controller;


import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/staff")
public class StaffController {

    private final StaffRepository staffRepository;

    @Autowired
    public StaffController(StaffRepository staffRepository){
        this.staffRepository = staffRepository;
    }
    // Staff dashboard
    @GetMapping
    public List<Ingredient> getDashboard(){
        return staffRepository.getAllIngredient();
    }

    // Create ingradient



    // Manage ingradient



    // Staff Profile



    // Edit profile




    // Order summary


    // edit menu
}
