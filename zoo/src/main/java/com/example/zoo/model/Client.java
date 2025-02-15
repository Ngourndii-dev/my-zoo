package com.example.zoo.model;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class Client {
    private  int id;
    private String clientName;
    private String phoneNumber;
    private String email;
    public Client(){}
}
