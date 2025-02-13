package com.example.back.service;

import com.example.back.model.Review;
import com.example.back.repository.ReviewDAO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ReviewService {
    private ReviewDAO reviewDAO;

    public Review insert(Review review) {
        return reviewDAO.insert(review);
    }

    public List<Review> findAll() {
        return reviewDAO.findAll();
    }

    public Review getById(int id) {
        return reviewDAO.getById(id);
    }
}
