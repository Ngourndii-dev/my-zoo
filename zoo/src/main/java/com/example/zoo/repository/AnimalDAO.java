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
    private final Connection connection;
    private final AnimalTemplateDAO animalTemplateDAO;

    public Animal insert(Animal animal) {
        String query = "INSERT INTO animal (id_animal_template, sex, origin, price, rent, status, color, image_url) " +
                "VALUES (?,?,?,?,?,?,?,?) RETURNING *";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, animal.getAnimalTemplate().getId());
            statement.setString(2, animal.getSex());
            statement.setString(3, animal.getOrigin());
            statement.setFloat(4, animal.getPrice());
            statement.setFloat(5, animal.getRent());
            statement.setString(6, animal.getStatus());
            statement.setString(7, animal.getColor());
            statement.setString(8, animal.getImageUrl());

            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                animal.setId(rs.getInt("id"));
                return animal;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    public List<Animal> findAll() {
        List<Animal> animalList = new ArrayList<>();
        String query = "SELECT * FROM animal";
        try (PreparedStatement stmt = connection.prepareStatement(query);
             ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                animalList.add(buildAnimalFromResultSet(rs));
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error fetching all animals", e);
        }
        return animalList;
    }

    public Animal getById(int id) {
        String query = "SELECT * FROM animal WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, id);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                return buildAnimalFromResultSet(rs);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error fetching animal by id", e);
        }
        return null;
    }

    public Animal updateAnimal(int id, float price, String status) {
        String query = "UPDATE animal SET price = ?, status = ? WHERE id = ? RETURNING *";
        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setFloat(1, price);
            stmt.setString(2, status);
            stmt.setInt(3, id);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                return buildAnimalFromResultSet(rs);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error updating animal", e);
        }
        return null;
    }

    public void delete(int id) {
        String[] queries = {
                "DELETE FROM operations WHERE id_animal = ?",
                "DELETE FROM events WHERE id_animal = ?",
                "DELETE FROM review WHERE id_animal = ?",
                "DELETE FROM orders WHERE id_animal = ?",
                "DELETE FROM animal WHERE id = ?"
        };

        try {
            for (String query : queries) {
                try (PreparedStatement stmt = connection.prepareStatement(query)) {
                    stmt.setInt(1, id);
                    stmt.executeUpdate();
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error deleting animal", e);
        }
    }

    private Animal buildAnimalFromResultSet(ResultSet rs) throws SQLException {
        int animalTemplateId = rs.getInt("id_animal_template");
        AnimalTemplate animalTemplate = animalTemplateDAO.getById(animalTemplateId);

        return new Animal(
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
    }
}