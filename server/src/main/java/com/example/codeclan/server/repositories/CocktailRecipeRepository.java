package com.example.codeclan.server.repositories;

import com.example.codeclan.server.models.CocktailRecipePayload;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CocktailRecipeRepository extends MongoRepository <CocktailRecipePayload, String> {
}
