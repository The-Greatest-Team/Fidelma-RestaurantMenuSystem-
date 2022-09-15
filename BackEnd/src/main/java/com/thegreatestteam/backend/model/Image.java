package com.thegreatestteam.backend.model;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Image")
public class Image {
    @Id
    private String id;
    private Binary image = null;

    public Image() {
    }

    public String getId() {
        return id;
    }


    public Binary getImage() {
        return image;
    }

    public void setImage(Binary image) {
        this.image = image;
    }
}
