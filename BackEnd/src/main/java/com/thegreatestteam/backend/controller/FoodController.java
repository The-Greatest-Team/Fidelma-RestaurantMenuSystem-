package com.thegreatestteam.backend.controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.repository.FoodRepository;
import com.thegreatestteam.backend.service.FoodService;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FoodController {
    private final FoodRepository foodRepository;
    private final FoodService foodService;
    @Autowired
    public FoodController(FoodRepository foodRepository, FoodService foodService){
        this.foodRepository = foodRepository;
        this.foodService = foodService;
    }

    //Get Menu
    @GetMapping("/staff/menu/chicken")
    public String getChickenFood(){
//        System.out.println("Chicken Menu");
//        List<Food> menu = foodRepository.findByType("chicken");
//        Gson gson = new Gson();
//        Food food = new Food("test2",111.2,"chicken",1211,null,null);
//
//
//        String sss = gson.toJson(food);
        return "[{\"foodName\" : \"Big Mac Chicken Burger\" ,\"foodDesc\": \"Huge chicken chop, fresh lettuce.\" ,\"foodJoules\" : \"2880kJ\" ,\"foodPrice\" : \"$13.80\" } , {\"foodName\" : \"Double Drumstick Burger\" ,\"foodDesc\" : \"Two chicken steaks, fresh tomatoes, lettuce.\" ,\"foodJoules\" : \"3150kJ\" ,\"foodPrice\" : \"$16.80\" }]";
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

    @GetMapping("/staff/menu/NewDish")
    public String getAddFoodPage(){
        return "Add Food Page";
    }

}
