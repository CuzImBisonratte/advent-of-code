const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8");

// A/X = Rock
// B/Y = Paper
// C/Z = Scissors

let score = 0;

input.split("\n").forEach(line => {
    const opponent = line.split(" ")[0];
    const you = line.split(" ")[1];
    let score_round = 0;
    if (opponent.charCodeAt(0) == you.charCodeAt(0) - 23) score_round = 3;
    else switch (opponent) {
        case "A":
            if (you == "Y") score_round = 6;
            else score_round = 0;
            break;
        case "B":
            if (you == "Z") score_round = 6;
            else score_round = 0;
            break;
        case "C":
            if (you == "X") score_round = 6;
            else score_round = 0;
            break;
    }
    score_round += you.charCodeAt(0) - "X".charCodeAt(0) + 1;
    score += score_round;
});

console.log(score);