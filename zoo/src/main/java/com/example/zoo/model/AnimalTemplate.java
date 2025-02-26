package com.example.zoo.model;

import lombok.*;
@AllArgsConstructor
@Getter
@Setter
@ToString
public class AnimalTemplate {
    private int id;
    private String name;
    private String species;
    private String imageUrl;
    public AnimalTemplate(){}

    public AnimalTemplate(String name, String species,String imageUrl) {
        this.name = name;
        this.species = species;
        this.imageUrl=imageUrl;
    }
}
