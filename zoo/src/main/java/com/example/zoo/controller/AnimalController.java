package com.example.zoo.controller;

import com.example.zoo.model.*;
import com.example.zoo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
@RestController
@RequestMapping("/animals")
public class AnimalController {
    private final AnimalService animalService;

    @Autowired
    public AnimalController(AnimalService animalService) {
        this.animalService = animalService;
    }

    @PostMapping
    public ResponseEntity<Animal> create(@RequestBody Animal animal) {
        Animal created = animalService.insert(animal);
        return ResponseEntity.ok(created);
    }

    @GetMapping
    public ResponseEntity<List<Animal>> findAll() {
        List<Animal> animals = animalService.findAll();
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(animals.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(animals);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Animal> getById(@PathVariable int id) {
        Animal animal = animalService.getById(id);
        return ResponseEntity.ok(animal);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Animal> update(@PathVariable int id, @RequestBody Animal animal) {
        animal.setId(id);
        Animal updated = animalService.updateAnimal(animal);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        animalService.delete(id);
        return ResponseEntity.noContent().build();
    }
}