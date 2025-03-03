package com.example.zoo.repository;
import com.example.zoo.model.*;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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
    @Autowired
    private Connection connection;
    public AnimalTemplate insert(AnimalTemplate animalTemplate){
        try {
            String query = "INSERT INTO animal_template (name,species,image_url) VALUES (?,?, ?)";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1,animalTemplate.getName());
            statement.setString(2, animalTemplate.getSpecies());
            statement.setString(3, animalTemplate.getImageUrl());
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return animalTemplate;
    }
    public List<AnimalTemplate> findAll() {
        List<AnimalTemplate> animalTemplateList = new ArrayList<>();
        try {
            String query = "SELECT * FROM animal_template";
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                AnimalTemplate animalTemplate = new AnimalTemplate(
                        resultSet.getInt("id"),
                        resultSet.getString("name"),
                        resultSet.getString("species"),
                        resultSet.getString("image_url")
                );
                animalTemplateList.add(animalTemplate);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return animalTemplateList;
    }
    public AnimalTemplate getById(int id) {
        AnimalTemplate animalTemplate = new AnimalTemplate();
        try {
            String query = "SELECT * FROM animal_template WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                animalTemplate.setId(resultSet.getInt("id"));
                animalTemplate.setName(resultSet.getString("name"));
                animalTemplate.setSpecies(resultSet.getString("species"));
                animalTemplate.setImageUrl(resultSet.getString("image_url"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return animalTemplate;
    }
    public void delete(int id) {
        String query = "DELETE FROM animal_template WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, id);
            int rows = statement.executeUpdate();
            if (rows > 0) {
                System.out.println("Deletion successful.");
            }
        } catch (SQLException e) {
            System.err.println("Error during deletion: " + e.getMessage());
        }
    }
}



