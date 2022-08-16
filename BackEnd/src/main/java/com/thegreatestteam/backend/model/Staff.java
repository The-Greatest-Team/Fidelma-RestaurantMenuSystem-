package com.thegreatestteam.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Staff {

    @Id
    private String id;

    private String Username;
    private String firstName;
    private String lastName;
    private String email;

    public Staff( String username, String email) {
        Username = username;
        this.email = email;
        this.firstName = null;
        this.lastName = null;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getId() {
        return id;
    }

    public String getUsername() {
        return Username;
    }

    public String getEmail() {
        return email;
    }
}
