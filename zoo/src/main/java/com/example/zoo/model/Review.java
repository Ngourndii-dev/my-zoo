package com.example.zoo.model;

import lombok.*;
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Review {
    private int id;
    private String author;
    private Animal animal;
    private int rating;
    private String comment;
    public Review(){}

    public Review(String author, Animal animal, int rating, String comment) {
        this.author = author;
        this.animal = animal;
        this.rating = rating;
        this.comment = comment;
    }
}
