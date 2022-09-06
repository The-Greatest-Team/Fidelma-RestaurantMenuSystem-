package com.thegreatestteam.backend.repository;

import com.thegreatestteam.backend.model.Food;
import org.springframework.data.mongodb.repository.MongoRepository;

import javax.management.Query;
import java.util.List;

public interface FoodRepository extends MongoRepository<Food,Integer> {
     List<Food> findByType(String type);
     Food findFoodById(String id);
     void deleteFoodById(String id);
}
