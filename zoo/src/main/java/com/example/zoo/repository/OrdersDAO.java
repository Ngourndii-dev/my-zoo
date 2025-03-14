package com.example.zoo.repository;
import com.example.zoo.model.Orders;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
 

@Repository
@AllArgsConstructor
public class OrdersDAO {
    @Autowired
    private Connection connection;
    private AnimalDAO animalDAO;
    private ClientDAO clientDAO;
    public Orders insert(Orders orders) {
        try {
            String query = "INSERT INTO orders (order_date, status, quantity, id_client, id_animal) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(query, PreparedStatement.RETURN_GENERATED_KEYS);
            statement.setDate(1, orders.getOrderDate());
            statement.setString(2, orders.getStatus());
            statement.setInt(3, orders.getQuantity());
            statement.setInt(4, orders.getClient().getId());
            statement.setInt(5, orders.getAnimal().getId());
            statement.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return orders;
    }

    public List<Orders> findAll() {
        List<Orders> ordersList = new ArrayList<>();
        try {
            String query = "SELECT * FROM orders";
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                Orders order = new Orders();
                order.setId(resultSet.getInt("id"));
                order.setOrderDate(resultSet.getDate("order_date"));
                order.setStatus(resultSet.getString("status"));
                order.setQuantity(resultSet.getInt("quantity"));
                order.setClient(clientDAO.getById(resultSet.getInt("id_client")));
                order.setAnimal(animalDAO.getById(resultSet.getInt("id_animal")));
                ordersList.add(order);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ordersList;
    }

    public Orders getById(int id) {
        Orders order = null;
        try {
            String query = "SELECT * FROM orders WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                order = new Orders();
                order.setId(resultSet.getInt("id"));
                order.setOrderDate(resultSet.getDate("order_date"));
                order.setStatus(resultSet.getString("status"));
                order.setQuantity(resultSet.getInt("quantity"));
                order.setClient(clientDAO.getById(resultSet.getInt("id_client")));
                order.setAnimal(animalDAO.getById(resultSet.getInt("id_animal")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return order;
    }

    public Orders updateStatus(int id, String status, Date date) {
        Orders order = getById(id);
        if (order != null) {
            try {
                String query = "UPDATE orders SET status = ? , order_date = ? WHERE id = ?";
                PreparedStatement statement = connection.prepareStatement(query);
                statement.setString(1, status);
                statement.setDate(2, (java.sql.Date) date);
                statement.setInt(3,id);
                statement.executeUpdate();
                order.setStatus(status);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return order;
    }
}
