package com.thegreatestteam.backend.controller;

import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.repository.FoodRepository;
import com.thegreatestteam.backend.repository.IngredientRepository;
import com.thegreatestteam.backend.service.FoodService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FoodController {
    private final FoodService foodService;

    @Autowired
    public FoodController(FoodService foodService){
        this.foodService = foodService;
    }

    //Get Menu
    @GetMapping("/staff/menu/chicken")
    public List<Food> getChickenFood(){
////        System.out.println("Chicken Menu");
////        List<Food> menu = foodRepository.findByType("chicken");
////        String sss = gson.toJson(food);
//        ArrayList<JSONObject> result = new ArrayList<JSONObject>() ;
////        Integer id = 0;
//        List<Food> menu = foodRepository.findByType("chicken");
//        System.out.println(menu.size());
//        for (Food chickenFood:
//             menu) {
//            JSONObject jsonObject = new JSONObject();
//            jsonObject.put("id",chickenFood.getId());
//            jsonObject.put("foodName", chickenFood.getName());
//            jsonObject.put("foodDesc", chickenFood.getDescription());
//            jsonObject.put("foodJoules", chickenFood.getKiloJoule());
//            jsonObject.put("foodPrice", chickenFood.getPrice());
//            if(!foodService.checkAvailability(chickenFood)){
//                jsonObject.put("isSoldOut", true);
//            }else{
//                jsonObject.put("isSoldOut",false);
//            }
//            result.add(jsonObject);
//        }
//
//        System.out.println(result.toString());
//
//        return result.toString();
        return foodService.getFood("chicken");
    }



    @GetMapping("/staff/menu/beef")
    public List<Food> getBeefFood(){
        return foodService.getFood("beef");
    }

    @GetMapping("/staff/menu/side")
    public List<Food> getSideFood(){
        return foodService.getFood("side");
    }

    @GetMapping("/staff/menu/chip")
    public List<Food> getChipFood(){
        return foodService.getFood("chip");
    }

    @GetMapping("/staff/menu/newDish")
    public List<Ingredient> getNewDishIngredient(){
        return foodService.getAllIngredient();
    }

    @PostMapping("/staff/menu/newDish")
    public void addNewFood(@RequestBody Food food){
//        switch (type){
//            case "chicken":
//                food.setType("chicken");
//                break;
//            case "beef":
//                food.setType("beef");
//                break;
//            case "chips":
//                food.setType("chips");
//                break;
//            case "sides":
//                food.setType("sides");
//                break;
//            default:
//                food.setType(null);
//        }
//        System.out.println("ID :" + food.getId());
//        food.setType("chicken");
        foodService.addFood(food);
    }

    @GetMapping("/staff/menu/edit/{id}")
    public Food getEditDish(@PathVariable String id){
        return foodService.getFoodById(id);
    }

    @PutMapping("/staff/menu/edit/{id}")
    public void updateDish(@RequestBody Food newFood, @PathVariable String id){
        Food food = foodService.getFoodById(id);
        food.setName(newFood.getName());
        food.setPrice(newFood.getPrice());
        food.setKiloJoule(newFood.getKiloJoule());
        food.setComponents(newFood.getComponents());
        foodService.addFood(food);
    }
}
