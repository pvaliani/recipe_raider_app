package com.example.codeclan.server.apis;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

//
@Component
public class MealAPI {
    @Value("${api.key}")
   String apiKey;

    public Object getMeals(String ingredients) {

        String url = "https://themealdb.com/api/json/v2/" + apiKey +"/filter.php?i=" + ingredients;
        System.out.println(url);
        RestTemplate restTemplate = new RestTemplate();
        Object meals = restTemplate.getForObject(url, Object.class);

        return meals;
    }
}
