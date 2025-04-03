package com.example.zoo.controller;

import com.example.zoo.model.Client;
import com.example.zoo.model.Review;
import com.example.zoo.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> create(@RequestBody Review review) {
        Review createdReview=reviewService.insert(review);
        return new ResponseEntity<>(createdReview, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Review>> findAll() {
        List<Review> reviews = reviewService.findAll();
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(reviews.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(reviews);
    }
    @GetMapping("/client")
    public ResponseEntity<List<Review>> findAllToClient() {
        List<Review> reviews = reviewService.findAllToClient();
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(reviews.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(reviews);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getById(@PathVariable int id) {
        Optional<Review> optionalReview = Optional.ofNullable(reviewService.getById(id));

        if (optionalReview.isPresent()) {
            HttpHeaders headers = new HttpHeaders();
            headers.add("X-Total-Count", "1");
            headers.add("Access-Control-Expose-Headers", "X-Total-Count");
            return ResponseEntity.ok().headers(headers).body(Map.of("data", optionalReview.get()));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Review not found"));
        }
    }
}
