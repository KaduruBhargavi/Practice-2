"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//creating display message function to display message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//adding event listener to check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //checking various situations for the input value
  if (!guess) {
    displayMessage("No number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessage("You lost the game");
    document.querySelector(".score").textContent = 0;
  }
});


//adding click event to the again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
});
