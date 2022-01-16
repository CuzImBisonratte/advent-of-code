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

        // Check if there are at least 3 vowels
        if (currentLine.match(/[aeiou].*[aeiou].*[aeiou]/)) {

            // Check if there is two times the same letter in a row
            if (currentLine.match(/(.)\1/)) {


                // Chck if it contains the string "ab" or "cd" or "pq" or "xy"
                if (currentLine.match(/ab|cd|pq|xy/)) {} else {

                    niceones++;

                }
            }

        }
    }

    console.log("There are " + niceones + " nice strings.");
});