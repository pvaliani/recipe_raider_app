package com.example.codeclan.server.controllers;


import com.example.codeclan.server.apis.MealAPI;
import com.example.codeclan.server.models.Cocktail;
import com.example.codeclan.server.models.CocktailRecipePayload;
import com.example.codeclan.server.models.Meal;
import com.example.codeclan.server.models.MealRecipePayload;
import com.example.codeclan.server.services.Converter;
import com.example.codeclan.server.services.InputFormatter;
import com.example.codeclan.server.services.LRUCache;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class MealController {

    private Map<String, List<Meal>> cache;
    private Map<String, List<Cocktail>> cocktailCache;
    private InputFormatter inputFormatter;
    private Converter converter;

    public MealController() {
        this.cache = new LRUCache<>(6);
        this.cocktailCache = new LRUCache<>(6);
        this.inputFormatter = new InputFormatter();
        this.converter = new Converter();
    }

    @Autowired
    MealAPI mealAPI;

//  This getMapping will get the meal by ingredients - when we run the app locally
//  we can go to the browser and request localhost:3000/api/meals/whateverIngredients
//   then we should be able to return the db result from this path


    @GetMapping (value="/api/meals/{ingredients}")
    public ResponseEntity<List<Meal>> getMealsFromApi(@PathVariable String ingredients) throws IOException, NoSuchFieldException, IllegalAccessException {
        String formattedMealIngredients = inputFormatter.formatInput(ingredients);
        if(cache.containsKey(formattedMealIngredients) == true) {
            List<Meal> mealsToReturn = cache.get(formattedMealIngredients);
            return new ResponseEntity<>(mealsToReturn, HttpStatus.OK);
        }

        JsonNode foundMeals = mealAPI.getMeals(formattedMealIngredients);
        ArrayList<Meal> formattedMeals = new ArrayList<>();

        for (JsonNode node:foundMeals) {
          JsonNode recipeNode = node.get("idMeal");
          int recipeId = recipeNode.asInt();
          MealRecipePayload mealToConvert = converter.convertMealJsonNodeToRecipePayload(mealAPI.getRecipe(Integer.toString(recipeId)));
          Meal mealToAdd = converter.convertIndividualMealRecipePayloadToMeal(mealToConvert);
          formattedMeals.add(mealToAdd);
        }

        if (formattedMeals.size() > 0) {
            cache.put(formattedMealIngredients, formattedMeals);
        }

        return new ResponseEntity<>(formattedMeals, HttpStatus.OK);
    }

//    COCKTAILS START HERE!
    @GetMapping (value="/api/cocktails/{ingredients}")
    public ResponseEntity<List<Cocktail>> getCocktailsFromApi(@PathVariable String ingredients) throws IOException, NoSuchFieldException, IllegalAccessException {
        String formattedCocktailIngredients = inputFormatter.formatInput(ingredients);
        if(cocktailCache.containsKey(formattedCocktailIngredients) == true) {
            List<Cocktail> cocktailsToReturn = cocktailCache.get(formattedCocktailIngredients);
            return new ResponseEntity<>(cocktailsToReturn, HttpStatus.OK);
        }

        JsonNode foundCocktails = mealAPI.getCocktails(formattedCocktailIngredients);
        List<CocktailRecipePayload> cocktailRecipes = new ArrayList<>();
        List<Cocktail> formattedCocktailRecipes = new ArrayList<>();

        for (JsonNode node:foundCocktails) {
            JsonNode cocktailNode = node.get("idDrink");
            int cocktailId = cocktailNode.asInt();
            CocktailRecipePayload cocktailToConvert = converter.convertJsonNodeToCocktailRecipePayload(mealAPI.getCocktail(Integer.toString(cocktailId)));
            Cocktail cocktailToAdd = converter.convertIndividualCocktailRecipePayloadToCocktail(cocktailToConvert);
            formattedCocktailRecipes.add(cocktailToAdd);
        }

        if (cocktailRecipes.size() > 0) {
            cocktailCache.put(formattedCocktailIngredients, formattedCocktailRecipes);
        }

        return new ResponseEntity<>(formattedCocktailRecipes, HttpStatus.OK);
    }
}
