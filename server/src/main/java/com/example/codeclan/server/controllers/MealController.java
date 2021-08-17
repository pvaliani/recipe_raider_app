package com.example.codeclan.server.controllers;


import com.example.codeclan.server.apis.MealAPI;
import com.example.codeclan.server.models.Meal;
import com.example.codeclan.server.services.InputFormatter;
import com.example.codeclan.server.services.LRUCache;
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

import java.util.*;

@RestController
public class MealController {

    private Map<String, List<JsonNode>> cache;
    private Map<String, List<JsonNode>> cocktailCache;
    private InputFormatter inputFormatter;

    public MealController() {
        this.cache = new LRUCache<>(6);
        this.cocktailCache = new LRUCache<>(6);
        this.inputFormatter = new InputFormatter();
    }

    @Autowired
    MealAPI mealAPI;

//  This getMapping will get the meal by ingredients - when we run the app locally
//  we can go to the browser and request localhost:3000/api/meals/whateverIngredients
//   then we should be able to return the db result from this path


    @GetMapping (value="/api/meals/{ingredients}")
    public List<JsonNode> getMealsFromApi(@PathVariable String ingredients) {
        String formattedMealIngredients = inputFormatter.formatInput(ingredients);
        if(cache.containsKey(formattedMealIngredients) == true) {
            return cache.get(formattedMealIngredients);
        }

        JsonNode foundMeals = mealAPI.getMeals(formattedMealIngredients);
        List<JsonNode> recipeNodes = new ArrayList<>();

        for (JsonNode node:foundMeals) {
          JsonNode recipeNode = node.get("idMeal");
          int recipeId = recipeNode.asInt();
          recipeNodes.add(mealAPI.getRecipe(Integer.toString(recipeId)));
        }

        if (recipeNodes.size() > 0) {
            cache.put(formattedMealIngredients, recipeNodes);
        }

        return recipeNodes;
    }

//    COCKTAILS START HERE!
    @GetMapping (value="/api/cocktails/{ingredients}")
    public List<JsonNode> getCocktailsFromApi(@PathVariable String ingredients) {
        String formattedCocktailIngredients = inputFormatter.formatInput(ingredients);
        if(cocktailCache.containsKey(formattedCocktailIngredients) == true) {
            return cocktailCache.get(formattedCocktailIngredients);
        }

        JsonNode foundCocktails = mealAPI.getCocktails(formattedCocktailIngredients);
        List<JsonNode> cocktailRecipeNodes = new ArrayList<>();

        for (JsonNode node:foundCocktails) {
            JsonNode cocktailNode = node.get("idDrink");
            int cocktailId = cocktailNode.asInt();
            cocktailRecipeNodes.add(mealAPI.getCocktail(Integer.toString(cocktailId)));
        }

        if (cocktailRecipeNodes.size() > 0) {
            cocktailCache.put(formattedCocktailIngredients, cocktailRecipeNodes);
        }

        return cocktailRecipeNodes;
    }
}
