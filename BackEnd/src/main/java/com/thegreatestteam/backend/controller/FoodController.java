package com.thegreatestteam.backend.controller;

import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.management.Query;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FoodController {
    private final FoodRepository foodRepository;
    @Autowired
    public FoodController(FoodRepository foodRepository){
        this.foodRepository = foodRepository;
    }

    //Get Menu
    @GetMapping("/staff/menu/chicken")
    public List<Food> getChickenFood(){
        System.out.println("Chicken Menu");
        List<Food> menu = foodRepository.findByType("chicken");
        return menu;
    }

    @GetMapping("/staff/menu/beef")
    public List<Food> getBeefFood(){
        System.out.println("Beef Menu");
        List<Food> menu = foodRepository.findByType("beef");
        return menu;
    }

    @GetMapping("/staff/menu/side")
    public List<Food> getSideFood(){
        System.out.println("Side Menu");
        List<Food> menu = foodRepository.findByType("side");
        return menu;
    }

    @GetMapping("/staff/menu/chip")
    public List<Food> getChipFood(){
        System.out.println("Chip Menu");
        List<Food> menu = foodRepository.findByType("chip");
        return menu;
    }


    @PostMapping("/staff/menu")
    public String addFood(@RequestBody Food food){
        System.out.println(food.getComponents());
        foodRepository.save(food);
        return "Add food " + food.getName();
    }

}
