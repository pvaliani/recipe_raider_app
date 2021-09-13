package com.example.codeclan.server.services;

import com.example.codeclan.server.models.CocktailRecipePayload;
import com.example.codeclan.server.models.Meal;
import com.example.codeclan.server.models.MealRecipePayload;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

public class Converter {

    public MealRecipePayload convertMealJsonNodeToRecipePayload(JsonNode mealRecipeNode) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        MealRecipePayload mealRecipePayload = mapper.convertValue(mealRecipeNode, MealRecipePayload.class);
        return mealRecipePayload;
    }

    public CocktailRecipePayload convertJsonNodeToCocktailRecipePayload(JsonNode cocktailRecipeNode) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        CocktailRecipePayload cocktailRecipePayload = mapper.convertValue(cocktailRecipeNode, CocktailRecipePayload.class);
        return cocktailRecipePayload;
    }

    public ArrayList<Meal> convertMealRecipePayloadsToMeals(List<MealRecipePayload> mealRecipePayloads) throws NoSuchFieldException, IllegalAccessException {
        ArrayList<Meal> meals = new ArrayList<>();
        for (MealRecipePayload mealRecipePayload: mealRecipePayloads) {
            Meal meal = convertIndividualMealRecipePayloadToMeal(mealRecipePayload);
            meals.add(meal);
        }

        return meals;
    }

    public Meal convertIndividualMealRecipePayloadToMeal(MealRecipePayload mealRecipePayload) throws NoSuchFieldException, IllegalAccessException {
        ArrayList<String> ingredients = new ArrayList<>();
        ArrayList<String> measures = new ArrayList<>();

        getMealIngredientsAndMeasures(1, 21, ingredients, measures, mealRecipePayload);

        Meal meal = new Meal(mealRecipePayload.getStrMeal(), mealRecipePayload.getStrMealThumb(), mealRecipePayload.getIdMeal(),
                mealRecipePayload.getStrArea(), mealRecipePayload.getStrInstructions(), ingredients, measures);

        return meal;
    }

    private String getValueFromField(MealRecipePayload mealRecipePayload, String fieldName, String numberString) throws NoSuchFieldException, IllegalAccessException {
        Field field = mealRecipePayload.getClass().getDeclaredField(fieldName + numberString);
        field.setAccessible(true);
        Object value = field.get(mealRecipePayload);
        String valueString = "";
        if (value != null){
            valueString = value.toString();
        }
        return valueString;
    }

    private void getMealIngredientsAndMeasures(Integer startValue, Integer endValue, ArrayList<String> ingredientsList,
                                          ArrayList<String> measuresList, MealRecipePayload mealRecipePayload) throws NoSuchFieldException,
            IllegalAccessException {
        for (int i = startValue; i < endValue; i ++) {
            String iString = Integer.toString(i);

            String ingredientString = getValueFromField(mealRecipePayload, "strIngredient", iString).trim();

            if (!ingredientString.isEmpty()) {
                ingredientsList.add(ingredientString);
            }

            String measureString = getValueFromField(mealRecipePayload, "strMeasure", iString).trim();

            if (!measureString.isEmpty()) {
                measuresList.add(measureString);
            }
        }
    }
}