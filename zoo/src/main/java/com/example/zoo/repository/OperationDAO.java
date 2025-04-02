package com.example.zoo.repository;

import com.example.zoo.model.*;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
@AllArgsConstructor
public class OperationDAO {

    @Autowired
    private Connection connection;

    private AnimalDAO animalDAO;

    public Operation insert(Operation operation) {
        if (operation == null) {
            throw new IllegalArgumentException("L'opération ne peut pas être null");
        }
        if (operation.getAnimal() == null || operation.getAnimal().getId() <= 0) {
            throw new IllegalArgumentException("L'animal associé à l'opération est invalide !");
        }
        if (operation.getOperationDate() == null) {
            throw new IllegalArgumentException("La date de l'opération est obligatoire");
        }
        if (operation.getOperationType() == null || operation.getOperationType().trim().isEmpty()) {
            throw new IllegalArgumentException("Le type d'opération est obligatoire");
        }
        if (operation.getPrice() < 0) {
            throw new IllegalArgumentException("Le prix ne peut pas être négatif");
        }

        String query = "INSERT INTO operation (price, id_animal, operation_date, operation_type) VALUES (?, ?, ?, ?)";

        try (PreparedStatement statement = connection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS)) {
            statement.setFloat(1, operation.getPrice());
            statement.setInt(2, operation.getAnimal().getId());
            statement.setDate(3, operation.getOperationDate());
            statement.setString(4, operation.getOperationType());

            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Insertion de l'opération échouée, aucune ligne affectée.");
            }

            try (ResultSet generatedKeys = statement.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    operation.setId(generatedKeys.getInt(1));
                } else {
                    throw new SQLException("Échec de la récupération de l'ID généré.");
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erreur lors de l'insertion de l'opération : " + e.getMessage(), e);
        }
        return operation;
    }
    public List<Operation> findAll() {
        List<Operation> operationList = new ArrayList<>();
        String query = "SELECT * FROM operation";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                int animalId = rs.getInt("id_animal");
                Animal animal = animalDAO.getById(animalId);
                Operation operation = new Operation(
                        rs.getInt("id"),
                        rs.getFloat("price"),
                        animal,
                        rs.getDate("operation_date"),
                        rs.getString("operation_type")
                );
                operationList.add(operation);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return operationList;
    }


    public Operation getById(int id) {
        Operation operation = null;
        try {
            String query = "SELECT * FROM operation WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                operation = new Operation();
                operation.setId(resultSet.getInt("id"));
                operation.setPrice(resultSet.getFloat("price"));
                operation.setAnimal(animalDAO.getById(resultSet.getInt("id_animal")));
                operation.setOperationDate(resultSet.getDate("operation_date"));
                operation.setOperationType(resultSet.getString("operation_type"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return operation;
    }
}
