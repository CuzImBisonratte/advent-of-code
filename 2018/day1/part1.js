// Create all needed variables
var frequency = 0;

// Get the filesystem module
var fs = require('fs');

// Read the file input.txt
fs.readFile('input.txt', function(err, data) {

    // If there is an error log it
    if (err) { return console.log(err); }

    // Get the number of lines in the file
    var numLines = data.toString().split('\n').length;

    // Loop through the lines
    for (var i = 0; i < numLines; i++) {

        // Get the current line
        var currentLine = data.toString().split('\n')[i];

        // Check if the line starts with "+" or "-"
        if (currentLine.charAt(0) === "+") {

            // Remove the "+" from the line
            currentLine = currentLine.substring(1);

            // Add the number to the frequency variable
            frequency += parseInt(currentLine);

        } else if (currentLine.charAt(0) === "-") {

            // Remove the "-" from the line
            currentLine = currentLine.substring(1);

            // Subtract the number from the frequency variable
            frequency -= parseInt(currentLine);

        }
    }

    // Log the frequency variable
    console.log("The frequency (answer) is " + frequency);

});