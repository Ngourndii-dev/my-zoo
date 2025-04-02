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

            try (ResultSet generatedKeys = statement.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    event.setId(generatedKeys.getInt(1));
                } else {
                    throw new SQLException("Échec de la récupération de l'ID généré.");
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erreur lors de l'insertion de l'événement : " + e.getMessage());
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
                event.setSituationDate(resultSet.getDate("situation_date").toLocalDate());
                event.setDescriptionEvent(resultSet.getString("description_event"));
                eventList.add(event);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erreur lors de la récupération des événements : " + e.getMessage());
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
        } catch (SQLException e) {
            throw new RuntimeException("Erreur lors de la récupération de l'événement : " + e.getMessage());
        }
        return event;
    }

    public Event update(Event event) {
        try {
            String query = "UPDATE event SET id_animal = ?, image = ?, situation_date = ?, description_event = ? WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1, event.getAnimal().getId());
            statement.setString(2, event.getImage());
            statement.setDate(3, Date.valueOf(event.getSituationDate()));
            statement.setString(4, event.getDescriptionEvent());
            statement.setInt(5, event.getId());

            int affectedRows = statement.executeUpdate();
            if (affectedRows == 0) {
                throw new SQLException("Mise à jour de l'événement échouée");
            }
            return event;
        } catch (SQLException e) {
            throw new RuntimeException("Erreur lors de la mise à jour de l'événement : " + e.getMessage());
        }
    }

    public void delete(int id) {
        try {
            String query = "DELETE FROM event WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1, id);
            statement.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erreur lors de la suppression de l'événement : " + e.getMessage());
        }
    }
}