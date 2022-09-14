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
@RequestMapping("/staff")
public class IngredientController {
    private final IngredientService ingredientService;


    @Autowired
    public IngredientController(IngredientService ingredientService){
        this.ingredientService = ingredientService;
    }

    @GetMapping("/ingredient")
    public List<Ingredient> getIngredient(){
        return ingredientService.getAllIngredient();
    }

    @GetMapping("/ingredient/{ingredientID}")
    public Ingredient getIngredientByID(@PathVariable String ingredientID){
        return ingredientService.findIngredientByID(ingredientID);
    }

    // Create ingredients
    @PostMapping("/ingredient")
    public void addIngredient(@RequestBody Ingredient ingredient){
        ingredientService.addIngredient(ingredient);
    }

    //Delete Ingredient: (Need to be tested: previous ingredient doesn't contain id)
    @DeleteMapping("/ingredient/{ingredientId}")
    public void deleteIngredient(@PathVariable String ingredientId){
        ingredientService.deleteIngredientById(ingredientId);
    }

    @PutMapping("/ingredient/{ingredientID}")
    public void UpdateIngredient(@RequestBody Ingredient ingredient, @PathVariable String ingredientID){
        Ingredient currentIngredient = ingredientService.findIngredientByID(ingredientID);
        currentIngredient.setName(ingredient.getName());
        currentIngredient.setQuantity(ingredient.getQuantity());
        ingredientService.addIngredient(currentIngredient);
    }



}
