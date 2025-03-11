package com.example.zoo.service;

import com.example.zoo.model.*;
import com.example.zoo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalService {

    @Autowired
    private AnimalDAO animalDAO;
    public Animal insert(Animal animal) {
        return animalDAO.insert(animal);
    }
    public List<Animal> findAll() {
        return animalDAO.findAll();
    }
    public List<Animal> findAllByClient() {
        return animalDAO.findAllByClient();
    }
    public Animal getById(int id) {
        return animalDAO.getById(id);
    }
    public Animal updateAnimal(int id,Animal animal) {
        return animalDAO.updateAnimal(id, animal.getPrice(), animal.getStatus());
    }
    public void delete(int id){
        animalDAO.delete(id);
    }
}