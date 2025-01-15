package com.example.back.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@Getter
@Setter
public class Event {
    private int id;
    private Animal animal;
    private String image;
    private Date situationDate;

    public Event(int id, Animal animal, String image, Date situationDate) {
        this.id = id;
        this.animal = animal;
        this.image = image;
        this.situationDate = situationDate;
    }

    @Override
    public String toString() {
        return "Event{" +
                "id=" + id +
                ", animal=" + animal +
                ", image='" + image + '\'' +
                ", situationDate=" + situationDate +
                '}';
    }

    public Event(){

    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Animal getAnimal() {
        return animal;
    }

    public void setAnimal(Animal animal) {
        this.animal = animal;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public java.sql.Date getSituationDate() {
        return situationDate;
    }

    public void setSituationDate(Date situationDate) {
        this.situationDate = situationDate;
    }
}
