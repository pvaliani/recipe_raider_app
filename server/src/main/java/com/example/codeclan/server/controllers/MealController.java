package com.example.codeclan.server.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Autowired
MealAPI mealAPI;

public class MealController {

    @GetMapping (value="/api/meals/{ingredients}")
    public ResponseEntity<Object> getMealsFromApi(@PathVariable String ingredients) {
        return new ResponseEntity<>(getMealsFromApi(ingredients), HttpStatus.OK);
    }
}
