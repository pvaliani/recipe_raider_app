package com.example.codeclan.server.apis;


import com.example.codeclan.server.models.Meal;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.tools.javac.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

//
@Component
public class MealAPI {
    @Value("${api.key}")
   String apiKey;

//
//List<Meal>
    public JsonNode getMeals(String ingredients) {

        String url = "https://themealdb.com/api/json/v2/" + apiKey +"/filter.php?i=" + ingredients;
        System.out.println(url);
        RestTemplate restTemplate = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

//        represents node we are dealing with
        JsonNode root = null;

//      error checking from the fetch

        try {
           root = mapper.readTree(response.getBody());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

//       We are looking down the data structure tree

        JsonNode node = root.get(0);

//       mealsNode is the list of meals in an array

//        replaced "meals" with 1
        JsonNode mealsNode = root.get("meals");

        System.out.println(mealsNode);

//        return a list of meal objects

        return mealsNode;

    }


    //        get recipeMethod will accept the mealId from above and then call the secondAPI
//    then the recipe object will be passed back


}
