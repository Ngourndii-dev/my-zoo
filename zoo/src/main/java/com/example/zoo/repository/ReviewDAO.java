package com.example.zoo.repository;

import com.example.zoo.model.*;
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
public class ReviewDAO {
    @Autowired
    private Connection connection;

    private AnimalDAO animalDAO;

    public Review insert(Review review) {
        try {
            String query = "INSERT INTO review (author, id_animal, rating, comment, status) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, review.getAuthor());
            statement.setInt(2, review.getAnimal().getId());
            statement.setInt(3, review.getRating());
            statement.setString(4, review.getComment());
            statement.setString(5, review.getStatus());
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return review;
    }

    public List<Review> findAll() {
        List<Review> reviewList = new ArrayList<>();
        try {
            String query = "SELECT * FROM review";
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                int animalId = rs.getInt("id_animal");
                Animal animal = animalDAO.getById(animalId);
                Review review = new Review(
                        rs.getInt("id"),
                        rs.getString("author"),
                        animal,
                        rs.getInt("rating"),
                        rs.getString("comment"),
                        rs.getString("status")
                );
                reviewList.add(review);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return reviewList;
    }

    public Review getById(int id) {
        Review review = null;
        try {
            String query = "SELECT * FROM review WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                review = new Review();
                review.setId(resultSet.getInt("id"));
                review.setAuthor(resultSet.getString("author"));
                review.setAnimal(animalDAO.getById(resultSet.getInt("id_animal")));
                review.setRating(resultSet.getInt("rating"));
                review.setComment(resultSet.getString("comment"));
                review.setStatus(resultSet.getString("status"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return review;
    }

}
