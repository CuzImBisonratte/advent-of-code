// Create all needed variables
var last_number = 0;
var higher = 0;

// Get the filesystem module
var fs = require('fs');

// Read the file input.txt line by line
fs.readFile('input.txt', 'utf8', function(err, data) {
    if (err) throw err;

    // Split the file into an array of lines
    var lines = data.split('\n');

    // Loop through the lines
    for (var i = 0; i < lines.length; i++) {

        // Get the current line
        var line = lines[i];

        // Convert the line to an integer
        var number = parseInt(line);

        // Check if the current number is higher than the last number
        if (number > last_number) {

            // If so, add one to the higher variable
            higher++;
        }

        // Set the last number to the current number
        last_number = number;

    }

    // Correct the higher variable
    higher--;

    // Print the result
    console.log("Gone through " + lines.length + " lines.");
    console.log("There were " + higher + " numbers higher than the last.");
});