package com.example.zoo.repository;
import com.example.zoo.model.Event;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.sql.Date;
import java.util.List;
 

@Repository
@AllArgsConstructor

public class EventDAO {
    @Autowired
    private Connection connection;
    private AnimalDAO animalDAO;
    public Event insert(Event event){
        try {
            String query = "INSERT INTO event(id_animal,image,situation_date,description_event) VALUES (?,?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(2, event.getAnimal().getId());
            statement.setString(3, event.getImage());
            statement.setDate(4, event.getSituationDate());
            statement.setString(5, event.getDescriptionEvent());
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return event;
    }
    public List<Event> findAll() {
        List<Event> eventList = new ArrayList<>();
        try {
            String query = "SELECT * FROM event";
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery();

            while (resultSet.next()) {
                Event event = new Event();
                event.setId(resultSet.getInt("id"));
                event.setAnimal(animalDAO.getById(resultSet.getInt("id_animal")));
                event.setImage(resultSet.getString("image"));
                event.setSituationDate(resultSet.getDate("situation_date"));
                event.setDescriptionEvent(resultSet.getString("image_url"));
                eventList.add(event);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return eventList;
    }

    public Event getById(int id) {
        Event event = null;
        try {
            String query = "SELECT * FROM event WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                event = new Event();
                event.setId(resultSet.getInt("id"));
                event.setAnimal(animalDAO.getById(resultSet.getInt("id_animal")));
                event.setImage(resultSet.getString("image"));
                event.setSituationDate(resultSet.getDate("situation_date"));
                event.setDescriptionEvent(resultSet.getString("image_url"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return event;
    }

    public Event updateSituationDate(int id, Date date) {
        Event event = getById(id);
        if (event != null) {
            try {
                String query = "UPDATE event SET situation_date = ? WHERE id = ?";
                PreparedStatement statement = connection.prepareStatement(query);
                statement.setDate(1, (java.sql.Date) date);
                statement.setInt(2, id);
                statement.executeUpdate();

                event.setSituationDate(date);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return event;
    }
}
