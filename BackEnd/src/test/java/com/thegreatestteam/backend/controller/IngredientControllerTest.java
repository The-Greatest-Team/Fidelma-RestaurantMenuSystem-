package com.thegreatestteam.backend.controller;

import com.google.gson.Gson;
import com.thegreatestteam.backend.model.Ingredient;
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

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
class IngredientControllerTest {

    @Autowired
    private MockMvc mcv;
    private RequestBuilder request;
    private Gson gson;

    @Test
    void getIngredient() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/ingredient").
                accept(MediaType.APPLICATION_JSON);
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk()).
                andExpect(MockMvcResultMatchers.jsonPath("$[0].name").exists());
    }

    @Test
    void getIngredientById() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/ingredient/IngredientTest").
                accept(MediaType.APPLICATION_JSON);
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk()).
                andExpect(MockMvcResultMatchers.jsonPath("$.name").exists()).
                andExpect(MockMvcResultMatchers.jsonPath("$.name").value("IngredientTest"));
    }

    @Test
    void addIngredient() throws Exception {
        gson = new Gson();
        Ingredient ingredient = new Ingredient("IngredientTest","IngredientTest",1,10.0);
        request = MockMvcRequestBuilders.post("/staff/ingredient").
                contentType(MediaType.APPLICATION_JSON).
                content(gson.toJson(ingredient)).
                accept(MediaType.APPLICATION_JSON);
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isCreated()).
                andExpect(MockMvcResultMatchers.jsonPath("$.name").exists()).
                andExpect(MockMvcResultMatchers.jsonPath("$.name").value("IngredientTest"));
    }

    @Test
    void updateIngredient() throws Exception {
        gson = new Gson();
        Ingredient ingredient = new Ingredient("IngredientTest","IngredientTest-2",1,10.0);
        request = MockMvcRequestBuilders.put("/staff/ingredient/IngredientTest").
                contentType(MediaType.APPLICATION_JSON).
                content(gson.toJson(ingredient)).
                accept(MediaType.APPLICATION_JSON);
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isNoContent()).
                andExpect(MockMvcResultMatchers.jsonPath("$.name").exists()).
                andExpect(MockMvcResultMatchers.jsonPath("$.name").value("IngredientTest-2"));
    }
}