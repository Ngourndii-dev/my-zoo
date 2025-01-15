package com.example.back.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class AnimalTemplate {
    private int id;
    private String name;
    private String species;

    public AnimalTemplate(int id, String name, String species) {
        this.id = id;
        this.name = name;
        this.species = species;
    }
    public AnimalTemplate(){}

    @Override
    public String toString() {
        return "AnimalTemplate{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", species='" + species + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }
}
