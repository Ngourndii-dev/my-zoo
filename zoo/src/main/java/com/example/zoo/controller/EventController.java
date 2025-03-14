package com.example.zoo.controller;

import com.example.zoo.model.Event;
import com.example.zoo.service.EventService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/events")
@AllArgsConstructor
public class EventController {
    @Autowired
    private final EventService eventService;

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody Event event) {
        eventService.insert(event);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Event>> findAll() {
        List<Event> events = eventService.findAll();
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(events.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(events);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getById(@PathVariable int id) {
        Event event = eventService.getById(id);

        if (event == null) {
            return ResponseEntity.notFound().build();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", "1");
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");

        return ResponseEntity.ok().headers(headers).body(Map.of("data", event));
    }

    @PostMapping("/update")
    public ResponseEntity<Event> updateSituationDate(@RequestBody Event event) {
        Event updatedEvent = eventService.updateEvent(event);
        return new ResponseEntity<>(updatedEvent, HttpStatus.OK);
    }
}
