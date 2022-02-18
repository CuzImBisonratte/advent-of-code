currentPos = 5;

output = "";

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
        var line = data.toString().split('\n')[i];

        // Get the number of characters in the line
        var numChars = line.length;

        // Loop through the characters

        for (var j = 0; j < numChars; j++) {

            // Get the current character
            var char = line.charAt(j);

            // Switch on the character
            switch (char) {
                // Up
                case 'U':
                    // If the current position is not in the top row
                    if (currentPos > 3) {
                        // Move up
                        currentPos -= 3;
                    }
                    break;
                    // Down
                case 'D':
                    // If the current position is not in the bottom row
                    if (currentPos < 7) {
                        // Move down
                        currentPos += 3;
                    }
                    break;
                    // Left
                case 'L':
                    // If the current position is not in the left column
                    if (currentPos % 3 != 1) {
                        // Move left
                        currentPos--;
                    }
                    break;
                    // Right
                case 'R':
                    // If the current position is not in the right column
                    if (currentPos % 3 != 0) {
                        // Move right
                        currentPos++;
                    }
                    break;
            }
        }

        // Add the current position to the output string
        output += currentPos;
    }
    // Log the output
    console.log(output);
});