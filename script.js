let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreBox = document.querySelector("#user-score");
const compScoreBox = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3); // random index(randIdx) is generated here
  return options[randIdx];
};

const drawGame = () => {
  console.log("it's a draw!!");
  msg.innerText = "it's a draw!!";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("you won!!");
    userScore++;
    userScoreBox.innerText = userScore;
    msg.innerText = `You Won!!! your ${userChoice} beats  ${compChoice}`;
  } else {
    console.log("you lost!!");
    compScore++;
    compScoreBox.innerText = compScore;

    msg.innerText = `You lost!!!  ${compChoice} beats your ${userChoice}`;
  }
};

const platGame = (userChoice) => {
  console.log(`user choice = ${userChoice}`);
  // generate computer choice
  const compChoice = genCompChoice();
  console.log(`comp choice = ${compChoice}`);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choices);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    platGame(userChoice);
  });
});
