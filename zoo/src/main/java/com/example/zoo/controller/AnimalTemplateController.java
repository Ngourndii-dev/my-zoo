package com.example.back.controller;

import com.example.back.model.AnimalTemplate;
import com.example.back.service.AnimalTemplateService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animal-templates")
@AllArgsConstructor
public class AnimalTemplateController {
    private AnimalTemplateService animalTemplateService;

    @PostMapping
    public AnimalTemplate create(@RequestBody AnimalTemplate animalTemplate) {
        return animalTemplateService.insert(animalTemplate);
    }

    @GetMapping
    public List<AnimalTemplate> getAll() {
        return animalTemplateService.findAll();
    }

    @GetMapping("/{id}")
    public AnimalTemplate getById(@PathVariable int id) {
        return animalTemplateService.getById(id);
    }
}
