package com.example.zoo.controller;

import com.example.zoo.model.*;
import com.example.zoo.service.*;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/operations")
@AllArgsConstructor
public class OperationController {
    private OperationService operationService;

    @PostMapping
    public Operation create(@RequestBody Operation operation) {
        return operationService.insert(operation);
    }

    @GetMapping
    public List<Operation> getAll() {
        return operationService.findAll();
    }

    @GetMapping("/{id}")
    public Operation getById(@PathVariable int id) {
        return operationService.getById(id);
    }
}
