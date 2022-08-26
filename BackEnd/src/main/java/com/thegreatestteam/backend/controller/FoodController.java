package com.thegreatestteam.backend.controller;

import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "https://localhost:3000")
public class FoodController {

    private final FoodRepository foodRepository;
    @Autowired
    public FoodController(FoodRepository foodRepository){
        this.foodRepository = foodRepository;
    }

    //Get Menu
    @GetMapping("/staff/menu")
    public List<Food> getMenuForStaff(){
        List<Food> menu = foodRepository.findAll();
        return menu;
    }

    @PostMapping("/staff/menu")
    public String addFood(@RequestBody Food food){
        foodRepository.save(food);
        return "Add food " + food.getName();
    }
}
