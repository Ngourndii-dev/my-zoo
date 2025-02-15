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
    public AnimalTemplate(){}
}
