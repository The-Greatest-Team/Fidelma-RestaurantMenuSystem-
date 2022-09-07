package com.thegreatestteam.backend.controller;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@WebMvcTest(FoodController.class)
class FoodControllerTest {

    @Autowired
    private MockMvc mcv;

    @Test
    void getChickenFood() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/staff");
        try {
            MvcResult result = mcv.perform(request).andReturn();
            System.out.println(result.getResponse().getContentAsString());
        } catch (Exception e) {
            throw new RuntimeException("Fail to get result");
        }
    }

    @Test
    void getBeefFood() {
    }

    @Test
    void getSideFood() {
    }

    @Test
    void getChipFood() {
    }
}