package com.thegreatestteam.backend.service;

import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.model.Order;
import com.thegreatestteam.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        for(Map.Entry<String,List<Integer>> dish: order.getCart().entrySet()){
            Food food = foodService.getFoodById(dish.getKey());
            if(food == null){
                break;
            }
            for(int i = 0; i< dish.getValue().get(0);i++){
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
    }

    public Integer checkQuantity(Order order){
        for(Map.Entry<String,List<Integer>> dish: order.getCart().entrySet()){
            Food food = foodService.getFoodById(dish.getKey());
            if(food == null){
                return 0;
            }
            System.out.println("sdf");

            int foodQuantity = dish.getValue().get(0);


            for(Map.Entry<String,Double> pair: food.getComponents().entrySet()){
                if(pair.getValue() == 0){
                    continue;
                }

                if(ingredientService.findIngredientByName(pair.getKey()) == null &&
                    pair.getValue() != 0){
                    System.out.println("here");
                    return 0;
                }

//                    if(ingredientService.findIngredientByName(pair.getKey()) == null){
//                        return 0;
//                    }
                double stock = ingredientService.findIngredientByName(pair.getKey()).getQuantity();

                double overallQuantity = pair.getValue() * foodQuantity;
                if(stock - overallQuantity < 0){
                    return 1;
                }
            }


        }
        return 2;
    }

    public void addOrder(Order order) {
        orderRepository.save(order);
    }

    public List<Order> getAllOrder(){
        return orderRepository.findAll();
    }

    public Order getOrderById(String id){
        return orderRepository.getOrderById(id);
    }

    public List<Order> displayALlOrdersWithDishes(){
        List<Order> orders = this.getAllOrder();
        // need to return order id
        // clone the orders
        List<Order> clone = new ArrayList<>();
        for(Order order: orders){
            clone.add(order);
        }
        //
        for (Order order: clone){
            // change the name of the cart
            Map<String, List<Integer>> origin = order.getCart();
            if(origin == null){
                continue;
            }
            Map<String, Integer> newCopy = new HashMap<>();
            for(Map.Entry<String, List<Integer>> entry : origin.entrySet()){
                Food food = foodService.getFoodById(entry.getKey());
                if(food == null){
                    System.out.println(entry.getKey());
                    continue;
                }
                String name = food.getName();
                newCopy.put(name, entry.getValue().get(0));
            }
        }
        return clone;
    }
}
