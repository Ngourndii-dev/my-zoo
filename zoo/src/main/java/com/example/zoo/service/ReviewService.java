package com.example.zoo.service;

import com.example.zoo.model.Animal;
import com.example.zoo.model.Review;
import com.example.zoo.repository.AnimalDAO;
import com.example.zoo.repository.ReviewDAO;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ReviewService {
    @Autowired
    private final ReviewDAO reviewDAO;

    public Review insert(Review review) {
        return reviewDAO.insert(review);
    }

    public List<Review> findAll() {
        return reviewDAO.findAll();
    }
    public Review getById(int id) {
        return reviewDAO.getById(id);
    }
    public List<Review> findAllToClient(){
        return reviewDAO.findAllToClient();
    }


}
