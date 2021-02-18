package com.example.codeclan.server.secrets;

import com.example.codeclan.server.models.Meal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MealRepository extends MongoRepository<Meal, String> {
}
