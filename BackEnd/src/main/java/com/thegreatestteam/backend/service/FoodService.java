package com.thegreatestteam.backend.service;

import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.repository.FoodRepository;
import com.thegreatestteam.backend.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {
    @Autowired
    private final FoodRepository foodRepository;
    @Autowired
    private final IngredientRepository ingredientRepository;

    public FoodService(IngredientRepository ingredientRepository, FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
        this.ingredientRepository = ingredientRepository;
    }

    public boolean checkAvailability(Food food){

        for(String ingredientName: food.getComponents().keySet()){
            Ingredient ingredient = ingredientRepository.findByName(ingredientName);
            Integer currentQuantity = Integer.valueOf(ingredient.getQuantity());
            Integer requiredQuantity = food.getComponents().get(ingredientName).intValue();

            if(currentQuantity - requiredQuantity < 0 ){
//                System.out.println("currentQuantity: " + currentQuantity);
//                System.out.println("requiredQuantity: " + requiredQuantity);
                return false;
            }
        }
        return true;
    }

    public List<Ingredient> getAllIngredient(){
        return ingredientRepository.findAll();
    }

//    public void addImage(Food food, MultipartFile file) throws IOException {
//        food.setImage( new Binary(BsonBinarySubType.BINARY, file.getBytes()));
//        foodRepository.save(food);
//        System.out.println("Save Image");
//    }
}
