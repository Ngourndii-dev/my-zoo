package com.example.zoo.service;

import com.example.zoo.model.Client;
import com.example.zoo.repository.ClientDAO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ClientService {
    private ClientDAO clientDAO;

    public Client insert(Client client) {
        return clientDAO.insert(client);
    }

    public List<Client> findAll() {
        return clientDAO.findAll();
    }

    public Client getById(int id) {
        return clientDAO.getById(id);
    }
}
