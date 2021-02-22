package com.example.codeclan.server.repositories;

import com.example.codeclan.server.models.Cocktail;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CocktailRepository extends MongoRepository<Cocktail, String> {
}
