package com.example.zoo.repository;

import com.example.zoo.model.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository
@AllArgsConstructor
public class AnimalTemplateDAO {
    private final Connection connection;

    public AnimalTemplate insert(AnimalTemplate animalTemplate) {
        String query = "INSERT INTO animal_template (name, species, image_url) VALUES (?, ?, ?) RETURNING *";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, animalTemplate.getName());
            statement.setString(2, animalTemplate.getSpecies());
            statement.setString(3, animalTemplate.getImageUrl());
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                return new AnimalTemplate(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("species"),
                        rs.getString("image_url")
                );
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error inserting animal template", e);
        }
        return null;
    }

    public List<AnimalTemplate> findAll() {
        List<AnimalTemplate> animalTemplateList = new ArrayList<>();
        String query = "SELECT * FROM animal_template";
        try (PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                animalTemplateList.add(new AnimalTemplate(
                        resultSet.getInt("id"),
                        resultSet.getString("name"),
                        resultSet.getString("species"),
                        resultSet.getString("image_url")
                ));
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error fetching all animal templates", e);
        }
        return animalTemplateList;
    }

    public List<Integer> findAllId() {
        List<Integer> idList = new ArrayList<>();
        String query = "SELECT id FROM animal_template";
        try (PreparedStatement stmt = connection.prepareStatement(query);
             ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                idList.add(rs.getInt("id"));
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error fetching animal template IDs", e);
        }
        return idList;
    }

    public AnimalTemplate getById(int id) {
        String query = "SELECT * FROM animal_template WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                return new AnimalTemplate(
                        resultSet.getInt("id"),
                        resultSet.getString("name"),
                        resultSet.getString("species"),
                        resultSet.getString("image_url")
                );
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error fetching animal template by ID", e);
        }
        return null;
    }
}