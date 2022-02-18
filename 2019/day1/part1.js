// Create all needed variables
var full_fuel_amount = 0;

// Get needed modules
const fs = require('fs');

// Read the file input.txt
fs.readFile('input.txt', function(err, data) {

    // If there is an error log it
    if (err) { return console.log(err); }

    // Get the number of lines in the file
    var numLines = data.toString().split('\n').length - 1;

    // Loop through the lines
    for (var i = 0; i < numLines; i++) {

        // Get the current line
        var currentLine = data.toString().split('\n')[i];

        // Get the number on the current line
        var currentNum = parseInt(currentLine);

        // Devide the number by 3
        var fuel_amount = currentNum / 3;

        // Round the number down
        fuel_amount = Math.floor(fuel_amount);

        // Subtract 2
        fuel_amount = fuel_amount - 2;

        // Add the fuel amount to the total
        full_fuel_amount += fuel_amount;
    }

    // Log the total fuel amount
    console.log(full_fuel_amount);
});