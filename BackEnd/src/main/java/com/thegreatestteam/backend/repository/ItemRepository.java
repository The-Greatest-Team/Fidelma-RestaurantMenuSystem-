package com.thegreatestteam.backend.repository;

import com.thegreatestteam.backend.model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemRepository extends MongoRepository<Item, Integer> {


}
