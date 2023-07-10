window.addEventListener("load", (prompt) => {
    let player1Name = prompt("Please provide a name for player 1.", "Enter first player's name here.");
    document.getElementById("player1Name").innerHTML = player1Name;
}
);

document.getElementById("button").addEventListener("click", showChoice);

function getRandom(array) {
  const randomIndex1 = Math.floor(Math.random() * array.length);
  const choice1 = array[randomIndex1];

  const remainingChoices = array.filter((_, index) => index !== randomIndex1);

  const randomIndex2 = Math.floor(Math.random() * remainingChoices.length);
  const choice2 = remainingChoices[randomIndex2];

  return [choice1, choice2];
}

const choices = ["ROCK", "PAPER", "SCISSORS"];
const [randomChoice1, randomChoice2] = getRandom(choices);
console.log(randomChoice1, randomChoice2);

const choiceArray = [randomChoice1, randomChoice2];

function showChoice(choiceArray) {
  showPlayer1(randomChoice1);
  showPlayer2(randomChoice2);
}

function showPlayer1(randomChoice1) {
  document.getElementById("p1choice").innerHTML = randomChoice1;
}

function showPlayer2(randomChoice2) {
  document.getElementById("p2choice").innerHTML = randomChoice2;
}

function resetChoice(show) {
  document.getElementById("p2choice").innerHTML = " ";
  document.getElementById("p1choice").innerHTML = " ";
}

document.getElementById("reset").addEventListener("click", resetChoice);
