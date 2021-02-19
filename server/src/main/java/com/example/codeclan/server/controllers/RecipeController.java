package com.example.codeclan.server.controllers;

import com.example.codeclan.server.apis.MealAPI;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class RecipeController {

    @Autowired
    MealAPI mealAPI;


//    Recipe Get Mapper
    @GetMapping(value="/api/meals/")
    public ResponseEntity<Object> getMealsFromApi(@PathVariable String ingredients) {
        JsonNode foundMeals = mealAPI.getMeals(ingredients);
        return new ResponseEntity<>(foundMeals, HttpStatus.OK);
    }



}
