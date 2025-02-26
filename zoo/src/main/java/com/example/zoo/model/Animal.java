package com.example.zoo.model;

import lombok.*;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Getter
@Setter
@ToString
@Component
public class Animal {
    private int id;
    private AnimalTemplate animalTemplate;
    private String sex;
    private String origin;
    private float price;
    private float rent;
    private String status;
    private String color;
    private String imageUrl;
    public Animal(){}

    public Animal(AnimalTemplate animalTemplate, String sex, String origin, float price, float rent, String status, String color,String imageUrl) {
        this.animalTemplate = animalTemplate;
        this.sex = sex;
        this.origin = origin;
        this.price = price;
        this.rent = rent;
        this.status = status;
        this.color = color;
        this.imageUrl=imageUrl;
    }
}
