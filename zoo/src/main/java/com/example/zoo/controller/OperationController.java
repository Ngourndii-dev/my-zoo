package com.example.zoo.controller;

import com.example.zoo.model.Operation;
import com.example.zoo.service.OperationService;
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
@RequestMapping("/operations")
@AllArgsConstructor
public class OperationController {
    @Autowired
    private final OperationService operationService;

    @PostMapping
    public ResponseEntity<Operation> create(@RequestBody Operation operation) {
        Operation operation1=operationService.insert(operation);
        return ResponseEntity.ok(operation1);
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
    public ResponseEntity<Map<String, Object>> getById(@PathVariable int id) {
        Operation operation = operationService.getById(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", "1");
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(Map.of("data",operation));
    }

}
