package com.example.back.service;

import com.example.back.model.Operation;
import com.example.back.repository.OperationDAO;
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
