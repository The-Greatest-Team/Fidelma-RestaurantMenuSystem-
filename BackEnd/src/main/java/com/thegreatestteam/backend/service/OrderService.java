package com.thegreatestteam.backend.service;

import com.thegreatestteam.backend.model.Order;
import com.thegreatestteam.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getOrderByTableNumber(Integer tableNumber){
        return orderRepository.findOrdersByTableNumber(tableNumber);
    }

    public List<Order> getOrderByPhoneNumber(String phoneNumber){
        return orderRepository.findOrdersByPhoneNumer(phoneNumber);
    }

    public void addOrder(Order order) {
        orderRepository.save(order);
    }

    public List<Order> getAllOrder(){
        return orderRepository.findAll();
    }
}
