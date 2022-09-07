package com.thegreatestteam.backend.controller;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.repository.FoodRepository;
import com.thegreatestteam.backend.repository.IngredientRepository;
import com.thegreatestteam.backend.service.FoodService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FoodController {
    private final FoodService foodService;

    @Autowired
    public FoodController(FoodService foodService){
        this.foodService = foodService;
    }

    //Get Menu
    @GetMapping("/staff/menu/chicken")
    public String getChickenFood(){
        return foodService.getFood("chicken");
    }



    @GetMapping("/staff/menu/beef")
    public String getBeefFood(){
        return foodService.getFood("beef");
    }

    @GetMapping("/staff/menu/side")
    public String getSideFood(){
        return foodService.getFood("side");
    }

    @GetMapping("/staff/menu/chip")
    public String getChipFood(){
        return foodService.getFood("chip");
    }

    @GetMapping("/staff/menu/newDish")
    public List<Ingredient> getNewDishIngredient(){
        return foodService.getAllIngredient();
    }

    @PostMapping("/staff/menu/newDish")
    public void addNewFood(@RequestBody Food food){
        foodService.addFood(food);
    }

    @GetMapping("/staff/menu/edit/{id}")
    public Food getEditDish(@PathVariable String id){
        return foodService.getFoodById(id);
    }

    @PutMapping("/staff/menu/edit/{id}")
    public void updateDish(@RequestBody Food newFood, @PathVariable String id){
        Food food = foodService.getFoodById(id);
        food.setComponents(newFood.getComponents());
        foodService.addFood(food);
    }

    @DeleteMapping("/staff/menu/newDish/{id}")
    public void deleteFood(@PathVariable String id){
        foodService.deleteFood(id);
    }

}
