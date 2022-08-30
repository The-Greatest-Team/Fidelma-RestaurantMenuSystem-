package com.thegreatestteam.backend.controller;

import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.repository.FoodRepository;
import com.thegreatestteam.backend.service.FoodService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FoodController {
    private final FoodRepository foodRepository;
    private final FoodService foodService;


    @Autowired
    public FoodController(FoodRepository foodRepository, FoodService foodService){
        this.foodRepository = foodRepository;
        this.foodService = foodService;
    }

    //Get Menu
    @GetMapping("/staff/menu/chicken")
    public String getChickenFood(){
//        System.out.println("Chicken Menu");
//        List<Food> menu = foodRepository.findByType("chicken");
//        String sss = gson.toJson(food);
        ArrayList<JSONObject> result = new ArrayList<JSONObject>() ;
        Integer id = 0;
        List<Food> menu = foodRepository.findByType("chicken");
        System.out.println(menu.size());
        for (Food chickenFood:
             menu) {
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("id",id);
            jsonObject.put("foodName", chickenFood.getName());
            jsonObject.put("foodDesc", chickenFood.getDescription());
            jsonObject.put("foodJoules", chickenFood.getKiloJoule());
            jsonObject.put("foodPrice", chickenFood.getPrice());
            if(foodService.checkAvailability(chickenFood) == false){
                jsonObject.put("isSoldOut", true);
            }else{
                jsonObject.put("isSoldOut",false);
            }
            result.add(jsonObject);
            id += 1;
        }

        System.out.println(result.toString());

        return result.toString();
    }



    @GetMapping("/staff/menu/beef")
    public List<Food> getBeefFood(){
        System.out.println("Beef Menu");
        List<Food> menu = foodRepository.findByType("beef");
        return menu;
    }

    @GetMapping("/staff/menu/side")
    public List<Food> getSideFood(){
        System.out.println("Side Menu");
        List<Food> menu = foodRepository.findByType("side");
        return menu;
    }

    @GetMapping("/staff/menu/chip")
    public List<Food> getChipFood(){
        System.out.println("Chip Menu");
        List<Food> menu = foodRepository.findByType("chip");
        return menu;
    }


    @PostMapping("/staff/menu")
    public String addFood(@RequestBody Food food){
        System.out.println(food.getComponents());
        foodRepository.save(food);
        return "Add food " + food.getName();
    }

    @GetMapping("/staff/menu/NewDish")
    public String getAddFoodPage(){
        return "Add Food Page";
    }

    @PostMapping("/staff/menu/NewDish")
    public void addNewFood(@RequestBody Food food){
//        System.out.println(jsonObject.toJSONString());
//        if (type == "chicken"){
//            food.setType("chicken");
//        }
        foodRepository.save(food);
        System.out.println(food);
    }

}
