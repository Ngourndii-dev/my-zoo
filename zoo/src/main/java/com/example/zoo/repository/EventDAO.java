package com.example.zoo.repository;
import com.example.zoo.model.Event;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
 

@Repository
@AllArgsConstructor

public class EventDAO {
    @Autowired
    private Connection connection;
    private AnimalDAO animalDAO;

    public Event insert(Event event) {
        String query = "INSERT INTO event(id_animal, image, situation_date, description_event) VALUES (?, ?, ?, ?)";

        try (PreparedStatement statement = connection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS)) {
            if (event.getAnimal() == null || event.getAnimal().getId() == 0) {
                throw new IllegalArgumentException("L'animal associé à l'événement est invalide !");
            }

            statement.setInt(1, event.getAnimal().getId());
            statement.setString(2, event.getImage());
            statement.setDate(3, Date.valueOf(event.getSituationDate()));
            statement.setString(4, event.getDescriptionEvent());

            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Insertion de l'événement échouée, aucune ligne affectée.");
            }

            // Récupérer l'ID généré
            try (ResultSet generatedKeys = statement.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    event.setId(generatedKeys.getInt(1)); // Assigne l'ID généré à l'objet Event
                } else {
                    throw new SQLException("Échec de la récupération de l'ID généré.");
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Erreur lors de l'insertion de l'événement : " + e.getMessage());
        }

        return event;
    }

    public List<Event> findAll() {
        List<Event> eventList = new ArrayList<>();
        try {
            String query = "SELECT * FROM event WHERE situation_date < NOW()";
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery();

            while (resultSet.next()) {
                Event event = new Event();
                event.setId(resultSet.getInt("id"));
                event.setAnimal(animalDAO.getById(resultSet.getInt("id_animal")));
                event.setImage(resultSet.getString("image"));
                event.setSituationDate(resultSet.getDate("situation_date").toLocalDate());
                event.setDescriptionEvent(resultSet.getString("description_event"));
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
                event.setSituationDate(resultSet.getDate("situation_date").toLocalDate());
                event.setDescriptionEvent(resultSet.getString("description_event"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return event;
    }

    public Event updateEvent(int id, Date date) {
        Event event = getById(id);
        if (event != null) {
            try {
                String query = "UPDATE event SET situation_date = ? WHERE id = ?";
                PreparedStatement statement = connection.prepareStatement(query);
                statement.setDate(1, (java.sql.Date) date);
                statement.setInt(2, id);
                statement.executeUpdate();

                event.setSituationDate(date.toLocalDate());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return event;
    }
}
