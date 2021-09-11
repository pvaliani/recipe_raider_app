package com.example.codeclan.server.controllers;


import com.example.codeclan.server.apis.MealAPI;
import com.example.codeclan.server.models.MealRecipePayload;
import com.example.codeclan.server.services.Converter;
import com.example.codeclan.server.services.InputFormatter;
import com.example.codeclan.server.services.LRUCache;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class MealController {

    private Map<String, List<MealRecipePayload>> cache;
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
    public List<MealRecipePayload> getMealsFromApi(@PathVariable String ingredients) throws IOException {
        Converter converter = new Converter();
        String formattedMealIngredients = inputFormatter.formatInput(ingredients);
        if(cache.containsKey(formattedMealIngredients) == true) {
            return cache.get(formattedMealIngredients);
        }

        JsonNode foundMeals = mealAPI.getMeals(formattedMealIngredients);
        List<MealRecipePayload> mealRecipes = new ArrayList<>();

        for (JsonNode node:foundMeals) {
          JsonNode recipeNode = node.get("idMeal");
          int recipeId = recipeNode.asInt();
          mealRecipes.add(converter.convertMealJsonNodeToRecipePayload(mealAPI.getRecipe(Integer.toString(recipeId))));
        }

        if (mealRecipes.size() > 0) {
            cache.put(formattedMealIngredients, mealRecipes);
        }

        return mealRecipes;
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
