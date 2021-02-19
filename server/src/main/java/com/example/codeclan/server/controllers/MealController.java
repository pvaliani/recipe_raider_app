package com.example.codeclan.server.controllers;


import com.example.codeclan.server.apis.MealAPI;
import com.example.codeclan.server.models.Meal;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
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

//  This getMapping will get the meal by ingredients - when we run the app locally
//  we can go to the browser and request localhost:3000/api/meals/whateverIngredients
//   then we should be able to return the db result from this path

    @GetMapping (value="/api/meals/{ingredients}")
    public ResponseEntity<JsonNode> getMealsFromApi(@PathVariable String ingredients) {
        JsonNode foundMeals = mealAPI.getMeals(ingredients);
//      First task: loop over foundMeals - could use a forEach loop on JsonNode
        for (JsonNode node:foundMeals) {
            System.out.println(node.get("idMeal"));
            JsonNode recipeNode = node.get("idMeal");
            ObjectMapper mapper = new ObjectMapper();
            String recipeId = recipeNode.get("data").textValue();
            mealAPI.getRecipe(recipeId);
            System.out.println(mealAPI.getRecipe(recipeId));

        }
//      Inside the loop: grab the meal id from api
//      Inside the loop: with the mealId make a call to MealAPI.getRecipe(id)
//      Then get all of the recipes out of that and convert to Recipe objects
//      Send back/return list of recipe objects here
        return new ResponseEntity<>(foundMeals, HttpStatus.OK);
    }

//  This getMapping will get the meal by Id - when we run the app locally
//  we can go to the browser and request localhost:3000/api/meals/whateverIdweWant
//   then we should be able to return the db result from this path

    @GetMapping (value="/api/recipe/{id}")
    public ResponseEntity<JsonNode> getRecipeFromId(@PathVariable String id){
        JsonNode foundRecipe = mealAPI.getRecipe(id);
        return new ResponseEntity<>(foundRecipe, HttpStatus.OK);
    }

//    When a request with ingredients is made - api will return meals,
//    for each meal create another client call to get the rest of the recipes
//    loop over foundMeals to then make requests into the api for the recipes
//    add each foundRecipe to the list and return list as a response entity - List<Meal>



}
