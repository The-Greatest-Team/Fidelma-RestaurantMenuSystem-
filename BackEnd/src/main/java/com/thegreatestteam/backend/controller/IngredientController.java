package com.thegreatestteam.backend.controller;

import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public Ingredient getIngredientById(@PathVariable String ingredientID){
        return ingredientService.findIngredientByID(ingredientID);
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
    public void deleteIngredient(@PathVariable String ingredientId){
        ingredientService.deleteIngredientById(ingredientId);
    }

    @PutMapping("/ingredient/{ingredientId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Ingredient UpdateIngredient(@RequestBody Ingredient ingredient, @PathVariable String ingredientId){
        Ingredient currentIngredient = ingredientService.findIngredientByID(ingredientId);
        currentIngredient.setName(ingredient.getName());
        currentIngredient.setQuantity(ingredient.getQuantity());
        currentIngredient.setPrice(ingredient.getPrice());
        ingredientService.addIngredient(currentIngredient);
        return ingredientService.findIngredientByID(ingredientId);
    }



}
