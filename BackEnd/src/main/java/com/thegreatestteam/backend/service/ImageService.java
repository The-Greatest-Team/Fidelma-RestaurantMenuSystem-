package com.thegreatestteam.backend.service;

import com.thegreatestteam.backend.model.Image;
import com.thegreatestteam.backend.repository.ImageRepository;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    public void addImage(MultipartFile file, String id) throws IOException {
        try {
            Image image = new Image(id);
            image.setImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
            imageRepository.save(image);
        } catch (IOException e) {
            throw new IOException("Image upload unsuccessful");
        }
    }

    public Image getImageById(String id) throws Exception{
        try {
            Image image = imageRepository.getImageById(id);
            return image;
        }catch(Exception e){
            throw new Exception("Unsuccessful image retreive");
        }
    }
}
