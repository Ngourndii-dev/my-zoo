package com.example.back.repository;
import com.example.back.model.Animal;
import com.example.back.model.Operation;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;


@Repository
@AllArgsConstructor
public class OperationDAO {
    private Connection connection;
    private AnimalDAO animalDAO;
    public Operation insert(Operation operation) {
            try {
                String query = "INSERT INTO operation (price, id_animal, operation_date, operation_type) VALUES (?, ?, ?, ?)";
                PreparedStatement statement = connection.prepareStatement(query);
                statement.setFloat(1, operation.getPrice());
                statement.setInt(2, operation.getAnimal().getId());
                statement.setDate(3, (Date) operation.getOperationDate());
                statement.setString(4, operation.getOperationType());
                statement.executeUpdate();
            } catch (Exception e) {
                e.printStackTrace();
            }
            return operation;
        }

    public List<Operation> findAll() {
            List<Operation> operationList = new ArrayList<>();
            try {
                String query = "SELECT * FROM operation";
                PreparedStatement statement = connection.prepareStatement(query);
                ResultSet rs = statement.executeQuery();
                while (rs.next()) {
                    Operation operation = new Operation(
                            rs.getInt("id"),
                            rs.getFloat("price"),
                            rs.getObject("id_animal",Animal.class),
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

