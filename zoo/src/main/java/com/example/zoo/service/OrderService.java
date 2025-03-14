package com.example.zoo.service;

import com.example.zoo.model.*;
import com.example.zoo.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderService {
    private OrdersDAO ordersDAO;
    public Orders create(Orders orders){
        return ordersDAO.insert(orders);
    }
    public List<Orders> findAll() {
        return ordersDAO.findAll();
    }

    public Orders getById(int id) {
        return ordersDAO.getById(id);
    }
    public Orders updateStatus(Orders orders){
        return ordersDAO.updateStatus(orders.getId(),orders.getStatus(),orders.getOrderDate());
    }
}
