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

            // Loop through the array again
            for (let k = 0; k < dataArray.length; k++) {

                // Get the first, second and third number
                let firstNumber = parseInt(dataArray[i]);
                let secondNumber = parseInt(dataArray[j]);
                let thirdNumber = parseInt(dataArray[k]);

                // Check if the numbers added are equal to 2020
                if (firstNumber + secondNumber + thirdNumber === 2020) {

                    // Print the answer
                    console.log(firstNumber * secondNumber * thirdNumber);
                }
            }
            k = 0;
        }
        j = 0;
    }
});