package com.thegreatestteam.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "https://localhost:3000")
public class HelloController {

    @GetMapping("/")
    public String index() {
        return "Hello there, this is the main page for COMP30022 IT project";
    }

    @GetMapping("/api/users")
    public String api() {
        return "Hello this is api /users";
    }


    @PostMapping("api/users")
    public void getPost(@RequestBody String postString) {
        System.out.println(postString);
    }

}