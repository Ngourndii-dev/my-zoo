package com.example.zoo.controller;

import com.example.zoo.model.Event;
import com.example.zoo.service.EventService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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
    public ResponseEntity<Event> create(@RequestBody Event event) {
        Event event1=eventService.insert(event);
        return ResponseEntity.ok(event1);
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
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", "1");
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(Map.of("data", event));
    }

    @PutMapping("/{id}/{date}")
    public ResponseEntity<Event> updateSituationDate(@PathVariable int id, @PathVariable Date date) {
        Event updatedEvent = eventService.updateSituationDate(id, date);
        return ResponseEntity.ok(updatedEvent);
    }
}
