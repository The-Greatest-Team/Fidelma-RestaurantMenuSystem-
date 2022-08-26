package com.thegreatestteam.backend.controller;

import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.repository.IngredientRepository;
import com.thegreatestteam.backend.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "https://localhost:3000")
public class IngredientController {
    private final IngredientRepository ingredientRepository;

    @Autowired
    public IngredientController(IngredientRepository ingredientRepository){
        this.ingredientRepository = ingredientRepository;
    }

    @GetMapping("/staff/ingredient")
    public List<Ingredient> getIngredient(){
        List<Ingredient> ingredients= ingredientRepository.findAll();
        return ingredients;
    }

    // Create ingredients
    @PostMapping("/staff/ingredient")
    public String addIngredients(@RequestBody Ingredient ingredient){
        ingredientRepository.save(ingredient);
        return "Add ingredient with id" + ingredient.getName();
    }

    //Delete Ingredient: (Need to be tested: previous ingredient doesn't contain id)
    @DeleteMapping("/staff/ingredient")
    public String deleteIngredients(@PathVariable String ingredientId){
        ingredientRepository.deleteById(Integer.valueOf(ingredientId));
        return "Delete ingredient with id" + ingredientId;
    }
}
