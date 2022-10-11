package com.thegreatestteam.backend.controller;

import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"${frontend.host.heroku}", "${frontend.host.local}", "${frontend.host.heroku2}"})
@RestController
@RequestMapping("/staff")
public class IngredientController {
    private final IngredientService ingredientService;


    @Autowired
    public IngredientController(IngredientService ingredientService){
        this.ingredientService = ingredientService;
    }

    @GetMapping("/ingredient")
    public HashMap<List<Ingredient>,List<Food>> getIngredient(){
        HashMap<List<Ingredient>,List<Food>> allFoodAndIngredient = new HashMap<List<Ingredient>,List<Food>>();
        List<Food> allFood = ingredientService.getAllFood();
        List<Ingredient> allIngredient = ingredientService.getAllIngredient();
        allFoodAndIngredient.put(allIngredient, allFood);
        return allFoodAndIngredient;
    }

    @GetMapping("/ingredient/{ingredientId}")
    public Ingredient getIngredientById(@PathVariable String ingredientId){
        return ingredientService.findIngredientById(ingredientId);
    }

    // Create ingredients
    @PostMapping("/ingredient")
    @ResponseStatus(HttpStatus.CREATED)
    public Ingredient addIngredient(@RequestBody Ingredient ingredient){
        ingredientService.addIngredient(ingredient);
        return ingredient;
    }

    //Delete Ingredient: (Need to be tested: previous ingredient doesn't contain id)
    @DeleteMapping("/ingredient/{ingredientId}")
    public void deleteIngredient(@PathVariable String ingredientId,@RequestBody List<Food> food){
        Ingredient currentIngredient = ingredientService.findIngredientById(ingredientId);
        for(Food currentFood: food){
            if(currentFood.getComponents().keySet().equals(currentIngredient.getName())&& currentFood.isCrush() == false){
                currentFood.setCrush(true);
            }
        }
        ingredientService.deleteIngredientById(ingredientId);
    }

    @PutMapping("/ingredient/{ingredientId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Ingredient UpdateIngredient(@RequestBody Ingredient ingredient, @PathVariable String ingredientId){
        Ingredient currentIngredient = ingredientService.findIngredientById(ingredientId);
        currentIngredient.setName(ingredient.getName());
        currentIngredient.setQuantity(ingredient.getQuantity());
        currentIngredient.setPrice(ingredient.getPrice());
        ingredientService.addIngredient(currentIngredient);
        return ingredientService.findIngredientById(ingredientId);
    }



}
