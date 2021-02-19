package com.example.codeclan.server.repositories;

import com.example.codeclan.server.models.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecipeRepository extends MongoRepository<Recipe, String> {
}
