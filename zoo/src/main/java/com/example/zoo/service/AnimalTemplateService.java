package com.example.back.service;

import com.example.back.model.AnimalTemplate;
import com.example.back.repository.AnimalTemplateDAO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AnimalTemplateService {
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
