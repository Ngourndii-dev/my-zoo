package com.example.zoo.repository;
import com.example.zoo.model.Client;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
 

@Repository
@AllArgsConstructor
public class ClientDAO {
    @Autowired
    private Connection connection;
    public Client insert(Client client){
        try {
            String query = "INSERT INTO client (client_name,phone_number,email) VALUES (?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, client.getClientName());
            statement.setString(2, client.getPhoneNumber());
            statement.setString(3, client.getEmail());
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return client;
    }
    public List<Client> findAll() {
        List<Client> clientList = new ArrayList<>();
        try {
            String query = "SELECT * FROM client";
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                Client client = new Client(
                        resultSet.getInt("id"),
                        resultSet.getString("client_name"),
                        resultSet.getString("phone_number"),
                        resultSet.getString("email")
                );
                clientList.add(client);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return clientList;
    }
    public Client getById(int id) {
        Client client = new Client();
        try {
            String query = "SELECT * FROM client WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                client.setId(resultSet.getInt("id"));
                client.setClientName(resultSet.getString("client_name"));
                client.setPhoneNumber(resultSet.getString("phone_number"));
                client.setEmail(resultSet.getString("email"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return client;
    }
}
