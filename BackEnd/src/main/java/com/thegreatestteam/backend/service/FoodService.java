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
            Integer currentQuantity = Integer.valueOf(ingredient.getQuantity());
            Integer requiredQuantity = food.getComponents().get(ingredientName).intValue();
            if(currentQuantity - requiredQuantity < 0 ){
                return false;
            }
        }
        return true;
    }

    //Get food
    public String getFood(String type){
        ArrayList<JSONObject> result = new ArrayList<JSONObject>() ;
        List<Food> menu = foodRepository.findByType(type);

        for (Food food: menu) {
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("id",food.getId());
            jsonObject.put("foodName", food.getName());
            jsonObject.put("foodDesc", food.getDescription());
            jsonObject.put("foodJoules", food.getKiloJoule());
            jsonObject.put("foodPrice", food.getPrice());
            if(!checkAvailability(food)){
                jsonObject.put("isSoldOut", true);
            }else{
                jsonObject.put("isSoldOut",false);
            }
            result.add(jsonObject);
        }

//        System.out.println(result.toString());
        return result.toString();
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

//    public void addImage(Food food, MultipartFile file) throws IOException {
//        food.setImage( new Binary(BsonBinarySubType.BINARY, file.getBytes()));
//        foodRepository.save(food);
//        System.out.println("Save Image");
//    }
}
