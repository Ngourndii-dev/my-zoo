package com.example.zoo.model;
import lombok.*;

import java.sql.Date;
import java.time.LocalDate;

@AllArgsConstructor
@Getter
@Setter
@ToString
public class Event {
    private int id;
    private Animal animal;
    private String image;
    private LocalDate situationDate;
    private String descriptionEvent;
    public Event(){

}
    public Event(Animal animal, String image, LocalDate situationDate,String descriptionEvent) {
        this.animal = animal;
        this.image = image;
        this.situationDate = situationDate;
        this.descriptionEvent=descriptionEvent;
    }
}
