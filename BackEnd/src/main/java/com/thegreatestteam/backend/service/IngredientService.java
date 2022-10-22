package com.thegreatestteam.backend.service;

import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.repository.IngredientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {
    private final IngredientRepository ingredientRepository;

    public IngredientService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public List<Ingredient> getAllIngredient(){
        return ingredientRepository.findAll();
    }

    public void addIngredient(Ingredient ingredient){
        ingredientRepository.save(ingredient);
    }

    public void deleteIngredientById(String id){
        ingredientRepository.deleteById(id);
    }

    public Ingredient findIngredientByName(String name){
        return ingredientRepository.findByName(name);
    }

    public Ingredient findIngredientById(String id){
        return ingredientRepository.findIngredientById(id);
    }
}
