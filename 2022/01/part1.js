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
        console.log(elves.sort((a, b) => b - a)[0]);
    }
};