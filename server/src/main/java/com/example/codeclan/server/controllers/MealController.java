package com.example.codeclan.server.controllers;


import com.example.codeclan.server.apis.MealAPI;
import com.example.codeclan.server.models.Meal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MealController {

    @Autowired
    MealAPI mealAPI;

//    @GetMapping (value="/api/meals/{ingredients}")
//    public ResponseEntity<Object> getMealsFromApi(@PathVariable String ingredients) {
//        Meal[] foundMeals = mealAPI.getMeals(ingredients);
//        return new ResponseEntity<>(foundMeals, HttpStatus.OK);
//    }

//    When a request with ingredients is made - api will return meals,
//    for each meal create another client call to get the rest of the recipes
//    loop over foundMeals to then make requests into the api for the recipes
//    add each foundRecipe to the list and return list as a response entity - List<Meal>



}
