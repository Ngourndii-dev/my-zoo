package com.example.zoo.controller;

import com.example.zoo.model.Review;
import com.example.zoo.service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
@AllArgsConstructor
public class ReviewController {
    private  ReviewService reviewService;

    @PostMapping
    public Review create(@RequestBody Review review) {
        return reviewService.insert(review);
    }

    @GetMapping
    public List<Review> getAll() {
        return reviewService.findAll();
    }

    @GetMapping("/{id}")
    public Review getById(@PathVariable int id) {
        return reviewService.getById(id);
    }
}
