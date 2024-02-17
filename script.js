"use strict";
let scorePCcount = 0;
let scorePLcount = 0;
let scorePc = document.getElementsByClassName("pc-score")[0];
let scorePl = document.getElementsByClassName("player-score")[0]
const BTNS = document.getElementsByTagName("button");
const TITLE = document.getElementsByTagName("h1")[0];
const RESET = document.querySelector(".reset");

const WIN = {
  'rock': 'scissors',
  'paper': 'rock',
  'scissors': 'paper',
}


Array.from(BTNS).forEach((btn) => btn.addEventListener("click", playerChoice));
RESET.addEventListener("click", resetGame);

function resetGame() {
  BTNS[0].disabled = false;
  BTNS[1].disabled = false;
  BTNS[2].disabled = false;
  scorePCcount = 0;
  scorePLcount = 0;
  scorePc.textContent = 0;
  scorePl.textContent = 0;
  TITLE.textContent = "Game On!";
  TITLE.style.color = 'black'

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
  if (yourPlay == choice) {
    TITLE.textContent = "Draw";
  } else if (WIN[yourPlay] ==  choice) {
    TITLE.textContent = "You Win!!";
    scorePLcount++;
    scorePl.textContent = scorePLcount;
  }else{
    TITLE.textContent = "Computer Wins!!";
    scorePCcount++;
    scorePc.textContent = scorePCcount;

  }
  if (scorePCcount == 5 || scorePLcount == 5) {
    BTNS[0].disabled = true;
    BTNS[1].disabled = true;
    BTNS[2].disabled = true;
    if (scorePCcount == 5){
      TITLE.textContent = "You Lost :( !!";
      TITLE.style.color = 'red'
    } 
    else if (scorePLcount == 5) {
      TITLE.textContent = " You Won!!!";
      TITLE.style.color = 'green'

    }
  }
}
