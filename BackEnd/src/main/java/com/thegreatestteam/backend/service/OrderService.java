package com.thegreatestteam.backend.service;

import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.model.Order;
import com.thegreatestteam.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class OrderService {
    public OrderService(OrderRepository orderRepository, FoodService foodService, IngredientService ingredientService) {
        this.orderRepository = orderRepository;
        this.foodService = foodService;
        this.ingredientService = ingredientService;
    }

    @Autowired
    private OrderRepository orderRepository;
    private FoodService foodService;
    private IngredientService ingredientService;



    public List<Order> getOrderByPhoneNumber(String phoneNumber){
        return orderRepository.findOrdersByPhoneNumber(phoneNumber);
    }

    public void UpdateQuantityForIngredient(Order order){
        for(String foodId: order.getCart().keySet()){
            Food food = foodService.getFoodById(foodId);
            if(food == null){
                break;
            }
            for(Map.Entry<String,Double> pair: food.getComponents().entrySet()){
                if(ingredientService.findIngredientByName(pair.getKey()) == null){
                    continue;
                }
                double stock = ingredientService.findIngredientByName(pair.getKey()).getQuantity();
                stock = stock - pair.getValue();
                ingredientService.findIngredientByName(pair.getKey()).setQuantity(stock);
            }
        }
    }

    public void addOrder(Order order) {
        orderRepository.save(order);
    }

    public List<Order> getAllOrder(){
        return orderRepository.findAll();
    }
}
