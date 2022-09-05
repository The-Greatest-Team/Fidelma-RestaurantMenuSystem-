package com.thegreatestteam.backend.controller;

import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.repository.IngredientRepository;
import com.thegreatestteam.backend.repository.StaffRepository;
import com.thegreatestteam.backend.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class IngredientController {
    private final IngredientService ingredientService;


    @Autowired
    public IngredientController(IngredientService ingredientService){
        this.ingredientService = ingredientService;
    }

    @GetMapping("/staff/ingredient")
    public List<Ingredient> getIngredient(){
        return ingredientService.getAllIngredient();
    }

    // Create ingredients
    @PostMapping("/staff/ingredient")
    public void addIngredients(@RequestBody Ingredient ingredient){
        ingredientService.addIngredient(ingredient);
    }

    //Delete Ingredient: (Need to be tested: previous ingredient doesn't contain id)
    @DeleteMapping("/staff/ingredient")
    public void deleteIngredients(@PathVariable String ingredientId){
        ingredientService.deleteIngredientById(ingredientId);
    }

    @GetMapping("/staff/menu/NewDish")
    public List<Ingredient> addNewDish(){
        return ingredientService.getAllIngredient();
    }


}
