package com.example.zoo.controller;

import com.example.zoo.model.*;
import com.example.zoo.service.*;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events")
@AllArgsConstructor
public class EventController {
    private EventService eventService;

    @PostMapping
    public Event create(@RequestBody Event event) {
        return eventService.insert(event);
    }

    @GetMapping
    public List<Event> getAll() {
        return eventService.findAll();
    }

    @GetMapping("/{id}")
    public Event getById(@PathVariable int id) {
        return eventService.getById(id);
    }
}
