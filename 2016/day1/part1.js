// Create the needed variables
var x = 0;
var y = 0;
var direction = "north";

// Get needed modules
const fs = require('fs');

// Read the file input.txt
fs.readFile('input.txt', function(err, data) {

    // If there is an error log it
    if (err) { return console.log(err); }

    // Split the input into an array at commas
    var input = data.toString().split(', ');

    // Loop through the array
    for (var i = 0; i < input.length; i++) {

        // Get the current instruction
        var instruction = input[i];

        // Get the direction
        var turn = instruction.substring(0, 1);

        // Get the distance
        var distance = parseInt(instruction.substring(1));

        // If the direction is left
        if (turn == "L") {

            switch (direction) {

                // If the direction is north
                case "north":
                    direction = "west";
                    break;

                    // If the direction is west
                case "west":
                    direction = "south";
                    break;

                    // If the direction is south
                case "south":
                    direction = "east";
                    break;

                    // If the direction is east
                case "east":
                    direction = "north";
                    break;
            }
        } else if (turn == "R") {

            switch (direction) {

                // If the direction is north
                case "north":
                    direction = "east";
                    break;

                    // If the direction is west
                case "west":
                    direction = "north";
                    break;

                    // If the direction is south
                case "south":
                    direction = "west";
                    break;

                    // If the direction is east
                case "east":
                    direction = "south";
                    break;
            }
        }

        // Add the distance to the x or y depending on the direction   
        // If the direction is north x+
        // If the direction is east y+
        // If the direction is south x-
        // If the direction is west y-

        switch (direction) {

            // If the direction is north
            case "north":

                // Add the distance to the x
                x += distance;
                break;

                // If the direction is east

            case "east":


                // Add the distance to the y
                y += distance;
                break;

                // If the direction is south
            case "south":

                // Subtract the distance from the x
                x -= distance;

                break;

                // If the direction is west

            case "west":

                // Subtract the distance from the y
                y -= distance;

                break;

        }

    }

    // Log the distance from the origin
    console.log(Math.abs(x) + Math.abs(y));

});