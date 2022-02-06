"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Timer
let timer;
const timerStart = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    document.querySelector(".timer").textContent = `${min}:${sec}`;
    
    // Condition
    if (time == 0) {
      clearInterval(timer);
      alert("You Are Lose !!! 😥");
      document.querySelector(".message").textContent = "You Are Lose 😥 !!!";
      document.querySelector(".main").textContent = "Game Over";
      document.querySelector("body").style.backgroundColor = "red";
      time--;
    }
  },
  let time = 120;

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
timerStart();

// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
  const guess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!guess) {
    alert((document.querySelector(".message").textContent = "No Number!"));
    displayMessage("No Number !");
    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number!";
    displayMessage("Correct Message 🎉 !!!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#8ea604";
    alert("Congratulations; You are Great 🎉 !!!");
    document.querySelector(".number").style.width = "200px";

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent = guess > secretNumber ? "Too High" : "Too Low";
      displayMessage(guess > secretNumber ? "Too High" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You lost the game!";
      displayMessage("You lost the game 😥 !!!");
    }
  }
  // when guess is low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
    }
  }

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#161400";
    document.querySelector(".number").style.width = "150px";
    //Timer Function
    if (timer) clearInterval(timer);

    timer = timerStart();
  });
});
