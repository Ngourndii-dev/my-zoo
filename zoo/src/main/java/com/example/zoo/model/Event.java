package com.example.back.model;
import com.example.back.model.Animal;
import lombok.*;

import java.util.Date;

@AllArgsConstructor
@Getter
@Setter
@ToString
public class Event {
    private int id;
    private Animal animal;
    private String image;
    private Date situationDate;

}
