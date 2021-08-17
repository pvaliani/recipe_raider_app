package com.example.codeclan.server.services;

import java.util.ArrayList;
import java.util.Arrays;

public class InputFormatter {

    public String formatInput(String input) {
        String lowerCaseInput = input.toLowerCase();

        String[] inputList = lowerCaseInput.split(",");

        ArrayList inputArrayList = new ArrayList<>();
        inputArrayList.addAll(Arrays.asList(inputList));

        String finalInput = "";
        for (int i = 0; i < inputArrayList.size(); i++) {
            finalInput += formatIndividualWord(inputArrayList.get(i));
            if (i < inputArrayList.size() - 1){
                finalInput += ",";
            }
        }
        return finalInput;
    }

    private String formatIndividualWord(Object word) {
        return word.toString().trim().replace(" ", "_");
    }
}
