package com.example.codeclan.server.models;

import java.util.ArrayList;

public class Cocktail {

    private String strDrink;
    private String strDrinkThumb;
    private String idDrink;
    private ArrayList<String> ingredients;
    private ArrayList<String> measures;

    public Cocktail(String strDrink, String strDrinkThumb, String idDrink, ArrayList<String> ingredients, ArrayList<String> measures) {
        this.strDrink = strDrink;
        this.strDrinkThumb = strDrinkThumb;
        this.idDrink = idDrink;
        this.ingredients = ingredients;
        this.measures = measures;
    }

    public Cocktail(){

    }

    public String getStrDrink() {
        return strDrink;
    }

    public void setStrDrink(String strDrink) {
        this.strDrink = strDrink;
    }

    public String getStrDrinkThumb() {
        return strDrinkThumb;
    }

    public void setStrDrinkThumb(String strDrinkThumb) {
        this.strDrinkThumb = strDrinkThumb;
    }

    public String getIdDrink() {
        return idDrink;
    }

    public void setIdDrink(String idDrink) {
        this.idDrink = idDrink;
    }


}
