// Create the needed variables
x = 0;
y = 0;
positions_already_visited = [];

// Get the filesystem module
var fs = require('fs');

// Get the file input.txt
fs.readFile('input.txt', function(err, data) {

    // If there is an error log it
    if (err) { return console.log(err); }

    // Get the data as a string
    var data_string = data.toString();

    // Get the number of characters in the file
    var numChars = data_string.length;

    // Loop through the data
    for (var i = 0; i < numChars; i++) {

        // Get the character at the current index
        var char = data_string.charAt(i);

        // Check if the character is "<"
        if (char === "<") {

            // Decrement the x variable
            x--;
        } // Check if the character is ">"
        else if (char === ">") {

            // Increment the x variable
            x++;
        } // Check if the character is "^"
        else if (char === "^") {

            // Increment the y variable
            y++;
        } // Check if the character is "v"
        else if (char === "v") {

            // Decrement the y variable
            y--;
        }

        // Calculate Position
        var position = x + "," + y;

        // Check if the position hasn't already been visited
        if (positions_already_visited.indexOf(position) === -1) {

            // Add the position to the list of positions already visited
            positions_already_visited.push(position);
        }

    }

    // Log the number of positions visited
    console.log("Number of positions visited: " + positions_already_visited.length);
});