package com.example.back.model;

import lombok.*;

@AllArgsConstructor
@Getter
@Setter
@ToString
public class Animal {
    private int id;
    private AnimalTemplate animalTemplate;
    private String sex;
    private String origin;
    private float price;
    private float rent;
    private String status;
    private String color;

}
