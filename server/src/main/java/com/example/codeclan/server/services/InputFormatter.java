package com.example.codeclan.server.services;

import java.util.Arrays;
import java.util.List;

public class InputFormatter {

    public String formatInput(String input) {
        String lowerCaseInput = input.toLowerCase();

        List<String> inputList = Arrays.asList(lowerCaseInput.split(","));

        String finalInput = "";
        for (int i = 0; i < inputList.size(); i++) {
            finalInput += formatIndividualWord(inputList.get(i));
            if (i < inputList.size() - 1){
                finalInput += ",";
            }
        }
        return finalInput;
    }

    private String formatIndividualWord(String word) {
        return word.trim().replace(" ", "_");
    }
}
