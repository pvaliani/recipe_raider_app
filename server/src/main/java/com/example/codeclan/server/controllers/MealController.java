package com.example.codeclan.server.controllers;


import com.example.codeclan.server.apis.MealAPI;
import com.example.codeclan.server.models.Meal;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
public class MealController {

    private HashMap<String, List<JsonNode>> cache;

    public MealController(HashMap cache){
        this.cache = new HashMap<>();
    }

    public HashMap<String, List<JsonNode>> getCache() {
        return cache;
    }

    public void setCache(HashMap<String, List<JsonNode>> cache) {
        this.cache = cache;
    }

    @Autowired
    MealAPI mealAPI;

//  This getMapping will get the meal by ingredients - when we run the app locally
//  we can go to the browser and request localhost:3000/api/meals/whateverIngredients
//   then we should be able to return the db result from this path


    @GetMapping (value="/api/meals/{ingredients}")
    public List<JsonNode> getMealsFromApi(@PathVariable String ingredients) {

        if(cache.containsKey(ingredients) == true) {
            return cache.get(ingredients);
        }

        JsonNode foundMeals = mealAPI.getMeals(ingredients);
        List<JsonNode> recipeNodes = new ArrayList<>();

        for (JsonNode node:foundMeals) {
          JsonNode recipeNode = node.get("idMeal");
          int recipeId = recipeNode.asInt();
          recipeNodes.add(mealAPI.getRecipe(Integer.toString(recipeId)));
        }

        cache.put(ingredients, recipeNodes);

        return recipeNodes;
    }

//    this is the cache version
    // Hola!


//    investigate flatmap and var args
//    hashmap class for Json first fetch

}
