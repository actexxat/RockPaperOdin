"use strict";
let scorePCcount = 0;
let scorePLcount = 0;
let scorePc = document.getElementsByTagName("h2")[0];
let scorePl = document.getElementsByTagName("h2")[1];
const btns = document.getElementsByTagName("button");
const h1 = document.getElementsByTagName("h1")[0];
const reset = document.querySelector(".reset");

const WIN = {
  'rock': 'scissors',
  'paper': 'rock',
  'scissors': 'paper',
}


Array.from(btns).forEach((btn) => btn.addEventListener("click", playerChoice));
reset.addEventListener("click", resetGame);

function resetGame() {
  btns[0].disabled = false;
  btns[1].disabled = false;
  btns[2].disabled = false;
  scorePCcount = 0;
  scorePLcount = 0;
  scorePc.textContent = "-";
  scorePl.textContent = "-";
  h1.textContent = "Game On!";
}

function playerChoice(event) {
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
  } else if (WIN[yourPlay] ==  choice) {
    h1.textContent = "You Win!!";
    scorePLcount++;
    scorePl.textContent = `Your Score: ${scorePLcount}`;
  }else{
    h1.textContent = "Computer Wins!!";
    scorePCcount++;
    scorePc.textContent = `PC Score: ${scorePCcount}`;

  }
  if (scorePCcount == 5 || scorePLcount == 5) {
    btns[0].disabled = true;
    btns[1].disabled = true;
    btns[2].disabled = true;
    if (scorePCcount == 5) h1.textContent = "PC Beat You!! - Reset";
    else if (scorePLcount == 5) h1.textContent = " You beat PC! - Reset";
  }
}
