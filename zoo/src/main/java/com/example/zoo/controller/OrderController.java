package com.example.back.controller;

import com.example.back.model.Orders;
import com.example.back.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@AllArgsConstructor
public class OrderController {
    private OrderService ordersService;

    @GetMapping
    public List<Orders> getAll() {
        return ordersService.findAll();
    }

    @GetMapping("/{id}")
    public Orders getById(@PathVariable int id) {
        return ordersService.getById(id);
    }
}
