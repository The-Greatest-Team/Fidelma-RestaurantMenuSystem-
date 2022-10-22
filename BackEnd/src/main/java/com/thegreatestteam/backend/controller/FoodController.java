package com.thegreatestteam.backend.controller;

import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.model.Image;
import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.service.FoodService;
import com.thegreatestteam.backend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
@CrossOrigin(origins = {"${frontend.host.heroku}", "${frontend.host.local}", "${frontend.host.heroku2}"})
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
    @ResponseStatus(HttpStatus.OK)
    public List<Food> getChickenFood(){
        return foodService.getFood("chicken");
    }

    @GetMapping("/beef")
    @ResponseStatus(HttpStatus.OK)
    public List<Food> getBeefFood(){
        return foodService.getFood("beef");
    }

    @GetMapping("/side")
    @ResponseStatus(HttpStatus.OK)
    public List<Food> getSideFood(){
        return foodService.getFood("side");
    }

    @GetMapping("/chip")
    @ResponseStatus(HttpStatus.OK)
    public List<Food> getChipFood(){
        return foodService.getFood("chip");
    }

    @GetMapping("/newDish")
    @ResponseStatus(HttpStatus.OK)
    public List<Ingredient> getNewDishIngredient(){
        return foodService.getAllIngredient();
    }

    @PostMapping("/newDish")
    @ResponseStatus(HttpStatus.CREATED)
    public Food addNewFood(@RequestBody Food food){
        foodService.addFood(food);
        return food;
    }

    @GetMapping("/edit/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<Ingredient> getEditDish(@PathVariable String id){
        return foodService.getAllIngredient();
    }

    @DeleteMapping("/newDish/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFood(@PathVariable String id){
        foodService.deleteFood(id);
    }

    @PutMapping("/edit/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Food updateDish(@RequestBody Food newFood, @PathVariable String id){
        Food food = foodService.getFoodById(id);
        food.setName(newFood.getName());
        food.setPrice(newFood.getPrice());
        food.setKiloJoule(newFood.getKiloJoule());
        food.setDescription(newFood.getDescription());
        food.setComponents(newFood.getComponents());
        foodService.addFood(food);
        return foodService.getFoodById(id);
    }
    @GetMapping("/testing")
    @ResponseStatus(HttpStatus.OK)
    public List<Food>  testingSoldOut(){
        return foodService.getFood("testing");
    }


    // for editing the dish
    @PostMapping("/dish/imageEdit/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void updateImage(@RequestParam("file") MultipartFile file,@PathVariable String id) throws IOException {
        deleteImage(id);
        addImage(file, id);
    }



    //
    @GetMapping("/editDish/image/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Image getOneImage(@PathVariable String id) throws Exception {
        return imageService.getImageById(id);
    }


    // Image interaction

    @PostMapping("/newDishImage")
    @ResponseStatus(HttpStatus.CREATED)
    public void addImage(@RequestParam("file") MultipartFile file,@RequestParam("id") String id) throws IOException {
        imageService.addImage(file,id);

    }

    @GetMapping("/checkForm/{id}")
    @ResponseStatus(HttpStatus.OK)
    public boolean checkFood(@PathVariable String id){
        return !foodService.checkFood(id);
    }

    @GetMapping("/checkImage/{id}")
    @ResponseStatus(HttpStatus.OK)
    public boolean checkImage(@PathVariable String id){
        Food food = foodService.getFoodById(id);
        if(food.getImage() == null){
            return true;
        }
        return false;
    }



    @DeleteMapping("/deleteImage/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteImage(@PathVariable String id){
        imageService.deleteImage(id);
    }



}
