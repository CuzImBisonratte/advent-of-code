// Create all needed variables
var full_wrapping = 0;

// Get the filesystem module
var fs = require('fs');

// Read the file input.txt
fs.readFile('input.txt', function(err, data) {

    // If there is an error log it
    if (err) { return console.log(err); }

    // Convert the data to an array
    var dataArray = data.toString().split('\n');

    // Get the number of lines
    var numLines = dataArray.length;

    // Loop through the data
    for (var i = 0; i < numLines; i++) {

        // Get the current line
        var line = dataArray[i];

        // Split the line at "x"
        var lineArray = line.split('x');

        // Get the full surface area on all sides
        var full_surface = 2 * (lineArray[0] * lineArray[1] + lineArray[0] * lineArray[2] + lineArray[1] * lineArray[2]);

        // Get the surface area from the smallest side
        var surface = Math.min(lineArray[0] * lineArray[1], lineArray[0] * lineArray[2], lineArray[1] * lineArray[2]);

        // Add the full_surface and surface
        full_wrapping += full_surface + surface;

    };

    // Log the full wrapping
    console.log("The total wrapping needed is " + full_wrapping + " square feet.");

});