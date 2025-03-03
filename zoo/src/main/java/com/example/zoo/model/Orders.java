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

    public Orders(Date orderDate, String status, int quantity, Client client, Animal animal) {
        this.orderDate = orderDate;
        this.status = status;
        this.quantity = quantity;
        this.client = client;
        this.animal = animal;
    }
}
