package com.example.zoo.controller;

import com.example.zoo.model.Event;
import com.example.zoo.model.Operation;
import com.example.zoo.service.OperationService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/operations")
@AllArgsConstructor
public class OperationController {
    private static final Logger logger = LoggerFactory.getLogger(OperationController.class);
    @Autowired
    private final OperationService operationService;

    @PostMapping
    public ResponseEntity<Operation> create(@RequestBody Operation operation) {
        Operation  createOperation=operationService.insert(operation);
        return new ResponseEntity<>(createOperation, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Operation>> findAll() {
        List<Operation> operations = operationService.findAll();
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(operations.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(operations);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Operation> getById(@PathVariable int id) {
        Operation operation = operationService.getById(id);
        if (operation == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(operation);
    }
}
