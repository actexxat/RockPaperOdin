"use strict";
let scorePCcount = 0;
let scorePLcount = 0;

let scorePc = document.getElementsByClassName("pc-score")[0];
let scorePl = document.getElementsByClassName("player-score")[0]

const TITLE = document.getElementsByTagName("h1")[0];
const RESET = document.querySelector(".reset");


const ROCK = document.getElementById("rock")
const PAPER = document.getElementById("paper")
const SCISSORS = document.getElementById("scissors")
const OPTNS = [ROCK, PAPER, SCISSORS]

const WIN = {
  'rock': 'scissors',
  'paper': 'rock',
  'scissors': 'paper',
}

const choices = ["rock", "paper", "scissors"];

ROCK.addEventListener('click', playerChoice)
PAPER.addEventListener('click', playerChoice)
SCISSORS.addEventListener('click', playerChoice)



RESET.addEventListener("click", resetGame);

function resetGame() {
  scorePCcount = 0;
  scorePLcount = 0;
  scorePc.textContent = 0;
  scorePl.textContent = 0;
  TITLE.textContent = "Game On!";
  TITLE.style.color = 'black'
  OPTNS.forEach(x=>x.style.pointerEvents = '')


}

function playerChoice(event) {
  let yourPlay = event.target.parentElement.id;
  game(yourPlay);
}


function picker() {
  let choiceNo = Math.floor(Math.random() * 3);
  let pick = choices[choiceNo];
  return pick;
}
function game(yourPlay) {
 let choice = picker();
 console.log(choice, yourPlay)
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
    if (scorePCcount == 5){
      TITLE.textContent = "You Lost :( !!";
      TITLE.style.color = 'red'
      OPTNS.forEach(x=>x.style.pointerEvents = 'none')

    } 
    else {
      TITLE.textContent = " You Won!!!";
      TITLE.style.color = 'green'
      OPTNS.forEach(x=>x.style.pointerEvents = 'none')

    }
  }
}


