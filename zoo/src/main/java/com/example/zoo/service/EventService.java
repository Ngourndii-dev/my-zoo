package com.example.zoo.service;

import com.example.zoo.model.Event;
import com.example.zoo.repository.EventDAO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EventService {
    private EventDAO eventDAO;

    public Event insert(Event event) {
        return eventDAO.insert(event);
    }

    public List<Event> findAll() {
        return eventDAO.findAll();
    }

    public Event getById(int id) {
        return eventDAO.getById(id);
    }

    public Event update(Event event) {
        return eventDAO.update(event);
    }

    public void delete(int id) {
        eventDAO.delete(id);
    }
}