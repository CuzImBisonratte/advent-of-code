const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8");

const elves = input.split("\n\n");

for (let i = 0; i < elves.length; i++) {
    elf = elves[i];
    let sum = 0;
    elf.split("\n").forEach((num) => {
        sum += parseInt(num);
    });
    elves[i] = sum;
    if (i == elves.length - 1) {
        elves.sort((a, b) => b - a);
        console.log(elves[0] + elves[1] + elves[2]);
    }
};