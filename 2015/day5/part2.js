// Create all needed variables
var niceones = 0;

// Get the fs module
var fs = require('fs');

// Read the file input.txt
fs.readFile('input.txt', function(err, data) {

    // If there is an error log it
    if (err) { return console.log(err); }

    // Turn the data into a array
    var dataArray = data.toString().split('\n');

    // Loop through the data
    for (var i = 0; i < dataArray.length; i++) {

        // Get the current line
        var currentLine = dataArray[i];

        // check if it contains a pair of any two letters that appears at least twice in the string without overlapping
        if (currentLine.match(/(..).*\1/)) {

            // check if it contains at least one letter which repeats with exactly one letter between them
            if (currentLine.match(/(.).\1/)) {

                niceones++;

            }

        }
    }

    console.log("There are " + niceones + " nice strings.");
});