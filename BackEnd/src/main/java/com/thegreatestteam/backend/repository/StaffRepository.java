package com.thegreatestteam.backend.repository;

import com.thegreatestteam.backend.model.Staff;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StaffRepository extends MongoRepository<Staff, String> {

}
