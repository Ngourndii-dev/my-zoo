package com.example.back.controller;

import com.example.back.model.Event;
import com.example.back.service.EventService;
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
