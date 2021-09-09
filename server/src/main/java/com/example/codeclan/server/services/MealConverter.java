package com.example.codeclan.server.services;

import com.example.codeclan.server.models.Meal;
import com.example.codeclan.server.models.MealRecipePayload;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.DataInput;
import java.io.IOException;
import java.util.ArrayList;

public class MealConverter {

    public MealRecipePayload convertMealJsonNodeToRecipePayload(JsonNode mealRecipeNode) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        MealRecipePayload mealRecipePayload = mapper.convertValue(mealRecipeNode, MealRecipePayload.class);
        return mealRecipePayload;
    }

    //public ArrayList<Meal> convertMealRecipePayloadsToMeals(ArrayList<MealRecipePayload> mealRecipePayloads) {
        // 1. Create an empty Meal ArrayList
        // 2. Loop over every item in the mealRecipePayloads ArrayList
        // 3. Create ArrayLists for ingredients and measures
        // 4. Create a custom for loop starting at 1 and ending at 20
        // 5. Cast the int as String and concatenate it with ingredient? Or do I need to iterate over the object keys
        // and see whether it equals ingredient1, etc.?
        // 6. Get the ingredient - if it isn't null or an empty string, add it to the ingredients ArrayList
        // 7. Repeat steps 4-6 for measures
        // 8. Create a new meal object, getting the relevant properties from the MealRecipePayload object
        // 9. Add the Meal to the Meal ArrayList
    //}
}
