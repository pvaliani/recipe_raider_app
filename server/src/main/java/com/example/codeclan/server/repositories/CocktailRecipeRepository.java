package com.example.codeclan.server.repositories;

import com.example.codeclan.server.models.CocktailRecipe;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CocktailRecipeRepository extends MongoRepository <CocktailRecipe, String> {
}
