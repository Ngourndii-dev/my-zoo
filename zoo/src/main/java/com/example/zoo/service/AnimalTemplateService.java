package com.example.zoo.service;

import com.example.zoo.model.*;
import com.example.zoo.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AnimalTemplateService {
    @Autowired
    private AnimalTemplateDAO animalTemplateDAO;

    public AnimalTemplate insert(AnimalTemplate animalTemplate) {
        return animalTemplateDAO.insert(animalTemplate);
    }

    public List<AnimalTemplate> findAll() {
        return animalTemplateDAO.findAll();
    }

    public AnimalTemplate getById(int id) {
        return animalTemplateDAO.getById(id);
    }
}
