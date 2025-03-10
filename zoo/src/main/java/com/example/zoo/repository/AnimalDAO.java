package com.example.zoo.repository;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.example.zoo.model.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
 

@Repository
@AllArgsConstructor

public class AnimalDAO {
    @Autowired
    private Connection connection;
    private AnimalTemplateDAO animalTemplateDAO;
    public Animal insert(Animal animal){
        try {
            String query = "INSERT INTO animal (id_animal_template,sex,origin,price,rent,status,color,image_url) VALUES (?,?,?,?,?,?,?,?,?)";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(2, animal.getAnimalTemplate().getId());
            statement.setString(3, animal.getSex());
            statement.setString(4, animal.getOrigin());
            statement.setFloat(6, animal.getPrice());
            statement.setFloat(7, animal.getRent());
            statement.setString(8, animal.getStatus());
            statement.setString(8,animal.getColor());
            statement.setString(9, animal.getImageUrl());
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return animal;
    }
    public List<Animal> findAll() {
        List<Animal> animalList = new ArrayList<>();
        String query = "SELECT * FROM animal";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                int animalTemplateId = rs.getInt("id_animal_template");
                AnimalTemplate animalTemplate = animalTemplateDAO.getById(animalTemplateId);

                Animal animal = new Animal(
                        rs.getInt("id"),
                        animalTemplate,
                        rs.getString("sex"),
                        rs.getString("origin"),
                        rs.getFloat("price"),
                        rs.getFloat("rent"),
                        rs.getString("status"),
                        rs.getString("color"),
                        rs.getString("image_url")
                );
                animalList.add(animal);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return animalList;
    }
    public List<Animal> findAllByClient() {
        List<Animal> animalList = new ArrayList<>();
        String query = "SELECT * FROM animal where status='available'";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                int animalTemplateId = rs.getInt("id_animal_template");
                AnimalTemplate animalTemplate = animalTemplateDAO.getById(animalTemplateId);

                Animal animal = new Animal(
                        rs.getInt("id"),
                        animalTemplate,
                        rs.getString("sex"),
                        rs.getString("origin"),
                        rs.getFloat("price"),
                        rs.getFloat("rent"),
                        rs.getString("status"),
                        rs.getString("color"),
                        rs.getString("image_url")
                );
                animalList.add(animal);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return animalList;
    }
    public Animal getById(int id) {
        Animal animal = new Animal();
        try {
            String query = "SELECT * FROM animal WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                animal.setId(resultSet.getInt("id"));
                animal.setAnimalTemplate(animalTemplateDAO.getById(resultSet.getInt("id_animal_template")));
                animal.setSex(resultSet.getString("sex"));
                animal.setOrigin(resultSet.getString("origin"));
                animal.setPrice(resultSet.getFloat("price"));
                animal.setRent(resultSet.getFloat("rent"));
                animal.setStatus(resultSet.getString("status"));
                animal.setColor(resultSet.getString("color"));
                animal.setImageUrl(resultSet.getString("image_url"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return animal;
    }
    public Animal updatePrice(int id, float price) {
        String query = "UPDATE animal SET price = ? WHERE id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setFloat(1, price);
            stmt.setInt(2, id);
            int rows = stmt.executeUpdate();
            if (rows > 0) {
                return getById(id);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public Animal updateStatus(int id, String status) {
        String query = "UPDATE animal SET status = ? WHERE id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setString(1, status);
            stmt.setInt(2, id);
            int rows = stmt.executeUpdate();
            if (rows > 0) {
                return getById(id);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    public void delete(int id) {
        String query = "DELETE FROM animal WHERE id = ?";
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