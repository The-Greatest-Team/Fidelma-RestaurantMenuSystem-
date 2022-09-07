package com.thegreatestteam.backend.controller;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
class FoodControllerTest {

    @Autowired
    private MockMvc mcv;
    private RequestBuilder request;

    @Test
    void getChickenFood() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/menu/chicken");
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk());
    }

    @Test
    void getBeefFood() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/menu/beef");
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk());
    }

    @Test
    void getSideFood() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/menu/side");
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk());
    }

    @Test
    void getChipFood() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/menu/chip");
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk());
    }

    @Test
    void getNewDishIngredient() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/menu/newDish");
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk());
    }

    @Test
    void getEditDish() throws Exception {
        request = MockMvcRequestBuilders.get("/staff/menu/edit/63184a91169a5c4d695cae61");
        mcv.perform(request).
                andDo(print()).
                andExpect(status().isOk());
    }
}