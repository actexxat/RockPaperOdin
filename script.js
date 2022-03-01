"use strict";
let scorePC = 0;
let scorePL = 0;
let scorePc = document.getElementsByTagName("h2")[0];
let scorePl = document.getElementsByTagName("h2")[1];
const btns = document.getElementsByTagName("button");
const h1 = document.getElementsByTagName("h1")[0];
const reset = document.querySelector(".reset");
Array.from(btns).forEach((btn) => btn.addEventListener("click", playerChoice));
reset.addEventListener("click", resetGame);

function resetGame() {
  btns[0].disabled = false;
  btns[1].disabled = false;
  btns[2].disabled = false;
  scorePC = 0;
  scorePL = 0;
  scorePc.textContent = "-";
  scorePl.textContent = "-";
  h1.textContent = "Game On!";
}

function playerChoice() {
  let yourPlay = event.target.className;
  game(yourPlay);
}

const choices = ["rock", "paper", "scissors"];
let choice;
function picker() {
  let choiceNo = Math.floor(Math.random() * 3);
  choice = choices[choiceNo];
  return choice;
}
function game(yourPlay) {
  picker();
  console.log(choice, yourPlay);
  if (yourPlay == choice) {
    h1.textContent = "Draw";
  } else if (yourPlay == "rock" && choice == "paper") {
    h1.textContent = "Computer Wins!!";
    scorePC++;
    scorePc.textContent = `PC Score: ${scorePC}`;
  } else if (yourPlay == "paper" && choice == "rock") {
    h1.textContent = "You Win!!";
    scorePL++;
    scorePl.textContent = `Player Score: ${scorePL}`;
  } else if (yourPlay == "scissors" && choice == "paper") {
    h1.textContent = "You Win!";
    scorePL++;
    scorePl.textContent = `Player Score: ${scorePL}`;
  } else if (yourPlay == "paper" && choice == "scissors") {
    h1.textContent = "Computer Wins!";
    scorePC++;
    scorePc.textContent = `PC Score: ${scorePC}`;
  } else if (yourPlay == "rock" && choice == "scissors") {
    h1.textContent = "You Win!";
    scorePL++;
    scorePl.textContent = `Player Score: ${scorePL}`;
  } else if (yourPlay == "scissors" && choice == "rock") {
    h1.textContent = "Computer Wins!";
    scorePC++;
    scorePc.textContent = `PC Score: ${scorePC}`;
  }
  if (scorePC == 5 || scorePL == 5) {
    btns[0].disabled = true;
    btns[1].disabled = true;
    btns[2].disabled = true;
    if (scorePC == 5) h1.textContent = "PC Beats Player!! - Reset";
    else if (scorePL == 5) h1.textContent = " Player beats PC! - Reset";
  }
}
