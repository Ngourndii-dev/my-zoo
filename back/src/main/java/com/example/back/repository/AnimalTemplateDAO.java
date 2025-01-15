package com.example.back.repository;
import com.example.back.model.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Repository
@AllArgsConstructor
public class AnimalTemplateDAO {
    private Connection connection;
    public AnimalTemplate insert(AnimalTemplate animalTemplate){
        try {
            String query = "INSERT INTO animal_template (name,specie) VALUES (?, ?)";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1,animalTemplate.getName());
            statement.setString(2, animalTemplate.getSpecies());
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
                        resultSet.getString("species")
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
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return animalTemplate;
    }
}



