package com.example.codeclan.server;

import com.example.codeclan.server.apis.MealAPI;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ServerApplicationTests {

	@Autowired
	MealAPI mealAPI;

	@Test
	void contextLoads() {
	}

	@Test
	public void canCallApi(){
		mealAPI.getMeals("chicken");
	}

}
