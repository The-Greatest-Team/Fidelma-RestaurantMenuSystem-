package com.thegreatestteam.backend.repository;

import com.thegreatestteam.backend.model.Ingradient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IngradientRepository extends MongoRepository<Ingradient,Integer> {

}
