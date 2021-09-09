package com.example.codeclan.server;

import com.example.codeclan.server.apis.MealAPI;
import com.example.codeclan.server.models.MealRecipePayload;
import com.example.codeclan.server.services.MealConverter;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class MealConverterTest {
    @Autowired
    MealAPI mealAPI;

    @Test
    public void canConvertJsonNodeToMealPayload() throws IOException {
        JsonNode meal = mealAPI.getRecipe("52772");
        MealConverter mealConverter = new MealConverter();
        MealRecipePayload result = mealConverter.convertMealJsonNodeToRecipePayload(meal);
        assertTrue(result instanceof MealRecipePayload);
    }
}
