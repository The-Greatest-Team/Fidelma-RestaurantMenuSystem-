package com.thegreatestteam.backend.controller;

import com.google.gson.Gson;
import com.thegreatestteam.backend.model.Food;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
class FoodControllerTest {

    @Autowired
    private MockMvc mcv;
    private RequestBuilder request;
    private Gson gson;

    @Test
    void getChickenFood() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/menu/chicken").
                accept(MediaType.APPLICATION_JSON);
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk()).
                andExpect(MockMvcResultMatchers.jsonPath("$[0].name").exists());
    }

    @Test
    void getBeefFood() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/menu/beef").
                accept(MediaType.APPLICATION_JSON);
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk()).
                andExpect(MockMvcResultMatchers.jsonPath("$[0].name").exists());
    }

    @Test
    void getSideFood() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/menu/side").
                accept(MediaType.APPLICATION_JSON);
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk()).
                andExpect(MockMvcResultMatchers.jsonPath("$[0].name").exists());;
    }

    @Test
    void getChipFood() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/menu/chip").
                accept(MediaType.APPLICATION_JSON);
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk()).
                andExpect(MockMvcResultMatchers.jsonPath("$[0].name").exists());
    }

    @Test
    void getNewDishIngredient() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/menu/newDish").
                accept(MediaType.APPLICATION_JSON);
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk()).
                andExpect(MockMvcResultMatchers.jsonPath("$[0].name").exists());
    }

    @Test
    void getEditDish() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/menu/edit/63184a91169a5c4d695cae61").
                accept(MediaType.APPLICATION_JSON);
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk()).
                andExpect(MockMvcResultMatchers.jsonPath("$[0].name").exists());
    }

    @Test
    void addNewFood() throws Exception {
        Map<String, Double> components = new HashMap<>();
        components.put("test",1.0);
        gson = new Gson();
        Food food = new Food("TEST","TestFOOD",1,"test",10,components,"Test");
        request = MockMvcRequestBuilders.post("/staff/menu/newDish").
                contentType(MediaType.APPLICATION_JSON).
                content(gson.toJson(food)).
                accept(MediaType.APPLICATION_JSON);
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isCreated()).
                andExpect(MockMvcResultMatchers.jsonPath("$.name").exists()).
                andExpect(MockMvcResultMatchers.jsonPath("$.name").value("TestFOOD"));;
    }


    @Test
    void updateDish() throws Exception {
        gson = new Gson();
        Map<String, Double> components = new HashMap<>();
        components.put("test",1.0);
        Food food = new Food("TEST","TestFOOD-2",1,"test",10,components,"Test");
        request = MockMvcRequestBuilders.put("/staff/menu/edit/TEST").
                contentType(MediaType.APPLICATION_JSON).
                content(gson.toJson(food)).
                accept(MediaType.APPLICATION_JSON);
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isNoContent()).
                andExpect(MockMvcResultMatchers.jsonPath("$.name").exists()).
                andExpect(MockMvcResultMatchers.jsonPath("$.name").value("TestFOOD-2"));
    }
}