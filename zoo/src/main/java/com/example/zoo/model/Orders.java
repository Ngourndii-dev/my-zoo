package com.example.back.model;
import lombok.*;
import com.example.back.model.Animal;
import java.util.Date;

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

}
