package com.example.codeclan.server;

import com.example.codeclan.server.services.InputFormatter;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class InputFormatterTest {

    @Test
    public void canFormatText() {
        InputFormatter inputFormatter = new InputFormatter();
        String formattedInput = inputFormatter.formatInput("Chicken, Cheese, Beef");
        String formattedInput2 = inputFormatter.formatInput("Chicken livers, Tomato sauce, Strawberry sauce");
        assertEquals("chicken,cheese,beef", formattedInput);
        assertEquals("chicken_livers,tomato_sauce,strawberry_sauce", formattedInput2);
    }
}
