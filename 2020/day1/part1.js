// Modules
const fs = require('fs');

// Variables


// Read the file
fs.readFile('input.txt', 'utf8', (err, data) => {

    // Check for errors
    if (err) throw err;

    // Split the data into an array
    let dataArray = data.split('\n');

    // Loop through the array
    for (let i = 0; i < dataArray.length; i++) {

        // Loop through the array again
        for (let j = 0; j < dataArray.length; j++) {

            // Get the first and second number
            let firstNumber = parseInt(dataArray[i]);
            let secondNumber = parseInt(dataArray[j]);

            // Check if the numbers multiplied are equal to 2020
            if (firstNumber + secondNumber === 2020) {

                // Print the answer
                console.log(firstNumber * secondNumber);
            }
        }
        j = 0;
    }
});