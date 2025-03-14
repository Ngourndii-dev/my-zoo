package com.example.zoo.controller;
import com.example.zoo.model.Event;
import com.example.zoo.model.Orders;
import com.example.zoo.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<Void> create(@RequestBody Orders orders) {
        ordersService.create(orders);
        return new ResponseEntity<>(HttpStatus.OK);
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

    @PostMapping("/update")
    public ResponseEntity<Orders> updateOrderDate(@RequestBody Orders orders) {
        Orders orders1=ordersService.updateStatus(orders);
        return new ResponseEntity<>(orders1,HttpStatus.OK);
    }

}
