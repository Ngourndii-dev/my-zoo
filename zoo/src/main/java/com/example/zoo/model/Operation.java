package com.example.zoo.model;

import java.sql.Date;
import lombok.*;

@AllArgsConstructor
@Getter
@Setter
@ToString
public class Operation {
    private int id;
    private float price;
    private Animal animal;
    private Date operationDate;
    private String operationType;
    public Operation(){

    }
    public Operation(float price, Animal animal, Date operationDate, String operationType) {
        this.price = price;
        this.animal = animal;
        this.operationDate = operationDate;
        this.operationType = operationType;
    }
}
