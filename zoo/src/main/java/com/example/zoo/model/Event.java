package com.example.zoo.model;
import lombok.*;

import java.sql.Date;
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Event {
    private int id;
    private Animal animal;
    private String image;
    private Date situationDate;
public Event(){

}

    public Event(Animal animal, String image, Date situationDate) {
        this.animal = animal;
        this.image = image;
        this.situationDate = situationDate;
    }
}
