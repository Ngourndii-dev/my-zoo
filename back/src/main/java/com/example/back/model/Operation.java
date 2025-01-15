package com.example.back.model;

import java.util.Date;

public class Operation {
    private int id;
    private float price;
    private Animal animal;
    private Date operationDate;
    private String operationType;

    public Operation(int id, float price, Animal animal, Date operationDate, String operationType) {
        this.id = id;
        this.price = price;
        this.animal = animal;
        this.operationDate = operationDate;
        this.operationType = operationType;
    }

    public Operation(){}
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Animal getAnimal() {
        return animal;
    }

    public void setAnimal(Animal animal) {
        this.animal = animal;
    }

    public Date getOperationDate() {
        return operationDate;
    }

    public void setOperationDate(Date operationDate) {
        this.operationDate = operationDate;
    }

    public String getOperationType() {
        return operationType;
    }

    public void setOperationType(String operationType) {
        this.operationType = operationType;
    }
}
