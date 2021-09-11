package com.example.codeclan.server;

import com.example.codeclan.server.apis.MealAPI;
import com.example.codeclan.server.models.CocktailRecipePayload;
import com.example.codeclan.server.models.MealRecipePayload;
import com.example.codeclan.server.services.Converter;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class ConverterTest {
    @Autowired
    MealAPI mealAPI;

    @Test
    public void canConvertJsonNodeToMealPayload() throws IOException {
        JsonNode meal = mealAPI.getRecipe("52772");
        Converter converter = new Converter();
        MealRecipePayload result = converter.convertMealJsonNodeToRecipePayload(meal);
        assertTrue(result instanceof MealRecipePayload);
    }

    @Test public void canConvertJsonNodeToCocktailPayload() throws IOException {
        JsonNode cocktail = mealAPI.getCocktail("11007");
        Converter converter = new Converter();
        CocktailRecipePayload result = converter.convertJsonNodeToCocktailRecipePayload(cocktail);
        assertTrue(result instanceof CocktailRecipePayload);
    }
}
