package com.thegreatestteam.backend.service;

import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.repository.FoodRepository;
import com.thegreatestteam.backend.repository.IngredientRepository;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FoodService {
    @Autowired
    private final FoodRepository foodRepository;
    @Autowired
    private final IngredientService ingredientService;

    public FoodService(IngredientService ingredientService, FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
        this.ingredientService = ingredientService;
    }

    //Check current dish availability
    public boolean checkAvailability(Food food){
        for(String ingredientName: food.getComponents().keySet()){

            Ingredient ingredient = ingredientService.findIngredientByName(ingredientName);
            if(ingredient == null){
                return false;
            }
            Double currentQuantity = ingredient.getQuantity();
            Double requiredQuantity = food.getComponents().get(ingredientName);
            if (requiredQuantity == null){
                requiredQuantity = 0.0;
            }
            if(currentQuantity - requiredQuantity < 0 ){
                return true;
            }
        }
        return false;
    }

    //Get food
    public List<Food> getFood(String type){
        List<Food> foods = foodRepository.findByType(type);
        for (Food food : foods){
            food.setSoldOut(checkAvailability(food));
        }
        return foods;
    }

    public void addFood(Food food){
        foodRepository.save(food);
    }

    public Food getFoodById(String id){
        return foodRepository.findFoodById(id);
    }


    public List<Ingredient> getAllIngredient(){
        return ingredientService.getAllIngredient();
    }

    public void deleteFood(String id){
        foodRepository.deleteFoodById(id);
    }

//    public void addImage(Food food, MultipartFile file) throws IOException {
//        food.setImage( new Binary(BsonBinarySubType.BINARY, file.getBytes()));
//        foodRepository.save(food);
//        System.out.println("Save Image");
//    }

    public boolean checkFood(String id){
        return foodRepository.existsById(id);
    }
}
