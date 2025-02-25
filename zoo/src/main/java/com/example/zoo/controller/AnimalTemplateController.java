package com.example.zoo.controller;

import com.example.zoo.model.AnimalTemplate;
import com.example.zoo.model.Review;
import com.example.zoo.service.AnimalTemplateService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/animal-templates")
@AllArgsConstructor
public class AnimalTemplateController {
    @Autowired
    private final AnimalTemplateService animalTemplateService;

    @PostMapping
    public ResponseEntity<AnimalTemplate> create(@RequestBody AnimalTemplate animalTemplate) {
        AnimalTemplate animalTemplate1=animalTemplateService.insert(animalTemplate);
        return ResponseEntity.ok(animalTemplate1);
    }

    @GetMapping
    public ResponseEntity<List<AnimalTemplate>> findAll() {
        List<AnimalTemplate> templates = animalTemplateService.findAll();
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(templates.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(templates);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getById(@PathVariable int id) {
        AnimalTemplate template = animalTemplateService.getById(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", "1");
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(Map.of("data", template));
    }
}
