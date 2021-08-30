package com.example.codeclan.server.models;

import java.util.ArrayList;

public class Meal {
    private String strMeal;
    private String strMealThumb;
    private String idMeal;
    private ArrayList<String> ingredients;
    private ArrayList<String> measures;

    public ArrayList<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(ArrayList<String> ingredients) {
        this.ingredients = ingredients;
    }

    public ArrayList<String> getMeasures() {
        return measures;
    }

    public void setMeasures(ArrayList<String> measures) {
        this.measures = measures;
    }

    public Meal(String strMeal, String strMealThumb, String idMeal, ArrayList<String> ingredients, ArrayList<String> measures) {
        this.strMeal = strMeal;
        this.strMealThumb = strMealThumb;
        this.idMeal = idMeal;
        this.ingredients = ingredients;
        this.measures = measures;
    }

    public Meal() {
    }

    public String getStrMeal() {
        return strMeal;
    }

    public void setStrMeal(String strMeal) {
        this.strMeal = strMeal;
    }

    public String getStrMealThumb() {
        return strMealThumb;
    }

    public void setStrMealThumb(String strMealThumb) {
        this.strMealThumb = strMealThumb;
    }

    public String getIdMeal() {
        return idMeal;
    }

    public void setIdMeal(String idMeal) {
        this.idMeal = idMeal;
    }
}
