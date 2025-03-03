package com.example.zoo.controller;
import com.example.zoo.model.Orders;
import com.example.zoo.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/orders")
@AllArgsConstructor
public class OrderController {
    private final OrderService ordersService;
    @PostMapping
    public ResponseEntity<Orders> create(@RequestBody Orders orders) {
        Orders orders1=ordersService.create(orders);
        return ResponseEntity.ok(orders1);
    }
    @GetMapping
    public ResponseEntity<List<Orders>> findAll() {
        List<Orders> orders = ordersService.findAll();
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", String.valueOf(orders.size()));
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(orders);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getById(@PathVariable int id) {
        Orders order = ordersService.getById(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", "1");
        headers.add("Access-Control-Expose-Headers", "X-Total-Count");
        return ResponseEntity.ok().headers(headers).body(Map.of("data", order));
    }

    @PutMapping("/{id}/date/{date}")
    public ResponseEntity<Orders> updateOrderDate(@PathVariable int id, @PathVariable Date date) {
        Orders updatedOrder = ordersService.updateOrderDate(id, date);
        return ResponseEntity.ok(updatedOrder);
    }

    @PutMapping("/{id}/status/{status}")
    public ResponseEntity<Orders> updateStatus(@PathVariable int id, @PathVariable String status) {
        Orders updatedOrder = ordersService.updateStatus(id, status);
        return ResponseEntity.ok(updatedOrder);
    }
}
