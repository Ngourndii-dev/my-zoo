package com.example.zoo.service;

import com.example.zoo.model.*;
import com.example.zoo.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OperationService {
    private OperationDAO operationDAO;

    public Operation insert(Operation operation) {
        return operationDAO.insert(operation);
    }

    public List<Operation> findAll() {
        return operationDAO.findAll();
    }

    public Operation getById(int id) {
        return operationDAO.getById(id);
    }
}
