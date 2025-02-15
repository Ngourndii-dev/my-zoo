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
    private String status;
    public Review(){}
}
