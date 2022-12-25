const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8");

// A = Rock
// B = Paper
// C = Scissors
// X = Lose
// Y = Draw
// Z = Win

let score = 0;

input.split("\n").forEach(line => {
    let you = "";
    const opponent = line.split(" ")[0];
    const round_end = line.split(" ")[1];
    if (round_end == "Y") you = opponent;
    else if (round_end == "X") {
        if (opponent == "A") you = "C";
        else if (opponent == "B") you = "A";
        else you = "B";
    } else if (round_end == "Z") {
        if (opponent == "A") you = "B";
        else if (opponent == "B") you = "C";
        else you = "A";
    }
    let score_round = 0;
    if (round_end != "Y") switch (opponent) {
        case "A":
            if (you == "B") score_round = 6;
            else score_round = 0;
            break;
        case "B":
            if (you == "C") score_round = 6;
            else score_round = 0;
            break;
        case "C":
            if (you == "A") score_round = 6;
            else score_round = 0;
            break;
    }
    else score_round = 3;
    score_round += you.charCodeAt(0) - "A".charCodeAt(0) + 1;
    score += score_round;
});

console.log(score);