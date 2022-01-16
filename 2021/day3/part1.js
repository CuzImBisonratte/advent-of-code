// Create all needed variables 
var gamma = ""; // The gamma variable will represent the final binary gamma output
var epsilon = ""; // The epsilon variable will represent the final binary epsilon output
var current_0s = 0; // The current_0s variable will represent the number of 0s in the current row
var current_1s = 0; // The current_1s variable will represent the number of 1s in the current row
var rows = 0; // The line_length variable will represent the length of the first line (all lines should be the same length)
var power_consumption = 0; // The power_consumption variable will represent the total power consumption (the answer)

// Get the filesystem module
var fs = require('fs');

// Read the file input.txt line by line
fs.readFile('input.txt', 'utf8', function(err, data) {

    // Split the file into an array of lines
    var lines = data.split('\n');

    // Remove the last line
    lines.pop();

    // Get the length of the first line
    rows = lines[0].length - 1;

    // Loop through the rows
    for (var i = 0; i < rows; i++) {

        // Loop through the lines
        for (var j = 0; j < lines.length; j++) {

            // Get the current character
            var character = lines[j][i];

            // Check if the current character is a 0
            if (character == "0") {

                // Add 1 to the current_0s variable
                current_0s++;

            } // Check if the current character is a 1
            else if (character == "1") {

                // Add 1 to the current_1s variable
                current_1s++;

            } // Error output
            else {

                // Check if the current character is a newline
                if (character == "\n") {} else {

                    // Log the line number and the ascii code of the character

                    // Get the ascii code of the character
                    var ascii_code = character.charCodeAt(0);

                    // Check if the ascii code is between 32 and 126
                    if (ascii_code >= 32 && ascii_code <= 126) {
                        console.log("Error on line " + j + ": " + character);
                    } else {
                        // Do nothing, this is a line break
                    }
                }

            }

        }

        // Check if the current_0s variable is greater than the current_1s variable
        if (current_0s > current_1s) {

            // Add a 0 to the gamma variable
            gamma += "0";

            // Add 1 to the epsilon variable
            epsilon += "1";
        } // Check if the current_0s variable is less than the current_1s variable
        else if (current_0s < current_1s) {

            // Add a 1 to the gamma variable
            gamma += "1";

            // Add 1 to the epsilon variable
            epsilon += "0";
        } // Check if the current_0s variable is equal to the current_1s variable
        else {

            // ERROR
            console.log("Error: Equal number of 0s and 1s in row: " + i);

        }

        // Reset the current_0s and current_1s variables
        current_0s = 0;
        current_1s = 0;
    }

    // Convert the gamma variable to binary
    gamma_as_decimal = parseInt(gamma, 2);

    // Convert the epsilon variable to binary
    epsilon_as_decimal = parseInt(epsilon, 2);

    // Get the answer (multiply gamma (decimal) and epsilon (decimal) variables)
    power_consumption = gamma_as_decimal * epsilon_as_decimal;

    // Print the result
    console.log("Gone through " + lines.length + " lines.");
    console.log("Gone through " + rows + " rows.");
    console.log("The gamma num is " + gamma + " (Binary: " + gamma + ")).");
    console.log("The epsilon num is " + epsilon + " (Binary: " + epsilon + ")).");
    console.log("The power consumption (the answer) is " + power_consumption + ".");

});