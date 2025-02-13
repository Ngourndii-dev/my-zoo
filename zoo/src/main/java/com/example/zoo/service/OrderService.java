package com.example.back.service;

import com.example.back.model.Orders;
import com.example.back.repository.OrdersDAO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderService {
    private OrdersDAO ordersDAO;

    public List<Orders> findAll() {
        return ordersDAO.findAll();
    }

    public Orders getById(int id) {
        return ordersDAO.getById(id);
    }
}
