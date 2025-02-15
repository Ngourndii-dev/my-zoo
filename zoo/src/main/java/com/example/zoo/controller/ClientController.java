package com.example.zoo.controller;

import com.example.zoo.model.*;
import com.example.zoo.service.*;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
@AllArgsConstructor
public class ClientController {
    private ClientService clientService;

    @PostMapping
    public Client create(@RequestBody Client client) {
        return clientService.insert(client);
    }

    @GetMapping
    public List<Client> getAll() {
        return clientService.findAll();
    }

    @GetMapping("/{id}")
    public Client getById(@PathVariable int id) {
        return clientService.getById(id);
    }
}
