package com.thegreatestteam.backend.repository;

import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.model.Staff;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StaffRepository extends MongoRepository<Staff, String> {
    //Return All ingredient
    List<Ingredient> getAllIngredient();

}
