package com.example.back.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class Animal {
    private int id;
    private AnimalTemplate animalTemplate;
    private String sex;
    private String origin;
    private float price;
    private float rent;
    private String status;
    private String color;

    public Animal(int id, AnimalTemplate animalTemplate, String sex, String origin, float price, float rent, String status, String color) {
        this.id = id;
        this.animalTemplate = animalTemplate;
        this.sex = sex;
        this.origin = origin;
        this.price = price;
        this.rent = rent;
        this.status = status;
        this.color = color;
    }

    @Override
    public String toString() {
        return "Animal{" +
                "id=" + id +
                ", animalTemplate=" + animalTemplate +
                ", sex='" + sex + '\'' +
                ", origin='" + origin + '\'' +
                ", price=" + price +
                ", rent=" + rent +
                ", status='" + status + '\'' +
                ", color='" + color + '\'' +
                '}';
    }
    public Animal(){

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public AnimalTemplate getAnimalTemplate() {
        return animalTemplate;
    }

    public void setAnimalTemplate(AnimalTemplate animalTemplate) {
        this.animalTemplate = animalTemplate;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public float getRent() {
        return rent;
    }

    public void setRent(float rent) {
        this.rent = rent;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
