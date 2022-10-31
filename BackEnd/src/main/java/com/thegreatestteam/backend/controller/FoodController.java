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
@SuppressWarnings("ALL")
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

    /**
     * get all food with type chicken from the database
     * @return List containing all chicken food
     * @since 1.0
     * @throws NullPointerException if foodService.getFood("chicken") return null
     */
    @GetMapping("/chicken")
    @ResponseStatus(HttpStatus.OK)
    public List<Food> getChickenFood(){
        return foodService.getFood("chicken");
    }

    /**
     * get all food with type beef from the database
     * @return List containing all beef food
     * @since 1.0
     * @throws NullPointerException if foodService.getFood("beef") return null
     */
    @GetMapping("/beef")
    @ResponseStatus(HttpStatus.OK)
    public List<Food> getBeefFood(){
        return foodService.getFood("beef");
    }


    /**
     * get all food with type side from the database
     * @return List containing all side food
     * @since 1.0
     * @throws NullPointerException if foodService.getFood("side") return null
     */
    @GetMapping("/side")
    @ResponseStatus(HttpStatus.OK)
    public List<Food> getSideFood(){
        return foodService.getFood("side");
    }


    /**
     * get all food with type chip from the database
     * @return List containing all chip food
     * @since 1.0
     * @throws NullPointerException if foodService.getFood("chip") return null
     */
    @GetMapping("/chip")
    @ResponseStatus(HttpStatus.OK)
    public List<Food> getChipFood(){
        return foodService.getFood("chip");
    }

    /**
     * get all ingrdients from the database
     * @return List containing all ingredients
     * @since 1.0
     * @throws NullPointerException if foodService.getAllIngredient() return null
     */
    @GetMapping("/newDish")
    @ResponseStatus(HttpStatus.OK)
    public List<Ingredient> getNewDishIngredient(){
        return foodService.getAllIngredient();
    }

    /**
     * Add new Food to the database
     * @param food
     * @return The food just added to the database
     * @since 1.0
     */
    @PostMapping("/newDish")
    @ResponseStatus(HttpStatus.CREATED)
    public Food addNewFood(@RequestBody Food food){
        foodService.addFood(food);
        return food;
    }

    /**
     * HTTP GET request for editting food
     * @param id
     * @return All of the ingredients
     * @since 1.0
     */
    @GetMapping("/edit/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<Ingredient> getEditDish(@PathVariable String id){
        return foodService.getAllIngredient();
    }

    /**
     * Delete the food selected
     * @param id
     * @since 1.0
     */
    @DeleteMapping("/newDish/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFood(@PathVariable String id){
        foodService.deleteFood(id);
    }

    /**
     * PUT method to update the sellected dish
     * @param id
     * @return The updated food
     * @since 1.0
     */
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

    /**
     * GET method for Unit test
     * @return all food with type "testing"
     * @since 1.0
     */
    @GetMapping("/testing")
    @ResponseStatus(HttpStatus.OK)
    public List<Food>  testingSoldOut(){
        return foodService.getFood("testing");
    }

    /**
     *
     * @param
     * @since 1.0
     */
    // for editing the dish
    @PostMapping("/dish/imageEdit/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void updateImage(@RequestParam("file") MultipartFile file,@PathVariable String id) throws IOException {
        deleteImage(id);
        addImage(file, id);
    }

    /**
     *
     * @param
     * @since 1.0
     */
    @GetMapping("/editDish/image/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Image getOneImage(@PathVariable String id) throws Exception {
        return imageService.getImageById(id);
    }


    /**
     *
     * @param
     * @since 1.0
     */
    @PostMapping("/newDishImage")
    @ResponseStatus(HttpStatus.CREATED)
    public void addImage(@RequestParam("file") MultipartFile file,@RequestParam("id") String id) throws IOException {
        imageService.addImage(file,id);

    }

    /**
     *
     * @param
     * @since 1.0
     */
    @GetMapping("/checkForm/{id}")
    @ResponseStatus(HttpStatus.OK)
    public boolean checkFood(@PathVariable String id){
        return !foodService.checkFood(id);
    }

    /**
     *
     * @param
     * @since 1.0
     */
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
