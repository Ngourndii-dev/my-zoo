package com.example.zoo.service;

import com.example.zoo.model.*;
import com.example.zoo.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AnimalTemplateService {
    private final AnimalTemplateDAO animalTemplateDAO;

    public AnimalTemplate insert(AnimalTemplate animalTemplate) {
        if (animalTemplate == null) {
            throw new IllegalArgumentException("AnimalTemplate cannot be null");
        }
        return animalTemplateDAO.insert(animalTemplate);
    }

    public List<AnimalTemplate> findAll() {
        return animalTemplateDAO.findAll();
    }

    public List<Integer> findAllId() {
        return animalTemplateDAO.findAllId();
    }

    public AnimalTemplate getById(int id) {
        return animalTemplateDAO.getById(id);
    }
}