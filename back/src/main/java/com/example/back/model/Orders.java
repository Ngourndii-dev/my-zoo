package com.example.back.model;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@Getter
@Setter
public class Orders {
    private int id;
    private Date orderDate;
    private String status;
    private int quantity;
    private Client client;
    private  Animal animal;

    public Orders(int id, Date orderDate, String status, int quantity, Client client, Animal animal) {
        this.id = id;
        this.orderDate = orderDate;
        this.status = status;
        this.quantity = quantity;
        this.client = client;
        this.animal = animal;
    }
    public  Orders(){}

    @Override
    public String toString() {
        return "Orders{" +
                "id=" + id +
                ", orderDate=" + orderDate +
                ", status='" + status + '\'' +
                ", quantity=" + quantity +
                ", client=" + client +
                ", animal=" + animal +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Animal getAnimal() {
        return animal;
    }

    public void setAnimal(Animal animal) {
        this.animal = animal;
    }
}
