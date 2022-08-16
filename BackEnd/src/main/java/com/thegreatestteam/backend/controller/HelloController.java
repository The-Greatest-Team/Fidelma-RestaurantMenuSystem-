package com.thegreatestteam.backend.controller;

import com.thegreatestteam.backend.model.Food;
import com.thegreatestteam.backend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @Autowired
    ItemRepository itemRepository;
    void createItem(){
        itemRepository.save(new Food("hamburger",12.99));
    }
    @GetMapping("/")
    public String index(){
        createItem();
        return "HelloWorld from the SpringBoot application, this is The Greatest Team from COMP30022";
    }
}
