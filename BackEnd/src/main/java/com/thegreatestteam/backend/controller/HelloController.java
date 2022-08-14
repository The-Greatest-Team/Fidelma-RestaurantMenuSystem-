package com.thegreatestteam.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String index(){
        return "HelloWorld from the SpringBoot application, this is The Greatest Team from COMP30022";
    }
}
