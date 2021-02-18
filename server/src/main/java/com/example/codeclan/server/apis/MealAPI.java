package com.example.codeclan.server.apis;

import com.example.codeclan.server.secrets.Key;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class MealAPI {
    Key key;

    public Object getMeals(String ingredients) {
        key = new Key;
        String apiKey = key.getKey();
        String url = "https://themealdb.com/api/json/v2/" + apiKey +"/filter.php?i=" + ingredients;

        RestTemplate restTemplate = new RestTemplate();
        Object meals = restTemplate.getForObject(url, Object.class);

        return meals;

    }
}
