package com.thegreatestteam.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://localhost:3000")
public class HelloController {

    @GetMapping("/")
    public String index(){
        return "Hello there, this is the main page for COMP30022 IT project";
    }
    @GetMapping("/api/users")
    public String api(){
        return "Hello this is api /users";
    }
}
