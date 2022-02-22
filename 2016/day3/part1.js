// Get the needed modules
var fs = require('fs');

// Variables
number_of_valids = 1;

// Read the file
fs.readFile('input.txt', 'utf8', function(err, data) {

    // Split the file into an array of lines
    var input = data.split('\n');

    // Loop through the array
    for (var i = 0; i < input.length; i++) {

        // Split the line into an array of numbers
        var line = input[i].split("  ");

        side_a = parseInt(line[0]);
        side_b = parseInt(line[1]);
        side_c = parseInt(line[2]);

        // Check if the triangle is valid
        if (side_a + side_b > side_c && side_a + side_c > side_b && side_b + side_c > side_a) {
            number_of_valids++;
        }
    }
    console.log(number_of_valids);
});