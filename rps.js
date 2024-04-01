let score = 0;
let Cscore = 0;
const list = ["Rock", "Paper", "Scissors"];

function setScore() {
  if (localStorage.getItem("score") != null) {
    score = Number(localStorage.getItem("score"));
    Cscore = Number(localStorage.getItem("Cscore"));
    document.getElementById("score").innerHTML = score;
    document.getElementById("Cscore").innerHTML = Cscore;
    console.log("present");
  } else {
    console.log("test");
  }
}

function removeBorders() {
  document.getElementById("Rock").style.border = "0";
  document.getElementById("Paper").style.border = "0";
  document.getElementById("Scissors").style.border = "0";
  document.getElementById("rockImage").style.border = "0";
  document.getElementById("paperImage").style.border = "0";
  document.getElementById("scissorsImage").style.border = "0";
}

function getRandomItem() {
  return list[Math.floor(Math.random() * list.length)];
}

function determineWinner(item, CItem) {
  removeBorders();
  document.getElementById(item).style.border = "#1000b5 2px dashed";
  document.getElementById(CItem.toLowerCase() + "Image").style.border =
    "#1000b5 2px dashed";

  if (
    (item == "Rock" && CItem == "Scissors") ||
    (item == "Paper" && CItem == "Rock") ||
    (item == "Scissors" && CItem == "Paper")
  ) {
    score += 1;
    return "You";
  } else if (item == CItem) {
    return "Draw";
  } else {
    Cscore += 1;
    return "Computer";
  }
}

function updateGameResult(item, CItem, winner) {
  if (winner != "Draw") {
    document.getElementById("result").innerHTML = winner + " Won!";
  } else {
    document.getElementById("result").innerHTML = "Its a draw";
  }
  document.getElementById("score").innerHTML = score;
  document.getElementById("Cscore").innerHTML = Cscore;
  localStorage.setItem("score", score);
  localStorage.setItem("Cscore", Cscore);
}
function playGame(item) {
  console.log(localStorage.getItem("lastname"));

  const CItem = getRandomItem();
  const winner = determineWinner(item, CItem);
  updateGameResult(item, CItem, winner);
}

function reset() {
  score = 0;
  Cscore = 0;
  updateGameResult("", "", "");
  document.getElementById("result").innerHTML = "";
}

// Example usage:
// Call playGame("Rock") or playGame("Paper") or playGame("Scissors")
