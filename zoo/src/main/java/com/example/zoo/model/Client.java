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

    public Client(String clientName, String phoneNumber, String email) {
        this.clientName = clientName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}
