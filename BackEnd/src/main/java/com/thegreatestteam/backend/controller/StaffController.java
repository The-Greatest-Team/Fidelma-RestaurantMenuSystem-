package com.thegreatestteam.backend.controller;


import com.thegreatestteam.backend.model.Ingredient;
import com.thegreatestteam.backend.model.Item;
import com.thegreatestteam.backend.model.Order;
import com.thegreatestteam.backend.repository.IngradientRepository;
import com.thegreatestteam.backend.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StaffController {

    private final StaffRepository staffRepository;
    private final IngradientRepository ingradientRepository;

    @Autowired
    public StaffController(StaffRepository staffRepository, IngradientRepository ingradientRepository){
        this.staffRepository = staffRepository;
        this.ingradientRepository = ingradientRepository;
    }
    //Login

    // Staff dashboard
    @GetMapping("/staff")
    public List<Ingredient> getDashboard(){
        System.out.println("Display Staff Dashboard");
        List<Ingredient> ingredients= ingradientRepository.findAll();
        //Get Order summary (Todo)
        //Get total income (Todo)
        return ingredients;
    }

    // Create ingredients
    @PostMapping("/staff/add")
    public String addIngredients(@RequestBody Ingredient ingredient){
        ingradientRepository.save(ingredient);
        return "Add ingredient with id" + ingredient.getName();
    }

    //Delete Ingredient: (Need to be tested: previous ingredient doesn't contain id)
    @DeleteMapping("/staff/delete")
    public String deleteIngredients(@PathVariable int id){
        ingradientRepository.deleteById(id);
        return "Delete ingredient with id" + id;
    }

    //Update Ingredient's quantity (Todo)


<<<<<<< HEAD
    // Manage ingredients
    // delete ingradients
    // edit ingradients
    @PostMapping("/staff/{ingradient}/{IngradientId}")
    public String updateIngradient(@PathVariable Item ingradient, @PathVariable String IngradientId){
        return ingradient.getName() +  " had been updated successfully";
    }


=======
>>>>>>> cdb1029accca0e026d8c2418862ddf825c0e704e



    // Staff Profile
    @GetMapping("/staff/{staffId}/profile")
    public String getProfile(@PathVariable String staffId){

        return "getting profile page";
    }




    // Edit profile




    // Order summary


    // edit menu
}
