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
    @Autowired
    private AnimalService animalService;
    @PostMapping
    public ResponseEntity<Void> create(@RequestBody Animal animal) {
        animalService.insert(animal);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Animal>> findAll() {
        List<Animal> animals = animalService.findAll();
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(animals.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(animals);
    }
    @GetMapping("/client")
    public ResponseEntity<List<Animal>> findAllByClient() {
        List<Animal> animals = animalService.findAllByClient();
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(animals.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(animals);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getById(@PathVariable int id) {
        Animal animal = animalService.getById(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", "1");
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(Map.of("data", animal));
    }

    @PostMapping("/update")
    public ResponseEntity<Void> updateStatus(@RequestBody Animal animal) {
        animalService.updateAnimal(animal);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        animalService.delete(id);
        return ResponseEntity.noContent().build();
    }

}