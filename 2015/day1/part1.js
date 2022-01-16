// Create all needed variables
var floor = 0;

// Get the filesystem module
var fs = require('fs');

// Read the file input.txt
fs.readFile('input.txt', function(err, data) {

    // If there is an error log it
    if (err) { return console.log(err); }

    // Get the number of characters in the file
    var numChars = data.toString().length;

    // Loop through the data
    for (var i = 0; i < numChars; i++) {

        // Get the character at the current index
        var char = data.toString().charAt(i);

        // Check if the character is "(""
        if (char === "(") {

            // Increment the floor variable
            floor++;

        }

        // Check if the character is ")""
        if (char === ")") {

            // Decrement the floor variable
            floor--;

        }
    }

    // Log the floor variable
    console.log("Santa is on floor " + floor);
});