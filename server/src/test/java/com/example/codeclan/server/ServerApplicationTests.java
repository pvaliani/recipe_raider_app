package com.example.codeclan.server;

import com.example.codeclan.server.apis.MealAPI;
import com.example.codeclan.server.services.LRUCache;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ServerApplicationTests {

	@Autowired
	MealAPI mealAPI;

	@Value("${api.key}")
	String apiKey;

	Map<String,String> testCache = new LRUCache<>(5);

	@Test
	void contextLoads() {
	}

	@Test
	public void canCallApi(){
		mealAPI.getMeals("chicken");
		mealAPI.getRecipe("52772");
	}

	@Test
	public void cacheOnlyRetainsFiveItems() {
		testCache.put("Laura", "Seal");
		testCache.put("Robert", "Duck");
		testCache.put("Alan", "Beaver");
		testCache.put("Sarah", "Otter");
		testCache.put("Jenny", "Puffin");
		testCache.put("Anna", "Owl");
		assertEquals(5, testCache.size());
		assertFalse(testCache.containsKey("Laura"));

	}

	@Test
	public void canGetAPIKey() {
		System.out.println(apiKey);
	}
}
