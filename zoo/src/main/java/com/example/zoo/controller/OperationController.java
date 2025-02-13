package com.example.back.controller;

import com.example.back.model.Operation;
import com.example.back.service.OperationService;
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
