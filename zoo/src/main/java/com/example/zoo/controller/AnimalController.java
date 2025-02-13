package com.example.back.controller;

import com.example.back.model.Animal;
import com.example.back.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animals")
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    @PostMapping
    public ResponseEntity<Animal> createAnimal(@RequestBody Animal animal) {
        Animal createdAnimal = animalService.insert(animal);
        return ResponseEntity.ok(createdAnimal);
    }

    @GetMapping
    public ResponseEntity<List<Animal>> getAllAnimals() {
        List<Animal> animals = animalService.findAll();
        return ResponseEntity.ok(animals);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Animal> getAnimalById(@PathVariable int id) {
        Animal animal = animalService.getById(id);
        return ResponseEntity.ok(animal);
    }

    @PutMapping("/{id}/price")
    public ResponseEntity<Animal> updateAnimalPrice(@PathVariable int id, @RequestParam float price) {
        Animal updatedAnimal = animalService.updatePrice(id, price);
        return ResponseEntity.ok(updatedAnimal);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Animal> updateAnimalStatus(@PathVariable int id, @RequestParam String status) {
        Animal updatedAnimal = animalService.updateStatus(id, status);
        return ResponseEntity.ok(updatedAnimal);
    }
}