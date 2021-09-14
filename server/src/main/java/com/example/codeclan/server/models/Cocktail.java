package com.example.codeclan.server.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cocktail {

    private String strDrink;
    private String strDrinkThumb;
    private String idDrink;
    private String strInstructions;
    private String strCategory;
    private String strDrinkAlcoholic;
    private ArrayList<String> ingredients;
    private ArrayList<String> measures;
}
