package com.thegreatestteam.backend.repository;

import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.model.Order;
import com.thegreatestteam.backend.model.Staff;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface StaffRepository extends MongoRepository<Staff, String> {
    Staff findStaffById(String Id);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);


}
