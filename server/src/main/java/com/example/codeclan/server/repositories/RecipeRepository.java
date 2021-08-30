package com.example.codeclan.server.repositories;

import com.example.codeclan.server.models.MealRecipePayload;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecipeRepository extends MongoRepository<MealRecipePayload, String> {
}
