package com.example.back.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PIng {
    @GetMapping("/ping")
    public String getPOng(){
        return "pong";
    }
}
