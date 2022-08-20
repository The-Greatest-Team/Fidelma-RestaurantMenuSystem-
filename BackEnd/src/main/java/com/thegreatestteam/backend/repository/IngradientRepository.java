package com.thegreatestteam.backend.repository;

import com.thegreatestteam.backend.model.Ingredient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IngradientRepository extends MongoRepository<Ingredient,Integer> {

}
