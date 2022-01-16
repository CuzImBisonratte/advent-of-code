// Create all needed variables
var horizontal = 0;
var vertical = 0;
var aim = 0;

// Get the filesystem module
var fs = require('fs');

// Read the file input.txt line by line
fs.readFile('input.txt', 'utf8', function(err, data) {
    if (err) throw err;

    // Split the file into an array of lines
    var lines = data.split('\n');

    // Remove the last line
    lines.pop();

    // Loop through the lines
    for (var i = 0; i < lines.length; i++) {

        // Get the current line
        var line = lines[i];

        // Check if the current line starts with "forward"
        if (line.startsWith("forward")) {

            // Split the line into an array of words
            var words = line.split(" ");

            // Get the number of steps
            var steps = parseInt(words[1]);

            // Add the number of steps to the horizontal variable
            horizontal += steps;

            // Add (aim * steps) to the vertical variable
            vertical += (aim * steps);

        } // Check if the current line starts with "down"
        else if (line.startsWith("down")) {

            // Split the line into an array of words
            var words = line.split(" ");

            // Get the number of steps
            var steps = parseInt(words[1]);

            // Add the number of steps to the aim variable
            aim += steps;

        } // Check if the current line starts with "up"
        else if (line.startsWith("up")) {

            // Split the line into an array of words
            var words = line.split(" ");

            // Get the number of steps
            var steps = parseInt(words[1]);

            // Add the number of steps to the aim variable
            aim -= steps;

        } // Error output 
        else {
            console.log("Error in line " + (i + 1) + ": " + line);
        }
    }

    // Get the answer (multiply the horizontal and vertical variables)
    var answer = horizontal * vertical;

    // Print the result
    console.log("Gone through " + lines.length + " lines.");
    console.log("The horizontal distance is " + horizontal + ".");
    console.log("The vertical distance is " + vertical + ".");
    console.log("The answer is " + answer + ".");
});