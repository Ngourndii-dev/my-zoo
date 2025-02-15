package com.example.zoo.model;
import lombok.*;
import java.sql.Date;
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Orders {
    private int id;
    private Date orderDate;
    private String status;
    private int quantity;
    private Client client;
    private  Animal animal;
    public Orders(){

    }
}
