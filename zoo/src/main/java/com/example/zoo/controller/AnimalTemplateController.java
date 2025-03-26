package com.example.zoo.controller;

import com.example.zoo.model.AnimalTemplate;
import com.example.zoo.service.AnimalTemplateService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animal-templates")
@AllArgsConstructor
public class AnimalTemplateController {
    private final AnimalTemplateService animalTemplateService;

    @PostMapping
    public ResponseEntity<AnimalTemplate> create(@RequestBody AnimalTemplate animalTemplate) {
        AnimalTemplate created = animalTemplateService.insert(animalTemplate);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @GetMapping
    public ResponseEntity<List<AnimalTemplate>> findAll() {
        List<AnimalTemplate> templates = animalTemplateService.findAll();
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(templates.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(templates);
    }

    @GetMapping("/allId")
    public ResponseEntity<List<Integer>> findAllId() {
        List<Integer> ids = animalTemplateService.findAllId();
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(ids.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(ids);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AnimalTemplate> getById(@PathVariable int id) {
        AnimalTemplate template = animalTemplateService.getById(id);
        if (template == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(template);
    }
}