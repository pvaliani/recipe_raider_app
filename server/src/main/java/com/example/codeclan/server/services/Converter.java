package com.example.codeclan.server.services;

import com.example.codeclan.server.models.Cocktail;
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

    public Cocktail convertIndividualCocktailRecipePayloadToCocktail(CocktailRecipePayload cocktailRecipePayload) throws NoSuchFieldException, IllegalAccessException {
        ArrayList<String> ingredients = new ArrayList<>();
        ArrayList<String> measures = new ArrayList<>();

        getCocktailIngredientsAndMeasures(1, 15, ingredients, measures, cocktailRecipePayload);

        Cocktail cocktail = new Cocktail(cocktailRecipePayload.getStrDrink(), cocktailRecipePayload.getStrDrinkThumb(),
                cocktailRecipePayload.getIdDrink(), cocktailRecipePayload.getStrInstructions(), cocktailRecipePayload.getStrCategory(), cocktailRecipePayload.getStrAlcoholic(), ingredients, measures);

        return cocktail;
    }

    public List<Cocktail> convertCocktailRecipePayloadsToCocktails(List<CocktailRecipePayload> cocktailRecipePayloads) throws NoSuchFieldException, IllegalAccessException {
        ArrayList<Cocktail> cocktails = new ArrayList<>();

        for (CocktailRecipePayload cocktailRecipePayload: cocktailRecipePayloads) {
            Cocktail cocktail = convertIndividualCocktailRecipePayloadToCocktail(cocktailRecipePayload);
            cocktails.add(cocktail);
        }

        return cocktails;
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

    private String getValueFromField(CocktailRecipePayload cocktailRecipePayload, String fieldName, String numberString) throws NoSuchFieldException, IllegalAccessException {
        Field field = cocktailRecipePayload.getClass().getDeclaredField(fieldName + numberString);
        field.setAccessible(true);
        Object value = field.get(cocktailRecipePayload);
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

    private void getCocktailIngredientsAndMeasures(Integer startValue, Integer endValue, ArrayList<String> ingredientsList,
                                               ArrayList<String> measuresList, CocktailRecipePayload cocktailRecipePayload) throws NoSuchFieldException,
            IllegalAccessException {
        for (int i = startValue; i < endValue; i ++) {
            String iString = Integer.toString(i);

            String ingredientString = getValueFromField(cocktailRecipePayload, "strIngredient", iString).trim();

            if (!ingredientString.isEmpty()) {
                ingredientsList.add(ingredientString);
            }

            String measureString = getValueFromField(cocktailRecipePayload, "strMeasure", iString).trim();

            if (!measureString.isEmpty()) {
                measuresList.add(measureString);
            }
        }
    }
}