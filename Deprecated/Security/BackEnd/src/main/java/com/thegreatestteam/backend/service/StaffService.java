package com.thegreatestteam.backend.service;

import com.thegreatestteam.backend.model.Staff;
import com.thegreatestteam.backend.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StaffService {

    private final StaffRepository staffRepository;

    @Autowired
    public StaffService(StaffRepository staffRepository) {
        this.staffRepository = staffRepository;
    }

    //Get Staff with Id
    public Staff getAllStaffWithID(String Id){
        return staffRepository.findStaffById(Id);
    }

    // Add Staff
    public void addStaff(Staff staff){
        staffRepository.save(staff);
    }
}
