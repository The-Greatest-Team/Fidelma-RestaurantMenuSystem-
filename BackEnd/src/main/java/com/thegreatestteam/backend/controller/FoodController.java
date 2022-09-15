package com.thegreatestteam.backend.controller;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.model.Image;
import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.repository.FoodRepository;
import com.thegreatestteam.backend.repository.IngredientRepository;
import com.thegreatestteam.backend.service.FoodService;
import com.thegreatestteam.backend.service.ImageService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
@CrossOrigin("${frontend.host}")
@RestController
@RequestMapping("/staff/menu")
public class FoodController {
    private final FoodService foodService;
    private final ImageService imageService;

    @Autowired
    public FoodController(FoodService foodService, ImageService imageService){
        this.foodService = foodService;
        this.imageService = imageService;
    }

    //Get Menu
    @GetMapping("/chicken")
    public List<Food> getChickenFood(){
        return foodService.getFood("chicken");
    }

    @GetMapping("/beef")
    public List<Food> getBeefFood(){
        return foodService.getFood("beef");
    }

    @GetMapping("/side")
    public List<Food> getSideFood(){
        return foodService.getFood("side");
    }

    @GetMapping("/chip")
    public List<Food> getChipFood(){
        return foodService.getFood("chip");
    }

    @GetMapping("/newDish")
    public List<Ingredient> getNewDishIngredient(){
        return foodService.getAllIngredient();
    }

    @PostMapping("/newDish")
    public void addNewFood(@RequestBody Food food){
        foodService.addFood(food);
    }


    @GetMapping("/edit/{id}")
    public List<Ingredient> getEditDish(){
        return foodService.getAllIngredient();
    }


    @PutMapping("/edit/{id}")
    public void updateDish(@RequestBody Food newFood, @PathVariable String id){
        Food food = foodService.getFoodById(id);
        food.setName(newFood.getName());
        food.setPrice(newFood.getPrice());
        food.setKiloJoule(newFood.getKiloJoule());
        food.setDescription(newFood.getDescription());
        food.setComponents(newFood.getComponents());
        foodService.addFood(food);
    }

    @DeleteMapping("/newDish/{id}")
    public void deleteFood(@PathVariable String id){
        foodService.deleteFood(id);
    }


    // Image interaction

    @PostMapping("/newDishImage")
    public void addImage(@RequestParam("file") MultipartFile file,@RequestParam("id") Object food) throws IOException {
        imageService.addImage(file);
        System.out.println(food.);
    }

    @GetMapping()
    public Image getImage(Model model, @PathVariable String id) throws Exception {
        Image image = imageService.getImageById(id);

        model.addAttribute("image", Base64.getEncoder().encodeToString(image.getImage().getData()));
        return image;
    }

}
