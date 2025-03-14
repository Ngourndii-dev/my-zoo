package com.example.zoo.controller;

import com.example.zoo.model.Client;
import com.example.zoo.service.ClientService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/clients")
@AllArgsConstructor
public class ClientController {
    @Autowired
    private final ClientService clientService;

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody Client client) {
        clientService.insert(client);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Client>> findAll() {
        List<Client> clients = clientService.findAll();
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(clients.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(clients);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getById(@PathVariable int id) {
        Client client = clientService.getById(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", "1");
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(Map.of("data",client));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        clientService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
