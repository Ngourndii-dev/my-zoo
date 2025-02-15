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
}
