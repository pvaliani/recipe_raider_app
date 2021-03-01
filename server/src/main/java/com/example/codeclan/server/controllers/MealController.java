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

import java.util.*;

@RestController
public class MealController {

    class LRUCache<K, V> extends LinkedHashMap<K, V> {

        private static final long serialVersionUID = 1L;
        private int lruSize;

        public LRUCache(int lruSize) {
            super(16, 0.75f, true);
            this.lruSize = lruSize;
        }

        @Override
        protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
            return size() > lruSize;
        }
    }

    private Map<String, List<JsonNode>> cache = new LRUCache<>(6);
    private Map<String, List<JsonNode>> cocktailCache = new LRUCache<>(6);

//    public MealController(Map cache, Map cocktailCache){
//        this.cache = new LRUCache<>(6);
//        this.cocktailCache = new LRUCache<>(6);
//    }
//
//    public Map<String, List<JsonNode>> getCache() {
//        return cache;
//    }
//
//    public void setCache(Map<String, List<JsonNode>> cache) {
//        this.cache = cache;
//    }
//
//    public Map<String, List<JsonNode>> getCocktailCache() {
//        return cocktailCache;
//    }
//
//
//    public void setCocktailCache(Map<String, List<JsonNode>> cocktailCache) {
//        this.cocktailCache = cocktailCache;
//    }

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

//    COCKTAILS START HERE!
    @GetMapping (value="/api/cocktails/{ingredients}")
    public List<JsonNode> getCocktailsFromApi(@PathVariable String ingredients) {

        if(cocktailCache.containsKey(ingredients) == true) {
            return cocktailCache.get(ingredients);
        }

        JsonNode foundCocktails = mealAPI.getCocktails(ingredients);
        List<JsonNode> cocktailRecipeNodes = new ArrayList<>();

        for (JsonNode node:foundCocktails) {
            JsonNode cocktailNode = node.get("idDrink");
            int cocktailId = cocktailNode.asInt();
            cocktailRecipeNodes.add(mealAPI.getCocktail(Integer.toString(cocktailId)));
        }

        cocktailCache.put(ingredients, cocktailRecipeNodes);

        return cocktailRecipeNodes;
    }







}
