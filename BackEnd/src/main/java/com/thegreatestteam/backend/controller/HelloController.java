package com.thegreatestteam.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String index(){
        return "Hello there, this is the main page for COMP30022 IT project";
    }

}
