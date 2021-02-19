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

//The API Key config happens in the IDE and should be set locally for each developer
@Component
public class MealAPI {
    @Value("${api.key}")
    String apiKey;

// We create a getMeal fetch method which has a String called url
// storing the API path we intend to consume
//  RestTemplate is synchronous

//List<Meal>
    public JsonNode getMeals(String ingredients) {

        String url = "https://themealdb.com/api/json/v2/" + apiKey +"/filter.php?i=" + ingredients;
        System.out.println(url);
        RestTemplate restTemplate = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

//      Represents the node we are dealing with - initialised to null
        JsonNode root = null;

//      Exception handling from the fetch

        try {
           root = mapper.readTree(response.getBody());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

//       We are looking down the data structure tree - at this node we are on the { route i.e very
//       Top level of the consumed API

        JsonNode node = root.get(0);

//       mealsNode is the list of meals in an array i.e value of the meals key in the second layer

        JsonNode mealsNode = root.get("meals");

//      Printing mealsNode to confirm expected output
        System.out.println(mealsNode);

//      Return a list of meal objects

        return mealsNode;

    }


    //        get recipeMethod will accept the mealId from above and then call the secondAPI
//    then the recipe object will be passed back

//    getRecipe is fetching in the same format as the ingredient fetch - for now

    public JsonNode getRecipe(String idMeal){

        String recipeUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+idMeal;
        System.out.println(recipeUrl);
        RestTemplate restTemplate = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();

        ResponseEntity<String> response = restTemplate.getForEntity(recipeUrl, String.class);

        JsonNode root = null;

        try {
            root = mapper.readTree(response.getBody());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        JsonNode node = root.get(0);

        JsonNode mealsNode = root.get("meals");

        System.out.println(mealsNode);

        JsonNode recipeNode =  mealsNode.get(0);

        System.out.println(recipeNode);

        return recipeNode;


    }






}
