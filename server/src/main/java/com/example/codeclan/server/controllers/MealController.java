package com.example.codeclan.server.controllers;


import com.example.codeclan.server.apis.MealAPI;
import com.example.codeclan.server.models.Meal;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MealController {

    @Autowired
    MealAPI mealAPI;

//  This getMapping will get the meal by ingredients - when we run the app locally
//  we can go to the browser and request localhost:3000/api/meals/whateverIngredients
//   then we should be able to return the db result from this path

    @GetMapping (value="/api/meals/{ingredients}")
    public ResponseEntity<List<JsonNode>> getMealsFromApi(@PathVariable String ingredients) {

        JsonNode foundMeals = mealAPI.getMeals(ingredients);
        List<JsonNode> recipeNodes = new ArrayList<>();

        for (JsonNode node:foundMeals) {
          JsonNode recipeNode = node.get("idMeal");
          int recipeId = recipeNode.asInt();
          recipeNodes.add(mealAPI.getRecipe(Integer.toString(recipeId)));
        }

        return new ResponseEntity<>(recipeNodes, HttpStatus.OK);
    }

//    investigate flatmap and var args
//    hashmap class for Json first fetch

}
