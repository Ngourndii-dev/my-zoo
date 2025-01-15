package com.example.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan("com.example.springbootexam")
public class ZooApplication{
    public static void main(String[] args) {
        SpringApplication.run(ZooApplication.class, args);
    }
}
