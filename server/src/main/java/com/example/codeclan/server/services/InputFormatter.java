package com.example.codeclan.server.services;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class InputFormatter {

    public String formatInput(String input) {
        String lowerCaseInput = input.toLowerCase();

        String[] inputList = lowerCaseInput.split(",");

        ArrayList inputArrayList = new ArrayList<>();
        inputArrayList.addAll(Arrays.asList(inputList));

        String finalInput = "";
        for (int i = 0; i < inputArrayList.size(); i++) {
            if (finalInput != "") {
                finalInput = finalInput + "," + inputArrayList.get(i).toString().trim().replace(" ", "_");
            }
            else {
                finalInput = finalInput + inputArrayList.get(i).toString().trim().replace(" ", "_");;
            }
        }
        return finalInput;
    }
}
