package com.thegreatestteam.backend.controller;


import com.thegreatestteam.backend.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/staff")
public class StaffController {

    private final StaffService staffService;

    @Autowired
    public StaffController(StaffService staffService){
        this.staffService = staffService;
    }
    // Staff dashboard
    @GetMapping
    public String getDashboard(){
        return staffService.getIngredient();
    }

    // Create ingradient



    // Manage ingradient



    // Staff Profile



    // Edit profile




    // Order summary


    // edit menu
}
