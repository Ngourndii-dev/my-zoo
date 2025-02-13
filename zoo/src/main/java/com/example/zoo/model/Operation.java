package com.example.back.model;

import java.util.Date;
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
}
