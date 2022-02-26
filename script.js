"use strict";
let yourPlay = prompt("Enter your Choice!");
const choices = ["rock", "paper", "scissors"];
let choice;
game(yourPlay.toLowerCase());
function picker() {
  let choiceNo = Math.floor(Math.random() * 3);
  choice = choices[choiceNo];
  return choice;
}
function game(yourPlay) {
  picker();
  console.log(choice, yourPlay);
  if (yourPlay == choice) {
    console.log("Draw");
  } else if (yourPlay == "rock" && choice == "paper") {
    console.log("Computer Wins!!");
  } else if (yourPlay == "paper" && choice == "rock") {
    console.log("You Win!!");
  } else if (yourPlay == "scissors" && choice == "paper") {
    console.log("You Win!");
  } else if (yourPlay == "paper" && choice == "scissors") {
    console.log("Computer Wins!");
  } else if (yourPlay == "rock" && choice == "scissors") {
    console.log("You Win!");
  } else if (yourPlay == "scissors" && choice == "rock") {
    console.log("Computer Wins!");
  }
}
