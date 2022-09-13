package com.thegreatestteam.backend.controller;

import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.repository.IngredientRepository;
import com.thegreatestteam.backend.repository.StaffRepository;
import com.thegreatestteam.backend.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("${frontend.host}")
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
    public void addIngredient(@RequestBody Ingredient ingredient){
        ingredientService.addIngredient(ingredient);
    }

    //Delete Ingredient: (Need to be tested: previous ingredient doesn't contain id)
    @DeleteMapping("/staff/ingredient/{ingredientId}")
    public void deleteIngredient(@PathVariable String ingredientId){
        ingredientService.deleteIngredientById(ingredientId);
    }

    @PutMapping("/staff/ingredient/{name}")
    public void UpdateIngredient(@RequestBody Ingredient ingredient, @PathVariable String name){
        Ingredient currentIngredient = ingredientService.findIngredientByName(name);
        currentIngredient.setName(ingredient.getName());
        currentIngredient.setQuantity(ingredient.getQuantity());
        ingredientService.addIngredient(currentIngredient);
    }

    @GetMapping("/staff/menu/NewDish")
    public List<Ingredient> addNewDish(){
        return ingredientService.getAllIngredient();
    }


}
