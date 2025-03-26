package com.example.zoo.service;

import com.example.zoo.model.*;
import com.example.zoo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalService {
    private final AnimalDAO animalDAO;

    @Autowired
    public AnimalService(AnimalDAO animalDAO) {
        this.animalDAO = animalDAO;
    }

    public Animal insert(Animal animal) {
        return animalDAO.insert(animal);
    }

    public List<Animal> findAll() {
        return animalDAO.findAll();
    }

    public Animal getById(int id) {
        return animalDAO.getById(id);
    }

    public Animal updateAnimal(Animal animal) {
        return animalDAO.updateAnimal(animal.getId(), animal.getPrice(), animal.getStatus());
    }

    public void delete(int id) {
        animalDAO.delete(id);
    }
}